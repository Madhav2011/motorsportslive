
import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import {AppLogo} from '../../constant/imagepath_home';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const {email}=this.state;
    console.log("Email Address is",email);
    fetch("http://localhost:4090/forgot-password",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-type":"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        email,
      }),
    })
    .then((res) => res.json())
    .then((data)=>{
      console.log("Reset Password Successfully....");
      alert("Reset Password Link Sent.");
      alert(data.status);
      window.location.href = "/login";
    })
  }
   render() {
      return ( 
        <div className="bg-pattern-style">
        <div className="content">
          {/* Account Content */}
          <div className="account-content">
            <div className="account-box">
              <div className="login-right">
                <div className="login-header">
                  <h3>Forgot Password?</h3>
                  <p className="text-muted">Enter your email to get a password reset link</p>
                </div>
                {/* Forgot Password Form */}
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">Email Address</label>
                    <input type="email" className="form-control" onChange={(e)=>this.setState({email: e.target.value})}/>
                  </div>
                  <div className="text-right">
                    <Link className="forgot-link" to="/login">Remember your password?</Link>
                  </div>
                  <input type="submit" className="btn btn-primary login-btn" value="Reset Password" />
                </form>
                {/* /Forgot Password Form */}
              </div>
            </div>
          </div>
          {/* /Account Content */}
        </div>
      </div>
      );
   }
}

export default Home;
