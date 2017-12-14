import {connect} from 'react';

import {login, logout, signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
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