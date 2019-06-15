import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import InvestorType from './InvestorType';
import ServiceProviderType from './ServiceProviderType';
import WealthManagerType from './WealthManagerType';
import AssetManagerType from './AssetManagerType';
import OtherType from './OtherType';

//import { Button } from 'semantic-ui-react';
//import EventForm from '../features/event/EventForm/EventForm';

              
// App.js
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export class EntityAccountType extends Component {
  state = {
       Investor: false,
       Wealth_Management_Firm: false,
       Service_Provider: false,
       Asset_Manager: false,
       Others: false,
       isOpens: false
   }
   
  

   handleCreateForm = () => {
    this.setState({
     isOpens: true,
    })
  }
   continue = e => {
    e.preventDefault();
     // const isLoggedIn = this.state.Investor;
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
        //const { state , values, handleChange } = this.props;
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
              <img src={require('../assets/Investor_img.jpg')} alt="Investor" />
              Investor
            </label>
            <br />
            {
                      this.state.Investor && (
                      <InvestorType
                     
                      />

                      )}
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.Wealth_Management_Firm}
                onChange={this.toggleChangeWealth_Management_Firm}
                className="form-check-input"
              />
              <img src={require('../assets/Wealth_Management_Firm_img.jpg')}  alt="wealth_Management_Firm"/>
              Wealth Management Firm
            </label>
            <br />
            {
                      this.state.Wealth_Management_Firm && (
                      <WealthManagerType
                     
                      />

                      )}
          </div>
          <br />
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.Service_Provider}
                onChange={this.toggleChangeService_Provider}
                className="form-check-input"
              />
             <img src={require('../assets/Service_Provider_img.jpg')}  alt= "service Provider" />
              Service Provider
            </label>
            <br />
            {
                      this.state.Service_Provider && (
                      <ServiceProviderType
                     
                      />

                      )}
          </div>
          <br />
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.Asset_Manager}
                onChange={this.toggleChangeAsset_Manager}
                className="form-check-input"
              />
              <img src={require('../assets/Asset_Manager_img.jpg')} alt="Asset_Manager"/>
              Asset Manager
            </label>
            <br />
            {
                      this.state.Asset_Manager && (
                      <AssetManagerType
                     
                      />

                      )}
          </div>
          <br />
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.Others}
                onChange={this.toggleChangeOthers}
                className="form-check-input"
              />
              <img src={require('../assets/Other_img.jpg')} alt= "other" />
              Others
            </label>
            {
                      this.state.Others && (
                      <OtherType
                     
                      />

                      )}

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
               
                   {/* <Button onClick={this.handleCreateForm}
                       positive 
                       content="Create Event" />
                       */}
                     
                   
               </React.Fragment>
             
           </MuiThemeProvider>
        )
    }
}

export default EntityAccountType

