var express = require('express');

const PORT = process.env.PORT || 3000;
var app = express();
app.use(function(req,res,next){

  if(req.header['X-forwarded-porto'] === 'https'){
    res.redirect('http://'+ req.hostname + req.url);

  }else{
    next();
  }

});
app.use(express.static('public'));

app.listen(PORT,function(){
  console.log("server is on "+ PORT);
});
