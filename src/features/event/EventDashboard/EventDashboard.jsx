import React, { Component } from "react";
import { Grid } from "semantic-ui-react/dist/commonjs/";
import cuid from "cuid";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
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

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "https://randomuser.me/api/portraits/women/3.jpg";
    this.props.createEvent(newEvent);
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
  };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };
  render() {
    const { events } = this.props;
    return (
      <React.Fragment>
        <Grid>
          <Grid.Column width={3}>
            <div class='ui card'>
              <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <h2>Chats</h2>
              </a>
              <a class='image' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <img src={require("../../../app/assets/Women1.jpg")} alt='userphoto'/>
              </a>
              <div class='content'>
                <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                  Samantha Williams
                </a>
                <div class='meta'>
                  <h4>My Chat History</h4>
                </div>
              </div>
            </div>
            <div class='ui card'>
              <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <h2>Groups</h2>
              </a>
              <a class='image' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <img src={require("../../../app/assets/Women1.jpg")} alt='userphoto' />
              </a>
              <div class='content'>
                <div class='meta'>
                  <h4>My Groups</h4>
                </div>
              </div>
            </div>
            <div class='ui card'>
              <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <h2>News</h2>
              </a>
              <a class='image' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <img src={require("../../../app/assets/Women1.jpg")}  alt='userphoto' />
              </a>
              <div class='content'>
                <div class='meta'>
                  <h4>My News</h4>
                </div>
              </div>
            </div>
            <div class='ui card'>
              <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <h2>Trending</h2>
              </a>
              <a class='image' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <img src={require("../../../app/assets/Women1.jpg")}  alt='userphoto' />
              </a>
              <div class='content'>
                <div class='meta'>
                  <h4>Details of Trending</h4>
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div class='content'>
              <div class='right floated author'>
                <div class='ui card fluid'>
                  <a class='image' href='https://randomuser.me/api/portraits/women/22.jpg'>
                    <img
                      class='ui fluid image'
                      src={require("../../../app/assets/Women1.jpg")}
                      alt='userphoto'
                    />
                  </a>
                  <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
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
              deleteEvent={this.handleDeleteEvent}
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <div class='ui card'>
              <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <h2>Calender</h2>
              </a>
              <a class='image' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <img src={require("../../../app/assets/Women1.jpg")} alt='userphoto' />
              </a>
              <div class='content'>
                <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                  Calender
                </a>
                <div class='meta'>
                  <h4>Details of Calender</h4>
                </div>
              </div>
            </div>

            <div class='ui card'>
            <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <h2>Events</h2>
              </a>
              <a class='image' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <img src={require("../../../app/assets/Women1.jpg")} alt='userphoto' />
              </a>
              <div class='content'>
                <div class='meta'>
                  <h4>Details of Events</h4>
                </div>
              </div>
            </div>
            
            <div class='ui card'>
              <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <h2>Adds/Promotions</h2>
              </a>
              <a class='image' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <img src={require("../../../app/assets/Women1.jpg")} alt='userphoto' />
              </a>
              <div class='content'>
                <div class='meta'>
                  <h4>Details of Adds</h4>
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
