import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


export class EntityBusinessAddress extends Component {
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
                  <h2>Business Address Details</h2>
                  <TextField
                   hintText = "Enter Address Line 1 "
                   floatingLabelText="Address Line 1"
                   onChange={handleChange('BAddress_Line_1')}
                   defaultValue={values.BAddress_Line_1 }
                   />
                   <br />
                   <TextField
                   hintText = "Enter Address Line 2 "
                   floatingLabelText="Address Line 2"
                   onChange={handleChange('BAddress_Line_2')}
                   defaultValue={values.BAddress_Line_2 }
                   />
                   <br />
                   <TextField
                   hintText = "Enter your City Name"
                   floatingLabelText="City Name"
                   onChange={handleChange('Bcity')}
                   defaultValue={values.Bcity}
                   />
                   <br />
                   <TextField
                   hintText = "Enter your State,Province or Region"
                   floatingLabelText="State ,Provience or Region"
                   onChange={handleChange('BState')}
                   defaultValue={values.Bstate}
                   />
                   <br />
                   <TextField
                   hintText = "Enter your ZipCode"
                   floatingLabelText="Zipcode"
                   onChange={handleChange('Bzipcode')}
                   defaultValue={values.Bzipcode}
                   />
                   <br />
                   <TextField
                   hintText = "Enter your Country"
                   floatingLabelText="Country Name"
                   onChange={handleChange('Bcountry')}
                   defaultValue={values.Bcountry}
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

export default EntityBusinessAddress
