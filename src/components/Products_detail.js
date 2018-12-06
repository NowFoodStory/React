import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

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
class Products_detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      
      seller_name:"",
      logo_photo:"",
      cover_photo:"",
      seller_phone:"",
      seller_address:"",
      opening:"",
      close_time:"",
      FB:"",
      IG:"",
      Web:"",
      Introduction:"",

      products:[],

    };
    console.log(this.props.match.params.sid)
    /*讀取店家跟商品資料 */
    fetch(`http://localhost/foodstory_end/PHP-and-SQL-master/php/store/storeAPI.php?seller_sid=${this.props.match.params.sid}`, { 
      method: 'GET',
      mode:'cors',
      credentials: 'include',
      body: JSON.stringify(),
    }).then(function (response) {
      // console.log(response.json())         
      return response.json();
    }).then(json => {
      console.log(json)
      this.setState({ 
        seller_name:json.sellerData[0].seller_name,
        logo_photo:json.sellerData[0].logo_photo,
        cover_photo:json.sellerData[0].cover_photo,
        seller_phone:json.sellerData[0].seller_phone,
        seller_address:json.sellerData[0].seller_address,
        opening:json.sellerData[0].opening,
        close_time:json.sellerData[0].close_time,
        FB:json.sellerData[0].FB,
        IG:json.sellerData[0].IG,
        Web:json.sellerData[0].Web,
        Introduction:json.sellerData[0].Introduction,

        products:json.shopData,
      })    
    }).catch(function(err) {
      console.log('失敗囉',err)
    })
  }

  componentDidMount(){
    $(document).on('click','.add',function(evt){
      $(this).prev().val(Math.abs(parseInt($(this).prev().val()))+1)
    })
    $(document).on('click','.min',function(evt){
      if($(this).next().val()>0){
        $(this).next().val(Math.abs(parseInt($(this).next().val()))-1)
      }
    })
  }
  changePage = evt => {
    window.location.href = "/purchase";
  }
  addColor = evt => {
    let like = document.querySelector("#like");
    like.classList.toggle("red_color");
  };

  addNum = (evt) => {
    num++;
    console.log(num);
    this.setState({
      num:num
    });
  };
  minusNum = evt => {
    if (num > 0) {
      num--;
    }
    console.log(num);
    this.setState({
      num:num
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
    var img = {
    background: `url(http://localhost:3000/uploads/${this.state.cover_photo}) no-repeat 50% 50%`,
    backgroundSize: '100%'
  }
    return (
      <React.Fragment>
        <Nav />
        <div class="container-fluid reset px_10">
          <div class="row pt_72 justify-content-center">
            <div className="col-8">
              <div class="row mt-5 pt-3">
                <div className="col-4 text-center btn_solid2">
                  <Link className="notoSans color_white text_decoration" to="/products_detail">
                    資訊
                  </Link>
                </div>
                <div className="col-4 text-center">
                  <Link className="notoSans color_70" to="/products_comment">
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
                <div className="col px-0">
                  <figure className="figure vh_40 w_100 company_bg" style={img}>
                    {/* <img className="img-fluid w_100" src={louisa_bg}></img> */}
                    <div class="row mt_15vh">
                      <div className="col">
                        <h2 className="notoSans color_white font_5 font_600 letter_space1 text-center">
                          {this.state.seller_name} 
                        </h2>
                      </div>
                    </div>

                    <div class="row mt-5">
                      <a className="ml-auto" target="_blank" href={this.state.FB}>
                        <img
                        className="img-fluid icon_size2 d-block"
                        src={fb}
                      />
                      </a>
                      
                      <a target="_blank" href={this.state.IG}>
                        <img
                        className="img-fluid icon_size2 d-block mx-3"
                        src={ig}
                      />
                      </a>
                      
                      <a  target="_blank" href={this.state.Web}>
                        <img
                        className="img-fluid icon_size2 d-block mr-4"
                        src={home}
                      />
                      </a>
                      
                    </div>
                  </figure>
                </div>
              </div>
              {/* 店家資訊 */}
              <div className="row mt-1">
                <div className="col-2">
                  <figure className="circle figure">
                    <img className="img-fluid" src={"http://localhost:3000/uploads/" + this.state.logo_photo} />
                  </figure>
                </div>
                <div className="col-7 pl-0 ">
                  <h5 className="notoSans">{this.state.seller_address}</h5>
                  <p className="notoSans color_orange mb-1">
                    4.2★★★★☆ <span className="color_70 ml-2">(54)</span>
                  </p>
                  <p className="notoSans color_70">
                    <img className="img-fluid icon_size" src={location} />{" "}
                    150公尺{" "}
                    <img className="img-fluid icon_size ml-2" src={time} /> {this.state.opening}
                    - {this.state.close_time}
                    <img
                      className="img-fluid icon_size ml-2"
                      src={phone}
                    />{" "}
                    {this.state.seller_phone}
                  </p>
                </div>
                <div className="col-3 align-self-start text-right">
                  <i
                    id="like"
                    onClick={this.addColor}
                    class="fas fa-heart font_3 pointer"
                  />
                </div>
              </div>
              {/* 店家簡介 */}
              <div className="row mt-1">
                <p className="notoSans text-justify">
                  {this.state.Introduction}
                </p>
              </div>
              {/* 商品 */}
            {this.state.products.map(products=>
              <div key={products.food_sid}>
                  <div className="row mt-1">
                  <div className="col-4 vh_25">
                    <img src={"http://localhost:3000/uploads/" + products.food_photo} className="img-fluid w_100 " />
                  </div>

                  <div className="col-8">
                    <div className="row justify-content-center">
                      <div className="col-4">
                        <p className="notoSans font_1 text-center">
                          數量 <span className="color_70 font_1">還剩{products.food_quantity}個</span>
                        </p>
                      </div>
                    </div>
                    <div className="row justify-content-end">
                      <div className="col-4">
                        <p className="notoSans color_70 text-right font_2 line-through">
                          ${products.food_price*num}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <h5 className="notoSans letter_space1">{products.food_name}</h5>
                      </div>
                      <div className="col-4">
                        <p className="text-center font_2">
                          <span
                            // onClick={this.minusNum}
                            className="btn_num font_3 font_600 mr-3 pointer min"
                          >
                            -
                          </span>
                          {/* <span>{num}</span> */}
                          <input className="w_25 text-center" type="text" value="0"></input>
                          <span
                            // onClick={this.addNum}
                            className="btn_num font_3 font_600 ml-3 pointer add"
                          >
                            +
                          </span>
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="notoSans color_orange text-right font_3">
                          ${products.food_discount*num}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <hr />
                  </div>
                </div>
              </div>
            )} 
              
              

              <div className="row mt-5" />
              <div className="row mt-5" />
              <div className="row mt-5" />
            </div>
          </div>
        </div>

        <div className="container-fluid reset px_10 gray_form position-fixed bottom_0">
          <div class="row justify-content-end">
            <div class="col-8 d-flex py-3">
              <p className="notoSans font_3 mr-4 ml-auto my-auto">
                總金額 : <span className="color_orange">$70</span>
              </p>

              <Link
                data-toggle="modal"
                data-target="#pay"
                className="btn_solid3 font_3 notoSans"
                to
              >
                結帳
              </Link>
            </div>
          </div>
        </div>

        {/* 付款方式彈出視窗 */}
        <div
          class="modal fade"
          id="pay"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content container-fluid">
              <div class="modal-header">
                <h5 class="modal-title notoSans font_3" id="exampleModalLongTitle">
                  付款方式
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body row mt-3 ">
                <div class="col-6">
                  <p id="credit" onClick={this.credit} type="checkbox" className="notoSans text-center btn_pay font_2 pointer">
                    信用卡
                  </p>
                </div>
                <div class="col-6">
                  <p id="cash" onClick={this.cash} type="checkbox" className="notoSans text-center btn_pay font_2 pointer">
                    現金交易
                  </p>
                </div>
                <div class="col-12">
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" value="" id="check"></input>
                    <label className="form-check-label notoSans" for="check">
                    我已閱讀並同意 <Link className="font_500 color_black" to>服務使用條款</Link>
                    </label>
                  </div>
                </div>
              </div>

              <div class="modal-footer row">
                {/* <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button> */}
                <div class="col">
                  <p data-toggle="modal" data-dismiss="modal" data-target="#confirm" class="notoSans w_100 btn_solid1 font_2 text-center pointer" to>
                    確認
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* 確認購買彈出視窗 */}
        <div
          class="modal fade"
          id="confirm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content container-fluid">
              <div class="modal-header">
                
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body row mt-3 ">
                
                <div class="col-12">
                  <p className="notoSans font_2">
                    確定要購買此商品嗎，按下確定後無法更改此筆訂單資訊
                  </p>
                </div>
                
              </div>

              <div class="modal-footer row">
                {/* <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button> */}
                <div className="col">
                  <p data-dismiss="modal" className="notoSans w_100 font_2 text-center btn_pay pointer">
                    取消
                  </p>
                </div>
                <div class="col">
                  <p onClick={this.changePage} className="notoSans w_100 btn_solid1 font_2 text-center pointer">
                    {/* <Link to="/purchase"  class="btn_solid1">                                        */}
                      確認
                    {/* </Link>  */}
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Products_detail;
