var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var Guest = require("../components/Guest");

var routes = (
  <Router>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home} />
      <Route path='/guest' component={Guest} />
    </Route>
  </Router>
);

module.exports = routes;
