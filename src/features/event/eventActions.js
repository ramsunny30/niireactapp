import { CREATE_EVENT,UPDATE_EVENT,DELETE_EVENT, FETCH_EVENTS } from "./eventConstants";
import {asyncActionStart,asyncActionFinish,asyncActionError} from "./../async/asyncActions"
import {fetchSampleData} from "../../app/data/mockApi";
import { toastr } from "react-redux-toastr";

export const createEvent = (event) => {
      return async dispatch => {
          try {
              dispatch({
                type: CREATE_EVENT,
                payload: {
                    event
                }
            });
            toastr.success('Success !', 'Event has been created');
          } catch (error) {
              toastr.error('Oops', 'Something went wrong');
          }
        };
      };




export const updateEvent = (event) => {
    return async dispatch => {
        try {
            dispatch({
              type: UPDATE_EVENT,
              payload: {
                  event
              }
          });
          toastr.success('Success !', 'Event has been Updated');
        } catch (error) {
            toastr.error('Oops', 'Something went wrong');
        }
      };
    
};

export const deleteEvent = (event) => {
    return async dispatch => {
        try {
            dispatch({
              type: DELETE_EVENT,
              payload: {
                  event
              }
          });
          toastr.success('Success !', 'Event has been Deleted');
        } catch (error) {
            toastr.error('Oops', 'Something went wrong');
        }
      };
    
}

export const loadEvents = () => {
    return async dispatch => {
        try {
            dispatch(asyncActionStart())
            const events = await fetchSampleData();
            dispatch({type: FETCH_EVENTS, payload: {events}})
            dispatch(asyncActionFinish())
        }
        catch (error) {
            console.log(error);
            dispatch(asyncActionError())
        }
    }

}