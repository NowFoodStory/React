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
import UserB_left from "./UserB_left"

class UserB_account extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:"",
        email:"",
        password:"",
        phone:"",
        leader:"",
        EIN:"",
        address:"",

        seller_name:"",
        seller_email:"",
        seller_password:"",
        seller_phone:"",       
        principal:"",
        seller_EIN:"",
        seller_address:""
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
            email:json.data.seller_email,
            password:json.data.seller_password,
            phone:json.data.seller_phone ,
            leader:json.data.principal,
            EIN:json.data.seller_EIN,
            address:json.data.seller_address, 
            
          })     
        }).catch(function(err) {
          console.log('失敗囉',err)
        })       
    }

        handleChange = (evt) => { 
          let key = evt.target.id;
          let value = evt.target.value;
          this.setState({
              [key]: value
          })
        }

        edit = () => { /*按編輯時把資料GET到表單 */
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
                seller_name:json.data.seller_name,
                seller_email:json.data.seller_email,
                seller_password:json.data.seller_password,
                seller_phone:json.data.seller_phone,       
                principal:json.data.principal,
                seller_EIN:json.data.seller_EIN,
                seller_address:json.data.seller_address
              })     
            }).catch(function(err) {
              console.log('失敗囉',err)
            })       
        }

        submit = () => { /*按儲存時把資料更新 */
          let data = this.state
          fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_member/seller_member_api.php', {
            method: 'PUT',
            mode:'cors',
            credentials: 'include',
            body: JSON.stringify(data),
            headers: {
              //'Content-Type': 'application/json'
            },
            }).then(function (response) {
              // console.log(response.json())         
              return response.json();
            }).then(function(json){
              console.log('成功囉');
            }).catch(function(err) {
              console.log('失敗囉',err)
            }) 
            
            
            window.location.href = "/userb_account"
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
                        會員資料
                      </p>
                      <p className="notoSans font_1 font_300">
                        管理你的檔案以保護你的帳號
                      </p>
                      <hr/>
                      <div className="row justify-content-between">
                        <div className="col-6">

                          <div className="row mt-4">
                            <div className="col-3 notoSans color_70">
                              公司
                            </div>
                            <div className="col-6 notoSans">
                              {this.state.name}
                            </div>
                            
                          </div>

                          <div className="row mt-4">
                            <div className="col-3 notoSans color_70">
                              信箱
                            </div>
                            <div className="col-6 notoSans">
                              {this.state.email}
                            </div>
                            
                          </div>

                          <div className="row mt-4">
                            <div className="col-3 notoSans color_70">
                              密碼
                            </div>
                            <div className="col-6 notoSans">
                              {this.state.password}
                            </div>
                            
                          </div>

                          <div className="row mt-4">
                            <div className="col-3 notoSans color_70">
                              電話
                            </div>
                            <div className="col-6 notoSans">
                              {this.state.phone}
                            </div>
                            
                          </div>


                        </div>

                        <div className="col-6 border_left">                       
                            <div className="row mt-4 ml-2">
                                <div className="col-3 notoSans color_70">
                                負責人
                                </div>
                                <div className="col-6 notoSans">
                                  {this.state.leader}
                                </div>
                                <div onClick={this.edit} data-toggle="modal" data-target="#edit" className="col-3 notoSans color_blue pointer">
                                編輯
                                </div>
                            </div>

                            <div className="row mt-4 ml-2">
                                <div className="col-3 notoSans color_70">
                                統編
                                </div>
                                <div className="col-6 notoSans">
                                  {this.state.EIN}
                                </div>
                                
                            </div>

                            <div className="row mt-4 ml-2">
                                <div className="col-3 notoSans color_70">
                                地址
                                </div>
                                <div className="col-6 notoSans">
                                  {this.state.address}
                                </div>
                                
                                {/* 會員資料編輯視窗 */}
                                  <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5 class="modal-title notoSans font_3" id="exampleModalCenterTitle">編輯會員資料</h5>
                                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                          </button>
                                        </div>
                                        <div class="modal-body">

                                        <form className="row">
                                        <div className="col">
                                          <div class="form-group">
                                              <label className="notoSans" for="exampleInputEmail1">公司</label>
                                              <input type="text" class="form-control form-control1 notoSans" id="seller_name" value={this.state.seller_name} onChange={this.handleChange}></input>
                                            </div>
                                            <div class="form-group">
                                              <label className="notoSans" for="exampleInputPassword1">信箱</label>
                                              <input type="email" class="form-control form-control1 notoSans" id="seller_email" value={this.state.seller_email} onChange={this.handleChange}></input>
                                            </div>
                                            <div class="form-group">
                                              <label className="notoSans" for="exampleInputPassword1">密碼</label>
                                              <input type="text" class="form-control form-control1 notoSans" id="seller_password" value={this.state.seller_password} onChange={this.handleChange}></input>
                                            </div>
                                            <div class="form-group">
                                              <label className="notoSans" for="exampleInputPassword1">電話</label>
                                              <input type="text" class="form-control form-control1 notoSans" id="seller_phone" value={this.state.seller_phone} onChange={this.handleChange}></input>
                                            </div> 
                                        </div>
                                        <div className="col">
                                          <div class="form-group">
                                              <label className="notoSans" for="exampleInputEmail1">負責人</label>
                                              <input type="text" class="form-control form-control1 notoSans" id="principal" value={this.state.principal} onChange={this.handleChange}></input>
                                            </div>  
                                            <div class="form-group">
                                              <label className="notoSans" for="exampleInputEmail1">統編</label>
                                              <input type="text" class="form-control form-control1 notoSans" id="seller_EIN" value={this.state.seller_EIN} onChange={this.handleChange}></input>
                                            </div>   
                                            <div class="form-group">
                                              <label className="notoSans" for="exampleInputEmail1">地址</label>
                                              <input type="text" class="form-control form-control1 notoSans" id="seller_address" value={this.state.seller_address} onChange={this.handleChange}></input>
                                            </div> 
                                        </div>
                                                                  
                                        </form>

                                        </div>
                                        <div class="modal-footer">
                                          <button type="button" class="btn btn-secondary notoSans" data-dismiss="modal">取消</button>
                                          <button onClick={this.submit} type="submit" class="btn btn-primary notoSans">儲存</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                            </div>
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

export default UserB_account;