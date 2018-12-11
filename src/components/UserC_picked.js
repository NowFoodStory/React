import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import $ from "jquery";

import Nav from "./Nav";
import account from "../images/account-icon.svg"
import purchase from "../images/purchase-icon.svg"
import notice from "../images/notice-icon.svg"
import mail from "../images/mail-icon.svg"
import product1 from "../images/louisa_product1.jpg";
import product2 from "../images/louisa_product2.jpg";
import UserC_left from "./UserC_left";

class UserC_picked extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:"",

        sellers:[],
        detail:[]
      }

      //   訂單列表
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/user_orders/user_orders_pay_API.php', {
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
        fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/user_member/user_member_api.php', {
              method: 'GET',
              mode:'cors',
              credentials: 'include',
              body: JSON.stringify(),
          }).then(function (response) {
            // console.log(response.json())         
            return response.json();
          }).then(json => {
            console.log(json)
            this.setState({ /* */
              name:json.data.user_name ,         
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
        fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/user_orders/user_read_orders_API.php', {
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
      }
    
    render() {
      return (
        <React.Fragment>
          
            <Nav />
            <div className="container-fluid pt_72 user_bg ">
              <div class="row px_10 mt-5">
                <UserC_left/>

                <div className="col-9 pl-5">
                  <div className="row signup_white box_shadow px-5 mb-5">
                    <div className="col">
                      <p className="notoSans font_3 mt-5 mb-0 font_300">
                        訂單紀錄
                      </p>
                      
                        <p className="notoSans font_1 font_300 row">
                            <div className="col-3">
                                <Link className="color_70 mr-1" to="/userc_order">未取貨</Link> | <Link className="color_green ml-1" to="userc_picked">已取貨</Link>
                            </div>                           
                        </p>
                                           
                      <hr/>

                      <div className="row">
                        <div className="col">
                            <table class="table table-hover notoSans">
                                <thead>
                                    <tr>
                                    <th scope="col">訂單編號</th>
                                    <th scope="col">日期</th>
                                    <th scope="col">店家名稱</th>                                    
                                    <th scope="col">總金額</th>
                                    <th scope="col">訂單狀態</th>
                                    <th scope="col">詳細訂單</th>
                                    </tr>
                                </thead>
                                <tbody className="order">

                                {this.state.sellers.map(sellers=>
                                    <tr ket={sellers.Numb_sid} className="pointer">
                                    <th scope="row">{sellers.Numb_sid}</th>
                                    <td>{sellers.order_time}</td>
                                    <td>{sellers.seller_name}</td>                                   
                                    <td>${sellers.total}</td>
                                    <td class="">未付款</td> 
                                    <td><span data-sid={sellers.Numb_sid} data-toggle="modal" data-target="#check" className="btn_solid4 text-center text_decoration check">查看</span></td>                                   
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

export default UserC_picked;