var argv = require('yargs').argv;
var harp = require('harp');
var rsync = require('rsyncwrapper').rsync;
var util = require('util');


global.moment = require('moment');
global._ = require('underscore');


var build = function() {
  util.log('Compiling...');
  harp.compile('.', './www', function(err) {
    if (err) {
      util.log('Compile failed with errors:');
      util.log(err);
    } else {
      util.log('Compile completed without errors');
    }
  });
};

var serve = function() {
  var port = argv.port || '9000';
  console.log('Serving on port 9000');
  harp.server('.', {
    port: port
  });
};

var deploy = function() {

};


switch (argv._[0]) {
  case 'serve':
    serve();
    break;
  case 'build':
    build();
    break;
  case 'deploy':
    deploy();
    break;
  default:
    util.log('No command specified.');
    break;
}