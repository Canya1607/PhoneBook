import {ADD_USER, GET_USER, GET_USERS, REMOVE_USER} from '../actions/types';

const defaultState = {
  activeUser: null,
  users: null,
};

const users = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      return;
    case GET_USER:
      return;
    case GET_USERS:
      return;
    case REMOVE_USER:
      return;
    default:
      return state;
  }
};

export default users;
