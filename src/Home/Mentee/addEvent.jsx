import React, { Component } from 'react';
import { USER, USER_1, USER_2, USER_4, USER_5 } from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Link, withRouter } from 'react-router-dom';
import "rsuite/dist/rsuite.css";
import { DateRangePicker } from 'rsuite';
import { Placeholder } from '../../constant/imagepath_home';
import DatePicker from 'rsuite/DatePicker';
import { useState } from 'react';
import { event } from 'jquery';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etitle: "",
      aorganizer: "",
      track: "",
      etype: "",
      edescription: "",
      mnumber: "",
      address: "",
      cityname: "",
      pname: "",
      pcode: "",
      cname: "",
      email: "",
      wlink: "",
      tlink: "",
      gpurl: "",
      pric: "",
      edate:"",
      eedate:"",
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { etitle, aorganizer, track, etype, edescription, mnumber, address, cityname, pname, pcode, cname, email, wlink, tlink, gpurl, pric, edate, eedate } = this.state;
    // console.log ( etitle, aorganizer, track, etype, edescription, mnumber, address, cityname, pname, pcode, cname, email, wlink, tlink, gpurl, pric, edate, eedate )

    // Validation
    let errors = {};
    let formIsValid = true;

    // Event title
    if (!etitle) {
      formIsValid = false;
      errors["etitle"] = "*Please enter event title";
    } else if (etitle.length < 2) {
      formIsValid = false;
      errors["etitle"] = "*Event title must be at least 2 characters long";
    } else if (etitle.length > 50) {
      formIsValid = false;
      errors["etitle"] = "*Event title must be less than 50 characters long";
    }

    // Organizer name
    if (!aorganizer) {
      formIsValid = false;
      errors["aorganizer"] = "*Please select organizer name";
    }

    // Event type
    if (!etype) {
      formIsValid = false;
      errors["etype"] = "*Please select an event type";
    }

    // City name
    if (!cityname) {
      formIsValid = false;
      errors["cityname"] = "*Please enter city name";
    } else if (cityname.length > 50) {
      formIsValid = false;
      errors["cityname"] = "*City name must be less than 50 characters long";
    }

    // Postal code
    if (!pcode) {
      formIsValid = false;
      errors["pcode"] = "*Please enter postal code";
    } 
    // else if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(pcode)) {
    //   formIsValid = false;
    //   errors["pcode"] = "*Invalid postal code format";
    // }

    // Track
    if (!track) {
      formIsValid = false;
      errors["track"] = "*Please select a track";
    }

    // Event description
    if (!edescription) {
      formIsValid = false;
      errors["edescription"] = "*Please enter description";
    } else if (edescription.length < 10) {
      formIsValid = false;
      errors["edescription"] = "*Description must be at least 10 characters long";
    } else if (edescription.length > 500) {
      formIsValid = false;
      errors["edescription"] = "*Description must be less than 500 characters long";
    }

    // Mobile number
    if (!mnumber) {
      formIsValid = false;
      errors["mnumber"] = "*Please enter mobile number";
    } else if (!/^\d{10}$/.test(mnumber)) {
      formIsValid = false;
      errors["mnumber"] = "*Mobile number must be 10 digits long";
    }

    // Address
    if (!address) {
      formIsValid = false;
      errors["address"] = "*Please enter address";
    } else if (address.length > 100) {
      formIsValid = false;
      errors["address"] = "*Address must be less than 100 characters long";
    }

    // Province name
    if (!pname) {
      formIsValid = false;
      errors["pname"] = "*Please enter province name";
    } else if (pname.length > 50) {
      formIsValid = false;
      errors["pname"] = "*Province name must be less than 50 characters long";
    }

    // Country name
    if (!cname) {
      formIsValid = false;
      errors["cname"] = "*Please enter country name";
    } else if (cname.length > 50) {
      formIsValid = false;
      errors["cname"] = "*Country name must be less than 50 characters long";
    }

    // Email
    if (!email) {
      formIsValid = false;
      errors["email"] = "*Please enter email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors["email"] =
        "*Invalid email format";
    }
    // Website URL
    if (!wlink) {
      formIsValid = false;
      errors["wlink"] = "*Please enter website URL";
    }
    if (!wlink) {
      formIsValid = false;
      errors["wlink"] = "*Please enter website link";
    }

    if (!tlink) {
      formIsValid = false;
      errors["tlink"] = "*Please enter twitter link";
    }

    if (!gpurl) {
      formIsValid = false;
      errors["gpurl"] = "*Please enter facebook url";
    }

    if (!pric) {
      formIsValid = false;
      errors["pric"] = "*Please enter price";
    } else if (isNaN(pric)) {
      formIsValid = false;
      errors["pric"] = "*Price must be a number";
    } else if (pric < 0) {
      formIsValid = false;
      errors["pric"] = "*Price must be a positive number";
    } else if (pric > 1000000) {
      formIsValid = false;
      errors["pric"] = "*Price must be less than 1000000";
    }
    // tdate link
    if (!edate) {
      formIsValid = false;
      errors["edate"] = "*Please enter start date";
    }
    // tedate link
    if (!eedate) {
      formIsValid = false;
      errors["eedate"] = "*Please enter end date";
    }

    this.setState({ errors });

    if (formIsValid) {
      const { etitle, aorganizer, track, etype, edescription, mnumber, address, cityname, pname, pcode, cname, email, wlink, tlink, gpurl, pric, edate, eedate } = this.state;
      console.log ( etitle, aorganizer, track, etype, edescription, mnumber, address, cityname, pname, pcode, cname, email, wlink, tlink, gpurl, pric, edate, eedate );
      fetch("http://localhost:4090/addEvent", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          etitle,
          aorganizer,
          track,
          etype,
          edescription,
          mnumber,
          address,
          cityname,
          pname,
          pcode,
          cname,
          email,
          wlink,
          tlink,
          gpurl,
          pric,
          edate,
          eedate,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "eventAdded");
          alert("Event added successfully");
          this.setState({
            etitle: "",
            aorganizer: "",
            track: "",
            etype: "",
            edescription: "",
            mnumber: "",
            address: "",
            cityname: "",
            pname: "",
            pcode: "",
            cname: "",
            email: "",
            wlink: "",
            tlink: "",
            gpurl: "",
            pric: "",
            edate: "",
            eedate: "",
            errors: {}
          });
        })
        .catch((error) => {
          console.log(error);
          alert("Error adding event");
        });
    }
  }
  render() {
    const { history } = this.props;
    const { etitle, aorganizer, track, etype, edescription, mnumber, address, cityname, pname, pcode, cname, email, wlink, tlink, gpurl, pric, edate, eedate, errors } = this.state;

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
                    <li className="breadcrumb-item active" ><Link to="/app/Mentee/search">Event</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Event</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Add Event</h2>
              </div>
            </div>
          </div>
          {/* Page Content */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                {/* /Event Sidebar */}
                <div className="col-md-12 col-lg-12 col-xl-12 ctr_spc">
                  <div className="card">
                    <div className="card-body">
                      {/* Add Event Form */}
                      <form onSubmit={this.handleSubmit} encType="multipart/form-data">

                        <div className='summary_error'>
                          {Object.keys(errors).map((key) => {
                            return <div key={key}>{errors[key]}</div>
                          })}
                        </div>
                        <div className="row form-row">
                          <div className="col-12 field-space col-md-12">
                            <div className="form-group">
                              <div className="change-avatar">
                                <div className="profile-img">
                                  {/* {this.state.event_image && (
                                      <img src={this.state.event_image} alt="Event Image" />
                                    )} */}
                                </div>
                                {/* Event Image */}
                                <div className="upload-img">
                                  <div className="change-photo-btn">
                                    <span><i className="fa fa-upload" /> Upload Image</span>
                                    <input type="file" className="upload" name="event_image" onChange={(e) => {
                                      const file = e.target.files[0];
                                      const reader = new FileReader();
                                      reader.readAsDataURL(file);
                                      reader.onload = () => {
                                        const image = reader.result;
                                        this.setState({ event_image: image });
                                      };
                                    }} />

                                  </div>
                                  <small className="form-text text-muted">Allowed JPG or PNG</small>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Event Title */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Event Title</label>
                              <input type="text" className="form-control" placeholder="Enter Event Title"
                                name="etitle"
                                value={etitle}
                                onChange={(e) => this.setState({ etitle: e.target.value })} />
                              {errors.etitle && <span className='text-danger'>{errors.etitle}</span>}
                            </div>
                          </div>
                          {/* Group Ownership */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Assign Organizer</label>
                              <select className="form-control select" name="aorganizer" onChange={(e) => this.setState({ aorganizer: e.target.value })} value={aorganizer}>
                                <option value="">Select</option>
                                <option value="1morelap">1morelap</option>
                                <option value="3 Balls Racing">3 Balls Racing</option>
                                <option value="6th Gear">6th Gear</option>
                                <option value="Apex Driver Training">Apex Driver Training</option>
                                <option value="ASE Lapping Club">ASE Lapping Club</option>
                              </select>
                              {errors.aorganizer && <span className='text-danger'>{errors.aorganizer}</span>}
                            </div>
                          </div>
                          {/* Track */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Track</label>
                              <select className="form-control select" name="track_name" onChange={(e) => this.setState({ track: e.target.value })} value={track}>
                                <option value="">Select</option>
                                <option value="Calabogie">Calabogie</option>
                                <option value="CTMP (Mosport) - Grand Prix">CTMP (Mosport) - Grand Prix</option>
                                <option value="CTMP (Mosport) - DDT">CTMP (Mosport) - DDT</option>
                                <option value="Grand Bend Motorplex">Grand Bend Motorplex</option>
                                <option value="TMP (Cayuga) - Road Course">TMP (Cayuga) - Road Course</option>
                              </select>
                              {errors.track && <span className='text-danger'>{errors.track}</span>}
                            </div>
                          </div>
                          {/* Event Type */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Event Type</label>
                              <select className="form-control select" name="event_type" onChange={(e) => this.setState({ etype: e.target.value })} value={etype}>
                                <option value="">Select</option>
                                <option value="Race">Race</option>
                                <option value="Time Attack">Time Attack</option>
                                <option value="Lapping">Lapping</option>
                                <option value="Hpde">Hpde</option>
                                <option value="Autox">Autox</option>
                                <option value="Karting">Karting</option>
                              </select>
                              {errors.etype && <span className='text-danger'>{errors.etype}</span>}
                            </div>
                          </div>
                          {/* eventDesc */}
                          <div className="col-12 field-space">
                            <div className="form-group">
                              <label>Event Description</label>
                              <textarea type="text" className="form-control" placeholder="Enter Event Description" name="event_description" value={edescription} onChange={(e) => this.setState({ edescription: e.target.value })} />
                              {errors.edescription && <span className='text-danger'>{errors.edescription}</span>}
                            </div>
                          </div>

                          <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Event Start Date</label>
                                    {/* <CDateRangePicker label="Date range" locale="en-US" /> */}
                                    {/* <DateRangePicker className="daterangepickercust" /> */}
                                    <DatePicker 
                                      className="daterangepickercust"
                                      oneTap 
                                      onSelect={(date) => this.setState({ edate: date })}
                                    />
                                    {errors.tdate && <span className='text-danger'>{errors.edate}</span>}
                                  </div>
                                </div>
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Event End Date</label>
                                    {/* <CDateRangePicker label="Date range" locale="en-US" /> */}
                                    {/* <DateRangePicker className="daterangepickercust" /> */}
                                    <DatePicker 
                                      className="daterangepickercust"
                                      oneTap 
                                      onSelect={(date) => this.setState({ eedate: date })}
                                    />
                                    {errors.tedate && <span className='text-danger'>{errors.eedate}</span>}
                                  </div>
                                </div>

                          {/* Event Date */}
                          {/* <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Event Date</label>
                              <div className="cal-icon">
                                <DateRangePicker className="daterangepickercust" name="event_date" />
                              </div>
                            </div>
                          </div> */}
                          {/* Start/End Time */}
                          {/* <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Start/End Duration</label>
                              <DateRangePicker className="daterangepickercust"
                                format="HH:mm:ss"
                                ranges={[]}
                                defaultCalendarValue={[new Date('2022-02-01 00:00:00'), new Date('2022-05-01 23:59:59')]}
                              />
                            </div>
                          </div> */}
                          {/* Mobile */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Mobile</label>
                              <input type="text" placeholder="+1 202-555-0125" value={mnumber} className="form-control" name="mobile" onChange={(e) => this.setState({ mnumber: e.target.value })} />
                              {errors.mnumber && <span className='text-danger'>{errors.mnumber}</span>}
                            </div>
                          </div>
                          {/* Address */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Address</label>
                              <input type="text" className="form-control" value={address} placeholder="806 Twin Willow Lane" name="address_field" onChange={(e) => this.setState({ address: e.target.value })} />
                              {errors.address && <span className='text-danger'>{errors.address}</span>}
                            </div>
                          </div>

                          {/* City */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>City</label>
                              <input type="text" className="form-control" value={cityname} placeholder="Waterloo" name="city" onChange={(e) => this.setState({ cityname: e.target.value })} />
                              {errors.cityname && <span className='text-danger'>{errors.cityname}</span>}
                            </div>
                          </div>
                          {/* Province */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Province</label>
                              <input type="text" className="form-control" value={pname} placeholder="Ontario" name="province" onChange={(e) => this.setState({ pname: e.target.value })} />
                              {errors.pname && <span className='text-danger'>{errors.pname}</span>}
                            </div>
                          </div>
                          {/*Postal Code */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Postal Code</label>
                              <input type="text" className="form-control" value={pcode} placeholder={13420} name="postal_code" onChange={(e) => this.setState({ pcode: e.target.value })} />
                              {errors.pcode && <span className='text-danger'>{errors.pcode}</span>}
                            </div>
                          </div>
                          {/* Country */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Country</label>
                              <input type="text" className="form-control" value={cname} placeholder="Canada" name="country" onChange={(e) => this.setState({ cname: e.target.value })} />
                              {errors.cname && <span className='text-danger'>{errors.cname}</span>}
                            </div>
                          </div>

                          {/* Email */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>E-mail</label>
                              <input type="text" className="form-control" value={email} placeholder="Enter Email" name="e_mail" onChange={(e) => this.setState({ email: e.target.value })} />
                              {errors.email && <span className='text-danger'>{errors.email}</span>}
                            </div>
                          </div>
                          {/* Website */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Website</label>
                              <input type="text" className="form-control" value={wlink} placeholder="Enter Website Link" name="website" onChange={(e) => this.setState({ wlink: e.target.value })} />
                              {errors.wlink && <span className='text-danger'>{errors.wlink}</span>}
                            </div>
                          </div>

                          {/* Social Accounts */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Twitter</label>
                              <input type="text" className="form-control" value={tlink} placeholder="@username" name="twitter" onChange={(e) => this.setState({ tlink: e.target.value })} />
                              {errors.tlink && <span className='text-danger'>{errors.tlink}</span>}
                            </div>
                          </div>
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Facebook</label>
                              <input type="text" className="form-control" value={gpurl} placeholder="Enter Facebook Link" name="google_plus_url" onChange={(e) => this.setState({ gpurl: e.target.value })} />
                              {errors.gpurl && <span className='text-danger'>{errors.gpurl}</span>}
                            </div>
                          </div>

                          {/* costPerParticipant */}
                          <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Price</label>
                              <input type="text" className="form-control" value={pric} placeholder="Enter Price" name="price" onChange={(e) => this.setState({ pric: e.target.value })} />
                              {errors.pric && <span className='text-danger'>{errors.pric}</span>}
                              <p className='sublineprice'>Enter numbers only (no dollar sign $). Cost of the event. If pricing varies, enter the lowest cost here and add pricing details in the event details field.</p>
                            </div>
                          </div>
                          {/* Additional Details */}
                          {/* <div className="col-12 field-space col-md-6">
                            <div className="form-group">
                              <label>Additional Details</label>
                              <div className="form-check">
                                <input type="checkbox" value="Instructors available" className="form-check-input"
                                  name="additional_details" />
                                <label>Instructors available</label>
                              </div>
                              <div className="form-check">
                                <input type="checkbox" value="Car is provided" className="form-check-input" name="additional_details" />
                                <label>Car is provided</label>
                              </div>
                              <div className="form-check">
                                <input type="checkbox" value="Corner marshals are present" className="form-check-input" name="additional_details" />
                                <label>Corner marshals are present</label>
                              </div>
                              <div className="form-check">
                                <input type="checkbox" value="Helmets are required" className="form-check-input" name="additional_details" />
                                <label>Helmets are required</label>
                              </div>
                              <div className="form-check">
                                <input type="checkbox" value="Ambulance is on-site" className="form-check-input" name="additional_details" />
                                <label>Ambulance is on-site</label>
                              </div>
                              <div className="form-check">
                                <input type="checkbox" value="Tow truck is on-site" className="form-check-input" name="additional_details" />
                                <label>Tow truck is on-site</label>
                              </div>
                              <div className="form-check">
                                <input type="checkbox" value="Lunch included" className="form-check-input" name="additional_details" />
                                <label>Lunch included</label>
                              </div>
                            </div>
                          </div> */}
                        </div>
                        {/* Button */}
                        <div className="submit-section">
                          <input type="submit" className="btn btn-primary submit-btn" value="Add Event" />

                        </div>
                      </form>
                      {/* /Add event Form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Breadcrumb */}
      </div>
    );
  }
}
export default withRouter(AddEvent);
