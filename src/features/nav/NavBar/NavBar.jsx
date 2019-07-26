import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Menu} from "semantic-ui-react";
import { NavLink,withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { Dropdown, Input } from "semantic-ui-react";
import {openModal} from '../../modals/modalActions';
import {logout} from '../../auth/authActions';

const actions ={
  openModal,
  logout
};
const mapstate = (state) => ({
  auth: state.auth
});

const options = [
  { key: "page", text: "Investor", value: "Investor" },
  { key: "org", text:  "Asset Manager", value: "Asset Manager" },
  { key: "site", text: "Wealth Management Company", value: "Wealth Management Company" }
];

class NavBar extends Component {

  
     
  handleSignIn = () => { this.props.openModal('LoginModal')};


  handleRegister = () => { this.props.openModal('RegisterModal')};


  handleSignOut = () => {
    this.props.logout()
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    const authenticated =auth.authenticated;
    return (
      <Fragment>
        <Menu inverted fixed='top'>
          {/* <Container> */}
          <Menu.Item as={NavLink} exact to='/' header>
            <img src={require("../../../app/assets/user.png")} alt='logo' />
            NII
          </Menu.Item>
          {authenticated && (
            <Fragment>
              <Menu.Item as={NavLink} exact to='/userDashboard' name='User DashBoard' />
              <Menu.Item as={NavLink} to='/test' name='Test' />
              <Menu.Item as={NavLink} to='/Blog' name='Blog' />
              <Menu.Item as={NavLink} to='/CalenderApp' name='Calender' />
              <Menu.Item as={NavLink} to='/News' name='News' />
              <Menu.Item as={NavLink} to='/Events' name='Events' />
                <Dropdown
                  button
                  basic
                  floating
                  options={options}
                  defaultValue='Select'
                />
             
              <Input
                icon='search'
                iconPosition='left'
                placeholder='Search...' style={{minWidth:"20em"}}
              />
            </Fragment>
          ) 
         
          }

          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} currentuser={auth.currentuser} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister}/>
          )}
        </Menu>
      </Fragment>
    );
  }
}

export default withRouter(connect(mapstate, actions)(NavBar));
