import React, { Component, Fragment } from 'react'
import EventListItem from '../EventList/EventListItem'

class EventList extends Component {
    render() {
        const {
            selectEvent,
            deleteEvent
        } = this.props;
        return (
            <Fragment>
                  <h1>Discussion</h1>
                  {this.props.events.map(event => (
                      <EventListItem key={event.id} event={event} selectEvent={selectEvent} deleteEvent={deleteEvent} />
                  ))}
                 
                 </Fragment>
        );
    }
}
export default EventList