import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class WealthManagerType extends Component {

    render() {
        //const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                  
                  <div className="right">
                  <h2>Wealth Manager Type</h2>
                  Wealth Manager - Brokerage Firm (C)
                  Broker Agent (I or C)
                  Independent Investment Adviser (I or C) 
                  <br />
                   </div>
               </React.Fragment>
             
           </MuiThemeProvider>
        )
    }
}

export default WealthManagerType
