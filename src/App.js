import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Blog } from './Blog';
import { Login } from './Login';
import { Join } from './Join';
import { Nomatch } from './Nomatch';
import { Layout } from './components/Layout';
import { NavigationBar} from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { profileform } from './profile/profileform';
import { Events } from './Events';

class App extends Component {
    render() {
      return (
        <React.Fragment>
           <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Blog" component={Blog} />
                <Route exact path="/Profile" component={profileform} />
                <Route exact path="/Events" component={Events} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Join" component={Join} />
                <Route component={Nomatch} />
               </Switch>
          </Layout>
          </Router>
        </React.Fragment>
    );
  }  
}

export default App;
