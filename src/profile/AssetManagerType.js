import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class AssetManagerType extends Component {

    render() {
        //const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                  
                  <div className="right">
                  <h2>Asset Manager Type</h2>
                  Asset Manager - Hedge Fund
                  Private Equity
                  Real Estate
                  Fund of Funds
                  Other
                  <br />
                   </div>
               </React.Fragment>
             
           </MuiThemeProvider>
        )
    }
}

export default AssetManagerType
