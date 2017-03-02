var React = require('react');
var WeatherForm = React.createClass({


onButtonClick : function(e){
  e.preventDefault();
  var location = this.refs.location.value;
    if(typeof location === 'string' &&  location.length > 0){
        this.refs.location.value = '';
        //this.props.onNewMessage(message);
        this.props.onSearch(location);

      }
},


render: function(){

  return(
  <div>
  <form onSubmit={this.onButtonClick}>
  <input type='text' ref='location' placeholder="Enter Location"/>
  <button>Get Weather</button>

  </form>
</div>
 );
}

});

module.exports = WeatherForm;
