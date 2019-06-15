import React, { Component, Fragment } from 'react'
import EventListItem from '../EventList/EventListItem'

class EventList extends Component {
    render() {
        const {
            //events, 
            selectEvent
        } = this.props;
        return (
            <Fragment>
                  <h1>EventList</h1>
                  {this.props.events.map(event => (
                      <EventListItem key={event.id} event={event} selectEvent={selectEvent} />
                  ))}
                 
                 </Fragment>
        );
    }
}
export default EventList