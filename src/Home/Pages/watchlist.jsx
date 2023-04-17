
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {USER,USER_1,USER_2,USER_4,USER_5} from '../../constant/imagepath_home';

class WatchList extends Component {
   render() {
      return ( 
        <div>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-8 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/index">Home</Link></li>
                    <li className="breadcrumb-item active" >Watchlist</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Watchlist</h2>
              </div>
              <div className="col-md-4 col-12 d-md-block d-none">
                <div className="sort-by">
                  <span className="sort-title">Sort by</span>
                  <span className="sortby-fliter">
                    <select className="select form-control">
                      <option>Select</option>
                      <option className="sorting">Name</option>
                      <option className="sorting">Organizer</option>
                      <option className="sorting">Ownership</option>
                    </select>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
            <div className="content">
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <div className="card">
                  <div className="card-body">
                    <div className="">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/eventDetails">
                            <img src={USER} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/eventDetails">Boost Control Horizon</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="mentor-booking d-flex justify-content-center">
                              <div class="mr-3">
                                <a class="apt-btn" href="/reactjs/template/app/Pages/watchlist mr-2" >Book Event</a>
                              </div>
                              <div >
                                <button class="btn btn-outline-primary" href="/reactjs/template/app/Pages/watchlist">Remove From Watchlist</button>
                              </div>
                            </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <div className="card">
                  <div className="card-body">
                    <div className="">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/eventDetails">
                            <img src={USER_1} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/eventDetails">Towne Auto Sales</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                        <div class="mentor-booking d-flex justify-content-center">
                          <div class="mr-3">
                            <a class="apt-btn" href="/reactjs/template/app/Pages/watchlist mr-2" >Book Event</a>
                          </div>
                          <div >
                            <button class="btn btn-outline-primary" href="/reactjs/template/app/Pages/watchlist">Remove From Watchlist</button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <div className="card">
                  <div className="card-body">
                    <div className="">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/eventDetails">
                            <img src={USER} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/eventDetails">Boost Control Horizon</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="mentor-booking d-flex justify-content-center">
                              <div class="mr-3">
                                <a class="apt-btn" href="/reactjs/template/app/Pages/watchlist mr-2" >Book Event</a>
                              </div>
                              <div >
                                <button class="btn btn-outline-primary" href="/reactjs/template/app/Pages/watchlist">Remove From Watchlist</button>
                              </div>
                            </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <div className="card">
                  <div className="card-body">
                    <div className="">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/eventDetails">
                            <img src={USER_1} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/eventDetails">Towne Auto Sales</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                        <div class="mentor-booking d-flex justify-content-center">
                          <div class="mr-3">
                            <a class="apt-btn" href="/reactjs/template/app/Pages/watchlist mr-2" >Book Event</a>
                          </div>
                          <div >
                            <button class="btn btn-outline-primary" href="/reactjs/template/app/Pages/watchlist">Remove From Watchlist</button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <div className="card">
                  <div className="card-body">
                    <div className="">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/eventDetails">
                            <img src={USER} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/eventDetails">Boost Control Horizon</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="mentor-booking d-flex justify-content-center">
                              <div class="mr-3">
                                <a class="apt-btn" href="/reactjs/template/app/Pages/watchlist mr-2" >Book Event</a>
                              </div>
                              <div >
                                <button class="btn btn-outline-primary" href="/reactjs/template/app/Pages/watchlist">Remove From Watchlist</button>
                              </div>
                            </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <div className="card">
                  <div className="card-body">
                    <div className="">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/eventDetails">
                            <img src={USER_1} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/eventDetails">Towne Auto Sales</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                        <div class="mentor-booking d-flex justify-content-center">
                          <div class="mr-3">
                            <a class="apt-btn" href="/reactjs/template/app/Pages/watchlist mr-2" >Book Event</a>
                          </div>
                          <div >
                            <button class="btn btn-outline-primary" href="/reactjs/template/app/Pages/watchlist">Remove From Watchlist</button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <div className="card">
                  <div className="card-body">
                    <div className="">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/eventDetails">
                            <img src={USER} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/eventDetails">Boost Control Horizon</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="mentor-booking d-flex justify-content-center">
                              <div class="mr-3">
                                <a class="apt-btn" href="/reactjs/template/app/Pages/watchlist mr-2" >Book Event</a>
                              </div>
                              <div >
                                <button class="btn btn-outline-primary" href="/reactjs/template/app/Pages/watchlist">Remove From Watchlist</button>
                              </div>
                            </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <div className="card">
                  <div className="card-body">
                    <div className="">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/eventDetails">
                            <img src={USER_1} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/eventDetails">Towne Auto Sales</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                        <div class="mentor-booking d-flex justify-content-center">
                          <div class="mr-3">
                            <a class="apt-btn" href="/reactjs/template/app/Pages/watchlist mr-2" >Book Event</a>
                          </div>
                          <div >
                            <button class="btn btn-outline-primary" href="/reactjs/template/app/Pages/watchlist">Remove From Watchlist</button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <div className="card">
                  <div className="card-body">
                    <div className="">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/eventDetails">
                            <img src={USER} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/eventDetails">Boost Control Horizon</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="mentor-booking d-flex justify-content-center">
                          <div class="mr-3">
                            <a class="apt-btn" href="/reactjs/template/app/Pages/watchlist"  >Book Event</a>
                          </div>
                          <div >
                            <button class="btn btn-outline-primary" href="/reactjs/template/app/Pages/watchlist">Remove From Watchlist</button>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
            </div>
            </div>		
        {/* /Page Content */}
      </div>
      );
   }
}

export default WatchList;
