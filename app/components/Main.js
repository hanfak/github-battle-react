var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
  render: function () {
    var menuStyle = {
      "padding-bottom": "50px",
      "font-size": "20px"
    };

    return (
      <div className='main-container col-sm-12 text-center'>
        <h1>Github Battle</h1>
        <div style={menuStyle}>
          <p><Link to="/" className="col-md-4">
            home
          </Link></p>
          <p><Link to="/guest" className="col-md-4">
            guest
          </Link></p>
          <p><Link to="/playerOne" className="col-md-4">
            player one input
          </Link></p>
        </div>

        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
