import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
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
