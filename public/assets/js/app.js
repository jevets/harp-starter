global.jQuery = require('jquery');
global.$ = jQuery;
require('bootstrap');

var moment = require('moment');
var _ = require('underscore');


var App = {};

App.init = function() {
  console.log('App.init() from /assets/js/bundle.js');
  console.log( 'moment is working: ', moment().format('MMMM Do YYYY, h:mm:ss a') );
};

$(document).ready(function() {
  App.init();
});