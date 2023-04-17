// Events
// Featured Users
// Installation Instructions
// Performance Upgrades
// Racing
// Shop Cars
// Support
// Tech Articles
// Tuning
// Uncategorized
// Website
import React, { Component } from 'react';
import {BLOG_01,BLOG_02,USER,USER_1,USER_2,USER_3,BLOG_THUMB_01,BLOG_THUMB_02,
    BLOG_THUMB_03,BLOG_THUMB_04,BLOG_THUMB_05} from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';

class BlogList extends Component {
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
                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Blog List</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                {/* Blog Post */}
                <div className="blog">
                  <div className="blog-image">
                    <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_01} alt="Post Image" /></Link>
                  </div>
                  <h3 className="blog-title"><Link to="/app/Blog/blog-details">New Events from Melons’ and PADA!</Link></h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/app/Mentee/mentor-profile"><img src={USER} alt="Post Author" /> <span>Ruby Perrin</span></Link>
                          </div>
                        </li>
                        <li><i className="far fa-clock" />4 Dec 2012</li>
                        <li><i className="far fa-comments" />12 Comments</li>
                        <li><i className="fa fa-tags" />Uncategorized</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Two new organizations have added events to the track days calendar: Melons' Better Driving Pinnacle Advanced Driving Academy (PADA) Check out their track events here! https://torontotrackdays.com/event-calendar/</p>
                    <Link to="/app/Blog/blog-details" className="read-more">Read More</Link>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Post */}
                <div className="blog">
                  <div className="blog-image">
                    <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_02} alt="" /></Link>
                  </div>
                  <h3 className="blog-title"><Link to="/app/Blog/blog-details">Calendar updated for 2018!</Link></h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/app/Mentee/mentor-profile"><img src={USER_1} alt="Post Author" /> <span>Darren Elder</span></Link>
                          </div>
                        </li>
                        <li><i className="far fa-clock" />3 Dec 2019</li>
                        <li><i className="far fa-comments" />7 Comments</li>
                        <li><i className="fa fa-tags" />Events</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>HANSON International, Infinite Motorsports and Touge events added to the calendar.  More events coming...check back often! https://torontotrackdays.com/event-calendar/</p>
                    <Link to="/app/Blog/blog-details" className="read-more">Read More</Link>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Post */}
                <div className="blog">
                  <div className="blog-image">
                    <div className="video">
                      {/* <iframe width={940} src="https://www.youtube.com/embed/ZMty6R0Bn0I" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}
                      <iframe width={940} src="https://www.youtube.com/embed/UEahQP9moaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                    </div>
                  </div>
                  <h3 className="blog-title"><Link to="/app/Blog/blog-details">6th Gear Lapping Dates at Mosport Grand Prix track added!</Link></h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/app/Mentee/mentor-profile"><img src={USER_2} alt="Post Author" /> <span>Deborah Angel</span></Link>
                          </div>
                        </li>
                        <li><i className="far fa-clock" />3 Dec 2019</li>
                        <li><i className="far fa-comments" />2 Comments</li>
                        <li><i className="fa fa-tags" />Uncategorized</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>6th Gear lapping events at Mosport Grand Prix track added!  Featuring "The best track day food outside Italy!"  Check them out.  If you've been lapping with 6th Gear (or tasted the food) leave a review to let your fellow drivers…</p>
                    <Link to="/app/Blog/blog-details" className="read-more">Read More</Link>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Post */}
                <div className="blog">
                  <div className="blog-image">
                    <div className="video">
                      {/* <iframe width={940} src="https://www.youtube.com/embed/svmGQhQLuBQ" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen /> */}
                      <iframe width={940} src="https://www.youtube.com/embed/hQYRDNl-lGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                    </div>
                  </div>
                  <h3 className="blog-title"><Link to="/app/Blog/blog-details">Added Apex Driver Training days at Mosport Grand Prix track!</Link></h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/app/Mentee/mentor-profile"><img src={USER_3} alt="Post Author" /> <span>Sofia Brient</span></Link>
                          </div>
                        </li>
                        <li><i className="far fa-clock" />2 Dec 2019</li>
                        <li><i className="far fa-comments" />41 Comments</li>
                        <li><i className="fa fa-tags" />Racing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Just added Apex Driver Training days at Mosport Grand Prix track!  Check 'em out.  And if you've driven with Apex before, write a review!</p>
                    <Link to="/app/Blog/blog-details" className="read-more">Read More</Link>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Pagination */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="blog-pagination">
                      <nav>
                        <ul className="pagination justify-content-center">
                          <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-double-left" /></a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">1</a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">3</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#"><i className="fas fa-angle-double-right" /></a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* /Blog Pagination */}
              </div>
              {/* Blog Sidebar */}
              <div className="col-lg-4 col-md-12 sidebar-right">
                {/* Search */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                    <div>
                {/* <div className="card search-widget">
                  <div className="card-body">
                    <form className="search-form">
                      <div className="input-group">
                        <input type="text" placeholder="Search..." className="form-control" />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-primary"><i className="fa fa-search" /></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> */}
                {/* /Search */}
                {/* Latest Posts */}
                <div className="card post-widget">
                  <div className="card-header">
                    <h4 className="card-title">Latest Posts</h4>
                  </div>
                  <div className="card-body">
                    <ul className="latest-posts">
                      <li>
                        <div className="post-thumb">
                          <Link to="/app/Blog/blog-details">
                            <img className="img-fluid" src={BLOG_THUMB_01} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/app/Blog/blog-details">New Events from Melons’ and PADA!</Link>
                          </h4>
                          <p>4 Dec 2019</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/app/Blog/blog-details">
                            <img className="img-fluid" src={BLOG_THUMB_02} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/app/Blog/blog-details">Calendar updated for 2018!</Link>
                          </h4>
                          <p>3 Dec 2019</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/app/Blog/blog-details">
                            <img className="img-fluid" src={BLOG_THUMB_03} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/app/Blog/blog-details">6th Gear Lapping Dates at Mosport Grand Prix track added!</Link>
                          </h4>
                          <p>3 Dec 2019</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/app/Blog/blog-details">
                            <img className="img-fluid" src={BLOG_THUMB_04} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/app/Blog/blog-details">The standard chunk of Lorem Ipsum used since the</Link>
                          </h4>
                          <p>2 Dec 2019</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/app/Blog/blog-details">
                            <img className="img-fluid" src={BLOG_THUMB_05} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/app/Blog/blog-details">generate Lorem Ipsum which looks reasonable</Link>
                          </h4>
                          <p>1 Dec 2019</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Latest Posts */}
                {/* Categories */}
                <div className="card category-widget">
                  <div className="card-header">
                    <h4 className="card-title">Blog Categories</h4>
                  </div>
                  <div className="card-body">
                    <ul className="categories">
                    <li><a href="#">Events <span>(62)</span></a></li>
                      <li><a href="#">Featured Users <span>(27)</span></a></li>
                      <li><a href="#">Booking Instructions <span>(41)</span></a></li>
                      <li><a href="#">Performance Upgrades <span>(16)</span></a></li>
                      <li><a href="#">Racing <span>(55)</span></a></li>
                      <li><a href="#">Shop Cars <span>(07)</span></a></li>
                    </ul>
                  </div>
                </div>
                {/* /Categories */}
                {/* Tags */}
                <div className="card tags-widget">
                  <div className="card-header">
                    <h4 className="card-title">Tags</h4>
                  </div>
                  <div className="card-body">
                    <ul className="tags">
                    <li><a href="#" className="tag">Events</a></li>
                      <li><a href="#" className="tag">Featured Users</a></li>
                      <li><a href="#" className="tag">Booking Instructions</a></li>
                      <li><a href="#" className="tag">Performance Upgrades</a></li>
                      <li><a href="#" className="tag">Racing</a></li>
                      <li><a href="#" className="tag">Shop Cars</a></li>
                      <li><a href="#" className="tag">Support</a></li>
                      <li><a href="#" className="tag">Tech Articles</a></li>
                      <li><a href="#" className="tag">Tuning</a></li>
                      <li><a href="#" className="tag">Uncategorized</a></li>
                      <li><a href="#" className="tag">Website</a></li>
                    </ul>
                  </div>
                </div>
                {/* /Tags */}
              </div>
              </StickyBox>
              </div>
              {/* /Blog Sidebar */}
            </div>
          </div>
        </div>		
        {/* /Page Content */}
      </div>
      );
   }
}

export default BlogList;
