var React = require('react');
var Link = require('react-router').Link;
var transparentBg = require('../styles').transparentBg;
var componentText = require('../styles').componentText;

var Main = React.createClass({
  render: function () {
    var menuStyle = {
      "padding": "30px 0",
      "fontSize": "20px"
    };

    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1>Github Battle</h1>
        <div style={menuStyle}>
          <Link to="/" className="col-md-4">
            <button type="button" className="btn btn-lg btn-primary">
              Home
            </button>
          </Link>
          <Link to="/about" className="col-md-4">
            <button type="button" className="btn btn-lg btn-info">
              About
            </button>
          </Link>
          <Link to="/playerOne" className="col-md-4">
            <button type="button" className="btn btn-lg btn-success">
              player one input
            </button>
          </Link>
        </div>
        <div style={componentText}>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
