import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";

import Nav from "./Nav";
import account from "../images/account-icon.svg"
import shop from "../images/shop-icon.svg"
import commodity from "../images/commodity-icon.svg"
import purchase from "../images/purchase-icon.svg"
import comment from "../images/comment-icon.svg"
import mail from "../images/mail-icon.svg"
import product1 from "../images/louisa_product1.jpg";
import UserB_left from "./UserB_left"

class UserB_picked extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:"",
      }
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
          this.setState({ /* */
            name:json.data.seller_name ,
          })     
        }).catch(function(err) {
          console.log('失敗囉',err)
        })       
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
                      <p className="notoSans font_1 font_300 row">
                            <div className="col">
                                <Link className="color_70 mr-1" to="/userb_order">未取貨</Link> | <Link className="color_green ml-1" to="/userb_picked">已取貨</Link>
                            </div>                           
                      </p>
                      
                      <div className="row">
                        <div className="col">
                            <table class="table table-hover notoSans">
                                <thead>
                                    <tr>
                                    <th scope="col">訂單編號</th>
                                    <th scope="col">姓名</th>
                                    <th scope="col">電話</th>
                                    <th scope="col">商品</th>
                                    <th scope="col">數量</th>
                                    <th scope="col">總價</th>
                                    <th scope="col">付款方式</th>
                                    <th scope="col">訂單狀態</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>梁XX</td>
                                    <td>0910435909</td>
                                    <td>櫻桃乳酪塔</td>
                                    <td>2</td>
                                    <td>50</td>
                                    <td>信用卡</td>
                                    <td>已付款</td>                                    
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>梁XX</td>
                                    <td>0910435909</td>
                                    <td>焦糖蘋果派 <br/>
                                        櫻桃乳酪塔
                                    </td>
                                    <td>1 <br/>
                                        3
                                    </td>
                                    <td>100</td>
                                    <td>現金</td>
                                    <td>未付款</td>
                                    </tr>                                   
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

export default UserB_picked;