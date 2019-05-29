import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class EntitySuccess extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM send to API
        this.props.nextStep();
    }
    render() {
        return (
           <MuiThemeProvider>
               <React.Fragment>
                  <AppBar title="Success" />
                  <h1> Thank you for submission</h1>
                  <p>You will get an email from our team after further verification</p>
               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

export default EntitySuccess
