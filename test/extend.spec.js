/* jshint node:true,mocha:true,expr:true */
'use strict';

var extend = require('../lib/extend.js');
var should = require('should');

describe('extend', function() {
  describe('identity-call', function() {
    it('should keep a target unchanged', function() {
      var obj = {foo: 'bar'};
      
      var result = extend(obj);
      
      should.equal(result, obj, 'object equality');
      should.strictEqual(result, obj, 'strict reference equality');
      
  //    result.should.strictEqual(obj);
    });
  });
  
  describe('extend normally', function() {
    it('should extend one argument', function() {
      var target = {a:'alpha', c:'gamma'};
      
      var result = extend(target, {a:'alphabet', b:'beta'});
      
      should.deepEqual(result, {
        a:'alphabet',
        b:'beta',
        c:'gamma'
      });
    });
    
    it('should extend two arguments', function() {
      var target = {a:'alpha', c:'gamma'};
      
      var result = extend(
        target,
        {a:'donotuse'},
        {a:'alphabet', b:'beta'}
      );
      
      should.deepEqual(result, {
        a:'alphabet',
        b:'beta',
        c:'gamma'
      });
    });
  });
});
