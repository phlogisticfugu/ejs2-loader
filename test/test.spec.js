/* jshint node:true,mocha:true,expr:true */
'use strict';

var webpack = require('webpack');
var should = require('should');
var del = require('del');
var fs = require('fs');

var bundlePath = __dirname + '/fixtures/bundle.js';

describe('ejs2-loader', function() {
  before(function() {
    // TODO generating bundle.js via node is not working
    //del.sync(bundlePath);
  });
  
  it('should compile a simple template via webpage', function(done) {
    var webpackCompiler = webpack(require('./fixtures/webpack.config.js'));
    
    webpackCompiler.run(function(err, stats) {
      if(err) {
        throw err;
      }
      
      should.ok(true, 'successfully run webpack');
      
      // check that we can read from the bundle.js file
      fs.accessSync(bundlePath, fs.R_OK);
      
      var bundleContent = fs.readFileSync(bundlePath, {
        encoding: 'utf8'
      });
    
      done();
    });
  });
  
  after(function() {
    // TODO generating bundle.js via node is not working
    // del.sync(bundlePath);
  });
});
