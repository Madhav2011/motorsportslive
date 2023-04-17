import React, { Component } from 'react';
import { USER, USER_1, USER_2, USER_4, USER_5 } from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Link, withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Search({ allEvent }) {
  // const { eventId } = useParams();
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4090/getAllEvent", {
      method: "GET",
    })
    .then((res)=>res.json())
    .then((data)=> {
      console.log(data,"allEvent");
      setdata(data.data);
    });
  },[]);
  // const getImageUrl = (event) => {
  //   if (event && event.event_image) {
  //     const imagePath = event.event_image.replace("\\", "/");
  //     return `${process.env.REACT_APP_SERVER_URL}/${imagePath}`;
  //   }
  //   return "";
  // };
  const getImageUrl = (event) => {
    if (event && event.event_image) {
      const imagePath = event.event_image.replace("\\", "/");
      return `${process.env.REACT_APP_SERVER_URL}/${imagePath}`;
    }
    return "";
  };
  
  
  
  
  return (
    <div>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/app/index">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Events</li>
                </ol>
              </nav>
              {/* <h2 className="breadcrumb-title">2245 matches found for : Mentors In  Florida</h2> */}
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-3 col-xl-2 text-right">
              <div className="mentor-booking mb-5">
                <Link className="apt-btn" to="/app/Mentee/addEvent">Add Event</Link>
              </div>
            </div>
            {/* <div className='col-lg-10'>
              < form className="search-form" >
                <div className="input-group">
                  <input type="text" placeholder="Search..." className="form-control" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-primary">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div> */}
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-12">
              <div className='row'>
              {data.map((i) => {
                  return (
                    <div className='col-md-6'>
                      <div className="card">
                        <div className="card-body">
                          <div className="">
                            <div className="user-info-left">
                              <div className="mentor-img">
                                <Link to="/app/Mentee/eventDetails">
                                  {/* <img src={i.event_image} className="img-fluid" alt="User Image" /> */}
                                  {/* <img src={i.event_image} className="img-fluid" alt="User Image" /> */}
                                  {/* <img src={getImageUrl(i.event_image)} className="img-fluid" alt="Event Image" /> */}
                                  {/* <img src={getImageUrl(i)} alt={i.event_image} /> */}
                                 
{/*                                  
                                 {data.map((i)=>{
                                  const base64String = (
                                  String.fromCharCode(...new Uint8Array(singleData.img.data)));
                                    return<img src={`data:image/png;base64,${base64String}`}/>
                                 })} */}
                                 
                                 
                                 
                                  <img src={i.event_image} alt="User Image" height={133} width={145}/>

                                </Link>
                              </div>
                              <div className="user-info-cont">
                                <h4 className="usr-name"><Link to="/app/Mentee/eventDetails">{i.etitle}</Link></h4>
                                <div className="user-infos">
                                  <ul>
                                    <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> {i.address}</li>
                                    <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> ${i.pric}</li>
                                    <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of {i.aorganizer}</li>
                                    <li><i className="far fa-calendar" data-toggle="tooltip" title="Date and Time" /> {new Date(i.edate).toLocaleDateString("en-GB")} - {new Date(i.eedate).toLocaleDateString("en-GB")}</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="mentor-booking d-flex justify-content-center">
                              <div className="mr-3">
                                <a className="apt-btn" href="https://torontotrackdays.com/motorsport-organizations/" target="_blank" >Book Event</a>
                                <div></div>
                              </div>
                              <div >
                                <button className="btn btn-outline-primary" href={`/app/Pages/watchlist/${i.eventId}`} onClick={() => addToWatchlist(i.id)} disabled>Add To Watchlist</button>
                                {/* <Link to={`/app/Pages/watchlist/${i.id}`} className="btn btn-outline-primary" onClick={() => addToWatchlist(i.id)}>Add To Watchlist</Link> */}
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
          </div>
        </div>
      </div>
    </div>
  );
}