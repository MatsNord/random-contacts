import { 
  CONTACTS_REQUESTED,
  CONTACTS_REQUESTED_SUCCESS
 } from '../actions'

export const contactsReducer = ( state = {persons: [] }, action ) => {
  switch(action.type) {
    case CONTACTS_REQUESTED:
      return {
        ...state
      };
    case CONTACTS_REQUESTED_SUCCESS:
      return {
        ...state,
        persons: action.payload.contacts
      };
    default:
      return state;
  }
};
