/*global google*/
import React, { Component, Fragment } from "react";
import {
  Grid,
  Menu,
  Segment,
  Divider,
  Image,
  Header,
  Form,
  Button,
  List,
  Dropdown
} from "semantic-ui-react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import { createEvent, updateEvent } from "../../event/eventActions";
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";
import CheckboxInput from "../../../app/common/form/CheckboxInput";
import RadioGroupFAType from "../../../app/common/form/RadioGroupFAType";

const mystates = [
  {
    key: "AL",
    text: "Alabama",
    value: "AL"
  },
  {
    key: "AK",
    text: "Alaska",
    value: "AK"
  },
  {
    key: "AS",
    text: "American Samoa",
    value: "AS"
  },
  {
    key: "AZ",
    text: "Arizona",
    value: "AZ"
  },
  {
    key: "AR",
    text: "Arkansas",
    value: "AR"
  },
  {
    key: "CA",
    text: "California",
    value: "CA"
  },
  {
    key: "CO",
    text: "Colorado",
    value: "CO"
  },
  {
    key: "CT",
    text: "Connecticut",
    value: "CT"
  },
  {
    key: "DE",
    text: "Delaware",
    value: "DE"
  },
  {
    key: "DC",
    text: "District Of Columbia",
    value: "DC"
  },
  {
    key: "FM",
    text: "Federated States Of Micronesia",
    value: "FM"
  },
  {
    key: "FL",
    text: "Florida",
    value: "FL"
  },
  {
    key: "GA",
    text: "Georgia",
    value: "GA"
  },
  {
    key: "GU",
    text: "Guam",
    value: "GU"
  },
  {
    key: "HI",
    text: "Hawaii",
    value: "HI"
  },
  {
    key: "ID",
    text: "Idaho",
    value: "ID"
  },
  {
    key: "IL",
    text: "Illinois",
    value: "IL"
  },
  {
    key: "IN",
    text: "Indiana",
    value: "IN"
  },
  {
    key: "IA",
    text: "Iowa",
    value: "IA"
  },
  {
    key: "KS",
    text: "Kansas",
    value: "KS"
  },
  {
    key: "KY",
    text: "Kentucky",
    value: "KY"
  },
  {
    key: "LA",
    text: "Louisiana",
    value: "LA"
  },
  {
    key: "ME",
    text: "Maine",
    value: "ME"
  },
  {
    key: "MH",
    text: "Marshall Islands",
    value: "MH"
  },
  {
    key: "MD",
    text: "Maryland",
    value: "MD"
  },
  {
    key: "MA",
    text: "Massachusetts",
    value: "MA"
  },
  {
    key: "MI",
    text: "Michigan",
    value: "MI"
  },
  {
    key: "MN",
    text: "Minnesota",
    value: "MN"
  },
  {
    key: "MS",
    text: "Mississippi",
    value: "MS"
  },
  {
    key: "MO",
    text: "Missouri",
    value: "MO"
  },
  {
    key: "MT",
    text: "Montana",
    value: "MT"
  },
  {
    key: "NE",
    text: "Nebraska",
    value: "NE"
  },
  {
    key: "NV",
    text: "Nevada",
    value: "NV"
  },
  {
    key: "NH",
    text: "New Hampshire",
    value: "NH"
  },
  {
    key: "NJ",
    text: "New Jersey",
    value: "NJ"
  },
  {
    key: "NM",
    text: "New Mexico",
    value: "NM"
  },
  {
    key: "NY",
    text: "New York",
    value: "NY"
  },
  {
    key: "NC",
    text: "North Carolina",
    value: "NC"
  },
  {
    key: "ND",
    text: "North Dakota",
    value: "ND"
  },
  {
    key: "MP",
    text: "Northern Mariana Islands",
    value: "MP"
  },
  {
    key: "OH",
    text: "Ohio",
    value: "OH"
  },
  {
    key: "OK",
    text: "Oklahoma",
    value: "OK"
  },
  {
    key: "OR",
    text: "Oregon",
    value: "OR"
  },
  {
    key: "PW",
    text: "Palau",
    value: "PW"
  },
  {
    key: "PA",
    text: "Pennsylvania",
    value: "PA"
  },
  {
    key: "PR",
    text: "Puerto Rico",
    value: "PR"
  },
  {
    key: "RI",
    text: "Rhode Island",
    value: "RI"
  },
  {
    key: "SC",
    text: "South Carolina",
    value: "SC"
  },
  {
    key: "SD",
    text: "South Dakota",
    value: "SD"
  },
  {
    key: "TN",
    text: "Tennessee",
    value: "TN"
  },
  {
    key: "TX",
    text: "Texas",
    value: "TX"
  },
  {
    key: "UT",
    text: "Utah",
    value: "UT"
  },
  {
    key: "VT",
    text: "Vermont",
    value: "VT"
  },
  {
    key: "VI",
    text: "Virgin Islands",
    value: "VI"
  },
  {
    key: "VA",
    text: "Virginia",
    value: "VA"
  },
  {
    key: "WA",
    text: "Washington",
    value: "WA"
  },
  {
    key: "WV",
    text: "West Virginia",
    value: "WV"
  },
  {
    key: "WI",
    text: "Wisconsin",
    value: "WI"
  },
  {
    key: "WY",
    text: "Wyoming",
    value: "WY"
  }
];
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
  Firm_Name: isRequired({ message: "The Firm name" }),
  category: isRequired({ message: "The category" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters"
    })
  )(),
  city: isRequired("city name"),
  venue: isRequired("venue address"),
  todate: isRequired("todate")
});

