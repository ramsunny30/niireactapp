import React from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const eventImageStyle = {
  filter: "brightness(30%)"
};

const eventImageTextStyle = {
  position: "absolute",
  top: "5%",
  left: "0%",
  width: "100%",
  height: "auto",
  color: "white"
};

const divStyle2 = {
  position: "center",
  top: "5%",
  width: "100%",
  height: "auto",
  color: "white",
  fontSize: "30px"
};
const EventDetailedHeader = ({ event }) => {
  return (
    <Segment.Group>
      <Segment basic attached='top' style={{ padding: "0" }}>
        {/* <Image src='../../../assets/${event.category}.jpg'  fluid /> */}
        <Image
          as={Link}
          src={require("../../../app/assets/HomePageImage.jpg")}
          fluid
          style={eventImageStyle}
        />
        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header size='huge' content='JOIN US @' style={divStyle2} />
                <br />
                <Header
                  size='medium'
                  content={event.title}
                  style={{ color: "white" }}
                />
                <p>
                  <h4> From </h4>
                  {format(event.date.toDate(), "EEEE do LLL")} at{" "}
                  {format(event.date.toDate(), "h:mm a")} |
                  <br />
                  <h4> To </h4>
                  {format(event.date.toDate(), "EEEE do LLL")} at{" "}
                  {format(event.date.toDate(), "h:mm a")} |
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>
                  Hosted by <strong>{event.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached='bottom'>
        <Button>Cancel My Place</Button>
        <Button color='teal'>JOIN THIS EVENT</Button>
        <Button
          as={Link}
          to={`/manage/${event.id}`}
          color='orange'
          floated='right'
        >
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailedHeader;
