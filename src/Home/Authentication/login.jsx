import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppLogo } from '../../constant/imagepath_home';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    // Validation
    let errors = {};
    let formIsValid = true;

    // Email
    if (!email) {
      formIsValid = false;
      errors["email"] = "*Please enter email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors["email"] =
        "*Invalid email format";
    }

    // Password
    if (!password) {
      formIsValid = false;
      errors["password"] = "*Please enter password";
    }
    this.setState({ errors });

    if (formIsValid) {
      const { email, password } = this.state;


      fetch("http://localhost:4090/login-user", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "ok") {
            let id = data.data.id;
            let token = data.data.token;
            console.log("ID is::;", id, "Token is::::", token);
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("emailAddress", email);
            window.localStorage.setItem("loggedIn", true);
            window.localStorage.setItem("userId", id); // save the MongoDB ID in localStorage
            // const id = data.data.id;
            // console.log("RESPONSE DATAAAA",data.data.id)
            window.location.href = `/app/index/${id}`;
          }
          else {
            alert("Username and password Incorrect.");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("An error occurred. Please try again later.");
        });
    }
  }
  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="bg-pattern-style">
        <div className="content">
          {/* Login Tab Content */}
          <div className="account-content">
            <div className='summary_error'>
              {Object.keys(errors).map((key) => {
                return <div key={key}>{errors[key]}</div>
              })}
            </div>
            <div className="account-box">
              <div className="login-right">
                <div className="login-header">
                  <h3>Login to <span>Motor Sports Racing Events</span></h3>
                  <p className="text-muted">Access track and event details</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">Email Address</label>
                    <input type="text" className="form-control" name="email" onChange={(e) => this.setState({ email: e.target.value })} />
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group">
                      <input type="password" className="form-control pass-input" name="password" onChange={(e) => this.setState({ password: e.target.value })} />
                      {errors.password && <span className='text-danger'>{errors.password}</span>}
                      {/* <span className="fas fa-eye toggle-password" /> */}
                    </div>
                  </div>
                  <div className="text-right">
                    <Link className="forgot-link" to="/forgot-password">Forgot Password ?</Link>
                  </div>
                  <input type="submit" className="btn btn-primary login-btn" value="Login" />
                  <div className="text-center dont-have">Don't have an account? <Link to="/register">Register</Link></div>
                </form>
              </div>
            </div>
          </div>
          {/* /Login Tab Content */}
        </div>
      </div>
    );
  }
}

export default Home;
