import React, { Component } from 'react';

class Mod extends Component {

  constructor(props) {

    super(props)


  }
  componentWillUnmount() {

  }

  componentDidMount(){


  }
  componentDidUpdate(){


  }


  render() {
    return (
        <div>
          <div className="new-bottom">
            <a href="javascript:" className="left_button js_kf_phone" data-target="/m/shanghai_phone">
              <div className="tel-box">
                <img src="/src/images/activity/m/shanghai/tel_icon.png"></img>
                <span>拨打电话</span>
              </div>
            </a>
            <i className="vertical-line"></i>
            <a className="right_button js_kf" data-target="/m/shanghai_chat" href="javascript:">
              <div className="tel-box">
                <img src="/src/images/activity/m/shanghai/online_icon.png"></img>
                <span>在线咨询</span>
              </div>
            </a>
          </div>
        </div>
    )
  }
}

export default Mod;
