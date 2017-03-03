var React = require('react');

var Total = React.createClass({
  render: function(){
    return (
      <div >
        <h3 className ="message"> Total Cash: ${this.props.total} </h3>
      </div>
    );
  }
});

module.exports = Total;
