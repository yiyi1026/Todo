import React from 'react';
import {Provider} from 'react-redux';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import AuthForm from './auth_form';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';


const App = () => (
    <div >
      <h1>Todos</h1>
      <GreetingContainer />
      {/* <Switch> */}
        {/* <ProtectedRoute path='/' component={}/> */}
        <AuthRoute path="/login" component={AuthForm}/>
      {/* </Switch> */}
     
    </div>
);

export default App;
