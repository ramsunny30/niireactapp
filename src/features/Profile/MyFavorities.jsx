import React, { Component,Fragment } from 'react'
import { Grid, Menu, Segment,Divider,Image } from 'semantic-ui-react'

 class MyFavorities extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Fragment>
        <Image src={require('../../app/assets/Women1.jpg')} size='small' rounded />
        <Segment.Group horizontal>
        <Segment>
        <h2>My Profile</h2> 
        </Segment>
        <Segment color='#0077B5'>
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
      <h2>My Favorities List</h2>
      </Fragment>
    )
  }
}

export default MyFavorities 
