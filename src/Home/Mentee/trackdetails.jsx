
import React, { Component } from 'react';
import { USER, USER_1, USER_2, USER_4, USER_5 } from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
// import {Placeholder} from '../constant/imagepath_home';
import {TrackImg1} from '../../constant/imagepath_home';
import { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

function TrackDetails(props) {
  const [trackDetails, setTrackDetails] = useState({});
  const id = window.localStorage.getItem("TrackID");
  console.log("ID is:", id);

  useEffect(() => {
    const fetchTrackDetails = async () => {
      const response = await fetch(`http://localhost:4090/getTrackDetails/${id}`);
      const data = await response.json();
      setTrackDetails(data.data);
      console.log(trackDetails);
     // alert(data.data);
    };
    fetchTrackDetails();
  }, [id]);
  return (
    <div>
    <div className="breadcrumb-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-12 col-12">
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/app/index">Home</Link></li>
                <li className="breadcrumb-item active" ><Link to="/app/Mentee/tracks">Tracks</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Track Name</li>
              </ol>
            </nav>
            <h2 className="breadcrumb-title">Track Name</h2>
          </div>
        </div>
      </div>
    </div>
    {/* Page Content */}
    <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            {/* Mentor Widget */}
            


            <div className="card">
              <div className="card-body">
                <div className="">
                  <div className="align-items-center">

                  <div className="col-md-12">
                    <div class="">
                      <div class="trackd_img">
                        <img src={trackDetails.image} alt="User Image" height={350}/>
                      </div>
                    </div>
                  </div>
                  <div className="row mentor-widget">
                      <div className="col-md-7">
                        <div className="user-info-cont">
                          <h4 className="usr-name">{trackDetails.ttitle}</h4>
                          <div className="post-left">
                            <ul className='blog-info'>
                              {/* <li>
                                <div className="post-author">
                                  <Link to="/app/Mentee/mentor-profile"><img src={USER} alt="Post Author" /> <span>Ruby Perrin</span></Link>
                                </div>
                              </li> */}
                              <li><i className="far fa-calendar" />{new Date(trackDetails.tdate).toLocaleDateString("en-GB")} - {new Date(trackDetails.tedate).toLocaleDateString("en-GB")}</li>
                              {/* <li><i className="far fa-clock" />10 days</li> */}
                            </ul>
                          </div>
                          {/* <div className="mentor-action">
                            <p className="mentor-type social-title">Contact</p>
                            <Link to="/app/Mentor/chat" className="btn-blue">
                              <i className="fas fa-globe" />
                            </Link>
                            <Link to="/app/Mentor/chat" className="btn-blue">
                              <i className="fas fa-envelope" />
                            </Link>
                            <a href="" className="btn-blue" onClick={()=>this.setState({isvoicecallmodal : true})} data-toggle="modal" data-target="#voice_call">
                              <i className="fas fa-phone-alt" />
                            </a>
                          </div> */}
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div class="user-info-right d-flex align-items-end flex-wrap">
                          <div className="hireme-btn text-center">
                                <span className="track-rate">${trackDetails.tprice} /per person</span>
                                <Link className="track-btn-radius mt-2" to="/app/Mentee/booking">Book Track</Link>
                          </div>
                        </div>
                      </div>
                  </div>
                  </div>

                </div>
              </div>
            </div>



            {/* /Mentor Widget */}
            {/* Mentor Details Tab */}
            <div className="card">
              <div className="card-body custom-border-card pb-0">
                {/* About Details */}
                <div className="widget about-widget custom-about mb-0">
                  <h4 className="widget-title">Descrtiption</h4>
                  <hr />
                  <p>{trackDetails.tdescription}</p>
                </div>
                {/* /About Details */}
              </div>
            </div>
           
            <div className="card">
              <div className="card-body pb-1 custom-border-card">
                {/* Location Details */}
                <div className="widget awards-widget m-0">
                  <h4 className="widget-title">Location</h4>
                  <hr />
                  <div className="experience-box">
                    <ul className="experience-list profile-custom-list">
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>Address</span>
                            <div className="row-result">{trackDetails.tdescription}</div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>Country</span>
                            <div className="row-result">{trackDetails.tcountry}</div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>City</span>
                            <div className="row-result">{trackDetails.tcity}</div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>Province</span>
                            <div className="row-result">{trackDetails.tstate}</div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>Postal Code</span>
                            <div className="row-result">{trackDetails.tpostalcode}</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Location Details */}
              </div>
            </div>

            <div className='row'>
           {/* New Contact */}
            <div className='col-md-6'>
                <div className="card">
                  <div className="card-body custom-border-card pb-0">
                    {/* About Details */}
                    <div className="widget about-widget custom-about mb-0">
                      <h4 className="widget-title">Contact</h4>
                      <hr />
                      <div className='col-md-6'>
                        {/* <div className="user-infos"> */}
                            <ul className="contact-share mb-4">
                              {/* <li><a href="#" title="Facebook"><i className="fab fa-facebook" /></a></li> */}
                              <li>
                                <Link to={trackDetails.tweblink} className="btn-blue" target="_blank">
                                    <i className="fas fa-globe" />
                                </Link>
                              </li>
                              {/* <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li> */}
                              <li>
                                <Link to={trackDetails.temail} className="btn-blue" target="_blank">
                                  <i className="fas fa-envelope" />
                                </Link>
                              </li>
                              <li>
                                <a href={trackDetails.tmobile} className="btn-blue" onClick={()=>this.setState({isvoicecallmodal : true})} data-toggle="modal" data-target="#voice_call">
                                  <i className="fas fa-phone-alt" />
                                </a>
                              </li>
                            </ul>
                            
                        {/* </div> */}
                      </div>
                    </div>
                    {/* /About Details */}
                  </div>
                </div>
            </div>

            <div className='col-md-6'>
                {/* Social */}
                <div className="card">
                  <div className="card-body custom-border-card pb-0">
                    {/* About Details */}
                    <div className="widget about-widget custom-about mb-0">
                      <h4 className="widget-title">Social</h4>
                      <hr />
                      <div className='col-md-6'>
                        {/* <div className="user-infos"> */}
                            <ul className="social-share mb-4">
                              {/* <li><a href="#" title="Facebook"><i className="fab fa-facebook" /></a></li> */}
                              <li><a href={trackDetails.ttwitter} title="Twitter" target="_blank"><i className="fab fa-twitter" /></a></li>
                              {/* <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li> */}
                              <li><a href={trackDetails.tgoogle} title="Google Plus" target="_blank"><i className="fab fa-google-plus" /></a></li>
                              <li><a href={trackDetails.tyoutube} title="Youtube" target="_blank"><i className="fab fa-youtube" /></a></li>
                            </ul>
                        {/* </div> */}
                      </div>
                    </div>
                    {/* /About Details */}
                  </div>
                </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  );
}

export default TrackDetails;
