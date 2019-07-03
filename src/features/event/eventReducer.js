import {createReducer} from '../../app/common/util/reducerUtils'
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './eventConstants';

const initialState = [
    {
      id: '1',
      title: 'Investor Meeting',
      fromdate: '2019-06-27',
      todate: '2019-06-27',
      category: 'culture',
      description:
        'First stage meetings – Business plan, financial information, background information of the investment funds',
      city: 'London, UK',
      venue: "New york City hall",
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
          id: 'c',
          name: 'Sarah',
          photoURL: 'https://randomuser.me/api/portraits/women/3.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'Growth oppurtunites in bitcoin vinvestment fund',
      fromdate: '2019-06-28T',
      todate:'2019-06-28',
      category: 'drinks',
      description:
        'VInvestments will be hosting an investor meeting with people intrested in investing the fund 216, Our investmenet manager Matt Ellis will be conducting this  as part of fund introduction seminar. The presentations coveres a discussion of fund strategy, fund details, ROI as well as an introduction of the new market oppurtunities.',
      city: 'London, UK',
      venue: 'Webex',
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      attendees: [
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
          id: 'c',
          name: 'Sarah',
          photoURL: 'https://randomuser.me/api/portraits/women/3.jpg'
        }
      ]
    }
  ];

  const createEvent = (state, payload) => {
      return [...state, payload.event]
  }

  const updateEvent = (state, payload) => {
    return [
        ...state.filter(event => event.id !== payload.event.id), payload.event]
}

const deleteEvent = (state, payload) => {
    return [
        ...state.filter(event => event.id !== payload.event.id)
    ]
}

export default createReducer(initialState,{
    [CREATE_EVENT]: createEvent,
    [UPDATE_EVENT]: updateEvent,
    [DELETE_EVENT]: deleteEvent
})