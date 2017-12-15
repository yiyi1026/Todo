import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: '',
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
    if (this.props.formType === 'login') {
      this.props.processForm({user});
    }
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    let user = {
      email: "guest1@guest.com",
      password: 'guest1'
    };
    if (this.props.formType === 'login') {
      this.props.processForm({user});
    }
  }

  renderErrors() {
    let errs
    if (this.props.errors){  
      errs = (
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }else{
      errs = (<ul></ul>)
    }
    return errs;
  }

  render() {
    let login_html = (
      <div className='login-form-container'>
        <div >
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className='login-form'>
              <h4 >
                <b>Sign In</b>
              </h4>

              <input type="text" 
              className='login-email' 
              value={this.state.email} 
              onChange={this.update('email')}
              placeholder='Email'/>
            </div>

            <div className='login-form'>
              <input type='password'
               className='login-password' 
               value={this.state.password} 
               onChange={this.update('password')} placeholder='Password'/>

            </div>
            <input type="submit" 
            value="Sign In" 
            className='login-submit'
            >
            </input>

          </form>
          <form onSubmit={this.handleDemoSubmit}      className="login-demo">
            <input type="submit" 
            value="Demo Sign In" 
            className='login-submit'>
            </input>
          </form>
        </div>
      </div>

    );
    return login_html;
  }
}

export default withRouter(SessionForm);
