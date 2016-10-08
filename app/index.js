var React = require('react');
var ReactDOM = require('react-dom');

var ProfileFacebook = function(props) {
  return (
    <div>
      <p>Facebook profile</p>
      <a href={'https://www.fb.com/' + props.username}>
      {props.username}
      </a>
    </div>
  )
}


var ProfileLink = function(props) {
    return (
      <a href={'https://github.com/' + props.username}>
        {props.username} Github profile
      </a>
    )
  }


var Avatar = function(props) {
    return (
      <div>
        <ProfileLink username={props.username} />
        <br/>
        <ProfileFacebook username={props.username1} />
      </div>
    )
  }

ReactDOM.render(<Avatar username="hanfak" username1="hanif.fakira" />, document.getElementById('app'));
