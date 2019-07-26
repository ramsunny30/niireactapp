import React, {useState} from 'react'
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import EventDetailedMap from '../EventDetailed/EventDetailedMap';
import {format,parseISO} from 'date-fns';

const EventDetailedInfo = ({event}) => {

  const [isMapOpen,showMapToggle] = useState(false)
    return (
           <Segment.Group>
              <Segment attached="top">
                <Grid>
                  <Grid.Column width={1}>
                    <Icon size="large" color="teal" name="info" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <p>{event.description}</p>
                  </Grid.Column>
                </Grid>
              </Segment>
              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="calendar" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <span> { event.fromdate &&
                         format(parseISO(event.fromdate),'EEEE do LLL')} at {' '} {format(parseISO(event.fromdate),'h:mm a')
                       } </span>
                        </Grid.Column>
                        
                </Grid>
                 
                  <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="calendar" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <span> { event.todate &&
                         format(parseISO(event.todate),'EEEE do LLL')} at {' '} {format(parseISO(event.todate),'h:mm a')
                       } </span>
                  </Grid.Column>
                </Grid>
              </Segment>
              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="marker" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <span>{event.venue}</span>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Button onClick={() => showMapToggle(!isMapOpen)}
                    color="teal" size="tiny" content={isMapOpen ? 'Hide map' : 'Show map'} />
                  </Grid.Column>
                </Grid>
              </Segment>
              {isMapOpen && (
              <EventDetailedMap lat={event.venueLatLng.lat} lng={event.venueLatLng.lng} />
              )}
            </Segment.Group>
    )
}

export default EventDetailedInfo
