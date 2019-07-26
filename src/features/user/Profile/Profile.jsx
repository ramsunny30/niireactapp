import React, { Component,Fragment } from 'react'
import { Grid, Menu, Segment,Divider,Image} from 'semantic-ui-react';

 class Profile extends Component {
  state = { activeItem: 'bio' }
  
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state

    return (
      <Fragment>
        <Image  src={require('../../../app/assets/Women1.jpg')} size='small'/>
        <Segment.Group horizontal>
        <Segment>
        <h2>My Profile</h2> 
        </Segment>
        <Segment>
        <h2>Name</h2> 
        </Segment>
        <Segment>
        <h2>Role/Sub Role</h2> 
        </Segment>
        <Segment>
        <h2>Entity Type</h2> 
        </Segment>
      
        </Segment.Group>
      <Divider/>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='Investment' active={activeItem === 'bio'} onClick={this.handleItemClick} />
            <Menu.Item name='pics' active={activeItem === 'pics'} onClick={this.handleItemClick} />
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the tab height
          </Segment>
        </Grid.Column>
      </Grid>
      </Fragment>
    )
  }
}

export default Profile
