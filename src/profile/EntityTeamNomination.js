import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


export class EntityTeamNomination extends Component {
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
                  <h2>Team Nomination Details</h2>
                  <TextField
                   hintText = "Enter Nominated Entity Name"
                   floatingLabelText="Nominated Entity Name"
                   onChange={handleChange('IPNentity_name')}
                   defaultValue={values.IPNentity_name }
                   />
                   <br />
                   <TextField
                   hintText = "Enter Nominated Entity Type"
                   floatingLabelText="Nominated Entity Email"
                   onChange={handleChange('IPNentity_type')}
                   defaultValue={values.IPNentity_type }
                   />
                   <br />
                   <TextField
                   hintText = "Enter Nominated Entity Sub Type"
                   floatingLabelText="Nominated Entity Sub Type"
                   onChange={handleChange('IPNentity_subtype')}
                   defaultValue={values.IPNentity_subtype}
                   />
                   <br />
                   <TextField
                   hintText = "Enter Nominated Entity Email"
                   floatingLabelText="Nominated Entity Email"
                   onChange={handleChange('IPNentity_email')}
                   defaultValue={values.IPNentity_email }
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

export default EntityTeamNomination
