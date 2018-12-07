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
                <img className="img-fluid vh_65 object_fit w_100" src={waste}></img>
                    <p className="font_3 font_600 letter_space1 notoSans mt-3 mb-1">
                    解決食物浪費 環團相約「IG世代」自煮自食
                    </p>
                    <p className="font_1 letter_space notoSans">
                    文/賴溫狠
                    </p>
                    <p className="font_1 reset letter_space text-justify notoSans mt-3">
                    台灣食物浪費主要發生在消費端，而其中不懂烹煮、愛拍照的年輕世代，最容易發生食物浪費的狀況。<br/><br/>                   
                    在1日舉辦的「惜食論壇」中，主婦聯盟呼籲各界關注食物浪費問題，更分享飲食教育、惜食餐廳等案例。
                    「有點難，但並非做不到」面對APEC提出2020亞太地區糧食損失與浪費要減少10％、聯合國提出2030年全球糧食在生產端、消費端都要減半的目標，台大農經系徐世勳研究團隊成員李怡芳表示，各國大多是這樣的回應，而世界各地，也都有團體在開始著手減少食物浪費的問題。<br/><br/> 
                    <span className="font_2 color_orange">6成發生在消費端 通路、冰箱成台灣食物浪費現場</span><br/><br/>
                    據聯合國農糧組織的定義，生產端的糧食損失，有農業生產、處理與儲藏、加工與包裝三階段，消費端的糧食浪費有分配與行銷、消費者端二階段，食物從品質不達標準不採收開始的層層淘汰，到進入了消費者冰箱卻未食用而遭丟棄。<br/><br/>
                    李怡芳指出，台灣目前的食物浪費屬於已開發國家的型態，浪費主要發生在消費端。以2013年總共浪費的367.7萬噸為例，分配與行銷的通路損失了46.19萬噸，佔了12％、發生在消費者手上的浪費有190.21萬噸，佔了52％，合計超過了6成，其中又以漁產、水果、蔬菜為前三名。<br/><br/>
                    主婦聯盟資深專員沈寶莉指出，浪費食物同時也帶來全球14億公頃農地所生產的成果遭浪費、損失足夠全球人口使用一年的250立方公里的水、並產生44億噸的碳排放。目前台灣混進一般垃圾的廚餘量接近4成，在焚化的過程中，造成了戴奧辛等污染問題，況且，台灣的糧食自給率只有3成，更需要減少浪費。<br/><br/>
                    沈寶莉認為，五個減少食物浪費的方法，就是吃在地、動手煮、惜每餐、自己種、共煮共食。沈寶莉更直指，不懂煮的年輕世代，最容易發生食物浪費。<br/><br/>
                    沈寶莉表示，根據歐美其他國家的經驗，親自烹煮食物，能讓人更懂得善用剩食與掌握正確份量，也利用冰箱內的食物發揮創意，對食物也會更有感情，而非將「吃」視為為了做其他的事情而「吃」，例如用IG（Instagram）上傳美照後，卻沒有吃完餐點。因此主婦聯盟先前也和台大學生合作嘗試「自煮運動」，帶領大學生拜訪農夫、接受專業廚師的教學，更出借辦公室給學生共煮共食。「雖然又熱又擠，但這些學生覺得這個廚房是天堂呀！」沈寶莉認為，對大學生而言，共煮共食其實是相當有趣的經驗。<br/><br/>
                    <span className="font_2 color_orange">惜食餐廳少廢棄  共享冰箱解決剩食</span><br/><br/>
                    除了鼓勵自行烹煮，主婦聯盟也展開「惜食餐廳」串連，目前雙北市已有15間加入，沈寶莉解釋，惜食餐廳特別的是，主動說、可以選、可打包、吃在地、吃格外、惜食材、零浪費、愛地球、愛分享。<br/><br/>
                    位在新店的「原粹蔬食作」餐廳負責人柯詩語表示，過去在連鎖餐飲集團工作，面臨的是「一定要報廢6％」的規定；麵包賣完，視為準備量不夠，而賣不完的，卻也只能報廢不能他用。他對此現狀感到不捨，後來自己開餐廳，便設法善用食材，例如推出花椰菜梗作可樂餅、磨豆漿後豆渣做鬆餅等，而且使用「格外品」的農產品，這些蔬果本來因為賣相不佳，原本農場就遭放棄不採收，如今卻有機會不浪費。他甚至持續上傳教學影片，鼓勵網友一起妥善使用食材。<br/><br/>
                    柯詩語表示，即便餐廳設法不浪費食材，但也面臨顧客可能沒吃完的問題，仍會產生廚餘。因此不但需要跟客人溝通，鼓勵打包，或是在點餐時就討論份量、使用食材上是否需要調整，他也打算未來要辦理講座，讓顧客能更瞭解剩食問題。<br/><br/>
                    北市南機場忠勤里里長方荷生從照顧里內的弱勢家庭出發，成立「南機場幸福食物銀行」，提供低收入、急難救住戶自行挑選生活所需。方荷生在募集各種物資過程中，也在解決食物浪費上出力，目前設有續食餐廳「書屋花甲」與「食享冰箱」。<br/><br/>
                    方荷生表示，包括不易保鮮、即期食品、NG醜蔬果、生鮮熟食的等食材，他們每天下午募集後，一部份作為當天晚上的續食餐廳的食材，用來供應獨老餐點、兒少課輔點心等，另一部份則是會有社區志工整理檢查、重新包裝、標明效期後，送往食享冰箱，並開放所有人都可以去拿取，求的是剩食分享再利用。<br/><br/>
                    在積極減量下免不了仍會產生的廚餘，除了委託清潔隊處理外，也有業者設法自力處理。例如元沛農坊與「香園紀念教養院」展開合作，農坊創辦人許又仁解釋，此合作案是由院生出力，將院內廚餘進行蚯蚓堆肥，這些堆肥在院區內的農場作為種植辣椒、紫蘇等香料，另外也合作開發猴頭菇等加工產品。<br/><br/>
                    日楞咖啡創辦人李明峰也分享曾經在店門小花園嘗試約半年的堆肥經驗。李明峰表示，由於自己喜歡親近土地，因此在店裡做了養蜂、種植、堆肥等嘗試，試著堆肥是因為希望店內可以自行處理廚餘，不要倒進垃圾車廢棄。不過隨著店內空間不足、人手不足，無力消化產出的堆肥等問題，目前已經宣告暫停。他認為，餐廳堆肥其實是整個系統的其中一環，就像農產的格外品一樣，也許不是單獨處理這些問題就好，真正需要的是，整個系統的改變。<br/><br/>
                    <span className="font_2 color_orange">廚餘審核是新招 香港環團手動分類追查廚餘數據</span><br/><br/>
                    來自香港的「綠領行動」理事長何漢威表示，目前香港沒有焚化爐，只有掩埋場，但也還沒有展開廚餘回收，目前香港每天有3600噸的廚餘直接進入掩埋場，因此近年香港也開始著手面對廚餘問題。例如提出食物分享計畫、社區廚餘回收、宣導消費者盡量吃完餐點，以減少食物浪費等。何漢威表示，其實就是向台灣的經驗學習。<br/><br/>
                    綠領行動目前正在推動「廚餘審核」，何漢威表示，這是進入餐廳以人手分類，紀錄並統計廚餘的總類與重量。從英國、澳洲的民間團體開始，是為了要透過數據揪出多餘食材與食物供應者慣性產生的廚餘樣態，此舉可能協助餐廳減少浪費、降低營運成本。<br/><br/>
                    例如他們發現了餐廳的白飯、麵包邊最容易浪費，餐廳因此提出白飯減量的選項、大廚發揮巧思推出「麵包邊湯」等對策。
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