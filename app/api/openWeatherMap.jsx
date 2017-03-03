var axios = require('axios');
const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';
//c4e735ea8bd7e7b6dc8368c752517b2d
//44ed6539b13b168a5ab432fb26c258e5
module.exports ={
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;


   return  axios.get( requestURL).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(err){
      //throw new Error(err.response.data.message);
      throw new Error('Unable to fetch weather for that location');
    });
  }
}
