var React = require('react');
var WeatherMessage = ({temp, location})=>{



    return(
      <div>
        <h3 className ="text-center message"> It's {temp} Cel In {location}.</h3>
      </div>
    )
  };

module.exports = WeatherMessage;
