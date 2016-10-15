var React = require('react');

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle (props) {
    if (props.isLoading === true){
      return <div>Loading {props.playerOne} and {props.playerTwo} details</div>
    }
    else {
      return
      <div>
        <h3>Fight!</h3>
        <h4>
          {props.playerOne} Vs {props.playerTwo}
        </h4>

        <h5>
          {puke(props)}
        </h5>
      </div>
    }
  }

module.exports = ConfirmBattle;
