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

class Blog_admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        preview:null,

        blog_title:"",
        blog_author:"",
        blog_photo:"",
        blog_content:"",

    }
  }
  componentDidMount(){ 

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
    preview = <img className="img-fluid picture" src={src} alt='' />  /*預覽照片*/
    // console.log(src)
    this.setState({
       preview: preview,
       blog_photo:file.name
      })
  }
  
  render() {
    const { preview } = this.state;
    return (
      <React.Fragment>
        <div className="pt_72">
          <Nav />
          <div className="row reset px_10 mt-5 justify-content-center">
            
                <div class="card col-10 px-0 notoSans letter_space">
                    <div class="card-header">
                        <div class="form-group">
                            <input type="email" class="form-control form-control1 notoSans" id="blog_title" value={this.state.blog_title} onChange={this.handleChange} aria-describedby="emailHelp" placeholder="專欄標題"></input>                       
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control1 notoSans" id="blog_author" value={this.state.blog_author} onChange={this.handleChange} aria-describedby="emailHelp" placeholder="專欄作者"></input>                       
                        </div>
                        <div class="custom-file form-group">
                            <input type="file" class="custom-file-input form-control-file" id="photo" name="file" onChange={this.choosePhoto}></input>
                            <label class="custom-file-label notoSans" for="photo">封面照片</label>
                        </div> 
                        <div className='media mt-3'>
                              {preview}
                        </div>  
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <textarea id="content" class="form-control form-control2" id="blog_content" value={this.state.blog_content} onChange={this.handleChange} rows="5" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="card-footer text-muted text-right">
                        <button type="button" class="btn btn_cancel2 notoSans">取消</button>
                        <button onClick={this.upload} class="btn btn_solid4 notoSans ml-2">上傳</button>
                    </div>
                </div>
            
            
          </div>
          <div className="container-fluid row justify-content-center reset px_10 py-4 mt-2">  
              
            <div className="col-10 vh_70 relative mx-auto px-0">           
                <img className="img-fluid vh_70 object_fit w_100" src={waste}></img>
                <div className="white_bg reset p-2 absolute bottom_0 mb-3 col-6 notoSans left_50 translate_left">
                <div className="white_bg2 p-4">
                    <Link to="/blog_detail" className="font_3 font_600 letter_space1 hover_orange pointer color_black">
                    解決食物浪費 環團相約「IG世代」自煮自食
                    </Link>
                    <p className="font_1 letter_space mt-3">
                    文/賴溫狠
                    </p>
                    <p className="font_1 reset letter_space text-justify">
                    台灣食物浪費主要發生在消費端，而其中不懂烹煮、愛拍照的年輕世代，最容易發生食物浪費的狀況...
                    </p>
                </div>             
                </div>                                      
            </div>
          
          </div>
                               

          <div className="container-fluid row justify-content-center reset px_10">
            <div className="col-3 vh_50 upper box_shadow2 px-0 notoSans mt-5 mx-3">
                <img className="img-fluid vh_25 w_100 object_fit pointer" src={blog_1}></img>
                <p className="font_1 mx-3 mt-3 hover_orange pointer">香港勞團回收剩食 盼需要的人都能「食德好」</p>
                <p className=" mx-3 mt-3">文/陳倢伃</p>
            </div>

            <div className="col-3 vh_50 upper box_shadow2 px-0 notoSans mt-5 mx-3">
                <img className="img-fluid vh_25 w_100 object_fit" src={blog_1}></img>
                <p className="font_1 mx-3 mt-3 hover_orange">香港勞團回收剩食 盼需要的人都能「食德好」</p>
                <p className=" mx-3 mt-3">文/陳倢伃</p>
            </div>

            <div className="col-3 vh_50 upper box_shadow2 px-0 notoSans mt-5 mx-3">
                <img className="img-fluid vh_25 w_100 object_fit" src={blog_1}></img>
                <p className="font_1 mx-3 mt-3 hover_orange">香港勞團回收剩食 盼需要的人都能「食德好」</p>
                <p className=" mx-3 mt-3">文/陳倢伃</p>
            </div>
            
                               
            
            
          </div>
        </div>
        <div className="mt-5"></div>
        <Footer />
      </React.Fragment>
    );
  }
}
AOS.init()
export default Blog_admin;