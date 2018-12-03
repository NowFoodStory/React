import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import $ from "jquery";


class Signup extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        user_name: "",
        user_phone: "",
        user_email: "",
        user_password: "",

        seller_name:"",
        seller_phone:"",
        seller_EIN:"",
        seller_address:"",
        seller_email:"",
        seller_password:""
    };
    //   this.state = {
    //     members: [],
    //     member: this.initState,
    //     type: 'add'
    // }
    
    

    }
    
    changePage = (evt) => {
        
      // window.location.reload() 
      // let form1 = document.querySelector('#form1')
      window.location.href = "http://localhost:3001/login"
    }

    handleChange = (evt) => {
      let key = evt.target.id;
      let value = evt.target.value;
      this.setState({
          [key]: value
      })
      
    }
    
    changeform2 = evt => {
      let form1 = document.querySelector('#form1')
      let form2 = document.querySelector('#form2')
      let word1 = document.querySelector('#word1')
      let word2 = document.querySelector('#word2')
      let bg = document.querySelector('#bg')

      form1.style='transform:translateY(-500px);opacity:0;transition:1'
      form2.style='transform:translateY(0px);opacity:1;transition:1'

      word1.classList.add('d-none')
      word2.classList.remove('d-none')
      
      bg.classList.remove('signup_bg1')
      bg.classList.add('signup_bg2')     
    }
    
    changeform1 = evt => {
      let form1 = document.querySelector('#form1')
      let form2 = document.querySelector('#form2')
      let word1 = document.querySelector('#word1')
      let word2 = document.querySelector('#word2')
      let bg = document.querySelector('#bg')

      form1.style='transform:translateY(0px);opacity:1;transition:1'
      form2.style='transform:translateY(-500px);opacity:0;transition:1'

      word1.classList.remove('d-none')
      word2.classList.add('d-none')
      
      bg.classList.remove('signup_bg2')
      bg.classList.add('signup_bg1')   
    }
    
    checkform1 = (evt) => { /*如果欄位沒填或錯誤的話不會彈出成功視窗 */
      let user_name = document.querySelector('#user_name')
      let user_phone = document.querySelector('#user_phone')
      let user_email = document.querySelector('#user_email')
      let user_password = document.querySelector('#user_password')
      let name_wrong = document.querySelector('#name_wrong')
      let phone_wrong = document.querySelector('#phone_wrong')
      let email_wrong = document.querySelector('#email_wrong')
      let password_wrong = document.querySelector('#password_wrong')
      if(user_name.value!=''&& user_phone.value!=''&&user_email.value!=''&&user_password.value!=''){
        $('#success').modal('show')
      }
      if(user_name.value==''){
        name_wrong.classList.add('notoSans','color_red')
        name_wrong.textContent='請輸入姓名'
      }else{
        name_wrong.textContent=''
      }

      if(user_phone.value==''){
        phone_wrong.classList.add('notoSans','color_red')
        phone_wrong.textContent='請輸入電話'
      }else{
        phone_wrong.textContent=''
      }

      if(user_email.value==''){
        email_wrong.classList.add('notoSans','color_red')
        email_wrong.textContent='請輸入信箱'
      }else{
        email_wrong.textContent=''
      }

      if(user_password.value==''){
        password_wrong.classList.add('notoSans','color_red')
        password_wrong.textContent='請輸入密碼'
      }else{
        password_wrong.textContent=''
      }
    }

    checkform2 = evt => { /*如果欄位沒填或錯誤的話不會彈出成功視窗 */
      let seller_name = document.querySelector('#seller_name')
      let seller_phone = document.querySelector('#seller_phone')
      let seller_EIN = document.querySelector('#seller_EIN')
      let seller_address = document.querySelector('#seller_address')
      let seller_email = document.querySelector('#seller_email')
      let seller_password = document.querySelector('#seller_password')
      let seller_name_wrong = document.querySelector('#seller_name_wrong')
      let seller_phone_wrong = document.querySelector('#seller_phone_wrong')
      let seller_EIN_wrong = document.querySelector('#seller_EIN_wrong')
      let seller_address_wrong = document.querySelector('#seller_address_wrong')
      let seller_email_wrong = document.querySelector('#seller_email_wrong')
      let seller_password_wrong = document.querySelector('#seller_password_wrong')
      if(seller_name.value!=''&& seller_phone.value!=''&&seller_EIN.value!=''&&seller_address.value!=''&&seller_email.value!=''&&seller_password.value!=''){
        $('#success').modal('show')
      }
      if(seller_name.value==''){
        seller_name_wrong.classList.add('notoSans','color_red')
        seller_name_wrong.textContent='請輸入公司名稱'
      }else{
        seller_name_wrong.textContent=''
      }

      if(seller_phone.value==''){
        seller_phone_wrong.classList.add('notoSans','color_red')
        seller_phone_wrong.textContent='請輸入電話'
      }else{
        seller_phone_wrong.textContent=''
      }

      if(seller_EIN.value==''){
        seller_EIN_wrong.classList.add('notoSans','color_red')
        seller_EIN_wrong.textContent='請輸入統編'
      }else{
        seller_EIN_wrong.textContent=''
      }

      if(seller_address.value==''){
        seller_address_wrong.classList.add('notoSans','color_red')
        seller_address_wrong.textContent='請輸入地址'
      }else{
        seller_address_wrong.textContent=''
      }

      if(seller_email.value==''){
        seller_email_wrong.classList.add('notoSans','color_red')
        seller_email_wrong.textContent='請輸入信箱'
      }else{
        seller_email_wrong.textContent=''
      }

      if(seller_password.value==''){
        seller_password_wrong.classList.add('notoSans','color_red')
        seller_password_wrong.textContent='請輸入密碼'
      }else{
        seller_password_wrong.textContent=''
      }
    }
    render() {
      return (
        <React.Fragment>
            <div id="bg" className="container-fluid vh_100 w_100 signup_bg1 transition">
              <div className="row px_10">
                <div className="col mt-4">
                        <Link className="navbar-brand notoSans color_white letter_space2 font_3 logo_border px-2 py-0" to="/home">
                            限食動態
                        </Link>
                </div>
                <div className="col text-right mt-4">
                  <Link className="color_70 font_3 font_500" to="/login">
                    LOG IN
                  </Link>
                  <Link className="color_black font_3 font_500 ml-3" to="/signup">
                    SIGN UP
                  </Link>
                </div>
              </div>

              <div className="row mt-5 pt-5 px_10 justify-content-center">
                <div className="col-8 mt-2 vh_50 w_100 signup_gray">
                  <div className="row px-5">
                  
                    {/* 一般用戶註冊表單 */}
                    <div id="form1" className="col-6 mb-5 ml-5 px-5 signup_white position-fixed box_shadow w_25 top_17 transition">                        
                      
                      <form target="form1_iframe" action="http://localhost/foodstory_end/PHP-and-SQL-master/php/user_register_api.php" method="post">
                        <div className="form-group mt-4 row align-items-center">
                          <div className="col">
                            <p className="notoSans font_4 font_500 color_70 text-center">
                              註冊享有美味佳餚
                            </p>
                          </div>                          
                        </div>

                        <div className=" mt-3 row align-items-center">
                          <p className="col-2 reset notoSans">
                            姓名
                          </p>
                          <input value={this.state.user_name} onChange={this.handleChange} type="text" id="user_name" name="user_name" className="col-10 form-control notoSans" placeholder=""></input>
                          <small id="name_wrong" class="form-text"></small>
                        </div>

                        <div className=" mt-4 row align-items-center">
                          <p className="col-2 reset notoSans">
                            電話
                          </p>
                          <input value={this.state.user_phone} onChange={this.handleChange} type="text" id="user_phone" name="user_phone" className="col-10 form-control notoSans" placeholder=""></input>
                          <small id="phone_wrong" class="form-text"></small>
                        </div>

                        <div className=" mt-4 row align-items-center">
                          <p className="col-2 reset notoSans">
                            信箱
                          </p>
                          <input value={this.state.user_email} onChange={this.handleChange} type="email" id="user_email" name="user_email" className="col-10 form-control notoSans" placeholder=""></input>
                          <small id="email_wrong" class="form-text"></small>
                        </div>

                        <div className=" mt-4 row align-items-center">
                          <p className="col-2 reset notoSans">
                            密碼
                          </p>
                          <input value={this.state.user_password} onChange={this.handleChange} type="password" id="user_password" name="user_password" className="col-10 form-control notoSans" placeholder=""></input>
                          <small id="password_wrong" class="form-text"></small>
                        </div>

                        <div className="form-group row align-items-center mt-5 mb-5">
                          <button onClick={this.checkform1}  id="submit" type="submit" className="col btn notoSans letter_space2 text-center btn_solid1 pointer">
                            SUBMIT
                          </button>
                        </div>                                         
                        <iframe className="d-none" name="form1_iframe"></iframe> 
                      </form>
                    </div> 

                    {/* 註冊成功彈出視窗 */}
                      <div
                        class="modal fade"
                        id="success"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content container-fluid">
                            <div class="modal-header">
                              <h5 class="modal-title notoSans font_3" id="exampleModalLongTitle">
                                註冊成功
                              </h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body row mt-3 ">
                              
                              <div class="col notoSans font_2">
                                歡迎您成為我們的會員，按下確認後進到登入頁面
                              </div>
                            </div>

                            <div class="modal-footer row">
                              
                              <div class="col">
                                <p onClick={this.changePage} data-toggle="modal" data-dismiss="modal" data-target="#confirm" class="notoSans w_100 btn_solid1 font_2 text-center pointer" to>
                                  確認
                                </p>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    
                    {/* 店家用戶註冊表單 */}                   
                    <div id="form2" className="opacity col-6 right_30 mb-5 ml-5 px-5 signup_white position-fixed box_shadow w_25 top_17">                        
                      
                      <form target="form2_iframe" action="http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_register_api.php" method="post">
                        <div className="form-group mt-4 mb-0 row align-items-center">
                          <div className="col">
                            <p className="notoSans font_4 font_500 color_70 text-center">
                              註冊成為合作商家
                            </p>
                          </div>                          
                        </div>

                        <div className=" mt-0 row align-items-center">
                          <p className="col-2 reset notoSans">
                            公司
                          </p>
                          <input value={this.state.seller_name} onChange={this.handleChange} type="text" id="seller_name" name="seller_name" className="col-10 form-control notoSans" placeholder=""></input>
                          <small className="notoSans color_red" id="seller_name_wrong" class="form-text"></small>
                        </div>

                        <div className=" mt-3 row align-items-center">
                          <p className="col-2 reset notoSans">
                            電話
                          </p>
                          <input value={this.state.seller_phone} onChange={this.handleChange} type="text" id="seller_phone" name="seller_phone" className="col-10 form-control notoSans" placeholder=""></input>
                          <small className="notoSans color_red" id="seller_phone_wrong" class="form-text"></small>
                        </div>

                        <div className=" mt-3 row align-items-center">
                          <p className="col-2 reset notoSans">
                            統編
                          </p>
                          <input value={this.state.seller_EIN} onChange={this.handleChange} type="text" id="seller_EIN" name="seller_EIN" className="col-10 form-control notoSans" placeholder=""></input>
                          <small className="notoSans color_red" id="seller_EIN_wrong" class="form-text"></small>
                        </div>

                        <div className="mt-3 row align-items-center">
                          <p className="col-2 reset notoSans">
                            地址
                          </p>
                          <input value={this.state.seller_address} onChange={this.handleChange} type="text" id="seller_address" name="seller_address" className="col-10 form-control notoSans" placeholder=""></input>
                          <small className="notoSans color_red" id="seller_address_wrong" class="form-text"></small>
                        </div>

                        <div className=" mt-3 row align-items-center">
                          <p className="col-2 reset notoSans">
                            信箱
                          </p>
                          <input value={this.state.seller_email} onChange={this.handleChange} type="email" id="seller_email" name="seller_email" className="col-10 form-control notoSans" placeholder=""></input>
                          <small className="notoSans color_red" id="seller_email_wrong" class="form-text"></small>
                        </div>

                        <div className="mt-3 row align-items-center">
                          <p className="col-2 reset notoSans">
                            密碼
                          </p>
                          <input value={this.state.seller_password} onChange={this.handleChange} type="password" id="seller_password" name="seller_password" className="col-10 form-control notoSans" placeholder=""></input>
                          <small className="notoSans color_red" id="seller_password_wrong" class="form-text"></small>
                        </div>

                        <div className="form-group row align-items-center mt-4 mb-4">
                          <button onClick={this.checkform2} type="submit" className="col btn notoSans letter_space2 text-center btn_solid1 pointer">
                            SUBMIT
                          </button>
                        </div>                                         
                        <iframe className="d-none" name="form2_iframe"></iframe>
                      </form>
                    </div>
                                                                                            
                  </div>

                  {/* 右邊文字 */}
                  <div id="word1" className="col-5 ml-auto px-5 mt-5 pt-3">
                    <p className="notoSans color_white font_2">
                      將您賣不完的食物上傳到平台讓消費者能夠輕鬆找到
                    </p>
                      
                    <p onClick={this.changeform2} className="notoSans btn_border2 font_2 text-center pointer mt-4">
                      註冊成為合作商家
                    </p>
                      
                  </div>

                  {/*  左邊文字  */}
                  <div id="word2" className="d-none col-5 px-5 mt-5 pt-3">
                    <p className="notoSans color_white font_2">
                      輕鬆的搜尋以及預約您週遭附近正在特價的食物
                    </p>
                      
                    <p onClick={this.changeform1} className="notoSans btn_border2 font_2 text-center  pointer mt-4">
                      註冊享有美味佳餚
                    </p>
                      
                  </div>
                  
                </div>
              </div>
            </div>  
        </React.Fragment>
      )
    } 
    componentDidMount(){
      console.log("Counter Component Did Mount")
      console.log(window.location.href)
      if(window.location.href == "http://localhost:3001/signup/form2"){
      
        let form1 = document.querySelector('#form1')
        let form2 = document.querySelector('#form2')
        let word1 = document.querySelector('#word1')
        let word2 = document.querySelector('#word2')
        let bg = document.querySelector('#bg')
  
        form1.style='transform:translateY(-500px);opacity:0;transition:1'
        form2.style='transform:translateY(0px);opacity:1;transition:1'
  
        word1.classList.add('d-none')
        word2.classList.remove('d-none')
        
        bg.classList.remove('signup_bg1')
        bg.classList.add('signup_bg2')    
    } 
   }  
}


export default Signup;