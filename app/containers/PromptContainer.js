var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass ({
  getInitialState: function () {
    return {
      username: ''
    }
  },

  onUpdateUser: function(event) {
    console.log(event);
    this.setState([
      username: event.target.value
    ])
  },

  onSubmitUser: functions(event) {
    event.preventDefault();
    var username = this.state.username;
    this.setState([
      username: ''
    ]);
    
  },

  render: function () {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h2>Choose {this.props.route.header} </h2>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUser}>
            <div className="form-group">
              <input
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
