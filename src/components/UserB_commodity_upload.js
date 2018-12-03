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
import product1 from "../images/louisa_product1.jpg";
import UserB_left from "./UserB_left"

class UserB_commodity_upload extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:"",

        food_name:"",
        food_class:"",
        food_quantity:"",
        food_price:"",
        food_discount:"",
        food_photo:"",

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

    choosePhoto = (evt) => { /*選擇相片 */
      const file = evt.target.files[0];
      console.log(file)
      evt.preventDefault();
      let src,preview=file.type;
      src = URL.createObjectURL(file)
      preview = <img className="img-fluid absolute vh_25" src={src} alt='' />  /*預覽照片*/
      // console.log(src)
      this.setState({
         preview: preview,
         food_photo:file.name
        })
        console.log(this.state)
    }

    upload = (evt) => { /*上架商品 */
      evt.preventDefault()
      let data =this.state
      console.log(data)
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_commodity/commodity_API.php', {
            method: 'POST',
            mode:'no-cors',
            credentials: 'include',
            body: JSON.stringify(data),
            headers: {
              //'Content-Type': 'application/json'
            },
        }).then(function (response) {
          // console.log(response.json())         
          // return response.json();
        }).then(function(json){
          console.log('成功囉');
        }).catch(function(err) {
          console.log('失敗囉',err)
        }) 
        
        let form2 = document.querySelector('#form2')
        form2.submit() 
    }
    
    render() {
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
                        我的商品
                      </p>
                      <p className="notoSans font_1 font_300">
                        上架我的商品
                      </p>
                      <hr/>
                      <div className="row justify-content-between">
                        <div className="col-6">                  

                          <div className="row mt-2">
                            <div class="col">
                                <label className="notoSans font_1" for="name">商品名稱</label>
                                <input id="food_name" type="name" class="form-control form-control1 notoSans" value={this.state.food_name} onChange={this.handleChange}></input>                           
                            </div>
                          </div>

                          <div className="row mt-3">
                            <div class="col">
                              <label className="notoSans font_1" for="name">商品分類</label>
                              <select id="food_class" className="form-control form-control1 notoSans" value={this.state.food_class} onChange={this.handleChange}>
                              <option>分類</option><option>麵包</option><option>甜點</option><option>飲品</option><option>熟食</option><option>壽司</option>
                              </select>
                            </div>                                          
                          </div>

                          <div className="row mt-3">
                            <div class="col">
                                  <label className="notoSans font_1" for="name">商品數量</label>
                                  <input id="food_quantity" type="number" class="form-control form-control1 notoSans" value={this.state.food_quantity} onChange={this.handleChange}></input>                           
                            </div>
                          </div>

                          <div className="row mt-3">
                            <div class="col">
                                  <label className="notoSans font_1" for="name">原價</label>
                                  <input id="food_price" type="text" class="form-control form-control1 notoSans" placeholder="請輸入原本售價" value={this.state.food_price} onChange={this.handleChange}></input>                           
                            </div>
                          </div>

                          <div className="row mt-3 mb-5">
                            <div class="col">
                                  <label className="notoSans font_1" for="name">促銷價</label>
                                  <input id="food_discount" type="text" class="form-control form-control1 notoSans" placeholder="請輸入要上架的促銷價" value={this.state.food_discount} onChange={this.handleChange}></input>                           
                            </div>
                          </div>


                        </div>

                        <form id="form2" action="http://localhost:3000/upload_commodity" method="post" enctype="multipart/form-data" className="col-4 align-items-end">                       
                            <div className="row mt-2 vh_25 commodity_border text-center justify-content-center">
                              <div className="col">                             
                                  <p className="notoSans btn_credit font_3 text-center mt-5 mx-5">
                                    上傳照片
                                  </p>
                                  <p className="notoSans color_70">
                                    每個檔案不得超過2MB
                                  </p>                               
                              </div>                              
                                  {preview}                                                     
                                {/* 上傳照片 */}
                                  <label className="col btn btn-info absolute vh_25 left_0 opacity_0">
                                    <input name="file" onChange={this.choosePhoto} className="" type="file"></input> 
                                  </label>                                                               
                            </div>
                            <div className="row mt-5">
                                <div className="col notoSans text-center pointer btn_cancel mr-3">
                                  取消
                                </div>
                                <button onClick={this.upload} className="btn col notoSans btn_credit text-center pointer">
                                  儲存並上架
                                </button>
                            </div>
                        </form>
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

export default UserB_commodity_upload;