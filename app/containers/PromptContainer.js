var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      username: ''
    }
  },

  onUpdateUser: function (event) {
    console.log(event);
    this.setState({
      username: event.target.value
    })
  },

  onSubmitUser: function (event) {
    event.preventDefault();
    var username = this.state.username;
    console.log(username);
    console.log(this.props)
    this.setState({
      username: ''
    });
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username,
        }
      })
    }
    else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render: function () {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h2>Choose {this.props.route.header} </h2>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUser}>
            <div className="form-group">
              <input
                autoFocus
                className="form-control"
                placeholder="Github Username"
                type="text"
                onChange={this.onUpdateUser}
                value={this.state.username}/>
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = PromptContainer;
