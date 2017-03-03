var React = require('react');

var Total = React.createClass({
  render: function(){
    return (
      <div className="callout warning">
        <h3 className ="label secondary"> Total Cash: ${this.props.total} </h3>
      </div>
    );
  }
});

module.exports = Total;
