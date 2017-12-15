import {connect} from 'react-redux';

import {login, logout, signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, { location }) => {
  const processForm = login;
  return {
    processForm: user => dispatch(processForm(user)),
    formType: 'login'
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);