var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

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
  },

  render: function () {
    console.log(this.props.location.query);
    return (
      <div>

      {this.state.playerOne} vs {this.props.location.query.playerTwo}
      <ConfirmBattle
        playerOne={this.state.playerOne}
        playerTwo={this.state.playerTwo}
      />
      </div>
    )
  }
});

module.exports = ConfirmBattleContainer;
