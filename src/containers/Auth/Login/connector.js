import {connect} from 'react-redux';

const mapStateToProps = state => ({
  //TODO: Remove after getting REAL Data
  name: state.name,
});

const mapDispatchToProps = dispatch => {
  return {
    handleWork: dispatch({type: 'ALL'}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
