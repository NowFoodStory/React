import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";

import Nav from "./Nav";
import account from "../images/account-icon.svg";
import purchase from "../images/purchase-icon.svg";
import notice from "../images/notice-icon.svg";
import mail from "../images/mail-icon.svg";
import picture from "../images/picture.svg";
import user_picture from "../images/user_picture.jpg";
import UserC_left from "./UserC_left";

class UserC_account extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:"",
        phone:"",
        email:"",
        password:"",

        user_name:"",
        user_phone:"",
        user_email:"",
        user_password:"",
        user_photo:"",
        // user_photo:{user_photo:""},

        data:null,
        preview:null
      }
    }
    componentDidMount(){ /*把資料GET到會員頁面 */
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
            phone:json.data.user_phone ,
            email:json.data.user_email,
            password:json.data.user_password, 
            
          })   
            console.log(this.state)
        }).catch(function(err) {
          console.log('失敗囉',err)
        })
        
        fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/photoEditApi/user_photoAPI.php', { /*讀取大頭貼 */
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
            user_photo:json.data,
          })   
          console.log(this.state)
        }).catch(function(err) {
          console.log('失敗囉',err)
        })  

        
             
    }  

    edit = () => { /*按編輯時把資料GET到表單 */
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
            user_name:json.data.user_name ,
            user_phone:json.data.user_phone ,
            user_email:json.data.user_email,
            user_password:json.data.user_password,
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

    submit = () => { /*按儲存時把資料更新 */
      let data = this.state
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/user_member/user_member_api.php', {
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
        

        // fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/user_login_api.php', { /*編輯完馬上重新登入 */
        //     method: 'POST',
        //     mode:'cors',
        //     credentials: 'include',
        //     body: JSON.stringify(data),
        //     headers: {
        //       //'Content-Type': 'application/json'
        //     },
        // }).then(function (response) {
        //   // console.log(response.json())         
        //   return response.json();
        // }).then(function(json){
        //   console.log('成功囉');
        //   // console.log(json.data_from.user_email)
        // }).catch(function(err) {
        //   console.log('失敗囉',err)
        // })   
        
        window.location.href = "/userc_account"
    }

    choosePhoto = (evt) => { /*選擇相片 */
      const file = evt.target.files[0];
      console.log(file)
      evt.preventDefault();
      let src,preview=file.type;
      src = URL.createObjectURL(file)
      preview = <img className="img-fluid picture" src={src} alt='' />  /*預覽照片*/
      // console.log(src)
      this.setState({
         preview: preview,
         user_photo:file.name
        })
    }

    upload = (evt) => { /*上傳相片 */
      evt.preventDefault()
      let data = this.state
      // console.log(data)
      // const form = new FormData()
      // form.append('file',data)
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/photoEditApi/user_photoAPI.php', { 
        method: 'PUT',
        mode:'cors',
        credentials: 'include',
        // body:form,
        body: JSON.stringify(data),
        headers: {
          // 'Content-Type': 'application/json'
        },
        }).then(function (response) {
          console.log(response.json())         
          return response.json();
        }).then(function(json){
          console.log('成功囉');
        }).catch(function(err) {
          console.log('失敗囉',err)
        }) 
           
        let form1 = document.querySelector('#form1')
        form1.submit()   
              
    }

    render() {
      const { preview } = this.state;
      return (
        <React.Fragment>
          
            <Nav />
            <div className="container-fluid pt_72 user_bg vh_100">
              <div class="row px_10 mt-5">
                <UserC_left/>

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
                              姓名
                            </div>
                            <div className="col-6 notoSans">
                              {this.state.name}
                            </div>
                            <div onClick={this.edit} data-toggle="modal" data-target="#edit" className="col-3 notoSans color_blue pointer">
                              編輯
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
                              手機
                            </div>
                            <div className="col-6 notoSans">
                              {this.state.phone}
                            </div>
                            
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

                              <form>
                                <div class="form-group">
                                  <label className="notoSans" for="exampleInputEmail1">姓名</label>
                                  <input type="text" class="form-control form-control1 notoSans" id="user_name" value={this.state.user_name} onChange={this.handleChange}></input>
                                </div>
                                <div class="form-group">
                                  <label className="notoSans" for="exampleInputPassword1">信箱</label>
                                  <input type="email" class="form-control form-control1 notoSans" id="user_email" value={this.state.user_email} onChange={this.handleChange}></input>
                                </div>
                                <div class="form-group">
                                  <label className="notoSans" for="exampleInputPassword1">密碼</label>
                                  <input type="text" class="form-control form-control1 notoSans" id="user_password" value={this.state.user_password} onChange={this.handleChange}></input>
                                </div>
                                <div class="form-group">
                                  <label className="notoSans" for="exampleInputPassword1">手機</label>
                                  <input type="text" class="form-control form-control1 notoSans" id="user_phone" value={this.state.user_phone} onChange={this.handleChange}></input>
                                </div>                               
                              </form>

                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn_cancel2 notoSans" data-dismiss="modal">取消</button>
                                <button onClick={this.submit} type="submit" class="btn btn_solid4 notoSans">儲存</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        </div>

                        <div className="col-6 border_left">                       
                          <div className="row pl-4 mt-4 align-items-center"> 
                                                         
                              <div className="col-6 notoSans color_70">
                                信用卡設定
                              </div>
                              <div className="col-4 notoSans text-center btn_credit pointer">
                                新增信用卡
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

export default UserC_account;