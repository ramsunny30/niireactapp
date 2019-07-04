import React, { Component,Fragment } from 'react'
import { Segment,Divider,Image } from 'semantic-ui-react'

 class MyFavorities extends Component {
  render() {
    return (
      <Fragment>
        <Image src={require('../../../app/assets/Women1.jpg')} size='small' rounded />
        <Segment.Group horizontal>
        <Segment>
        <h2>My Profile</h2> 
        </Segment>
        <Segment color='blue'>
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
