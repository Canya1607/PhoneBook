import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    users: state.users.users,
    activeUser: state.users.activeUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
