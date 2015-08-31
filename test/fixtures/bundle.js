/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var templatePage1 = __webpack_require__(1);

	var content = templatePage1({headline: 'Jobs Done'});

	module.exports = content;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function anonymous(locals, escape, include, rethrow
	/**/) {
	escape = escape || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	        .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	};
	;
	  var __output = [], __append = __output.push.bind(__output);
	  with (locals || {}) {
	    ; __append("<h1>")
	    ; __append(escape(headline))
	    ; __append("</h1>")
	    ; __append(__webpack_require__(2))
	  }
	  return __output.join("");

	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function anonymous(locals, escape, include, rethrow
	/**/) {
	escape = escape || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	        .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	};
	;
	  var __output = [], __append = __output.push.bind(__output);
	  with (locals || {}) {
	    ; __append("<p>Lorem Ipsum</p>")
	  }
	  return __output.join("");

	}

/***/ }
/******/ ]);