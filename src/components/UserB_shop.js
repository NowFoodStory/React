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
import logo from "../images/louisa_logo.png";
import company_bg from "../images/louisa_bg.jpg"
import UserB_left from "./UserB_left"

class UserB_shop extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:"",
        
        // 編輯視窗
        cover_photo:"",
        FB:"",
        IG:"",
        Web:"",
        opening:"",
        close_time:"",
        checkout:[],
        Introduction:"",
        
        // 編輯完顯示在頁面上
        _FB:"",
        _IG:"",
        _Web:"",
        _opening:"",
        _close_time:"",
        _checkout:[],
        _Introduction:"",

        preview:null,
        
      }
    }
    componentDidMount(){
       /*把資料GET到會員頁面 */
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
        
        // 讀取店家資訊
        fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_data/seller_dataAPI.php', {
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
            cover_photo:json.sellerProducts[0].cover_photo,

            _FB:json.sellerProducts[0].FB,
            _IG:json.sellerProducts[0].IG,
            _Web:json.sellerProducts[0].Web,
            _opening:json.sellerProducts[0].opening,
            _close_time:json.sellerProducts[0].close_time,
            _checkout:[],
            _Introduction:json.sellerProducts[0].Introduction,
          })     
        }).catch(function(err) {
          console.log('失敗囉',err)
        })
    }

    edit = (evt) => { 
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_data/seller_dataAPI.php', {
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
            FB:json.sellerProducts[0].FB,
            IG:json.sellerProducts[0].IG,
            Web:json.sellerProducts[0].Web,
            opening:json.sellerProducts[0].opening,
            close_time:json.sellerProducts[0].close_time,
            checkout:[],
            Introduction:json.sellerProducts[0].Introduction,
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

    payway =(evt)=>{ /*付款方式 */
      let { checked, value } = evt.target
      let { checkout } = this.state
      if (checked && checkout.indexOf(value) === -1) {
        checkout.push(value)
      } else {
        checkout.filter(item => item !== value)
      }
      this.setState({
        checkout
      })
      console.log(this.state.checkout)
    }

    upload = () => { /*上傳編輯完的商店資訊 */
          let data = this.state
          fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_data/seller_dataAPI.php', { 
            method: 'PUT',
            mode:'cors',
            credentials: 'include',
            // body:form,
            body: JSON.stringify(data),
            headers: {
              // 'Content-Type': 'application/json'
            },
            }).then(function (response) {
              // console.log(response.json())         
              // return response.json();
            }).then(function(json){
              console.log('成功囉');
            }).catch(function(err) {
              console.log('失敗囉',err)
            }) 
    }

    chooseCover = (evt) => { /*選擇相片 */
      const file = evt.target.files[0];
      console.log(file.name)
      // evt.preventDefault();
      let src,preview=file.type;
      src = URL.createObjectURL(file)
      preview = <img className="img-fluid picture" src={src} alt='' />  /*預覽照片*/
      // console.log(src)
      this.setState({
         preview: preview,
         cover_photo:file.name
        })
      console.log(this.state.cover_photo)
    }

    uploadCover = (evt) =>{
          evt.preventDefault()
          let data = this.state
          fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_data/seller_CoverPhoto_PUT.php', { 
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
               
            let form2 = document.querySelector('#form2')
            form2.submit()
    }
    
    render() {
      var img = {
      background: `url(http://localhost:3000/uploads/${this.state.cover_photo}) no-repeat 50% 50%`,
      backgroundSize: '100%'
      }
      const { checkout } = this.state
      const { preview } = this.state;
      return (
        <React.Fragment>
          
            <Nav />
            <div className="container-fluid pt_72 user_bg">
              <div class="row px_10 mt-5">
                <UserB_left/>

                <div className="col-9 pl-5">
                  <div className="row signup_white box_shadow px-5 mb-5">
                    <div className="col">
                      <p className="notoSans font_3 mt-5 mb-0 font_300">                      
                        商店資訊
                      </p>
                      <div className="notoSans font_1 font_300 row">
                        <div className="col">
                            管理你的商店資訊
                        </div>
                        <div className="col text-right ">
                            <span onClick={this.edit} data-toggle="modal" data-target="#edit" className="color_blue pointer">編輯</span>
                        </div> 

                        {/* 以下為商店資料編輯視窗 */}
                        <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title notoSans font_3" id="exampleModalCenterTitle">編輯商店資訊</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">

                                <div className="row">
                                  <div className="col">

                                    <div className="row mt-2">
                                      <div class="col">
                                            <label className="notoSans font_1" for="name">FB</label>
                                            <input type="text" class="form-control form-control1 notoSans" value={this.state.FB} id="FB" onChange={this.handleChange} placeholder="請輸入FB網址"></input>                           
                                      </div>
                                    </div>
                                    <div className="row mt-3">
                                      <div class="col">
                                            <label className="notoSans font_1" for="name">IG</label>
                                            <input type="text" class="form-control form-control1 notoSans" value={this.state.IG} id="IG" onChange={this.handleChange} placeholder="請輸入IG網址"></input>                           
                                      </div>
                                    </div>
                                    <div className="row mt-3">
                                      <div class="col">
                                            <label className="notoSans font_1" for="name">官網</label>
                                            <input type="text" class="form-control form-control1 notoSans" value={this.state.Web} id="Web" onChange={this.handleChange} placeholder="請輸入官網網址"></input>                           
                                      </div>
                                    </div>

                                    <div className="row mt-3">
                                      <div class="col">
                                        <label className="notoSans font_1" for="name">營業時間</label>
                                        <div className="row">
                                          <div class="col">
                                            <select id="opening" value={this.state.opening} onChange={this.handleChange} className="form-control form-control1 notoSans">
                                              <option>16:00</option><option>16:30</option><option>17:00</option><option>17:30</option><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option><option>21:00</option>
                                            </select>
                                          </div>
                                          <span>~</span>
                                          <div class="col">
                                            <select id="close_time" value={this.state.close_time} onChange={this.handleChange} className="form-control form-control1 notoSans">
                                              <option>16:00</option><option>16:30</option><option>17:00</option><option>17:30</option><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option><option>21:00</option>
                                            </select>
                                          </div>
                                          
                                        </div>
                                      </div>                                          
                                    </div>

                                  </div>
                                  <div className="col">
                                  

                                    <div className="row mt-2">
                                        <div className="col notoSans ">
                                          <span className="font_1">結帳設定</span><span className="ml-1 color_70">設定買家付款方式</span>
                                          <div className="row mt-3">
                                            <div className="col">
                                              <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="cash" checked={this.state.checkout.indexOf('cash') !== -1} onChange={this.payway} id="check"></input>
                                                <label className="form-check-label notoSans" for="check">
                                                    現金 
                                                </label>  
                                              </div>            
                                            </div>
                                            <div className="col">
                                              <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="credit" checked={this.state.checkout.indexOf('credit') !== -1} onChange={this.payway} id="check"></input>
                                                <label className="form-check-label notoSans" for="check">
                                                    信用卡 
                                                </label>  
                                              </div> 
                                            </div>
                                          </div>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                      <div class="col">
                                            <label className="notoSans font_1" for="name">商家簡介</label>
                                            <textarea type="text" rows="9" class="form-control form-control1 notoSans" value={this.state.Introduction} onChange={this.handleChange} id="Introduction" placeholder="字數請勿超過150"></textarea>                           
                                      </div>
                                    </div>
                                    
                                  </div>
                                </div>
                              
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn_cancel2 notoSans" data-dismiss="modal">取消</button>                               
                                <button onClick={this.upload} class="btn btn_solid4 notoSans">儲存</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 以上為商店資料編輯視窗 */}
                      
                      </div>
                      <hr/>
                      <div className="row justify-content-between">
                        <div className="col-6">

                          <div className="row mt-2">                          
                            <figure className="figure vh_20 w_100" style={img}>
                                <div class="row mt-3">
                                    <div className="col text-right mr-2">
                                        <span data-toggle="modal" data-target="#editCover" className="notoSans font_1 color_white signup_gray p-2 pointer">編輯封面照片</span>
                                    </div>
                                </div>                     
                            </figure>
                          </div>

                          {/* 編輯照片彈出視窗 */}
                          <form class="modal fade" id="editCover" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <form class="modal-dialog modal-dialog-centered" role="document">
                              <form id="form2" action="http://localhost:3000/upload_cover" method="post" enctype="multipart/form-data" class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title notoSans" id="exampleModalLongTitle">上傳相片</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <div class="custom-file form-group">
                                    <input type="file" class="custom-file-input form-control-file" id="photo" name="file_cover" onChange={this.chooseCover}></input>
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
                                  <button onClick={this.uploadCover} class="btn btn_solid4 notoSans">上傳</button>
                                </div>
                              </form>
                            </form>
                          </form>

                            <div className="row mt-2">
                                <div className="col notoSans ">
                                  <span className="font_1">連結</span><span className="ml-1 color_70">店家連結會出現在你的橫幅右下角</span>
                                </div>
                            </div>

                            <div className="row mt-3">
                              <div class="col">
                                    <label className="notoSans font_1" for="name">FB</label>
                                    <input disabled type="text" class="form-control form-control1 notoSans" id="text" value={this.state._FB}></input>                           
                              </div>
                            </div>

                            <div className="row mt-3">
                              <div class="col">
                                    <label className="notoSans font_1" for="name">IG</label>
                                    <input disabled type="text" class="form-control form-control1 notoSans" id="text" value={this.state._IG}></input>                           
                              </div>
                            </div>

                            <div className="row mt-3 mb-5">
                              <div class="col">
                                    <label className="notoSans font_1" for="name">官網</label>
                                    <input disabled type="text" class="form-control form-control1 notoSans" id="text" value={this.state._Web}></input>                           
                              </div>
                            </div>

                        </div>

                        <div className="col-6">                       
                            
                          <div className="row mt-2">
                            <div class="col">
                              <label className="notoSans font_1" for="name">營業時間</label>
                              <div className="row">
                                <div class="col">
                                  <select disabled value={this.state._opening} className="form-control form-control1 notoSans">
                                    <option>16:00</option><option>16:30</option><option>17:00</option><option>17:30</option><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option><option>21:00</option>
                                  </select>
                                </div>
                                <span>~</span>
                                <div class="col">
                                  <select disabled value={this.state._close_time} className="form-control form-control1 notoSans">
                                    <option>16:00</option><option>16:30</option><option>17:00</option><option>17:30</option><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option><option>21:00</option>
                                  </select>
                                </div>
                                
                              </div>
                            </div>                                          
                          </div>

                            <div className="row mt-4">
                                <div className="col notoSans ">
                                  <span className="font_1">結帳設定</span><span className="ml-1 color_70">設定買家付款方式</span>
                                  <div className="row mt-3">
                                    <div className="col">
                                      <div className="form-check">
                                        <input disabled className="form-check-input" type="checkbox" value="" id="check"></input>
                                        <label className="form-check-label notoSans" for="check">
                                            現金 
                                        </label>  
                                      </div>            
                                    </div>
                                    <div className="col">
                                      <div className="form-check">
                                        <input disabled className="form-check-input" type="checkbox" value="" id="check"></input>
                                        <label className="form-check-label notoSans" for="check">
                                            信用卡 
                                        </label>  
                                      </div> 
                                    </div>
                                  </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                              <div class="col">
                                    <label className="notoSans font_1" for="name">商家簡介</label>
                                    <textarea disabled value={this.state._Introduction} type="text" rows="9" class="form-control form-control1 notoSans" id="text"></textarea>                           
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


export default UserB_shop;