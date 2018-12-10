import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import iphone from "../images/home/iphone.png";
import member from "../images/home-member-icon.svg";
import search from "../images/home-search-icon.svg";
import order from "../images/home-order-icon.svg";
import waste from "../images/food_waste.jpg";
import arrow from "../images/right-arrow-icon.svg";
import $ from "jquery";

import Nav from "./Nav";
import Footer from "./Footer";
import blog_1 from "../images/blog_1.jpg"

class Blog_detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog_title:"",
      blog_author:"",
      blog_photo:"",
      blog_content:"",
    }

    /*讀取部落格資料 */
    fetch(`http://localhost/foodstory_end/PHP-and-SQL-master/php/blog/ReadBlog.php?blog_sid=${this.props.match.params.blog_sid}`, { 
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
        blog_title:json[0].blog_title,
        blog_author:json[0].blog_author,
        blog_photo:json[0].blog_photo,
        blog_content:json[0].blog_content,
      })    
    }).catch(function(err) {
      console.log('失敗囉',err)
    })
  }
  componentDidMount(){ 
      
    
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="pt_72">
          <Nav />
          <div className="container-fluid row justify-content-center reset px_10 py-5 mt-5">
            <div className="col-8 relative">
                <img className="img-fluid vh_65 object_fit w_100" src={"http://localhost:3000/uploads/" + this.state.blog_photo}></img>
                    <p className="font_3 font_600 letter_space1 notoSans mt-3 mb-1">
                      {this.state.blog_title}
                    </p>
                    <p className="font_1 letter_space notoSans">
                      文/{this.state.blog_author}
                    </p>
                    <p className="font_1 reset letter_space text-justify notoSans mt-3">
                    {this.state.blog_content.split('\n').map(function(item) {
                  return (
                    <span>
                      {item}
                      <br/>
                    </span>
                      )
                    })}
                    </p>            
            </div>
          </div>

          <div className="container-fluid row justify-content-center reset px_10">
                                              
          </div>
        </div>
        <div className="mt-5"></div>
        <Footer />
      </React.Fragment>
    );
  }
}
AOS.init()
export default Blog_detail;