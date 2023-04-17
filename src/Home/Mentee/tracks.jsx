import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { TrackImglist } from '../../constant/imagepath_home';

function Tracks({ allTrack }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4090/getAllTrack", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "allTrack");
        setdata(data.data);
      });
  }, []);
  const handleTrackClick = (id) => {
    window.localStorage.setItem("TrackID", id);
  };
  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-3 col-xl-2 text-right">
              <div className="mentor-booking mb-5">
                <Link className="apt-btn" to="/app/Mentee/addTrack">Add Tracks</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-12">
              <div className="row">
                {data.map((i) => {
                  return (
                    <div className='col-md-6'>
                      <div className="card">
                        <div className="card-body">
                          <div className="">
                            <div className="user-info-left">
                              <div className="mentor-img">
                                <Link to={`/app/Mentee/trackDetails/${i._id}`} onClick={() => handleTrackClick(i._id)}>
                                  <img src={i.image} className="img-fluid" alt="User Image" height={133.03} width={145} />
                                </Link>
                              </div>
                              <div className="user-info-cont">
                                <h4 className="usr-name"><Link to={`/app/Mentee/trackDetails/${i._id}`} onClick={() => handleTrackClick(i._id)}>{i.ttitle}</Link></h4>
                                <div className="user-infos">
                                  <ul>
                                    <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> {i.taddress}</li>
                                    <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> ${i.tprice}</li>
                                    <li><i className="far fa-calendar" data-toggle="tooltip" title="Date and Time" /> {new Date(i.tdate).toLocaleDateString("en-GB")} - {new Date(i.tedate).toLocaleDateString("en-GB")}</li>
                                  </ul>
                                </div>
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
export default withRouter(Tracks);
