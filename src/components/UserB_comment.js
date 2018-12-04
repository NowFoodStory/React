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


class UserB_comment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    componentDidMount(){
       
    }

    
    render() {

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
                        顧客評論
                      </p>
                      
                      <hr/>
                      <div className="row justify-content-between">
                        

                        
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


export default UserB_comment;