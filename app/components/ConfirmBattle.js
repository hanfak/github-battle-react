var React = require('react');

function ConfirmBattle (props) {
    return (
      <div>
        Confirm Battle!
        <h5>
          {props.playerOne} Vs {props.playerTwo}
        </h5>
      </div>
    )
  }

module.exports = ConfirmBattle;
