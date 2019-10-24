import {SET_USER} from '../actions/types';

const defaultState = {
  activeUser: null,
};

const users = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, activeUser: action.payload};
    default:
      return state;
  }
};

export default users;
