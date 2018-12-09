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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Nav from "./Nav";
import Footer from "./Footer";
import blog_1 from "../images/blog_1.jpg"

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){ 
          
  }
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <React.Fragment>
        <div className="pt_72">
          <Nav />
          
          <div className="container-fluid row justify-content-center reset px_10 py-5 mt-5">  
              
            <div className="col-10 vh_70 relative mx-auto">           
                <img className="img-fluid vh_70 object_fit w_100" src={waste}></img>
                <div className="white_bg reset p-2 absolute bottom_0 mb-3 col-7 notoSans left_50 translate_left">
                <div className="white_bg2 p-4">
                    <Link to="/blog_detail" className="font_3 font_600 letter_space1 hover_orange pointer color_black">
                    解決食物浪費 環團相約「IG世代」自煮自食
                    </Link>
                    <p className="font_1 letter_space mt-3">
                    文/賴溫狠
                    </p>
                    <p className="font_1 reset letter_space text-justify">
                    台灣食物浪費主要發生在消費端，而其中不懂烹煮、愛拍照的年輕世代，最容易發生食物浪費的狀況...
                    </p>
                </div>             
                </div>                                      
            </div>
          
          </div>
                               

          <div className="container-fluid row justify-content-center reset px_10">
            <div className="col-3 vh_50 upper box_shadow2 px-0 notoSans mt-5 mx-3">
                <img className="img-fluid vh_25 w_100 object_fit pointer" src={blog_1}></img>
                <p className="font_1 mx-3 mt-3 hover_orange">香港勞團回收剩食 盼需要的人都能「食德好」</p>
                <p className=" mx-3 mt-3">文/陳倢伃</p>
            </div>

            <div className="col-3 vh_50 upper box_shadow2 px-0 notoSans mt-5 mx-3">
                <img className="img-fluid vh_25 w_100 object_fit" src={blog_1}></img>
                <p className="font_1 mx-3 mt-3 hover_orange">香港勞團回收剩食 盼需要的人都能「食德好」</p>
                <p className=" mx-3 mt-3">文/陳倢伃</p>
            </div>

            <div className="col-3 vh_50 upper box_shadow2 px-0 notoSans mt-5 mx-3">
                <img className="img-fluid vh_25 w_100 object_fit" src={blog_1}></img>
                <p className="font_1 mx-3 mt-3 hover_orange">香港勞團回收剩食 盼需要的人都能「食德好」</p>
                <p className=" mx-3 mt-3">文/陳倢伃</p>
            </div>
            
                               
            
            
          </div>
        </div>
        <div className="mt-5"></div>
        <Footer />
      </React.Fragment>
    );
  }
}
AOS.init()
export default Blog;