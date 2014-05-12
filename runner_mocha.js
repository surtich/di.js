var traceur = require('traceur');

traceur.options.annotations = true;

traceur.require.makeDefault(function(filename) {
  var compile = !/\/node_modules\//.test(filename);
  
  if (compile === true) {
    console.log(filename);
  }
  
  return compile;
});

var arguments = process.argv.slice(2);
//process.argv = [ 'mocha' ];
require("mocha/bin/_mocha")
//require(arguments[0]);