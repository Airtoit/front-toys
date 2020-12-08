const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
	console.log(req.url);
	var path = req.url;

	if (path === '/') {
		res.writeHead(200);
		res.write(`
			<!DOCTYPE html>
			<html lang="zh-CN">
			<head>
  			<meta charset="UTF-8">
  			<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  			<meta http-equiv="X-UA-Compatible" content="ie=edge">
  			<title>Document</title>
				<link href="./style.css" rel="stylesheet">
			</head>
			<body>
  			<h1>世界，你好！</h1>
			</body>
			</html>
		`);
		res.end();	
	} else if (path === '/style.css') {
		res.writeHead(200);
		fs.readFile('./style.css', 'utf-8', (err, data) => {
			if (err) {
				console.log(err);
			}
			res.write(data);
			res.end();
		});
	} else {
		console.log('你访问的页面不存在')
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/html;charset=utf-8');
		res.write('你访问的页面不存在');
		res.end();
	}

}
const server = http.createServer(requestListener);
server.listen(8888);
