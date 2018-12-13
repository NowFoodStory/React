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

class Seller_admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sellers:[],

      seller_sid:"",
    }

    //讀取用戶資料
    fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/Master/SELLER_API.php', {
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
            sellers:json
          })     
        }).catch(function(err) {
          console.log('失敗囉',err)
        })
          
  }

  componentDidMount(){ 
    let me = this;
    $(document).on('click','.change',function(evt){
      $('tbody').find('tr').removeClass('active_gray')
      $(this).addClass('active_gray')           
      let seller_sid = {seller_sid:$(this).attr('data-id')}
      me.setState({
        seller_sid:seller_sid
      })
      console.log(me.state.seller_sid)
    })
  }

  delete = evt => {
    let data = this.state.seller_sid
    fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/Master/SELLER_API.php', {
        method: 'PUT',
        mode:'cors',
        credentials: 'include',
        body: JSON.stringify(data),
    }).then(function (response) {
      // console.log(response.json())         
      return response.json();
    }).then(json => {
      console.log(json)              
    }).catch(function(err) {
      console.log('失敗囉',err)
    })
    window.location.href="http://localhost:3001/seller_admin"  
} 
  
  render() {
    return (
      <React.Fragment>
        <div className="pt_72 user_bg">
          <Nav />
          
          <div className="row reset my-5 py-3 notoSans px_10 font_3 justify-content-center">
            <div className="col-9 signup_white box_shadow2 p-5">
              <div className="row">
                <div className="col">
                  <Link className="color_70 mr-2" to="user_admin">一般會員</Link> <span className="color_green">|</span><Link className="color_green ml-3" to>店家會員</Link>
                </div>
                <div className="col text-right">
                  <button data-toggle="modal" data-target="#delete" class="btn btn_delete notoSans">停權</button>
                </div>
              </div>

              <table class="table table-hover notoSans font_1 mt-3">
                                <thead>
                                    <tr>
                                    <th scope="col" className="text-center">編號</th>
                                    <th scope="col" className="text-center">店名</th>
                                    <th scope="col" className="text-center">電話</th>                                    
                                    <th scope="col" className="text-center">信箱</th>
                                    <th scope="col" className="text-center">狀態</th>
                                    </tr>
                                </thead>
                                <tbody className="order">

                                {this.state.sellers.map(sellers=>
                                    <tr data-id={sellers.seller_sid} key={sellers.seller_sid} className="pointer change">
                                    <th scope="row" className="text-center">{sellers.seller_sid}</th>
                                    <td className="text-center">{sellers.seller_name}</td>
                                    <td className="text-center">{sellers.seller_phone}</td>                                   
                                    <td>{sellers.seller_email}</td>
                                    {sellers.seller_status === '1' ?  
                                    <td className="bg-danger color_white text-center">已停權</td>
                                    :<td className="normal_bg color_white text-center">正常</td>
                                    }                                    
                                    </tr>
                                )}

                                    {/* 確認停權彈出視窗 */}
                                    <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title letter_space" id="exampleModalCenterTitle"></h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body text-center font_2 py-4 letter_space">
                                                確定停權此用戶嗎
                                            </div>
                                            <div class="modal-footer">
                                                <span onClick={this.delete} class="btn_solid4 pointer" data-dismiss="modal">確定</span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                </tbody>
                            </table>

            </div>
            
          </div>
        <Footer />
        </div>

        
        
      </React.Fragment>
    );
  }
}

export default Seller_admin;