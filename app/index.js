var React = require('react');
var ReactDOM = require('react-dom');

var ProfileFacebook = React.createClass({
  render: function() {
    return (
      <div>
        <p>Facebook profile</p>
        <a href={'https://www.fb.com/' + this.props.username}>
        {this.props.username}
        </a>
      </div>
    )
  }
})
var ProfileLink = React.createClass({
  render: function() {
    return (
      <a href={'https://github.com/' + this.props.username}>
        {this.props.username} Github profile
      </a>
    )
  }
})

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfileLink username={this.props.username} />
        <br/>
        <ProfileFacebook username={this.props.username1} />
      </div>
    )
  }
})

ReactDOM.render(<Avatar username="hanfak" username1="hanif.fakira" />, document.getElementById('app'));
