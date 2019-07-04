import React, { Component, Fragment } from "react";
import { Menu} from "semantic-ui-react";
import { NavLink,withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { Dropdown, Input } from "semantic-ui-react";

const options = [
  { key: "page", text: "Investor", value: "Investor" },
  { key: "org", text:  "Asset Manager", value: "Asset Manager" },
  { key: "site", text: "Wealth Management Company", value: "Wealth Management Company" }
];

class NavBar extends Component {
  state = {
    authenticated: true
  };

  handleSignIn = () => this.setState({ authenticated: true });
  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };

  render() {
    const { authenticated } = this.state;
    return (
      <Fragment>
        <Menu inverted fixed='top'>
          {/* <Container> */}
          <Menu.Item as={NavLink} exact to='/' header>
            <img src={require("../../../app/assets/user.png")} alt='logo' />
            NII
          </Menu.Item>
          {authenticated ? (
            <Fragment>
              <Menu.Item as={NavLink} exact to='/events' name='My DashBoard' />
              <Menu.Item as={NavLink} to='/test' name='Test' />
             
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
          ) : (
            <Fragment>
              <Menu.Item as={NavLink} to='/About' name='About Us' />
              <Menu.Item as={NavLink} to='/Contact' name='Contact Us' />
            </Fragment>
          )}

          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}

          {/* </Container> */}
        </Menu>
      </Fragment>
    );
  }
}

export default withRouter(NavBar);
