var React = require('react');
var Nav = require('Nav');

var Main = function(props){

    return (
      <div>
          <Nav/>
        
        {props.children}

      </div>

 );
  }



module.exports = Main;
