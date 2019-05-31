import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class EntitySuccess extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM send to API
        this.props.nextStep();
    }
    back = b => {
        b.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
           <MuiThemeProvider>
               <React.Fragment>
                  <AppBar title="Success" />
                  <div className="center">
                  <h2> Thank you for submission</h2>
                  <p>You will get an email from our team after further verification</p>
                  </div>
               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

export default EntitySuccess
