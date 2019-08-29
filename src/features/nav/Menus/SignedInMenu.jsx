import React from 'react';
import { Menu, Image, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const SignedInMenu = ({signOut,auth}) => {
 
  return (
    <Menu.Item position='left'  style={{ marginLeft: '3.0em' }}>
      <Image avatar spaced='right' src={require('../../../app/assets/Women1.jpg')} />
      <Dropdown pointing='top left' text={auth.email}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/MyFavorities' text='My Favorities' icon='user' />
          <Dropdown.Item as={Link} to='/Profile' text='My Profile' icon='user' />
          <Dropdown.Item as={Link} to='/settings' text='Settings' icon='settings' />
          <Dropdown.Item onClick={signOut} text='Sign Out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}

export default SignedInMenu;
