var express = require('express');
const cors = require('cors');

var app = express();

app.use(express.static('public'));

app.listen(3000,function(){
  console.log("server is on 3000");
});
