var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: [],
      playerOne: this.props.location.query.playerOne,
      playerTwo: this.props.location.query.playerTwo
    }
  },

  componentDidMount: function() {
    this.query = this.props.location.query;

    //fetch from github then update state
    githubHelpers.getPlayersInfo(this.query.playerOne)
     .then(function (data) {
       this.setState({
         isLoading: false,
         playersInfo: data
       })
     }.bind(this))
  },

  render: function () {
    return (
     <ConfirmBattle
       isLoading={this.state.isLoading}
       playersInfo={this.state.playersInfo}
       playerOne={this.state.playerOne}
       playerTwo={this.state.playerTwo} />
    )
  }

});

module.exports = ConfirmBattleContainer;
