import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./main.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/Products";
import Products_detail from "./components/Products_detail";
import Products_comment from "./components/Products_comment";
import Purchase from "./components/Purchase";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserC_account from "./components/UserC_account";
import UserC_order from "./components/UserC_order";
import UserC_picked from "./components/UserC_picked";
import UserC_notice from "./components/UserC_notice";
import UserC_mail from "./components/UserC_mail";
import UserB_account from "./components/UserB_account";
import UserB_shop from "./components/UserB_shop";
import UserB_commodity from "./components/UserB_commodity";
import UserB_commodity_upload from "./components/UserB_commodity_upload";
import UserB_order from "./components/UserB_order";
import UserB_picked from "./components/UserB_picked";
import UserB_comment from "./components/UserB_comment";
import Blog from "./components/Blog";
import Blog_detail from "./components/Blog_detail";

library.add(faStroopwafel);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid reset">
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          {/* <Route path="/products_detail" component={Products_detail} /> */}
          <Route path="/products_detail/:sid" component={Products_detail} />
          <Route path="/products_comment" component={Products_comment} />
          <Route path="/purchase" component={Purchase} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/userc_account" component={UserC_account} />
          <Route path="/userc_order" component={UserC_order} />
          <Route path="/userc_picked" component={UserC_picked} />
          <Route path="/userc_notice" component={UserC_notice} />
          <Route path="/userc_mail" component={UserC_mail} />
          <Route path="/userb_account" component={UserB_account} />
          <Route path="/userb_shop" component={UserB_shop} />
          <Route path="/userb_commodity" component={UserB_commodity} />
          <Route path="/userb_commodity_upload" component={UserB_commodity_upload} />
          <Route path="/userb_order" component={UserB_order} />
          <Route path="/userb_picked" component={UserB_picked} />
          <Route path="/userb_comment" component={UserB_comment} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog_detail" component={Blog_detail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
