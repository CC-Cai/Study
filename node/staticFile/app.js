var http = require("http");
var fs = require('fs');
var url = require('url');
var path = require('path');

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	if (pathname.indexOf("static/") > -1) {
		var spathname = pathname.split("static/")[1];
		fs.readFile("static/"+spathname, function(err, file) {
			if (err) {
				res.writeHead(404);
				res.end('找不到相关文件。=_=||')
				return;
			}
			res.writeHead(200);
			res.end(file);
		});
	} else {
		res.writeHead(200);
		res.end('welcome  to  CaiCai !');
	}
}).listen("3300");
console.log('Server running  at http://127.0.0.1:3300');