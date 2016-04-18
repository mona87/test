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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	

	var classie = __webpack_require__(2);
	var numeral = __webpack_require__(3);
	var stepsForm = __webpack_require__(4);
	var calc = __webpack_require__(5);
	var formInit = __webpack_require__(6);

	//init scripts
	classie();
	stepsForm();
	formInit();
	calc();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * classie - class helper functions
	 * from bonzo https://github.com/ded/bonzo
	 * 
	 * classie.has( elem, 'my-class' ) -> true/false
	 * classie.add( elem, 'my-new-class' )
	 * classie.remove( elem, 'my-unwanted-class' )
	 * classie.toggle( elem, 'my-class' )
	 */

	/*jshint browser: true, strict: true, undef: true */
	/*global define: false */

	module.exports = function (){



	( function( window ) {

	'use strict';

	// class helper functions from bonzo https://github.com/ded/bonzo

	function classReg( className ) {
	  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}

	// classList support for class management
	// altho to be fair, the api sucks because it won't accept multiple classes at once
	var hasClass, addClass, removeClass;

	if ( 'classList' in document.documentElement ) {
	  hasClass = function( elem, c ) {
	    return elem.classList.contains( c );
	  };
	  addClass = function( elem, c ) {
	    elem.classList.add( c );
	  };
	  removeClass = function( elem, c ) {
	    elem.classList.remove( c );
	  };
	}
	else {
	  hasClass = function( elem, c ) {
	    return classReg( c ).test( elem.className );
	  };
	  addClass = function( elem, c ) {
	    if ( !hasClass( elem, c ) ) {
	      elem.className = elem.className + ' ' + c;
	    }
	  };
	  removeClass = function( elem, c ) {
	    elem.className = elem.className.replace( classReg( c ), ' ' );
	  };
	}

	function toggleClass( elem, c ) {
	  var fn = hasClass( elem, c ) ? removeClass : addClass;
	  fn( elem, c );
	}

	var classie = {
	  // full names
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass,
	  toggleClass: toggleClass,
	  // short names
	  has: hasClass,
	  add: addClass,
	  remove: removeClass,
	  toggle: toggleClass
	};

	// transport
	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (classie), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	  // browser global
	  window.classie = classie;
	}

	})( window );

	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * numeral.js
	 * version : 1.5.3
	 * author : Adam Draper
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */

	(function () {

	    /************************************
	        Constants
	    ************************************/

	    var numeral,
	        VERSION = '1.5.3',
	        // internal storage for language config files
	        languages = {},
	        currentLanguage = 'en',
	        zeroFormat = null,
	        defaultFormat = '0,0',
	        // check for nodeJS
	        hasModule = (typeof module !== 'undefined' && module.exports);


	    /************************************
	        Constructors
	    ************************************/


	    // Numeral prototype object
	    function Numeral (number) {
	        this._value = number;
	    }

	    /**
	     * Implementation of toFixed() that treats floats more like decimals
	     *
	     * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
	     * problems for accounting- and finance-related software.
	     */
	    function toFixed (value, precision, roundingFunction, optionals) {
	        var power = Math.pow(10, precision),
	            optionalsRegExp,
	            output;
	            
	        //roundingFunction = (roundingFunction !== undefined ? roundingFunction : Math.round);
	        // Multiply up by precision, round accurately, then divide and use native toFixed():
	        output = (roundingFunction(value * power) / power).toFixed(precision);

	        if (optionals) {
	            optionalsRegExp = new RegExp('0{1,' + optionals + '}$');
	            output = output.replace(optionalsRegExp, '');
	        }

	        return output;
	    }

	    /************************************
	        Formatting
	    ************************************/

	    // determine what type of formatting we need to do
	    function formatNumeral (n, format, roundingFunction) {
	        var output;

	        // figure out what kind of format we are dealing with
	        if (format.indexOf('$') > -1) { // currency!!!!!
	            output = formatCurrency(n, format, roundingFunction);
	        } else if (format.indexOf('%') > -1) { // percentage
	            output = formatPercentage(n, format, roundingFunction);
	        } else if (format.indexOf(':') > -1) { // time
	            output = formatTime(n, format);
	        } else { // plain ol' numbers or bytes
	            output = formatNumber(n._value, format, roundingFunction);
	        }

	        // return string
	        return output;
	    }

	    // revert to number
	    function unformatNumeral (n, string) {
	        var stringOriginal = string,
	            thousandRegExp,
	            millionRegExp,
	            billionRegExp,
	            trillionRegExp,
	            suffixes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
	            bytesMultiplier = false,
	            power;

	        if (string.indexOf(':') > -1) {
	            n._value = unformatTime(string);
	        } else {
	            if (string === zeroFormat) {
	                n._value = 0;
	            } else {
	                if (languages[currentLanguage].delimiters.decimal !== '.') {
	                    string = string.replace(/\./g,'').replace(languages[currentLanguage].delimiters.decimal, '.');
	                }

	                // see if abbreviations are there so that we can multiply to the correct number
	                thousandRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.thousand + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
	                millionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.million + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
	                billionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.billion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
	                trillionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.trillion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');

	                // see if bytes are there so that we can multiply to the correct number
	                for (power = 0; power <= suffixes.length; power++) {
	                    bytesMultiplier = (string.indexOf(suffixes[power]) > -1) ? Math.pow(1024, power + 1) : false;

	                    if (bytesMultiplier) {
	                        break;
	                    }
	                }

	                // do some math to create our number
	                n._value = ((bytesMultiplier) ? bytesMultiplier : 1) * ((stringOriginal.match(thousandRegExp)) ? Math.pow(10, 3) : 1) * ((stringOriginal.match(millionRegExp)) ? Math.pow(10, 6) : 1) * ((stringOriginal.match(billionRegExp)) ? Math.pow(10, 9) : 1) * ((stringOriginal.match(trillionRegExp)) ? Math.pow(10, 12) : 1) * ((string.indexOf('%') > -1) ? 0.01 : 1) * (((string.split('-').length + Math.min(string.split('(').length-1, string.split(')').length-1)) % 2)? 1: -1) * Number(string.replace(/[^0-9\.]+/g, ''));

	                // round if we are talking about bytes
	                n._value = (bytesMultiplier) ? Math.ceil(n._value) : n._value;
	            }
	        }
	        return n._value;
	    }

	    function formatCurrency (n, format, roundingFunction) {
	        var symbolIndex = format.indexOf('$'),
	            openParenIndex = format.indexOf('('),
	            minusSignIndex = format.indexOf('-'),
	            space = '',
	            spliceIndex,
	            output;

	        // check for space before or after currency
	        if (format.indexOf(' $') > -1) {
	            space = ' ';
	            format = format.replace(' $', '');
	        } else if (format.indexOf('$ ') > -1) {
	            space = ' ';
	            format = format.replace('$ ', '');
	        } else {
	            format = format.replace('$', '');
	        }

	        // format the number
	        output = formatNumber(n._value, format, roundingFunction);

	        // position the symbol
	        if (symbolIndex <= 1) {
	            if (output.indexOf('(') > -1 || output.indexOf('-') > -1) {
	                output = output.split('');
	                spliceIndex = 1;
	                if (symbolIndex < openParenIndex || symbolIndex < minusSignIndex){
	                    // the symbol appears before the "(" or "-"
	                    spliceIndex = 0;
	                }
	                output.splice(spliceIndex, 0, languages[currentLanguage].currency.symbol + space);
	                output = output.join('');
	            } else {
	                output = languages[currentLanguage].currency.symbol + space + output;
	            }
	        } else {
	            if (output.indexOf(')') > -1) {
	                output = output.split('');
	                output.splice(-1, 0, space + languages[currentLanguage].currency.symbol);
	                output = output.join('');
	            } else {
	                output = output + space + languages[currentLanguage].currency.symbol;
	            }
	        }

	        return output;
	    }

	    function formatPercentage (n, format, roundingFunction) {
	        var space = '',
	            output,
	            value = n._value * 100;

	        // check for space before %
	        if (format.indexOf(' %') > -1) {
	            space = ' ';
	            format = format.replace(' %', '');
	        } else {
	            format = format.replace('%', '');
	        }

	        output = formatNumber(value, format, roundingFunction);
	        
	        if (output.indexOf(')') > -1 ) {
	            output = output.split('');
	            output.splice(-1, 0, space + '%');
	            output = output.join('');
	        } else {
	            output = output + space + '%';
	        }

	        return output;
	    }

	    function formatTime (n) {
	        var hours = Math.floor(n._value/60/60),
	            minutes = Math.floor((n._value - (hours * 60 * 60))/60),
	            seconds = Math.round(n._value - (hours * 60 * 60) - (minutes * 60));
	        return hours + ':' + ((minutes < 10) ? '0' + minutes : minutes) + ':' + ((seconds < 10) ? '0' + seconds : seconds);
	    }

	    function unformatTime (string) {
	        var timeArray = string.split(':'),
	            seconds = 0;
	        // turn hours and minutes into seconds and add them all up
	        if (timeArray.length === 3) {
	            // hours
	            seconds = seconds + (Number(timeArray[0]) * 60 * 60);
	            // minutes
	            seconds = seconds + (Number(timeArray[1]) * 60);
	            // seconds
	            seconds = seconds + Number(timeArray[2]);
	        } else if (timeArray.length === 2) {
	            // minutes
	            seconds = seconds + (Number(timeArray[0]) * 60);
	            // seconds
	            seconds = seconds + Number(timeArray[1]);
	        }
	        return Number(seconds);
	    }

	    function formatNumber (value, format, roundingFunction) {
	        var negP = false,
	            signed = false,
	            optDec = false,
	            abbr = '',
	            abbrK = false, // force abbreviation to thousands
	            abbrM = false, // force abbreviation to millions
	            abbrB = false, // force abbreviation to billions
	            abbrT = false, // force abbreviation to trillions
	            abbrForce = false, // force abbreviation
	            bytes = '',
	            ord = '',
	            abs = Math.abs(value),
	            suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
	            min,
	            max,
	            power,
	            w,
	            precision,
	            thousands,
	            d = '',
	            neg = false;

	        // check if number is zero and a custom zero format has been set
	        if (value === 0 && zeroFormat !== null) {
	            return zeroFormat;
	        } else {
	            // see if we should use parentheses for negative number or if we should prefix with a sign
	            // if both are present we default to parentheses
	            if (format.indexOf('(') > -1) {
	                negP = true;
	                format = format.slice(1, -1);
	            } else if (format.indexOf('+') > -1) {
	                signed = true;
	                format = format.replace(/\+/g, '');
	            }

	            // see if abbreviation is wanted
	            if (format.indexOf('a') > -1) {
	                // check if abbreviation is specified
	                abbrK = format.indexOf('aK') >= 0;
	                abbrM = format.indexOf('aM') >= 0;
	                abbrB = format.indexOf('aB') >= 0;
	                abbrT = format.indexOf('aT') >= 0;
	                abbrForce = abbrK || abbrM || abbrB || abbrT;

	                // check for space before abbreviation
	                if (format.indexOf(' a') > -1) {
	                    abbr = ' ';
	                    format = format.replace(' a', '');
	                } else {
	                    format = format.replace('a', '');
	                }

	                if (abs >= Math.pow(10, 12) && !abbrForce || abbrT) {
	                    // trillion
	                    abbr = abbr + languages[currentLanguage].abbreviations.trillion;
	                    value = value / Math.pow(10, 12);
	                } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9) && !abbrForce || abbrB) {
	                    // billion
	                    abbr = abbr + languages[currentLanguage].abbreviations.billion;
	                    value = value / Math.pow(10, 9);
	                } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6) && !abbrForce || abbrM) {
	                    // million
	                    abbr = abbr + languages[currentLanguage].abbreviations.million;
	                    value = value / Math.pow(10, 6);
	                } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3) && !abbrForce || abbrK) {
	                    // thousand
	                    abbr = abbr + languages[currentLanguage].abbreviations.thousand;
	                    value = value / Math.pow(10, 3);
	                }
	            }

	            // see if we are formatting bytes
	            if (format.indexOf('b') > -1) {
	                // check for space before
	                if (format.indexOf(' b') > -1) {
	                    bytes = ' ';
	                    format = format.replace(' b', '');
	                } else {
	                    format = format.replace('b', '');
	                }

	                for (power = 0; power <= suffixes.length; power++) {
	                    min = Math.pow(1024, power);
	                    max = Math.pow(1024, power+1);

	                    if (value >= min && value < max) {
	                        bytes = bytes + suffixes[power];
	                        if (min > 0) {
	                            value = value / min;
	                        }
	                        break;
	                    }
	                }
	            }

	            // see if ordinal is wanted
	            if (format.indexOf('o') > -1) {
	                // check for space before
	                if (format.indexOf(' o') > -1) {
	                    ord = ' ';
	                    format = format.replace(' o', '');
	                } else {
	                    format = format.replace('o', '');
	                }

	                ord = ord + languages[currentLanguage].ordinal(value);
	            }

	            if (format.indexOf('[.]') > -1) {
	                optDec = true;
	                format = format.replace('[.]', '.');
	            }

	            w = value.toString().split('.')[0];
	            precision = format.split('.')[1];
	            thousands = format.indexOf(',');

	            if (precision) {
	                if (precision.indexOf('[') > -1) {
	                    precision = precision.replace(']', '');
	                    precision = precision.split('[');
	                    d = toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
	                } else {
	                    d = toFixed(value, precision.length, roundingFunction);
	                }

	                w = d.split('.')[0];

	                if (d.split('.')[1].length) {
	                    d = languages[currentLanguage].delimiters.decimal + d.split('.')[1];
	                } else {
	                    d = '';
	                }

	                if (optDec && Number(d.slice(1)) === 0) {
	                    d = '';
	                }
	            } else {
	                w = toFixed(value, null, roundingFunction);
	            }

	            // format number
	            if (w.indexOf('-') > -1) {
	                w = w.slice(1);
	                neg = true;
	            }

	            if (thousands > -1) {
	                w = w.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + languages[currentLanguage].delimiters.thousands);
	            }

	            if (format.indexOf('.') === 0) {
	                w = '';
	            }

	            return ((negP && neg) ? '(' : '') + ((!negP && neg) ? '-' : '') + ((!neg && signed) ? '+' : '') + w + d + ((ord) ? ord : '') + ((abbr) ? abbr : '') + ((bytes) ? bytes : '') + ((negP && neg) ? ')' : '');
	        }
	    }

	    /************************************
	        Top Level Functions
	    ************************************/

	    numeral = function (input) {
	        if (numeral.isNumeral(input)) {
	            input = input.value();
	        } else if (input === 0 || typeof input === 'undefined') {
	            input = 0;
	        } else if (!Number(input)) {
	            input = numeral.fn.unformat(input);
	        }

	        return new Numeral(Number(input));
	    };

	    // version number
	    numeral.version = VERSION;

	    // compare numeral object
	    numeral.isNumeral = function (obj) {
	        return obj instanceof Numeral;
	    };

	    // This function will load languages and then set the global language.  If
	    // no arguments are passed in, it will simply return the current global
	    // language key.
	    numeral.language = function (key, values) {
	        if (!key) {
	            return currentLanguage;
	        }

	        if (key && !values) {
	            if(!languages[key]) {
	                throw new Error('Unknown language : ' + key);
	            }
	            currentLanguage = key;
	        }

	        if (values || !languages[key]) {
	            loadLanguage(key, values);
	        }

	        return numeral;
	    };
	    
	    // This function provides access to the loaded language data.  If
	    // no arguments are passed in, it will simply return the current
	    // global language object.
	    numeral.languageData = function (key) {
	        if (!key) {
	            return languages[currentLanguage];
	        }
	        
	        if (!languages[key]) {
	            throw new Error('Unknown language : ' + key);
	        }
	        
	        return languages[key];
	    };

	    numeral.language('en', {
	        delimiters: {
	            thousands: ',',
	            decimal: '.'
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function (number) {
	            var b = number % 10;
	            return (~~ (number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	        },
	        currency: {
	            symbol: '$'
	        }
	    });

	    numeral.zeroFormat = function (format) {
	        zeroFormat = typeof(format) === 'string' ? format : null;
	    };

	    numeral.defaultFormat = function (format) {
	        defaultFormat = typeof(format) === 'string' ? format : '0.0';
	    };

	    /************************************
	        Helpers
	    ************************************/

	    function loadLanguage(key, values) {
	        languages[key] = values;
	    }

	    /************************************
	        Floating-point helpers
	    ************************************/

	    // The floating-point helper functions and implementation
	    // borrows heavily from sinful.js: http://guipn.github.io/sinful.js/

	    /**
	     * Array.prototype.reduce for browsers that don't support it
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Compatibility
	     */
	    if ('function' !== typeof Array.prototype.reduce) {
	        Array.prototype.reduce = function (callback, opt_initialValue) {
	            'use strict';
	            
	            if (null === this || 'undefined' === typeof this) {
	                // At the moment all modern browsers, that support strict mode, have
	                // native implementation of Array.prototype.reduce. For instance, IE8
	                // does not support strict mode, so this check is actually useless.
	                throw new TypeError('Array.prototype.reduce called on null or undefined');
	            }
	            
	            if ('function' !== typeof callback) {
	                throw new TypeError(callback + ' is not a function');
	            }

	            var index,
	                value,
	                length = this.length >>> 0,
	                isValueSet = false;

	            if (1 < arguments.length) {
	                value = opt_initialValue;
	                isValueSet = true;
	            }

	            for (index = 0; length > index; ++index) {
	                if (this.hasOwnProperty(index)) {
	                    if (isValueSet) {
	                        value = callback(value, this[index], index, this);
	                    } else {
	                        value = this[index];
	                        isValueSet = true;
	                    }
	                }
	            }

	            if (!isValueSet) {
	                throw new TypeError('Reduce of empty array with no initial value');
	            }

	            return value;
	        };
	    }

	    
	    /**
	     * Computes the multiplier necessary to make x >= 1,
	     * effectively eliminating miscalculations caused by
	     * finite precision.
	     */
	    function multiplier(x) {
	        var parts = x.toString().split('.');
	        if (parts.length < 2) {
	            return 1;
	        }
	        return Math.pow(10, parts[1].length);
	    }

	    /**
	     * Given a variable number of arguments, returns the maximum
	     * multiplier that must be used to normalize an operation involving
	     * all of them.
	     */
	    function correctionFactor() {
	        var args = Array.prototype.slice.call(arguments);
	        return args.reduce(function (prev, next) {
	            var mp = multiplier(prev),
	                mn = multiplier(next);
	        return mp > mn ? mp : mn;
	        }, -Infinity);
	    }        


	    /************************************
	        Numeral Prototype
	    ************************************/


	    numeral.fn = Numeral.prototype = {

	        clone : function () {
	            return numeral(this);
	        },

	        format : function (inputString, roundingFunction) {
	            return formatNumeral(this, 
	                  inputString ? inputString : defaultFormat, 
	                  (roundingFunction !== undefined) ? roundingFunction : Math.round
	              );
	        },

	        unformat : function (inputString) {
	            if (Object.prototype.toString.call(inputString) === '[object Number]') { 
	                return inputString; 
	            }
	            return unformatNumeral(this, inputString ? inputString : defaultFormat);
	        },

	        value : function () {
	            return this._value;
	        },

	        valueOf : function () {
	            return this._value;
	        },

	        set : function (value) {
	            this._value = Number(value);
	            return this;
	        },

	        add : function (value) {
	            var corrFactor = correctionFactor.call(null, this._value, value);
	            function cback(accum, curr, currI, O) {
	                return accum + corrFactor * curr;
	            }
	            this._value = [this._value, value].reduce(cback, 0) / corrFactor;
	            return this;
	        },

	        subtract : function (value) {
	            var corrFactor = correctionFactor.call(null, this._value, value);
	            function cback(accum, curr, currI, O) {
	                return accum - corrFactor * curr;
	            }
	            this._value = [value].reduce(cback, this._value * corrFactor) / corrFactor;            
	            return this;
	        },

	        multiply : function (value) {
	            function cback(accum, curr, currI, O) {
	                var corrFactor = correctionFactor(accum, curr);
	                return (accum * corrFactor) * (curr * corrFactor) /
	                    (corrFactor * corrFactor);
	            }
	            this._value = [this._value, value].reduce(cback, 1);
	            return this;
	        },

	        divide : function (value) {
	            function cback(accum, curr, currI, O) {
	                var corrFactor = correctionFactor(accum, curr);
	                return (accum * corrFactor) / (curr * corrFactor);
	            }
	            this._value = [this._value, value].reduce(cback);            
	            return this;
	        },

	        difference : function (value) {
	            return Math.abs(numeral(this._value).subtract(value).value());
	        }

	    };

	    /************************************
	        Exposing Numeral
	    ************************************/

	    // CommonJS module is defined
	    if (hasModule) {
	        module.exports = numeral;
	    }

	    /*global ender:false */
	    if (typeof ender === 'undefined') {
	        // here, `this` means `window` in the browser, or `global` on the server
	        // add `numeral` as a global object via a string identifier,
	        // for Closure Compiler 'advanced' mode
	        this['numeral'] = numeral;
	    }

	    /*global define:false */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return numeral;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	}).call(this);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * stepsForm.js v1.0.0
	 * http://www.codrops.com
	 *
	 * Licensed under the MIT license.
	 * http://www.opensource.org/licenses/mit-license.php
	 * 
	 * Copyright 2014, Codrops
	 * http://www.codrops.com
	 */



	module.exports = function(){

	var classie = __webpack_require__(2);

	( function( window ) {
		
		'use strict';

		var transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			},
			transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
			support = { transitions : Modernizr.csstransitions };

		function extend( a, b ) {
			for( var key in b ) { 
				if( b.hasOwnProperty( key ) ) {
					a[key] = b[key];
				}
			}
			return a;
		}

		function stepsForm( el, options ) {
			this.el = el;
			this.options = extend( {}, this.options );
	  		extend( this.options, options );
	  		this._init();
		}

		stepsForm.prototype.options = {
			onSubmit : function() { return false; }
		};

		stepsForm.prototype._init = function() {
			// current question
			this.current = 0;

			// questions
			this.questions = [].slice.call( this.el.querySelectorAll( 'ol.questions > li' ) );
			// total questions
			this.questionsCount = this.questions.length;
			// show first question
			classie.addClass( this.questions[0], 'current' );
			
			// next question control
			this.ctrlNext = this.el.querySelector( 'button.next' );

			// next question control
			this.ctrlPrev = this.el.querySelector( 'button.prev' );

			// progress bar
			this.progress = this.el.querySelector( 'div.progress' );
			
			// question number status
			this.questionStatus = this.el.querySelector( 'span.number' );
			// current question placeholder
			this.currentNum = this.questionStatus.querySelector( 'span.number-current' );
			this.currentNum.innerHTML = Number( this.current + 1 );
			// total questions placeholder
			this.totalQuestionNum = this.questionStatus.querySelector( 'span.number-total' );
			this.totalQuestionNum.innerHTML = this.questionsCount;

			// error message
			this.error = this.el.querySelector( 'span.error-message' );
			
			// init events
			this._initEvents();
		};

		stepsForm.prototype._initEvents = function() {
			var self = this,
				// first input
				firstElInput = this.questions[ this.current ].querySelector( 'input' ),
				// focus
				onFocusStartFn = function() {
					firstElInput.removeEventListener( 'focus', onFocusStartFn );
					classie.addClass( self.ctrlNext, 'show' );
					classie.addClass( self.ctrlPrev, 'show' );
				};

			// show the next question control first time the input gets focused
			firstElInput.addEventListener( 'focus', onFocusStartFn );

			// show next question
			this.ctrlNext.addEventListener( 'click', function( ev ) { 
				ev.preventDefault();
				self._nextQuestion(); 
			} );

			// show prev question
			this.ctrlPrev.addEventListener( 'click', function( ev ) { 
				ev.preventDefault();
				self._prevQuestion(); 
			} );

			// pressing enter will jump to next question
			document.addEventListener( 'keydown', function( ev ) {
				var keyCode = ev.keyCode || ev.which;
				// enter
				if( keyCode === 13 ) {
					ev.preventDefault();
					self._nextQuestion();
				}
			} );

			// disable tab
			this.el.addEventListener( 'keydown', function( ev ) {
				var keyCode = ev.keyCode || ev.which;
				// tab
				if( keyCode === 9 ) {
					ev.preventDefault();
				} 
			} );
		};

		stepsForm.prototype._prevQuestion = function() {
			if( !this._validade() ) {
				return false;
			}

			//reset count
			if(this.current >= this.questions.length){
				this.current = this.questions.length;

			}

			// current question
			var currentQuestion = this.questions[ this.current ];
			
			//show and hide back arrow
			if(this.current <= 1 ){
				document.querySelector('.prev').style.display = 'none';

			}else{
					document.querySelector('.prev').style.display = 'block';
			}

			//show and hide next arrow
			if(this.current === this.questions.length ){
				document.querySelector('.next').style.display = 'none';
			}else{
				document.querySelector('.next').style.display = 'block';
			}

			// decrement current question iterator
			--this.current;

			// update progress bar
			this._progress();


				//update numbers

				this._updateQuestionNumber();
				//hack to remove extra numbers from questionStatus
				var elements = document.querySelectorAll('.number-next');
				if(elements.length > 1){
					this.questionStatus.removeChild(elements[0]);
				}
				console.log(this.questionStatus);

				// add class "show-next" to form element (start animations)
				classie.addClass( this.el, 'show-next' );

				// current question
				var prevQuestion = this.questions[ this.current ];
				classie.removeClass( currentQuestion, 'current' );
				classie.addClass( prevQuestion, 'current' );
				console.log(currentQuestion);

		


			var self = this, onEndTransitionFn = function( ev ) {
					if( support.transitions ) {
						this.removeEventListener( transEndEventName, onEndTransitionFn );
					}
					else {
						classie.removeClass( self.el, 'show-next' );
						self.currentNum.innerHTML = self.nextQuestionNum.innerHTML;
						self.questionStatus.removeChild( self.nextQuestionNum );
						// force the focus on the next input
						prevQuestion.querySelector( 'input' ).focus();
					}
				};

			if( support.transitions ) {
				this.progress.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}

		}

		stepsForm.prototype._nextQuestion = function() {
			if( !this._validade() ) {
				return false;
			}


			// check if form is filled
			if( this.current === this.questionsCount - 1 ) {
				this.isFilled = true;
			}

			// clear any previous error messages
			this._clearError();

			//hide back button on first question
			if(this.current < 0){
				
					document.querySelector('.prev').style.display = 'none';
					
			}else{
					document.querySelector('.prev').style.display = 'block';
				
			}

			if(this.current === this.questions.length - 1){
				document.querySelector('.next').style.display = 'none';
			}else{
					document.querySelector('.next').style.display = 'block';
			}

			// current question
			var currentQuestion = this.questions[ this.current ];
		
			if(this.current >= 3){
				// increment current question iterator
				++this.current;
				// update progress bar to 100% and then reset to current
				this._progress();
				--this.current;

			}else{

			// increment current question iterator
			++this.current;
				console.log('current ', this.current);
			// update progress bar
			this._progress();
		}

			if( this.current <= this.questions.length-1) {
			
				// change the current question number/status
				this._updateQuestionNumber();
				//hack to remove extra numbers from questionStatus
				var elements = document.querySelectorAll('.number-next');
				if(elements.length > 1){
					this.questionStatus.removeChild(elements[0]);
				}

				// add class "show-next" to form element (start animations)
				classie.addClass( this.el, 'show-next' );

				// remove class "current" from current question and add it to the next one
				// current question
				var nextQuestion = this.questions[ this.current ];
					classie.removeClass( currentQuestion, 'current' );
					classie.addClass( nextQuestion, 'current' );
				
			
			}

			// after animation ends, remove class "show-next" from form element and change current question placeholder
			var self = this,
				onEndTransitionFn = function( ev ) {
					if( support.transitions ) {
						this.removeEventListener( transEndEventName, onEndTransitionFn );
					}
					if(document.querySelector('.progress').style.width === '100%') {

						self._submit();
					}
					else {
						classie.removeClass( self.el, 'show-next' );
						self.currentNum.innerHTML = self.nextQuestionNum.innerHTML;
						self.questionStatus.removeChild( self.nextQuestionNum );
						// force the focus on the next input
						nextQuestion.querySelector( 'input' ).focus();
					}
				};

			if( support.transitions ) {
				this.progress.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}

		// updates the progress bar by setting its width
		stepsForm.prototype._progress = function() {
			this.progress.style.width = this.current * ( 100 / this.questionsCount ) + '%';
		}

		// changes the current question number
		stepsForm.prototype._updateQuestionNumber = function(val) {
			// first, create next question number placeholder
			this.nextQuestionNum = document.createElement( 'span' );
			this.nextQuestionNum.className = 'number-next';
			this.nextQuestionNum.innerHTML = Number( this.current + 1 );
			// insert it in the DOM
			this.questionStatus.appendChild( this.nextQuestionNum );
		}
		// submits the form
		stepsForm.prototype._submit = function() {
			this.options.onSubmit( this.el );
		}

		// TODO (next version..)
		// the validation function
		stepsForm.prototype._validade = function() {
			// current question´s input
			var input = this.questions[ this.current ].querySelector( 'input' ).value;
			if( input === '' ) {
				this._showError( 'EMPTYSTR' );
				return false;
			}

			return true;
		}

		// TODO (next version..)
		stepsForm.prototype._showError = function( err ) {
			var message = '';
			switch( err ) {
				case 'EMPTYSTR' : 
					message = 'Please fill the field before continuing';
					break;
				case 'INVALIDEMAIL' : 
					message = 'Please fill a valid email address';
					break;
				// ...
			};
			this.error.innerHTML = message;
			classie.addClass( this.error, 'show' );
		}

		// clears/hides the current error message
		stepsForm.prototype._clearError = function() {
			classie.removeClass( this.error, 'show' );
		}

		// add to global namespace
		window.stepsForm = stepsForm;

	})( window );

	}






/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(){

	var numeral = __webpack_require__(3)

	$(function(){

		var agentNum = null;
		var trainingDaysNum = null;
		var churnNum = null;
		var costPerHour = null;

		//listen for keydown event
		$('input').on('keydown', function(e){
			if(e.which == 13){
				getValues();
			}
		});

		//listen for button click
		$('.next').click(function(){
			getValues();
		})

		function getValues (){
				//get agent number
			if(agentNum === null){
				//add value to navbar
				$('#agents').html($('#q1').val());
				agentNum = numeral().unformat($('#q1').val());
			}else if(trainingDaysNum === null){
				//add val to navbar
				$('#training').html($('#q2').val());
				//get training days number
				trainingDaysNum = numeral().unformat($('#q2').val());
			}else if ( churnNum === null){
				//add val to navbar
				$('#churn').html($('#q3').val());
				//get churn days
				churnNum = numeral().unformat($('#q3').val());
				
			}else if(costPerHour  === null){
				//add val to navbar
				$('#cost').html($('#q4').val());
				//get cost per hour
				costPerHour = numeral().unformat($('#q4').val());
			}

				calculateROI( agentNum, trainingDaysNum, churnNum, costPerHour);
				 console.log( 'agentNum: ' +agentNum + ' trainingDaysNum: ' + trainingDaysNum + ' churnNum: ' + churnNum + ' costPerHour: ' + costPerHour);
			
		}


		function calculateROI(agentNumn, trainingDaysNum, churnNum, costPerHour ){

	         var dailyAgentCost = costPerHour*8;
	         var annualAgentCost = 235 *8 * costPerHour;
	         var agentCost = agentNum * annualAgentCost;

	         //churn cost
	         var trainingDays = trainingDaysNum * dailyAgentCost;
	         var proficiencyCost = .25 * annualAgentCost;
	         var newAgentCost = trainingDays + proficiencyCost;
	         var totalChurnCost = newAgentCost * 250;
	         var churnSavings = totalChurnCost * .1;

	         //workstyle cost
	         var setUpAgents = 100 * agentNum;
	         var setUpChurnAgents = (agentNum * churnNum) * 100;
	         var runningCost = 12 * 10 * agentNum;
	         var totalCost = setUpAgents + runningCost +  setUpChurnAgents ;
	         var averageCost = totalCost/500;

	         var ROI = Math.round((totalChurnCost/totalCost).toFixed(2));

	        var workstyleCosts = churnSavings - totalCost;
	        
	        console.log('agentNum' + agentNum);
	        console.log('trainingDaysNum ' + trainingDaysNum);
	        console.log('churnNum ' + churnNum);
	        console.log('costPerHour ' + costPerHour);


			//update dom with values

			//section2 values
			$('.section-two__value-one').html(numeral(totalChurnCost).format('(0.0 a)'));
			$('.section-two__value-two').html(numeral(churnSavings).format('(0.0 a)'));
			$('.section-two__value-three').html(numeral(ROI).format('0%')+ ' ROI');

			$('#value-one').html(numeral(newAgentCost).format('$0,0'));
			$('#value-two').html(numeral(agentCost).format('$0,0'));
			$('#value-three').html(numeral(totalCost).format('$0,0'));

		}
	});

	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	// var scrollHandler = $(window).scroll(function(e) {   
	//     if($(document).scrollTop() >=100) {
	//        $(document).scrollTop(100);
	//     }
	// });

	module.exports = function (){


			//after submitting form
			var theForm = document.getElementById('theForm');

			new stepsForm(theForm, {
			    onSubmit: function(form) {

			    	// $(window).off("scroll", scrollHandler);

			        $('body').css({ "overflow": "visible" });
			        $('.bgImg').css({ "min-height": "100%" });
			        $('#page2').show( function(){
			        	 $('#page1').css({ "position": "relative", "transform": "translateY(-700px)" });
						$('#page2').css({ "transform": "translateY(-700px)", "margin-bottom":"-700px" });

					 })	        
			        $('#navbar').css("display", "flex");
			        // $('#main1').css({"margin-top": "120px"});

			        // hide form
			        // classie.addClass(theForm.querySelector('.simform-inner'), 'hide');

			        /*
			        form.submit()
			        or
			        AJAX request (maybe show loading indicator while we don't have an answer..)
			        */

			        // let's just simulate something...
			        // var messageEl = theForm.querySelector('.final-message');
			        // messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
			        // classie.addClass(messageEl, 'show');
			    }
			});


			//toggle page slide
			$('.open').click(function() {
			    //hides form
			    if ($('#page1').hasClass('toggled')) {
			        $('.bgImg').css({ "min-height": "100%" });
			        $('#page1').css({ "transform": "translateY(-700px)" }).removeClass('toggled');
			        $('#page2').css({ "transform": "translateY(-700px)","margin-bottom":"-700px" });

			    } else {
			        $('.bgImg').css({ "min-height": "0" });
			        $('#page1').css({ "transform": "translateY(0px)" }).addClass('toggled');
			        $('#page2').css({ "transform": "translateY(0px) " });

			    }
			});

		}



/***/ }
/******/ ]);