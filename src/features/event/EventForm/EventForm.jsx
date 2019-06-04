import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

class EventForm extends Component {
    render() {
      const {handleCancel} = this.props;
        return (
                  <Segment>
                    <Form>
                      <Form.Field>
                        <label>Event Title</label>
                        <input placeholder="First Name" />
                      </Form.Field>
                      <br />
                      <Form.Field>
                        <label>Event From Date</label>
                        <input type="date" placeholder="Event To Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>Event To Date</label>
                        <input type="date" placeholder="Event To Date" />
                      </Form.Field>
                      <br />
                      <Form.Field>
                        <label>City</label>
                        <input placeholder="City event is taking place" />
                      </Form.Field>
                      <br />
                      <Form.Field>
                        <label>Venue</label>
                        <input placeholder="Enter the Venue of the event where organized" />
                      </Form.Field>
                      <br />
                      <Form.Field>
                        <label>Hosted By</label>
                        <input placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <br />
                      {/* <Form.Field>
                        <label>Description of the event</label>
                        <input placeholder="Enter the Description of the event" />
                      </Form.Field> */}
                      <br />
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button onClick= {handleCancel} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}
export default EventForm
