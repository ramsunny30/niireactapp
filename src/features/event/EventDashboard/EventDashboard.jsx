import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid,Button} from 'semantic-ui-react/dist/commonjs/'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'

const eventsDashboard = [
  {
    id: '1',
    title: 'Investor Meeting',
    fromdate: '2019-06-27T11:04:00+00:00',
    todate: '2019-06-27T11:08:00+00:00',
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
    fromdate: '2019-06-28T14:02:00+00:00',
    todate:'2019-06-28T14:04:00+00:00',
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
      events: eventsDashboard,
      isOpen: false
    }
    
  handleFormOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  handleCancel = () =>{
    this.setState ({
        isOpen: false
      })
  }
    render() {
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
                      <EventList events={eventsDashboard}/>
                      </Grid.Column>
                      <Grid.Column width={6}>
                      <Button onClick={this.handleFormOpen} positive content="Create Event" />
                      {this.state.isOpen && 
                      <EventForm handleCancel={this.handleCancel} />}
                    </Grid.Column>
                    </Grid>  
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default EventDashboard