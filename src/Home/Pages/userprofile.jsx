import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import {USER_8,USER_P} from '../../constant/imagepath_home';

import React, { Component, useEffect, useState,state } from "react";
import { useParams } from 'react-router-dom';
export default function UserProfile() {
  const [userData, setUserData] = useState("");
  const [show, setShow] = useState(false);

  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  // const [password, setpassword] = useState('');
  const [address, setaddress] = useState('');
  const [phone, setphone] = useState('');
  const [province, setprovince] = useState('');
  const [postalCode, setpostalCode] = useState('');
  const [country, setcountry] = useState('');
  const [city, setcity] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [image, setImage] = useState('');
  const [allImage, setAllImage] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  let userId = window.localStorage.getItem("userId");

  function updateUser( fname,lname,email,phone,address,city,province,postalCode,country) {

    console.log("Updating user with ID ",userId);
    fetch(`http://localhost:4090/usersUpdate/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({fname,lname,email,phone,address,city,province,postalCode,country,image})
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      document.getElementById('fname').innerHTML = `${data.fname} ${data.lname}`;
      preventDefault();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=() => {
      console.log(reader.result);
      setImage(reader.result);
    }
    reader.onerror=error=>{
      console.log("Error::",error);
    };
  }

 

// function uploadImage(e) {
//  // e.preventDefault();
//   fetch(`http://localhost:4090/upload-image`, {
//       method: 'POST',
//       crossDomain:true,
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: "application/json",
//         "Access-Control-Allow-Origsin": "*",
//       },
//       body: JSON.stringify({
//         base64:image
//       })
//     }).then(
//       (res) => res.json()
     
//     ).then((data)=>console.log(":::::::::::::::::::: DATA ::::::::::::::::::::",data))
// }

  useEffect(() => {
    fetch("http://localhost:4090/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origsin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserData(data.data);
        if (data.data == "Token expired") {
          alert("Token expired login again.");
          window.localStorage.clear();
          window.location.href = "./login";
        }
      });
      // getImage()
  }, []);

  return (
    <div className="breadcrumb-bar">
        <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-12 col-12">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/app/index">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Profile</li>
                    </ol>
                  </nav>
                  <h2 className="breadcrumb-title">Profile</h2>
                </div>
              </div>
            </div>
            <div className="content">
          <div className="container-fluid">
          {/* Page Header */}
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="profile-header">
                <div className="row align-items-center justify-content-center">
                  <div className="col-auto profile-image">
                    <a href="#">
                    <img className="avatar-img rounded-circle" alt="User Image"  src={userData.image ? `${userData.image}` : `${USER_P}`}/>
                    
                    {/* {allImage.map(data=>{
                        return(
                          <img  width={100} height={100} src={data.image} />
                        )
                      })} */}
                    </a>
                  </div>
                  <div className="col ml-md-n2 profile-user-info">
                    <h4 className="user-name mb-0"> {userData.fname}  {userData.lname}</h4>
                    <h6 className="text-muted"> {userData.email}</h6>
                    <div className="pb-3"><i className="fa fa-check" /> {userData.userType}</div>
                  </div>
                </div>
              </div>
              <div className="profile-menu mt-4">
                  <ul className="nav nav-tabs nav-tabs-solid">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#per_details_tab">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#password_tab">Edit Profile</a>
                    </li>
                  </ul>
                </div>	
                <div className='main-profile'>
                  <div className="tab-content profile-tab-cont">
                    {/* Personal Details Tab */}
                    <div className="tab-pane fade show active" id="per_details_tab">
                      {/* Personal Details */}
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title d-flex justify-content-between">
                                <span>Personal Details</span> 
                              </h5>
                              <div className="row">
                                <p className="col-sm-2 text-muted mb-0 mb-sm-3">Name</p>
                                <p className="col-sm-10">{userData.fname}  {userData.lname}</p>
                              </div>
                              <div className="row">
                                <p className="col-sm-2 text-muted mb-0 mb-sm-3">Email ID</p>
                                <p className="col-sm-10">{userData.email}</p>
                              </div>
                              <div className="row">
                                <p className="col-sm-2 text-muted mb-0 mb-sm-3">Mobile</p>
                                <p className="col-sm-10">{userData.phone}</p>
                              </div>
                              <div className="row">
                                <p className="col-sm-2 text-muted mb-0">Address</p>
                                <p className="col-sm-10 mb-0">{userData.address},<br />
                                {userData.city}, <br/>
                                {userData.province} - {userData.postalCode},<br />
                                {userData.country}.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Personal Details */}
                    </div>
                    {/* /Personal Details Tab */}
                    {/* Change Password Tab */}
                    <div id="password_tab" className="tab-pane fade">
                      <div className="card">
                        <div className="card-body">
                        <form >
                <div className="row form-row justify-content-center">
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <input type="file" accept="image/" onChange={convertToBase64}/>
                      {image==""||image==null?"":<img  width={100} height={100} src={image} />}
                      
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" value={fname} id="fname" className="form-control" onChange={e => setfname(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" value={lname} id="lname" className="form-control" onChange={e => setlname(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Email ID</label>
                      <input type="email" value={email} className="form-control" onChange={e => setemail(e.target.value)}  />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Mobile</label>
                      <input type="text" value={phone} className="form-control"  onChange={e => setphone(e.target.value)}  />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Address</label>
                      <input type="text" value={address} className="form-control" onChange={e => setaddress(e.target.value)}   />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>City</label>
                      <input type="text" value={city} className="form-control" onChange={e => setcity(e.target.value)}  />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Province</label>
                      <input type="text" value={province} className="form-control" onChange={e => setprovince(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Postal Code</label>
                      <input type="text" value={postalCode} className="form-control" onChange={e => setpostalCode(e.target.value)}/>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Country</label>
                      <input type="text" value={country} className="form-control" onChange={e => setcountry(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6"></div>
                </div>
                <button type="submit" onClick={() => updateUser(fname,lname,email,phone,address,city,province,postalCode,country)} className="btn btn-primary">Save Changes</button>
              </form>
                        </div>
                      </div>
                    </div>
                    {/* /Change Password Tab */}
                  </div>
                </div>
            </div>
          </div>
        </div>	
       
      </div>
      </div>
  )
}