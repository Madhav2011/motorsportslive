import React, { Component } from 'react';
import { USER_P } from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Link, useParams } from 'react-router-dom';
import {TrackImg1} from '../../constant/imagepath_home';
import { useState, useEffect } from 'react';



  export default function  EventDetails({eventPageDetails}){
    const [data, setData] = useState([]);
  const { id } = useParams();
    let eventId = window.localStorage.getItem("eventId");

    console.log("Updating event with ID ", eventId);
    useEffect(() => {
      if (id) {
        console.log("Updating event with ID ", eventId);
        fetch(`http://localhost:4090/getEventDetails/${eventId}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "eventPageDetails");
            setData(data.data);
          });
      }
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
                    <li className="breadcrumb-item active" ><Link to="/app/Mentee/search">Events</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Event Name</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Event Name</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Page Content */}
        <div className="content">
          <div className="container">
          {data.map((i)=>{
                      return(
            <div className="row justify-content-center">
              <div className="col-xl-10">
                {/* Mentor Widget */}
                <div  key={i._id} className="card">
                  <div className="card-body">
                    <div className="">
                      <div className="align-items-center">

                      <div className="col-md-12">
                        <div class="">
                          <div class="trackd_img">
                            <img src={i.event_image} alt="User Image" height={350}/>
                          </div>
                        </div>
                      </div>
                      <div className="row mentor-widget">
                          <div className="col-md-7">
                            <div className="user-info-cont">
                              <h4 className="usr-name">{i.etitle}</h4>
                              <div className="post-left">
                                <ul className='blog-info'>
                                  <li>
                                    <div className="post-author">
                                      <Link to="/app/Mentee/mentor-profile"><img src={USER_P} alt="Post Author" /> <span>{i.aorganizer}</span></Link>
                                    </div>
                                  </li>
                                  <li><i className="far fa-calendar" />{new Date(i.edate).toLocaleDateString("en-GB")} - {new Date(i.eedate).toLocaleDateString("en-GB")}</li>
                                  {/* <li><i className="far fa-clock" />12:00PM ~ 3:00PM</li> */}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div class="user-info-right d-flex align-items-end flex-wrap">
                              <div className="hireme-btn text-center">
                                    <span className="track-rate">${i.pric} /per person</span>
                                    <Link className="track-btn-radius mt-2" to="/app/Mentee/booking">Book Event</Link>
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
                      <p>{i.edescription}</p>
                    </div>
                    {/* /About Details */}
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-12'>
                      <div className="card">
                        <div className="card-body custom-border-card pb-0">
                          {/* About Details */}
                          <div className="widget about-widget custom-about mb-0">
                            <h4 className="widget-title">Event Details</h4>
                            <hr />
                            <div className='col-md-12'>
                              <div className="user-infos">
                                <ul>
                                <li><i className="fa fa-car" data-toggle="tooltip" title="Date and Time" /> {i.etype}</li>
                                  <li><i className="fa fa-road" data-toggle="tooltip" title="Track Name" /> {i.track}</li>
                                  <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> {i.aorganizer}</li>
                                  {/* <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 1 Day</li> */}
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /About Details */}
                        </div>
                      </div>
                  </div>
                  {/* <div className='col-md-6'>
                      <div className="card">
                        <div className="card-body custom-border-card pb-0">
                          <div className="widget about-widget custom-about mb-0">
                            <h4 className="widget-title">Additional Details</h4>
                            <hr />
                            <div className='col-md-12'>
                              <div className="user-infos">
                                <ul className='add-det'>
                                  <li><i className="fa fa-circle"  />Instructors available</li>
                                  <li><i className="fa fa-circle"  />Car is provided</li>
                                  <li><i className="fa fa-circle" />Lunch Included</li>
                                  <li><i className="fa fa-circle" />Helmets are required</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div> */}
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
                                <div className="row-result">{i.address}</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Country</span>
                                <div className="row-result">{i.cname}</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>City</span>
                                <div className="row-result">{i.cityname}</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Province</span>
                                <div className="row-result">{i.pname}</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Postal Code</span>
                                <div className="row-result">{i.pcode}</div>
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
                                    <Link to={i.wlink} className="btn-blue" target="_blank">
                                        <i className="fas fa-globe" />
                                    </Link>
                                  </li>
                                  {/* <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li> */}
                                  <li>
                                    <Link to={i.email} className="btn-blue" target="_blank">
                                      <i className="fas fa-envelope" />
                                    </Link>
                                  </li>
                                  <li>
                                    <a href={i.mnumber} className="btn-blue" onClick={()=>this.setState({isvoicecallmodal : true})} data-toggle="modal" data-target="#voice_call" >
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
                                  <li><a href={i.tlink} title="Twitter" target="_blank"><i className="fab fa-twitter" /></a></li>
                                  <li><a href={i.gpurl} title="Google Plus" target="_blank"><i className="fab fa-google-plus" /></a></li>
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
           );
          })}
          </div>
        </div>
        {/* /Page Content */}
      </div>
    );
  }

// export default withRouter(EventDetails);
