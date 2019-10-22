import {ADD_USER, GET_USER, GET_USERS, REMOVE_USER} from '../actions/types';

const defaultState = {
  activeUser: null,
  users: null,
};

const users = async (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      return state;
    case GET_USER: {
      return {...state, activeUser: action.payload};
    }
    case GET_USERS:
      return {...state, users: action.payload};
    case REMOVE_USER:
      return;
    default:
      return state;
  }
};

export default users;
