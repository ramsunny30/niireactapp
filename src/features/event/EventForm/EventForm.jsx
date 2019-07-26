/*global google*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import {composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate'
import { Header, Grid, Segment, Form, Button } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";


const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    initialValues: event
  };
};

const actions = { createEvent, updateEvent };

const validate = combineValidators({
  title: isRequired({message: 'The event name'}),
  category: isRequired({message: 'The category'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
  city: isRequired('city name'),
  venue: isRequired('venue address'),
  todate: isRequired('todate')

})

const category = [
  { key: "Online", text: "Online", value: "In-Person" },
  { key: "In-Person", text: "In-Person", value: "Online" }
];

class EventForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {}
  }
  onFormSubmit = values => {
    values.venueLatLng = this.state.venueLatLng;
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "../../../app/assets/user.png",
        hostedBy: 'Bob'
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/{newEvent.id}`);
    }
  };

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          cityLatLng: latlng
        })
      })
      .then(() => {
        this.props.change('city', selectedCity)
      })
  }

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          venueLatLng: latlng
        })
      })
      .then(() => {
        this.props.change('venue', selectedVenue)
      })
  }

  render() {
    const {history, initialValues, invalid, submitting, pristine} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Event Details' />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete='off'>
              <Field
                name='title'
                component={TextInput}
                placeholder='Give your event a name'
              />
              <Field
                name='category'
                component={SelectInput}
                options={category}
                placeholder='Type of Event'
              />
              <Field
                name='description'
                component={TextArea}
                placeholder='Tell us about your event'
              />

              <Header sub color='teal' content='Event Location Details' />
              <Field
                name='city'
                component={PlaceInput}
                options={{types: ['(cities)']}}
                onSelect={this.handleCitySelect}
                placeholder='Event city'
              />
              <Field
                name='venue'
                component={PlaceInput}
                options={{
                  location: new google.maps.LatLng(this.state.cityLatLng),
                  radius: 1000,
                  types: ['establishment']
                }}
                onSelect={this.handleVenueSelect}
                placeholder='Event venue'
              />
              <Header sub color='teal' content='Time of Event' />
              <Field
                name='fromdate'
                component={DateInput}
                dateFormat='dd LLL yyyy h:mm a'
                showTimeSelect
                timeFormat='HH:mm'
                placeholder='Event From Date'
              />
              <Field
                name='todate'
                component={DateInput}
                dateFormat='dd LLL yyyy h:mm a'
                showTimeSelect
                timeFormat='HH:mm'
                placeholder='Event to Date'
              />

              <br />
              <Button disabled={invalid || submitting || pristine} positive type='submit'>
                Submit
              </Button>
              <Button onClick={initialValues.id 
              ? () =>  history.push(`/events/${initialValues.id}`)
              : () =>  history.push(`/events`)
            } 
            type='button'>
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(
  mapState,
  actions
)(reduxForm({ form: 'eventForm', validate })(EventForm));

