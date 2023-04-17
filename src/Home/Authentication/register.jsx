
import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {AppLogo} from '../../constant/imagepath_home';


export default class Home extends Component {
 
  constructor(props){
    super(props);
    this.state={
      fname:"",
      lname:"",
      email:"",
      password:"",
      conpassword:"",
      userType:"",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
 
  handleSubmit(e){
    e.preventDefault();
    const {fname,lname,email,password,conpassword,userType}=this.state;
    console.log(fname,lname,email,password,conpassword,userType);
    fetch("http://localhost:4090/register",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-type":"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        fname,
        lname,
        email,
        password,
        conpassword,
        userType,
      }),
    })
    .then((res) => res.json())
    .then((data)=>{
      console.log(data,"userRegister");
      if (data.status == "ok") {
        alert("Register Successfully.");
        window.location.href = "/login";
      }
      else
      {
        alert("Register is not successful.");
      }
    })
  }
   render() {
      return ( 
        
      <div className="bg-pattern-style bg-pattern-style-register">
      <div className="content">
        {/* Register Content */}
        <div className="account-content">
          <div className="account-box">
            <div className="login-right">
              <div className="login-header">
                <h3><span>REGISTER</span> MOTOR SPORTS RACING EVENTS</h3>
                <p className="text-muted">Access to our dashboard</p>
              </div>
              {/* Register Form */}
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label">First Name</label>
                      <input id="first-name" type="text" className="form-control" name="first_name" autofocus onChange={(e)=>this.setState({fname: e.target.value})}/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label">Last Name</label>
                      <input id="last-name" type="text" className="form-control" name="last_name" onChange={(e)=>this.setState({lname: e.target.value})} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-control-label">Email Address</label>
                  <input id="email" type="email" className="form-control" onChange={(e)=>this.setState({email: e.target.value})}/>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label">Password</label>
                      <input id="password" type="password" className="form-control" name="password" onChange={(e)=>this.setState({password: e.target.value})}/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label">Confirm Password</label>
                      <input id="password-confirm" type="password" className="form-control" name="password_confirmation" onChange={(e)=>this.setState({conpassword: e.target.value})}/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                <div>
            <span className="fw-bold">Register As </span>&nbsp;&nbsp;
            <input
              type="radio"
              name="userType"
              value="User"
              onChange={(e)=>this.setState({userType: e.target.value})}
            />
            &nbsp;User&nbsp;
            <input
              type="radio"
              name="userType"
              value="Organizer"
              onChange={(e)=>this.setState({userType: e.target.value})}
            />
            &nbsp;Organizer
          </div>
                </div>
               
                  <input type="submit" className="btn btn-primary login-btn" value="Create Account" />
                {/* <button className="btn btn-primary login-btn" type="submit">Create Account</button> */}
                <div className="account-footer text-center mt-3">
                  Already have an account? <Link className="forgot-link mb-0" to="/login">Login</Link>
                </div>
              </form>
              {/* /Register Form */}
            </div>
          </div>
        </div>
        {/* /Register Content */}
      </div>
    </div>
      );
   }
}


