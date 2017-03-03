var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//es6
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');
var ProductList = require('ProductList');
//load foundation-sites

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css

require('style!css!applicationStyles')
ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Main}>

        <Route path="products" component ={ProductList}/>
        <Route path="about" component ={About}/>
        <Route path="example" component ={Example}/>
        <IndexRoute component={Weather}/>

    </Route>

</Router>, document.getElementById('app'));
