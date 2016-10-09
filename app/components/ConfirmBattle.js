var React = require('react');

function ConfirmBattle (props) {
    return props.isLoading === true
    ? <div>Loading {props.playerOne} and {props.playerTwo} details</div>
    : <div>
        <h3>Fight!</h3>
        <h5>
          {props.playerOne} Vs {props.playerTwo}
        </h5>
      </div>
  }

module.exports = ConfirmBattle;
