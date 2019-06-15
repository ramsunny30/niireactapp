import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class InvestorType extends Component {

    render() {
       // const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                  
                  <div className="right">
                  <h2>Investor Sub Type</h2>
                  Investor - Accredited Investor (I) 
                  High Net Worth Individual (I)
                  Trust (I or C) 
                  Family Office (C) 
                  Institutional Investor (C) 
                  <br />
                   </div>
               </React.Fragment>
             
           </MuiThemeProvider>
        )
    }
}

export default InvestorType
