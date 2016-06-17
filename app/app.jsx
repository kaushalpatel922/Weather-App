var React = require('react');
var ReactDOM = require('react-dom');
//same as writing var Route = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Nav = require('Nav');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
