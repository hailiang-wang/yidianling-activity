
const util = require("m.config");

module.exports = {

	// post全局处理
	post: function(app, router){

    app.all('/api/*', function (req, res, next) {
    	res.header("Access-Control-Allow-Origin", "*");
    	res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
    	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    	res.header("X-Powered-By", ' 3.2.1')
      res.header("Content-Type", "application/json;charset=utf-8");

      if (req.method.toLowerCase() == 'options') {
        res.send(200);  //让options尝试请求快速结束
      } else {
        next();
      }
    });

		router.post(/^\/*/, function(req, res, next){

      // 响应超时
      util.timeout(res);

			next();
		});
	}
}
