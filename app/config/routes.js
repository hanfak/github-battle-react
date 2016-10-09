var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require("../components/Home");
var About = require("../components/About");
var PromptContainer = require("../containers/PromptContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/about' name='han' component={About} />
      <Route path="playerOne" component={PromptContainer} />
    </Route>
  </Router>
);

module.exports = routes;
