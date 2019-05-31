import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import 'bootstrap/dist/css/bootstrap.min.css';
              
// App.js
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export class EntityAccountType extends Component {
    
  state = {
       Investor: false,
       Wealth_Management_Firm: false,
       Service_Provider: false,
       Asset_Manager: false,
       Others: false 
   }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = b => {
        b.preventDefault();
        this.props.prevStep();
    }
    toggleChangeInvestor = () => {
        this.setState(prevState => ({
            Investor: !prevState.Investor,
        }));
    }
    
      toggleChangeWealth_Management_Firm = () => {
        this.setState(prevState => ({
            Wealth_Management_Firm: !prevState.Wealth_Management_Firm,
        }));
      }
    
      toggleChangeService_Provider = () => {
        this.setState(prevState => ({
            Service_Provider: !prevState.Service_Provider,
        }));
      }

      toggleChangeAsset_Manager = () => {
        this.setState(prevState => ({
            Asset_Manager: !prevState.Asset_Manager,
        }));
      }

      toggleChangeOthers = () => {
        this.setState(prevState => ({
            Others: !prevState.Others,
        }));
      }
    
    render() {
        const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
               <AppBar title="Profile Details" />
                  <div className="center">
                  <h2>Account Type</h2>
                  </div>
                   <br/>
                   <div className="container">
        <br />
        <form onChange = {this.onChange}>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.Investor}
                onChange={this.toggleChangeInvestor}
                className="form-check-input"
              />
              <img src={require('../assets/Investor_img.jpg')}/>
              Investor
            </label>
            <br />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.Wealth_Management_Firm}
                onChange={this.toggleChangeWealth_Management_Firm}
                className="form-check-input"
              />
              <img src={require('../assets/Wealth_Management_Firm_img.jpg')} />
              Wealth Management Firm
            </label>
          </div>
          <br />
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.Service_Provider}
                onChange={this.toggleChangeService_Provider}
                className="form-check-input"
              />
             <img src={require('../assets/Service_Provider_img.jpg')} />
              Service Provider
            </label>
          </div>
          <br />
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.Asset_Manager}
                onChange={this.toggleChangeAsset_Manager}
                className="form-check-input"
              />
              <img src={require('../assets/Asset_Manager_img.jpg')} />
              Asset Manager
            </label>
          </div>
          <br />
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.Others}
                onChange={this.toggleChangeOthers}
                className="form-check-input"
              />
              <img src={require('../assets/Other_img.jpg')} />
              Others
            </label>
          </div>
        </form>
      </div>
        <br />
        <br />
        <br />
                   <div className="center">
                   <RaisedButton
                   label="continue"
                   primary={true}
                   Align="center"
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

export default EntityAccountType

