var loaderUtils = require('loader-utils');
var path = require('path');
var extend = require('./lib/extend.js');

var defaultEJSOptions = {
  cache: false,
  rmWhitespace: true,
  compileDebug: false
};

module.exports = function(source) {
  // Only require ejs as-needed
  var ejs = require('ejs');
  
  console.log(ejs);
  
  if (this.cachable) {
    this.cachable();
  }
  
  // Permit overrides of most EJS options
  // https://github.com/mde/ejs#options
  var ejsOptions =
    extend({}, defaultEJSOptions, loaderUtils.parseQuery(this.query));
  
  // enforce return of standalone compiled function
  ejsOptions.client = true;
  
  // force skipping of wrapping compiler in try/catch
  // when minifying code via webpack
  if (this.minimize) {
    ejsOptions.compileDebug = false;
  }
  
  // EJS to resolve EJS dependencies as the resource being processed
  ejsOptions.filename = path.relative(this.context, this.resourcePath);
  
  var templateFunc = ejs.compile(source, ejsOptions);
  
  return 'module.exports = ' + templateFunc.toString();
};
