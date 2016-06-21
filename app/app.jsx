var React = require('react');
var ReactDOM = require('react-dom');
//same as writing var Route = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
//Adding css
require('style!css!sass!app/css/style.scss')

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
