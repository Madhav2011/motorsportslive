
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {USER,USER_1,USER_2,USER_4,USER_5} from '../../constant/imagepath_home';
// import { Link, withRouter } from 'react-router-dom';
import {USER,USER_1,USER_2,USER_3,USER_4,USER_5,USER_6,USER_7,USER_8,USER_9,USER_10,USER_11,USER_15} from '../../constant/imagepath_home';
import "rsuite/dist/rsuite.css";
import Map from "../Map-concept/Map";
import { useState } from 'react';


class ContactUs extends Component {
	constructor(props) {
		super(props);
		this.state={
			firstname:"",
			lastname:"",
			cEmail:"",
			cpnumber:"",
			cmessage:"",
      errors: {}
		};
		this.handleSubmit=this.handleSubmit.bind(this);
	  }
	  handleSubmit(e){
		e.preventDefault();

     const { firstname,lastname,cEmail,cpnumber,cmessage } = this.state;

    let errors = {};
    let formIsValid = true;


    // firstname
    if (!firstname) {
      formIsValid = false;
      errors["firstname"] = "*Please enter first name";
    } else if (firstname.length < 2) {
      formIsValid = false;
      errors["firstname"] = "*Firstname must be at least 2 characters long";
    } else if (firstname.length > 50) {
      formIsValid = false;
      errors["firstname"] = "*Firstname must be less than 50 characters long";
    }

    // lastname
    if (!lastname) {
      formIsValid = false;
      errors["lastname"] = "*Please enter last name";
    } else if (lastname.length < 2) {
      formIsValid = false;
      errors["lastname"] = "*Lastname must be at least 2 characters long";
    } else if (lastname.length > 50) {
      formIsValid = false;
      errors["lastname"] = "*Lastname must be less than 50 characters long";
    }

    // Mobile number
    if (!cpnumber) {
      formIsValid = false;
      errors["cpnumber"] = "*Please enter mobile number";
    } else if (!/^\d{10}$/.test(mnumber)) {
      formIsValid = false;
      errors["cpnumber"] = "*Mobile number must be 10 digits long";
    }

     // Event description
     if (!cmessage) {
      formIsValid = false;
      errors["cmessage"] = "*Please enter message";
    } else if (cmessage.length < 10) {
      formIsValid = false;
      errors["cmessage"] = "*Message must be at least 10 characters long";
    } else if (cmessage.length > 500) {
      formIsValid = false;
      errors["cmessage"] = "*Message must be less than 500 characters long";
    }


    // Email
    if (!cEmail) {
      formIsValid = false;
      errors["cEmail"] = "*Please enter email";
    } else if (!/\S+@\S+\.\S+/.test(cEmail)) {
      formIsValid = false;
      errors["cEmail"] =
        "*Invalid email format";
    }




    this.setState({ errors });

    if (formIsValid) {
		const {firstname,lastname,cEmail,cpnumber,cmessage}=this.state;
		console.log(firstname,lastname,cEmail,cpnumber,cmessage);
		fetch("http://localhost:4090/contactUs",{
		  method:"POST",
		  crossDomain:true,
		  headers:{
			"Content-type":"application/json",
			"Access-Control-Allow-Origin":"*",
		  },
		  body:JSON.stringify({
			firstname,
			lastname,
			cEmail,
			cpnumber,
			cmessage
		  }),
		})
		.then((res) => res.json())
		.then((data)=>{
		  console.log(data,"contactusAdded");
		  // window.location.href = "/login";
		})
	  }
  }
   render() {
    const { firstname,lastname,cEmail,cpnumber,cmessage, errors } = this.state;
      return ( 
        <div>
          {/* Breadcrumb */}
          <div className="breadcrumb-bar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-12 col-12">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/app/index">Home</Link></li>
                      <li className="breadcrumb-item active" >Contact Us</li>
                    </ol>
                  </nav>
                  <h2 className="breadcrumb-title">Contact Us</h2>
                </div>
              </div>
            </div>
              {/* Page Content */}
        <div className="">
          <div className="container-fluid">
          
		{/*           
          <div className="card">
            <div className="card-body">
              <div className="col-md-12 col-lg-12 col-xl-12 ctr_spc">
                <div className="map-listing " style={{position:"relative",overflow:"hidden"}}>
                <Map places={data} center={{ lat: -24.9923319, lng: 135.2252427 }} />
                </div>    
              </div>
            </div>  
          </div> */}
            
          <div className="row">
              {/* /Event Sidebar */}
              <div className="col-md-12 col-lg-12 col-xl-12 ctr_spc profile-tab-cont">
                <div className="card">
                  <div className="card-body">
                    {/* Contact Us Form */}
                    <div className="section-header text-center">
                      <br/><br/>
                      <h3>Fill up the form today!</h3>
                      <p className="sub-title">Are you excited to react to us? Fill out the form today.</p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className='summary_error'>
                          {Object.keys(errors).map((key) => {
                            return <div key={key}>{errors[key]}</div>
                          })}
                        </div>
                      <div className="row form-row">
                    
                        {/* First Name */}
                        <div className="col-12 field-space col-md-6">
                          <div className="form-group">
                            <label>First Name</label>
                            <input type="text" 
                            className="form-control" 
                            placeholder="Enter First Name" 
                            name="firstname"
                            value={firstname} 
                            onChange={(e)=>this.setState({firstname: e.target.value})} />
                            {errors.firstname && <span className='text-danger'>{errors.firstname}</span>}
                          </div>
                        </div>
                        {/* Last Name */}
                        <div className="col-12 field-space col-md-6">
                          <div className="form-group">
                            <label>Last Name</label>
                            <input type="text"  name="lastname" className="form-control" placeholder="Enter Last Name" value={lastname} onChange={(e)=>this.setState({lastname: e.target.value})}/>
                            {errors.lastname && <span className='text-danger'>{errors.lastname}</span>}
                          </div>
                        </div>
                        {/* Work Email */}
                        <div className="col-12 field-space col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input type="text"  name="cEmail" className="form-control" placeholder="Enter Email" value={cEmail} onChange={(e)=>this.setState({cEmail: e.target.value})}/>
                            {errors.cEmail && <span className='text-danger'>{errors.cEmail}</span>}
                          </div>
                        </div>
                        {/* Enter Phone Number */}
                        <div className="col-12 field-space col-md-6">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text"  name="cpnumber" className="form-control" placeholder="Enter Phone Number" value={cpnumber} onChange={(e)=>this.setState({cpnumber: e.target.value})}/>
                            {errors.cpnumber && <span className='text-danger'>{errors.cpnumber}</span>}
                          </div>
                        </div>
                        {/* Message */}
                        <div className="col-12 field-space">
                          <div className="form-group">
                            <label>Message</label>
                            <textarea type="text"  name="cmessage" className="form-control" placeholder="Enter Message" value={cmessage} onChange={(e)=>this.setState({cmessage: e.target.value})}/>
                            {errors.cmessage && <span className='text-danger'>{errors.cmessage}</span>}
                          </div>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="submit-section">
                        {/* <button type="submit" className="btn btn-primary submit-btn">Submit</button> */}
						            <input type="submit" className="btn btn-primary submit-btn" value="Submit" />
                      </div>
                    </form>
                    {/* /Contact Us Form */}
                  </div>
                </div>
              </div>


            
          </div>
        </div>
        </div>
          {/* Breadcrumb */}
        </div>
      </div>
      );
   }
}

export default ContactUs;
