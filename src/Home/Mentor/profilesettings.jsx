import React, { Component } from 'react';
import {USER} from '../../constant/imagepath_home';
import Sidebar from "./sidebar"
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';
import "rsuite/dist/rsuite.css";
import { DateRangePicker } from 'rsuite';
import DatePicker from 'rsuite/DatePicker';

class ProfileSettings extends Component {
   render() {
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
                    <li className="breadcrumb-item active" aria-current="page">Add Event</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Add Event</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              {/* /Event Sidebar */}
              <div className="col-md-7 col-lg-8 col-xl-9 ctr_spc">
                <div className="card">
                  <div className="card-body">
                    {/* Add Event Form */}
                    <form>
                      <div className="row form-row">
                        <div className="col-12 col-md-12">
                          <div className="form-group">
                            <div className="change-avatar">
                              <div className="profile-img">
                                <img src={USER} alt="User Image" />
                              </div>
                              {/* eventId */}
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="eventId" hidden/>
                              </div>
                              {/* Foreign Keys */}
                              {/* userId  */}
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="userId " hidden/>
                              </div>
                              {/* trackId  */}
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="trackId " hidden/>
                              </div>
                              {/* Event Image */}
                              <div className="upload-img">
                                <div className="change-photo-btn">
                                  <span><i className="fa fa-upload" /> Upload Image</span>
                                  <input type="file" className="upload" />
                                </div>
                                <small className="form-text text-muted">Allowed JPG or PNG</small>
                              </div>
                            </div>
                          </div>
                        </div>
                    
                        {/* Event Title */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Event Title</label>
                            <input type="text" className="form-control" placeholder="Enter Event Title" />
                          </div>
                        </div>
                        {/* Group Ownership */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Assign Organizer</label>
                            <select className="form-control select">
                              <option>1morelap</option>
                              <option>3 Balls Racing</option>
                              <option>6th Gear</option>
                              <option>Apex Driver Training</option>
                              <option>ASE Lapping Club</option>
                            </select>
                          </div>
                        </div>
                        {/* Track */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Track</label>
                            <select className="form-control select">
                              <option>Calabogie</option>
                              <option>CTMP (Mosport) - Grand Prix</option>
                              <option>CTMP (Mosport) - DDT</option>
                              <option>Grand Bend Motorplex</option>
                              <option>TMP (Cayuga) - Road Course</option>
                            </select>
                          </div>
                        </div>
                        {/* Event Type */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Event Type</label>
                            <select className="form-control select">
                              <option>Race</option>
                              <option>Time Attack</option>
                              <option>Lapping</option>
                              <option>Hpde</option>
                              <option>Autox</option>
                              <option>Karting</option>
                            </select>
                          </div>
                        </div>
                        {/* eventDesc */}
                        <div className="col-12">
                          <div className="form-group">
                            <label>Event Description</label>
                            <textarea type="text" className="form-control" placeholder="Enter Event Description" />
                          </div>
                        </div>
                        
                         
                        {/* Event Date */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Event Date</label>
                            <div className="cal-icon">
                              <DatePicker oneTap className="daterangepickercust" />
                            </div>
                          </div>
                        </div>
                        {/* Start/End Time */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Start/End Duration</label>
                            <DateRangePicker className="daterangepickercust"
                              format="HH:mm:ss"
                              ranges={[]}
                              defaultCalendarValue={[new Date('2022-02-01 00:00:00'), new Date('2022-05-01 23:59:59')]}
                            />
                          </div>
                        </div>
                        {/* Mobile */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Mobile</label>
                            <input type="text" placeholder="+1 202-555-0125" className="form-control" />
                          </div>
                        </div>
                        {/* Address */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="806 Twin Willow Lane" />
                          </div>
                        </div>
                        
                        {/* City */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" placeholder="Old Forge" />
                          </div>
                        </div>
                        {/* State */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>State</label>
                            <input type="text" className="form-control" placeholder="Newyork" />
                          </div>
                        </div>
                        {/* Zip Code */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Zip Code</label>
                            <input type="text" className="form-control" placeholder={13420} />
                          </div>
                        </div>
                        {/* Country */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control" placeholder="United States" />
                          </div>
                        </div>

                         {/* Email */}
                         <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control" placeholder="Enter Email" />
                          </div>
                        </div>
                        {/* Email */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Website</label>
                            <input type="text" className="form-control" placeholder="Enter Website Link" />
                          </div>
                        </div>

                        {/* Social Accounts */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Twitter</label>
                            <input type="text" className="form-control" placeholder="@username" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Google+ URL</label>
                            <input type="text" className="form-control" placeholder="http://" />
                          </div>
                        </div>
                        
                        {/* costPerParticipant */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Price</label>
                            <input type="text" className="form-control" placeholder="Enter Price" />
                            <p className='sublineprice'>Enter numbers only (no dollar sign $). Cost of the event. If pricing varies, enter the lowest cost here and add pricing details in the event details field.</p>
                          </div>
                        </div>
                        {/* Additional Details */}
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Additional Details</label>
                            <div class="form-check">
                              <input type="checkbox" value="instructorsavailable" className="form-check-input"/>
                              <label>Instructors available</label>
                            </div>
                            <div class="form-check">
                              <input type="checkbox" value="carisprovided" className="form-check-input" />
                              <label>Car is provided</label>
                            </div>
                            <div class="form-check">
                              <input type="checkbox" value="cornermarshalsarepresent" className="form-check-input" />
                              <label>Corner marshals are present</label>
                            </div>
                            <div class="form-check">
                              <input type="checkbox" value="helmetsarerequired" className="form-check-input" />
                              <label>Helmets are required</label>
                            </div>
                            <div class="form-check">
                              <input type="checkbox" value="ambulanceisonsite" className="form-check-input" />
                              <label>Ambulance is on-site</label>
                            </div>
                            <div class="form-check">
                              <input type="checkbox" value="towtruckisonsite" className="form-check-input" />
                              <label>Tow truck is on-site</label>
                            </div>
                            <div class="form-check">
                              <input type="checkbox" value="lunchincluded" className="form-check-input"/>
                              <label>Lunch included</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="submit-section">
                        <button type="submit" className="btn btn-primary submit-btn">Add Event</button>
                      </div>
                    </form>
                    {/* /Add event Form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}


        {/* Change Password form */}
        <div className="col-md-7 col-lg-8 col-xl-9 ctr_spc">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-6">
                        {/* Change Password Form */}
                        <form>
                          <div className="form-group">
                            <label>Old Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>New Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="submit-section">
                            <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                          </div>
                        </form>
                        {/* /Change Password Form */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Change Password form */}



      </div>
      );
   }
}



export default ProfileSettings;