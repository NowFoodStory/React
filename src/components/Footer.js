import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";

class Footer extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <React.Fragment>
          <div className="container-fluid reset px_10">
            <div class="row justify-content-between">
              <div class="col">
                  <ul className="pl-0">
                    <li className="d-inline mr-3 font_0 notoSans color_70">
                      隱私權政策
                    </li>
                    <li className="d-inline mr-3 font_0 notoSans color_70">
                      服務條款
                    </li>
                    <li className="d-inline mr-3 font_0 notoSans color_70">
                      加入會員
                    </li>
                    <li className="d-inline mr-3 font_0 notoSans color_70">
                      合作提案
                    </li>
                    <li className="d-inline mr-3 font_0 notoSans color_70">
                      客服中心Q&A
                    </li>
                    <li className="d-inline mr-3 font_0 notoSans color_70">
                      
                    </li>
                    <li className="d-inline mr-3 font_0 notoSans color_70">
                      
                    </li>
                    <li className="d-inline mr-3 font_0 notoSans color_70">
                      
                    </li>
                  </ul>
              </div>
              <div class="col text-right">
                  <p className="font_0 notoSans color_70">
                   © 2018 FoodStory
                  </p>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  
  export default Footer;