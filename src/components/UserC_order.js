import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";

import Nav from "./Nav";
import account from "../images/account-icon.svg"
import purchase from "../images/purchase-icon.svg"
import notice from "../images/notice-icon.svg"
import mail from "../images/mail-icon.svg"
import product1 from "../images/louisa_product1.jpg";
import product2 from "../images/louisa_product2.jpg";
import UserC_left from "./UserC_left";

class UserC_order extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:"",
      }
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
                                <Link className="color_green mr-1" to="/userc_order">未取貨</Link> | <Link className="color_70 ml-1" to="/userc_picked">已取貨</Link>
                            </div>                           
                            <span className="col-9 text-right">
                                *重要提醒：買家達3次未付款未取貨紀錄將撤銷您的使用帳戶
                            </span>
                        </p>
                                           
                      <hr/>

                      <div className="row">
                        <div className="col">
                            <h5 className="row align-items-center">
                                <div className="col">
                                    LOUISA COFFEE
                                    <span className="notoSans font_1 font_300 ml-3 btn_solid4 pointer">
                                        詳細資訊
                                    </span>
                                </div>
                                
                                <span className="notoSans font_1 font_300 text-right col">
                                    未付款
                                </span>
                            </h5>                      
                        </div>
                      </div>

                        <div className="row mt-3">
                            <div className="col-4 vh_25">
                                <img src={product1} className="img-fluid w_100" />
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="notoSans letter_space1">櫻桃乳酪塔</h5>
                                    </div>
                                </div>

                                <div className="row mt-5 justify-content-between">
                                    <div className="col notoSans font_1">
                                        數量1
                                    </div>
                                    <div className="col notoSans color_orange text-right font_3">
                                        $20
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-4 vh_25">
                                <img src={product2} className="img-fluid w_100 " />
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="notoSans letter_space1">焦糖蘋果派</h5>
                                    </div>
                                </div>

                                <div className="row mt-5 justify-content-between">
                                    <div className="col notoSans font_1">
                                        數量
                                    </div>
                                    <div className="col notoSans color_orange text-right font_3">
                                        $50
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col font_2 notoSans">
                                訂單編號 : 10301620
                            </div>
                            <div className="col text-right notoSans font_3">
                                總金額 : <span className="color_orange">$70(付現)</span>
                            </div>
                        </div>

                        <div className="row mt-0 mb-5">
                            <div className="col">
                                <hr/>
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

export default UserC_order;