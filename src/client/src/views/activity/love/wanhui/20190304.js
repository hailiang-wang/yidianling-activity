import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from '../../servers/test';
import { Toast, InputItem } from 'antd-mobile';
import Rule from '../../../../component/rules';
import Wechat from '../../../../component/wechat';
import {storage} from '../../../../lib/compatible';
import { Modal } from 'antd-mobile';
import Swiper from 'swiper/dist/js/swiper.js';
import Newbottom from './component/Newbottom';
import Native from '../../../../component/native';

class Demo extends Component {

  constructor(props) {
    super(props);
    this.arrowTop="/src/images/activity/m/hangzhou/arrow_top.png";
    this.arrowDown="/src/images/activity/m/hangzhou/arrow_down.png";
    this.teamImg1="/src/images/activity/m/hangzhou/team1.png";
    this.teamImg2="/src/images/activity/m/hangzhou/team2.png";
    this.window_img="/src/images/activity/m/hangzhou/window.png";
    //上海袋虎-百度地图网址
    this.position="https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E5%A3%B9%E7%82%B9%E7%81%B5%E5%BF%83%E7%90%86%E5%92%A8%E8%AF%A2%E4%B8%AD%E5%BF%83&c=179&searchFlag=bigBox&version=5&exptype=dep&src_from=webapp_all_bigbox&wd2=%E4%B8%8A%E6%B5%B7%E5%B8%82%E9%97%B5%E8%A1%8C%E5%8C%BA&sug_forward=61622014301b9dd18505bfbc&src=1/vt=&vt=map"
    this.state={
      more:{
        text:"更多团购",
        icon:"/src/images/activity/m/hangzhou/arrow_down.png"
      },
      moreHonor:{
        text:"更多荣誉",
        icon:"/src/images/activity/m/hangzhou/arrow_down.png"
      },
      show_window:2,
      show_big:2,
      imgsrc:"/src/images/activity/m/hangzhou/pl3.png",
      lookPicture:"",
      modal: false
    };
    this.pagePicList1 = [
      {
        "name":"/src/images/activity/love/wanhui/20190304/1.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/2.png",
      }
    ];
    this.pagePicList2 = [
      {
        "name":"/src/images/activity/love/wanhui/20190304/4.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/5.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/6.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/7.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/8.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/9.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/10.png",
        "id":"1"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/11.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/12.png"
      }
    ];
    this.pagePicList3 = [
      {
        "name":"/src/images/activity/love/wanhui/20190129/19.png"
      },
      // {
      //   "name":"/src/images/activity/love/wanhui/20190129/20.png"
      // }
    ];
    this.middleImg = {
      "name":"/src/images/activity/love/wanhui/20190129/middle.png"
    };
    this.caseList = [
      {
        "name":"/src/images/activity/love/wanhui/20190129/case1.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/case2.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/case3.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/case4.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190129/case5.png"
      }
    ];
    this.plList = [
      {
        "name":"/src/images/activity/love/wanhui/20190304/pl1.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/pl2.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/pl3.png"
      }
    ];
    this.aboutList = [
      {
        "name":"/src/images/activity/love/wanhui/20190304/about1.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about2.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about3.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about4.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about5.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about6.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about7.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about8.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about9.png"
      },
      {
        "name":"/src/images/activity/love/wanhui/20190304/about10.png"
      }
    ];
    this.defImg = "/src/images/global/lazy.png";
    this.userSay="/src/images/activity/love/wanhui/20190129/16.png";
    this.video = "/src/videos/activity/love/wanhui/20190304/video-20190304.mp4";
    this.videoimg = "/src/images/activity/love/wanhui/20190304/videoimg.png";
    this.about_title= "/src/images/activity/love/wanhui/20190129/about_title.png";
    this.target = "/love/m/20190304";
  }
  componentWillUnmount() {

  }

