import React, { Fragment }from 'react'
import { Segment, Header, Comment, Form, Button} from 'semantic-ui-react';

const EventDetailedChat = () => {
    return (
        <Fragment> 
             <Segment
               textAlign="center"
               attached="top"
               inverted
               color="teal"
               style={{ border: 'none' }}
             >
               <Header>Chat about this event</Header>
             </Segment>
       
             <Segment attached>
               <Comment.Group>
                 <Comment>
                   <Comment.Avatar src={require('../../../app/assets/user.png')}  />
                  
                   <Comment.Content>
                     <Comment.Author as="a">Matt</Comment.Author>
                     <Comment.Metadata>
                       <div>Today at 5:42PM</div>
                     </Comment.Metadata>
                     <Comment.Text>Waiting for the event date</Comment.Text>
                     <Comment.Actions>
                       <Comment.Action>Reply</Comment.Action>
                     </Comment.Actions>
                   </Comment.Content>
                 </Comment>
       
                 <Comment>
                   <Comment.Avatar src={require('../../../app/assets/user.png')}  />
                   <Comment.Content>
                     <Comment.Author as="a">Elliot Fu</Comment.Author>
                     <Comment.Metadata>
                       <div>Yesterday at 12:30AM</div>
                     </Comment.Metadata>
                     <Comment.Text>
                       <p>
                         Amazed to see event happening at Near my place
                       </p>
                     </Comment.Text>
                     <Comment.Actions>
                       <Comment.Action>Reply</Comment.Action>
                     </Comment.Actions>
                   </Comment.Content>
                   <Comment.Group>
                     <Comment>
                       <Comment.Avatar src={require('../../../app/assets/user.png')}  />
                       <Comment.Content>
                         <Comment.Author as="a">Jenny Hess</Comment.Author>
                         <Comment.Metadata>
                           <div>Just now</div>
                         </Comment.Metadata>
                         <Comment.Text>Elliot you are always welcome and hopeing to meet you at the event</Comment.Text>
                         <Comment.Actions>
                           <Comment.Action>Reply</Comment.Action>
                         </Comment.Actions>
                       </Comment.Content>
                     </Comment>
                   </Comment.Group>
                 </Comment>
       
                 <Comment>
                   <Comment.Avatar src={require('../../../app/assets/user.png')}  />
                   <Comment.Content>
                     <Comment.Author as="a">Joe Henderson</Comment.Author>
                     <Comment.Metadata>
                       <div>5 days ago</div>
                     </Comment.Metadata>
                     <Comment.Text>Are there any similar kind of events planned in California</Comment.Text>
                     <Comment.Actions>
                       <Comment.Action>Reply</Comment.Action>
                      
                     </Comment.Actions>
                   </Comment.Content>
                 </Comment>
                 <br/>
       
                 <Form>
                   <Form.TextArea />
                   <br />
                   <Button
                     content="Add Reply"
                     labelPosition="left"
                     icon="edit"
                     primary
                   />
                 </Form>
               </Comment.Group>
             </Segment>
             </Fragment> 
    )
}

export default EventDetailedChat
