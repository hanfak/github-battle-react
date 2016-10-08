var React = require('react');
var ReactDOM = require('react-dom');

// var Hello = React.createClass({
//   render: function () {
//     return (
//       <div>Hello ReactJS Program!</div>
//     )
//   }
// });
//
// ReactDOM.render(<Hello />, document.getElementById('app'));



var HelloUser = React.createClass({
  render: function(){
    return (
      <div> Hello, {this.props.name}</div>
    )
  }
});
ReactDOM.render(<HelloUser name="Tyler"/>, document.getElementById('app'));
