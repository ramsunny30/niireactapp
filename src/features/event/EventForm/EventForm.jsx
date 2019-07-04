import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Segment, Form, Button } from 'semantic-ui-react'

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: '',
    todate: '',
    city: '',
    venue: '',
    hostedBy: ''
  }
  if (eventId && state.events.length >0) {
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return {
    event
  }
}

class EventForm extends Component {

  state = {...this.props.event};

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent
      })
    }
  }
      
  handleFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
    } else {
      this.props.createEvent(this.state);
    }
   //console.log(this.state);
  };

 handleInputChange = ({target: {name, value}}) => {
   this.setState({
     [name]: value
   });
 };

  
    render() {
      const { title, fromdate, todate, city, venue, hostedBy, description} = this.state;
        return (
                  <Segment>
                    <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
                      <Form.Field>
                        <label>Event Title</label>
                        <input 
                          name='title'
                          onChange={this.handleInputChange}
                          value={title}
                          placeholder="Event Title" />
                      </Form.Field>
                      <br />
                      <Form.Field>
                        <label>Event From Date</label>
                        <input 
                        name='fromdate'
                        onChange={this.handleInputChange}
                        value={fromdate}
                        type="date" placeholder="Event From Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>Event To Date</label>
                        <input  
                        name='todate'
                        onChange={this.handleInputChange}
                        value={todate}
                        type="date" 
                        placeholder="Event To Date" />
                      </Form.Field>
                      <br />
                      <Form.Field>
                        <label>City</label>
                        <input 
                        name='city'
                        onChange={this.handleInputChange}
                        value={city}
                        placeholder="City event is taking place" />
                      </Form.Field>
                      <br />
                      <Form.Field>
                        <label>Venue</label>
                        <input 
                        name='venue'
                        onChange={this.handleInputChange}
                        value={venue}
                        placeholder="Enter the Venue of the event where organized" />
                      </Form.Field>
                      <br />
                      <Form.Field>
                        <label>Hosted By</label>
                        <input 
                        name='hostedBy'
                        onChange={this.handleInputChange}
                        value={hostedBy}
                        placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <br />
                      <Form.Field>
                        <label>Description of the event</label>
                        <input 
                         name='description'
                         onChange={this.handleInputChange}
                         value={description}
                        placeholder="Enter the Description of the event" />
                      </Form.Field>
                      <br />
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button onClick= {this.props.history.goBack} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}
export default connect(mapState)(EventForm);


