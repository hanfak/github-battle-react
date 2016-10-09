var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <p>Hello {this.props.route.name}!</p>
        <p>MORe random stuff </p>
      </div>
    )
  }
});

module.exports = About;
