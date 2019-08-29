import React, { Component, Fragment } from 'react';
import './../assets/styles.css'
import { Route, Switch } from 'react-router-dom';
import userDashboard from '../../features/userDashboard/userDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import TestComponent from '../../features/TestArea/TestComponenet';
import Profile from '../../features/user/Profile/Profile';
import MyFavorities from '../../features/user/Profile/MyFavorities';
import About from '../layout/About';
import Contact from '../layout/Contact';
import ModalManager from '../../features/modals/ModalManager';
import CalenderApp from './CalenderApp';
import News from './News';
import Blog from './Blog';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';



class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Contact' component={Contact} />   
        <Route
           path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Container className='main'>
                <Switch key={this.props.location.key}>
                  <Route exact path='/userDashboard' component={userDashboard} />
                  <Route exact path='/Events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/MyFavorities' component={MyFavorities} />
                  <Route path='/MyFavorities/:id' component={MyFavorities} />
                  <Route path='/Profile' component={Profile} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
                  <Route path='/test' component={TestComponent} />
                  <Route path='/CalenderApp' component={CalenderApp} />
                  <Route path='/News' component={News} />
                  <Route path='/Blog' component={Blog} />

                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
