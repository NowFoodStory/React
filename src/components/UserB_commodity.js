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
import $ from "jquery"
import { updateExpression } from "babel-types";

class UserB_commodity extends Component {
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
        food_sid:"",

        products:[],
        preview:null,
      }
             /*讀取商品資料 */
             fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_commodity/commodity_API.php', { 
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
              products:json.sellerProducts   //更新陣列裡的資料      
            }) 
            console.log(this.state.products)    
          }).catch(function(err) {
            console.log('失敗囉',err)
          })
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
        
        // $(document).on('click','.edit',function(evt){
        //    $('#food_name').val($(this).find('p:nth-child(1)').text())
        // })

    }

    edit = (evt) => {
      evt.preventDefault()
      evt.stopPropagation()
      /*讀取商品資料 */
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_commodity/commodity_API.php', { 
        method: 'GET',
        mode:'cors',
        credentials: 'include',
        body: JSON.stringify(),
        }).then(function (response) {
          // console.log(response.json())         
          return response.json();
        }).then(json => {
          let edit = document.getElementsByClassName('edit') /* 抓到每個商品 */
          console.log(edit.length)                             
          for (let i = 0; i < edit.length; i++) {
            let a = edit[i];
            a.index = i; //给每個className為edit的元素添加index属性;
            a.onclick = () => {
                // alert(a.index)
                this.setState({  /* 抓到索引後讀出該項商品 */                    
                // products:json.sellerProducts,  //更新陣列裡的資料  
                food_name:json.sellerProducts[a.index].food_name,
                food_class:json.sellerProducts[a.index].food_class,
                food_quantity:json.sellerProducts[a.index].food_quantity,
                food_price:json.sellerProducts[a.index].food_price,
                food_discount:json.sellerProducts[a.index].food_discount,
                food_photo:json.sellerProducts[a.index].food_photo,
                food_sid:json.sellerProducts[a.index].food_sid,
              })                             
            }
          }                    
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
    }

    upload = (evt) => { /*儲存編輯完的商品 */
      evt.preventDefault()
      let data =this.state
      console.log(data)
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_commodity/commodity_API.php', {
            method: 'PUT',
            mode:'cors',
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

    delete = (evt) => { /* 刪除商品 */
      evt.preventDefault()
      let data =this.state
      console.log(data)
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_commodity/commodity_API.php', {
            method: 'DELETE',
            mode:'cors',
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
        
        window.location.href="http://localhost:3001/userb_commodity"
    }
    
    render() {
      const { preview } = this.state;
      return (
        <React.Fragment>
          
            <Nav />
            <div className="container-fluid pt_72 user_bg vh_100">
              <div class="row px_10 mt-5">
                <UserB_left/>

                <div className="col-9 pl-5">
                  <div className="row signup_white box_shadow px-5 mb-5 pb-5">
                    <div className="col">
                      <p className="notoSans font_3 mt-5 mb-0 font_300">
                        我的商品
                      </p>
                      <p className="notoSans font_1 font_300">
                        上架我的商品
                      </p>
                      <hr/>
                      <div className="row justify-content-start">
                        <Link to="./userb_commodity_upload" className="col-4 vh_25 commodity_border pointer text-center color_black mt-3">                           
                                <p className="notoSans btn_num font_3 font_600 text-center mb-0 mt-5">
                                    +
                                </p>

                                <p className="notoSans font_3 mb-0">
                                    新增商品
                                </p>                                                                                                   
                        </Link>                       

                        {/* 讀取陣列將商品動態新增 */}                      
                        {this.state.products.map(products=>  
                        <div onClick={this.edit} key={products.food_sid} data-id={products.food_sid} className="col-4 vh_25 relative mt-3 edit">                       
                            <img id={products.food_sid} data-toggle="modal" data-target="#edit" className="img-fluid w_100 absolute pointer" src={"http://localhost:3000/uploads/" + products.food_photo}></img>
                            <div className="row absolute white_bg reset w_100 bottom_0">
                                <div className="col reset">
                                    <p className="notoSans font_500 font_1 ml-2">
                                        {products.food_name}
                                    </p>
                                    <p className="notoSans font_1 ml-2">
                                        ${products.food_discount}
                                    </p>
                                </div>
                                <div className="col text-right">
                                    <p className="notoSans font_1 mr-2">
                                        商品數量<span>{products.food_quantity}</span>
                                    </p>
                                    <p className="notoSans color_70 font_1 mr-2">
                                        已售出<span>2</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        )}
                      
                        {/* 商品資料編輯視窗 */}
                        <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title notoSans font_3" id="exampleModalCenterTitle">編輯上架商品</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">

                                <div className="row">
                                  <div className="col">

                                    <label className="notoSans font_1" for="name">商品名稱</label>
                                    <input id="food_name" type="name" class="form-control form-control1 notoSans" value={this.state.food_name} onChange={this.handleChange}></input>

                                    <label className="notoSans font_1" for="name">商品分類</label>
                                    <select id="food_class" className="form-control form-control1 notoSans" value={this.state.food_class} onChange={this.handleChange}>
                                      <option>分類</option><option>麵包</option><option>甜點</option><option>飲品</option><option>熟食</option><option>壽司</option>
                                    </select>

                                    <label className="notoSans font_1" for="name">商品數量</label>
                                    <input id="food_quantity" type="number" class="form-control form-control1 notoSans" value={this.state.food_quantity} onChange={this.handleChange}></input>

                                    <label className="notoSans font_1" for="name">原價</label>
                                    <input id="food_price" type="text" class="form-control form-control1 notoSans" placeholder="請輸入原本售價" value={this.state.food_price} onChange={this.handleChange}></input>

                                  </div>
                                  <div className="col">

                                    <label className="notoSans font_1" for="name">促銷價</label>
                                    <input id="food_discount" type="text" class="form-control form-control1 notoSans" placeholder="請輸入要上架的促銷價" value={this.state.food_discount} onChange={this.handleChange}></input>

                                    <form id="form2" action="http://localhost:3000/upload_commodity" method="post" enctype="multipart/form-data" className="">
                                      <div className="row mt-4 mx-1 vh_25 commodity_border text-center justify-content-center">
                                            <img id={this.state.food_sid} className="img-fluid mx-1 vh_25 absolute pointer" src={"http://localhost:3000/uploads/" + this.state.food_photo}></img>
                                            {preview}
                                            
                                          {/* 上傳照片 */}
                                            <label className="col btn btn-info absolute vh_25 left_0 opacity_0">
                                              <input name="file" onChange={this.choosePhoto} className="" type="file"></input> 
                                            </label>                                
                                          
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn_cancel2 notoSans" data-dismiss="modal">取消</button>
                                <button data-toggle="modal" data-target="#delete" class="btn btn_delete notoSans">刪除</button>
                                <button onClick={this.upload} class="btn btn_solid4 notoSans">儲存</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    
                          {/* 刪除防呆彈出視窗 */}
                          <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body py-4 notoSans font_2">
                                  確定要刪除該項商品嗎
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn_cancel2 notoSans" data-dismiss="modal">取消</button>
                                  <button onClick={this.delete} class="btn btn_solid4 notoSans">確定</button>
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

export default UserB_commodity;