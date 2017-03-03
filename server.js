
var http2 = require('spdy');
var express = require('express');

var fs = require ('fs');
var path = require('path');
var url = require('url');

var options = {
	key: fs.readFileSync('./server_certificates/server-private-key.pem'),
	cert: fs.readFileSync('./server_certificates/server-certificate.pem')
};

const PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static('public'));

http2.createServer(options,app).listen(PORT,function(error){
	if(error){
		console.log('error');
		return process.exit(1)
	} else{
			console.log('server is runnung on port: ' + PORT);
	}
});
