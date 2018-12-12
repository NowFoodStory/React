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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Nav from "./Nav";
import Footer from "./Footer";
import blog_1 from "../images/blog_1.jpg"

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _blog_title:"",
      _blog_author:"",
      _blog_photo:"",
      _blog_content:"",
      _blog_sid:"",

      blogs:[],
    }

    /*讀取部落格資料 */
    fetch("http://localhost/foodstory_end/PHP-and-SQL-master/php/blog/blogAPI.php", { 
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
        _blog_title:json[0].blog_title,
        _blog_author:json[0].blog_author,
        _blog_photo:json[0].blog_photo,
        _blog_content:json[0].blog_content,
        _blog_sid:json[0].blog_sid,

        blogs:json.slice(1,json.length),
      }) 
      var len = 50; // 超過50個字以"..."取代
    $(".ellipsis").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
      console.log(this.state._blog_content)   
    }).catch(function(err) {
      console.log('失敗囉',err)
    })   
  }
  componentDidMount(){ 
          
  }
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <React.Fragment>
        <div className="pt_72">
          <Nav />
          
          <div className="container-fluid row justify-content-center reset px_10 py-5 mt-5">  
            {/* 第一篇大的 */}
            <div className="col-10 vh_70 relative mx-auto px-0">           
                <img className="img-fluid vh_70 object_fit w_100" src={"http://localhost:3000/uploads/" + this.state._blog_photo}></img>
                <div className="white_bg reset p-2 absolute bottom_0 mb-3 col-6 notoSans left_50 translate_left">
                <div className="white_bg2 p-4">
                    <Link to={`/blog_detail/${this.state._blog_sid}`} className="font_3 font_600 letter_space1 hover_orange pointer color_black">
                        {this.state._blog_title}
                    </Link>
                    <p className="font_1 letter_space mt-3">
                        文/{this.state._blog_author}
                    </p>
                    <p data-content={this.state._blog_content} className="font_1 reset letter_space text-justify ellipsis content">
                        {this.state._blog_content}
                    </p>
                </div>             
                </div>                                      
            </div>
          
          </div>
                               

          <div className="container-fluid row justify-content-center reset px_10">
          {/* 好幾篇小的 */}
          {this.state.blogs.map(blogs=>
            <div key={blogs.blog_sid} className="col-3 vh_50 upper box_shadow2 px-0 notoSans mt-5 mx-4">
                <img className="img-fluid vh_25 w_100 object_fit mb-3" src={"http://localhost:3000/uploads/" + blogs.blog_photo}></img>
                <Link className="color_black" to={`/blog_detail/${blogs.blog_sid}`}><p className="font_1 mx-3 hover_orange color_black">{blogs.blog_title}</p></Link>
                <p className=" mx-3 mt-3">文/{blogs.blog_author}</p>
            </div>
            )}
                                                     
          </div>
        </div>
        <div className="mt-5"></div>
        <Footer />
      </React.Fragment>
    );
  }
}
AOS.init()
export default Blog;