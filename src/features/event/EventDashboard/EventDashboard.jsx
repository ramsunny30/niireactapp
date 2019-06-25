import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid,Button } from 'semantic-ui-react/dist/commonjs/'
import cuid from 'cuid';
import {connect} from 'react-redux';
//import Investor_Img from '../assets/Investor_img.jpg'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import {createEvent,deleteEvent,updateEvent} from '../eventActions'
 
const mapState = (state) => ({
  events: state.events
})

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
}

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
    })
  }

handleFormCancel = () =>{
    this.setState ({
        isOpen: false
      })
  }



  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    // newEvent.id = Math.round(Math.random() * 1000);
   // newEvent.id=3;
    newEvent.hostPhotoURL = 'https://randomuser.me/api/portraits/women/3.jpg';
    //'/assets/Investor_img.jpg';
   // const updatedEvents = [...this.state.events, newEvent];
     this.setState(({ events }) => ({
      // events: updatedEvents,'
       events: [...events,newEvent],
       isOpen: false
     }));
  };

  handleSelectEvent = (event) => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };


  handleUpdateEvent = (updatedEvent) => {
    this.setState(({events}) => ({
      events: events.map(event => {
      if (event.id === updatedEvent.id) {
        return {...updatedEvent}
      } else {
        return event
      }
    }),
    isOpen: false,
    selectedEvent: null
  }))
}
    
handleDeleteEvent = (id) => {
  this.setState(({events}) => ({
   events:events.filter(e=> e.id !== id)
  }))
}
    render() {
        const { isOpen, selectedEvent } = this.state;
        const {events} = this.props;
        return (
            <MuiThemeProvider>
               <React.Fragment>      
               {/* <Button floated="left" positive inverted content="Create Event" /> */}
               <br />
               <br />
               <br />
               <br />
                    <Grid>
                      <Grid.Column width={10}>
                      <EventList events={events} 
                      selectEvent = {this.handleSelectEvent} 
                      deleteEvent = { this.handleDeleteEvent}
                      />
                      </Grid.Column>
                      <Grid.Column width={6}>
                      <Button onClick={this.handleCreateFormOpen}
                       positive 
                       content="Create Event" />
                      {
                        isOpen && (
                      <EventForm 
                      key={selectedEvent ? selectedEvent.id : 0}
                      updateEvent={this.handleUpdateEvent}
                      selectedEvent={selectedEvent}
                      createEvent={this.handleCreateEvent}
                      cancelFormOpen={this.handleFormCancel}
                      />
                      )}
      {/* <EventForm createEvent={this.handleCreateEvent} handleCancel={this.handleCancel} />} */}
                        
                    </Grid.Column>
                    </Grid>  
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default connect (mapState,actions)(EventDashboard);