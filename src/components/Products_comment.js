import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

import Nav from "./Nav";
import Footer from "./Footer";
import logo from "../images/louisa_logo.png";
import product1 from "../images/louisa_product1.jpg";
import product2 from "../images/louisa_product2.jpg";
import product3 from "../images/louisa_product3.jpg";
import location from "../images/location-icon.svg";
import time from "../images/time-icon.svg";
import phone from "../images/phone-icon.svg";
import louisa_bg from "../images/louisa_bg.jpg";
import fb from "../images/fb_icon.svg";
import ig from "../images/ig_icon.svg";
import home from "../images/home_icon.svg";

var num = 0;
class Products_comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
 
  

  }
  changePage = evt => {
    window.location.href = "/purchase";
  }
  addColor = evt => {
    let like = document.querySelector("#like");
    like.classList.toggle("red_color");
  };

  addNum = evt => {
    num++;
    console.log(num);
    this.setState({
      value: evt.target.value
    });
  };
  minusNum = evt => {
    if (num > 0) {
      num--;
    }
    console.log(num);
    this.setState({
      value: evt.target.value
    });
  };

  credit = evt => {
    let credit = document.querySelector('#credit')
    let cash = document.querySelector('#cash')
    credit.classList.add("btn_orange");
    cash.classList.remove("btn_orange");
  }
  cash = evt => {
    let cash = document.querySelector('#cash')
    let credit = document.querySelector('#credit')
    cash.classList.add("btn_orange");
    credit.classList.remove("btn_orange");
  }
  
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div class="container-fluid reset px_10 pb-5">
          <div class="row pt_72 justify-content-center">
            <div className="col-8">
              <div class="row mt-5 pt-3">
                <div className="col-4 text-center">
                  <Link className="notoSans color_70" to="/products_detail">
                    資訊
                  </Link>
                </div>
                <div className="col-4 text-center btn_solid2">
                  <Link className="notoSans color_white text_decoration" to="/products_comment">
                    評論
                  </Link>
                </div>
                <div className="col-4 text-center">
                  <Link className="notoSans color_70" to="">
                    地圖
                  </Link>
                </div>
              </div>
              <div class="row">
                <div className="col px-0 box_shadow">
                  <figure className="row justify-content-center align-items-center vh_40 w_100 notoSans">
                    <div className="col-4 font_2 color_70 ">
                      <p className="mb-2">5<span className="ml-2">★</span></p>
                      <p className="mb-2">4<span className="ml-2">★</span></p>
                      <p className="mb-2">3<span className="ml-2">★</span></p>
                      <p className="mb-2">2<span className="ml-2">★</span></p>
                      <p>1<span className="ml-2">★</span></p>
                    </div>
                    <div className="col-4">
                      <p className="font_6 font_300 color_orange reset text-center">
                        4.2          
                      </p>
                      <p className="font_3 color_orange text-center reset">★★★★☆</p>
                      <p className="font_1 color_70 text-center letter_space">54篇評論</p>
                    </div>
                  </figure>
                </div>
              </div>

              <div className="row box_shadow mt-3 notoSans">
                 <div className="col py-4 px-5">
                    <p className="font_2 m-0 letter_space">值得再去</p>
                    <p className="color_orange m-0 my-1">★★★★☆ <span className="color_70 ml-2 letter_space">梁** / 10月20,2018</span></p>
                    <p className="font_1">類下下一美始場面輕打雲況老何以中；科對局以意財回出，血局到列醫時意拉散立感就好心分陸統因重，絕持石</p>
                 </div>
              </div>
              <div className="row box_shadow mt-3 notoSans">
                 <div className="col py-4 px-5">
                    <p className="font_2 m-0 letter_space">值得再去</p>
                    <p className="color_orange m-0 my-1">★★★★☆ <span className="color_70 ml-2 letter_space">梁** / 10月20,2018</span></p>
                    <p className="font_1">類下下一美始場面輕打雲況老何以中；科對局以意財回出，血局到列醫時意拉散立感就好心分陸統因重，絕持石</p>
                 </div>
              </div>
              <div className="row box_shadow mt-3 notoSans">
                 <div className="col py-4 px-5">
                    <p className="font_2 m-0 letter_space">值得再去</p>
                    <p className="color_orange m-0 my-1">★★★★☆ <span className="color_70 ml-2 letter_space">梁** / 10月20,2018</span></p>
                    <p className="font_1">類下下一美始場面輕打雲況老何以中；科對局以意財回出，血局到列醫時意拉散立感就好心分陸統因重，絕持石</p>
                 </div>
              </div>
              
                                         
            </div>
          </div>
        </div>           
      </React.Fragment>
    );
  }
}
var img = {
    background: 'url(https://i.screenshot.net/xoomltg) no-repeat 50% 50%',
    backgroundSize: '100%'
  }
export default Products_comment;