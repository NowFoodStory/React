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
import logo from "../images/louisa_logo.png";
import UserC_left from "./UserC_left";

class UserC_notice extends Component {
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
            <div className="container-fluid pt_72 user_bg vh_100">
              <div class="row px_10 mt-5">
                <UserC_left/>

                <div className="col-9 pl-5">
                  <div className="row signup_white box_shadow px-5 mb-5">
                    <div className="col">
                      <p className="row align-items-end notoSans font_3 mt-5 mb-0 font_300">
                        <div className="col">
                            店家通知
                        </div>                        
                        <div className="col font_1 color_70 text-right">
                            刪除信件
                        </div>
                      </p>

                      <hr/>

                        {/* 第一個 */}
                      <div className="row justify-content-between">
                        <div className="col-2">
                            <figure className="circle figure">
                            <img className="img-fluid" src={logo}></img>
                            </figure>
                        </div>

                        <div className="col-6">                       
                          <p className="notoSans font_2 mb-0">
                            商品上架囉 !
                          </p>
                          <p className="notoSans color_70 mb-0">
                            今天還剩下好吃的甜點跟餅乾，趕快來搶唷~
                          </p>
                          <p className="notoSans color_70">
                            2018-11-19
                          </p>
                        </div>

                        <div className="col-3 align-self-center text-right">
                            <span className="notoSans btn_solid4 text-center pointer">
                                查看商品
                            </span>
                            
                        </div>

                        <div className="col-1 align-self-center text-right">                       
                            <input className="form-check-input my-auto" type="checkbox" value="" id="check"></input>                                                
                        </div>

                      </div>

                      <div className="row">
                        <div className="col">
                            <hr className="mt-0"/>
                        </div>                       
                      </div>

                        {/* 第二個 */}
                      <div className="row justify-content-between">
                        <div className="col-2">
                            <figure className="circle figure">
                            <img className="img-fluid" src={logo}></img>
                            </figure>
                        </div>

                        <div className="col-6">                       
                          <p className="notoSans font_2 mb-0">
                            商品上架囉 !
                          </p>
                          <p className="notoSans color_70 mb-0">
                            今天還剩下好吃的甜點跟餅乾，趕快來搶唷~
                          </p>
                          <p className="notoSans color_70">
                            2018-11-19
                          </p>
                        </div>

                        <div className="col-3 align-self-center text-right">
                            <span className="notoSans btn_solid4 text-center pointer">
                                查看商品
                            </span>
                            
                        </div>

                        <div className="col-1 align-self-center text-right">                       
                            <input className="form-check-input my-auto" type="checkbox" value="" id="check"></input>                                                
                        </div>

                      </div>

                      <div className="row">
                        <div className="col">
                            <hr className="mt-0"/>
                        </div>                       
                      </div>

                        {/* 第三個 */}
                      <div className="row justify-content-between">
                        <div className="col-2">
                            <figure className="circle figure">
                            <img className="img-fluid" src={logo}></img>
                            </figure>
                        </div>

                        <div className="col-6">                       
                          <p className="notoSans font_2 mb-0">
                            商品上架囉 !
                          </p>
                          <p className="notoSans color_70 mb-0">
                            今天還剩下好吃的甜點跟餅乾，趕快來搶唷~
                          </p>
                          <p className="notoSans color_70">
                            2018-11-19
                          </p>
                        </div>

                        <div className="col-3 align-self-center text-right">
                            <span className="notoSans btn_solid4 text-center pointer">
                                查看商品
                            </span>
                            
                        </div>

                        <div className="col-1 align-self-center text-right">                       
                            <input className="form-check-input my-auto" type="checkbox" value="" id="check"></input>                                                
                        </div>

                      </div>

                      <div className="row mb-5">
                        <div className="col">
                            <hr className="mt-0"/>
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

export default UserC_notice;