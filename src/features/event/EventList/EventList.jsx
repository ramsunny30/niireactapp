import React, { Component, Fragment } from "react";
import EventListItem from "../EventList/EventListItem";

class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    return (
      <Fragment>
        <h1>Events</h1>
        {events && events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            selectEvent={event}
            deleteEvent={deleteEvent}
          />
        ))}
      </Fragment>
    );
  }
}
export default EventList;