  componentDidMount(){
    let _this = this;
    let eventId = "/love/wanhui/m/20190304";

    Rule.init({
      "appId": "m-activity",
      eventId,
      "eventType": "pv",
      "platform": "wap"
    });

    // 判断是否点击过客服，如果没有，那么
    if (!localStorage.getItem(eventId)) {
      setTimeout(()=>{
        _this.showModal("modal");
      },15000);
    }
    $(function(){
      $("img.lazy").lazyload();

      setTimeout(()=>{
        $("img.lazy").each(function(){
          let _this = $(this);
          let img = _this.data("original");
          _this.attr("src", img);
        });

      },300);
      // 隐藏客服
      setTimeout(()=>{
        $("#LRdiv0,#LRdiv1,#LRdiv2,#LRdiv3").attr("style","visibility:hidden;");
        setTimeout(()=>{
          $("#LRdiv0,#LRdiv1,#LRdiv2,#LRdiv3").attr("style","display:none;");
        },300)
      })
    });
    new Swiper('.caselist', {
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination-3',
      },
    });
    new Swiper('#aboutList', {
      autoplay: true,
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination-2',
      },
    });
    new Swiper('#userList', {
      loop: true,
      centeredSlides : true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination-4',
      },
    });

  }
  componentDidUpdate(){

  }
  getHtml(item,index){
    let element;
    element = item.id? (
      <a className="js_kf" key={index} href="javascript:" data-target={index == 0 ? "/love/m/20190304_banner":"/love/m/20190304_underbanner"}>
        <div className="container">
          <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
        </div>
      </a>
    ) :item.position ? (
      <a className="" key={index} href={this.position} data-target="/love/m/20190304_map">
        <div className="container">
          <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
        </div>
      </a>
    ):(
      <div className="container" key={index}>
        <img className="item lazy" data-original={item.name} src={this.defImg} key={index}/>
      </div>
    );
    return element;
  }

  getCaseHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-case">
        <img className="lazy" data-original={item.name} src={this.defImg}/>
      </li>
    );
  }
  getUserHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-user">
        <img className="lazy" data-original={item.name} src={this.defImg}/>
      </li>
    );
  }
  getAboutHTML(item, index){
    return (
      <li key={index} className="swiper-slide one-about">
        <div className="imgr"><img src={item.name}/></div>
      </li>
    );
  }
  getVideo(){
    let element =
      <video className="video" id="video" width="100%" x5-playsinline="" playsinline="" webkit-playsinline="" controls poster={this.videoimg}
             preload="auto"
        //  x-webkit-airplay="allow"
        //  x5-video-player-type="h5"　//启用H5播放器,是wechat安卓版特性
        //  x5-video-player-fullscreen="true"　//全屏设置，设置为 true 是防止横屏
        //  x5-video-orientation="portraint"　//播放器支付的方向，landscape横屏，portraint竖屏，默认值为竖屏
        //  webkit-playsinline="true"　//</div>这个属性是ios 10中设置可以让视频在小窗内播放，也就是不是全屏播放
        //  playsInline={true}　//IOS微信浏览器支持小窗内播放
             >
        <source src={this.video} type="video/mp4" />
      </video>;
    return element;
  }
  showModal(key) {
    this.setState({
      [key]: true,
    });
  }
  onClose(key){
    return () => {
      this.setState({
        [key]: false,
      });
    }
  }
  render() {
    return (
      <div className="page-love-wanhui-20190315 page-love-wanhui-20190304">
        {this.pagePicList1.map((item,index)=>
          this.getHtml(item,index)
        )}
        {/* 视频 */}
        <div className="video-box">
          {this.getVideo()}
        </div>
        {this.pagePicList2.map((item,index)=>
          this.getHtml(item,index)
        )}
        {/* 成功案例 */}
        <div className="case-box">
          <p className="case-title">成功案例</p>
          <p className="case-desc">以下内容展示已获得客户同意</p>
          <div className="case-inner-box">
            <div className="swiper-pagination-3"></div>
            <div className="caselist swiper-container">
              <ul className="swiper-wrapper">
                {this.caseList.map((item, index) => (
                  this.getCaseHTML(item, index)
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <img className="item lazy" data-original={this.userSay} src={this.defImg}/>
        </div>
        {/* 用户评论 */}
        <div className="user-say">
          <div className="user-list swiper-container" id="userList">
            <ul className="swiper-wrapper">
              {this.plList.map((item, index) => (
                this.getUserHTML(item, index)
              ))}
            </ul>
          </div>
          <div className="swiper-pagination-4"></div>
        </div>
        <div className="container">
          <img className="item lazy" data-original={this.about_title} src={this.defImg}/>
        </div>
        {/* 关于我们 */}
        <div className="about-us">
          <div className="about-list swiper-container" id="aboutList">
            <ul className="swiper-wrapper">
              {this.aboutList.map((item, index) => (
                this.getAboutHTML(item, index)
              ))}
            </ul>
          </div>
          <div className="swiper-pagination-2"></div>
        </div>
        <div className="container">
          <img className="html-img lazy" data-original={this.middleImg.name} src={this.defImg}/>
        </div>
        {/* ... */}
        {this.pagePicList3.map((item,index)=>
          this.getHtml(item,index)
        )}
        {/*底部*/}
        <div className="bottom">
            <div className="bo1">
              <span className="span1 span-l">
                <img className="b-1" src="/src/images/activity/love/wanhui/20190311/b-1.png"/>
              </span>
              <span className="span1 span-m">
                <img className="b-2" src="/src/images/activity/love/wanhui/20190311/b-2.png"/>
              </span>
              <span className="span1 span-r">
                <img className="b-3" src="/src/images/activity/love/wanhui/20190311/b-3.png"/>
              </span>
            </div>
            <div className="bo2">
              <span className="win_company"></span>
              <span className="win_copyright"></span>
              <span className="win_copycode"></span>
            </div>
          </div>
        <div className="in-bottom"></div>
        {/* 底部 */}
        <Newbottom target={this.target}/>

        {/* 微信分享 */}
        <Wechat {...this.props.data.wechat}/>
        {/* 跳转 */}
        <Native />

        <Modal
          visible={this.state.modal}
          transparent
          maskClosable={true}
          className="modal-wanhui20181130"
        >
          <div className="modal-content">
            <div className="pic">
              <a href="javascript:" data-target="/love/wanhui/m/20180304_modal" className="js_kf">
                <img src="/src/images/activity/love/wanhui/20181130-A3/modal.png" />
              </a>
            </div>
            <a href="javascript:" className="js_close" data-target="/love/wanhui/m/2010304_close_modal" onClick={this.onClose('modal')}></a>
          </div>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

Demo = connect(mapStateToProps)(Demo);
export default Demo;
