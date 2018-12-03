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
import picture from "../images/picture.svg"

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
        seller_address:"",
        logo_photo:"",

        preview:null,
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

        fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/photoEditApi/seller_photoAPI.php', { /*讀取大頭貼 */
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
            logo_photo:json.data,
          })   
          console.log(this.state)
        }).catch(function(err) {
          console.log('失敗囉',err)
        })  
        
        //依網址給予不同的active樣式
        if (window.location.href=="http://localhost:3001/userb_account"){
          let account = document.querySelector('#account')
          account.classList.add('account_active','py-1')
        } else{
          let account = document.querySelector('#account')
          account.classList.remove('account_active','py-1')
        }

        if (window.location.href=="http://localhost:3001/userb_shop"){
          let shop = document.querySelector('#shop')
          shop.classList.add('shop_active','py-1')
        } else{
          let shop = document.querySelector('#shop')
          shop.classList.remove('shop_active','py-1')
        }

        if (window.location.href=="http://localhost:3001/userb_commodity"){
          let commodity = document.querySelector('#commodity')
          commodity.classList.add('commodity_active','py-1')
        } else{
          let commodity = document.querySelector('#commodity')
          commodity.classList.remove('commodity_active','py-1')
        }

        if (window.location.href=="http://localhost:3001/userb_commodity_upload"){
          let commodity = document.querySelector('#commodity')
          commodity.classList.add('commodity_active','py-1')
        } 

        if (window.location.href=="http://localhost:3001/userb_order"){
          let order = document.querySelector('#order')
          order.classList.add('order_active','py-1')
        } else{
          let order = document.querySelector('#order')
          order.classList.remove('order_active','py-1')
        }

        if (window.location.href=="http://localhost:3001/userb_picked"){
          let order = document.querySelector('#order')
          order.classList.add('order_active','py-1')
        }
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
             logo_photo:file.name
            })
        }

        upload = (evt) => { /*上傳相片 */
          evt.preventDefault()
          let data = this.state
          fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/photoEditApi/seller_photoAPI.php', { 
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
                    <img className="img-fluid picture" src={"http://localhost:3000/uploads/" + this.state.logo_photo}></img>
                  </figure>
                  <p className="notoSans text-center font_2 letter_space1">
                    {this.state.name}
                  </p>

                  {/* 編輯照片彈出視窗 */}
                  <form class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <form class="modal-dialog modal-dialog-centered" role="document">
                      <form id="form1" action="http://localhost:3000/upload_logo" method="post" enctype="multipart/form-data" class="modal-content">
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
                    <Link className="col text-center text_decoration" to="/userb_account">
                      <img className="img-fluid icon_size1 mr-3" src={account}></img>
                      <span className="notoSans color_black font_1 font_300">
                        會員資料
                      </span>                                         
                    </Link>
                  </div>

                  <div id="shop" className="row justify-content-center mt-3">
                    <Link className="col text-center text_decoration" to="/userb_shop">
                      <img className="img-fluid icon_size1 mr-3" src={shop}></img>
                      <span className="notoSans color_black font_1 font_300">
                        商店資訊
                      </span>                                         
                    </Link>
                  </div>

                  <div id="commodity" className="row justify-content-center mt-3">
                    <Link className="col text-center text_decoration" to="/userb_commodity">
                      <img className="img-fluid icon_size1 mr-3" src={commodity}></img>
                      <span className="notoSans color_black font_1 font_300">
                        我的商品
                      </span>                                         
                    </Link>
                  </div>

                  <div id="order" className="row justify-content-center mt-3">
                    <Link className="col text-center text_decoration" to="/userb_order">
                      <img className="img-fluid icon_size1 mr-3" src={purchase}></img>
                      <span className="notoSans color_black font_1 font_300">
                        訂單紀錄
                      </span>                                         
                    </Link>
                  </div>

                  <div className="row justify-content-center mt-3">
                    <Link className="col text-center text_decoration" to="/userb_comment">
                      <img className="img-fluid icon_size1 mr-3" src={comment}></img>
                      <span className="notoSans color_black font_1 font_300">
                        顧客評價
                      </span>                                         
                    </Link>
                  </div>

                  <div className="row justify-content-center mt-3 mb-5">
                    <Link className="col text-center text_decoration" to="/userb_mail">
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

export default UserB_account;