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
import close from "../images/close.svg"

class Blog_admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        preview:null,

        blog_sid:"",
        blog_title:"",
        blog_author:"",
        blog_photo:"",
        blog_content:"",

        _blog_title:"",
        _blog_author:"",
        _blog_photo:"",
        _blog_content:"",
        _blog_sid:"",

        blogs:[],

    }
    this.sid = {}; /*較小文章流水號 */

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
        blog_sid:json[0].blog_sid,

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

  componentDidMount(){ /*選取要刪除的較小文章 */
    let me = this
    $(document).on('click','.blog_sid',function(evt){
        let sid = $(this).attr('data-blog_sid')
        console.log(sid)
        me.sid['blog_sid']=sid
        console.log(me.sid)
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
    preview = <img className="img-fluid picture" src={src} alt='' />  /*預覽照片*/
    // console.log(src)
    this.setState({
       preview: preview,
       blog_photo:file.name
      })
  }

  upload = (evt) => { /*上傳相片 */
    evt.preventDefault()
    let data = this.state
    // console.log(data)
    fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/blog/blogAPI.php', { 
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
        console.log('成功囉');
      }).catch(function(err) {
        console.log('失敗囉',err)
      }) 
         
      let form2 = document.querySelector('#form2')
      form2.submit()   
            
  }
  deleteBig = evt => { /*刪除第一篇文章 */
    let data = this.state
    fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/blog/blogAPI.php', { 
        method: 'DELETE',
        mode:'cors',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
          // 'Content-Type': 'application/json'
        },
        }).then(function (response) {        
          return response.json();
        }).then(function(json){
          console.log('成功囉');
        }).catch(function(err) {
          console.log('失敗囉',err)
        }) 
    window.location.href="http://localhost:3001/blog_admin"
  }
 
  deleteSmall = evt => { /*刪除較小文章 */
    let me = this
    fetch('http://localhost/foodstory_end/PHP-and-SQL-master/php/blog/blogAPI.php', { 
        method: 'DELETE',
        mode:'cors',
        credentials: 'include',
        body: JSON.stringify(me.sid),
        headers: {
          // 'Content-Type': 'application/json'
        },
        }).then(function (response) {        
          return response.json();
        }).then(function(json){
          console.log('成功囉');
        }).catch(function(err) {
          console.log('失敗囉',err)
        }) 
    window.location.href="http://localhost:3001/blog_admin"
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
                        <form id="form2" action="http://localhost:3000/upload_blog" method="post" enctype="multipart/form-data" class="custom-file form-group">
                            <input type="file" class="custom-file-input form-control-file" id="photo" name="file" onChange={this.choosePhoto}></input>
                            <label class="custom-file-label notoSans" for="photo">封面照片</label>
                        </form> 
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
              {/* 第一篇大的文章 */}
            <div className="col-10 vh_70 relative mx-auto px-0">           
                <img className="img-fluid vh_70 object_fit w_100" src={"http://localhost:3000/uploads/" + this.state._blog_photo}></img>
                <img data-toggle="modal" data-target="#deleteBig" src={close} className="icon_size2 absolute right_0 m-3 pointer"></img>
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
            {/* 好幾篇小的文章 */}
            {this.state.blogs.map(blogs=>
            <div key={blogs.blog_sid} className="col-3 vh_50 upper box_shadow2 px-0 notoSans mt-5 mx-4">
                <img data-blog_sid={blogs.blog_sid} data-toggle="modal" data-target="#deleteSmall" src={close} className="icon_size1 absolute right_0 m-3 pointer blog_sid"></img>
                <img className="img-fluid vh_25 w_100 object_fit mb-3" src={"http://localhost:3000/uploads/" + blogs.blog_photo}></img>          
                <Link to={`/blog_detail/${blogs.blog_sid}`} className="font_1 mx-3 hover_orange color_black">{blogs.blog_title}</Link>
                <p className=" mx-3 mt-3">文/{blogs.blog_author}</p>
            </div>
            )}
                                                     
          </div>

          {/* 確認刪除彈出視窗(第一篇) */}
        <div
          class="modal fade"
          id="deleteBig"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content container-fluid">
              <div class="modal-header">
                
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
                
                <div class="col-12">
                  <p className="notoSans font_2 text-center">
                    確定要刪除此文章嗎，按下確定後刪除
                  </p>
                </div>
                
              </div>

              <div class="modal-footer row">
                
                <div className="col">
                  <p data-dismiss="modal" className="notoSans w_100 font_2 text-center btn_pay pointer">
                    取消
                  </p>
                </div>
                <div class="col">
                  <p onClick={this.deleteBig} className="notoSans w_100 btn_solid1 font_2 text-center pointer">  
                      確認
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* 確認刪除彈出視窗(其他篇小的) */}
        <div
          class="modal fade"
          id="deleteSmall"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content container-fluid">
              <div class="modal-header">
                
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
                
                <div class="col-12">
                  <p className="notoSans font_2 text-center">
                    確定要刪除此文章嗎，按下確定後刪除
                  </p>
                </div>
                
              </div>

              <div class="modal-footer row">
                
                <div className="col">
                  <p data-dismiss="modal" className="notoSans w_100 font_2 text-center btn_pay pointer">
                    取消
                  </p>
                </div>
                <div class="col">
                  <p onClick={this.deleteSmall} className="notoSans w_100 btn_solid1 font_2 text-center pointer">  
                      確認
                  </p>
                </div>
                
              </div>
            </div>
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