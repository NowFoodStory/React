import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";

import Nav from "./Nav";
import Footer from "./Footer";
import CitySelect from "./City_select";
import AreaSelect from "./Area_select";
import Commodity from "./Commodity";

class Products extends Component {
    constructor(props) {
      super(props);
      this.state = {
          search:'',
            city:"縣市",
            place:"地區",
        };
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = (evt) => {
        let key = evt.target.id;
        let value = evt.target.value;
        this.setState({
            [key]: value
        })
        let search = document.querySelector('#search');
        if(search.value!=""){
            search.classList.remove('search_bg');
        } else{
            search.classList.add('search_bg');
        }
        
    }
    
    render() {
      return (
        <React.Fragment>
            <Nav/>
          <div className="vh_100 pt_72">
            
            <div className="container-fluid reset pr_10">
              <div className="row">
                <div className="col-4 gray_bg position-fixed">
                    <div className="pl_10 mt-5 pr-5">
                        <ul className="pl-0">
                            <li className="d-inline font_2 notoSans color_70 font_500">                                
                                篩選器                                
                            </li>
                            <li className="d-inline font_2 notoSans color_70 mx-2">
                               | 
                            </li>
                            <li className="d-inline font_2 notoSans color_70 font_500">
                                美食地圖                               
                            </li>
                        </ul>

                        <div>
                            <label for="search" className="notoSans color_70 mt-4 font_1">搜尋</label>                        
                            <input type="text" className="form-control gray_form search_bg" id="search" placeholder="" value={this.state.search} onChange={this.handleChange} ></input>
                        </div>
                        
                        <select className="form-control notoSans mt-4 gray_form" id="city" value={this.state.city} onChange={this.handleChange}>
                            <option>縣市</option>
                            <option>台北市</option>
                            <option>新北市</option>
                        </select>

                        {this.state.city ==="縣市" ?
                        <select className="form-control notoSans mt-4 gray_form" value={this.state.place} onChange={this.handleChange} id="place">                       
                            <option>地區</option>
                        </select>
                        : this.state.city ==="台北市" ?
                        <select className="form-control notoSans mt-4 gray_form" value={this.state.place} onChange={this.handleChange} id="place">                       
                            <option>中正區</option>
                            <option>大同區</option>
                            <option>中山區</option>
                            <option>松山區</option>
                            <option>大安區</option>
                            <option>萬華區</option>
                            <option>信義區</option>
                            <option>士林區</option>
                            <option>北投區</option>                                                       
                            <option>文山區</option>
                        </select>
                        :
                        <select className="form-control notoSans mt-4 gray_form" value={this.state.place} onChange={this.handleChange} id="place">                       
                            <option>新莊區</option>
                            <option>板橋區</option>
                            <option>永和區</option>
                            <option>中和區</option>
                            <option>三重區</option>
                            <option>蘆洲區</option>
                            <option>淡水區</option>
                            <option>樹林區</option>
                            <option>三峽區</option>
                        </select>}
                        <p className="notoSans color_70 mt-4 font_1">
                            種類
                        </p>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="check"></input>
                            <label className="form-check-label notoSans" for="check">
                                麵包
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="check"></input>
                            <label className="form-check-label notoSans" for="check">
                                甜點
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="check"></input>
                            <label className="form-check-label notoSans" for="check">
                                飲品
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="check"></input>
                            <label className="form-check-label notoSans" for="check">
                                熟食
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="check"></input>
                            <label className="form-check-label notoSans" for="check">
                                壽司
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-8 ml-auto">
                    <Commodity/>
                    
                </div>
              </div>
            </div>
            <Footer/>
            
          </div>
          
        </React.Fragment>
      );
    }
  }

  export default Products;