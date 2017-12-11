import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SignupForm from './signup_form';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors.signup||[]
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
