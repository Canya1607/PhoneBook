import {connect} from 'react-redux';
import {GET_USER, ADD_USER} from '../../../actions/types';

const mapStateToProps = state => {
  return {
    users: state.users.users,
    activeUser: state.users.activeUser,
  };
};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
