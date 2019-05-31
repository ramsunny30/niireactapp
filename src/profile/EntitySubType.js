import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


export class EntitySubType extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = b => {
        b.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                  <AppBar title="Profile Details" />
                  <div className="center">
                  <h2>Sub Type</h2>
                  <TextField
                   hintText = "Enter your Investor "
                   floatingLabelText="Investor"
                   onChange={handleChange('Investor ')}
                   defaultValue={values.Investor }
                   />
                   <br />
                   <TextField
                   hintText = "Enter your Wealth Management Firm"
                   floatingLabelText="Wealth Management Firm"
                   onChange={handleChange('Wealth Management Firm')}
                   defaultValue={values.Wealth_Management_Firm}
                   />
                   <br />
                   <TextField
                   hintText = "Enter your Wealth Service Provider"
                   floatingLabelText="Service Provider"
                   onChange={handleChange('Service Provider')}
                   defaultValue={values.Service_Provider}
                   />
                   <br />
                   <TextField
                   hintText = "Enter your Asset Manager"
                   floatingLabelText="Asset Manager"
                   onChange={handleChange('Asset Manager')}
                   defaultValue={values.Asset_Manager}
                   />
                   <br />
                   <TextField
                   hintText = "Enter your Others"
                   floatingLabelText="Others"
                   onChange={handleChange('Others')}
                   defaultValue={values.Others}
                   />
                   <br />
                   <br />
                   <br />
                   <RaisedButton
                   label="continue"
                   primary={true}
                   style={StyleSheet.button}
                   onClick={this.continue}
                   />
                   <div className="divider" />
                    <RaisedButton
                   label="Back"
                   primary={false}
                   style={StyleSheet.button}
                   onClick={this.back}
                   />
                   </div>
               </React.Fragment>
             
           </MuiThemeProvider>
        )
    }
}

export default EntitySubType
