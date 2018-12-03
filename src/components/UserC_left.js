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
import picture from "../images/picture.svg"
import user_picture from "../images/user_picture.jpg"

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

        // 依網址給予不同的active樣式
        if (window.location.href=="http://localhost:3001/userc_account"){
          let account = document.querySelector('#account')
          account.classList.add('account_active','py-1')
        } else{
          let account = document.querySelector('#account')
          account.classList.remove('account_active','py-1')
        }

        if (window.location.href=="http://localhost:3001/userc_order"){
          let order = document.querySelector('#order')
          order.classList.add('order_active','py-1')
        } else{
          let order = document.querySelector('#order')
          order.classList.remove('order_active','py-1')
        }

        if (window.location.href=="http://localhost:3001/userc_picked"){
          let order = document.querySelector('#order')
          order.classList.add('order_active','py-1')
        }

        if (window.location.href=="http://localhost:3001/userc_notice"){
          let notice = document.querySelector('#notice')
          notice.classList.add('notice_active','py-1')
        } else{
          let notice = document.querySelector('#notice')
          notice.classList.remove('notice_active','py-1')
        }

        if (window.location.href=="http://localhost:3001/userc_mail"){
          let mail = document.querySelector('#mail')
          mail.classList.add('mail_active','py-1')
        } else{
          let mail = document.querySelector('#mail')
          mail.classList.remove('mail_active','py-1')
        }
             
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
          
                <div className="col-3 signup_white box_shadow vh_75">
                  
                  <figure data-toggle="modal" data-target="#exampleModal" className="circle figure d-block mx-auto mt-3 mb-1 box relative pointer">
                    <img className="img-fluid icon_size1 picture_icon" src={picture}></img>
                    {/* <img className="img-fluid picture" src={user_picture}></img> */}
                    <img className="img-fluid picture" src={"http://localhost:3000/uploads/" + this.state.user_photo}></img>
                  </figure>
                  <p className="notoSans text-center font_2 letter_space1">
                    {this.state.name}
                  </p>
                  
                  
                  {/* 編輯照片彈出視窗 */}
                  <form class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <form class="modal-dialog modal-dialog-centered" role="document">
                      <form id="form1" action="http://localhost:3000/upload" method="post" enctype="multipart/form-data" class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title notoSans" id="exampleModalLongTitle">上傳相片</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="custom-file form-group">
                            <input type="file" class="custom-file-input form-control-file" id="photo" name="file" onChange={this.choosePhoto}></input>
                            <label class="custom-file-label notoSans" for="photo">選擇檔案</label>
                          </div>                         
                        </div>
                        <div class="modal-body">
                          <div className='media'>
                              {preview}
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn_cancel2 notoSans" data-dismiss="modal">取消</button>
                          <button onClick={this.upload} class="btn btn_solid4 notoSans">上傳</button>
                        </div>
                      </form>
                    </form>
                  </form>

                  <div id="account" className="row justify-content-center mt-4">
                    <Link className="col text-center text_decoration" to="/userc_account">
                      <img className="img-fluid icon_size1 mr-3" src={account}></img>
                      <span className="notoSans color_black font_1 font_300">
                        會員資料
                      </span>                                         
                    </Link>
                  </div>

                  <div id="order" className="row justify-content-center mt-3">
                    <Link className="col text-center text_decoration" to="/userc_order">
                      <img className="img-fluid icon_size1 mr-3" src={purchase}></img>
                      <span className="notoSans color_black font_1 font_300">
                        訂單紀錄
                      </span>                                         
                    </Link>
                  </div>

                  <div id="notice" className="row justify-content-center mt-3">
                    <Link className="col text-center text_decoration" to="/userc_notice">
                      <img className="img-fluid icon_size1 mr-3" src={notice}></img>
                      <span className="notoSans color_black font_1 font_300">
                        店家通知
                      </span>                                         
                    </Link>
                  </div>

                  <div id="mail" className="row justify-content-center mt-3 mb-5">
                    <Link className="col text-center text_decoration" to="/userc_mail">
                      <img className="img-fluid icon_size1 mr-3" src={mail}></img>
                      <span className="notoSans color_black font_1 font_300">
                        系統信件
                      </span>                                         
                    </Link>
                  </div>
                                 
                </div>        
        </React.Fragment>
      );
    }   
}

export default UserC_account;