
// 控制器
const CTRL = require("./control");

// 菜单列表
const API = require("./api");

module.exports.start = function(app, router, redis) {

	CTRL.post(app, router);

  API.start(app, redis);
}
