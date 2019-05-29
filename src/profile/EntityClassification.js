import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


export class EntityClassification extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                  <AppBar title="Enter User Details" />
                  <h1>Choose your Account</h1>
                  <TextField
                   hintText = "Enter your First Name"
                   floatingLabelText="Individual"
                   onChange={handleChange('Entity_Classification_Individual')}
                   defaultValue={values.Entity_Classification_Individual}
                   />
                   <br />
                   <TextField
                   hintText = "Enter your First Name"
                   floatingLabelText="Company"
                   onChange={handleChange('Entity_Classification_Individual_Company')}
                   defaultValue={values.Entity_Classification_Individual_Company}
                   />
                   <br />
                   <RaisedButton
                   label="continue"
                   primary={true}
                   style={StyleSheet.button}
                   onClick={this.continue}
                   />
               </React.Fragment>
             
           </MuiThemeProvider>
        )
    }
}

export default EntityClassification
