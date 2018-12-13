import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import Nav from "./Nav";
import $ from "jquery";

class Login extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        user_email: "",
        user_password: "",

        seller_email: "",
        seller_password: "",
        
        // type:'login',
        // name:'only@gmail'
    };
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
      let bg = document.querySelector('#bg')
      form1.style='transform:translateY(-500px);opacity:0;transition:1'     
      form2.style='transform:translateY(0px);opacity:1;transition:1'
      bg.classList.remove('login_bg1')
      bg.classList.add('signup_bg1')
    }
    changeform1 = evt => {
      let form1 = document.querySelector('#form1')
      let form2 = document.querySelector('#form2')
      let bg = document.querySelector('#bg')
      form1.style='transform:translateY(0px);opacity:1;transition:1'
      form2.style='transform:translateY(-500px);opacity:0;transition:1' 
      bg.classList.remove('signup_bg1')
      bg.classList.add('login_bg1')
    }
    
    logIn = () => { /*一般會員登入 */
      let data =this.state
      console.log(data)
      // console.log(this.state.user_password)
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/user_login_api.php', {
            method: 'POST',
            mode:'cors',
            credentials: 'include',
            body: JSON.stringify(data),
            headers: {
              // 'Content-Type': 'application/json'
            },
        }).then(function (response) {   
          return response.json();
        }).then(function(json){
          console.log(json)
          console.log('成功囉');
          if (json.resultCode==200){
            $('#success').modal('show')
          }
          if (json.resultCode==404){
            $('#fail').modal('show')
          }
          if (json.resultCode==444){
            $('#stop').modal('show')
          }
        }).catch(function(err) {
          console.log('失敗囉',err)
        })                
    }

    logIn2 = () => { /*店家登入*/
      let data =this.state
      console.log(data)
      // console.log(this.state.user_password)
      fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_login_api.php', {
            method: 'POST',
            mode:'cors',
            credentials: 'include',
            body: JSON.stringify(data),
            headers: {
              //'Content-Type': 'application/json'
            },
        }).then(function (response) {      
          return response.json();
        }).then(function(json){
          console.log(json)
          console.log('成功囉');
          if (json.resultCode==200){
            $('#success').modal('show')
          }
          if (json.resultCode==404){
            $('#fail').modal('show')
          }
          if (json.resultCode==444){
            $('#stop').modal('show')
          }
        }).catch(function(err) {
          console.log('失敗囉',err)
        })                
    }

    changePage = (evt) => {
      window.location.href = "http://localhost:3001/home"
    }
    
    render() {
      return (
        <React.Fragment>
            <div id="bg" className="container-fluid  vh_100 w_100 login_bg1  transition">
                <div className="row px_10">

                    <div className="col mt-4">
                        <Link className="navbar-brand notoSans color_white letter_space2 font_3 logo_border px-2 py-0" to="/home">
                            限食動態
                        </Link>
                    </div>

                    <div className="col text-right mt-4">
                        <Link className="color_black font_3 font_500" to="/login">
                            LOG IN
                        </Link>
                        <Link className="color_70 font_3 font_500 ml-3" to="/signup">
                            SIGN UP
                        </Link>
                    </div>

                    
                </div>

                <div className="row justify-content-center mt-5">

                {/* 一般會員 */}
                <div id="form1" className="col-3 px-5 signup_white position-fixed box_shadow transition">                                              
                      <form>
                        <div className="form-group row align-items-center">
                          <div className="col">
                            <p className="notoSans mt-4 font_3 font_500 color_70 text-center">
                              <span className="color_green">會員登入</span> <span className="color_green">|</span> <span className="pointer opacity_50" onClick={this.changeform2}>店家登入</span>
                            </p>
                          </div>                          
                        </div>

                        <div className="mt-3 row align-items-center">
                          <p className="col-2 reset notoSans">
                            信箱
                          </p>
                          <input value={this.state.user_email} onChange={this.handleChange} type="email" id="user_email" name="user_email" className="col-10 form-control notoSans" placeholder=""></input>
                        </div>

                        <div className="mt-4 row align-items-center">
                          <p className="col-2 reset notoSans">
                            密碼
                          </p>
                          <input value={this.state.user_password} onChange={this.handleChange} type="password" id="user_password" name="user_password" className="col-10 form-control notoSans" placeholder=""></input>
                        </div>

                        <div className="form-group mt-3 row align-items-center">
                            <div className="form-check col">
                                <input className="form-check-input" type="checkbox" value="" id="check"></input>
                                <label className="form-check-label notoSans" for="check">
                                    記住密碼 
                                </label>
                                
                            </div>
                        </div>
                        

                        <div className="form-group row align-items-center mt-5 mb-5">
                          <button onClick={this.logIn} type="button" className="col btn notoSans letter_space2 text-center btn_solid1 pointer">
                            LOG IN
                          </button>
                        </div>                                         
                        
                      </form>
                </div>

                {/* 店家會員登入 */}
                <div id="form2" className="opacity col-3 px-5 signup_white position-fixed box_shadow transition">                                              
                      <form>
                        <div className="form-group row align-items-center">
                          <div className="col">
                            <p className="notoSans mt-4 font_3 font_500 color_70 text-center">
                              <span className="pointer opacity_50" onClick={this.changeform1}>會員登入</span> <span className="color_green"> | </span> <span className="color_green">店家登入</span>
                            </p>
                          </div>                          
                        </div>

                        <div className="mt-3 row align-items-center">
                          <p className="col-2 reset notoSans">
                            信箱
                          </p>
                          <input value={this.state.seller_email} onChange={this.handleChange} type="email" id="seller_email" name="seller_email" className="col-10 form-control notoSans" placeholder=""></input>
                        </div>

                        <div className="mt-4 row align-items-center">
                          <p className="col-2 reset notoSans">
                            密碼
                          </p>
                          <input value={this.state.seller_password} onChange={this.handleChange} type="password" id="seller_password" name="seller_password" className="col-10 form-control notoSans" placeholder=""></input>
                        </div>

                        <div className="form-group mt-3 row align-items-center">
                            <div className="form-check col">
                                <input className="form-check-input" type="checkbox" value="" id="check"></input>
                                <label className="form-check-label notoSans" for="check">
                                    記住密碼 
                                </label>                  
                            </div>
                        </div>
                        

                        <div className="form-group row align-items-center mt-5 mb-5">
                          <button onClick={this.logIn2} type="button" className="col btn notoSans letter_space2 text-center btn_solid1 pointer">
                            LOG IN
                          </button>
                        </div>                                         
                        
                      </form>
                </div>
                </div>

                {/* 登入成功彈出視窗 */}
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
                                登入成功
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
                                按下確認後進到首頁
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

                      {/* 登入失敗彈出視窗 */}
                      <div
                        class="modal fade"
                        id="fail"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content container-fluid">
                            <div class="modal-header">
                              <h5 class="modal-title notoSans font_3" id="exampleModalLongTitle">
                                登入失敗
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
                            <div class="modal-body row my-3 ">
                              
                              <div class="col notoSans font_2">
                                帳號或密碼錯誤
                              </div>
                            </div>

                            <div class="modal-footer row">
                              
                              <div class="col">
                                <p data-toggle="modal" data-dismiss="modal" data-target="#confirm" class="notoSans w_100 btn_solid1 font_2 text-center pointer" to>
                                  確認
                                </p>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 停權彈出視窗 */}
                      <div
                        class="modal fade"
                        id="stop"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content container-fluid">
                            <div class="modal-header">
                              <h5 class="modal-title notoSans font_3" id="exampleModalLongTitle">
                                登入失敗
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
                            <div class="modal-body row my-3 ">
                              
                              <div class="col notoSans font_2">
                                該用戶已被停權
                              </div>
                            </div>

                            <div class="modal-footer row">
                              
                              <div class="col">
                                <p data-toggle="modal" data-dismiss="modal" data-target="#confirm" class="notoSans w_100 btn_solid1 font_2 text-center pointer" to>
                                  確認
                                </p>
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

export default Login;