import {connect} from 'react-redux';
import {} from '../../../actions/types';

const mapStateToProps = state => {
  return {
    activeUser: state.users.activeUser,
    contacts: state.contacts.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
