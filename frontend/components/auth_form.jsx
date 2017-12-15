import React from 'react';
// import {Provider} from 'react-redux';

import {
  // Route,
  withRouter
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import SignupFormContainer from './signup_form/signup_form_container';
import {AuthRoute, 
  // ProtectedRoute
} from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';


const AuthForm = () => (
  <div className="signup_login">
    <AuthRoute exact path="/login" component={SignupFormContainer}/>
    <div></div>
    <AuthRoute exact path="/login" component={SessionFormContainer}/>
  </div>
);

export default withRouter(AuthForm);
