var USER_DATA = {
  name: 'Hanif Fakira',
  username: 'hanfak',
  image: 'https://avatars.githubusercontent.com/u/15229697?v=3'
};

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = function (props) {
    return (
      <img src={props.imageUrl} style={{height: 100, width: 100}}></img>
    )
  }

var ProfileLink = function (props) {
    return (
      <div>
        <a href={'https://www.github.com/' +  props.username}>
          {props.username}
        </a>
      </div>
    )
  }

var ProfileName = function (props){
    return <div>{props.name}</div>
  }

var Avatar = function (props) {
    return(
      <div>
        <h1>{props.user.name} details</h1>
        <ProfilePic imageUrl={props.user.image}/>
        <ProfileName name={props.user.name}/>
        <ProfileLink username={props.user.username}/>
      </div>
    );
  }

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
