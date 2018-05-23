import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';

import './App.css';
import AuthService from './components/AuthService'

function SiginForm(props) {

  function updateUsername(evt)  {
    console.log(evt.target.value);
    props.updateLoginFromStae({username: evt.target.value});
  }

  function updatePassword(evt) {
    props.updateLoginFromStae({password: evt.target.value})
  }

  function handleLoginSubmit(evt) {
    evt.preventDefault();

    props.onLoginSubmit();
    console.log(evt);
  }

  return (
    <div className="custom-paragraph">
    <label><h3>Login to your account</h3></label>
    <div className="login-style">
      <form onSubmit={handleLoginSubmit} className="login-page clearfix">
      <div className="form-group">
        <label>Email or Username</label>  
         <div className="input-group">
          <span className="input-group-addon" id="basic-addon1"><i className="user-icon fa fa-user" aria-hidden="true"></i></span>
          <input value={props.username} onChange={updateUsername} name="username"  type="text" className="form-control" aria-describedby="basic-addon1"/>
        </div>
      </div>
        <label>Password</label>
        <div className="input-group">  
          <span className="input-group-addon" id="basic-addon2"><i className="password-icon fa fa-unlock-alt" aria-hidden="true"></i></span>
          <input value={props.password} onChange={updatePassword} name="password" type="password" className="form-control" aria-describedby="basic-addon2"/>
        </div>
      <div className="form-group error-message">
          <label>Username or Password incorrect.</label>
      </div>
       <button type="submit" className="blue-color red-color">Sign in</button>
      </form>
    </div>
  </div>
  )
}

class App extends Component {

  constructor(props) {
    super(props);
    this.authService = new AuthService();
    console.log(props)
    this.state = {
      username: '',
      password: ''
    }
    this.apiUrl = `http://172.19.44.41:3000/users/login1`;
  }

  updateLoginFromStae = (formData) => {
    this.setState(formData);
  }

  onLoginSubmit = () => {
    console.log(this.state)
    this.authService.login(this.state)
      .then((res) => {
        console.log(this.res)
      })
    // axios.post(this.apiUrl, this.state).
    // then((res) => {
    //   console.log(res);
    // })

  }

  componentDidMount() {
   
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row login-parent" >
          <div className="paragraph col-sm-6">
            <div className="custom-paragraph logo-paragraph">
              <a className="apa-login-logo"></a>
              <label>
                <h1 className="apa-title">Utilities Services</h1>
                <h4 className="sub-title">Vegetation Productivity App</h4>
                </label>
              <div className="paragraph-style">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
          </div>
        </div>
        <div className="signin col-sm-6">
          <SiginForm
          username={this.state.username}
          password={this.state.password}
          updateLoginFromStae = {this.updateLoginFromStae}
          onLoginSubmit= {this.onLoginSubmit}></SiginForm>
      </div>
    </div>
  </div>
  )
  }
}

export default App;
