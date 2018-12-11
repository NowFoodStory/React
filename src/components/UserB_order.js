import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import $ from "jquery";

import Nav from "./Nav";
import account from "../images/account-icon.svg"
import shop from "../images/shop-icon.svg"
import commodity from "../images/commodity-icon.svg"
import purchase from "../images/purchase-icon.svg"
import comment from "../images/comment-icon.svg"
import mail from "../images/mail-icon.svg"
import product1 from "../images/louisa_product1.jpg";
import UserB_left from "./UserB_left"

class UserB_order extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:"",

        orders:[],
        detail:[],

        Numb_sid:"",
      }

      // 讀取訂單列表
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_orders/seller_orders_API.php', {
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
            orders:json
          })     
        }).catch(function(err) {
          console.log('失敗囉',err)
        })

    }

    componentDidMount(){ /*把資料GET到會員頁面 */
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_member/seller_member_api.php', {
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
            name:json.data.seller_name ,
          })     
        }).catch(function(err) {
          console.log('失敗囉',err)
        })  
        
        let me = this 
        $(document).on('click','.check',function(evt){
        console.log($(this).attr('data-sid'))
        let sid = {Numb_sid:$(this).attr('data-sid')}
        console.log(sid)
        // 詳細訂單
        fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_orders/seller_read_orders_API.php', {
              method: 'POST',
              mode:'cors',
              credentials: 'include',
              body: JSON.stringify(sid),
          }).then(function (response) {
            // console.log(response.json())         
            return response.json();
          }).then(json => {
            console.log(json)
            me.setState({ 
                detail:json        
             })      
          }).catch(function(err) {
            console.log('失敗囉',err)
          })    
        })

        $(document).on('click','.change',function(evt){
            let Numb_sid = {Numb_sid:$(this).attr('data-sid')}
            me.setState({
                Numb_sid:Numb_sid
            })
        })
                             
    }

    change = evt => {
        let data = this.state.Numb_sid
        fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_orders/seller_orders_PUT.php', {
            method: 'POST',
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
        window.location.href="http://localhost:3001/userb_order"  
    } 
    render() {
      return (
        <React.Fragment>
          
            <Nav />
            <div className="container-fluid pt_72 user_bg vh_100">
              <div class="row px_10 mt-5">
                <UserB_left/>

                <div className="col-9 pl-5">
                  <div className="row signup_white box_shadow vh_75 px-5">
                    <div className="col">
                      <p className="notoSans font_3 mt-5 mb-0 font_300">
                        訂單紀錄
                      </p>
                      <p className="notoSans font_1 font_300 row justify-content-between">
                            <div className="col">
                                <Link className="color_green mr-1" to="/userb_order">未取貨</Link> | <Link className="color_70 ml-1" to="/userb_picked">已取貨</Link>
                                
                            </div> 
                            <span data-toggle="modal" data-target="#change" className="col-2 text-center btn_credit pointer">完成交易</span>                          
                      </p>
                      
                      <div className="row">
                        <div className="col">
                            <table class="table table-hover notoSans">
                                <thead>
                                    <tr>
                                    <th scope="col">訂單編號</th>
                                    <th scope="col">日期</th>
                                    <th scope="col">姓名</th>
                                    <th scope="col">電話</th>
                                    <th scope="col">總金額</th>
                                    <th scope="col">訂單狀態</th>
                                    <th scope="col">詳細訂單</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.orders.map(orders=>
                                    <tr data-sid={orders.Numb_sid} key={orders.Numb_sid} className="pointer change">
                                    <th scope="row">{orders.Numb_sid}</th>
                                    <td>{orders.order_time}</td>
                                    <td>{orders.user_name}</td>
                                    <td>{orders.user_phone}</td>
                                    <td>{orders.total}</td>
                                    <td>未付款</td> 
                                    <td><span data-sid={orders.Numb_sid} data-toggle="modal" data-target="#check" className="btn_solid4 text-center text_decoration check">查看</span></td>                                  
                                    </tr>
                                )}

                                    {/* 查看訂單彈出視窗 */}
                                    <div class="modal fade" id="check" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title letter_space" id="exampleModalCenterTitle">詳細訂單</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                            {this.state.detail.map(detail=>
                                                <div key={detail.food_sid} className="row mt-2">
                                                    <div className="col-6 vh_25">
                                                        <img src={"http://localhost:3000/uploads/" + detail.food_photo} className="img-fluid w_100"/>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h5 className="notoSans letter_space1">{detail.food_name}</h5>
                                                            </div>
                                                        </div>

                                                        <div className="row mt-5 justify-content-between">
                                                            <div className="col notoSans font_1">
                                                                數量{detail.food_quantity}
                                                            </div>
                                                            <div className="col notoSans color_orange text-right font_3">
                                                                ${detail.food_quantity*detail.food_discount}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            </div>
                                            <div class="modal-footer">
                                                <span class="btn_solid4 pointer" data-dismiss="modal">確認</span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 把訂單變成已付款彈出視窗 */}
                                    <div class="modal fade" id="change" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title letter_space" id="exampleModalCenterTitle">完成交易</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body text-center font_2">
                                                確認此筆訂單已經付款
                                            </div>
                                            <div class="modal-footer">
                                                <span onClick={this.change} class="btn_solid4 pointer" data-dismiss="modal">確認</span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                </tbody>
                            </table>
                        </div>
                      </div>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>           
        </React.Fragment>
      );
    }   
}

export default UserB_order;