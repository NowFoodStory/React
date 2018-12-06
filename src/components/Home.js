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

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){ 
        
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="vh_100 pt_72">
          <Nav />
          <div className="container-fluid reset px_10">
            <div className="home_bg">
              <div className="row align-items-center mt-5">
                <div className="col-7">
                  <h1 className="notoSans color_70 font_600 font_5">
                    拯救那些被浪費掉的食物 <br />
                    一起守護我們的環境吧
                  </h1>
                </div>
                <div className="col-5">
                  <img data-aos="zoom-in-down" data-aos-duration="1000" src={iphone} calssName="img-fluid" />
                </div>
              </div>
              <div className="row align-items-center mt-3">
                <div className="col-3">
                  <h5 className="notoSans color_70 mb-4 text-justify">
                    輕鬆的搜尋以及預約您週遭附近正在特價的食物
                  </h5>
                  <Link className="text_decoration" to="/signup">
                    <h4 className="btn_border notoSans text-center">
                      註冊享有美味佳餚
                    </h4>
                  </Link>
                  
                </div>
                <div className="col-3">
                  <h5 className="notoSans color_70 mb-4 text-justify ">
                    將您賣不完的食物上傳到平台讓消費者能夠輕鬆找到
                  </h5>
                  <Link className="text_decoration" to="/signup/form2">
                    <h4 className="btn_solid notoSans text-center">
                      註冊成為合作店家
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="signup_bg2 over_flow">
          <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="row notoSans font_4 letter_space1 justify-content-center pt-5 color_white">
            關於我們的使命
          </p>
          <div className="row px_10 justify-content-center">
            <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="col-8 font_1 notoSans letter_space1 text-justify pb-5 line_height color_white font_300">
              根據聯合國資料，全球每年有1/3的食物還沒食用就遭丟棄，這13億噸遭到浪費的食物，造成7500億美元與龐大環境成本，例如產生高達44億噸的碳排放。回顧台灣，每年從廚餘量推估的食材浪費達300萬噸以上，因此我們團隊決定提供一個平台來解決店家浪費食物的問題。
            </p>
          </div>      
        </div>

        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="row reset justify-content-center notoSans mt-5 pt-5 font_4 font_500 letter_space1">
            如何使用限食動態   
        </div>
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="row reset justify-content-center notoSans color_70">         
            簡單三步驟，你也能為環境盡一份力
        </div>
        <div className="row reset mt-5 notoSans px_10 justify-content-center">
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="col-3 vh_50 border text-center py-4 upper">
            <img className="vh_25" src={member}></img>
            <p className="mt-3 font_1 text-left mx-2">
              <span className="font_4 font_600">1.</span>註冊成為我們的會員
            </p>
          </div>
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="col-3 vh_50 border mx-5 text-center py-4 upper">
            <img className="vh_25" src={search}></img>
            <p className="mt-3 font_1 text-left mx-2">
              <span className="font_4 font_600">2.</span>到美食列表去搜尋附近有哪些店家正在PO出便宜的美食
            </p>           
          </div>
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="col-3 vh_50 border text-center py-4 upper">
            <img className="vh_25" src={order}></img>
            <p className="mt-3 font_1 text-left mx-2">
              <span className="font_4 font_600">3.</span>選好想吃的食物下訂後就可以過去領取囉
            </p> 
          </div>
        </div>

        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="row reset mt-5 pt-5 notoSans justify-content-center align-items-end">
          <p className="font_4 font_600 letter_space1">
            專欄 <span className="font_1 border_bottom color_70 ml-1">LIFE</span>
          </p> 
        </div>
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="row reset px_10 mt-4 justify-content-between mb-5 pb-5">
          <div className="col-7 vh_65 relative">
            <img className="img-fluid vh_65 object_fit w_100" src={waste}></img>
            <div className="white_bg reset p-2 absolute bottom_0 right_0 col-8 notoSans translate">
              <div className="white_bg2 p-4">
                <p className="font_3 font_600 letter_space1 hover_orange pointer">
                  解決食物浪費 環團相約「IG世代」自煮自食
                </p>
                <p className="font_1 letter_space">
                  文/賴溫狠
                </p>
                <p className="font_1 reset letter_space text-justify">
                  台灣食物浪費主要發生在消費端，而其中不懂烹煮、愛拍照的年輕世代，最容易發生食物浪費的狀況...
                </p>
              </div>             
            </div>
          </div>

          <div className="col-4 notoSans">
            <div className="row">
              <img className="icon_size1 col-2" src={arrow}></img>
              <p className="font_2 col-10 px-0 letter_space hover_orange pointer">            
                香港勞團回收剩食 盼需要的人都能「食德好」<br/>
                <span className="font_1 color_70">文/陳倢伃</span>
              </p>
            </div>

            <div className="row mt-2">
              <img className="icon_size1 col-2" src={arrow}></img>
              <p className="font_2 col-10 px-0 letter_space hover_orange pointer">            
                德國拯救剩食運動擴散來台 「享食台灣」正發芽<br/>
                <span className="font_1 color_70">文/彭瑞祥</span>
              </p>
            </div>

            <div className="row mt-2">
              <img className="icon_size1 col-2 z_index" src={arrow}></img>
              <p className="font_2 col-10 px-0 letter_space hover_orange pointer">            
                苗栗愛心食材交流平台 選定三市場試辦<br/>
                <span className="font_1 color_70">文/陳秀玲</span>
              </p>
            </div>

          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
AOS.init()
export default Home;
