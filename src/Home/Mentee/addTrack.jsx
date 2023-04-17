import React, { Component } from 'react';
import { USER, USER_1, USER_2, USER_4, USER_5 } from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Link, withRouter } from 'react-router-dom';
import "rsuite/dist/rsuite.css";
// import { DateRangePicker } from 'rsuite';
import { Placeholder } from '../../constant/imagepath_home';
import { DatePicker } from 'rsuite';

class AddTrack extends Component {



  constructor(props) {
    super(props);
    this.state = {
      ttitle: "",
      tdescription: "",
      tprice: "",
      temail: "",
      tweblink: "",
      tmobile: "",
      taddress: "",
      tcity: "",
      tstate: "",
      tpostalcode: "",
      tcountry: "",
      ttwitter: "",
      tgoogle: "",
      tyoutube: "",
      image: null,
      tdate: null, // Add this property
      tedate: null,
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  convertToBase64 = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      this.setState({ image: reader.result });
    };
    reader.onerror = (error) => {
      console.log("Error::", error);
    };
  };


  handleSubmit(e) {
    e.preventDefault();
    //validations
    const { ttitle, tdescription, tprice, temail, tweblink, tmobile, taddress, tcity, tstate, tpostalcode, tcountry, ttwitter, tgoogle, tyoutube, tdate, tedate } = this.state;


    // Validation
    let errors = {};
    let formIsValid = true;

    // Track title
    if (!ttitle) {
      formIsValid = false;
      errors["ttitle"] = "*Please enter track title";
    } else if (ttitle.length < 2) {
      formIsValid = false;
      errors["ttitle"] = "*Track title must be at least 2 characters long";
    } else if (ttitle.length > 50) {
      formIsValid = false;
      errors["ttitle"] = "*Track title must be less than 50 characters long";
    }

    // Description
    if (!tdescription) {
      formIsValid = false;
      errors["tdescription"] = "*Please enter description";
    } else if (tdescription.length < 10) {
      formIsValid = false;
      errors["tdescription"] = "*Description must be at least 10 characters long";
    } else if (tdescription.length > 500) {
      formIsValid = false;
      errors["tdescription"] = "*Description must be less than 500 characters long";
    }

    // Price
    if (!tprice) {
      formIsValid = false;
      errors["tprice"] = "*Please enter a price";
    } else if (isNaN(tprice)) {
      formIsValid = false;
      errors["tprice"] = "*Price must be a number";
    } else if (tprice < 0) {
      formIsValid = false;
      errors["tprice"] = "*Price cannot be negative";
    }

    // Email
    if (!temail) {
      formIsValid = false;
      errors["temail"] = "*Please enter email";
    } else if (!/\S+@\S+\.\S+/.test(temail)) {
      formIsValid = false;
      errors["temail"] = "*Invalid email format";
    }

    // Website link
    if (!tweblink) {
      formIsValid = false;
      errors["tweblink"] = "*Please enter website link";
    }

    // Mobile number
    if (!tmobile) {
      formIsValid = false;
      errors["tmobile"] = "*Please enter mobile number";
    } else if (!/^\d{10}$/.test(tmobile)) {
      formIsValid = false;
      errors["tmobile"] = "*Mobile number must be 10 digits long";
    }

    // Address
    if (!taddress) {
      formIsValid = false;
      errors["taddress"] = "*Please enter address";
    } else if (taddress.length > 100) {
      formIsValid = false;
      errors["taddress"] = "*Address must be less than 100 characters long";
    }

    // City
    if (!tcity) {
      formIsValid = false;
      errors["tcity"] = "*Please enter city name";
    } else if (tcity.length > 50) {
      formIsValid = false;
      errors["tcity"] = "*City name must be less than 50 characters long";
    }

    // Province
    if (!tstate) {
      formIsValid = false;
      errors["tstate"] = "*Please enter province name";
    } else if (tstate.length > 50) {
      formIsValid = false;
      errors["tstate"] = "*Province name must be less than 50 characters long";
    }

    // Postal code
    if (!tpostalcode) {
      formIsValid = false;
      errors["tpostalcode"] = "*Please enter postal code";
    }

    // Country
    if (!tcountry) {
      formIsValid = false;
      errors["tcountry"] = "*Please enter country name";
    } else if (tcountry.length > 50) {
      formIsValid = false;
      errors["tcountry"] = "*Country name must be less than 50 characters long";
    }

    // Twitter link
    if (!ttwitter) {
      formIsValid = false;
      errors["ttwitter"] = "*Please enter twitter link";
    }

    // Google link
    if (!tgoogle) {
      formIsValid = false;
      errors["tgoogle"] = "*Please enter facebook link";
    }

    // YouTube link
    if (!tyoutube) {
      formIsValid = false;
      errors["tyoutube"] = "*Please enter youtube link";
    }

    // tdate link
    if (!tdate) {
      formIsValid = false;
      errors["tdate"] = "*Please enter start date";
    }

    // tedate link
    if (!tedate) {
      formIsValid = false;
      errors["tedate"] = "*Please enter end date";
    }
    this.setState({ errors });

    if (formIsValid) {

      const { ttitle, tdescription, tprice, temail, tweblink, tmobile, taddress, tcity, tstate, tpostalcode, tcountry, ttwitter, tgoogle, tyoutube,tdate,tedate ,image  } = this.state;

      console.log(ttitle, tdescription, tprice, temail, tweblink, tmobile, taddress, tcity, tstate, tpostalcode, tcountry, ttwitter, tgoogle, tyoutube,tdate,tedate ,image );
      
      fetch("http://localhost:4090/addTrack", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          ttitle,
          tdescription,
          tprice,
          temail,
          tweblink,
          tmobile,
          taddress,
          tcity,
          tstate,
          tpostalcode,
          tcountry,
          ttwitter,
          tgoogle,
          tyoutube,
          tdate,
          tedate,
          image
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "trackAdded");
          alert("Track added successfully");
          window.location.href="/app/Mentee/tracks";
          this.setState({
            ttitle: "",
            tdescription: "",
            tprice: "",
            temail: "",
            tweblink: "",
            tmobile: "",
            taddress: "",
            tcity: "",
            tstate: "",
            tpostalcode: "",
            tcountry: "",
            ttwitter: "",
            tgoogle: "",
            tyoutube: "",
            image:null,
            tdate: null, // Add this property
            tedate: null,
            errors: {}
          });
        })
        .catch((error) => {
          console.log(error);
          alert("Error adding track");
        });
    }
    


  }
  render() {
    const { history } = this.props;
    const { ttitle, tdescription, tprice, temail, tweblink, tmobile, taddress, tcity, tstate, tpostalcode, tcountry, ttwitter, tgoogle, tyoutube, tdate, tedate, errors } = this.state;

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
                    <li className="breadcrumb-item active" aria-current="page">Add Track</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Add Track</h2>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                {/* /Event Sidebar */}
                <div className="col-md-12 col-lg-12 col-xl-12 ctr_spc">
                  <div className="card">
                    <div className="card-body">
                      <div className="col-md-12 col-lg-12 col-xl-12 ctr_spc">
                        <div className="card">
                          <div className="card-body">
                            {/* Add Track Form */}
                            <form onSubmit={this.handleSubmit}>
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
                                        {/* <img src={Placeholder} alt="User Image" /> */}
                                        {this.state.track_image && (
                                          <img src={this.state.track_image} alt="Track Image" />
                                        )}
                                      </div>
                                      {/* Track Image */}
                                      <div className="upload-img">
                                        <div className="change-photo-btn">
                                          <span><i className="fa fa-upload" /> Upload Image</span>
                                          {/* <input type="file" className="upload" /> */}
                                          {/* <input type="file" className="upload" onChange={this.handleImageChange} /> */}
                                          {/* <input type="file" className="upload" name="track_image" onChange={(e) => {
                                            const file = e.target.files[0];
                                            const reader = new FileReader();
                                            reader.readAsDataURL(file);
                                            reader.onload = () => {
                                              const image = reader.result;
                                              this.setState({ track_image: image });
                                            };
                                          }} /> */}
                                           <input type="file" accept="image/" onChange={this.convertToBase64}/>
                                          {this.image==""||this.image==null?"":<img  width={100} height={100} src={this.image} />}
                                        </div>
                                        <small className="form-text text-muted">Allowed JPG or PNG</small>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Track Title */}
                                <div className="col-12 field-space col-md-6 ctr_spc">
                                  <div className="form-group">
                                    <label>Track Title</label>
                                    <input type="text" className="form-control" value={ttitle} placeholder="Enter Track Title" onChange={(e) => this.setState({ ttitle: e.target.value })} />
                                    {errors.ttitle && <span className='text-danger'>{errors.ttitle}</span>}
                                  </div>
                                </div>
                                {/* costPerParticipant */}
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Price</label>
                                    <input type="text" className="form-control" placeholder="Enter Price" value={tprice} onChange={(e) => this.setState({ tprice: e.target.value })} />
                                    {errors.tprice && <span className='text-danger'>{errors.tprice}</span>}
                                  </div>
                                </div>


                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Track Start Date</label>
                                    {/* <CDateRangePicker label="Date range" locale="en-US" /> */}
                                    {/* <DateRangePicker className="daterangepickercust" /> */}
                                    <DatePicker
                                      className="daterangepickercust"
                                      oneTap
                                      onSelect={(date) => this.setState({ tdate: date })}
                                    />
                                    {errors.tdate && <span className='text-danger'>{errors.tdate}</span>}
                                  </div>
                                </div>

                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Track End Date</label>
                                    {/* <CDateRangePicker label="Date range" locale="en-US" /> */}
                                    {/* <DateRangePicker className="daterangepickercust" /> */}
                                    <DatePicker
                                      className="daterangepickercust"
                                      oneTap
                                      onSelect={(date) => this.setState({ tedate: date })}
                                    />
                                    {errors.tedate && <span className='text-danger'>{errors.tedate}</span>}
                                  </div>
                                </div>

                                {/* trackDesc */}
                                <div className="col-12 field-space">
                                  <div className="form-group">
                                    <label>Track Description</label>
                                    <textarea type="text" className="form-control" value={tdescription} placeholder="Enter Track Description" onChange={(e) => this.setState({ tdescription: e.target.value })} />
                                    {errors.tdescription && <span className='text-danger'>{errors.tdescription}</span>}
                                  </div>
                                </div>

                                {/* Email */}
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>E-mail</label>
                                    <input type="text" className="form-control" placeholder="Enter Email" value={temail} onChange={(e) => this.setState({ temail: e.target.value })} />
                                    {errors.temail && <span className='text-danger'>{errors.temail}</span>}
                                  </div>
                                </div>
                                {/* Email */}
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Website</label>
                                    <input type="text" className="form-control" placeholder="Enter Website Link" value={tweblink} onChange={(e) => this.setState({ tweblink: e.target.value })} />
                                    {errors.tweblink && <span className='text-danger'>{errors.tweblink}</span>}
                                  </div>
                                </div>
                                {/* Mobile */}
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Mobile</label>
                                    <input type="text" placeholder="+1 202-555-0125" className="form-control" value={tmobile} onChange={(e) => this.setState({ tmobile: e.target.value })} />
                                    {errors.tmobile && <span className='text-danger'>{errors.tmobile}</span>}
                                  </div>
                                </div>

                                {/* Address */}
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" placeholder="806 Twin Willow Lane" value={taddress} onChange={(e) => this.setState({ taddress: e.target.value })} />
                                    {errors.taddress && <span className='text-danger'>{errors.taddress}</span>}
                                  </div>
                                </div>

                                {/* City */}
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>City</label>
                                    <input type="text" className="form-control" placeholder="Waterloo" value={tcity} onChange={(e) => this.setState({ tcity: e.target.value })} />
                                    {errors.tcity && <span className='text-danger'>{errors.tcity}</span>}
                                  </div>
                                </div>
                                {/* Province */}
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Province</label>
                                    <input type="text" className="form-control" placeholder="Ontario" value={tstate} onChange={(e) => this.setState({ tstate: e.target.value })} />
                                    {errors.tstate && <span className='text-danger'>{errors.tstate}</span>}
                                  </div>
                                </div>
                                {/* Postal Code */}
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Postal Code</label>
                                    <input type="text" className="form-control" placeholder={13420} value={tpostalcode} onChange={(e) => this.setState({ tpostalcode: e.target.value })} />
                                    {errors.tpostalcode && <span className='text-danger'>{errors.tpostalcode}</span>}
                                  </div>
                                </div>
                                {/* Country */}
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Country</label>
                                    <input type="text" className="form-control" placeholder="Canada" value={tcountry} onChange={(e) => this.setState({ tcountry: e.target.value })} />
                                    {errors.tcountry && <span className='text-danger'>{errors.tcountry}</span>}
                                  </div>
                                </div>

                                {/* Social Accounts */}
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Twitter</label>
                                    <input type="text" className="form-control" placeholder="@username" value={ttwitter} onChange={(e) => this.setState({ ttwitter: e.target.value })} />
                                    {errors.ttwitter && <span className='text-danger'>{errors.ttwitter}</span>}
                                  </div>
                                </div>
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Facebook</label>
                                    <input type="text" className="form-control" placeholder="enter Facebook Link" value={tgoogle} onChange={(e) => this.setState({ tgoogle: e.target.value })} />
                                    {errors.tgoogle && <span className='text-danger'>{errors.tgoogle}</span>}
                                  </div>
                                </div>
                                <div className="col-12 field-space col-md-6">
                                  <div className="form-group">
                                    <label>Youtube</label>
                                    <input type="text" className="form-control" placeholder="youtube.com/" value={tyoutube} onChange={(e) => this.setState({ tyoutube: e.target.value })} />
                                    {errors.tyoutube && <span className='text-danger'>{errors.tyoutube}</span>}
                                  </div>
                                </div>


                              </div>
                              {/* Button */}
                              <div className="submit-section">
                                {/* <button type="submit" className="btn btn-primary submit-btn">Add Track</button> */}
                                <input type="submit" className="btn btn-primary submit-btn" value="Add Track" />
                              </div>
                            </form>
                            {/* /Add track Form */}
                          </div>
                        </div>
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
}
export default withRouter(AddTrack);
