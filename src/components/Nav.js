import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import user from '../images/user-icon.svg';

class Nav extends Component {
    constructor(props) {
      super(props);
      this.state = {
        left:"LOG IN",
        type:""            
      }      
      this.componentDidMount = this.componentDidMount.bind(this)             
    }
    componentDidMount(){
       fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/user_member/user_member_api.php', {
            method: 'GET',  /*一般會員 */
            mode:'cors',
            credentials: 'include',
            body: JSON.stringify(),
        }).then(function (response) {
          // console.log(response.json())         
          return response.json();
        }).then(json => {
          this.setState({ /*登入後將navbar login改成名字 */
            left: json.data.user_name,
            type:json.data.type            
          })     
        }).catch(function(err) {
          console.log('失敗囉',err)
        })     
        
        fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/seller_member/seller_member_api.php', {
            method: 'GET',  /*店家會員 */
            mode:'cors',
            credentials: 'include',
            body: JSON.stringify(),
        }).then(function (response) {
          // console.log(response.json())         
          return response.json();
        }).then(json => {
          console.log(json)
          this.setState({ /*登入後將navbar login改成名字 */
            left: json.data.seller_name,
            type:json.data.type            
          })     
        }).catch(function(err) {
          console.log('失敗囉',err)
        })        
    }
    
    clearCookie = () => {
      var cookies = document.cookie.split(";");
  
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      window.location.href= "http://localhost:3001/"
  }
   
    render() {
      return (
        <React.Fragment>
          <nav className="navbar navbar-expand-lg nav_color navbar-dark py-3 position-fixed w_100 top_0">
            <div className="container-fluid px_10">
            <Link className="navbar-brand notoSans color_white letter_space2 font_3 logo_border px-2 py-0" to="/home">
              限食動態
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active my-auto">
                  <Link className="notoSans color_white letter_space2 font_300 btn-2" to="/home">
                  關於我們
                  </Link>
                </li>
                <li className="nav-item my-auto color_white mx-2 line">
                    |
                </li>
                <li className="nav-item my-auto">
                  <Link className="notoSans color_white letter_space2 font_300 btn-2" to="/products">
                    美食列表
                  </Link>
                </li>
                <li className="nav-item my-auto color_white mx-2 line">
                    |
                </li>
                <li className="nav-item my-auto">
                {this.state.type === '1' ? /*如果是1就進到一般會員 2進到店家會員 其他進到登入頁面*/
                  <Link className="notoSans color_white letter_space2 font_300 btn-2" to="/userc_account">
                    會員中心
                  </Link>
                  : this.state.type === '2' ?
                  <Link className="notoSans color_white letter_space2 font_300 btn-2" to="/userb_account">
                    會員中心
                  </Link> 
                  :
                  <Link className="notoSans color_white letter_space2 font_300 btn-2" to="/login">
                    會員中心
                  </Link> }
                </li>
                <li className="nav-item my-auto color_white mx-2 line">
                    |
                </li>
                <li className="nav-item my-auto">
                  <Link className="notoSans color_white letter_space2 font_300 btn-2" to="/store">
                    專欄
                  </Link>
                </li>
                <li className="nav-item my-auto color_white mx-2 line">
                    |
                </li>
                <li className="nav-item my-auto mr-5">
                  <Link className=" notoSans color_white letter_space2 font_300 btn-2" to="/member">
                    聯繫我們
                  </Link>
                </li>
                <li className="nav-item my-auto mr-3">
                {this.state.left === 'LOG IN' ? /*如果登入的話 左邊login變成icon跟名字 */
                  <Link className=" notoSans color_white font_300 letter_space1 text_decoration" to="/login">                            
                    {this.state.left}
                  </Link>
                  :
                  <Link className=" notoSans color_white font_300 letter_space1 text_decoration" to>                            
                   <img src={user} className="icon_size1"></img> {this.state.left}
                  </Link> }
                </li>
                <li className="nav-item my-auto">
                {this.state.left === 'LOG IN' ?  /*如果登入的話 右邊signup變成logout */
                  <Link className=" notoSans color_white font_300 letter_space1 text_decoration" to="/signup">
                    SIGN UP
                  </Link>
                  :
                  <Link onClick={this.clearCookie} className=" notoSans color_white font_300 letter_space1 text_decoration" to>
                    LOG OUT
                  </Link> }
                </li>
              </ul>
            </div>
            </div>
            
          </nav>
        </React.Fragment>
      );
    }   
  }
  
  
  export default Nav;
  

