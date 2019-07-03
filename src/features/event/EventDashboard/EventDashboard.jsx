import React, { Component } from "react";
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Button } from "semantic-ui-react/dist/commonjs/";
import cuid from "cuid";
import { connect } from "react-redux";
//import Investor_Img from '../assets/Investor_img.jpg'
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";

const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class EventDashboard extends Component {
  state = {
    //events: eventsFromDashboard,
    isOpen: false,
    selectedEvent: null
  };

  // handleFormOpen = () => {
  //   this.setState({
  //     isOpen: true
  //   })
  // }

  // handleIsOpenToggle = () => {
  //   this.setState(({ isOpen }) => ({
  //     isOpen: !isOpen
  //   }));
  // };

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    // newEvent.id = Math.round(Math.random() * 1000);
    // newEvent.id=3;
    newEvent.hostPhotoURL = "https://randomuser.me/api/portraits/women/3.jpg";
    //'/assets/Investor_img.jpg';
    // const updatedEvents = [...this.state.events, newEvent];
    this.setState(({ events }) => ({
      // events: updatedEvents,'
      events: [...events, newEvent],
      isOpen: false
    }));
  };

  handleSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.setState(({ events }) => ({
      events: events.map(event => {
        if (event.id === updatedEvent.id) {
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    }));
  };

  handleDeleteEvent = id => {
    this.setState(({ events }) => ({
      events: events.filter(e => e.id !== id)
    }));
  };
  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <React.Fragment>
        {/* <Button floated="left" positive inverted content="Create Event" /> */}
        <Grid>
          <Grid.Column width={3}>
            <div class='ui card'>
              <a class='header' href='#'>
                <h2>Chats</h2>
              </a>
              <a class='image' href='#'>
                <img src={require("../../../app/assets/Women1.jpg")} />
              </a>
              <div class='content'>
                <a class='header' href='#'>
                  Samantha Williams
                </a>
                <div class='meta'>
                  <a>My Chat History</a>
                </div>
              </div>
            </div>
            <div class='ui card'>
              <a class='header' href='#'>
                <h2>Groups</h2>
              </a>
              <a class='image' href='#'>
                <img src={require("../../../app/assets/Women1.jpg")} />
              </a>
              <div class='content'>
                <div class='meta'>
                  <a>My Groups</a>
                </div>
              </div>
            </div>
            <div class='ui card'>
              <a class='header' href='#'>
                <h2>News</h2>
              </a>
              <a class='image' href='#'>
                <img src={require("../../../app/assets/Women1.jpg")} />
              </a>
              <div class='content'>
                <div class='meta'>
                  <a>My News</a>
                </div>
              </div>
            </div>
            <div class='ui card'>
              <a class='header' href='#'>
                <h2>Trending</h2>
              </a>
              <a class='image' href='#'>
                <img src={require("../../../app/assets/Women1.jpg")} />
              </a>
              <div class='content'>
                <div class='meta'>
                  <a>Details of Trending</a>
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div class='content'>
              <div class='right floated author'>
                <div class='ui card fluid'>
                  <a class='image' href='#'>
                    <img
                      class='ui fluid image'
                      src={require("../../../app/assets/Women1.jpg")}
                    />
                  </a>
                  <a class='header' href='#'>
                    Name
                  </a>

                  <div class='meta'>
                    <h4> Designation </h4>
                    <h4> Intrests</h4>
                    <h4> Metrices </h4>
                  </div>
                </div>
              </div>
            </div>

            <EventList
              events={events}
              selectEvent={this.handleSelectEvent}
              deleteEvent={this.handleDeleteEvent}
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <div class='ui card'>
              <a class='header' href='#'>
                <h2>Calender</h2>
              </a>
              <a class='image' href='#'>
                <img src={require("../../../app/assets/Women1.jpg")} />
              </a>
              <div class='content'>
                <a class='header' href='#'>
                  Calender
                </a>
                <div class='meta'>
                  <a>Details of Calender</a>
                </div>
              </div>
            </div>

            <div class='ui card'>
            <a class='header' href='#'>
                <h2>Events</h2>
              </a>
              <a class='image' href='#'>
                <img src={require("../../../app/assets/Women1.jpg")} />
              </a>
              <div class='content'>
                <div class='meta'>
                  <a>Details of Events</a>
                </div>
              </div>
            </div>
            <Button
              onClick={this.handleCreateFormOpen}
              positive
              content='Create Event'
            />
            {isOpen && (
              <EventForm
                key={selectedEvent ? selectedEvent.id : 0}
                updateEvent={this.handleUpdateEvent}
                selectedEvent={selectedEvent}
                createEvent={this.handleCreateEvent}
                cancelFormOpen={this.handleFormCancel}
              />
            )}
            {/* <EventForm createEvent={this.handleCreateEvent} handleCancel={this.handleCancel} />} */}

            <div class='ui card'>
              <a class='header' href='#'>
                <h2>Adds/Promotions</h2>
              </a>
              <a class='image' href='#'>
                <img src={require("../../../app/assets/Women1.jpg")} />
              </a>
              <div class='content'>
                <div class='meta'>
                  <a>Details of Adds</a>
                </div>
              </div>
            </div>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}
export default connect(
  mapState,
  actions
)(EventDashboard);
