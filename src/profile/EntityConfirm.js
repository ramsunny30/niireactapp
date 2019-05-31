import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


export class EntityConfirm extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM send to API
        this.props.nextStep();
    }
    back = b => {
        b.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: {Entity_Classification_Individual, Entity_Classification_Individual_Company}} = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                  <AppBar title="Confirm User Data" />
                  <div className="center">
                  <List>
                      <ListItem
                      primaryText="Entity Classification Individual"
                      secondaryText={ Entity_Classification_Individual }
                      />
                      <ListItem
                      primaryText="Entity Classification Individual Company"
                      secondaryText={ Entity_Classification_Individual_Company }
                      />
                  </List>
                   <br />
                   <br />
                   <br />
                   <RaisedButton
                   label="Confirm & continue"
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

export default EntityConfirm
