import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


export class EntityHomeAddress extends Component {
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
                  <h2>Home Address Details</h2>
                  <TextField
                   hintText = "Enter Address Line 1 "
                   floatingLabelText="Address Line 1"
                   onChange={handleChange('HAddress_Line_1')}
                   defaultValue={values.HAddress_Line_1 }
                   />
                   <br />
                   <TextField
                   hintText = "Enter Address Line 2 "
                   floatingLabelText="Address Line 2"
                   onChange={handleChange('HAddress_Line_2')}
                   defaultValue={values.HAddress_Line_2 }
                   />
                   <br />
                   <TextField
                   hintText = "Enter your City Name"
                   floatingLabelText="City Name"
                   onChange={handleChange('Hcity')}
                   defaultValue={values.Hcity}
                   />
                   <br />
                   <TextField
                   hintText = "Enter your State,Province or Region"
                   floatingLabelText="State ,Provience or Region"
                   onChange={handleChange('HState')}
                   defaultValue={values.Hstate}
                   />
                   <br />
                   <TextField
                   hintText = "Enter your ZipCode"
                   floatingLabelText="Zipcode"
                   onChange={handleChange('Hzipcode')}
                   defaultValue={values.Hzipcode}
                   />
                   <br />
                   <TextField
                   hintText = "Enter your Country"
                   floatingLabelText="Country Name"
                   onChange={handleChange('Hcountry')}
                   defaultValue={values.Hcountry}
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

export default EntityHomeAddress
