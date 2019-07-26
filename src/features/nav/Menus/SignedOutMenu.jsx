import React, { Fragment } from 'react';
import { Menu, Button} from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

const SignedOutMenu = ({signIn, register}) => {
  return (
    <Fragment>
      <Menu.Item as={NavLink} to='/About' name='About Us' />
      <Menu.Item as={NavLink} to='/Contact' name='Contact Us' />
      <Menu.Item position='right'>
      <Button onClick={signIn} basic inverted content='Login'/>
      <Button onClick={register} 
        basic 
        inverted
        content='Register'
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
    </Fragment>
  );
};
export default SignedOutMenu;
