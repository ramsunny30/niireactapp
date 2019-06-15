import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid,Button } from 'semantic-ui-react/dist/commonjs/'
import cuid from 'cuid'
//import Investor_Img from '../assets/Investor_img.jpg'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Investor Meeting',
    fromdate: '2019-06-27',
    todate: '2019-06-27',
    category: 'culture',
    description:
      'First stage meetings – Business plan, financial information, background information of the investment funds',
    city: 'London, UK',
    venue: "New york City hall",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'c',
        name: 'Sarah',
        photoURL: 'https://randomuser.me/api/portraits/women/3.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Growth oppurtunites in bitcoin vinvestment fund',
    fromdate: '2019-06-28T',
    todate:'2019-06-28',
    category: 'drinks',
    description:
      'VInvestments will be hosting an investor meeting with people intrested in investing the fund 216, Our investmenet manager Matt Ellis will be conducting this  as part of fund introduction seminar. The presentations coveres a discussion of fund strategy, fund details, ROI as well as an introduction of the new market oppurtunities.',
    city: 'London, UK',
    venue: 'Webex',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'c',
        name: 'Sarah',
        photoURL: 'https://randomuser.me/api/portraits/women/3.jpg'
      }
    ]
  }
]

class EventDashboard extends Component {
 
   state = {
      events: eventsFromDashboard,
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

  handleCreateForm = () => {
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
    })
  }

  
    render() {
        const { events, isOpen, selectedEvent } = this.state;
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
                      <EventList events={events} selectEvent = {this.handleSelectEvent} />
                      </Grid.Column>
                      <Grid.Column width={6}>
                      <Button onClick={this.handleCreateFormOpen}
                       positive 
                       content="Create Event" />
                      {
                        isOpen && (
                      <EventForm 
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
export default EventDashboard