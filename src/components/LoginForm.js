import React, { Component } from 'react';
import auth from '../firebase';

export class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    auth.signInWithEmailAndPassword(email,password)
    .then(Response => {
      this.
    })
    this.setState({
      username: '',
      password: '',
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={this.onChange}
            value={this.state.username}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={this.onChange}
            value={this.state.password}
          />
          <div>
            <button type='submit' className='btn'>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
