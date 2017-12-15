import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SignupForm from './signup_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.signup||[]
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const processForm = signup;
  return {
    processForm: user => dispatch(signup(user)),
    formType: 'signup'
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
