import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import iphone from "../images/home/iphone.png";
import member from "../images/home-member-icon.svg";
import search from "../images/home-search-icon.svg";
import order from "../images/home-order-icon.svg";
import waste from "../images/food_waste.jpg";
import arrow from "../images/right-arrow-icon.svg";
import $ from "jquery";

import Nav from "./Nav";
import Footer from "./Footer";

class User_admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
          
  }

  componentDidMount(){ 
        
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="vh_100 pt_72 user_bg">
          <Nav />
          
          <div className="row reset mt-5 pt-5 notoSans px_10 font_3 justify-content-center">
            <div className="col-8">
                <Link className="color_green mr-2" to>一般會員</Link> <span className="color_green">|</span><Link className="color_70 ml-2" to>店家會員</Link>
            </div>
            
          </div>

        </div>

        
        <Footer />
      </React.Fragment>
    );
  }
}

export default User_admin;