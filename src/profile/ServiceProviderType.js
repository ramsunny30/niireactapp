import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class ServiceProviderType extends Component {

    render() {
        //const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                  
                  <div className="right">
                  <h2>Service Provider Type</h2>
                  Service Provider - Tax Adviser (CPA)
                  Content Provider
                  Fund Raising and Marketing Firm
                  Publishers
                  Other
                  <br />
                   </div>
               </React.Fragment>
             
           </MuiThemeProvider>
        )
    }
}

export default ServiceProviderType
