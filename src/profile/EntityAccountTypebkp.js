import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


export class EntityAccountType extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                  <AppBar title="Profile Details" />
                  <h1>Choose your Account</h1>
                  <TextField
                   hintText = "Investor "
                   floatingLabelText="Investor"
                   onChange={handleChange('Investor ')}
                   defaultValue={values.Investor }
                   />
                   <br />
                   <TextField
                   hintText = "Wealth Management Firm"
                   floatingLabelText="Wealth Management Firm"
                   onChange={handleChange('Wealth Management Firm')}
                   defaultValue={values.Wealth_Management_Firm}
                   />
                   <br />
                   <TextField
                   hintText = "Service Provider"
                   floatingLabelText="Service Provider"
                   onChange={handleChange('Service Provider')}
                   defaultValue={values.Service_Provider}
                   />
                   <br />
                   <TextField
                   hintText = "Asset Manager"
                   floatingLabelText="Asset Manager"
                   onChange={handleChange('Asset Manager')}
                   defaultValue={values.Asset_Manager}
                   />
                   <br />
                   <TextField
                   hintText = "Others or any account type"
                   floatingLabelText="Others"
                   onChange={handleChange('Others')}
                   defaultValue={values.Others}
                   />
                   <br/>
                   <RaisedButton
                   label="continue"
                   primary={true}
                   style={StyleSheet.button}
                   onClick={this.continue}
                   />
                    <RaisedButton
                   label="Back"
                   primary={false}
                   style={StyleSheet.button}
                   onClick={this.back}
                   />
               </React.Fragment>
             
           </MuiThemeProvider>
        )
    }
}

export default EntityAccountType
