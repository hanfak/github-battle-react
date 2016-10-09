var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        <h1>Main - always here</h1>
        <Link to="/home">home</Link>
        <br/>
        <Link to="/guest">guest</Link>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
