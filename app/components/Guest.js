var React = require('react');

var Guest = React.createClass({
  render: function () {
    return (
      <div>
        Hello from Guest, {this.props.route.name}!
        <p>MORe random stuff </p>
      </div>
    )
  }
});

module.exports = Guest;
