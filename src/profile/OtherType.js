import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class OtherType extends Component {

    render() {
       // const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                  
                  <div className="right">
                  <h2>Other Type</h2>
                  Please specify your role
                  <br />
                   </div>
               </React.Fragment>
             
           </MuiThemeProvider>
        )
    }
}

export default OtherType
