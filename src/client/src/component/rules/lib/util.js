
import GUID from './guid';

export default {

  /**
   * 返回URL参数对象
   * getRequestData
   * @param {String} url
   * @returns {Object}
   * **/
  getRequestData(url) {
    let theRequest = {};
    if (url.indexOf('?') != -1) {
      const str = url.substr(url.lastIndexOf('?') + 1);
      const strs = str.split('&');
      for (let i = 0; i < strs.length; i += 1) {
        theRequest[strs[i].split('=')[0]] = (strs[i].substr(strs[i].indexOf('=') + 1));
      }
    }
    return theRequest;
  },

  guid(){
    const guid = new GUID();
    return guid.newGUID();
  }
}
