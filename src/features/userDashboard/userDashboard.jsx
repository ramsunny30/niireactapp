import React, { Component } from "react";
import { Grid } from "semantic-ui-react/dist/commonjs/";
import { Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { createEvent, deleteEvent, updateEvent } from "../event/eventActions";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { firestoreConnect } from "react-redux-firebase";

const mapState = state => ({
  events: state.events,
  loading: state.async.loading
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class userDashboard extends Component {

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };
  render() {
    const { loading } = this.props;
    if (loading) return <LoadingComponent />
    return (
      <React.Fragment>
        <Grid>
          <Grid.Column width={3}>
          <div class='ui card'>
              <a className='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <h2>Chats</h2>
              </a>
              <a class='image' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <img src={require("../../app/assets/Chat.jpg")} alt='userphoto'/>
              </a>
              <div class='content'>
                <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                  Samantha R
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
                <img src={require("../../app/assets/Groups.jpg")} alt='userphoto' />
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
                <img src={require("../../app/assets/news.jpg")}  alt='userphoto' />
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
                <img src={require("../../app/assets/Trending.jpg")}  alt='userphoto' />
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
                      src={require("../../app/assets/Women1.jpg")}
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
          </Grid.Column>
          <Grid.Column width={5}>
            <div class='ui card'>
              <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <h2>Calender</h2>
              </a>
              <a class='image' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <img src={require("../../app/assets/calender.jpg")} alt='userphoto' />
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
                <img src={require("../../app/assets/events.jpg")} alt='userphoto' />
              </a>
              <div class='content'>
                <div class='meta'>
                  <h4>Details of Events</h4>   
               <Button
              as={Link}
              to='/createEvent'
              floated='right'
              positive
              inverted
              content='Create Event'
                />
         
                </div>
              </div>
            </div>
            
            <div class='ui card'>
              <a class='header' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <h2>Adds/Promotions</h2>
              </a>
              <a class='image' href='https://randomuser.me/api/portraits/women/22.jpg'>
                <img src={require("../../app/assets/Adds.jpg")} alt='userphoto' />
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
// export default connect(
//   mapState,
//   actions
// )(userDashboard);

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "events" }])(userDashboard));
