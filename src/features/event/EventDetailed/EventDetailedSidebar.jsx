import React from "react";
import { Segment, Item, Label, List } from "semantic-ui-react";

const EventDetailedSidebar = ({ attendees }) => {
  const isHost = false;
  return (
    <React.Fragment>
      <div>
        <Segment
          textAlign='center'
          style={{ border: "none" }}
          attached='top'
          secondary
          inverted
          color='teal'
        >
          {attendees && attendees.length}{" "} {attendees && attendees.length === 1
            ? "Person"
            : "People"}{" "}
          Going
        </Segment>
        <Segment attached>
          <List relaxed divided>
            {attendees &&
              attendees.map(attendee => (
                <Item key={attendee.id} style={{ position: 'relative' }}>
                  {isHost && 
                    <Label
                      style={{ position: 'absolute' }}
                      color="orange"
                      ribbon="right"
                    >
                    Host
                    </Label>
                  }
                 
                  <Item.Image src={attendee.photoURL} size="tiny" circular/>
                  <Item.Content verticalAlign="middle" style={{width: "10px"}}>
                    <Item.Header as="h3">
                      <a href="true">{attendee.name}</a>
                    </Item.Header>
                  </Item.Content>
                </Item>
              ))}
          </List>
        </Segment>
      </div>
    </React.Fragment>
  );
};

export default EventDetailedSidebar;
