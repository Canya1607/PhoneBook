import {SET_CONTACTS} from '../actions/types';

const defaultState = {
  activeContacts: null,
};

const contacts = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return {activeContacts: action.payload};
    default:
      return state;
  }
};

export default contacts;