const category = [
  { key: "Online", text: "Online", value: "In-Person" },
  { key: "In-Person", text: "In-Person", value: "Online" }
];

class Profile extends Component {
  state = { activeItem: "Basic" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  state = {
    cityLatLng: {},
    venueLatLng: {}
  };
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
        hostedBy: "Bob"
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
        });
      })
      .then(() => {
        this.props.change("city", selectedCity);
      });
  };

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          venueLatLng: latlng
        });
      })
      .then(() => {
        this.props.change("venue", selectedVenue);
      });
  };

  render() {
    const { activeItem } = this.state;
  
    const {
      history,
      initialValues,
      invalid,
      submitting,
      pristine
    } = this.props;

    return (
      <Fragment>
        <Image src={require("../../../app/assets/financial_advisor.jpg")} size='small' />
        <Segment.Group horizontal>
          <Segment>
            <h2>My Profile</h2>
          </Segment>
          <Segment>
            <h2>Name</h2>
          </Segment>
          <Segment>
            <h2>Role/Sub Role</h2>
          </Segment>
          <Segment>
            <h2>Entity Type</h2>
          </Segment>
        </Segment.Group>
        <Divider />
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name='Basic'
                active={activeItem === "Basic"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Address'
                active={activeItem === "Address"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Business'
                active={activeItem === "Business"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Contact'
                active={activeItem === "Contact"}
                onClick={this.handleItemClick}
              />
               <Menu.Item
                name='Web'
                active={activeItem === "Web"}
                onClick={this.handleItemClick}
              />

               <Menu.Item
                name='Organization'
                active={activeItem === "Organization"}
                onClick={this.handleItemClick}
              />

              <Menu.Item
                name='Clients'
                active={activeItem === "Clients"}
                onClick={this.handleItemClick}
              />


             <Menu.Item
                name='Compensation'
                active={activeItem === "Compensation"}
                onClick={this.handleItemClick}
              />


             <Menu.Item
                name='Activities'
                active={activeItem === "Activities"}
                onClick={this.handleItemClick}
              />

            <Menu.Item
                name='Additional'
                active={activeItem === "Additional"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>
              <Grid>
                <Grid.Column>
                  <Segment>
                    <Form
                      onSubmit={this.props.handleSubmit(this.onFormSubmit)}
                      autoComplete='off'
                    >

                    { activeItem === "Basic" && (
                     <Fragment>
                        <Header sub
                      color='teal'
                      content='Financial Advisor Details'
                    />
                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Enter Name of the firm'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Enter Adviser Name'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Central Index Key (CIK)'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Central Registration Depository Number (CRD)'
                      />

                      <br />

                      <Field
                        name='Firm_Name'
                        component={CheckboxInput}
                        label='Exempt Reporting Adviser'
                      />

                      <Field
                        name='Firm_Name'
                        component={CheckboxInput}
                        label='Not Eligible for SEC Registration'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your Legal Entity Identifier (LEI)'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your Current Employer'
                      />

                       </Fragment>
                      )
                      }
                      { activeItem === "Address" && (
                     <Fragment>



                      <Header
                        sub
                        color='teal'
                        content='Financial Advisor Address Details'
                      />
                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your Number and Street'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your City'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your Zip / Postal Code'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your State'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your Country'
                      />
                      </Fragment>
                      )
                      }

                    { activeItem === "Business" && (
                     <Fragment>
                      <Header
                        sub
                        color='teal'
                        content='Financial Advisor Hours of operation'
                      />

                      <br />
                      <segment>
                        <Grid>
                          <Field
                            name='Firm_Name'
                            component={CheckboxInput}
                            label='Monday'
                          />
                          <Field
                            name='Firm_Name'
                            component={CheckboxInput}
                            label='Tuesday'
                          />
                          <Field
                            name='Firm_Name'
                            component={CheckboxInput}
                            label='Wednesday'
                          />
                          <Field
                            name='Firm_Name'
                            component={CheckboxInput}
                            label='Thursday'
                          />
                          <Field
                            name='Firm_Name'
                            component={CheckboxInput}
                            label='Friday'
                          />
                          <Field
                            name='Firm_Name'
                            component={CheckboxInput}
                            label='Saturday'
                          />
                          <Field
                            name='Firm_Name'
                            component={CheckboxInput}
                            label='Sunday'
                          />
                        </Grid>
                      </segment>

                      <br />
                      <br />
                      <segment>
                        <Grid>
                          <List>
                            <br />
                            <List.Item>MON-8:00 AM to 5:00 PM</List.Item>
                            <List.Item>TUE-8:00 AM to 5:00 PM</List.Item>
                            <List.Item>WED-8:00 AM to 5:00 PM</List.Item>
                            <List.Item>THU-8:00 AM to 5:00 PM</List.Item>
                            <List.Item>FRI-8:00 AM to 5:00 PM</List.Item>
                          </List>
                        </Grid>
                      </segment>
                      <br />
                      <br />
                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your Languages Spoken'
                      />
                     </Fragment>
                    )
                    }

                     { activeItem === "Contact" && (
                     <Fragment>
                      <Header
                        sub
                        color='teal'
                        content='Financial Advisor Contact'
                      />

                      <br />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your Telephone Number'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your Fax number'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your Email Address'
                      />
                      </Fragment>
                     )
                     }

                   { activeItem === "Web" && (
                     <Fragment>

                      <Header
                        sub
                        color='teal'
                        content='Financial Advisor Web and Social'
                      />

                      <br />
                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your Company Website'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your Facebook Site'
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your LinkedIn Site '
                      />

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your 	Twitter Site'
                      />
                      </Fragment>
                   )
                   }

                      { activeItem === "Organization" && (
                     <Fragment>


                      <Header
                        sub
                        color='teal'
                        content='Financial Advisor Organization Type'
                      />

                      <br />
                      <label>Organized As</label>
                      <RadioGroupFAType />

                      <br />

                      <label>Assets Under Management (AUM)</label>
                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your 	Assets Under Management (AUM)'
                      />

                      <label>Currency of Business</label>
                      <Form.Group grouped>
                        <Form.Field
                          label='USA'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='EUR'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='CHF'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='GBP'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='INR'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='concatenated with the AUM specified by the FA i.e. [Currency of Business] &[AUM]'
                          control='input'
                          type='checkbox'
                        />
                      </Form.Group>

                      <label>Fund Types Sold</label>
                      <Form.Group grouped>
                        <Form.Field
                          label='ALL'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Hedge Funds and/or Fund of Hedge Funds'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Real Asset Funds'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Private Equity Funds'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Commodity Trading Advisors'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Hybrid Funds'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Crypto Funds'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Liquid Alternatives'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Managed Futures and Structured Products'
                          control='input'
                          type='checkbox'
                        />
                      </Form.Group>

                      <label>Can do Business in (US States)</label>
                      <Form.Field>
                        <Dropdown
                          placeholder='Select State'
                          fluid
                          multiple
                          selection
                          options={mystates}
                        />
                      </Form.Field>

                      <label>State Organized In</label>
                      <Form.Field>
                        <Dropdown
                          placeholder='Select State'
                          fluid
                          multiple
                          selection
                          options={mystates}
                        />
                      </Form.Field>
                      
                      </Fragment>
                      )
                      }

                      { activeItem === "Clients" && (
                     <Fragment>

                      <Header
                        sub
                        color='teal'
                        content='Financial Advisor Clients'
                      />

                      <Form.Group grouped>
                        <label>Approximate Number of Advisory Clients</label>

                        <Form.Field
                          label='0'
                          control='input'
                          type='radio'
                          name='htmlRadios'
                        />
                        <Form.Field
                          label='1-10'
                          control='input'
                          type='radio'
                          name='htmlRadios'
                        />

                        <Form.Field
                          label='11-25'
                          control='input'
                          type='radio'
                          name='htmlRadios'
                        />
                        <Form.Field
                          label='26-50'
                          control='input'
                          type='radio'
                          name='htmlRadios'
                        />

                        <Form.Field
                          label='51-100'
                          control='input'
                          type='radio'
                          name='htmlRadios'
                        />
                        <Form.Field
                          label='101-250'
                          control='input'
                          type='radio'
                          name='htmlRadios'
                        />

                        <Form.Field
                          label='251-500'
                          control='input'
                          type='radio'
                          name='htmlRadios'
                        />
                        <Form.Field
                          label='> 500 Home many? → This will be a textbox  (only whole numbers will be allowed)'
                          control='input'
                          type='radio'
                          name='htmlRadios'
                        />
                      </Form.Group>

                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your 	
                % of Non-US Assets (Approx)'
                      />
                      <Form.Group grouped>
                        <label>
                          Type of Clients (please check all that apply)
                        </label>
                        <Form.Field
                          label='Individuals (Other than High Net Worth Individuals)'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='High Net Worth Individuals'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Banking or Thrift Institutions'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Investment Companies'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Business Development Companies'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Pooled Investment Vehicles'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Pension and Profit Sharing Plans'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Charitable Organizations'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='State or Municipal Government Entities'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Other Investment Advisers'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Insurance Companies'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Sovereign Wealth Funds and Foreign Official Institutions'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Other Corporations or Businesses (please specify) → This is a text string.'
                          control='input'
                          type='checkbox'
                        />
                      </Form.Group>
                      </Fragment>
                      )
                      }

                      { activeItem === "Compensation" && (
                     <Fragment>

                      <Header
                        sub
                        color='teal'
                        content='Financial Advisor Compensation Arrangements'
                      />

                      <Form.Group grouped>
                        <label>
                          Compensation for Investment Advisory services (please
                          check all that apply)
                        </label>
                        <Form.Field
                          label='% of Assets Under Management (AUM)'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Hourly Fees'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Subscription Fees (for a newsletter or periodical)'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Fixed Fees'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Commissions'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Performance Based Fees'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Other (please specify) → This is a text string.'
                          control='input'
                          type='checkbox'
                        />
                      </Form.Group>


                     </Fragment>
                      )
                          }

                      { activeItem === "Activities" && (
                     <Fragment>

                      <Header
                        sub
                        color='teal'
                        content='FA Advisory Activities'
                      />

                      <Form.Group grouped>
                        <label>
                          Type of Advisory services provided (please check all
                          that apply)
                        </label>
                        <Form.Field
                          label='Financial Planning Services'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Portfolio Management for Individuals'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Portfolio Management for Small Businesses'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Portfolio Management for Investment Firms'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Portfolio Management for Pooled Investment Vehicles'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Portfolio Management for Businesses (other than small businesses)'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Portfolio Management for Institutional Clients'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Pension Consulting Services'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Selection of Other Advisers (including private fund managers)'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Publication of Periodicals or Other Newsletters'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Security Ratings or Pricing Services'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Market Timing Services'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Educational Seminars / Workshops'
                          control='input'
                          type='checkbox'
                        />
                        <Form.Field
                          label='Other (please specify) → This is a text string.'
                          control='input'
                          type='checkbox'
                        />
                      </Form.Group>
                      </Fragment>
                      )
                          }

                      { activeItem === "Additional" && (
                     <Fragment>

                      <Header
                        sub
                        color='teal'
                        content='Financial Advisor Additional Information'
                      />

                      <Field
                        name='description'
                        component={TextArea}
                        placeholder='Tell us about your Qualifications'
                      />
                      <Field
                        name='description'
                        component={TextArea}
                        placeholder='Tell us about your Designations'
                      />
                      <Field
                        name='description'
                        component={TextArea}
                        placeholder='Tell us about your Memberships'
                      />
                      <Field
                        name='description'
                        component={TextArea}
                        placeholder='Tell us about your Publications'
                      />

                      <Field
                        name='description'
                        component={TextArea}
                        placeholder='Tell us about your Licenses'
                      />

                      <Field
                        name='description'
                        component={TextArea}
                        placeholder='Tell us about your Other Information'
                      />
                      <Header
                        sub
                        color='teal'
                        content='Financial Advisor Activities'
                      />
                      <Field
                        name='Firm_Name'
                        component={TextInput}
                        placeholder='Give your Firm Name'
                      />
                      <br />
                      <br />

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

                      <Header
                        sub
                        color='teal'
                        content='Event Location Details'
                      />
                      <Field
                        name='city'
                        component={PlaceInput}
                        options={{ types: ["(cities)"] }}
                        onSelect={this.handleCitySelect}
                        placeholder='Event city'
                      />
                      <Field
                        name='venue'
                        component={PlaceInput}
                        options={{
                          location: new google.maps.LatLng(
                            this.state.cityLatLng
                          ),
                          radius: 1000,
                          types: ["establishment"]
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
                      </Fragment>
                      )
                      }
                      
                    <br />
                      <Button
                        disabled={invalid || submitting || pristine}
                        positive
                        type='submit'
                      >
                        Save
                      </Button>
                      <Button
                        onClick={
                          initialValues.id
                            ? () => history.push(`/events/${initialValues.id}`)
                            : () => history.push(`/events`)
                        }
                        type='button'
                      >
                        Cancel
                      </Button>
                    </Form>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}
export default connect(
  mapState,
  actions
)(reduxForm({ form: "Profile", validate })(Profile));
