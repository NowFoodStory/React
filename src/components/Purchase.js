import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import $ from "jquery";

import Nav from "./Nav";
import Footer from "./Footer";
import success from "../images/success.svg"
import logo from "../images/louisa_logo.png";
import location from "../images/location-black-icon.svg";
import time from "../images/time-black-icon.svg";
import phone from "../images/phone-black-icon.svg";
import product1 from "../images/louisa_product1.jpg";
import product2 from "../images/louisa_product2.jpg";

class Purchase extends Component {
    constructor(props) {
      super(props);
      this.state = {
          seller_name:"",
          logo_photo:"",
          seller_address:"",
          opening:"",
          close_time:"",
          seller_phone:"",

          foods:[],
      }
      

    /*讀取訂單資料 */
    fetch(`http://localhost/foodstory_end/PHP-and-SQL-master/php/order/orderAPI.php?Numb_sid=${this.props.match.params.numb_sid}`, { 
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
            seller_address:json.sellerData[0].seller_address,
            opening:json.sellerData[0].opening,
            close_time:json.sellerData[0].close_time,
            seller_phone:json.sellerData[0].seller_phone,

            foods:json.FoodData,
        })
    }).catch(function(err) {
        console.log('失敗囉',err)
    })

}

componentDidMount(){
    
}
   
    render() {
      return (
        <React.Fragment>
          <Nav/>
          <div class="container-fluid reset px_10">
            <div class="row pt_72 justify-content-center">
                <div className="col-6 mt-5 mb-5 box_shadow">
                    
                        <div class="row ">
                            <div className="col px-0 vh_40 w_100 green_bg pt-5">
                                <img className="icon_size3 d-block mx-auto" src={success}></img> 
                                <p className="notoSans font_5 color_white text-center mt-2 letter_space1">
                                    感謝訂購 !
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div className="col d-flex justify-content-center align-items-center mt-4">
                                <figure className="circle figure">
                                    <img className="img-fluid" src={"http://localhost:3000/uploads/" + this.state.logo_photo} />
                                </figure>
                                <h3 className="notoSans ml-3">
                                    {this.state.seller_name}
                                </h3>
                            </div>                                                                            
                        </div>

                        <div class="row px-3">
                            <div className="col d-flex">
                                <img className="icon_size2 ml-1" src={location}></img>
                                <a className="notoSans font_2 ml-3 color_black letter_space ml-4" href="https://www.google.com.tw/maps/dir/25.0334434,121.5436265/106%E5%8F%B0%E5%8C%97%E5%B8%82%E5%A4%A7%E5%AE%89%E5%8D%80%E5%BE%A9%E8%88%88%E5%8D%97%E8%B7%AF%E4%B8%80%E6%AE%B5323%E8%99%9F/@25.0335624,121.5415705,17z/data=!3m1!4b1!4m18!1m7!3m6!1s0x3442abd375b308e5:0x1173f542a91d6702!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5b6p6IiI5Y2X6Lev5LiA5q61MzIz6Jmf!3b1!8m2!3d25.0336797!4d121.5438918!4m9!1m1!4e1!1m5!1m1!1s0x3442abd375b308e5:0x1173f542a91d6702!2m2!1d121.5438918!2d25.0336797!3e2">
                                    {this.state.seller_address}
                                </a>                               
                            </div>
                        </div>
                        <div class="row px-3">
                            <div className="col">
                                <hr/>
                            </div>                            
                        </div>

                        <div class="row px-3">
                            <div className="col d-flex">
                                <img className="icon_size2" src={time}></img>
                                <p className="notoSans font_2 ml-3 mx-0 my-0 letter_space">
                                    {this.state.opening}-{this.state.close_time}
                                </p>                               
                            </div>
                        </div>
                        <div class="row px-3">
                            <div className="col">
                                <hr/>
                            </div>                            
                        </div>

                        <div class="row px-3">
                            <div className="col d-flex">
                                <img className="icon_size2" src={phone}></img>
                                <p className="notoSans font_2 ml-3 mx-0 my-0 letter_space">
                                    {this.state.seller_phone}
                                </p>                               
                            </div>
                        </div>
                        <div class="row px-3">
                            <div className="col">
                                <hr/>
                            </div>                            
                        </div>

                        {/* 以下為商品 */}
                        {this.state.foods.map(foods=>
                        <div className="div" key={foods.food_sid}>
                            <div class="row mt-3 px-3">
                                <div className="col-6 vh_25">
                                    <img src={"http://localhost:3000/uploads/" + foods.food_photo} className="img-fluid w_100 " />
                                </div>
                                <div className="col-6">
                                    <h5 className="notoSans letter_space1 text-right">{foods.food_name}</h5>
                                    <p className="notoSans font_1 text-right mt-5">
                                        數量   <span className=" font_1">{foods.food_quantity}</span>
                                    </p>
                                    <p className="notoSans color_orange text-right font_4 mt-5">
                                        ${foods.food_discount*foods.food_quantity}
                                    </p>
                                </div>
                            </div>
                            <div class="row px-3">
                                <div className="col">
                                    <hr/>
                                </div>                            
                            </div>
                        </div>                       
                        )}
                                              
                        {/* 訂單編號 總金額 */}
                        <div class="row px-3">
                            <div className="col">
                                <p className="notoSans font_3">
                                    訂單編號 : <span>{this.props.match.params.numb_sid}</span>                                
                                </p>
                            </div>
                            <div className="col">
                                <p className="notoSans font_4 text-right ">
                                    總金額 : <span className="color_orange">${this.props.match.params.total}</span>
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
  
export default Purchase;