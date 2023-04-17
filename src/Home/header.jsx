import React, { Component } from 'react';
import { withRouter, Link  } from 'react-router-dom';
import {AppLogo,USER,USER_P} from '../constant/imagepath_home';


class Header extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			userData: "",
		};
	}
	componentDidMount() {
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
        this.setState({ userData: data.data });
        if (data.data == "Token expired") {
          alert("Token expired login again.");
          window.localStorage.clear();
          window.location.href = "./login";
        }
      });
		$('.main-nav a').on('click', function(e) {
			if($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});

		$(document).on('click', '#menu_close', function() {
			$('html').removeClass('menu-opened');
			$('.sidebar-overlay').removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});


		
	}

	logOut=()=>{
		window.localStorage.clear();
		window.location.href="/login";
	};



	
	render(){
		const {  location } = this.props
		let pathname = location.pathname
		let mentorarray = ["dashboard","Mentor/bookings"]
	return (
		<header className="header">
			<div className="header-fixed">
				<nav className="navbar navbar-expand-lg header-nav">
				<div className="navbar-header">
				<a id="mobile_btn" href="">
					<span className="bar-icon">
					<span />
					<span />
					<span />
					</span>
				</a>
				<Link to="/app/index" className="navbar-brand logo">
					<img src={AppLogo} className="img-logo" alt="Logo" />
				</Link>
				</div>
				<div className="main-menu-wrapper">
				<div className="menu-header">
					<Link to="/app/index" className="menu-logo">
					<img  className="img-fluid" alt="Logo" />
					</Link>
					<a id="menu_close" className="menu-close" href="#">
					<i className="fas fa-times" />
					</a>
				</div>
				<ul className="main-nav">
					<li className={pathname.includes('index') ?"active" :""} >
					<Link to="/app/index">Home</Link>
					</li>
					{window.localStorage.getItem("loggedIn") ? <>
					<li className={pathname.includes('search') ?"active" :""} >
					<Link to="/app/Mentee/search">Events</Link>
					</li>
					<li className={pathname.includes('track') ?"active" :""} >
					<Link to="/app/Mentee/tracks">Tracks</Link>
					</li></>:<h1></h1>
					}
					<li className={pathname.includes('blog') ?"active" :""} >
					<Link to="/app/Blog/blog-list">Blogs</Link>
					</li>
					<li className={pathname.includes('aboutUS') ?"active" :""} >
					<Link to="/app/Pages/aboutus">About us</Link>
					</li>
					<li className={pathname.includes('contactUS') ?"active" :""} >
					<Link to="/app/Pages/contactus">Contact us</Link>
					</li>
					{window.localStorage.getItem("loggedIn") ? <><li className={pathname.includes('watchlist') ?"active" :""} >
					{/* <Link to="/app/Pages/watchlist">Watchlist</Link> */}
					</li>
					</>:<h1></h1>
					}
				</ul>		 
				</div>	
				{window.localStorage.getItem("loggedIn") ? <ul className="nav header-navbar-rht">
				
				{<li className="nav-item dropdown has-arrow logged-item">
				<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
					<span className="user-img">
					{/* <img className="rounded-circle" src={this.state.userData.image} width={31} alt="Darren Elder" /> */}
					<img
						className="rounded-circle"
						src={this.state.userData.image ? this.state.userData.image : `${USER_P}` }
						width={31}
						alt="Profile Image"
					/>
					</span>
				</a>
				<div className="dropdown-menu dropdown-menu-right">
					<div className="user-header">
					<div className="avatar avatar-sm">
						<img src={this.state.userData.image ? this.state.userData.image : `${USER_P}` } alt="Profile Image" className="avatar-img rounded-circle" />
					</div>
					<div className="user-text">
					<h6>
						{this.state.userData.fname !== null
						? `${this.state.userData.fname} ${this.state.userData.lname}`
						: window.localStorage.getItem("emailAddress")}
					</h6>
					</div>
					</div>
					<Link className="dropdown-item" to="/app/Pages/userprofile">Profile</Link>
					<Link className="dropdown-item" onClick={this.logOut}>Logout</Link>
				</div>
				</li> }
				
		 </ul> :
		 <ul className="nav header-navbar-rht">
		 <li className="nav-item">
			 <Link className="nav-link" to="/login">Login</Link>
		 </li>
		 <li className="nav-item">
			 <Link className="nav-link header-login" to="/register">Register</Link>
		 </li>
	 </ul>
				 } 
			</nav>
			</div>
		</header>
  	);
}
		
}
 
 
export default withRouter(Header);