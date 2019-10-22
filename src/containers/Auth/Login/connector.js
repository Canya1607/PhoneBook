import {connect} from 'react-redux';
import {GET_USER, ADD_USER} from '../../../actions/types';

const mapStateToProps = state => {
  return {
    users: state.users.users,
    activeUser: state.users.activeUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: userObj => dispatch({type: GET_USER, payload: userObj}),
    addUser: userObj => dispatch({type: ADD_USER, payload: userObj}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
