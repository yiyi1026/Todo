import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({},this.state);
    if (this.props.formType === 'signup') {
      this.props.processForm({user});
    }
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    let user = {
      email: "guest1@guest.com",
      password: 'guest1'
    };
    if (this.props.formType === 'signup') {
      this.props.processForm({user});
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let login_html = (
      <div className='login-form-container'>
        <div >
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className='login-form'>
              <h4 >
                <b>Sign Up</b>
              </h4>

              <input type="text" 
              className='login-email' 
              value={this.state.email} 
              onChange={this.update('email')}
              placeholder='Email'/>
            </div>

            <div className='login-form'>
              <input type='text'
               className='login-username' 
               value={this.state.username} 
               onChange={this.update('username')} placeholder='Username'/>

            </div>

            <div className='login-form'>
              <input type='password'
               className='login-password' 
               value={this.state.password} 
               onChange={this.update('password')} placeholder='Password'/>

            </div>
            <input type="submit" 
            value="Sign Up" 
            className='login-submit'
            >
            </input>

          </form>
        </div>
      </div>

    );
    return login_html;
  }
}

export default withRouter(SignupForm);
