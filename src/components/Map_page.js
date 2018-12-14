import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import $ from "jquery";

import Nav from "./Nav";
import Footer from "./Footer";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 



  

class Map_page extends Component {
    vals = [];
    constructor(props) {
      super(props);
      this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},

        sellers:[],

        search:"",
        city:"縣市",
        place:"",

        foodclass:[],
        };
      // this.handleChange = this.handleChange.bind(this); 
      
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
        let key = evt.target.id;
        let value = evt.target.value;
        this.setState({
            [key]: value
        },()=>this.filter())
        let search = document.querySelector('#search');
        if(search.value!=""){
            search.classList.remove('search_bg');
        } else{
            search.classList.add('search_bg');
        }
              
    }

    componentDidMount() { 
            
    }   

    //確認勾選狀態
    isCheck = evt => {
      if(evt.target.checked){
        console.log("true")
         this.vals.push(evt.target.value);
    }else{
        //移除
        for( var i = 0; i < this.vals.length; i++){                
            if ( this.vals[i] === evt.target.value) {
                this.vals.splice(i, 1); 
            }
         }             
    }
   
    this.setState({
        foodclass:this.vals
    },()=>this.filter())

    
      
  }
    
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

    filter(){
      let data = this.state
      //讀取店家跟商品資料
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/shoppingAPI/shoppingAPI.php', {
          method: 'POST',
          mode:'cors',
          credentials: 'include',
          body: JSON.stringify(data),
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
      // console.log(this.state.products)
      }).catch(function(err) {
      console.log('失敗囉',err)
      })  
  }
    
    render() {
      const style = {
        width: '91%',
        height: '70vh'
      }
      return (
        <React.Fragment>
            <Nav/>
          <div className=" pt_72">
            
            <div className="container-fluid reset pr_10">
              <div className="row">
                <div className="col-4 gray_bg position-fixed">
                    <div className="pl_10 mt-5 pr-5">
                        <ul className="pl-0">
                            <li className="d-inline font_2 notoSans color_70 font_500">                                
                                <Link className="color_70" to="/products">美食列表</Link>                               
                            </li>
                            <li className="d-inline font_2 notoSans color_green mx-2">
                               | 
                            </li>
                            <li className="d-inline font_2 notoSans color_green font_500">
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
                            <option>選擇地區</option>                     
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
                            <option>選擇地區</option>                       
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
                            <input className="form-check-input" type="checkbox" value="麵包" onChange={this.isCheck}></input>
                            <label className="form-check-label notoSans" for="check">
                                麵包
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="甜點" onChange={this.isCheck}></input>
                            <label className="form-check-label notoSans" for="check">
                                甜點
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="飲品" onChange={this.isCheck}></input>
                            <label className="form-check-label notoSans" for="check">
                                飲品
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="熟食" onChange={this.isCheck}></input>
                            <label className="form-check-label notoSans" for="check">
                                熟食
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="壽司" onChange={this.isCheck}></input>
                            <label className="form-check-label notoSans" for="check">
                                壽司
                            </label>
                        </div>
                       
                    </div>
                </div>
                <div className="col-8 ml-auto pl-5 pt-5 mt-1">

                    

                    <Map google={this.props.google} zoom={13}
                         onClick={this.onMapClicked}
                         style={style}
                         initialCenter={{
                          lat: 25.033804,
                          lng: 121.543414
                        }}
                    >
                  
                  {this.state.sellers.map(sellers=>
                      <Marker onClick={this.onMarkerClick}
                              // title={'The marker`s title will appear as a tooltip.'}
                              // icon={{
                              //   url: "http://localhost:3000/uploads/location.svg",
                              // }}
                              src={'http://localhost:3000/uploads/'+ sellers.logo_photo}
                              name={sellers.seller_name}
                              href={"http://localhost:3001/products_detail/"+ sellers.seller_sid}
                              position={{lat:sellers.lat, lng: sellers.lng}}
                              time={"營業時間"+sellers.opening + "-" + sellers.close_time }
                      />
                  )}
                    

                      <InfoWindow onClose={this.onInfoWindowClose} 
                                  marker={this.state.activeMarker}
                                  visible={this.state.showingInfoWindow}>>
                          <div className="row reset">
                            <div className="col text-center">
                              <figure className="circle figure">
                                <img className="w_100" src={this.state.selectedPlace.src}></img>
                              </figure>                             
                              <h5 className="notoSans text-center"><a className="color_black hover_orange" href={this.state.selectedPlace.href}>{this.state.selectedPlace.name}</a></h5>
                              <p className="notoSans text-center letter_space">{this.state.selectedPlace.time}</p>
                            </div>                          
                          </div>
                      </InfoWindow>
                    </Map>


                </div>
              </div>
            </div>
            {/* <Footer/> */}
            
          </div>
          
        </React.Fragment>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyA1OtYaoJcr9bDQB_YWlkNecXobenhxnpA')
  })(Map_page)