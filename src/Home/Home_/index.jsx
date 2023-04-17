
import React, { Component } from 'react';
//slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {
  Submit, ICON_1, ICON_2, ICON_3, USER, USER_1, USER_2, USER_3, USER_4, USER_6, USER_7, USER_15, USER_9, USER_11, USER_12,
  USER_13, IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, BLOG_01, BLOG_02, BLOG_03, BLOG_04
} from '../../constant/imagepath_home';
import { Link, withRouter } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props)
  }
  searchmentee() {
    const { history } = this.props
    history.push('/app/Mentee/search')
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      centerPadding: '10px',
      arrows: false,
      centerMode: true,
    };
    return (
      <div>
        <section className="section section-search">
          <div className="container">
            <div className="banner-wrapper m-auto text-center">
              <div className="banner-header">
                <h1>Search Tracks and Events using <span>Motorsports Racing Events</span></h1>
                <p>All Events and track available for the booking</p>
              </div>
              {/* Search */}
              <div class="mt-3">
                <a href='/app/Mentee/search' class="btn home_btn">Explore Events</a>
              </div>
              {/* /Search */}
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        <section className="section how-it-works">
          <div className="container">
            <div className="section-header text-center">
              <span>Booking Events</span>
              <h2>How does it works ?</h2>
              <p className="sub-title">Are you looking to join Motorsports Racing Events? Now it's very simple, Sign up with us</p>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-box text-center">
                  <div className="feature-header">
                    <div className="feature-icon">
                      <span className="circle" />
                      <i><img src={ICON_1} alt="" /></i>
                    </div>
                    <div className="feature-cont">
                      <div className="feature-text">Sign up</div>
                    </div>
                  </div>
                  <p className="mb-0">Are you looking to join online Learning? Now it's very simple, Now Sign up</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-box text-center">
                  <div className="feature-header">
                    <div className="feature-icon">
                      <span className="circle" />
                      <i><img src={ICON_2} alt="" /></i>
                    </div>
                    <div className="feature-cont">
                      <div className="feature-text">Search Events</div>
                    </div>
                  </div>
                  <p className="mb-0">Collaborate on your own timing, by scheduling with user booking</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-box text-center">
                  <div className="feature-header">
                    <div className="feature-icon">
                      <span className="circle" />
                      <i><img src={ICON_3} alt="" /></i>
                    </div>
                    <div className="feature-cont">
                      <div className="feature-text">Book events</div>
                    </div>
                  </div>
                  <p className="mb-0">you can gather different skill set, and you can become member too</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Statistics Section */}
        <section className="section statistics-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="statistics-list text-center">
                  <span>500+</span>
                  <h3>Happy Clients</h3>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="statistics-list text-center">
                  <span>120+</span>
                  <h3>Online Appointments</h3>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="statistics-list text-center">
                  <span>100%</span>
                  <h3>Event Confirmation</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Home);
