import {SET_CONTACTS} from '../actions/types';

const defaultState = {
  contacts: null,
};

const contacts = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return {contacts: action.payload};
    default:
      return state;
  }
};

export default contacts;
