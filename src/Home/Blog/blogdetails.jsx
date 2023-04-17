
import React, { Component } from 'react';
import { USER, USER_1, USER_4, USER_5, USER_3, USER_6, USER_7,BLOG_01,
    BLOG_THUMB_01,BLOG_THUMB_02,BLOG_THUMB_03,BLOG_THUMB_04,BLOG_THUMB_05 } from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';

class BlogDetails extends Component {
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
                <h2 className="breadcrumb-title">Blog Details</h2>
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
                <div className="blog-view">
                  <div className="blog blog-single-post">
                    <div className="blog-image">
                      <a href=""><img alt="" src={BLOG_01} className="img-fluid" /></a>
                    </div>
                    <h3 className="blog-title">New Events from Melons’ and PADA!</h3>
                    <div className="blog-info clearfix">
                      <div className="post-left">
                        <ul>
                          <li>
                            <div className="post-author">
                              <Link to="/app/Mentee/mentor-profile"><img src={USER} alt="Post Author" /> <span>Marvin Downey</span></Link>
                            </div>
                          </li>
                          <li><i className="far fa-calendar" />4 Dec 2019</li>
                          <li><i className="far fa-comments" />12 Comments</li>
                          <li><i className="fa fa-tags" />HTML</li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-content">
                      <p>Two new organizations have added events to the track days calendar:</p>
                      <p>Melons’ Better Driving</p>
                      <p>Pinnacle Advanced Driving Academy (PADA)</p>
                      <p>Check out their track events here! <a href='#'>https://Motorsports.com/event-calendar/</a></p>
                    </div>
                  </div>
                  <div className="card blog-share clearfix">
                    <div className="card-header">
                      <h4 className="card-title">Share the post</h4>
                    </div>
                    <div className="card-body">
                      <ul className="social-share">
                        <li><a href="#" title="Facebook"><i className="fab fa-facebook" /></a></li>
                        <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                        <li><a href="#" title="Google Plus"><i className="fab fa-google-plus" /></a></li>
                        <li><a href="#" title="Youtube"><i className="fab fa-youtube" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card author-widget clearfix">
                    <div className="card-header">
                      <h4 className="card-title">About Author</h4>
                    </div>
                    <div className="card-body">
                      <div className="about-author">
                        <div className="about-author-img">
                          <div className="author-img-wrap">
                            <Link to="#"><img className="img-fluid rounded-circle" alt="" src={USER_1} /></Link>
                          </div>
                        </div>
                        <div className="author-details">
                          <Link to="#" className="blog-author-name">Darren Elder</Link>
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="card blog-comments clearfix">
                    <div className="card-header">
                      <h4 className="card-title">Comments (12)</h4>
                    </div>
                    <div className="card-body pb-0">
                      <ul className="comments-list">
                        <li>
                          <div className="comment">
                            <div className="comment-author">
                              <img className="avatar" alt="" src={USER_4}/>
                            </div>
                            <div className="comment-block">
                              <span className="comment-by">
                                <span className="blog-author-name">Michelle Fairfax</span>
                              </span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <p className="blog-date">Dec 6, 2017</p>
                              <a className="comment-btn" href="#">
                                <i className="fas fa-reply" /> Reply
                              </a>
                            </div>
                          </div>
                          <ul className="comments-list reply">
                            <li>
                              <div className="comment">
                                <div className="comment-author">
                                  <img className="avatar" alt="" src={USER_5} />
                                </div>
                                <div className="comment-block">
                                  <span className="comment-by">
                                    <span className="blog-author-name">Gina Moore</span>
                                  </span>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                  <p className="blog-date">Dec 6, 2017</p>
                                  <a className="comment-btn" href="#">
                                    <i className="fas fa-reply" /> Reply
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="comment">
                                <div className="comment-author">
                                  <img className="avatar" alt="" src={USER_3} />
                                </div>
                                <div className="comment-block">
                                  <span className="comment-by">
                                    <span className="blog-author-name">Carl Kelly</span>
                                  </span>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                  <p className="blog-date">December 7, 2017</p>
                                  <a className="comment-btn" href="#">
                                    <i className="fas fa-reply" /> Reply
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="comment">
                            <div className="comment-author">
                              <img className="avatar" alt="" src={USER_6} />
                            </div>
                            <div className="comment-block">
                              <span className="comment-by">
                                <span className="blog-author-name">Elsie Gilley</span>
                              </span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <p className="blog-date">December 11, 2017</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="comment">
                            <div className="comment-author">
                              <img className="avatar" alt="" src={USER_7} />
                            </div>
                            <div className="comment-block">
                              <span className="comment-by">
                                <span className="blog-author-name">Joan Gardner</span>
                              </span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <p className="blog-date">December 13, 2017</p>
                              <a className="comment-btn" href="#">
                                <i className="fas fa-reply" /> Reply
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/* <div className="card new-comment clearfix">
                    <div className="card-header">
                      <h4 className="card-title">Leave Comment</h4>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <label>Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Your Email Address <span className="text-danger">*</span></label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Comments</label>
                          <textarea rows={4} className="form-control" defaultValue={""} />
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn" type="submit">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div> */}
                </div>
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
                            <Link to="/app/Blog/blog-details">Added Apex Driver Training days at Mosport Grand Prix track!</Link>
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
                            <Link to="/app/Blog/blog-details">NEW! Parts Retailers and Service Shops Listings!</Link>
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
                      {/* <li><a href="#" className="tag">Shop Cars</a></li>
                      <li><a href="#" className="tag">Support</a></li>
                      <li><a href="#" className="tag">Tech Articles</a></li> */}
                      {/* <li><a href="#" className="tag">Tuning</a></li>
                      <li><a href="#" className="tag">Uncategorized</a></li>
                      <li><a href="#" className="tag">Website</a></li> */}
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

export default BlogDetails;
