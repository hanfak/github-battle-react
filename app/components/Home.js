var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className='main-container col-sm-12 text-center'>
        <p className='lead'>
          This is a battle of who has the best Github stats
        </p>
        <p>Work hard and you could be Github champion</p>
        <Link to="/playerOne" className="col-md-12 text-center">
          <button type="button" className="btn btn-lg btn-success">
            Choose your player
          </button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
