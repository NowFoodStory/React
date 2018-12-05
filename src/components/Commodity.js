import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import logo from "../images/louisa_logo.png";
import location from "../images/location-icon.svg";
import time from "../images/time-icon.svg";
import product1 from "../images/louisa_product1.jpg";
import product2 from "../images/louisa_product2.jpg";
import product3 from "../images/louisa_product3.jpg";

import Footer from "./Footer";

class Commodity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',

      sellers:[],
      products:[],

      seller_sid:"",
      seller_name:"",
      logo_photo:"",
      opening:"",
      close_time:"",

      food_name:"",
      food_class:"",
      food_quantity:"",
      food_price:"",
      food_discount:"",
      food_photo:"",

    };
    this.handleChange = this.handleChange.bind(this);

    // 讀取店家跟商品資料
    fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/shoppingAPI/shoppingAPI.php', {
            method: 'GET',
            mode:'cors',
            credentials: 'include',
            body: JSON.stringify(),
        }).then(function (response) {       
          return response.json();
        }).then(json => {
          console.log(json)
          console.log('成功囉');
          this.setState({ 
            sellers:json,
            // products:json.foods
          })     
          console.log(this.state.sellers)
          console.log(this.state.products)
        }).catch(function(err) {
          console.log('失敗囉',err)
        })  
  }
  handleChange = (evt) => {
    this.setState({
        value: evt.target.value,
    });        
}



  render() {
    return (
      <React.Fragment>
        <div className="row mt-5 ml-5">
          <div className="col">
            <p className="notoSans font_2 letter_space1">
              離你最近的...
                </p>
          </div>
          <div className="col">
          </div>
          <div className="col">
            <select className="form-control notoSans" id="place" value={this.state.value} onChange={this.handleChange}>
              <option>最近距離</option>
              <option>最受歡迎</option>
              <option>最低價格</option>
            </select>
          </div>
        </div>
        {/* ------------以下為一家店------------ */}
        <div className="row mt-3 ml-5">
          <div className="col-2">
            <figure className="circle figure">
              <img className="img-fluid" src={logo}></img>
            </figure>
          </div>
          <div className="col-7 pl-0 ">
            <h5>
              LOUISA COFFEE
            </h5>
            <p className="notoSans color_orange mb-1">
              4.2★★★★☆  <span className="color_70 ml-2">(54)</span>
            </p>
            <p className="notoSans color_70">
              <img className="img-fluid icon_size" src={location}></img> 150公尺  <img className="img-fluid icon_size ml-2" src={time}></img> 8.pm - 8.30pm
            </p>
          </div>
          <div className="col-3 align-self-center">
            <Link className="btn_solid1 text-center notoSans" to="/products_detail">
              查看商品
            </Link>
          </div>
        </div>
        <div class="row ml-5 mt-3">
          <div className="col">
            <img src={product1} className="img-fluid w_100 vh_25 object_fit"></img>
            <div className="row ">
              <div className="col">
                <p className="notoSans color_70 text-right font_2 line-through mb-0">                 
                    $65
                </p>
              </div> 
            </div>  
            
            <div className="row align-items-center">
              <div className="col-8">
                <h5 className="notoSans letter_space1">
                  櫻桃乳酪塔
                </h5>
              </div>
              <div className="col-4">              
                <p className="notoSans color_orange text-right font_3">
                  $20
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <img src={product2} className="img-fluid d-block mx-auto w_100 vh_25 object_fit"></img>
            <div className="row ">
              <div className="col">
                <p className="notoSans color_70 text-right font_2 line-through mb-0">                 
                    $85
                </p>
              </div> 
            </div>  
            
            <div className="row align-items-center">
              <div className="col-8">
                <h5 className="notoSans letter_space1">
                  焦糖蘋果派
                </h5>
              </div>
              <div className="col-4">              
                <p className="notoSans color_orange text-right font_3">
                  $25
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <img src={product3} className="img-fluid d-block ml-auto w_100 vh_25 object_fit"></img>
            <div className="row ">
              <div className="col">
                <p className="notoSans color_70 text-right font_2 line-through mb-0">                 
                    $45
                </p>
              </div> 
            </div>  
            
            <div className="row align-items-center">
              <div className="col-8">
                <h5 className="notoSans letter_space1">
                  青檸塔
                </h5>
              </div>
              <div className="col-4">              
                <p className="notoSans color_orange text-right font_3">
                  $15
                </p>
              </div>
            </div>
          </div>

        </div>


        <div className="row mt-2 ml-5">
          <div className="col">
            <hr/>
          </div>       
        </div>

      {/* ------------以上為一家店------------ */}

      {/* ------------以下為一家店------------ */}
      {this.state.sellers.map(sellers=>
      <div key={sellers.seller_sid}>
        <div className="row mt-3 ml-5">
          <div className="col-2">
            <figure className="circle figure">
              <img className="img-fluid" src={"http://localhost:3000/uploads/" + sellers.logo_photo}></img>
            </figure>
          </div>
          <div className="col-7 pl-0">
            <h5 className="notoSans">
              {sellers.seller_name} 
            </h5>
            <p className="notoSans color_orange mb-1">
              4.2★★★★☆  <span className="color_70 ml-2">(54)</span>
            </p>
            <p className="notoSans color_70">
              <img className="img-fluid icon_size" src={location}></img> 150公尺  <img className="img-fluid icon_size ml-2" src={time}></img> {sellers.opening} - {sellers.close_time}
            </p>
          </div>
          <div className="col-3 align-self-center">
            <Link className="btn_solid1 text-center notoSans" to={(`/products_detail/${sellers.seller_sid}`)}>
              查看商品
            </Link>
          </div>
        </div>

        <div class="row ml-5 mt-3">
          {sellers.foods.map(foods=>
          <div   className="col-4">
            <img src={"http://localhost:3000/uploads/" + foods.food_photo} className="img-fluid w_100 vh_25 object_fit"></img>
            <div className="row ">
              <div className="col">
                <p className="notoSans color_70 text-right font_2 line-through mb-0">                 
                    ${foods.food_price}
                </p>
              </div> 
            </div>  
            
            <div className="row align-items-center">
              <div className="col-8">
                <h5 className="notoSans letter_space1">
                  {foods.food_name}
                </h5>
              </div>
              <div className="col-4">              
                <p className="notoSans color_orange text-right font_3">
                  ${foods.food_discount}
                </p>
              </div>
            </div>
          </div>
          )}
        </div>
        

        <div className="row mt-2 ml-5">
          <div className="col">
            <hr/>
          </div>       
        </div>
      </div>
      )}
        {/* ------------以上為一家店------------ */}

        </React.Fragment>
        );
      }
    }
  
  export default Commodity;