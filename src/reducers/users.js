import {SET_USER, SET_USERS} from '../actions/types';

const defaultState = {
  activeUser: null,
  // users: null,
};

const users = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, activeUser: action.payload};
    // case SET_USERS:
    //   return {...state, users: action.payload};
    default:
      return state;
  }
};

export default users;
