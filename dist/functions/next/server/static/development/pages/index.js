module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/common/src/assets/css/flaticon.css":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/css/flaticon.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/style.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/css/style.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: ResetCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetCSS", function() { return ResetCSS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flaticon.css */ "../../node_modules/common/src/assets/css/flaticon.css");
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flaticon_css__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  html {\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  *:focus {\n    outline: none;\n  }\n\n  html,\n  html a,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  a,\n  p,\n  li,\n  dl,\n  th,\n  dt,\n  input,\n  textarea,\n  span,\n  div {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  // modal default style\n  .reuseModalOverlay {\n    z-index: 99999 !important;\n  }\n\n  .reuseModalHolder {\n    padding: 0 !important;\n    &.demo_switcher_modal {\n      border: 0 !important;\n      background-color: rgba(16, 30, 77, 0.9) !important;\n      .innerRndComponent {\n        border-radius: 8px !important;\n      }\n    }\n  }\n\n  button.modalCloseBtn {\n    position: fixed !important;\n    z-index: 999991 !important;\n    background-color: transparent !important;\n    top: 10px !important;\n    right: 10px !important;\n    min-width: 34px !important;\n    min-height: 34px !important;\n    padding: 0 !important;\n    span.btn-icon {\n      font-size: 22px !important;\n      transform: rotate(45deg) !important;\n    }\n\n    &.alt {\n      border-radius: 50% !important;\n      z-index: 999999 !important;\n      padding: 0 !important;\n      transition: all 0.3s ease !important;\n      top: 25px !important;\n      right: 30px !important;\n      min-width: 40px !important;\n      min-height: 40px !important;\n\n      span.btn-icon {\n        font-size: 20px !important;\n      }\n\n      &:hover {\n        opacity: 0.88 !important;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ResetCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/client/denny.png":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/agency/client/denny.png ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAIjCAMAAACDL2QNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACHFBMVEW8vLyRkZECAgIAAACZmZm7u7uHh4dUVFQpKSkUFBQHBwcEBAQQEBArKytSUlKIiIhhYWG5ubmWlpZ+fn4mJiaysrIYGBh0dHQaGhoXFxdvb2+6urqgoKAICAienp5FRUWurq41NTUlJSWioqK0tLQjIyN6enp8fHytra0iIiIPDw+cnJw2NjZXV1cnJyenp6cMDAwsLCwODg5YWFiKioqhoaGkpKSTk5NmZmYcHBywsLC3t7c6OjozMzMuLi6fn5+MjIwDAwMvLy9AQEBfX18BAQFNTU2vr68wMDBycnJkZGQNDQ1CQkJiYmKqqqqampqpqakxMTEWFhZQUFCXl5dubm4SEhIgICBpaWlnZ2cFBQWFhYVWVla1tbUdHR0oKCg/Pz99fX0JCQm2trYGBgZ/f38qKio8PDyAgIA+Pj6Dg4NtbW2CgoJjY2NDQ0OdnZ2rq6tBQUFdXV24uLhsbGwyMjKJiYlra2sbGxuzs7OQkJAKCgpcXFw3NzeYmJgkJCQhISFISEhGRkZVVVVxcXFqampwcHB2dnY0NDSPj48eHh6GhoaSkpJMTExeXl4tLS1KSkplZWV3d3eUlJSLi4tTU1MfHx9zc3OVlZVLS0sTExN4eHiNjY2jo6N1dXWoqKhOTk4ZGRlbW1s5OTmxsbFRUVGOjo5ERESmpqZPT0+bm5tgYGCsrKyBgYEVFRV7e3tZWVmEhIRoaGj+/v6SDV18AAAAAWJLR0Sz2m3/fgAACPdJREFUeNrt2/2bE8UdAPCFJQgHp2C5U6TIi4hIbbEoYH0BtUTUQ05BQREsKlatCtZTa0VFba3aWkRqa7Voq1YttmrrX9ib2Vwu2d2Q5J42eR7u8/mFzOzMMvl+bzczk02SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJzejJlpms7K11ZmnzVn7sC8+YNnn1M5TecF430XdvGfVQbSonM7Gdd30lYW9TuCPTU0nJbk67zzJ+Ox+IIlrTp/d2mX+bow7TRf+XHJV2ZZWszX8hXNEVl5UXnfVRenXeZrdcf5yo9LvqJL0mK+1lyaD8na75X1XXhZ2m2+vt9pvgrjap2vH/Q7hj207vJivio/jFXrr7hyw8ZNV/0oFoavLva95tq063xdFzoMbm62pZNxXT+naH1ocsM5/Q5i71RuTIv5uirW/Hio1mRrNRRvKvTddnPafb7mj7e/vNK2Wem4CmbFycst/Q5iD92aFuOyaiRUbJ8M6m3xr3hHrutofUbSRb5uD+3vmNq4CtbsDC129TuGPXTnvJK43BXKu4cmK5bsCTV3N/Ws3LM3nUK+7g3t901tXHmVeG9deU2/g9g7++8Ls6uf5OJyRyjf1tguLLLSA401mxbFaFarXeYrnun+qY0r755w/IEN/Q5iD900/oYHtgw2x+XBg6G8sbHdQ6Hmp5PlWQ/HPKVLH1naZb4eDe0vateqdFx5o/EavKvfMeyhn4U3/FiSi0tlw+NPHLquqWGcWw9OlmufXJceTrrNV+g5MrVx5VTi5be5/dTljPHk2vE3vCJpE5cg3sV+PlmO+dr71FhSyNfTMZHPNHZ+Nl6L2+ProWoH043OxvWLcPRg20v1DBIWu+t3dJCvyp7ctHk8X9UD8YMjn69KtjHS0HbN7lDx3C9j4fnw+or/xbh2HAlHX+h3DHsoXgoPJR3kK87nRxomjOdXV9S2JAr3w3hxpEfW1StejNfiSw3/5/1J5d5dR+fPm//yodUlq/DOxvVKOLhzf7+D2DuHw7Ti1aRdXMYna7+Kl8yvG6qeqG9IFD+/4odP+uJE8bVYfLpWilG+6DfD9aXAka2rpjSu0WpHE80zxzVhp3Z4qF1cKoe3xvtZyfZGVDLfuCm2fz0rjMZV2sMTx1aOF2YuShstHp3KuN4Ix6bTPu9ZYfX0ZnLauNw7Z8+RLKjzbm1xmpJ8xcVTOhK3Q/b/NqZk4q63cG9a9MDvuh1XkrwVe06jfcMrq5Mf/C3jsmAipINbWp2nbD6fbU5cG17+Pry6YdPEkdGJE1589mt3HXt0JCssbbjCOhpX7fJ6u99B7J1tc8ff79GxNnE5Xr8G9lwwVn6i0vXXO7HPJUnyeHzxTv3Aiexsm+/MimOPxf312u2v83Elf4jd3u13FHvn4bB2OZy0icszDXet+0q/ACvPV7a5Pn9bNldcMbmk/WM81bHJb6s3/imr6W5cyfZ4jfY7iL3zXni/r02UWsbl9Xd3jC3/84JswnHkzrIzle9vrIt3uvfj12MfrJms3zc8M7fbuy6b/m/ralw74g33L/2OYs9seCDsQdT/7Nutv/bvignbXbJWarUfdX/9uqyebDqw8MOTzTtI2fMBH3U1rmPhwNwWd+gzz8I5Yf7213q5w/2o9G8lR1rtH746ka9jyekt+Ti02t7NuCqLw4FP+h3Gnvkkt9Rsn6/k09Bk4O/FA63yNfRxlq4b2+7Hfhaa7exmXJ/H6/bDfoexV+JjfV80VHSQrwvjdsKJ4oGW+/NvxR4z/9F2OPHWOa+bccVp6439DmOvxMf6djZeKh3kKzka2pwq1rfM1yOd3Q5rW8DpUOfjWhInM+f1O469Mjtt7VDLXqfC4ReL9a3ydXu2skpnvtVuPF/Gdss7H9eb8bzL+x3HXplavv4ZDg8W61vkK3u0Ivh4KDm9GfHTqNL5uK4INTf3O4w90z4u/9q0esGMXK8XwuHrimdrka+7Q/XeuHBb1nRg1cZ1uaZxD2RtF39H8VnWp5Ppom1c4t/v8Vyv48XQR+X5ynbl34kPQzXM+G5bPJCmn+baxlnhG53na3mcyEyfp2y2nJ33QQjA9vAqbhm8HorDuXn4c6Fya/Fspfl6MH4fPWdJcij8O1K/ouJX+GtzZw6LrnRBB+Oq+SrUft3vKPZTbh52OP5JN29LbIp1JY+5l+ZrV6g8uCVJtsU7Yn0Nlk0Fn21qe26sG01KlM8Pz2pxpU8f+bhcWrtDTarEJ693lvQty9fseMe6J7xs3qBf8kHxzHe0nj2U52vz9Pr4KpGPS/aM0zcNLZ6KNe+V9C3JV/aAzWB2UcU74rza0xvZR2O6uqHx1lhT/sVjab4q8RvUGck0lo/LWPyC+GA9iJV/x6BeXLa1VJKvuCs/UJsQZHfE+2rPxayJS92Dk18ox53bVne30nx9GHu0WySc0QpxORl2htLqZ3Hrdcmz8cHMdH3plKyYrwti6/rD9tkdceLpj/NiqXoqnrnyfPyf053bOhxXEKeRu/sdsr4qxuWjbBpdPXpg2Ru1jYqB50v7FvK1Jf7E5+3Ja/GL2P0/tdK+2pkXHTp+7dzs9Uj5N6Et8hV/jDGNngQoURKX9w7mVkDDL5X3zedrbGVMbsNjt9kdce2TteK+au7Mi1ulqzxf8feZXyTTWVlcZjX9IvaGV1rcsgr5ymYUTdO37IHEyyaKs79uPHP11auTVkrzFRfu7X+QdCYrn4c9/szEw2fDp1o/pZ7L1+fx6sn9CGFZcw7HTgxO/Lpr/ftfdjuuA/W1AjkPnjzx7RO3fPV/2PrZf/2Juxd8+83oNPpxCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANBT/wV3Yhpm+2PF6AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMS0xNlQwMDo0Nzo1NC0wNjowMMpfwb0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDEtMTZUMDA6NDc6NTQtMDY6MDC7AnkBAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/app/credit-card.png":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/app/credit-card.png ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/credit-card-8a75c5399313f29c19d238a040558aa5.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/app/info1.png":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/app/info1.png ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/info1-caee9a8412843fcdeaba8abdda761e49.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/app/info2.png":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/app/info2.png ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/info2-7e89f747066401624a3250ea5d42f820.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/app/mockup.png":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/app/mockup.png ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mockup-95fb832d1e21f950dcfec72203305fd1.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/app/pattern.png":
/*!************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/app/pattern.png ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABOCAYAAACDtFBaAAAAw0lEQVR4nO3asY0CURBEwf7oYgCD/EPDOIJgMUC4jU5zYoWqAhjNPv31JgEAAAAAAHZhTQzZtu2c5JjkmuQyMfMPXjustcZ2OAzNOT1nHYfm7WaHqUC/SW55vKBP+Zcdpn6xiTFj1hr5rCRzL+hrCVQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVAhUCFQIVPwMzdnVEefkDo44C0ecAAAAAMD77oxYGlHmfHMuAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/app/substract-hover.png":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/app/substract-hover.png ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAAAadOcAAABm1PezAAAAAnRSTlMAtyOW6xcAAAABYktHRACIBR1IAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wEJDSstJxuX+QAAABNJREFUGNNjYBhQEAoBAQjGgAIAyTkFR/LaIPkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDEtMDlUMTI6NDM6NDUrMDE6MDAW+EkNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTA5VDEyOjQzOjQ1KzAxOjAwZ6XxsQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/app/substract.png":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/app/substract.png ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAQAAADX3XYeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjAQkNFyOzUMMBAAACGElEQVR42u3csRGAMBADwTcF038GPZjAc8NuBUou1QwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF+tuU9PAHateU5PAHZdpwcA+wQMYQKGMAFDmIAhTMAQJmAIEzCECRjCBAxhAoYwAUOYgCFMwBAmYAgTMIQJGMIEDGEChjABQ5iAIcytLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8GsvZ4ECCdeosigAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDEtMDlUMTI6MjM6MzUrMDE6MDD0iIpXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTA5VDEyOjIzOjM1KzAxOjAwhdUy6wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/author-1.jpg":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/author-1.jpg ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQGAwcICf/EACMQAAEEAQUAAwEBAAAAAAAAAAEAAgMEBQYHERITCCEiFBX/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APYhERWJxERAREQEREBU3O7+6Y03l8vSu2slE/BObHemGIuPqwyOjjkZF7tiMTpXNmi6xtcXuMjWgFx4VyWit0/hPW3K3MdqaPK43DXYshFlYbNPD9b888Pk6GO1P7AWKzJYY5PLow8sZ+xwSQ2tp7dHA6n09ZylfINgpUpzVtOuxPpPqSgtHnKyZrHxu/TSA4AkPaRyHAmTltdYjC6SyWdmvwPxOIisTW7EBM4hEHYTDhnJLmFjwWgF3ZpHHP0qpS2StM0PrPH2sxWnymu7UlnI3GY4CBnetDU6xwPkfwBXgY0d3vHblxBB6qVQ2ZZS2KfoZ9uvbqNoyY2GWxTD2GD7bE2aPsPUhnVrzy30Ic78duAGO58lNIYzzFy3lqDns9ntt4O9XdVi79BNOHwgwRF3IEkvVh6u4ceruL2uesD8ETpyhq2nR1HQx+P17S/y8zQp4Uw0q9PmQCKhH7n+X6msEkmUF87nBo4AXQqAiIgIiICIiAiIgIiICIiAiIgIiICIiD//2Q=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/author-2.jpg":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/author-2.jpg ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQGAwcICf/EACMQAAEEAQUAAwEBAAAAAAAAAAEAAgMEBQYHERITCCEiFBX/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APYhERWJxERAREQEREBU3O7+6Y03l8vSu2slE/BObHemGIuPqwyOjjkZF7tiMTpXNmi6xtcXuMjWgFx4VyWit0/hPW3K3MdqaPK43DXYshFlYbNPD9b888Pk6GO1P7AWKzJYY5PLow8sZ+xwSQ2tp7dHA6n09ZylfINgpUpzVtOuxPpPqSgtHnKyZrHxu/TSA4AkPaRyHAmTltdYjC6SyWdmvwPxOIisTW7EBM4hEHYTDhnJLmFjwWgF3ZpHHP0qpS2StM0PrPH2sxWnymu7UlnI3GY4CBnetDU6xwPkfwBXgY0d3vHblxBB6qVQ2ZZS2KfoZ9uvbqNoyY2GWxTD2GD7bE2aPsPUhnVrzy30Ic78duAGO58lNIYzzFy3lqDns9ntt4O9XdVi79BNOHwgwRF3IEkvVh6u4ceruL2uesD8ETpyhq2nR1HQx+P17S/y8zQp4Uw0q9PmQCKhH7n+X6msEkmUF87nBo4AXQqAiIgIiICIiAiIgIiICIiAiIgIiICIiD//2Q=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/author-3.jpg":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/author-3.jpg ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQGAwcICf/EACMQAAEEAQUAAwEBAAAAAAAAAAEAAgMEBQYHERITCCEiFBX/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APYhERWJxERAREQEREBU3O7+6Y03l8vSu2slE/BObHemGIuPqwyOjjkZF7tiMTpXNmi6xtcXuMjWgFx4VyWit0/hPW3K3MdqaPK43DXYshFlYbNPD9b888Pk6GO1P7AWKzJYY5PLow8sZ+xwSQ2tp7dHA6n09ZylfINgpUpzVtOuxPpPqSgtHnKyZrHxu/TSA4AkPaRyHAmTltdYjC6SyWdmvwPxOIisTW7EBM4hEHYTDhnJLmFjwWgF3ZpHHP0qpS2StM0PrPH2sxWnymu7UlnI3GY4CBnetDU6xwPkfwBXgY0d3vHblxBB6qVQ2ZZS2KfoZ9uvbqNoyY2GWxTD2GD7bE2aPsPUhnVrzy30Ic78duAGO58lNIYzzFy3lqDns9ntt4O9XdVi79BNOHwgwRF3IEkvVh6u4ceruL2uesD8ETpyhq2nR1HQx+P17S/y8zQp4Uw0q9PmQCKhH7n+X6msEkmUF87nBo4AXQqAiIgIiICIiAiIgIiICIiAiIgIiICIiD//2Q=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/author-4.jpg":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/author-4.jpg ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQGAwcICf/EACMQAAEEAQUAAwEBAAAAAAAAAAEAAgMEBQYHERITCCEiFBX/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APYhERWJxERAREQEREBU3O7+6Y03l8vSu2slE/BObHemGIuPqwyOjjkZF7tiMTpXNmi6xtcXuMjWgFx4VyWit0/hPW3K3MdqaPK43DXYshFlYbNPD9b888Pk6GO1P7AWKzJYY5PLow8sZ+xwSQ2tp7dHA6n09ZylfINgpUpzVtOuxPpPqSgtHnKyZrHxu/TSA4AkPaRyHAmTltdYjC6SyWdmvwPxOIisTW7EBM4hEHYTDhnJLmFjwWgF3ZpHHP0qpS2StM0PrPH2sxWnymu7UlnI3GY4CBnetDU6xwPkfwBXgY0d3vHblxBB6qVQ2ZZS2KfoZ9uvbqNoyY2GWxTD2GD7bE2aPsPUhnVrzy30Ic78duAGO58lNIYzzFy3lqDns9ntt4O9XdVi79BNOHwgwRF3IEkvVh6u4ceruL2uesD8ETpyhq2nR1HQx+P17S/y8zQp4Uw0q9PmQCKhH7n+X6msEkmUF87nBo4AXQqAiIgIiICIiAiIgIiICIiAiIgIiICIiD//2Q=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/beta-1.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/beta-1.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjEgNDAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlNFUEEgdHJhbnNmZXJzPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwOC45MiwxMjguNkEzNS43NCwzNS43NCwwLDAsMSw5NS41LDEwMC42OVY3NS44OGgtMTVhOC45NCw4Ljk0LDAsMCwxLTguOTQtOC45NFY5LjY4QTguOTQsOC45NCwwLDAsMSw4MC41NS43NEgxOS4yM0E4LjkzLDguOTMsMCwwLDAsMTAuMyw5LjY4VjY2Ljk0YTguOTMsOC45MywwLDAsMCw4LjkzLDguOTRoMTV2MjQuODFBMzUuNzQsMzUuNzQsMCwwLDAsNDcuNjEsMTI4LjZMMTM2Ljg4LDIwMGwzMC42Ni0yNC41MloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03MS42MSwzOTAuMzJWMzQ4LjM5YTguOTQsOC45NCwwLDAsMSw4Ljk0LTguOTRoMTZWMjk2LjRhMzUuNzIsMzUuNzIsMCwwLDEsMTMuODQtMjguMjRsNTcuNS00NC42LTMxLTIzLjU2TDQ5LDI2OC4xNkEzNS43MywzNS43MywwLDAsMCwzNS4xOSwyOTYuNHY0My4wNWgtMTZhOC45Myw4LjkzLDAsMCwwLTguOTMsOC45NHY0MS45M2E4LjkzLDguOTMsMCwwLDAsOC45Myw4Ljk0SDgwLjU1YTguOTQsOC45NCwwLDAsMS04Ljk0LTguOTRaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTMxLDIxMGExMCwxMCwwLDAsMS02LjI1LTIuMTlMMzkuNjMsMTM5LjczQTQzLjksNDMuOSwwLDAsMSwyMy4wOCwxMDUuM1Y2Ny44MmExMCwxMCwwLDAsMSwyMCwwVjEwNS4zYTI0LDI0LDAsMCwwLDksMTguODFMMTMxLDE4Ny4ybDc4Ljg4LTYzLjA5YTI0LDI0LDAsMCwwLDktMTguOFY2Ny44MmExMCwxMCwwLDAsMSwyMCwwVjEwNS4zYTQzLjg3LDQzLjg3LDAsMCwxLTE2LjU1LDM0LjQzbC04NS4xMiw2OC4wOEExMCwxMCwwLDAsMSwxMzEsMjEwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIyOS44NywzNDMuMTNhMTAsMTAsMCwwLDEtMTAtMTB2LTQxYTI0LjIyLDI0LjIyLDAsMCwwLTkuNS0xOS4xN2wtNzkuMzEtNjAuMzQtNzcuNyw2MC4yOGEyMy45NCwyMy45NCwwLDAsMC05LjMyLDE5djQxLjIxYTEwLDEwLDAsMCwxLTIwLDBWMjkxLjkyQTQzLjgzLDQzLjgzLDAsMCwxLDQxLjEsMjU3LjA5bDgzLjc3LTY1YTEwLDEwLDAsMCwxLDEyLjE5LS4wNmw4NS40Miw2NWE0NC4zMiw0NC4zMiwwLDAsMSwxNy4zOSwzNS4wOHY0MWExMCwxMCwwLDAsMS0xMCwxMFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yNjEsMTguNTJBMTguNTIsMTguNTIsMCwwLDAsMjQyLjQ4LDBoLTIyNEExOC41MiwxOC41MiwwLDAsMCwwLDE4LjUydjQwQTE4LjUyLDE4LjUyLDAsMCwwLDE4LjUyLDc3aDIyNEExOC41MiwxOC41MiwwLDAsMCwyNjEsNTguNDhaTTI0Miw1N0gyMFYyMEgyNDJaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjYxLDM0MS41MkExOC41MiwxOC41MiwwLDAsMCwyNDIuNDgsMzIzaC0yMjRBMTguNTIsMTguNTIsMCwwLDAsMCwzNDEuNTJ2NDBBMTguNTIsMTguNTIsMCwwLDAsMTguNTIsNDAwaDIyNEExOC41MiwxOC41MiwwLDAsMCwyNjEsMzgxLjQ4Wk0yNDIsMzgwSDIwVjM0M0gyNDJaIi8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/beta-2.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/beta-2.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTkuNjIgNDI0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzZhNTJmZDt9LmNscy0ze2ZpbGw6IzFhZTViZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnN1cHBvcnQ8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzAsMzExLjkxVjI2Ny4yNWEzMy40OCwzMy40OCwwLDAsMSwzMy40Ny0zMy40N0g4Mi41MnYtMjBINDMuNDZBMzMuNDgsMzMuNDgsMCwwLDAsMTAsMjQ3LjI3djQ0LjY1QTMzLjU2LDMzLjU2LDAsMCwwLDMyLDMyMy40YTM0LjEzLDM0LjEzLDAsMCwxLTItMTEuNDlaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzU2LjE2LDIxMy43SDMxNy4xMXYyMGgxNi4wOGEzMy40NywzMy40NywwLDAsMSwzMy40NywzMy40N3Y0NC43NmEzNC40LDM0LjQsMCwwLDEtMi40LDEyLjQ4LDMzLjQyLDMzLjQyLDAsMCwwLDI1LjM3LTMyLjQ3VjI0Ny4yN2EzMy40OCwzMy40OCwwLDAsMC0zMy40Ny0zMy41N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNjIuODYsNDA0SDIxMy43YTI1LDI1LDAsMCwxLTIwLTQwLDI1LDI1LDAsMCwwLDAsNTBoNDkuMTVhMjQuOTEsMjQuOTEsMCwwLDAsMjAtMTBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzM5LjM4LDMxNy4xYTEwLDEwLDAsMCwwLTEwLDEwdjIxLjU4QTMwLjQzLDMwLjQzLDAsMCwxLDI5OSwzNzlIMjc5LjQ0YTEzLjUxLDEzLjUxLDAsMCwwLTIuOS40LDM1LDM1LDAsMCwwLTMzLjY3LTI1LjM4SDE5My43MmEzNSwzNSwwLDAsMCwwLDY5Ljk0aDQ5LjE1YTM1LjExLDM1LjExLDAsMCwwLDMzLjY3LTI1LjM3LDkuMTksOS4xOSwwLDAsMCwyLjkuMzlIMjk5YTUwLjM5LDUwLjM5LDAsMCwwLDUwLjM1LTUwLjM1VjMyNy4wOWExMCwxMCwwLDAsMC0xMC0xMFpNMjQyLjg3LDQwNEgxOTMuNzJhMTUsMTUsMCwxLDEsMC0zMGg0OS4xNWExNSwxNSwwLDEsMSwwLDMwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE5OS44MSwwQzExNy4zOSwwLDUwLjI1LDY3LjE0LDUwLjI1LDE0OS41NlYyMTMuOGExMCwxMCwwLDEsMCwyMCwwVjE0OS41NkM3MC4yMyw3OC4xMywxMjguMzgsMjAsMTk5LjgxLDIwUzMyOS4zOSw3OC4xMywzMjkuMzksMTQ5LjU2VjIxMy44YTEwLDEwLDAsMCwwLDIwLDBWMTQ5LjU2QzM0OS4zNyw2NywyODIuMjMsMCwxOTkuODEsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik04Mi41MiwyMDMuNzFINDMuNDZBNDMuNDksNDMuNDksMCwwLDAsMCwyNDcuMTZ2NDQuNzZhNDMuNDksNDMuNDksMCwwLDAsNDMuNDYsNDMuNDZIODIuNTJhMTAsMTAsMCwwLDAsMTAtMTBWMjEzLjdhMTAsMTAsMCwwLDAtMTAtMTBabS0xMCwxMTEuNjlINDMuNDZBMjMuNTIsMjMuNTIsMCwwLDEsMjAsMjkxLjkyVjI0Ny4yN2EyMy41MiwyMy41MiwwLDAsMSwyMy40OC0yMy40OEg3Mi41NFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zNTYuMTYsMjAzLjcxSDMxNy4xMWExMCwxMCwwLDAsMC0xMCwxMFYzMjUuMzlhMTAsMTAsMCwwLDAsMTAsMTBoMzkuMDVhNDMuNDgsNDMuNDgsMCwwLDAsNDMuNDYtNDMuNDZWMjQ3LjI3YTQzLjUxLDQzLjUxLDAsMCwwLTQzLjQ2LTQzLjU2Wm0yMy40OCw4OC4yMWEyMy41LDIzLjUsMCwwLDEtMjMuNDgsMjMuNDhIMzI3LjA5VjIyMy42OWgyOS4wN2EyMy41LDIzLjUsMCwwLDEsMjMuNDgsMjMuNDdaIi8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/beta-3.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/beta-3.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNDUuMDUgNDgzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnNlY3VyZTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNjguMiw0NTMuMjRjLTI1LjU1LDAtNDEuMTktMjgtMjcuNzctNDkuNzdsNzAuMzQtMTE0YTUyLjE2LDUyLjE2LDAsMCwwLDcuNzgtMjcuNDJWMjQyLjczYTYuODYsNi44NiwwLDAsMC02Ljg2LTYuODYsNi44Niw2Ljg2LDAsMCwxLTYuODYtNi44NlYyMTcuMzdIMTcxLjQ0YTYuNTEsNi41MSwwLDAsMC02LjUyLDYuNTJWMjQ5YTYuODYsNi44NiwwLDAsMCw2Ljg2LDYuODYsNi44Niw2Ljg2LDAsMCwxLDYuODUsNi44NlYyODJhNTIuMTgsNTIuMTgsMCwwLDEtNy43OCwyNy40MWwtNzAuMzQsMTE0Yy0xMy40MSwyMS43NSwyLjIyLDQ5Ljc3LDI3Ljc3LDQ5Ljc3SDMwMi40MmEzMi4zOCwzMi4zOCwwLDAsMCwzMC4wNi0yMFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNTguNTksMjY1LjgxSDE3Mi4xMWExMCwxMCwwLDAsMSwwLTIwaDg2LjQ4YTEwLDEwLDAsMSwxLDAsMjBaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDcuNDQsMjA0LjM5YTMyLjIsMzIuMiwwLDAsMSwwLTQ1LjU2TDE2MS43Niw0NC41MWEyMS43MSwyMS43MSwwLDAsMCw0Ljg4LTcuNWwyLjU1LTYuNjZMMTQ4LjgxLDEwLDEzOC40LDM3YTIxLjI2LDIxLjI2LDAsMCwxLTQuODcsNy41TDE5LjIxLDE1OC44M2EzMi4yMiwzMi4yMiwwLDAsMCwzNi45LDUxLjc0LDMxLjYsMzEuNiwwLDAsMS04LjY3LTYuMThaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTY1LjQ5LDExMy44NWExMCwxMCwwLDAsMS0xLjQ0LS4xTDg0LjcsMTAyLjMxYTEwLDEwLDAsMSwxLDIuODUtMTkuNzZMMTY2LjksOTRhMTAsMTAsMCwwLDEtMS40MSwxOS44NVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMTguMjUsMTk2LjM5YTQxLDQxLDAsMCwxLTI5LTcwbDIxLjk0LTIxLjk0YTEwLDEwLDAsMCwxLDE0LjExLDBsMjEuOTQsMjEuOTRhNDEsNDEsMCwwLDEtMjksNzBabTAtNzAuNzUtMTQuODgsMTQuODhhMjEuMDUsMjEuMDUsMCwxLDAsMjkuNzcsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yNjguNDQsMzA0LjE5QTQyLjA5LDQyLjA5LDAsMCwxLDI2Mi4yNSwyODJ2LTE2LjVhMTYuOTEsMTYuOTEsMCwwLDAsMTQtMTYuNTVWMjIzLjg5YzAtOS4xLTcuODUtMTYuMzItMTctMTYuMzJIMTcxLjQ0Yy05LjEsMC0xNyw3LjIyLTE3LDE2LjMyVjI0OWExNi45MywxNi45MywwLDAsMCwxNCwxNi41NVYyODJhNDIuMDksNDIuMDksMCwwLDEtNi4xOSwyMi4xN0w5Miw0MTguMThBNDIuNSw0Mi41LDAsMCwwLDEyOC4yOCw0ODNIMzAyLjQyYTQyLjU0LDQyLjU0LDAsMCwwLDM2LjMxLTY0Ljg2Wk0zMjIuMiw0NTEuNTFBMjIuMywyMi4zLDAsMCwxLDMwMi40Miw0NjNIMTI4LjI4QTIyLjU1LDIyLjU1LDAsMCwxLDEwOSw0MjguNjJsNzAuMjQtMTE0QTYxLjg5LDYxLjg5LDAsMCwwLDE4OC40LDI4MlYyNjIuNjlhMTYuOTIsMTYuOTIsMCwwLDAtMTQtMTYuNTVWMjI3LjUyaDgxLjgydjE4LjYyYTE2LjksMTYuOSwwLDAsMC0xNCwxNi41NVYyODJhNjIsNjIsMCwwLDAsOS4xNiwzMi42NWw3MC4yOSwxMTRhMjIuMywyMi4zLDAsMCwxLC40NSwyMi44OVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xOTAuMTgsOTQuNTFsMjctMTAuNGExMCwxMCwwLDAsMCwzLjQ3LTE2LjM2TDE1NS44NiwyLjkyQTEwLDEwLDAsMCwwLDEzOS41LDYuMzlsLTEwLjQxLDI3YTExLjM3LDExLjM3LDAsMCwxLTIuNjIsNEwxMi4xNSwxNTEuNzdhNDIuMiw0Mi4yLDAsMCwwLDU5LjY4LDU5LjY4TDE4Ni4xNSw5Ny4xM2ExMS41NSwxMS41NSwwLDAsMSw0LTIuNjJaTTE3Miw4Myw1Ny43MiwxOTcuMzRhMjIuMjQsMjIuMjQsMCwxLDEtMzEuNDUtMzEuNDVMMTQwLjU4LDUxLjU3YTMxLjM0LDMxLjM0LDAsMCwwLDcuMTQtMTFsNC44OS0xMi43TDE5NS43Miw3MSwxODMsNzUuODlBMzEuMjMsMzEuMjMsMCwwLDAsMTcyLDgzWiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/footer-bg.svg":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/footer-bg.svg ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNjAyLjkgMzM3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjAyLjkgMzM3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYwMi45LDkzYy01Mi0xMy4yLTEwMC45LTMzLjgtMTQ4LjItNTguN2MtMjEtMTEuMS00Mi4xLTIyLTY1LjUtMjcuN2MtMzIuMi03LjgtNjQtNi42LTk1LjMsMy44DQoJYy0xOC41LDYuMi0zNS40LDE1LjctNTEuOSwyNS45Yy0xNSw5LjMtMzAuMSwxOC42LTQ1LjQsMjcuNmMtMjIuMywxMy4yLTQ2LjcsMTkuNy03Mi40LDIyYy0yMS43LDItNDMuMywyLjgtNjUsMQ0KCWMtMjAuNC0xLjctNDAuNi00LjQtNjAuOS03Yy0zOS4yLTUuMi03OC40LTExLTExOC4xLTEyYy0yNC43LTAuNi00OS4zLDEtNzMuMiw3LjhjLTI5LjEsOC4yLTUwLjcsMjYuNC02OC4yLDUwLjMNCgljLTEyLjIsMTYuNy0yMy4zLDM0LjEtMzYuMiw1MC4zYy0yMC40LDI1LjYtNDUuNyw0NC42LTc2LjEsNTdjLTI4LjIsMTEuNi01Ny42LDE2LjktODcuOSwxOC40Yy0zMi44LDEuNi02NS40LTEuMi05OC0zLjINCgljLTIzLjEtMS41LTQ2LjEtMy02OS4yLTQuNGMtMjQuOC0xLjYtNDkuNi0yLjEtNzQuNC0yLjZjLTI3LjQtMC42LTUzLjIsNS44LTc4LjUsMTUuM2MtMzYuOCwxMy44LTcyLjEsMzEuMi0xMDguNiw0NS43DQoJYy0zNS4zLDE0LjEtNzEuMywyNS43LTEwOC4yLDM0LjNDMS4yLDMzNywwLjYsMzM3LDAsMzM3QzAsMTkzLjYsMCwxNDcuMy0wLjEsNGMwLTMsMC40LTQsMy44LTRjNTMxLjgsMC4xLDEwNjMuNiwwLjEsMTU5NS40LDANCgljMy4zLDAsMy44LDAuOCwzLjgsMy45QzE2MDIuOCw2NiwxNjAyLjksMzEsMTYwMi45LDkzeiIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/footer.png":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/footer.png ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footer-7f4bb76ab2e3e8e9328ce15fac7d85e0.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/jackpot.svg":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/jackpot.svg ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MjMgNDQ5Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzQwZjRkMjt9LmNscy0ze2ZpbGw6IzE0ZTNiYTt9LmNscy00e2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkRhaWx5IEphY2twb3Q8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjY0LDIzMUgxMjRWMTQxSDk0VjI2MUgzMDRWMjMxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc5LDQxMFYzNjlINDlWMjk5bDQ1LTUwVjE5QTQwLjEzLDQwLjEzLDAsMCwxLDk1LjI2LDlIOTRBNDAsNDAsMCwwLDAsNTQsNDlWMjc5TDksMzI5djcwSDM5djQxSDM1OVY0MTBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzg5LDIwOS41YTksOSwwLDAsMS05LTl2LTg1YTksOSwwLDAsMSwxOCwwdjg1YTksOSwwLDAsMS05LDlaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNDAzLjUsMTI0LjVoLTI5YTksOSwwLDAsMSwwLTE4aDI5YTksOSwwLDAsMSwwLDE4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE2NCwyNzBIOTRhOSw5LDAsMCwxLTktOVYxNDFhOSw5LDAsMCwxLDktOWg3MGE5LDksMCwwLDEsOSw5VjI2MWE5LDksMCwwLDEtOSw5Wm0tNjEtMThoNTJWMTUwSDEwM1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zMDQsMjcwSDIzNGE5LDksMCwwLDEtOS05VjE0MWE5LDksMCwwLDEsOS05aDcwYTksOSwwLDAsMSw5LDlWMjYxYTksOSwwLDAsMS05LDlabS02MS0xOGg1MlYxNTBIMjQzWiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTI4NCw0MkgxMTRBMjksMjksMCwwLDAsODUsNzF2MzBhOSw5LDAsMCwwLDksOUgzMDRhOSw5LDAsMCwwLDktOVY3MWEyOSwyOSwwLDAsMC0yOS0yOVptMTEsNTBIMTAzVjcxYTExLDExLDAsMCwxLDExLTExSDI4NGExMSwxMSwwLDAsMSwxMSwxMVoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik00MTQsMTk0LjVIMzUzVjQ5QTQ5LjA1LDQ5LjA1LDAsMCwwLDMwNCwwSDk0QTQ5LjA1LDQ5LjA1LDAsMCwwLDQ1LDQ5VjI3NS41NUwyLjMxLDMyM0E5LDksMCwwLDAsMCwzMjl2NzBhOSw5LDAsMCwwLDksOUgzMHYzMmE5LDksMCwwLDAsOSw5SDM1OWE5LDksMCwwLDAsOS05VjQwOGgyMWE5LDksMCwwLDAsOS05VjMyOWE5LDksMCwwLDAtMi4zMS02TDM1MywyNzUuNTVWMjQyLjVoNjFhOSw5LDAsMCwwLDktOXYtMzBhOSw5LDAsMCwwLTktOVpNMzUwLDQzMUg0OFY0MDhIMzUwWm0zMC05OC41NVYzOTBIMThWMzMyLjQ1TDYwLjY5LDI4NUE5LDksMCwwLDAsNjMsMjc5VjQ5QTMxLDMxLDAsMCwxLDk0LDE4SDMwNGEzMSwzMSwwLDAsMSwzMSwzMVYyNzlhOSw5LDAsMCwwLDIuMzEsNlpNNDA1LDIyNC41SDM1M3YtMTJoNTJaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjM0LDI3MEgxNjRhOSw5LDAsMCwxLTktOVYxNDFhOSw5LDAsMCwxLDktOWg3MGE5LDksMCwwLDEsOSw5VjI2MWE5LDksMCwwLDEtOSw5Wm0tNjEtMThoNTJWMTUwSDE3M1oiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/proof1.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/proof1.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTggNDAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkluc3RhbnQgdHJhZGluZzwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MC4xOCwzMzQuNFYxMzYuNzNINzYuNzZWNDBoODQuNDhWMTBIMzYuNzZ2OTYuNzNIMTAuMThWMzA0LjRhODUuNjMsODUuNjMsMCwwLDAsNTYuNTEsODAuNTNBODUuMjEsODUuMjEsMCwwLDEsNTAuMTgsMzM0LjRaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTYxLjI0LDExNi43M0gzNi43NmExMCwxMCwwLDAsMS0xMC0xMFYxMGExMCwxMCwwLDAsMSwxMC0xMEgxNjEuMjRhMTAsMTAsMCwwLDEsMTAsMTB2OTYuNzNhMTAsMTAsMCwwLDEtMTAsMTBabS0xMTQuNDgtMjBIMTUxLjI0VjIwSDQ2Ljc2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTc2LjY4LDgxYTEwLDEwLDAsMCwxLTEwLTEwVjQ1LjE0YTEwLDEwLDAsMCwxLDIwLDBWNzFhMTAsMTAsMCwwLDEtMTAsMTBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTIxLjMyLDgxYTEwLDEwLDAsMCwxLTEwLTEwVjQ1LjE0YTEwLDEwLDAsMSwxLDIwLDBWNzFhMTAsMTAsMCwwLDEtMTAsMTBaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTg3LjgyLDk3SDEwLjE4QTkuOTIsOS45MiwwLDAsMCwwLDEwNi42NlYzMDQuNEMwLDM1Ny4xMSw0My4wNiw0MDAsOTUuNzgsNDAwaDYuNDRjNTIuNzIsMCw5NS43OC00Mi44OSw5NS43OC05NS42VjEwNi43M0E5LjkxLDkuOTEsMCwwLDAsMTg3Ljg5LDk3Wk0xNzgsMzA0LjRjMCw0MS42OS0zNC4wOSw3NS42LTc1Ljc4LDc1LjZIOTUuNzhDNTQuMDksMzgwLDIwLDM0Ni4wOSwyMCwzMDQuNFYxMTdIMTc4WiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/proof2.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/proof2.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MjAuMDEgMjk2LjI3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPk5vIGhpZGRlbiBmZWVzPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM3Ny42NiwyMDcuNTEsMzcxLjU1LDE5MWE3OS41MSw3OS41MSwwLDAsMC05OC44Ni0zOC43QTc5LjQ1LDc5LjQ1LDAsMCwxLDQwMS41NSwxNzFsNi4xLDE2LjQ4YTc5LjUxLDc5LjUxLDAsMCwxLTQ5LjIzLDkzLjY0LDc5LjQ5LDc5LjQ5LDAsMCwwLDE5LjI0LTczLjY0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQyLjM4LDIwNy41MSw0OC40OSwxOTFhNzkuNSw3OS41LDAsMCwxLDk4Ljg1LTM4LjdBNzkuNDMsNzkuNDMsMCwwLDAsMTguNSwxNzFsLTYuMTIsMTYuNDhhNzkuNTIsNzkuNTIsMCwwLDAsNDkuMjQsOTMuNjQsNzkuNDksNzkuNDksMCwwLDEtMTkuMjQtNzMuNjRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDIuMzgsMjA3LjUxLDQ4LjQ5LDE5MWE3OS41LDc5LjUsMCwwLDEsOTguODUtMzguN0E3OS40Myw3OS40MywwLDAsMCwxOC41LDE3MWwtNi4xMiwxNi40OGE3OS41Miw3OS41MiwwLDAsMCw0OS4yNCw5My42NCw3OS40OSw3OS40OSwwLDAsMS0xOS4yNC03My42NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNTEuMjUsMTc0LjQ2bC0uMTQsMjkuMTZoLjA3YTc4LjkzLDc4LjkzLDAsMCwxLDEwLjI0LTM2LDc5LDc5LDAsMCwwLTEwLjE3LDYuODRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzU1LjM2LDQ2LjVBNTMuMDgsNTMuMDgsMCwwLDAsMzA0LjkyLDEwaDBhNTMuMSw1My4xLDAsMCwwLTQ5LjQyLDMzLjY4QTUzLDUzLDAsMCwxLDI3NC44OSw0MGgwYTUzLjA5LDUzLjA5LDAsMCwxLDUwLjQzLDM2LjQ5bDE5LjMxLDUyLjA2QTc5LjU0LDc5LjU0LDAsMCwxLDQwMS41NSwxNzFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOTQuNjgsNzYuNDlBNTMuMDksNTMuMDksMCwwLDEsMTQ1LjExLDQwaDBhNTIuODgsNTIuODgsMCwwLDEsMTkuNDIsMy42OUE1My4wOSw1My4wOSwwLDAsMCwxMTUuMTYsMTBoMEE1My4wOCw1My4wOCwwLDAsMCw2NC42OCw0Ni41TDE4LjUsMTcxYTc5LjUxLDc5LjUxLDAsMCwxLDU2Ljg3LTQyLjQ4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1OC42MSwxNjcuNjFhNzksNzksMCwwLDEsMTAuMzEsMzguODJsLS4xNS0zMmE4MCw4MCwwLDAsMC0xMC4xNi02Ljg1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIxMC4wNywyNjUuNjdhMzYuNywzNi43LDAsMCwxLTE4LjYxLTUuMDdsLTMxLjctMTguNjlhMTAsMTAsMCwwLDEsMTAuMTYtMTcuMjNsMzEuNywxOC42OWExNi42OCwxNi42OCwwLDAsMCwxNi44NiwwbDMyLTE4Ljc0YTEwLDEwLDAsMCwxLDEwLjExLDE3LjI2bC0zMiwxOC43NGEzNi43MywzNi43MywwLDAsMS0xOC41MSw1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTg5LjQ4LDI1OC40M2E1MS42OSw1MS42OSwwLDEsMSw1MS42OC01MS42OSw1MS42OSw1MS42OSwwLDAsMS01MS42OCw1MS42OVptMC04My4zOGEzMS42OSwzMS42OSwwLDEsMCwzMS42OSwzMS42OSwzMS42OSwzMS42OSwwLDAsMC0zMS42OS0zMS42OVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zMjkuMzgsMjU4LjQzYTUxLjY5LDUxLjY5LDAsMSwxLDUxLjY5LTUxLjY5LDUxLjY5LDUxLjY5LDAsMCwxLTUxLjY5LDUxLjY5Wm0wLTgzLjM4YTMxLjY5LDMxLjY5LDAsMSwwLDMxLjY5LDMxLjY5LDMxLjY5LDMxLjY5LDAsMCwwLTMxLjY5LTMxLjY5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQxNy4zNCwxODUuMDVsMC0uMDdhODguNzQsODguNzQsMCwwLDAtNi41Ny0xNy44OEwzNjQuOCw0My4xOGE2My4xMyw2My4xMywwLDAsMC0xMjMsMTkuOEwyNDEuNyw4MS4xSDE3OC4zNEwxNzguMjUsNjNhNjMuMTMsNjMuMTMsMCwwLDAtMTIzLTE5Ljc1TDkuMjksMTY3LjEyQTg4LjA4LDg4LjA4LDAsMCwwLDIuNzEsMTg1YS4xNC4xNCwwLDAsMSwwLC4wNnYwQTg5LjQ1LDg5LjQ1LDAsMSwwLDE3OC45LDIwNy44YzAtLjEzLDAtLjI2LDAtLjR2LTFjMC0uMTMsMC0uMjgsMC0uNDFsLS4xMS0yNC44OWg2Mi40MmwtLjEsMjIuNDZjMCwuMjgsMCwuNTYsMCwuODMsMCwuNzYsMCwxLjUzLDAsMi4zNkE4OS40NCw4OS40NCwwLDEsMCw0MTcuMzYsMTg1LjFzMCwwLDAsMFpNMzA0LjkyLDIwYTQzLDQzLDAsMCwxLDQwLjk0LDI5LjYyTDM0Niw1MGwyOS40MSw3OS4yOWE4OS4zMyw4OS4zMywwLDAsMC0xMTQsMjAuODRsLjQxLTg3LjE5QTQzLjIsNDMuMiwwLDAsMSwzMDQuOTIsMjBaTTc0LjA1LDUwYzAtLjEyLjA5LS4yMy4xMy0uMzVhNDMuMTIsNDMuMTIsMCwwLDEsODQuMDcsMTMuMjlsLjQxLDg3LjI1YTg5LjUyLDg5LjUyLDAsMCwwLTExNC0yMC45Wk04OS40OCwyNzYuMTlBNjkuNDYsNjkuNDYsMCwwLDEsMjIsMTkwLjQxbDUuNjctMTUuMzJBNjkuMjMsNjkuMjMsMCwwLDEsODkuNTMsMTM3LjNjMzguMTQsMCw2OS40OSwzMSw2OS40OSw2OS4xN3YuNDFhNjguNjgsNjguNjgsMCwwLDEtNCwyMi45NCw2OS42Miw2OS42MiwwLDAsMS02NS41Niw0Ni4zN1pNMTc4LjcxLDE2MS4xbC0uMjgtNjBoNjMuMThsLS4yOSw2MFpNMzMwLjU2LDI3Ni4xOWE2OS40LDY5LjQsMCwwLDEtNjkuNDUtNjkuMzR2LS4xMWMwLTEsMC0xLjgzLjA2LTIuNjRWMjA0YTY5LjQ1LDY5LjQ1LDAsMCwxLDEzMS4yMi0yOC45MWw1LjY4LDE1LjMyYTY5LjQ5LDY5LjQ5LDAsMCwxLTY3LjUxLDg1Ljc4WiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/proof3.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/proof3.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTkgMzk5Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlNlY3VyZSBzdG9yYWdlPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE5LjcyLDM0MSwxMzIuNTgsMjI4LjE2bC4xLjEsMjguNzEtNzkuNDdhNTAsNTAsMCwwLDEsMTEuNjYtMTguMzdsMTQuMzUtMTQuMzRhMTYuNjYsMTYuNjYsMCwwLDEsMjMuNTcsMEwzMTUuODEsMjIwLjkybDkuMzctOS4zMmExNi42NywxNi42NywwLDAsMCwuMDYtMjMuNTdsMCwwTDIxMSw3My43NWExNi42NywxNi42NywwLDAsMC0yMy41NiwwaDBMMTczLjA1LDg4LjFhNDkuODksNDkuODksMCwwLDAtMTEuNjYsMTguMzdMMTMyLjY4LDE4NmwtLjEtLjExTDE5LjcyLDI5OC43YTMzLjM0LDMzLjM0LDAsMCwwLTIuMTksNDQuNzNjLjY5LS44MywxLjQxLTEuNjMsMi4xOS0yLjQxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTc2LjczLDM5OUE0My4yMyw0My4yMywwLDAsMSw0Ni4xLDM4Ni4zNEwxMi42NiwzNTIuODlhNDMuMzcsNDMuMzcsMCwwLDEsMC02MS4yNUwxMjUuNTIsMTc4Ljc4YTEwLDEwLDAsMCwxLDE0LjEyLDE0LjExTDI2Ljc3LDMwNS43NWEyMy4zOCwyMy4zOCwwLDAsMCwwLDMzbDMzLjQ1LDMzLjQ1YTIzLjM4LDIzLjM4LDAsMCwwLDMzLDBMMjA2LjEsMjU5LjM2YTEwLDEwLDAsMCwxLDE0LjEyLDE0LjExTDEwNy4zNSwzODYuMzRBNDMuMTcsNDMuMTcsMCwwLDEsNzYuNzMsMzk5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTIxOCw2Ni43YTI2LjY2LDI2LjY2LDAsMCwwLTM3LjY3LDBMMTY2LDgxLjA1YTYwLjQ3LDYwLjQ3LDAsMCwwLTE0LDIybC0yOC44LDc5Ljc1YTEwLDEwLDAsMCwwLDIuMzUsMTAuNDdsODAuNTgsODAuMTJhOS45NCw5Ljk0LDAsMCwwLDEwLjQ0LDIuM2w3OS41MS0yOC45M0E2MC40MSw2MC40MSwwLDAsMCwzMTcuODYsMjMzbDE0LjM2LTE0LjI4YTI2LjYzLDI2LjYzLDAsMCwwLC4xLTM3LjY3bC0uMDUtLjA1Wk0zMTguMTUsMjA0LjUyLDMwMy43OSwyMTguOEE0MC4xOCw0MC4xOCwwLDAsMSwyODkuMjUsMjI4TDIxNS43LDI1NC44MWwtNzEuNTgtNzEuMTgsMjYuNjYtNzMuNzdhMzkuOTMsMzkuOTMsMCwwLDEsOS4zNC0xNC43bDE0LjM0LTE0LjM1YTYuNjksNi42OSwwLDAsMSw5LjQ1LDBoMEwzMTguMTYsMTk1LjA1YTYuNjksNi42OSwwLDAsMSwwLDkuNDZsMCwwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTEzNi42NSwyNDguMjQsMTEyLjQsMjcyLjQ5YTEwLDEwLDAsMCwwLDE0LjExLDE0LjExbDI0LjI1LTI0LjI2YTEwLDEwLDAsMCwwLTE0LTE0LjE2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTMwMy44MywxMDUuMTRhOS45NCw5Ljk0LDAsMCwwLDcuMDYtMi45MmwzNC4yOC0zNC4yOGExMCwxMCwwLDAsMC0xNC4xMS0xNC4xMUwyOTYuNzgsODguMTFhMTAsMTAsMCwwLDAsNy4wNSwxN1oiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zODYuMDUsMTI3LjkybC0zNC4yOSwxMC43MmExMCwxMCwwLDAsMCw2LDE5TDM5MiwxNDdhMTAsMTAsMCwwLDAtNS45NS0xOVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yNDcuODcsNTMuNzhhMTAsMTAsMCwwLDAsMTIuNDktNi41M3YwTDI3MS4wOCwxM0ExMCwxMCwwLDAsMCwyNTIsN0wyNDEuMzIsNDEuMjlhMTAsMTAsMCwwLDAsNi41NSwxMi40OVoiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/proof4.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/proof4.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNDUuMDUgNDgzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlN5c3RlbWF0aWMgdHJhZGluZzwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNjguMiw0NTMuMjRjLTI1LjU1LDAtNDEuMTktMjgtMjcuNzctNDkuNzdsNzAuMzQtMTE0YTUyLjE2LDUyLjE2LDAsMCwwLDcuNzgtMjcuNDJWMjQyLjczYTYuODYsNi44NiwwLDAsMC02Ljg2LTYuODYsNi44Niw2Ljg2LDAsMCwxLTYuODYtNi44NlYyMTcuMzdIMTcxLjQ0YTYuNTEsNi41MSwwLDAsMC02LjUyLDYuNTJWMjQ5YTYuODYsNi44NiwwLDAsMCw2Ljg2LDYuODYsNi44Niw2Ljg2LDAsMCwxLDYuODUsNi44NlYyODJhNTIuMTgsNTIuMTgsMCwwLDEtNy43OCwyNy40MWwtNzAuMzQsMTE0Yy0xMy40MSwyMS43NSwyLjIyLDQ5Ljc3LDI3Ljc3LDQ5Ljc3SDMwMi40MmEzMi4zOCwzMi4zOCwwLDAsMCwzMC4wNi0yMFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNTguNTksMjY1LjgxSDE3Mi4xMWExMCwxMCwwLDAsMSwwLTIwaDg2LjQ4YTEwLDEwLDAsMSwxLDAsMjBaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDcuNDQsMjA0LjM5YTMyLjIsMzIuMiwwLDAsMSwwLTQ1LjU2TDE2MS43Niw0NC41MWEyMS43MSwyMS43MSwwLDAsMCw0Ljg4LTcuNWwyLjU1LTYuNjZMMTQ4LjgxLDEwLDEzOC40LDM3YTIxLjI2LDIxLjI2LDAsMCwxLTQuODcsNy41TDE5LjIxLDE1OC44M2EzMi4yMiwzMi4yMiwwLDAsMCwzNi45LDUxLjc0LDMxLjYsMzEuNiwwLDAsMS04LjY3LTYuMThaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTY1LjQ5LDExMy44NWExMCwxMCwwLDAsMS0xLjQ0LS4xTDg0LjcsMTAyLjMxYTEwLDEwLDAsMSwxLDIuODUtMTkuNzZMMTY2LjksOTRhMTAsMTAsMCwwLDEtMS40MSwxOS44NVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMTguMjUsMTk2LjM5YTQxLDQxLDAsMCwxLTI5LTcwbDIxLjk0LTIxLjk0YTEwLDEwLDAsMCwxLDE0LjExLDBsMjEuOTQsMjEuOTRhNDEsNDEsMCwwLDEtMjksNzBabTAtNzAuNzUtMTQuODgsMTQuODhhMjEuMDUsMjEuMDUsMCwxLDAsMjkuNzcsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yNjguNDQsMzA0LjE5QTQyLjA5LDQyLjA5LDAsMCwxLDI2Mi4yNSwyODJ2LTE2LjVhMTYuOTEsMTYuOTEsMCwwLDAsMTQtMTYuNTVWMjIzLjg5YzAtOS4xLTcuODUtMTYuMzItMTctMTYuMzJIMTcxLjQ0Yy05LjEsMC0xNyw3LjIyLTE3LDE2LjMyVjI0OWExNi45MywxNi45MywwLDAsMCwxNCwxNi41NVYyODJhNDIuMDksNDIuMDksMCwwLDEtNi4xOSwyMi4xN0w5Miw0MTguMThBNDIuNSw0Mi41LDAsMCwwLDEyOC4yOCw0ODNIMzAyLjQyYTQyLjU0LDQyLjU0LDAsMCwwLDM2LjMxLTY0Ljg2Wk0zMjIuMiw0NTEuNTFBMjIuMywyMi4zLDAsMCwxLDMwMi40Miw0NjNIMTI4LjI4QTIyLjU1LDIyLjU1LDAsMCwxLDEwOSw0MjguNjJsNzAuMjQtMTE0QTYxLjg5LDYxLjg5LDAsMCwwLDE4OC40LDI4MlYyNjIuNjlhMTYuOTIsMTYuOTIsMCwwLDAtMTQtMTYuNTVWMjI3LjUyaDgxLjgydjE4LjYyYTE2LjksMTYuOSwwLDAsMC0xNCwxNi41NVYyODJhNjIsNjIsMCwwLDAsOS4xNiwzMi42NWw3MC4yOSwxMTRhMjIuMywyMi4zLDAsMCwxLC40NSwyMi44OVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xOTAuMTgsOTQuNTFsMjctMTAuNGExMCwxMCwwLDAsMCwzLjQ3LTE2LjM2TDE1NS44NiwyLjkyQTEwLDEwLDAsMCwwLDEzOS41LDYuMzlsLTEwLjQxLDI3YTExLjM3LDExLjM3LDAsMCwxLTIuNjIsNEwxMi4xNSwxNTEuNzdhNDIuMiw0Mi4yLDAsMCwwLDU5LjY4LDU5LjY4TDE4Ni4xNSw5Ny4xM2ExMS41NSwxMS41NSwwLDAsMSw0LTIuNjJaTTE3Miw4Myw1Ny43MiwxOTcuMzRhMjIuMjQsMjIuMjQsMCwxLDEtMzEuNDUtMzEuNDVMMTQwLjU4LDUxLjU3YTMxLjM0LDMxLjM0LDAsMCwwLDcuMTQtMTFsNC44OS0xMi43TDE5NS43Miw3MSwxODMsNzUuODlBMzEuMjMsMzEuMjMsMCwwLDAsMTcyLDgzWiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/proof5.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/proof5.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NzggMzk5Ljk3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzZhNTJmZDt9LmNscy0ze2ZpbGw6IzFhZTViZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPk5ldHdvcmsgRWZmZWN0PC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwNS44OCwzNzBBMjAuODgsMjAuODgsMCwwLDEsODUsMzQ5LjA5VjMyNS4zMXMtMzQuNTEtMTcuOTEtMzQuNTEtNDBWMjI1LjU0YTM5LjkxLDM5LjkxLDAsMCwxLDUuMzYtMjBINTAuNWE0MCw0MCwwLDAsMC00MCw0MHY1OS43N2MwLDIyLjA5LDM0LjUxLDQwLDM0LjUxLDQwdjIzLjc4QTIwLjg4LDIwLjg4LDAsMCwwLDY1Ljg4LDM5MEg0MTIuMTJBMjAuODYsMjAuODYsMCwwLDAsNDMzLDM3MFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00MjcuNSwxOTZIMjQ5VjkzLjg5YTEwLDEwLDAsMSwwLTIwLDBWMTk2SDUwLjVDMjIuOTMsMTk2LDAsMjE4LDAsMjQ1LjU0djU5Ljc3YzAsMjIuMTcsMTUsNDEsMzUsNDcuNTN2MTYuMjVBMzAuOTIsMzAuOTIsMCwwLDAsNjUuODgsNDAwSDQxMi4xMkEzMC45MiwzMC45MiwwLDAsMCw0NDMsMzY5LjA5VjM1Mi44NGMyMC02LjU0LDM1LTI1LjM2LDM1LTQ3LjUzVjI0NS41NEM0NzgsMjE4LDQ1NS4wNywxOTYsNDI3LjUsMTk2Wk00MTIuMTIsMzgwSDY1Ljg4QTEwLjg5LDEwLjg5LDAsMCwxLDU1LDM2OS4wOVYzNTVINDIzdjE0LjEyQTEwLjksMTAuOSwwLDAsMSw0MTIuMTIsMzgwWk00NTcsMzA2YTMwLDMwLDAsMCwxLTMwLDMwSDUwYTMwLDMwLDAsMCwxLTMwLTMwVjI0NmEzMCwzMCwwLDAsMSwzMC0zMEg0MjdhMzAsMzAsMCwwLDEsMzAsMzBaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjQwLDEwMy44OUgyMzhhMzMuNjUsMzMuNjUsMCwwLDEtMzMuNjEtMzMuNjFWNjguMjFBMzMuNjUsMzMuNjUsMCwwLDEsMjM4LDM0LjZIMjQwYTMzLjY1LDMzLjY1LDAsMCwxLDMzLjYxLDMzLjYxdjIuMDdBMzMuNjUsMzMuNjUsMCwwLDEsMjQwLDEwMy44OVpNMjM4LDU0LjU5YTEzLjYzLDEzLjYzLDAsMCwwLTEzLjYxLDEzLjYydjIuMDdBMTMuNjMsMTMuNjMsMCwwLDAsMjM4LDgzLjg5SDI0MGExMy42MywxMy42MywwLDAsMCwxMy42MS0xMy42MVY2OC4yMUExMy42MywxMy42MywwLDAsMCwyNDAsNTQuNTlaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzEyLjUsMTEwLjY0YTEwLDEwLDAsMCwxLTctMTcuMTEsMzguMDYsMzguMDYsMCwwLDAsMC01My44MiwxMCwxMCwwLDAsMSwxNC4xMy0xNC4xNSw1OC4wNyw1OC4wNywwLDAsMSwuMDUsODIuMTJsLS4xOS4xN2E5LjksOS45LDAsMCwxLTYuOTMsMi43OVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zNTcuNTEsMTMzLjIzYTEwLDEwLDAsMCwxLTcuMDctMTcuMDcsNzAuMTgsNzAuMTgsMCwwLDAsMC05OS4xMkExMCwxMCwwLDAsMSwzNjQuNTgsMi45YTkwLjIxLDkwLjIxLDAsMCwxLDAsMTI3LjQsMTAsMTAsMCwwLDEtNy4wNywyLjkzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE2NS41LDExMC41N2ExMCwxMCwwLDAsMS03LjA3LTIuOTMsNTguMDcsNTguMDcsMCwwLDEsMC04Mi4xMWw3LjExLDcsNy4wNyw3LjA3YTM4LjA1LDM4LjA1LDAsMCwwLDAsNTMuODJsMCwwYTEwLDEwLDAsMCwxLTcuMDcsMTcuMDdaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTIwLjQ5LDEzMy4yM2E5LjkzLDkuOTMsMCwwLDEtNy4wNy0yLjkzLDkwLjIxLDkwLjIxLDAsMCwxLDAtMTI3LjRBMTAsMTAsMCwwLDEsMTI3LjU2LDE3YTcwLjE5LDcwLjE5LDAsMCwwLDAsOTkuMTMsMTAsMTAsMCwwLDEtNy4wNywxNy4wN1oiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik05My4yMywzMDUuNzZhMzEuMTQsMzEuMTQsMCwxLDEsMzEuMTMtMzEuMTMsMzEuMTQsMzEuMTQsMCwwLDEtMzEuMTMsMzEuMTNabTAtNDIuMjdhMTEuMTQsMTEuMTQsMCwxLDAsMTEuMTMsMTEuMTQsMTEuMTQsMTEuMTQsMCwwLDAtMTEuMTMtMTEuMTRaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTczLjkxLDMwNS43NmEzMS4xNCwzMS4xNCwwLDEsMSwzMS4xNC0zMS4xMywzMS4xMywzMS4xMywwLDAsMS0zMS4xNCwzMS4xM1ptMC00Mi4yN2ExMS4xNCwxMS4xNCwwLDEsMCwxMS4xNCwxMS4xNCwxMS4xNCwxMS4xNCwwLDAsMC0xMS4xNC0xMS4xNFoiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/proof6.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/proof6.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNDQgNDIwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Q0ZTFmNDt9LmNscy0ye2ZpbGw6IzFhZTViZTt9LmNscy0ze2ZpbGw6IzZhNTJmZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkJpZ2dlciBSZXdhcmRzPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExNy44OCwzMjguMjNhMjYuNCwyNi40LDAsMCwxLTI2LjQxLTI2LjQxVjEwSDg3Ljg4QTI2LjQxLDI2LjQxLDAsMCwwLDYxLjQ3LDM2LjQxVjMzMS44MmEyNi40LDI2LjQsMCwwLDAsMjYuNDEsMjYuNDFoMjIwYTI2LjQsMjYuNCwwLDAsMCwyNi40MS0yNi40MXYtMy41OVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02Ni4xMSwzODBBMjYuNDEsMjYuNDEsMCwwLDEsMzkuNywzNTMuNTlWNTcuMDZIMzYuMTFBMjYuNDIsMjYuNDIsMCwwLDAsOS43LDgzLjQ3VjM4My41OUEyNi40MSwyNi40MSwwLDAsMCwzNi4xMSw0MTBIMjYwLjgzYTI2LjQsMjYuNCwwLDAsMCwyNi40MS0yNi40MVYzODBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTA3Ljg4LDIzNC4xMmExMCwxMCwwLDAsMS0xMC0xMGMwLTQ4LDQwLTk5LjQsOTkuNDEtOTkuNCwyNi40MywwLDQ4LjUyLDEwLjYsNjQuNjYsMjQuMjVsLS4zOC0xNS4xOGExMCwxMCwwLDAsMSwyMC0uNWwxLDQwYTEwLDEwLDAsMCwxLTEyLjMyLDEyLjMzbC00MC0xYTEwLDEwLDAsMSwxLC4yNC0yMGguMjZsMTkuMTguNDhjLTEzLTExLjIxLTMxLjE2LTIwLjM4LTUyLjYzLTIwLjM4YTc3LjEsNzcuMSwwLDAsMC01Ny45MSwyNS45MmMtMTMuNDYsMTUtMjEuNSwzNS0yMS41LDUzLjQ5YTEwLDEwLDAsMCwxLTEwLDEwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEyNC4yLDMyNC43YTEwLDEwLDAsMCwxLTEwLTkuNzVsLTEtNDBhMTAsMTAsMCwwLDEsMTIuMzEtMTIuMzNsNDAsMWExMCwxMCwwLDEsMS0uNSwyMGwtMTkuMTgtLjQ4YzEzLDExLjIxLDMxLjE2LDIwLjM4LDUyLjY0LDIwLjM4YTc3LDc3LDAsMCwwLDU3LjktMjUuOTJjMTMuNDYtMTUsMjEuNS0zNSwyMS41LTUzLjQ4YTEwLDEwLDAsMCwxLDIwLDBjMCw0OC0zOS45NCw5OS40LTk5LjQsOTkuNC0yNi40MywwLTQ4LjUzLTEwLjYxLTY0LjY2LTI0LjI1bC4zOCwxNS4xN2ExMCwxMCwwLDAsMS05Ljc1LDEwLjI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTI3NS4wOSwzLjA5QTEuMzYsMS4zNiwwLDAsMSwyNzUsM2wtLjItLjE4YTYsNiwwLDAsMC0uNTMtLjQ4Yy0uMDYtLjA2LS4xMy0uMS0uMi0uMTZsLS41Ny0uNDJhMiwyLDAsMCwwLS4yNy0uMTcsNi4yNiw2LjI2LDAsMCwwLS41NS0uMzRMMjcyLjIsMWEzLjQyLDMuNDIsMCwwLDAtLjQzLS4yMUwyNzEsLjUyYy0uMDYsMC0uMTItLjA3LS4xNy0uMDlhNi42Miw2LjYyLDAsMCwwLTItLjQzLDIuMTcsMi4xNywwLDAsMS0uMjYsMEg4Ny44OEM2Ny44LDAsNTEsMTYuMzQsNTEsMzYuNDFWNDdIMzYuMTFBMzYuMjUsMzYuMjUsMCwwLDAsMCw4My4zOXYzMDAuMkEzNi4yLDM2LjIsMCwwLDAsMzYsNDIwSDI2MC44M0EzNi4yNCwzNi4yNCwwLDAsMCwyOTcsMzgzLjY4VjM2OGgxMC44OUEzNiwzNiwwLDAsMCwzNDQsMzMyLjExVjc5LjQ3YTkuOCw5LjgsMCwwLDAtMi42Mi02LjkxWk0yNzgsMzQuOTIsMzEwLjkyLDY5SDI3OFptLTEsMzQ4LjY3QTE2LjIxLDE2LjIxLDAsMCwxLDI2MSw0MDBIMzYuMTFBMTYuMTcsMTYuMTcsMCwwLDEsMjAsMzgzLjc2VjgzLjQ3QTE2LjIzLDE2LjIzLDAsMCwxLDM2LDY3SDUxVjMzMS44MkM1MSwzNTEuOSw2Ny44LDM2OCw4Ny44OCwzNjhIMjc3Wk0zMDcuODksMzQ4aC0yMjBjLTksMC0xNi44OC03LjEzLTE2Ljg4LTE2LjE4VjM2LjQxQzcxLDI3LjM2LDc4LjgzLDIwLDg3Ljg4LDIwSDI1OFY3OS40OUMyNTgsODUsMjYyLjM0LDg5LDI2Ny44Niw4OUgzMjRWMzMxLjgyQTE2LDE2LDAsMCwxLDMwOC4yMywzNDhaIi8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/tf1.svg":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/tf1.svg ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM5NzlmZWY7fS5jbHMtMntmaWxsOiM0MGY0ZDI7fS5jbHMtM3tmaWxsOiM2YTUyZmQ7fS5jbHMtNHtmaWxsOiMxNGUzYmE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5DcmVhdGUgUGF5bWVudCBBZGRyZXNzPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE4Ljc5LDIwLjE1YTEuNDUsMS40NSwwLDAsMS0xLS40M0wxMSwxMi45M0ExLjQ2LDEuNDYsMCwwLDEsMTMsMTAuODZsNi43OSw2Ljc5YTEuNDcsMS40NywwLDAsMSwwLDIuMDcsMS40MywxLjQzLDAsMCwxLTEsLjQzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE2LjIxLDI2LjM3SDcuMzJhMS40NywxLjQ3LDAsMCwxLDAtMi45M2g4Ljg5YTEuNDcsMS40NywwLDEsMSwwLDIuOTNaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDAuMTMsMzYuNzNhMS40OCwxLjQ4LDAsMCwxLS45MS0uMzJsLTcuNS02YTEuNDcsMS40NywwLDEsMSwxLjgzLTIuMjlsNy41LDZhMS40NywxLjQ3LDAsMCwxLS45MiwyLjYxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI1LDE3LjU4YTEuNDYsMS40NiwwLDAsMS0xLjQ2LTEuNDdWNy4zMmExLjQ2LDEuNDYsMCwwLDEsMi45MiwwdjguNzlBMS40NiwxLjQ2LDAsMCwxLDI1LDE3LjU4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMxLjIxLDIwLjE1YTEuNDYsMS40NiwwLDAsMS0xLTIuNTFsNy4zMS03LjIyYTEuNDcsMS40NywwLDEsMSwyLjA2LDIuMDlsLTcuMzIsNy4yMmExLjQ0LDEuNDQsMCwwLDEtMSwuNDJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUsNDEuMjFhMS40NiwxLjQ2LDAsMCwxLTEuNDYtMS40NlYzMy42OWExLjQ2LDEuNDYsMCwwLDEsMi45MiwwdjYuMDZBMS40NiwxLjQ2LDAsMCwxLDI1LDQxLjIxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTI1LDM1LjE2QTEwLjI2LDEwLjI2LDAsMSwxLDM1LjI1LDI0LjksMTAuMjcsMTAuMjcsMCwwLDEsMjUsMzUuMTZabTAtMTcuNThhNy4zMyw3LjMzLDAsMSwwLDcuMzIsNy4zMkE3LjMyLDcuMzIsMCwwLDAsMjUsMTcuNThaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMjUsOC43OWE0LjQsNC40LDAsMSwxLDQuMzktNC40QTQuNCw0LjQsMCwwLDEsMjUsOC43OVptMC01Ljg2YTEuNDcsMS40NywwLDEsMCwxLjQ2LDEuNDZBMS40NiwxLjQ2LDAsMCwwLDI1LDIuOTNaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNOC44OSwxNC42NWE1Ljg2LDUuODYsMCwxLDEsNS44Ni01Ljg2LDUuODcsNS44NywwLDAsMS01Ljg2LDUuODZabTAtOC43OWEyLjkzLDIuOTMsMCwxLDAsMi45MywyLjkzQTIuOTMsMi45MywwLDAsMCw4Ljg5LDUuODZaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNDIuNjgsMTQuNjVBNy4zMyw3LjMzLDAsMSwxLDUwLDcuMzJhNy4zNCw3LjM0LDAsMCwxLTcuMzIsNy4zM1ptMC0xMS43MmE0LjQsNC40LDAsMSwwLDQuMzksNC4zOSw0LjQsNC40LDAsMCwwLTQuMzktNC4zOVoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik00LjM5LDI5LjNhNC40LDQuNCwwLDEsMSw0LjQtNC40LDQuNCw0LjQsMCwwLDEtNC40LDQuNFptMC01Ljg2QTEuNDcsMS40NywwLDEsMCw1Ljg2LDI0LjlhMS40NiwxLjQ2LDAsMCwwLTEuNDctMS40NloiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik00Mi42OCw0MS4xMWE0LjQsNC40LDAsMCwxLTQuNC00LjM5LDQuNDksNC40OSwwLDAsMSwxLjI3LTMuMTMsNC4yOCw0LjI4LDAsMCwxLDYuMjYsMCw0LjUyLDQuNTIsMCwwLDEsMS4yNiwzLjEzLDQuNCw0LjQsMCwwLDEtNC4zOSw0LjM5Wm0wLTZhMS41NiwxLjU2LDAsMCwwLTEuNDcsMS41NiwxLjQ3LDEuNDcsMCwwLDAsMi45MywwLDEuNTUsMS41NSwwLDAsMC0xLjQ2LTEuNTZaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjUsNTBhNS44Niw1Ljg2LDAsMSwxLDUuODYtNS44NkE1Ljg3LDUuODcsMCwwLDEsMjUsNTBabTAtOC43OWEyLjkzLDIuOTMsMCwxLDAsMi45MywyLjkzQTIuOTMsMi45MywwLDAsMCwyNSw0MS4yMVoiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/tf2.svg":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/tf2.svg ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQwZjRkMjt9LmNscy0ye2ZpbGw6IzZhNTJmZDt9LmNscy0ze2ZpbGw6IzE0ZTNiYTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzayBmb3IgUGF5bWVudDwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01OC40Myw3My40M0ExNSwxNSwwLDAsMSw0Ny44Miw2OUw0LjM5LDI1LjYxQTE1LDE1LDAsMCwxLDI1LjYsNC40TDY5LDQ3LjgyYTE1LDE1LDAsMCwxLTEwLjYsMjUuNjFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTg2LDIwMWExNSwxNSwwLDAsMS0xMC42MS00LjM5bC00Mi43Mi00Mi43M2ExNSwxNSwwLDEsMSwyMS4yMi0yMS4yMWw0Mi43MSw0Mi43MkExNSwxNSwwLDAsMSwxODYsMjAxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ1My41Nyw3My40M0ExNSwxNSwwLDAsMSw0NDMsNDcuODJMNDg2LjM5LDQuNEExNSwxNSwwLDAsMSw1MDcuNiwyNS42MUw0NjQuMTgsNjlhMTUsMTUsMCwwLDEtMTAuNjEsNC40WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMyNiwyMDFhMTUsMTUsMCwwLDEtMTAuNjEtMjUuNjFsNDIuNzItNDIuNzJhMTUsMTUsMCwxLDEsMjEuMjIsMjEuMjFsLTQyLjcyLDQyLjczQTE1LDE1LDAsMCwxLDMyNiwyMDFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTUsNTEyQTE1LDE1LDAsMCwxLDQuMzksNDg2LjM5TDQ3LjgyLDQ0M0ExNSwxNSwwLDEsMSw2OSw0NjQuMThMMjUuNiw1MDcuNjFBMTQuOTEsMTQuOTEsMCwwLDEsMTUsNTEyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE0My4yOCwzODMuNzJhMTUsMTUsMCwwLDEtMTAuNjEtMjUuNjFsNDIuNzItNDIuNzJhMTUsMTUsMCwwLDEsMjEuMjIsMjEuMjJsLTQyLjcyLDQyLjcyYTE1LDE1LDAsMCwxLTEwLjYxLDQuMzlaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDk3LDUxMmExNSwxNSwwLDAsMS0xMC42MS00LjM5TDQ0Myw0NjQuMThBMTUsMTUsMCwwLDEsNDY0LjE4LDQ0M2w0My40Miw0My40M0ExNSwxNSwwLDAsMSw0OTcsNTEyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM2OC43MiwzODMuNzJhMTUsMTUsMCwwLDEtMTAuNjEtNC4zOWwtNDIuNzItNDIuNzJhMTUsMTUsMCwwLDEsMjEuMjItMjEuMjJsNDIuNzIsNDIuNzJhMTUsMTUsMCwwLDEtMTAuNjEsMjUuNjFaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzYxLDE5NS43M2MwLS4xNSwwLS4yOSwwLS40NCwwLS4zOS0uMDUtLjc4LS4xLTEuMTcsMC0uMDUsMC0uMDksMC0uMTRxLS4wOS0uNi0uMjEtMS4xN2MwLS4xMSwwLS4yMS0uMDctLjMxYTEyLjQxLDEyLjQxLDAsMCwwLS4zNS0xLjIzLjA4LjA4LDAsMCwwLDAtLjA1Yy0uMTMtLjM5LS4yOC0uNzctLjQ0LTEuMTUsMC0uMDktLjA4LS4xOS0uMTMtLjI5LS4xNy0uMzctLjM1LS43NS0uNTUtMS4xMWwtLjEyLS4xOWMtLjE3LS4zLS4zNi0uNTktLjU1LS44OGwtLjI0LS4zNGExMC4zOSwxMC4zOSwwLDAsMC0uNzItLjkybC0uMjUtLjI5Yy0uMi0uMjMtLjQxLS40NS0uNjMtLjY3bC0uMzEtLjNjLS4yOS0uMjctLjU5LS41My0uODktLjc4YTMuNTUsMy41NSwwLDAsMC0uMzEtLjIzYy0uMjctLjIxLS41Ni0uNDEtLjg2LS42MWwtLjI0LS4xNi0uMDktLjA2Yy0uMzQtLjIxLS43LS40MS0xLjA2LS41OWwtLjExLS4wNi05MC00NWExNSwxNSwwLDAsMC0xMy40MiwwbC05MCw0NS0uMTEuMDZjLS4zNi4xOC0uNzIuMzgtMS4wNy41OWwtLjA4LjA2LS4yNS4xNmMtLjI5LjItLjU4LjQtLjg2LjYxbC0uMy4yM3EtLjQ3LjM4LS45Ljc4bC0uMzEuM2MtLjIyLjIyLS40Mi40NC0uNjMuNjdsLS4yNS4yOXEtLjM3LjQ1LS43Mi45M2wtLjIzLjMzYy0uMTkuMjktLjM4LjU4LS41NS44OGwtLjEyLjE5Yy0uMi4zNi0uMzguNzQtLjU2LDEuMTFsLS4xMi4yOWMtLjE2LjM4LS4zMi43Ni0uNDUsMS4xNSwwLDAsMCwwLDAsLjA1YTEyLjQxLDEyLjQxLDAsMCwwLS4zNSwxLjIzLDIuODIsMi44MiwwLDAsMC0uMDcuMzFjLS4wOC4zOC0uMTYuNzgtLjIxLDEuMTcsMCwuMDUsMCwuMDksMCwuMTQtLjA1LjM5LS4wOC43OC0uMSwxLjE3LDAsLjE1LDAsLjI5LDAsLjQ0czAsLjE4LDAsLjI3VjMxNmExNSwxNSwwLDAsMCw4LjI5LDEzLjQybDkwLDQ1LC4yNy4xMXEuNTQuMjUsMS4xMS40OGwuNDUuMTZjLjM4LjE0Ljc2LjI0LDEuMTUuMzVsLjQ1LjExcS42MS4xNCwxLjIzLjIxbC40LjA3Yy41NCwwLDEuMDkuMDksMS42NS4wOXMxLjExLDAsMS42NS0uMDlsLjQtLjA3cS42MS0uMDcsMS4yMy0uMjFsLjQ1LS4xMWMuMzktLjExLjc3LS4yMSwxLjE1LS4zNWwuNDUtLjE2cS41Ny0uMjIsMS4xMS0uNDhsLjI3LS4xMSw5MC00NUExNSwxNSwwLDAsMCwzNjEsMzE2VjE5NmMwLS4wOSwwLS4xOCwwLS4yN1ptLTEwNS0yOEwzMTIuNDYsMTk2LDI1NiwyMjQuMjMsMTk5LjU0LDE5NlptLTc1LDUyLjUsNjAsMzB2ODYuNDZsLTYwLTMwWm0xNTAsODYuNDYtNjAsMzBWMjUwLjI3bDYwLTMwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTEyMi4wNywxNjdhNDQuODUsNDQuODUsMCwwLDEtMzEuODItMTMuMTVMNDcuODIsMTExLjQ2YTQ1LDQ1LDAsMCwxLDYzLjY0LTYzLjY0bDQyLjQzLDQyLjQzQTQ1LDQ1LDAsMCwxLDEyMi4wNywxNjdaTTc5LjY0LDY0LjY1QTE1LDE1LDAsMCwwLDY5LDkwLjI1bDQyLjQyLDQyLjQyYTE1LDE1LDAsMSwwLDIxLjIxLTIxLjIxTDkwLjI1LDY5YTE1LDE1LDAsMCwwLTEwLjYxLTQuMzhaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMzg5LjkzLDE2N2E0NSw0NSwwLDAsMS0zMS44Mi03Ni43OWw0Mi40My00Mi40M2E0NSw0NSwwLDAsMSw2My42NCw2My42NGwtNDIuNDMsNDIuNDNBNDQuODUsNDQuODUsMCwwLDEsMzg5LjkzLDE2N1pNNDMyLjM2LDY0LjY1QTE1LDE1LDAsMCwwLDQyMS43NSw2OWwtNDIuNDIsNDIuNDNhMTUsMTUsMCwxLDAsMjEuMjEsMjEuMjFMNDQzLDkwLjI1YTE1LDE1LDAsMCwwLTEwLjYxLTI1LjZaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNzkuNjQsNDc3LjM0YTQ1LDQ1LDAsMCwxLTMxLjgyLTc2LjhsNDIuNDMtNDIuNDNhNDUsNDUsMCwwLDEsNjMuNjQsNjMuNjRsLTQyLjQzLDQyLjQzYTQ0Ljg3LDQ0Ljg3LDAsMCwxLTMxLjgyLDEzLjE2Wm00Mi40My0xMDIuNGExNC45MiwxNC45MiwwLDAsMC0xMC42MSw0LjM5TDY5LDQyMS43NUExNSwxNSwwLDEsMCw5MC4yNSw0NDNsNDIuNDItNDIuNDJhMTUsMTUsMCwwLDAtMTAuNi0yNS42WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQzMi4zNiw0NzcuMzRhNDQuODcsNDQuODcsMCwwLDEtMzEuODItMTMuMTZsLTQyLjQzLTQyLjQzYTQ1LDQ1LDAsMCwxLDYzLjY0LTYzLjY0bDQyLjQzLDQyLjQzYTQ1LDQ1LDAsMCwxLTMxLjgyLDc2LjhabS00Mi40My0xMDIuNGExNSwxNSwwLDAsMC0xMC42LDI1LjZMNDIxLjc1LDQ0M0ExNSwxNSwwLDEsMCw0NDMsNDIxLjc1bC00Mi40My00Mi40MmExNC45NCwxNC45NCwwLDAsMC0xMC42MS00LjM5WiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/tf3.svg":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/tf3.svg ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTEuMSA1MTIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNDBmNGQyO30uY2xzLTJ7ZmlsbDojNzE3YmRiO30uY2xzLTN7ZmlsbDojNmE1MmZkO30uY2xzLTR7ZmlsbDojMTRlM2JhO308L3N0eWxlPjwvZGVmcz48dGl0bGU+R2V0IFBhaWQ8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzI2LDg1Ljg1Yy04LjM1LTUuMzctMTYuMTMtMTEuMzEtMjAuMzEtMjAuNzZhMS43NywxLjc3LDAsMCwxLS43Ni0uMzJxLTI5LjQ4LDI5Ljg1LTU5LDU5LjdhMTcuODEsMTcuODEsMCwwLDAtNS4zNCwxMy40N2MuMTQsOC42NiwwLDE3LjMyLS4wNywyNmwtLjExLDMzLjUuMzksMy41N3EwLDksMCwxOGMtLjA1LDIuMzMtLjIzLDQuNjYtLjE0LDcsLjMyLDguNTYsNi43NCwxNSwxNC45MiwxNXMxNC42Ny02LjM1LDE1LTE0LjljLjE3LTQuMzIuMTItOC42Ni4xNy0xM3EtLjE0LTEwLjUtLjI2LTIxLC4xNy02LjIzLjM1LTEyLjQ0Yy0uMTQtMS44OC0uMjctMy43NS0uNC01LjYzLjA2LTksLjI4LTE4LC4xLTI2LjkxYTEwLjQxLDEwLjQxLDAsMCwxLDMuMzEtOC4yOUMyOTEuMzQsMTIxLjIzLDMwOC42NSwxMDMuNTEsMzI2LDg1Ljg1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIxMC44NywxNDkuNjJsLS4zOS01LjYzLjA2LTU2LjMxYy02LjUzLDEuNDQtMTMuMDgsMi43LTE5LjgzLDIuMjRhMTkuNDQsMTkuNDQsMCwwLDEtNC43LDYuNDYsMTkuNDQsMTkuNDQsMCwwLDAsNC43LTYuNDYsNiw2LDAsMCwwLS4yMi0uODNjLTMuMzguNDktNi40Ni0xLTkuNzEtMS40bC4wNiwxMi4zMi0uMzksNDkuNTUuMzMsMjEuNDMtLjI1LDRxMCw0LjA1LDAsOC4wOGwuMyw1LjkyYy0uMDYsMTEuNjYtLjE3LDIzLjMyLS4xNywzNSwwLDEwLjE2LDYuMDUsMTYuOTUsMTUsMTdzMTUtNi43OSwxNS0xNi45cS4xLTIwLjQ5LjE0LTQxLS4xNC0xMC41MS0uMjYtMjFRMjEwLjcxLDE1NS44MywyMTAuODcsMTQ5LjYyWm0tMjYuMzMtNTJhMjQuODEsMjQuODEsMCwwLDEtMi4xMSwxLjQ4QTI0LjgxLDI0LjgxLDAsMCwwLDE4NC41NCw5Ny42MloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNDAuNDMsMTk3LjQycS4wNi0xNi43NS4xMS0zMy41bC0yOS42Ny0xNC4zLS4zNCwxMi40NHEuMTQsMTAuNTEuMjYsMjFaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTY1LjY0LDE5MGwxNC45LTYuODZxMC00LDAtOC4wOGMuMDgtMS4zNC4xNi0yLjY4LjI1LTRsLS4zMy0yMS40My0yOS42NywxNC4zNnEuMDYsMTYuNzQuMTEsMzMuNUExMTMuMzUsMTEzLjM1LDAsMCwwLDE2NS42NCwxOTBaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMzYwLjUxLDM3M2wwLTE5cTAtMzUuNDksMC03MSwwLTkuNTEsMC0xOWgwYy4wNi0xMC4zMy4yMy0yMC42Ni4xMi0zMWExMy41NCwxMy41NCwwLDAsMC03LjMyLTEyLjI4Yy01LjA4LTIuNzktMTAuNDEtNS4xMy0xNS42My03LjY3YTQuNTIsNC41MiwwLDAsMS0uMTYuODYsNC41Miw0LjUyLDAsMCwwLC4xNi0uODYsNjIuNjcsNjIuNjcsMCwwLDAtMTItNmMtMTgtOS41OC0zNi4zNC0xOC42My01NC43Ny0yNy40MWwtLjM1LDEyLjQ0LjI2LDIxLDMzLjcyLDE2LjQyYTcuMzYsNy4zNiwwLDAsMSwxLjYzLTIuNTEsNy4zNiw3LjM2LDAsMCwwLTEuNjMsMi41MWw3LjI2LDQuMDUtMjkuMjQsMTQuODlhNC42OCw0LjY4LDAsMCwxLDAsLjkyLDQuNjgsNC42OCwwLDAsMCwwLS45MmMtMi44MiwxLjM2LTUuNjYsMi42OS04LjQ2LDQuMDhxLTM3LjE1LDE4LjU3LTc0LjI3LDM3LjIzYy0zLDEuNTEtNS4zNywxLjYtOC4zMSwwLTQuNDktMi40Ni05LjIxLTQuNDktMTMuODQtNi42OS00LjE4LTIuMy04LjA1LTUuMzEtMTMtNS45MWExNC4xNSwxNC4xNSwwLDAsMC0yLjU5LTIuMTZxLTIyLjE4LTExLTQ0LjQyLTIxLjkzYTYxLjczLDYxLjczLDAsMCwwLTEyLTZMNzkuMzEsMjMzLjM2bDQxLjIzLTIwLjI3cTAtMTYuNzYtLjExLTMzLjVsLTM5Ljk0LDIwYy0xMy45NSw2Ljg5LTI3Ljk1LDEzLjY3LTQxLjgyLDIwLjcxLTUuMjgsMi42OC04LDcuMzUtOCwxMy4zNSwwLDUuMTMuMTEsMTAuMjcuMTYsMTUuNHEwLDM2LDAsNzIsMCw5LjUxLDAsMTl2NzFjLjIxLDUuNzItMS40OCwxMS42MiwxLjYyLDE3LjA3Ljc0LDMuMzYsMy4xNCw1LjQ4LDYsNi45LDEzLjM4LDYuNzUsMjYuODQsMTMuMzUsNDAuMjgsMjBxOC41Mi04Ljc2LDE3LTE3LjUtOC41Myw4LjczLTE3LDE3LjVsMTIuOCw2LjU1TDEzOC42Nyw0ODVsMTIuOCw2LjU0YTcsNywwLDAsMSwuMTUtLjY5LDcsNywwLDAsMC0uMTUuNjljMTEuNDcsNS44LDIzLDExLjU2LDM0LjM5LDE3LjQ2LDEuMTQuNTksMy43Ny4zMSwyLjgsM2gxNGMtMS41NS0yLC43Mi0yLDEuNDgtMi40MSwzLjQ1LTIsNy0zLjc3LDEwLjUxLTUuNjMsMTAuMjMtNC41MywyMC4xOS05LjYsMzAtMTVoMGM0Ljc3LTIuMjksOS41OC00LjUyLDE0LjMyLTYuODhxNDUuNDUtMjIuNjgsOTAuOS00NS4zNmM2LjQ4LTMuMjEsMTAuNzUtNy44LDEwLjc1LTE1LjM1QzM2MC42NSw0MDUuMjYsMzYwLjU2LDM4OS4xNCwzNjAuNTEsMzczWk0xODAuNyw0NjguODdjLjE3LDMuMzMtLjkyLDMuNzEtMy41NywyLjEyYTM2LjU4LDM2LjU4LDAsMCwwLTQuNDgtMmMtMi4yNSwyLjYzLTQuNjUsNS4xMy03LjEzLDcuNTMsMi40OC0yLjQsNC44OC00LjksNy4xMy03LjUzYTkyLjQ1LDkyLjQ1LDAsMCwwLTE0LTdsLTQ2Ljg1LTIzLjUxTDk4LjY2LDQzMmMtMTAuNzUtNS40Ny0yMS40LTExLjE2LTMyLjMxLTE2LjI5LTQuMy0yLTYuNy00LjMxLTUuNzItOS4yNGExNS41MSwxNS41MSwwLDAsMC0uMTItMy40NmwwLTE5cTAtMzUuNDksMC03MWwwLTE5VjI1Ny44N2wyNCwxMS42NGgwTDk3LjY2LDI3Nmw0Ni44NCwyMy41MUwxNTcuNjYsMzA2YzYuMzMsMy4yNywxMi41Niw2LjczLDE5LDkuNzIsMywxLjM5LDQuMTQsMyw0LjA3LDYuMzUtLjIxLDkuNjQsMCwxOS4yOC4wNywyOC45MnEwLDkuNTEsMCwxOSwwLDM1LjQ5LDAsNzEsMCw5LDAsMThDMTgwLjc4LDQ2Mi4zLDE4MC41NCw0NjUuNiwxODAuNyw0NjguODdabTEzNi40Mi00OS4yNGMtNS4wNSwxLjgxLTkuNjUsNC45LTE0LjQ1LDcuNDFsLTM2LjkzLDE4LjI3YTQuOCw0LjgsMCwwLDEtLjMzLDEuNzksNC44LDQuOCwwLDAsMCwuMzMtMS43OWMtMS4xOC41Ny0yLjM2LDEuMTMtMy41MywxLjcxbC01MS43LDI1LjcxVjQzM2wwLTE5cTAtMzUuNDksMC03MSwwLTkuNTEsMC0xOWMtLjktNS4xMywxLjc2LTcuNyw2LjI5LTkuMzEsMi40Mi0uODYsNC41OS0yLjQ2LDYuODctMy43MmwzOC45My0xOS4yNyw2OC4yNC0zMy45VjI5MXEwLDkuNTEsMCwxOSwwLDM1LjQ5LDAsNzEsMCw5LDAsMThDMzMzLjQ3LDQxMC42OSwzMjcsNDE2LjA2LDMxNy4xMiw0MTkuNjNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTUwLjQ4LDIwNGMuMTQtMi4xOS4yNy00LjM4LjQxLTYuNTdxLS4wNi0xNi43NS0uMTEtMzMuNS0uMjEtMTUtLjQzLTI5LjljLS41OC01Ljg4LTQuNTgtOS40Ny04LjcxLTEzcS0xNi44Ny0xOC0zNC43LTM1LjE2QTg2LjYyLDg2LjYyLDAsMCwwLDk2Ljg1LDc1LjYxTDg2LjQxLDY0Ljc2QTU3LjUsNTcuNSwwLDAsMSw2NS4zMiw4NS44NUw3Ni42Myw5Ny4wOWE4MS4yMiw4MS4yMiwwLDAsMCw5Ljk0LDEwLjEycTE3LjA2LDE3LjM5LDM0LjEsMzQuNzkuMDksOSwuMTcsMTgtLjIxLDkuOC0uNDEsMTkuNTguMDYsMTYuNzUuMTEsMzMuNWMuNzMsNS42Mi0xLDExLjM5LDEuMDYsMTYuOTMsMS4zNyw1Ljg1LDUuMTIsOS4xOSwxMC45MiwxMC4zNywxMSwyLDE4LjQ4LTUuMiwxOC0xNy4zOFoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik00NS40NCwwQTQ1LjQ1LDQ1LjQ1LDAsMSwwLDkwLjg5LDQ1LjQ0LDQ1LjQ1LDQ1LjQ1LDAsMCwwLDQ1LjQ0LDBabTAsNjEuMDhBMTUuNjQsMTUuNjQsMCwxLDEsNjEuMDgsNDUuNDQsMTUuNjMsMTUuNjMsMCwwLDEsNDUuNDQsNjEuMDhaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTk1LjY2LDBhNDUuNDUsNDUuNDUsMCwxLDAsNDUuNDUsNDUuNDRBNDUuNDUsNDUuNDUsMCwwLDAsMTk1LjY2LDBabTAsNjEuMDhBMTUuNjQsMTUuNjQsMCwxLDEsMjExLjMsNDUuNDQsMTUuNjMsMTUuNjMsMCwwLDEsMTk1LjY2LDYxLjA4WiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTM0NS42NiwwQTQ1LjQ1LDQ1LjQ1LDAsMSwwLDM5MS4xLDQ1LjQ0LDQ1LjQ0LDQ1LjQ0LDAsMCwwLDM0NS42NiwwWm0wLDYxLjA4QTE1LjY0LDE1LjY0LDAsMSwxLDM2MS4zLDQ1LjQ0LDE1LjY0LDE1LjY0LDAsMCwxLDM0NS42Niw2MS4wOFoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yNzAuODcsMzI5LjI5YTI3LjIzLDI3LjIzLDAsMSwwLDI3LjIzLDI3LjIyQTI3LjIyLDI3LjIyLDAsMCwwLDI3MC44NywzMjkuMjlabTAsMzYuNTlhOS4zNyw5LjM3LDAsMSwxLDkuMzctOS4zN0E5LjM3LDkuMzcsMCwwLDEsMjcwLjg3LDM2NS44OFoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xMjMuNjYsMzI5LjI5YTI3LjIzLDI3LjIzLDAsMSwwLDI3LjIzLDI3LjIyQTI3LjIyLDI3LjIyLDAsMCwwLDEyMy42NiwzMjkuMjlabTAsMzYuNTlhOS4zNyw5LjM3LDAsMSwxLDkuMzctOS4zN0E5LjM3LDkuMzcsMCwwLDEsMTIzLjY2LDM2NS44OFoiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/crypto/tf4.svg":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/crypto/tf4.svg ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA0Ni44OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0MGY0ZDI7fS5jbHMtMntmaWxsOiM2YTUyZmQ7fS5jbHMtM3tmaWxsOiMxNGUzYmE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5HZXQgUGF5bWVudCBOb3RpZmljYXRpb248L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTYuOTQsMzQuNTRxLTIsMy00LDZhMS43NCwxLjc0LDAsMCwxLTEuNTYuODNjLTEsMC0yLDAtMywwLDAsMCwwLC4wNiwwLC4wOWEzLjc3LDMuNzcsMCwwLDEsLjE0LDIuNDZjMCwuMTItLjA2LjI1LS4wOC4zOGEyNi4xNywyNi4xNywwLDAsMCw0LjE1LS4xMkE0LDQsMCwwLDAsMTUsNDIuNjhhMjIuMzksMjIuMzksMCwwLDAsMS43Ny0yLjYzbDIuODItNC4xN1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MS40LDQzLjQ3YTQsNCwwLDAsMSwwLTEuNTcsMy41LDMuNSwwLDAsMC0uNDkuMzcsMy41LDMuNSwwLDAsMSwuNDktLjM3bC4xNS0uNThoLTNhMS41OCwxLjU4LDAsMCwxLTEuNC0uNzNsLS41OS0uODRhNy44Myw3LjgzLDAsMCwwLS43OS0xLjE4Yy0uODQtMS4zNC0xLjcyLTIuNjUtMi42Mi0zLjk0TDMzLDM0LjUzbC0uNzkuNDloMGExNS4wNiwxNS4wNiwwLDAsMC0xLjc2Ljg2bC40OC42NWMuODcsMS40LDEuNzksMi43NiwyLjczLDQuMTFhOCw4LDAsMCwwLC44LDEuMTlBNC41MSw0LjUxLDAsMCwwLDM5LDQ0LjI0aDIuNDlDNDEuNTIsNDQsNDEuMzYsNDMuNzUsNDEuNCw0My40N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MS41MiwzYy0uODYsMC0xLjczLDAtMi41OSwwYTMuNjYsMy42NiwwLDAsMC0xLjM2LjExQTMuOCwzLjgsMCwwLDAsMzUsNC42M2EzMywzMywwLDAsMC0yLjE0LDMuMkwzMC40LDExLjRsMi42NiwxLjM0YzEuMzEtMiwyLjYzLTMuOTMsMy45My01LjkxQTEuNzYsMS43NiwwLDAsMSwzOC42Myw2YzEsMCwxLjkzLDAsMi44OSwwQTUuMzYsNS4zNiwwLDAsMSw0MS41MiwzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE5LjIxLDEwLjg4cS0xLjMyLTIuMS0yLjc1LTQuMTJhNy43Nyw3Ljc3LDAsMCwwLS43OC0xLjE4LDQuNSw0LjUsMCwwLDAtNC41Mi0yLjUzSDguNDdjLjA2LjIyLjExLjQ1LjE2LjY3bDAsLjJjLjIzLjU2LDAsMS4xMSwwLDEuNjdhLjA3LjA3LDAsMCwwLDAsLjA2bC0uMDcuMTNhMS42MiwxLjYyLDAsMCwwLDAsLjE5YzEsMCwyLDAsMywwQTEuNjUsMS42NSwwLDAsMSwxMyw2Ljc4Yy4yLjMuNDEuNTguNjEuODdhOC4zNSw4LjM1LDAsMCwwLC44LDEuMmMuODEsMS4zLDEuNjcsMi41NywyLjU1LDMuODIuMTQuMTIuMjcsMCwuNDEsMGwuNzktLjQ5YTUuMjQsNS4yNCwwLDAsMCwxLjQ3LS43NVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zOC4yNCwyOS4yNFYyMC40aDBWMTguNTRjMC0uNzcsMC0xLjUzLDAtMi4yOUExLjM1LDEuMzUsMCwwLDAsMzcuNTEsMTVjLS42Ni0uMzUtMS4zNC0uNjYtMi0xYTUuNjYsNS42NiwwLDAsMC0xLjE4LS41OWwtMS4yNi0uN0wzMC40LDExLjRsLS43OS0uMzJhNi4yLDYuMiwwLDAsMC0xLjE4LS41OWMtLjk0LS40OC0xLjg3LTEtMi44Mi0xLjQzYTEuMzIsMS4zMiwwLDAsMC0xLjIyLDBsLTMuMjIsMS42My0xLjU3LjcxYTUuMjQsNS4yNCwwLDAsMS0xLjQ3Ljc1bC0uNzkuNDloMGMtLjE0LDAtLjI3LjE1LS40MSwwLDAsLjItLjIzLjIyLS4zNy4yOUwxMi42OCwxNC45YTEuNTQsMS41NCwwLDAsMC0uOTMsMS41M2MwLC42LDAsMS4yMSwwLDEuODF2MTAuN2MwLC42NywwLDEuMzUsMCwyYTEuNDUsMS40NSwwLDAsMCwuODEsMS4zNWMuNjcuMzUsMS4zNS42NywyLDFsMS4yOS42NCwxLjA3LjU5LDIuNjYsMS4zNC44Ny4zN2gwbDEuMjkuNjRjLjg5LjQ1LDEuNzcuOTIsMi42NiwxLjM1YTEuMjcsMS4yNywwLDAsMCwxLjE0LDBsMy42Ni0xLjg1LDEuMTgtLjUyQTE1LjA2LDE1LjA2LDAsMCwxLDMyLjE2LDM1bC43OS0uNDkuMTMuMDljMC0uMjEuMjItLjIyLjM1LS4yOSwxLjI4LS42NSwyLjU2LTEuMjksMy44NS0xLjkyYTEuNjIsMS42MiwwLDAsMCwxLTEuNjFDMzguMjQsMzAuMjgsMzguMjQsMjkuNzYsMzguMjQsMjkuMjRabS0xMy41Ny0xN2EuNjQuNjQsMCwwLDEsLjY4LDBjLjMzLjE4LjY3LjMzLDEsLjQ5bDEuMjkuNjNjMS41MS44MSwzLjA1LDEuNTcsNC42LDIuMzFsMSwuNWMuMS4wNS4yMy4wOC4xNS4yNGEuODkuODksMCwwLDAtLjQuMmwtMy44NCwxLjljLTEuMjcuNjMtMi41MywxLjI1LTMuNzksMS44OWEuNjIuNjIsMCwwLDEtLjYzLDBjLTEtLjUtMi0xLTIuOTMtMS40NWE2Ljg0LDYuODQsMCwwLDAtMS4xOC0uNTlsLTMuOTUtMmMwLS4xOC4xNy0uMTguMjgtLjIzQzE5LjQ5LDE0Ljc5LDIyLjA5LDEzLjUsMjQuNjcsMTIuMTlaTTE3LjgzLDMxLjdhNS44NCw1Ljg0LDAsMCwwLTEuMTctLjU5LDEzLjA4LDEzLjA4LDAsMCwwLTEuMzQtLjY5Ljg3Ljg3LDAsMCwxLS42NC0xYy4wNS0xLDAtMi4wOCwwLTMuMTJWMTguNjdsMy44MywxLjg4LDEuMjkuNjRjLjkxLjQ2LDEuOCwxLDIuNzQsMS4zNy43NC4zMiwxLjE3LjczLDEsMS41N1YzNC40NGMtLjQsMC0uNjUtLjMyLTEtLjM5QzIxLDMzLjIzLDE5LjQzLDMyLjQzLDE3LjgzLDMxLjdabTguNjMsMi44MVYyMy4zNWMwLS40Ni40Ni0uNC42OC0uNjFsOC4xOC00LjA3VjMwYy0uMDYuMTQtLjIzLjE1LS4zMi4yNVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik00LjQ2LDBBNC40Niw0LjQ2LDAsMSwwLDguOTIsNC40Niw0LjQ2LDQuNDYsMCwwLDAsNC40NiwwWm0wLDZBMS41NCwxLjU0LDAsMSwxLDYsNC40NiwxLjUzLDEuNTMsMCwwLDEsNC40Niw2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQuNDYsMzhhNC40Niw0LjQ2LDAsMSwwLDQuNDYsNC40NkE0LjQ2LDQuNDYsMCwwLDAsNC40NiwzOFptMCw2QTEuNTQsMS41NCwwLDEsMSw2LDQyLjQyLDEuNTMsMS41MywwLDAsMSw0LjQ2LDQ0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQ1LjU0LDBBNC40Niw0LjQ2LDAsMSwwLDUwLDQuNDYsNC40Niw0LjQ2LDAsMCwwLDQ1LjU0LDBabTAsNmExLjU0LDEuNTQsMCwxLDEsMC0zLjA3LDEuNTQsMS41NCwwLDAsMSwwLDMuMDdaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNDUuNTQsMzhBNC40Niw0LjQ2LDAsMSwwLDUwLDQyLjQyLDQuNDYsNC40NiwwLDAsMCw0NS41NCwzOFptMCw2YTEuNTQsMS41NCwwLDEsMSwwLTMuMDcsMS41NCwxLjU0LDAsMCwxLDAsMy4wN1oiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/author-1.jpg":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/author-1.jpg ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA7ADsBAREA/8QAGwABAAICAwAAAAAAAAAAAAAAAAQFAgcDBgj/xAAkEAABBQACAgICAwAAAAAAAAABAAIDBAUGERIhByMxURMVIv/aAAgBAQAAPwD1AiIiIiIiIiIiIiIiIo+haFGhZuuMYFeF8pMsgjYPFpP+nH00evZPoLQ2TzT5PzcV2FyPkuhc22swb1/RzhS0Gx0bjpmPkpRw1I/KQvrv7jcyfpha5hkPatcP5y2qWbxensYZv2uSa+lj0rVmyylI41tJ1aOWzF4fUHwhri5o6MxbEGNMsYVc/nXydmN3DY3f7C3rZ+tqYApWqNupXq178cR6ayvG/wDmjisRBgdNM2R7Xh3TumrYHxNyjV5HHyepo2tK5BibYoUrmnRFO3YhNOtOTLEI4/FwknkaPrYfFrex32T31EQgEdEdgqhg4BwSrlWcKtwrBhzbkjZbNOPNhbBM9vRa58Yb4uI8W9EjsdD9LnfxDiUkDar+L5DoW1WUmxmlEWiuxwcyEDx68GuAcG/gEdgLGHhfDq8mlLX4njRP2WubpOZQiabrXElwmIb9gJc7vy778j+1NycfIwaLMzDyqedTiLiyvUgbDE0k9nprQAOyST6/JUxERERERERERERERERF/9k="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/author-2.jpg":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/author-2.jpg ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA6ADoBAREA/8QAGAABAAMBAAAAAAAAAAAAAAAAAAYHCAT/xAAlEAABBQABAwMFAAAAAAAAAAADAAECBAUGBxIiERQhEyMyQXH/2gAIAQEAAD8A1AiIiIiIiIiIiIiIiIufQPOtn2bIvzEGc4/bkT5aLu3jFnlL+Mzu/wCvlZNDyfWz6efxmn1GFuVPo1LNrkZuWaedRsnlSts9U1shjTrHgSATOMbQYjEi0xj7W9bIyesPKg6HFMAxqpaulg59u7pXs48bNa4SoQjVDiFJ4tZO8GnCMX8WjOLxlKYe+HZXJdPK4Vcx6XPJchHCfHJWOTQ39AVWblNP3NaxYMc0qUuwPrOYex29yJnFHxZ7s6Lad/X6b5lzTvFuHY1wLnmeR2JAdosIOM0vI4uyMew0vIsO0jszydlN0RERERERERERERERERERERF//9k="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/author-3.jpg":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/author-3.jpg ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA3ADcBAREA/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMFBgcI/8QAJxAAAQQBAwQCAgMAAAAAAAAAAQACAwQFBhESBxMUIRUiIzEXMkH/2gAIAQEAAD8A9QIiIiIiIiIihu3aeNpz5HI24atSrE+eeeeQMjijaCXPc4+mtABJJ9ABZN3Wjo6zHwZZ/VjRraNmaStBZOdqiKWZgaXxtfz2c5okjJaDuA9u/wCwtZdu08bTnyORtw1alWJ88888gZHFG0Eue5x9NaACST6ACzX8tdKjgDqsdTNKfCC14JyXzNbxfJ48uz3efDucftx33297LSUb1LKUq+SxtyC3TtxMnr2IJBJHNG4BzXsc3cOaQQQR6IKnRZjqbjosv091DirGMyWRguY+aCepjXtZanhc3aRkRPrmWlwA/wB/Q9lcHy2Lzck2byuMo9VXSwwX6+gLhfkO9HLJDTcYrTZB3hE63G4tN38RYx3L6iNXOp8drPLan1hjs9i9b5HRuQx12pWp0ZZWmW6YIRcDA8biB0fcFYP+hkFnj/eBSSYyO5VFrUNDqfZ0tS1JNPp+eB+TGVqsdjRGXyNA88xGaS2xhd7HIcvxFq7JoIagGhdODVplOcGJp/J97hz8vst73Lh9d+fLfj63/XpXyIiIiIiIiIiIiIi//9k="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/icon1.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/icon1.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC44NyA4MS40MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwZjIxMzc7fS5jbHMtMntmaWxsOiNlYjRkNGI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5WZWN0b3IgU21hcnQgT2JqZWN0PC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDEuNTQsMTgzaC03N2ExLjUsMS41LDAsMCwxLTEuNS0xLjV2LTUxYTEuNSwxLjUsMCwwLDEsMS41LTEuNUgxMTNhMS41LDEuNSwwLDEsMSwwLDNINjZ2NDhoNzRWMTUzYTEuNSwxLjUsMCwwLDEsMywwdjI4LjVBMS41LDEuNSwwLDAsMSwxNDEuNTQsMTgzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYzLjA0IC0xMjAuNTcpIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjE0Ljk3IDQ4Ljk0IDEzLjI1IDQ3LjEyIDM2Ljg2IDI0Ljg1IDQ4LjU1IDM1LjQ3IDg0LjA4IDIuNzQgODUuNzcgNC41OCA0OC41NiAzOC44NiAzNi44OSAyOC4yNSAxNC45NyA0OC45NCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSI4Ni42NCA3LjE0IDg4Ljg3IDAgODEuNTcgMS42NCA4Ni42NCA3LjE0Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAzLjU0LDE5Ni41QTEuNSwxLjUsMCwwLDEsMTAyLDE5NVYxODJhMS41LDEuNSwwLDAsMSwzLDB2MTNBMS41LDEuNSwwLDAsMSwxMDMuNTQsMTk2LjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjMuMDQgLTEyMC41NykiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMTgsMjAySDg5YTEuNSwxLjUsMCwwLDEsMC0zaDI5YTEuNSwxLjUsMCwxLDEsMCwzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYzLjA0IC0xMjAuNTcpIi8+PC9zdmc+"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/icon2.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/icon2.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MC4yOCA4Ni4zMyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwZjIxMzc7fS5jbHMtMntmaWxsOiNlYjRkNGI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5WZWN0b3IgU21hcnQgT2JqZWN0MTwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDc0Ljg2LDIwMC44OGExLjM0LDEuMzQsMCwwLDEtLjUxLS4xMWMtMTUuNTYtNi45Mi0yNy0xNy0zMy0yOS05LjEzLTE4LjI3LTYuNDEtNDYuMzMtNi4yOS00Ny41MmExLjI2LDEuMjYsMCwwLDEsLjYtLjk0LDEuMjMsMS4yMywwLDAsMSwxLjEyLS4wOSwyMy40OSwyMy40OSwwLDAsMCw4Ljg2LDEuNjJjMTIuMjcsMCwyNC41NS03LjY0LDI2Ljc0LTkuNjlhMi4xOCwyLjE4LDAsMCwxLDEuNDUtLjU2LDIuMywyLjMsMCwwLDEsMS4yNi40NGMzLjkyLDIuNzMsMTYuNzEsOS44MSwyOC43Myw5LjgxYTIzLjc2LDIzLjc2LDAsMCwwLDktMS42MiwxLjIzLDEuMjMsMCwwLDEsMS4xMi4wOSwxLjI3LDEuMjcsMCwwLDEsLjYsMWMuMTEsMS4xOCwyLjUsMjkuMDktNi4zMiw0Ny40OS05Ljc1LDIwLjM0LTI3LjE1LDI2LjkyLTMyLjg3LDI5LjA5QTEuMzIsMS4zMiwwLDAsMSw0NzQuODYsMjAwLjg4Wm0tMzcuNDUtNzQuODFjLS40Myw2LjI2LTEuNDMsMjkuMzYsNi4xNyw0NC41NCw3LjE5LDE0LjM4LDIwLjksMjMsMzEuMzIsMjcuNjcsNS45My0yLjI2LDIyLTguNzUsMzEtMjcuNjUsNy4zNC0xNS4zMSw2LjU2LTM4LjI5LDYuMTktNDQuNTVhMjcuMTYsMjcuMTYsMCwwLDEtOC4zLDEuMjJjLTEyLjQ5LDAtMjUuNjktNy4yLTMwLTEwLjE0LTMuNjMsMy4xNy0xNi4xNCwxMC4xNC0yOC4yLDEwLjE0QTI2LjYxLDI2LjYxLDAsMCwxLDQzNy40MSwxMjYuMDdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDM0LjU4IC0xMTQuNTUpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDc1LjE5LDE3Ni41MmEyMS4zMiwyMS4zMiwwLDEsMSwyMS4zMi0yMS4zMkEyMS4zNCwyMS4zNCwwLDAsMSw0NzUuMTksMTc2LjUyWm0wLTQwLjE0QTE4LjgyLDE4LjgyLDAsMSwwLDQ5NCwxNTUuMiwxOC44NCwxOC44NCwwLDAsMCw0NzUuMTksMTM2LjM4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQzNC41OCAtMTE0LjU1KSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIzOS4wOSA1MC41NSAyOS4xNSAzOS41MSAzMS4wMSAzNy44MyAzOC45NiA0Ni42NyA1MC40NyAzMS45NCA1Mi40NCAzMy40OCAzOS4wOSA1MC41NSIvPjwvc3ZnPg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/icon3.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/icon3.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NS41IDgwLjIxIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ViNGQ0Yjt9LmNscy0ye2ZpbGw6IzBmMjEzNzt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlZlY3RvciBTbWFydCBPYmplY3QyPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NzMuMzksMzcxLjQ1YTQuMjEsNC4yMSwwLDAsMS0xLjI3LS4yQTcuNTcsNy41NywwLDAsMSw0NzAsMzcwbC05LjA5LTguNTZhNy43NSw3Ljc1LDAsMCwxLDAtMTEuMzVMNDYxLDM1MGE4LjYxLDguNjEsMCwwLDEsMTEuNzYsMGwuNTQuNTEuNTQtLjUxYTguNjEsOC42MSwwLDAsMSwxMS43NywwbC4xNC4xM2E3Ljc1LDcuNzUsMCwwLDEsMCwxMS4zNWwtOS4zMiw4Ljg2YTYuNTcsNi41NywwLDAsMS0xLjgxLDFBMy44LDMuOCwwLDAsMSw0NzMuMzksMzcxLjQ1Wm0tNi40OC0yMS4zMmE2LDYsMCwwLDAtNC4xNywxLjY0bC0uMTQuMTRhNS4yNSw1LjI1LDAsMCwwLDAsNy43Mmw5LDguNWE1LjM2LDUuMzYsMCwwLDAsMS4yNC43NCwxLjY1LDEuNjUsMCwwLDAsMSwwLDQuMTMsNC4xMywwLDAsMCwxLjA1LS41N2w5LjE4LTguNzNhNS4yNSw1LjI1LDAsMCwwLDAtNy43MmwtLjE0LS4xM2E2LjEsNi4xLDAsMCwwLTguMzIsMGwtMi4yNiwyLjE1LTIuMjctMi4xNEE2LDYsMCwwLDAsNDY2LjkxLDM1MC4xM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MzQuNzkgLTMwNC41NCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00MzkuNTQsMzMxLjMyYTEuMjQsMS4yNCwwLDAsMS0xLTJsMTcuMzktMjQuMWExLjI1LDEuMjUsMCwwLDEsMiwxLjQ2bC0xNy4zOSwyNC4xQTEuMjQsMS4yNCwwLDAsMSw0MzkuNTQsMzMxLjMyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQzNC43OSAtMzA0LjU0KSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTUwNi4yNCwzMzEuNWExLjI1LDEuMjUsMCwwLDEtMS0uNTRMNDg4LjMyLDMwNi41YTEuMjUsMS4yNSwwLDAsMSwyLjA2LTEuNDJsMTYuODksMjQuNDZhMS4yNSwxLjI1LDAsMCwxLTEsMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MzQuNzkgLTMwNC41NCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00NTMsMzg0Ljc2Yy0xLjE5LDAtNS4yMS0uMjItNy40Ni0zLTEuMzctMS42Ny0yLjE1LTYuNjYtMi4yOS03LjY0bC02LjQyLTMxLjUxYTEuMjUsMS4yNSwwLDAsMSwyLjQ1LS41bDYuNDMsMzEuNThjLjMzLDIuMjMsMS4wOCw1LjY1LDEuNzYsNi40OSwxLjgsMi4yLDUuNzYsMiw1LjgsMmg0MC40OXMzLjE0LDAsNC44MS0xLjk1YTEwLjE5LDEwLjE5LDAsMCwwLDEuODUtNC43Mmw1LjY3LTMxLjQ0YTEuMjUsMS4yNSwwLDEsMSwyLjQ2LjQ0TDUwMi45MiwzNzZhMTIuNjQsMTIuNjQsMCwwLDEtMi40NCw2Yy0yLjQyLDIuNzctNi41MiwyLjgtNi42OSwyLjhINDUzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQzNC43OSAtMzA0LjU0KSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTUwOSwzMzcuNzVINDM2YTEuMjUsMS4yNSwwLDEsMSwwLTIuNWg3M2ExLjI1LDEuMjUsMCwwLDEsMCwyLjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDM0Ljc5IC0zMDQuNTQpIi8+PC9zdmc+"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/icon4.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/icon4.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5My4zNyA4NS4wOSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwZjIxMzc7fS5jbHMtMntmaWxsOiNlYjRkNGI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5WZWN0b3IgU21hcnQgT2JqZWN0MzwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjc5LjM1LDIwMmEyLjMyLDIuMzIsMCwwLDEtLjU4LS4wOGwuNTgtMi4xNC0uNjIsMi4xM2EyLjIyLDIuMjIsMCwxLDEsMS4wNy00LjNsLjEzLDBhMi4yMiwyLjIyLDAsMCwxLS41OCw0LjM2Wm0tMTAtNC4xMWEyLjI0LDIuMjQsMCwwLDEtMS4wOC0uMjlsLS4xMy0uMDhhMi4yLDIuMiwwLDEsMSwxLjIxLjM3Wm0tOC41NS02LjU1YTIuMTksMi4xOSwwLDAsMS0xLjU1LS42NWwwLDBhMi4yNiwyLjI2LDAsMCwxLDAtMy4xNSwyLjIxLDIuMjEsMCwwLDEsMy4xMSwwbC4wNi4wNmEyLjIzLDIuMjMsMCwwLDEtMS41NywzLjhabS02LjU5LTguNTRhMi4xNywyLjE3LDAsMCwxLTEuODgtMS4wOWwtLjA1LS4wOWEyLjIyLDIuMjIsMCwwLDEsMy44Ni0yLjE5LDIuMjQsMi4yNCwwLDAsMS0xLjkzLDMuMzdabS00LjEzLTEwYTIuMTgsMi4xOCwwLDAsMS0yLjExLTEuNmwwLS4wOWEyLjIyLDIuMjIsMCwxLDEsNC4yOC0xLjE1LDIuMjUsMi4yNSwwLDAsMS0xLjU0LDIuNzZBMi42MiwyLjYyLDAsMCwxLDI1MC4xMiwxNzIuODhabTc5LjY4LTIxLjQ2YTIuMjEsMi4yMSwwLDAsMS0yLjEzLTEuNjQsMi4yNCwyLjI0LDAsMCwxLDEuNTQtMi43NiwyLjE4LDIuMTgsMCwwLDEsMi43MSwxLjUybDAsLjA5YTIuMiwyLjIsMCwwLDEtMi4xNSwyLjc5Wm0tNC4xNC05Ljk0YTIuMiwyLjIsMCwwLDEtMS44OC0xbC0uMDctLjEzYTIuMjIsMi4yMiwwLDEsMSwzLjg0LTIuMjFsLTEuOTIsMS4xLDEuOTMtMS4wN2EyLjIxLDIuMjEsMCwwLDEtLjc1LDNBMi4xNywyLjE3LDAsMCwxLDMyNS42NiwxNDEuNDhaTTMxOS4xLDEzM2EyLjIxLDIuMjEsMCwwLDEtMS41NS0uNjNsLS4wOC0uMDhhMi4yMiwyLjIyLDAsMCwxLDMuMTQtMy4xM2wuMDUsMGEyLjIyLDIuMjIsMCwwLDEtMS41NiwzLjhabS04LjU0LTYuNTRhMi4yLDIuMiwwLDAsMS0xLjE1LS4zMiwyLjIyLDIuMjIsMCwwLDEtLjg0LTMsMi4yLDIuMiwwLDAsMSwzLS44NGwuMTMuMDdhMi4yMiwyLjIyLDAsMCwxLTEuMTUsNC4xMlptLTkuOTUtNC4xMWEyLDIsMCwwLDEtLjUzLS4wN2wtLjE0LDBhMi4yMiwyLjIyLDAsMCwxLDEuMTctNC4yOGwtLjU4LDIuMTQuNjItMi4xM2EyLjIyLDIuMjIsMCwwLDEtLjU0LDQuMzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQyLjk3IC0xMTcuNTIpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQ4LjU3LDE2MS4zMWExLjI1LDEuMjUsMCwwLDEtMS4yNS0xLjI1LDQyLjU5LDQyLjU5LDAsMCwxLDQyLjU1LTQyLjU0LDEuMjUsMS4yNSwwLDAsMSwwLDIuNSw0MC4wOSw0MC4wOSwwLDAsMC00MC4wNSw0MEExLjI1LDEuMjUsMCwwLDEsMjQ4LjU3LDE2MS4zMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDIuOTcgLTExNy41MikiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yODkuODcsMjAyLjYxYTEuMjUsMS4yNSwwLDAsMSwwLTIuNSw0MC4wOSw0MC4wOSwwLDAsMCw0MC00MC4wNSwxLjI1LDEuMjUsMCwwLDEsMi41LDBBNDIuNTksNDIuNTksMCwwLDEsMjg5Ljg3LDIwMi42MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDIuOTcgLTExNy41MikiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zMzUuMDksMTY1LjE0YTEuMjUsMS4yNSwwLDAsMS0xLS40OGwtMy0zLjc4LTQsMy4zM2ExLjI1LDEuMjUsMCwwLDEtMS42LTEuOTJsNS00LjE2YTEuMywxLjMsMCwwLDEsLjkzLS4yOCwxLjI2LDEuMjYsMCwwLDEsLjg1LjQ3bDMuNzcsNC43OWExLjI2LDEuMjYsMCwwLDEtMSwyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0Mi45NyAtMTE3LjUyKSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0OC4yMiwxNjQuNDFoLS4wOWExLjMxLDEuMzEsMCwwLDEtLjg3LS40NGwtNC00Ljc5YTEuMjUsMS4yNSwwLDAsMSwxLjkyLTEuNjFsMy4xOCwzLjgxLDQtMy41NUExLjI1LDEuMjUsMCwxLDEsMjU0LDE1OS43bC01LDQuNEExLjI2LDEuMjYsMCwwLDEsMjQ4LjIyLDE2NC40MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDIuOTcgLTExNy41MikiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yOTAsMTYyaC00Ljg5YTguMyw4LjMsMCwwLDEtOC4xMS04LjQ1VjE1MmE3Ljg2LDcuODYsMCwwLDEsOC4xMS03Ljk1SDMwMHYzSDI4NS4xNUE0Ljg3LDQuODcsMCwwLDAsMjgwLDE1MnYxLjZhNS4zMSw1LjMxLDAsMCwwLDUuMTEsNS40NUgyOTBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQyLjk3IC0xMTcuNTIpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjk0LjMxLDE3N0gyNzh2LTNoMTYuMjdhNiw2LDAsMCwwLDUuNzMtNS42MnYtMS41OWMwLTIuNjQtMi41Ny00Ljc5LTUuNzMtNC43OUgyODl2LTNoNS4yN2M0Ljg5LDAsOC43MywzLjQyLDguNzMsNy43OXYxLjU5QTksOSwwLDAsMSwyOTQuMzEsMTc3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0Mi45NyAtMTE3LjUyKSIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iNDQuMDciIHk9IjIyLjQ4IiB3aWR0aD0iMyIgaGVpZ2h0PSI1Ii8+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSI0NC4wNyIgeT0iNTcuNDgiIHdpZHRoPSIzIiBoZWlnaHQ9IjUiLz48L3N2Zz4="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/icon5.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/icon5.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5My43IDk3Ljg5Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzBmMjEzNzt9LmNscy0ye2ZpbGw6I2ViNGQ0Yjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlZlY3RvciBTbWFydCBPYmplY3Q0PC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik04NS4wOSwzNjMuNzVINzZhMy43LDMuNywwLDAsMS0zLjctMy43VjMzMmEzLjcsMy43LDAsMCwxLDMuNy0zLjdoOS4xYTMuNywzLjcsMCwwLDEsMy43LDMuN3YyOC4xQTMuNywzLjcsMCwwLDEsODUuMDksMzYzLjc1Wm0tOS4xLTMzYTEuMiwxLjIsMCwwLDAtMS4yLDEuMnYyOC4xYTEuMiwxLjIsMCwwLDAsMS4yLDEuMmg5LjFhMS4yLDEuMiwwLDAsMCwxLjItMS4yVjMzMmExLjIsMS4yLDAsMCwwLTEuMi0xLjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIuOTkgLTI5My4xMSkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik05NC40MywzMzMuODZhMS4yNSwxLjI1LDAsMCwxLS41NS0yLjM3Yy4wNSwwLDQuMy0yLjEzLDUuNzgtNS4xbC40MS0uODFhMTkuNjQsMTkuNjQsMCwwLDAsMi42Ni04LjE3Yy4wOS0yLDItMy42Myw0LjM1LTMuNzJzNS4yNywxLjQzLDUuODEsNmMuNCwzLjQzLS41MSw3Ljk1LTEuNTEsMTEuNTlIMTIyYTEuMjUsMS4yNSwwLDEsMSwwLDIuNUgxMDhsLjQ5LTEuNjFjMS41NC01LjEsMi4yMS05LjQzLDEuODktMTIuMTktLjI5LTIuNDItMS41LTMuODYtMy4yNC0zLjc2LTEsMC0xLjkxLjYzLTIsMS4zM2EyMiwyMiwwLDAsMS0yLjkyLDkuMmwtLjQuNzljLTEuODcsMy43My02LjcyLDYuMTItNi45Miw2LjIyQTEuMjMsMS4yMywwLDAsMSw5NC40MywzMzMuODZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIuOTkgLTI5My4xMSkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMjIuMTEsMzQxLjloLTEuMjlhMS4yNSwxLjI1LDAsMCwxLDAtMi41aC43M2MxLjI2LDAsMS43OCwwLDIuNTktLjc0YTMuNDEsMy40MSwwLDAsMCwuMzUtMy4yOGMtLjQ4LTEuMTUtMS42MS0xLjctMy4zNy0xLjY0YTEuMjEsMS4yMSwwLDAsMS0xLjI5LTEuMiwxLjI0LDEuMjQsMCwwLDEsMS4yLTEuMjljMy43OS0uMTUsNS4yNCwxLjkxLDUuNzYsMy4xNWE1LjgzLDUuODMsMCwwLDEtLjkyLDYuMDdBNC44Niw0Ljg2LDAsMCwxLDEyMi4xMSwzNDEuOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi45OSAtMjkzLjExKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEyMSwzNDkuMTJsLS43NiwwYy0uMzEsMC0uNjQsMC0xLDBhMS4yNSwxLjI1LDAsMSwxLS4xMi0yLjVjLjQsMCwuOCwwLDEuMTksMCwxLjE0LDAsMS43MSwwLDIuMzEtLjU1YTIuMzUsMi4zNSwwLDAsMCwuNDktMS44OSwxLjI1LDEuMjUsMCwwLDEsMi40OC0uMzMsNC43Miw0LjcyLDAsMCwxLTEuMjEsNEE0LjQ4LDQuNDgsMCwwLDEsMTIxLDM0OS4xMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi45OSAtMjkzLjExKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTExOS4zMiwzNTZsLS43NiwwYy0uMzIsMC0uNjQsMC0xLDBhMS4yNSwxLjI1LDAsMCwxLS4xMS0yLjVjLjQsMCwuNzksMCwxLjE4LDAsMS4xNC4wNSwxLjcyLjA1LDIuMzEtLjU1YTIuMzEsMi4zMSwwLDAsMCwuNTEtMS43NywxLjI1LDEuMjUsMCwxLDEsMi40OS0uMjIsNC42NCw0LjY0LDAsMCwxLTEuMjMsMy43NkE0LjQ4LDQuNDgsMCwwLDEsMTE5LjMyLDM1NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi45OSAtMjkzLjExKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTExNy42OSwzNjIuMDljLS4yNywwLS41MywwLS43NywwLS43LDAtMjQuMjUsMC0yNC43OSwwaDBhMS4yMywxLjIzLDAsMCwxLS4wNi0yLjQ2Yy40NiwwLDI0Ljc0LDAsMjQuODgsMGguMWMxLjE0LjA1LDEuNzIuMDUsMi4zMS0uNTVhMS44OSwxLjg5LDAsMCwwLC41MS0xLjE5LDEuMjUsMS4yNSwwLDAsMSwyLjQ5LjI2LDQuMzgsNC4zOCwwLDAsMS0xLjIzLDIuN0E0LjQ1LDQuNDUsMCwwLDEsMTE3LjY5LDM2Mi4wOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi45OSAtMjkzLjExKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTExNCwzMzMuNzVoLTdhMS4yNSwxLjI1LDAsMCwxLDAtMi41aDdhMS4yNSwxLjI1LDAsMSwxLDAsMi41WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUyLjk5IC0yOTMuMTEpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNODIuMSwzNTYuNjJhMS4zNCwxLjM0LDAsMSwxLTEuMzQtMS4zM0ExLjM0LDEuMzQsMCwwLDEsODIuMSwzNTYuNjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIuOTkgLTI5My4xMSkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05OS4xMSwzOTFIOTljLTMuMTIsMC01LjQyLTMuMTEtNy42NS01Ljg4LTEuNTctMS45NS0zLjE5LTQuMDYtNC43OC00LjYxcy00LjEyLDAtNi42Mi41N2EyNS41OSwyNS41OSwwLDAsMS01LjYzLjg5LDYuMTcsNi4xNywwLDAsMS0zLjgyLTEuMTJjLTIuNDMtMS44My0yLjYyLTUuNDYtMi44LTktLjEzLTIuNTQtLjI2LTUuMTgtMS4yNy02LjYxUzYzLjE3LDM2Myw2MC45LDM2MmMtMy4zMi0xLjM4LTYuNzQtMi44MS03LjY3LTUuODVTNTQuMzMsMzUwLDU2LjMsMzQ3YzEuMzUtMi4wNywyLjc1LTQuMiwyLjc4LTUuODNzLTEuMzMtNC0yLjY1LTYuMThjLTEuODItMy0zLjY5LTYuMTEtMi43LTlzNC40MS00LjIxLDcuNzEtNS40N2MyLjM2LS45LDQuOC0xLjgzLDUuODMtMy4yczEuMjItMy45MiwxLjQzLTYuNDFjLjI5LTMuNTUuNTktNy4yMiwzLjE0LTlhNS44MSw1LjgxLDAsMCwxLDMuNDMtMSwyMy40NiwyMy40NiwwLDAsMSw1LjgzLDEuMDljMi41Mi42OCw1LjIxLDEuMzIsNi44LjgzczMuNDYtMi41NCw1LjE1LTQuNWMyLjI1LTIuNiw0LjU4LTUuMjksNy41My01LjI5LDMuMTkuMDUsNS41LDIuOTIsNy43Myw1LjY5LDEuNTYsMiwzLjE4LDQsNC43Nyw0LjUyczQuMTIsMCw2LjYyLS42MmEyNi4yNywyNi4yNywwLDAsMSw1LjYzLS45MSw2LjE2LDYuMTYsMCwwLDEsMy44MiwxLjExYzIuNDMsMS44MywyLjYyLDUuNDUsMi44LDksLjEzLDIuNTQuMjYsNS4xNywxLjI3LDYuNnMzLjI5LDIuMzIsNS41NywzLjI3YzMuMzEsMS4zOCw2Ljc0LDIuODEsNy42Nyw1Ljg1cy0xLjExLDYuMTQtMy4wOCw5LjE0Yy0xLjM1LDIuMDctMi43NSw0LjItMi43OCw1LjgzczEuMzQsNCwyLjY1LDYuMThjMS44MiwzLDMuNyw2LjExLDIuNzEsOXMtNC40Miw0LjIxLTcuNzIsNS40N2MtMi4zNi45LTQuOCwxLjgzLTUuODMsMy4ycy0xLjIyLDMuOTItMS40Miw2LjQxYy0uMjksMy41NS0uNTksNy4yMi0zLjE1LDlhNS44MSw1LjgxLDAsMCwxLTMuNDMsMSwyMy40NiwyMy40NiwwLDAsMS01LjgzLTEuMDljLTIuNTItLjY3LTUuMjEtMS4zMi02Ljc5LS44My0xLjczLjUzLTMuNDcsMi43My01LjE2LDQuNjhDMTA0LjM4LDM4OC4xMiwxMDIuMDUsMzkxLDk5LjExLDM5MVpNODUsMzc3LjdhNy4zNiw3LjM2LDAsMCwxLDIuMzkuMzZjMi4yNy43OCw0LjEyLDMuMDgsNS45MSw1LjMxczMuNzYsNC43Myw1LjcsNC43NnYwYzIsMCwzLjc4LTIuMjUsNS42Ny00LjQzczMuOTItNC41MSw2LjMzLTUuMjVhNy4yOCw3LjI4LDAsMCwxLDIuMTYtLjMsMjQuMTQsMjQuMTQsMCwwLDEsNiwxLjExLDIyLjE2LDIyLjE2LDAsMCwwLDUuMTksMSwzLjQyLDMuNDIsMCwwLDAsMi0uNTFjMS41OS0xLjExLDEuODQtNC4xOSwyLjA4LTcuMTZzLjQ4LTUuNzksMS45Mi03LjcxLDQuMjUtMyw2Ljk0LTQsNS42Mi0yLjE0LDYuMjQtMy45NC0xLTQuMzctMi40OC02Ljg4LTMuMDUtNS0zLTcuNTEsMS42NC00LjgsMy4xOS03LjE2YzEuNjUtMi41MiwzLjM2LTUuMTIsMi43OC03cy0zLjQ3LTMuMTEtNi4yNS00LjI3Yy0yLjYtMS4wOS01LjMtMi4yMi02LjY1LTQuMTVzLTEuNTctNS0xLjcyLTcuOS0uMy02LTEuOC03LjA5YTMuNzUsMy43NSwwLDAsMC0yLjMyLS42MSwyMy44NywyMy44NywwLDAsMC01LjA2Ljg1LDI2LjE1LDI2LjE1LDAsMCwxLTUuNjIuOSw3LjI2LDcuMjYsMCwwLDEtMi4zOC0uMzZjLTIuMjgtLjc4LTQuMTMtMy4wOC01LjkxLTUuMzFzLTMuOC00LjczLTUuNzUtNC43NmgwYy0xLjg0LDAtMy43OSwyLjI1LTUuNjcsNC40M3MtMy45LDQuNTEtNi4zMSw1LjI1YTcuMjgsNy4yOCwwLDAsMS0yLjE2LjMsMjQuMjIsMjQuMjIsMCwwLDEtNi0xLjExLDIyLDIyLDAsMCwwLTUuMTgtMSwzLjQyLDMuNDIsMCwwLDAtMiwuNTFjLTEuNTksMS4xMS0xLjg0LDQuMTktMi4wOCw3LjE2cy0uNDgsNS43OS0xLjkyLDcuNzEtNC4yNSwzLTYuOTQsNC01LjYyLDIuMTQtNi4yNCwzLjk0LDEsNC4zNywyLjQ4LDYuODgsMyw1LDMsNy41MS0xLjY0LDQuOC0zLjE5LDcuMTZjLTEuNjUsMi41Mi0zLjM2LDUuMTItMi43Nyw3czMuNDYsMy4xMSw2LjI0LDQuMjdjMi42LDEuMDksNS4zLDIuMjIsNi42NSw0LjE1czEuNTcsNSwxLjcyLDcuOS4zMSw2LDEuOCw3LjA5YTMuNzcsMy43NywwLDAsMCwyLjMyLjYxLDIzLjg3LDIzLjg3LDAsMCwwLDUuMDYtLjg1QTI2LjI1LDI2LjI1LDAsMCwxLDg1LDM3Ny43WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUyLjk5IC0yOTMuMTEpIi8+PC9zdmc+"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/icon6.svg":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/icon6.svg ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3Ni40NyA3Ny43NSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlYjRkNGI7fS5jbHMtMntmaWxsOiMwZjIxMzc7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5WZWN0b3IgU21hcnQgT2JqZWN0NTwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjM3LjY1LDMzMC43OWMwLTQuMDgsMy44OC01LjM0LDcuMzMtNS4zNHM3LjM2LDEuNDUsNy4zOSw1LjU4YzAsMy45MS0zLjk0LDUuNS03LjMzLDUuNS0yLjgsMC02LC42OS02LDR2Mi45M2gxMy4xOXYxLjQySDYzNy41NHYtNC4zMmMwLTQuMjQsMy45MS01LjM0LDcuNDQtNS4zNCwyLjQ5LDAsNi0uOTMsNi00LjE2cy0zLjM5LTQuMy02LTQuMy01Ljg4Ljg4LTUuODgsNC4wNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MTQuNTggLTMwMS43NCkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02NjcuNTEsMzI1LjY5djEzLjM2aDIuNDF2MS40OGgtMi40MXY0LjMySDY2NnYtNC4zMkg2NTQuM2wtLjMxLTEuNzgsMTEuMDktMTMuMDZabS0xLjQ3LDEuMS0xMC40NiwxMi4yNkg2NjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjE0LjU4IC0zMDEuNzQpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjc1LjIzLDMxOS41MmMtMy41Ny0xMC0xMS44My0xNS43OC0yMi42Ni0xNS43OHMtMTkuMDgsNS43NS0yMi42NSwxNS43OGwtMS44OC0uNjdjMy44Ny0xMC44OCwxMi44MS0xNy4xMSwyNC41My0xNy4xMXMyMC42Nyw2LjIzLDI0LjU0LDE3LjExWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYxNC41OCAtMzAxLjc0KSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTY3OSwzMjkuODVoLTJjMC0xMi41OC03LjYzLTI2LjExLTI0LjQtMjYuMTFzLTI0LjQsMTMuNTMtMjQuNCwyNi4xMWgtMmMwLTEzLjU0LDguMjYtMjguMTEsMjYuNC0yOC4xMVM2NzksMzE2LjMxLDY3OSwzMjkuODVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjE0LjU4IC0zMDEuNzQpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjgyLjIyLDM0OC4xM0g2NzdWMzI4Ljg1aDUuMjdjNC44NS4wOSw4Ljc3LDQuMzgsOC43Nyw5LjY0cy0zLjk1LDkuNTktOC44Myw5LjY0Wm0tMy4yMS0yaDMuMTJjMy44MiwwLDYuOTItMy40Myw2LjkyLTcuNjRzLTMuMS03LjY0LTYuOTItNy42NEg2NzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjE0LjU4IC0zMDEuNzQpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjI4LjE3LDM0OC4xM0g2MjNjLTQuNjMtLjA1LTguMzgtNC4zNi04LjM4LTkuNjRzMy43Mi05LjU1LDguMzItOS42NGg1LjI3Wm0tNS4xMi0xNy4yOGMtMy41NywwLTYuNDcsMy40My02LjQ3LDcuNjRzMi45LDcuNjQsNi40Nyw3LjY0aDMuMTJWMzMwLjg1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYxNC41OCAtMzAxLjc0KSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTY0NC4yOCwzNzJjLTEzLjE5LTUuODMtMTguMTEtMTguNjUtMTguMTEtMjUuMzZoMmMwLDYuMjEsNC41OSwxOC4wOCwxNi45MiwyMy41M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MTQuNTggLTMwMS43NCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02NTMuNTMsMzc5LjQ5YTMuODUsMy44NSwwLDAsMS0xLjI3LS4yMmwtNi0yLjExYy0yLjMyLS44Mi0zLjQyLTMuNy0yLjQ3LTYuNDRhNS4xOSw1LjE5LDAsMCwxLDQuNjctMy43MSwzLjk0LDMuOTQsMCwwLDEsMS4yNy4yMmw2LjA1LDIuMTFhNC4xMyw0LjEzLDAsMCwxLDIuNSwyLjU5LDUuNzgsNS43OCwwLDAsMSwwLDMuODVBNS4xOSw1LjE5LDAsMCwxLDY1My41MywzNzkuNDlaTTY0OC40MSwzNjlhMy4yNiwzLjI2LDAsMCwwLTIuNzgsMi4zN2MtLjU5LDEuNywwLDMuNDQsMS4yNCwzLjg5bDYsMi4xMWMxLjI3LjQ1LDIuODItLjYxLDMuNC0yLjI2YTMuOCwzLjgsMCwwLDAsMC0yLjUxLDIuMTUsMi4xNSwwLDAsMC0xLjI4LTEuMzhMNjQ5LDM2OS4xMkExLjgzLDEuODMsMCwwLDAsNjQ4LjQxLDM2OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MTQuNTggLTMwMS43NCkiLz48L3N2Zz4="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/shape-1.svg":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/shape-1.svg ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+DQogIDxkZWZzPg0KICAgIDxzdHlsZT4NCiAgICAgIC5jbHMtMSwgLmNscy0zIHsNCiAgICAgICAgZmlsbDogbm9uZTsNCiAgICAgIH0NCg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgc3Ryb2tlOiAjZmZiMTI5Ow0KICAgICAgICBzdHJva2Utd2lkdGg6IDNweDsNCiAgICAgICAgb3BhY2l0eTogMC42Ow0KICAgICAgfQ0KDQogICAgICAuY2xzLTIgew0KICAgICAgICBzdHJva2U6IG5vbmU7DQogICAgICB9DQogICAgPC9zdHlsZT4NCiAgPC9kZWZzPg0KICA8ZyBpZD0iRWxsaXBzZV8xX2NvcHlfNCIgZGF0YS1uYW1lPSJFbGxpcHNlIDEgY29weSA0IiBjbGFzcz0iY2xzLTEiPg0KICAgIDxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iOSIgY3k9IjkiIHI9IjkiLz4NCiAgICA8Y2lyY2xlIGNsYXNzPSJjbHMtMyIgY3g9IjkiIGN5PSI5IiByPSI3LjUiLz4NCiAgPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/shape-2.svg":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/shape-2.svg ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMi45NzcgMjIuOTc3Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogbm9uZTsNCiAgICAgICAgb3BhY2l0eTogMC41MDI7DQogICAgICB9DQoNCiAgICAgIC5jbHMtMiwgLmNscy0zIHsNCiAgICAgICAgc3Ryb2tlOiBub25lOw0KICAgICAgfQ0KDQogICAgICAuY2xzLTMgew0KICAgICAgICBmaWxsOiAjZWQ0MWRmOw0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPGcgaWQ9IlJvdW5kZWRfUmVjdGFuZ2xlXzFfY29weV8zIiBkYXRhLW5hbWU9IlJvdW5kZWQgUmVjdGFuZ2xlIDEgY29weSAzIiBjbGFzcz0iY2xzLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MjkuMDExIC05ODQuMDA5KSI+DQogICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjM5LjQ2LDk4NC4zODRsMTAuMiw0LjczOGE0LjAxOCw0LjAxOCwwLDAsMSwxLjk1Miw1LjMzNmwtNC43MzgsMTAuMmE0LjAxNiw0LjAxNiwwLDAsMS01LjMzNiwxLjk1MmwtMTAuMi00LjczOGE0LjAxNyw0LjAxNywwLDAsMS0xLjk1MS01LjMzN2w0LjczOC0xMC4yQTQuMDE4LDQuMDE4LDAsMCwxLDYzOS40Niw5ODQuMzg0WiIvPg0KICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTSA2MzcuNzcwMjYzNjcxODc1IDk4Ny4wMDkxNTUyNzM0Mzc1IEMgNjM3LjQ2OTcyNjU2MjUgOTg3LjAwOTE1NTI3MzQzNzUgNjM3LjA0Njk5NzA3MDMxMjUgOTg3LjE2MzQ1MjE0ODQzNzUgNjM2Ljg0NTA5Mjc3MzQzNzUgOTg3LjU5ODM4ODY3MTg3NSBMIDYzMi4xMDc0ODI5MTAxNTYzIDk5Ny43OTk3NDM2NTIzNDM4IEMgNjMxLjk1MjU3NTY4MzU5MzggOTk4LjEzMzU0NDkyMTg3NSA2MzIuMDIwMjYzNjcxODc1IDk5OC40MzE3NjI2OTUzMTI1IDYzMi4wNzQ0MDE4NTU0Njg4IDk5OC41Nzk4MzM5ODQzNzUgQyA2MzIuMTI4NDE3OTY4NzUgOTk4LjcyNzQ3ODAyNzM0MzggNjMyLjI2ODM3MTU4MjAzMTMgOTk4Ljk5NzkyNDgwNDY4NzUgNjMyLjYwMTI1NzMyNDIxODggOTk5LjE1MjI4MjcxNDg0MzggTCA2NDIuODA0NTA0Mzk0NTMxMyAxMDAzLjg5MDU2Mzk2NDg0NCBDIDY0Mi45NDEwNDAwMzkwNjI1IDEwMDMuOTUzOTc5NDkyMTg4IDY0My4wODQxNjc0ODA0Njg4IDEwMDMuOTg2MTQ1MDE5NTMxIDY0My4yMzAxMDI1MzkwNjI1IDEwMDMuOTg2MTQ1MDE5NTMxIEMgNjQzLjUzMDMzNDQ3MjY1NjMgMTAwMy45ODYxNDUwMTk1MzEgNjQzLjk1MjY5Nzc1MzkwNjMgMTAwMy44MzE2NjUwMzkwNjMgNjQ0LjE1NTA5MDMzMjAzMTMgMTAwMy4zOTU3NTE5NTMxMjUgTCA2NDguODkzMDA1MzcxMDkzOCA5OTMuMTk0MTUyODMyMDMxMyBDIDY0OS4wNDc0ODUzNTE1NjI1IDk5Mi44NjE2MzMzMDA3ODEzIDY0OC45Nzk3OTczNjMyODEzIDk5Mi41NjM3ODE3MzgyODEzIDY0OC45MjU2NTkxNzk2ODc1IDk5Mi40MTU3NzE0ODQzNzUgQyA2NDguODcxNjQzMDY2NDA2MyA5OTIuMjY4MDA1MzcxMDkzOCA2NDguNzMxMzIzMjQyMTg3NSA5OTEuOTk2OTQ4MjQyMTg3NSA2NDguMzk4ODAzNzEwOTM3NSA5OTEuODQyNTI5Mjk2ODc1IEwgNjM4LjE5Njc3NzM0Mzc1IDk4Ny4xMDQ5MTk0MzM1OTM4IEMgNjM4LjA1OTg3NTQ4ODI4MTMgOTg3LjA0MTM4MTgzNTkzNzUgNjM3LjkxNjM4MTgzNTkzNzUgOTg3LjAwOTE1NTI3MzQzNzUgNjM3Ljc3MDI2MzY3MTg3NSA5ODcuMDA5MTU1MjczNDM3NSBNIDYzNy43NzAyMDI2MzY3MTg4IDk4NC4wMDkxNTUyNzM0Mzc1IEMgNjM4LjMzNjc5MTk5MjE4NzUgOTg0LjAwOTE1NTI3MzQzNzUgNjM4LjkxMjE3MDQxMDE1NjMgOTg0LjEyOTUxNjYwMTU2MjUgNjM5LjQ1OTgzODg2NzE4NzUgOTg0LjM4Mzc4OTA2MjUgTCA2NDkuNjYyMzUzNTE1NjI1IDk4OS4xMjE2NDMwNjY0MDYzIEMgNjUxLjY3NDgwNDY4NzUgOTkwLjA1NTkwODIwMzEyNSA2NTIuNTQ4MjE3NzczNDM3NSA5OTIuNDQ1NjE3Njc1NzgxMyA2NTEuNjE0MDEzNjcxODc1IDk5NC40NTc2NDE2MDE1NjI1IEwgNjQ2Ljg3NTkxNTUyNzM0MzggMTAwNC42NTk0ODQ4NjMyODEgQyA2NDYuMTk1OTIyODUxNTYyNSAxMDA2LjEyNDI2NzU3ODEyNSA2NDQuNzQ1MTc4MjIyNjU2MyAxMDA2Ljk4NjE0NTAxOTUzMSA2NDMuMjMwMTAyNTM5MDYyNSAxMDA2Ljk4NjE0NTAxOTUzMSBDIDY0Mi42NjMzOTExMTMyODEzIDEwMDYuOTg2MTQ1MDE5NTMxIDY0Mi4wODc5NTE2NjAxNTYzIDEwMDYuODY1NjYxNjIxMDk0IDY0MS41NDAxMDAwOTc2NTYzIDEwMDYuNjExMDgzOTg0Mzc1IEwgNjMxLjMzNzcwNzUxOTUzMTMgMTAwMS44NzMyMjk5ODA0NjkgQyA2MjkuMzI1MzE3MzgyODEyNSAxMDAwLjk0MDAwMjQ0MTQwNiA2MjguNDUxNjYwMTU2MjUgOTk4LjU1MDI5Mjk2ODc1IDYyOS4zODYzNTI1MzkwNjI1IDk5Ni41MzY2ODIxMjg5MDYzIEwgNjM0LjEyNDE0NTUwNzgxMjUgOTg2LjMzNDc3NzgzMjAzMTMgQyA2MzQuODA0MTk5MjE4NzUgOTg0Ljg3MDQyMjM2MzI4MTMgNjM2LjI1NTAwNDg4MjgxMjUgOTg0LjAwOTE1NTI3MzQzNzUgNjM3Ljc3MDIwMjYzNjcxODggOTg0LjAwOTE1NTI3MzQzNzUgWiIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/shape-3.svg":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/shape-3.svg ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMC45OTUgMTguMDA1Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogbm9uZTsNCiAgICAgICAgb3BhY2l0eTogMC41MDI7DQogICAgICB9DQoNCiAgICAgIC5jbHMtMiwgLmNscy0zIHsNCiAgICAgICAgc3Ryb2tlOiBub25lOw0KICAgICAgfQ0KDQogICAgICAuY2xzLTMgew0KICAgICAgICBmaWxsOiAjZWQ0MWRmOw0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPGcgaWQ9IlNoYXBlXzE2ODVfY29weV8yIiBkYXRhLW5hbWU9IlNoYXBlIDE2ODUgY29weSAyIiBjbGFzcz0iY2xzLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NjAuMDA1IC0xMjkyLjk5OCkiPg0KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTc2MS4xNiwxMjkzaDE4LjY1NmExLjEzMSwxLjEzMSwwLDAsMSwxLjAwNSwxLjczNmMtLjQwNi42OTItOC42MDgsMTQuNTEzLTkuMzA5LDE1LjY5M2ExLjE3NCwxLjE3NCwwLDAsMS0yLjAyMSwwYy0uNTE0LS44NDktOC43NTgtMTQuNzI0LTkuMzMxLTE1LjcyOEExLjEyNCwxLjEyNCwwLDAsMSw3NjEuMTYsMTI5M1oiLz4NCiAgICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0gNzY0LjQwNzg5Nzk0OTIxODggMTI5NS45OTc1NTg1OTM3NSBDIDc2Ni4xMzQ4MjY2NjAxNTYzIDEyOTguOTE0MTg0NTcwMzEzIDc2OC44MDg4Mzc4OTA2MjUgMTMwMy40MTYxMzc2OTUzMTMgNzcwLjQ5ODU5NjE5MTQwNjMgMTMwNi4yNTcwODAwNzgxMjUgQyA3NzIuMjAxMjMyOTEwMTU2MyAxMzAzLjM4ODMwNTY2NDA2MyA3NzQuODY2NjM4MTgzNTkzOCAxMjk4Ljg5NjExODE2NDA2MyA3NzYuNTg1NDQ5MjE4NzUgMTI5NS45OTc1NTg1OTM3NSBMIDc2NC40MDc4OTc5NDkyMTg4IDEyOTUuOTk3NTU4NTkzNzUgTSA3NjEuMTYwMDM0MTc5Njg3NSAxMjkyLjk5NzU1ODU5Mzc1IEMgNzYyLjEyOTUxNjYwMTU2MjUgMTI5Mi45OTc1NTg1OTM3NSA3NzkuMTQ3MjE2Nzk2ODc1IDEyOTIuOTk3NTU4NTkzNzUgNzc5LjgxNTk3OTAwMzkwNjMgMTI5Mi45OTc1NTg1OTM3NSBDIDc4MC42ODMyODg1NzQyMTg4IDEyOTIuOTk3NTU4NTkzNzUgNzgxLjMyODY3NDMxNjQwNjMgMTI5My44NzAzNjEzMjgxMjUgNzgwLjgyMTIyODAyNzM0MzggMTI5NC43MzM4ODY3MTg3NSBDIDc4MC40MTQ5NzgwMjczNDM4IDEyOTUuNDI1NjU5MTc5Njg4IDc3Mi4yMTMzNzg5MDYyNSAxMzA5LjI0NzMxNDQ1MzEyNSA3NzEuNTEyMDIzOTI1NzgxMyAxMzEwLjQyNjYzNTc0MjE4OCBDIDc3MS4yODI1OTI3NzM0Mzc1IDEzMTAuODEyMzc3OTI5Njg4IDc3MC44OTQ5NTg0OTYwOTM4IDEzMTEuMDAyOTI5Njg3NSA3NzAuNTA2NjUyODMyMDMxMyAxMzExLjAwMjkyOTY4NzUgQyA3NzAuMTE0OTkwMjM0Mzc1IDEzMTEuMDAyOTI5Njg3NSA3NjkuNzIyNjU2MjUgMTMxMC44MDkyMDQxMDE1NjMgNzY5LjQ5MTAyNzgzMjAzMTMgMTMxMC40MjY2MzU3NDIxODggQyA3NjguOTc2NjIzNTM1MTU2MyAxMzA5LjU3NzM5MjU3ODEyNSA3NjAuNzMzMjE1MzMyMDMxMyAxMjk1LjcwMzAwMjkyOTY4OCA3NjAuMTYwNTIyNDYwOTM3NSAxMjk0LjY5ODQ4NjMyODEyNSBDIDc1OS43NDA0Nzg1MTU2MjUgMTI5My45NjI2NDY0ODQzNzUgNzYwLjIwNDUyODgwODU5MzggMTI5Mi45OTc1NTg1OTM3NSA3NjEuMTYwMDM0MTc5Njg3NSAxMjkyLjk5NzU1ODU5Mzc1IFoiLz4NCiAgPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/shape-4.svg":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/shape-4.svg ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+DQogIDxkZWZzPg0KICAgIDxzdHlsZT4NCiAgICAgIC5jbHMtMSwgLmNscy0zIHsNCiAgICAgICAgZmlsbDogbm9uZTsNCiAgICAgIH0NCg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgc3Ryb2tlOiAjMzA3ZWZmOw0KICAgICAgICBzdHJva2Utd2lkdGg6IDNweDsNCiAgICAgICAgb3BhY2l0eTogMC42Ow0KICAgICAgfQ0KDQogICAgICAuY2xzLTIgew0KICAgICAgICBzdHJva2U6IG5vbmU7DQogICAgICB9DQogICAgPC9zdHlsZT4NCiAgPC9kZWZzPg0KICA8ZyBpZD0iRWxsaXBzZV8xX2NvcHlfMyIgZGF0YS1uYW1lPSJFbGxpcHNlIDEgY29weSAzIiBjbGFzcz0iY2xzLTEiPg0KICAgIDxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iOSIgY3k9IjkiIHI9IjkiLz4NCiAgICA8Y2lyY2xlIGNsYXNzPSJjbHMtMyIgY3g9IjkiIGN5PSI5IiByPSI3LjUiLz4NCiAgPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/shape-5.svg":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/hosting/shape-5.svg ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOS4wMDYgMjkuMDA4Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogIzgwZDBiZTsNCiAgICAgIH0NCiAgICA8L3N0eWxlPg0KICA8L2RlZnM+DQogIDxwYXRoIGlkPSJGb3JtYV8xX2NvcHlfNCIgZGF0YS1uYW1lPSJGb3JtYSAxIGNvcHkgNCIgY2xhc3M9ImNscy0xIiBkPSJNMzYwLjY3MiwxMzIwLjg3NmExLjExNywxLjExNywwLDEsMSwuODY5LTIuMDU5bDEyLjM2MSw1LjIyNiw1LjIyNC0xMi4zNzNhMS4xMTEsMS4xMTEsMCwxLDEsMi4wNDQuODc0bC01LjIxNSwxMi4zNTUsMTIuMzYxLDUuMjI3YTEuMTEyLDEuMTEyLDAsMSwxLS44NTQsMi4wNTJsLTEyLjM3Ni01LjIyMS01LjIxLDEyLjM2OGExLjExNywxLjExNywwLDAsMS0yLjA1OS0uODY5bDUuMjEtMTIuMzY5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM1OS45OTUgLTEzMTAuOTk1KSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/logo-ot.png":
/*!********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/logo-ot.png ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-ot-853966105b5b3aefe1246ef312a76305.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/background.png":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/background.png ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/background-a9396595d50959dcd89f050215afa4e8.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/blog-1.svg":
/*!************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/blog-1.svg ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1NjUnIGhlaWdodD0nNDAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjYmRiZGJkJy8+PHRleHQgeD0nMjgyLjUnIHk9JzIwNScgZm9udC1zaXplPScyMCcgZm9udD0nVmVyZGFuYSwgc2Fucy1zZXJpZicgZmlsbD0nd2hpdGUnIHRleHQtYW5jaG9yPSdtaWRkbGUnPjU2NSB4IDQwMDwvdGV4dD48L3N2Zz4="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/blog-2.svg":
/*!************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/blog-2.svg ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1NjUnIGhlaWdodD0nNDAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjYmRiZGJkJy8+PHRleHQgeD0nMjgyLjUnIHk9JzIwNScgZm9udC1zaXplPScyMCcgZm9udD0nVmVyZGFuYSwgc2Fucy1zZXJpZicgZmlsbD0nd2hpdGUnIHRleHQtYW5jaG9yPSdtaWRkbGUnPjU2NSB4IDQwMDwvdGV4dD48L3N2Zz4="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/feature-1.svg":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/feature-1.svg ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/feature-1-3a645460b1840332038fb5345d0d4b1a.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/feature-2.svg":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/feature-2.svg ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/feature-2-0714aa1a64560b47742d65815844b7b9.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/feature-3.svg":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/feature-3.svg ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/feature-3-0900d5b034d3d313ead57ca5aa2a2e7e.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/footerapp.svg":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/footerapp.svg ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footerapp-a720cc19ce9793a414d2f892bb7ab19b.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/footerplay.svg":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/footerplay.svg ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footerplay-431b5d1c85bcd2eeb1cadbaf53b93318.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/man.png":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/man.png ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/man-5a032a104edfc29bac94e8f144b0b466.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/mask-0.png":
/*!************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/mask-0.png ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mask-0-b77a0228ca3fc0181d6335aec7f7a456.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/mask-1.png":
/*!************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/mask-1.png ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mask-1-41b8ea4a266750c43792a3552e5f39b0.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/mask-2.png":
/*!************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/mask-2.png ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mask-2-0989a696d121bac81b729ced671f64a6.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/mask-3.png":
/*!************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/mask-3.png ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mask-3-0adc7ad371bac017baa1357b3e88ae27.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/mask-4.png":
/*!************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/mask-4.png ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mask-4-2e759a01c2bd14c2ffe29a633c9f0d63.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/mobile1.png":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/mobile1.png ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mobile1-e04242cd5ef14103ba898e480ba7dff8.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/mockup_bg.svg":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/ride/mockup_bg.svg ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mockup_bg-cfe83c340662ef4070b1cf292cd17855.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/testimonial/client-1.jpg":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/assets/image/saas/testimonial/client-1.jpg ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAGaAZoBAREA/8QAHAABAAMAAwEBAAAAAAAAAAAAAAcICQMFBgQB/8QASBABAAEDAwMBBAYGBQcNAAAAAAECAwQFBhEHCBIhCRMxQRQiMlFxdiM3OEJhtBVigZGxFjZ0gqGztRckMzRDUlNUY3KTldP/2gAIAQEAAD8AtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjHuJ646J0C6a5289R93f1C5zi6Rg1VcTl5dUT40z8/Cniaq5+VNM/OYiahez76vdUepHXrcdrfPUDcGtYtzbeZnRh5mo3bmLavTm4seVuzNXu7fEV10x4xHFNUxHEejQt8+oahgaTg5Gp6pm2MPDxbdV6/kX7kW7dq3THNVVVVXEUxEeszLNLuy719wb73ni7b6Lbu1nRNuaLdqpq1HTcy7iXdUvTPE180TTV7mmPSmmfjzNUx9mI01dVurc+ibK23qe7dx5tOJpmkYtzMyr1Xr426KeZ4j5zPwiI9ZmYiPWWfFvrR3cd4m89S07onnX9o7Y06uPr2Mn6JTj0VTPhORlUxNyq7VEc+Fv0jieKfSap4N3al309o17E3buvfF7dm3q71NrIu38+7quFVVM+lu5N+Kb1ny+VUePr6RVz6Ly9DesO3+unTjTuoG36JsRk+VjMw6q/KvDyqOPeWqp+fHMTE8RzTVTPEc8PfADN3vb7vtzapvz/k86Q7y1TRtL21drt5+o6RnXMa5nZv2a6IuW6oqm1b9aeOeKqvKfWIplevobqGfq/RTp/quq52Rm5ubtbScjJyci7Vcu3rteJaqrrrrqmZqqqqmZmZnmZmZl7dHXW/rtsToLtG9ubeGfRORXTVGnaZbrj6Tn3Yj0oop+VPMx5Vz6UxPr6zETUzsY649S+sXcXvDP3luzVMnAy9Bys+xpFWbdqwMOr6Xi00RZs1VTRR40VTTExHPEzzMzM834QH3cdz2J267RxqdJxcfP3XrnnRpmLemZtWaKePPIuxExM00zMRFPMeVU/HiKuKz7Z6Y+0I61aLa6iV9WM/b1jUKIysPFyNbv6bVftVetNVGPi0eFFMx8POKeY4n4Ty7Lo/3ZdaeivVS10Z7o5vX8S9et48ajmRR7/C854t3vfUfVv2Jn41TMzEcz5fVmmdAgAAAAAAAAfLquqadoemZes6vm2sPBwbFeTk5F6rxotWqKZqqrqn5RERMyz825h6v39dx93c+sWMi10t2RXFNjHuRNMXrflzRan/1L80+dzj1pt0xTzzFMz0fs5rdu13N7ytWqKaKKNuajTTTTHEUxGoYnERHyhpSox3C9Le6buP6067090zNytI6aaVfx6LORlRONg3P0NuuuvimPPLriuqrj7VNM08c0esq6d3fQjavb5u3aGzNs5WVm15GiU5mfm5E8V5WTORcpmuKI9KKeKaYimPhEeszPMzrkqX7SneGToPQrB21h3qqKty61ZsZERPHnj2aKr1Uf/JTZe57Gtl4eze2va1VmxTRla7Td1jLriOJuV3q58Jn8LVNqn/VSz1E2dp/UHYmv7I1SzRcx9b0+/h1RXHPjVXRMU1x9001eNUT8piJUV9l5u/Mxtz726c5Fyr3N/Cs6xbtVT/0dy1cizcmI++qL1qJ/wDZCZ+vfetrXb71It7L3V0YuZWlZUW8jD1mxrnEZONMxFddNqcfj3lE8xNua/jEfW4qipZXb+v6PurQ8Dcu38+3m6bqePby8TItzzTctV0xVTVH9k/D4wrf1275NJ6TdTMfpVtDYF3fGtz7uzlUY2p/Rvc5VyYi3jUxFm5Ny5MTEzEccTVTHrPMRZLQsnV83RcHM1/SrOmalfx6LmVhWsr6TRj3Zjmq3F3xp8/GfTy8Y54Vx73u4690l2db2BsrJrr3tu23NjGjH5qu4WLVPhVeiI9feVTzRb49fLyqj7HE027h+3a30F6J9PLmtWKZ3buLNzMvWLnPM2OLVqbeNE/dbiqeZj411Vesx48aTdvv6hOmv5Q0b+StO06r6vubQOmW6ta2Xi3MnX8HSMq/plm3jzfruZVNuqbdNNuIma5mrjiniefgpN0w7JerfWndNvqd3U7j1Ci1dmmudMu5HnnZFETzFuqafqYtr1+xR9aOZiKaJ9XmfZtWbWP3Fbvx7NEU27W28yiimPlTGdixENKmaHXKmOtntA9N2Pqf/OdJ0/U9O0ibNXrE4tmim/k0cfxqqv8A97S6IimIppiIiI4iI+SkntQtl4WTsXaPUKjHpjN0/VK9IuXIj61Vm/aruUxVPzimqxPH3ec/esX2vbyyd/dv2xtz516b2Ve0qjGyLtU8zcu49VViuuf4zVamZ/jKUQAAAAAAABRvvU6vbi6pb203tJ6P1zlZ+o5VujXbtqr6s1/bpxqqo+FFuI97dn5eMR+7VC1XRTpHt3oj060vYG3KIroxKPeZeVNPFeZlVRHvb1X8ZmOIj14pimn4Qol7Or9p/en5e1H/AIhiNJxmx7Tn9c20fy7R/N3mk6i3tTq7kbd6e2458Ks3UJn8Yt2eP8ZWk7caKKO3/pvTbiOJ2rpc+n3zjW5n/bykVmj7Pnm13Vbqt2PS3/Q2p0zx/wB2MzH4/wBsQuj3O9A9K7gemmVtq5FqxrmD5ZeiZtcce5yYj7FU/H3dyPq1f2VcTNMKJ9Fu7zenbl043n0e3Do+VVrml3Ltvb9GRTExpuZVcmi/auxP7lMzN2mI9JqiqJ9K4mJi7BO3POyL9fcj1LtXcrVNUru3tCoy+ark+8mfe59fPrNVczVFEz8pqq9fKmYtv1b6obb6ObB1XqBum9xiada/R2aaoi5lX59Ldmj+tVVxH8I5mfSJlUHs96Y7k679TdT7ter1n39M5lX9AY1dM+7m/R9WLlFM/wDZWIiKLfx5riZ55o5nm9qb/m30+/07UP8Ad2Vqe339QnTX8oaN/JWnvxmx7OH9pDeX5dzv5/FaTs0OnfN/2mOX9I9eNz63xz/Vxcnx/wAIaXqr+0jpoq7dKZq+NO4MKafx8Lsf4TL0XYJVcq7WdpxX8Kb+pRT+H069P+MysMAAAAAAAA+PWZzY0jOnTfL6XGNd+j+PHPvPGfHjn0+PDK/p/wBIu+PpfujO3rsrYes4eu6lRcoys+/iYWZeuRXXFdc85EV8TVVHMzHEz85SR/lb7Uf/AMprX/0mkf8A5K9dA9T7htO6j6vldB7eXXu6vAyKdRixiYt+v6LN+1N3mm/TNER72LXrEc/KPSZandueZ1Zz+kmkZXW6i/TvCu5lfTovWLNmvxi/XFrmizEUR+j8PhH4+qS2bHtOf1zbR/LtH83eaTqc+0623f1HpBtzc1i3NcaPrsWr3EfYt37NceU/w87duPxqhMPZ3uPH3P21bDzLF2K5xNNjTrkRPrRXj11WeJ+70oifwmEq7i1vC2zt/U9x6lcijE0rDvZt+qZ4im3aomuqf7qZZ6ezE0PM1TqhvbfN6iaqMTSKcK5Xx6e9ysim5/fxjVNBN3bs0HYu2NT3hujPowtK0jHrysq9X+7RTHwiPnVM8RER6zMxEessi+oFjqJ3R7s6i9ddA2jFvStFt28zNos0RTNjFp4t26ZmI/S3YtUTXXP3UVz6RFMNBuy3uFwOtvTKxpOoVWMfdG17NrC1HGt0xRF21FPjayKKY9IpqiniYiOKaomOIiaeY29oT0r6y9VcvZ2m9Ots6nrelYNvLv5lnGroi3RkTNEUVVRVVHNXj5xE+vETV8OZ5inQM/2l21tEwdt7e0TVMHTNMx6MXExrWh6RFFq1RHFNMfoufhHxn1n4yibuV1juv1TT9Cp7kbOdRi271+dK+k4OFjxNyaaPe8Tj0UzPp4fa/sWM7Std70725OnunbosajHSyNOtUWqqtOwKbX9HxhVfRf0tNHvuPSzxPl5T6c88yviM2PZw/tIby/Lud/P4rSdmpu6mOl/tJcTUs+fc4uo7gxL9u7V6UzRnY9Nuqrn7oru1xM/1ZaVqb+083Hj4PSDbW1/exGVquvxlU0c+tVmxYuRXP9lV61/emXs823f2r20bC0vJtzRcu6bVqExMcTxlXa8inn/VuwmMAAAAAAAABmx7Or9p/en5e1H/AIhiNJxmx7Tn9c20fy7R/N3mk7yXVnpxo/Vzp1rvTvXapoxdZxZsxeinyqsXYmKrV2I+c0XKaauPnxx82ePTXq11n7C9zan086h7JvaptnNyar1uj3lVu1cucRT9Jw7/AIzTVFVMU+VExz9WInwqiXadZO8bqN3QadHRvox051LDs6zMW86Ldz6Rl5VvmP0f1aYps2uePOqZnmPSZpp8om4Paj0Eo7fulljbedcs39e1K7OoazftTzR7+qmIi1RPzot0xFMT858qvTy4VM72OtuudcupWndtnSia8/DxdRoxsv6PV9XUNS548Jn/AMKz68zPp5RVVPpRTK6fQrort7oj0v0/p3p1qzk1U25u6pkzR/17KuREXblUT+7PEU0xPwoppj14UI6vbU3R2M9yGB1D2Fj3J2rq9y5fw7HlMWruNVVH0nT65/q8xNEzzxHuqvWqmWj2wt87d6lbP0rfO082MrS9Xx6cixX+9T8qqKo+VdNUTTVHymmYd+ov7U3/ADb6ff6dqH+7srU9vv6hOmv5Q0b+StPfjNj2cP7SG8vy7nfz+K0nVI78e2XX+rGmad1N6dYVeVujbtmcfIw7PpezcOKprp9199y3VNUxTHrVFdURzMUxMYbC9pTr20dvUbY6tdNs3UdxaVRGPcy7OTGLcyKqY4/T2q6Obdz0+tMc8zzPjT8HktA2z1e7/usWDvPd+jXtF2FpdUW5roiqMexi01eVWPYrqiPfX7k+lVcR6fGYiKaaGl2Li42Di2cLDsUWcfHt02rVuiOKaKKY4ppiPlEREQ5QAAAAAAAAAAHBmYOFqOPViahh2MqxX9q1etxXRV+MT6S4tN0fSNGtVWNH0rDwbdU81UY1im1TM/ximIfYAAAA67UNube1a/Rk6roOnZt63HFFzIxaLlVP4TVEzDsKKKLdFNu3RFNNMRFNNMcREfdD9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"

/***/ }),

/***/ "../../node_modules/common/src/components/FeatureBlock/featureBlock.style.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/components/FeatureBlock/featureBlock.style.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: IconWrapper, ContentWrapper, ButtonWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);

 // FeatureBlock wrapper style

var FeatureBlockWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureBlockstyle__FeatureBlockWrapper",
  componentId: "sc-1pllarm-0"
})(["&.icon_left{display:flex;.icon__wrapper{flex-shrink:0;}}&.icon_right{display:flex;flex-direction:row-reverse;.content__wrapper{text-align:right;}.icon__wrapper{flex-shrink:0;}}", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["overflow"]); // Icon wrapper style

var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureBlockstyle__IconWrapper",
  componentId: "sc-1pllarm-1"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["overflow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"]); // Content wrapper style

var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureBlockstyle__ContentWrapper",
  componentId: "sc-1pllarm-2"
})(["", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["textAlign"]); // Button wrapper style

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureBlockstyle__ButtonWrapper",
  componentId: "sc-1pllarm-3"
})(["", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"]);

/* harmony default export */ __webpack_exports__["default"] = (FeatureBlockWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/FeatureBlock/index.js":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/components/FeatureBlock/index.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _featureBlock_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./featureBlock.style */ "../../node_modules/common/src/components/FeatureBlock/featureBlock.style.js");


var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/components/FeatureBlock/index.js";




var FeatureBlock = function FeatureBlock(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      title = _ref.title,
      button = _ref.button,
      description = _ref.description,
      iconPosition = _ref.iconPosition,
      additionalContent = _ref.additionalContent,
      wrapperStyle = _ref.wrapperStyle,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      btnWrapperStyle = _ref.btnWrapperStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "icon", "title", "button", "description", "iconPosition", "additionalContent", "wrapperStyle", "iconStyle", "contentStyle", "btnWrapperStyle"]);

  // Add all classs to an array
  var addAllClasses = ['feature__block']; // Add icon position class

  if (iconPosition) {
    addAllClasses.push("icon_".concat(iconPosition));
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // check icon value and add


  var Icon = icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["IconWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "icon__wrapper"
  }, iconStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), icon);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), Icon, title || description || button ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["ContentWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "content__wrapper"
  }, contentStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), title, description, button && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "button__wrapper"
  }, btnWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), button)), additionalContent) : '');
};

FeatureBlock.propTypes = {
  /** ClassName of the FeatureBlock */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** title prop contain a react component. You can use our Heading component from reusecore */
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** description prop contain a react component. You can use our Text component from reusecore */
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** button prop contain a react component. You can use our Button component from reusecore */
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set icon position of the FeatureBlock */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['top', 'left', 'right']),

  /** wrapperStyle prop contain these style system props:  display, flexWrap, width, height, alignItems,
   * justifyContent, position, overflow, space, color, borders, borderColor, boxShadow and borderRadius. */
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** iconStyle prop contain these style system props: display, width, height, alignItems, justifyContent,
   * position, space, fontSize, color, borders, overflow, borderColor, boxShadow and borderRadius. */
  iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** contentStyle prop contain these style system props: width, textAlign and space. */
  contentStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** btnWrapperStyle prop contain these style system props: display, space, alignItems,
   * flexDirection and justifyContent. */
  btnWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
FeatureBlock.defaultProps = {
  iconPosition: 'top'
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureBlock);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var HamburgMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "hamburgMenustyle__HamburgMenuWrapper",
  componentId: "sc-12m1tps-0"
})(["border:0;background:transparent;width:44px;height:30px;cursor:pointer;", " ", " ", " ", " ", " ", " ", " > span{display:block;width:100%;height:2px;margin:4px 0;float:right;background-color:", ";transition:all 0.3s ease;&:first-child{margin-top:0;}&:last-child{width:calc(100% - 10px);margin-bottom:0;}}&:focus,&:hover{outline:none;> span{&:last-child{width:100%;}}}&:focus{> span{&:first-child{transform:rotate(45deg);transform-origin:8px 50%;}&:nth-child(2){display:none;}&:last-child{width:100%;transform:rotate(-45deg);transform-origin:9px 50%;}}}"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["border"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], function (props) {
  return props.barColor ? props.barColor : '#10ac84';
});
HamburgMenuWrapper.displayName = 'HamburgMenuWrapper';
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenuWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/index.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/components/HamburgMenu/index.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburgMenu.style */ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js");


var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/components/HamburgMenu/index.js";




var HamburgMenu = function HamburgMenu(_ref) {
  var className = _ref.className,
      wrapperStyle = _ref.wrapperStyle,
      barColor = _ref.barColor,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "wrapperStyle", "barColor"]);

  // Add all classs to an array
  var addAllClasses = ['hamburgMenu__bar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, {
    barColor: barColor,
    "aria-label": "hamburgMenu"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

HamburgMenu.propTypes = {
  /** ClassName of the Hamburg menu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** barColor allow to change hambrug menu's bar color. */
  barColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** wrapperStyle prop allow to change Hamburg menu bg color, width, height, space, boxShadow, border and borderRadius.*/
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/ScrollSpyMenu/index.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/components/ScrollSpyMenu/index.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");


var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/components/ScrollSpyMenu/index.js";







var ScrollSpyMenu = function ScrollSpyMenu(_ref) {
  var className = _ref.className,
      menuItems = _ref.menuItems,
      drawerClose = _ref.drawerClose,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "menuItems", "drawerClose"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_7__["DrawerContext"]),
      dispatch = _useContext.dispatch; // empty array for scrollspy items


  var scrollItems = []; // convert menu path to scrollspy items

  menuItems.forEach(function (item) {
    scrollItems.push(item.path.slice(1));
  }); // Add all classs to an array

  var addAllClasses = ['scrollspy__menu']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Close drawer when click on menu item


  var toggleDrawer = function toggleDrawer() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: scrollItems,
    className: addAllClasses.join(' '),
    drawerClose: drawerClose
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), menuItems.map(function (menu, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: "menu-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, menu.staticLink ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: menu.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, menu.label)) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, drawerClose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      onClick: toggleDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, menu.label) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, menu.label)));
  }));
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current'
};
/* harmony default export */ __webpack_exports__["default"] = (ScrollSpyMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/index.js":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/components/UI/Container/index.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "../../node_modules/common/src/components/UI/Container/style.js");
var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/components/UI/Container/index.js";



var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fullWidth = _ref.fullWidth,
      noGutter = _ref.noGutter,
      mobileGutter = _ref.mobileGutter,
      width = _ref.width;
  // Add all classs to an array
  var addAllClasses = ['container']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    width: width,
    mobileGutter: mobileGutter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/style.js":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/components/UI/Container/style.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ContainerWrapper",
  componentId: "sc-1gre7ok-0"
})(["margin-left:auto;margin-right:auto;", ";", ";@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1220px){max-width:", ";width:100%;}@media (max-width:768px){", ";}"], function (props) {
  return props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100%;max-width:none !important;"]);
}, function (props) {
  return props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:0;padding-right:0;"]) || Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;"]);
}, function (props) {
  return props.width || '1170px';
}, function (props) {
  return props.mobileGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;"]);
});
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/App/Control/index.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/App/Control/index.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Card */ "../../node_modules/reusecore/src/elements/Card/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _assets_image_app_info1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/image/app/info1.png */ "../../node_modules/common/src/assets/image/app/info1.png");
/* harmony import */ var _assets_image_app_info1_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_app_info1_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_image_app_info2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/image/app/info2.png */ "../../node_modules/common/src/assets/image/app/info2.png");
/* harmony import */ var _assets_image_app_info2_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_app_info2_png__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/App/Control/index.js";















var ControllSection = function ControllSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      description = _ref.description,
      button = _ref.button,
      textArea = _ref.textArea,
      imageArea = _ref.imageArea,
      textAreaRow = _ref.textAreaRow,
      imageAreaRow = _ref.imageAreaRow,
      imageWrapper = _ref.imageWrapper,
      imageOne = _ref.imageOne,
      imageTwo = _ref.imageTwo,
      imageWrapperOne = _ref.imageWrapperOne,
      imageWrapperTwo = _ref.imageWrapperTwo,
      sectionSubTitle = _ref.sectionSubTitle,
      btnStyle = _ref.btnStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    id: "nuvem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    fullWidth: true,
    noGutter: true,
    className: "control-sec-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, imageAreaRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, imageArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageWrapper, imageWrapperOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageWrapper, imageWrapperTwo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageTwo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, textAreaRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })),
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })),
    button: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#contato",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })))));
};

ControllSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
ControllSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['70px', '140px'],
    pb: ['70px', '140px']
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  textAreaRow: {
    flexDirection: 'row-reverse'
  },
  col: {
    pr: '15px',
    pl: '15px'
  },
  textArea: {
    width: ['100%', '100%', '50%', '50%', '50%']
  },
  imageArea: {
    width: ['0px', '0px', '53%', '50%', '50%'],
    flexBox: true
  },
  imageWrapper: {
    boxShadow: 'none'
  },
  imageWrapperOne: {
    pointerEvents: 'none'
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
    ml: ['0px', '0px', '-200px', '-250px', '-400px'],
    pointerEvents: 'none'
  },
  imageOne: {
    src: "".concat(_assets_image_app_info1_png__WEBPACK_IMPORTED_MODULE_13___default.a),
    alt: 'Info Image One'
  },
  imageTwo: {
    src: "".concat(_assets_image_app_info2_png__WEBPACK_IMPORTED_MODULE_14___default.a),
    alt: 'Info Image Two'
  },
  sectionSubTitle: {
    content: 'CONTROLE DE PRODUTOS, LOTES E ETIQUETAS',
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#1a73e8',
    textTransform: 'uppercase',
    mb: '10px',
    textAlign: ['center', 'left']
  },
  title: {
    content: 'Gerenciamento em Tempo Real na Nuvem',
    fontSize: ['24px', '26px', '30px', '36px', '48px'],
    fontWeight: '600',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '420px', '420px'],
    textAlign: ['center', 'left']
  },
  description: {
    content: 'Nossa plataforma em nuvem permite controlar e gerenciar seus produtos, lotes e etiquetas. ' + 'Saiba quem são seus consumidores e quais produtos eles estão comprando. ' + 'Somente com o sistema Original Total você tem o total controle dos seus representantes e licenciados. Nunca mais perca de vista a suas etiquetas.',
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    textAlign: ['center', 'left']
  },
  button: {
    title: 'QUERO SABER MAIS',
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg'
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ControllSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/App/PaymentSection/index.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/App/PaymentSection/index.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Card */ "../../node_modules/reusecore/src/elements/Card/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _app_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app.style */ "../../node_modules/common/src/containers/App/app.style.js");
/* harmony import */ var _assets_image_app_mockup_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/image/app/mockup.png */ "../../node_modules/common/src/assets/image/app/mockup.png");
/* harmony import */ var _assets_image_app_mockup_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_app_mockup_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_app_credit_card_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/image/app/credit-card.png */ "../../node_modules/common/src/assets/image/app/credit-card.png");
/* harmony import */ var _assets_image_app_credit_card_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_app_credit_card_png__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/App/PaymentSection/index.js";
















var PaymentSection = function PaymentSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      description = _ref.description,
      button = _ref.button,
      textArea = _ref.textArea,
      imageArea = _ref.imageArea,
      textAreaRow = _ref.textAreaRow,
      imageAreaRow = _ref.imageAreaRow,
      imageWrapper = _ref.imageWrapper,
      imageOne = _ref.imageOne,
      imageTwo = _ref.imageTwo,
      imageWrapperOne = _ref.imageWrapperOne,
      imageWrapperTwo = _ref.imageWrapperTwo,
      sectionSubTitle = _ref.sectionSubTitle,
      btnStyle = _ref.btnStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    id: "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_style__WEBPACK_IMPORTED_MODULE_13__["PaymentCircleShape"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    fullWidth: true,
    noGutter: true,
    className: "control-sec-container payment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, imageAreaRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, imageArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageWrapper, imageWrapperOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageWrapper, imageWrapperTwo, {
    className: "cardExtraImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageTwo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, textAreaRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })),
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })),
    button: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#appslider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })))));
};

PaymentSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
PaymentSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['20px', '40px', '40px', '80px', '120px'],
    pb: ['80px', '80px', '80px', '180px', '280px']
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  textAreaRow: {
    flexDirection: 'row-reverse'
  },
  col: {
    pr: '15px',
    pl: '15px'
  },
  textArea: {
    width: [1, 1, '45%', '45%', '45%'],
    zIndex: '1'
  },
  imageArea: {
    width: [0, 0, '52%', '45%', '45%'],
    flexBox: true
  },
  imageWrapper: {
    boxShadow: 'none'
  },
  imageWrapperOne: {
    pointerEvents: 'none'
  },
  imageWrapperTwo: {
    alignSelf: 'flex-start',
    mt: ['0px', '0px', '40px', '50px', '90px'],
    ml: ['-250px', '-250px', '-180px', '-220px', '-420px'],
    pointerEvents: 'none'
  },
  imageOne: {
    src: "".concat(_assets_image_app_mockup_png__WEBPACK_IMPORTED_MODULE_14___default.a),
    alt: 'Info Image One'
  },
  imageTwo: {
    src: "".concat(_assets_image_app_credit_card_png__WEBPACK_IMPORTED_MODULE_15___default.a),
    alt: 'Info Image Two'
  },
  sectionSubTitle: {
    content: 'PARA SEUS CONSUMIDORES',
    as: 'span',
    display: 'block',
    textAlign: ['center', 'left'],
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#1a73e8',
    textTransform: 'uppercase',
    mb: '10px'
  },
  title: {
    content: 'Mais tranquilidade para seus consumidores',
    fontSize: ['24px', '26px', '30px', '36px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '420px', '420px'],
    textAlign: ['center', 'left']
  },
  description: {
    content: 'Com nosso App exclusivo seus consumidores tem a garantia de estarem comprando sempre produtos originais. Forneça uma ferramenta digital para combater a falsificação dos seus produtos e proteja sua marca.',
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    textAlign: ['center', 'left']
  },
  button: {
    title: 'QUERO VER MAIS',
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg'
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PaymentSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/App/app.style.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/App/app.style.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: GlobalStyle, AppWrapper, BannerSquareShape, BannerCircleShape, PaymentCircleShape, ConditionWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWrapper", function() { return AppWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerSquareShape", function() { return BannerSquareShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerCircleShape", function() { return BannerCircleShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCircleShape", function() { return PaymentCircleShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionWrapper", function() { return ConditionWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_app_substract_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/app/substract.png */ "../../node_modules/common/src/assets/image/app/substract.png");
/* harmony import */ var _assets_image_app_substract_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_app_substract_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_app_substract_hover_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/app/substract-hover.png */ "../../node_modules/common/src/assets/image/app/substract-hover.png");
/* harmony import */ var _assets_image_app_substract_hover_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_app_substract_hover_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_app_pattern_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/app/pattern.png */ "../../node_modules/common/src/assets/image/app/pattern.png");
/* harmony import */ var _assets_image_app_pattern_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_app_pattern_png__WEBPACK_IMPORTED_MODULE_5__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body {\n    font-family: 'Open Sans', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Open Sans', sans-serif;\n  }\n\n  section{\n    position: relative;\n  }\n\n    .drawer {\n      .drawer-content-wrapper {\n        @media only screen and (max-width: 480px) {\n          width: 320px !important;\n        }\n        .reusecore-drawer__close {\n          position: absolute;\n          top: 20px;\n          right: 30px;\n          > button {\n            box-shadow: 0px 8px 38px 0px rgba(16, 172, 132, 0.5);\n            transition: all 0.3s ease;\n            svg {\n              width: 22px;\n              height: 22px;\n            }\n            &:hover {\n              opacity: 0.9;\n            }\n          }\n        }\n        .scrollspy__menu {\n          padding: 60px 71px;\n\n          li {\n            margin: 35px 0;\n            a {\n              display: block;\n              color: #20201d;\n              font-size: 24px;\n              font-weight: 400;\n              transition: all 0.3s ease;\n              @media only screen and (max-width: 480px) {\n                font-size: 21px;\n              }\n              &:hover {\n                color: #1a73e8;\n              }\n            }\n            &.is-current {\n              a {\n                color: #1a73e8;\n                position: relative;\n                &:before {\n                  content: '';\n                  display: block;\n                  width: 8px;\n                  height: 8px;\n                  border-radius: 50%;\n                  background-color: #1a73e8;\n                  position: absolute;\n                  top: calc(50% - 8px / 2);\n                  left: -20px;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n\n    /* Modal default style */\n    .reuseModalOverlay {\n      z-index: 99999 !important;\n    }\n\n    button.modalCloseBtn {\n      position: fixed !important;\n      z-index: 999991 !important;\n      background-color: transparent !important;\n      color: ", " !important;\n      top: 10px !important;\n      right: 10px !important;\n\n      @media(max-width: 460px){\n        top: 0 !important;\n        right: 0 !important;\n      }\n\n      span.btn-icon {\n        font-size: 24px !important;\n        transform: rotate(45deg) !important;\n      }\n\n      &.alt {\n        background-color: ", " !important;\n        border-radius: 50% !important;\n        z-index: 999999 !important;\n        padding: 0 !important;\n        box-shadow: 0 8px 38px rgba(26, 115, 232, 0.5) !important;\n        transition: all 0.3s ease !important;\n        top: 25px !important;\n        right: 30px !important;\n        span.btn-icon {\n          font-size: 20px !important;\n        }\n        &:hover {\n          opacity: 0.88 !important;\n        }\n      }\n    }\n\n    .reuseModalHolder {\n      border: 0 !important;\n      background-color: transparent !important;\n\n      &.search-modal,\n      &.video-modal {\n        background-color: rgba(255, 255, 255, 0.96) !important;\n        overflow-y: auto !important;\n\n        .innerRndComponent {\n          display: flex !important;\n          align-items: center !important;\n          justify-content: center !important;\n\n          iframe {\n            max-width: 700px !important;\n            max-height: 380px !important;\n            width: 100% !important;\n            height: 100% !important;\n            border-radius: 5px !important;\n          }\n        }\n      }\n\n      &.demo_switcher_modal {\n        border: 0 !important;\n        background-color: rgba(16, 30, 77, 0.8) !important;\n        .innerRndComponent {\n          border-radius: 8px !important;\n        }\n      }\n\n      &.video-modal {\n        background-color: transparent !important;\n      }\n\n      .innerRndComponent {\n        padding-right: 0 !important;\n      }\n    }\n\n    .reuseModalCloseBtn {\n      cursor: pointer !important;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#1a73e8'));
var AppWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "appstyle__AppWrapper",
  componentId: "dc5z0d-0"
})(["position:relative;@media (max-width:1099px){overflow:hidden;}.button__wrapper{@media only screen and (max-width:480px){text-align:center;}}.reusecore__navbar{width:100%;left:0;top:0;transition:all 0.3s ease;.reusecore__button{.btn-icon{color:", ";font-size:18px;@media only screen and (max-width:1100px){color:", ";}@media only screen and (max-width:420px){font-size:14px;}}&:hover{background:transparent;box-shadow:none;}}.button__wrapper{@media only screen and (max-width:480px){text-align:center;}}.hamburgMenu__bar{margin-left:8px;@media only screen and (max-width:420px){width:40px;}> span{background-color:", ";@media only screen and (max-width:990px){background-color:", ";}}}}.sticky-nav-active{.reusecore__navbar{background-color:", ";box-shadow:0 0 20px rgba(0,0,0,0.1);padding:5px 15px;transition:all 0.2s ease;@media (max-width:1100px){padding:10px 15px 10px;}@media (max-width:991px){padding:10px 15px 10px;}@media (max-width:767px){padding:20px 15px 10px;}@media (max-width:480px){padding:5px 15px;}.reusecore__button{.btn-icon{color:", ";}}.hamburgMenu__bar > span{background-color:", ";}}}.particle{position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;@media (max-width:990px){display:none;}}.reusecore__button{transition:all 0.3s ease;cursor:pointer;.btn-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(26,115,232);width:35px;}&:hover{box-shadow:0px 9px 20px -5px rgba(26,115,232,0.57);background-color:rgb(26,115,232);cursor:pointer;}&.withoutBg{@media (max-width:460px){margin-top:20px;margin-left:0;border:1px solid #1a73e8;min-width:auto;}&:hover{opacity:0.85;background-color:rgb(255,255,255) !important;cursor:pointer;box-shadow:none !important;}}}.control-sec-container{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;@media (max-width:767px){position:relative;top:0%;left:0%;transform:none;display:none;}.particle{position:absolute;width:50%;height:100%;top:0;left:0;overflow:hidden;}&.payment{.particle{z-index:-1;}}}.testimonialSlider{.image-gallery-content{display:flex;flex-wrap:wrap;align-items:center;@media (max-width:767px){flex-direction:column;}.image-gallery-slide-wrapper{max-width:60%;width:60%;display:flex;flex-wrap:wrap;flex-direction:column-reverse;@media screen and (max-width:1100px) and (min-width:992px){max-width:56%;width:56%;}@media (max-width:991px){max-width:50%;width:50%;}@media (max-width:767px){max-width:100%;width:100%;}> span{display:flex;@media (max-width:480px){justify-content:center;}.image-gallery-left-nav,.image-gallery-right-nav{position:relative;top:0;transform:none;margin-top:0;}.image-gallery-left-nav{}.image-gallery-right-nav{margin-left:10px;}}.image-gallery-swipe{.image-gallery-slide{.image-gallery-description{background:transparent;bottom:0px;color:#000;position:relative;.testimonialDes{box-sizing:border-box;margin-top:-10px;max-width:550px;font-size:36px;line-height:50px;color:#0f2137;font-weight:300;-webkit-letter-spacing:-0.01em;-moz-letter-spacing:-0.01em;-ms-letter-spacing:-0.01em;letter-spacing:-0.01em;@media (max-width:991px){font-size:30px;line-height:40px;max-width:100%;}@media (max-width:768px){font-size:24px;line-height:36px;}@media (max-width:480px){font-size:20px;text-align:center;}&::before{content:'CUSTOMER OPINIONS';box-sizing:border-box;margin-bottom:10px;margin-top:0px;font-size:14px;color:#1a73e8;display:block;font-weight:700;text-align:left;-webkit-letter-spacing:0.11em;-moz-letter-spacing:0.11em;-ms-letter-spacing:0.11em;letter-spacing:0.11em;@media (max-width:480px){text-align:center;}}}.testimonialDetails{@media (max-width:480px){text-align:center;}.testimonialName{font-size:18px;line-height:33px;color:#343d48;font-weight:700;margin-bottom:-3px;}.testimonialDesignation{font-size:16px;line-height:33px;color:#343d48;font-weight:400;opacity:0.8;}}}}}.image-gallery-left-nav{padding:0;font-size:0;margin-top:-15px;width:15px;height:2px;transition:width 0.25s ease-in-out;background-image:url(", ");width:20px;height:30px;background-repeat-x:repeat;background-position:center;background-size:contain;&:hover{width:35px;background-image:url(", ");&::before{background-color:#1a73e8;}&::after{background-color:#1a73e8;}}&::before{top:11px;content:'';width:10px;height:2px;background-color:#343d48;display:block;position:absolute;transform:rotate(-36deg);transition:inherit;left:0;}&::after{content:'';width:10px;height:2px;background-color:#343d48;display:block;position:absolute;bottom:11px;transform:rotate(36deg);transition:inherit;left:0;}}.image-gallery-right-nav{padding:0;font-size:0;margin-top:-15px;width:15px;height:2px;transition:all 0.25s ease-in-out;background-image:url(", ");width:30px;height:30px;background-repeat-x:repeat;background-position:center;background-size:contain;&:hover{&::before{background-color:#1a73e8;}&::after{background-color:#1a73e8;}}&::before{top:11px;content:'';width:10px;height:2px;background-color:#1a73e8;display:block;position:absolute;transform:rotate(36deg);transition:inherit;left:20px;}&::after{content:'';width:10px;height:2px;background-color:#1a73e8;display:block;position:absolute;bottom:11px;transform:rotate(-36deg);transition:inherit;left:20px;}}}.image-gallery-thumbnails-wrapper{max-width:40%;height:520px;width:40%;@media screen and (max-width:1100px) and (min-width:992px){padding-left:25px;overflow:hidden;}@media (max-width:991px){padding-left:0px;overflow:hidden;max-width:50%;width:50%;}@media (max-width:767px){max-width:100%;width:100%;height:auto;margin-top:50px;overflow:hidden;}.image-gallery-thumbnails{overflow:initial;padding-left:30px;@media (max-width:991px){padding-left:0px;}@media (max-width:767px){overflow:hidden;}}.image-gallery-thumbnails-container{position:relative;height:520px;@media screen and (max-width:1100px) and (min-width:992px){margin-left:-20px;margin-top:15px;}@media (max-width:991px){margin-left:-25px;}@media (max-width:767px){height:auto;margin-left:0px;}img{border-radius:50%;height:100%;width:100%;@media (max-width:768px){box-shadow:none;}@media (max-width:991px){width:70px;height:70px;}@media (max-width:480px){width:70px;height:70px;}}.image-gallery-thumbnail:nth-child(1){position:absolute;top:150px;left:0;width:120px;height:120px;@media (max-width:991px){position:absolute;top:220px;left:80px;width:120px;height:120px;img{width:80px;height:80px;}}@media (max-width:767px){position:relative;top:0;left:0;width:calc(33.33% - 30px);height:auto;margin-right:30px;margin-left:10px;}img{}}.image-gallery-thumbnail:nth-child(2){position:absolute;top:0;left:180px;width:100px;height:100px;@media (max-width:991px){position:absolute;top:110px;left:160px;width:100px;height:100px;}@media (max-width:767px){position:relative;top:0;width:calc(33.33% - 30px);height:auto;margin-right:30px;left:0;}}.image-gallery-thumbnail:nth-child(3){position:absolute;top:160px;left:250px;width:70px;height:70px;@media screen and (max-width:1100px) and (min-width:992px){position:absolute;top:180px;left:220px;width:70px;height:70px;}@media (max-width:991px){position:absolute;top:200px;left:272px;width:70px;height:70px;}@media (max-width:767px){position:relative;top:0;width:calc(33.33% - 30px);height:auto;margin-right:30px;left:0;}}.image-gallery-thumbnail:nth-child(4){position:absolute;bottom:100px;left:200px;width:90px;height:90px;@media (max-width:991px){position:absolute;bottom:100px;left:240px;width:90px;height:90px;}@media (max-width:767px){position:relative;top:0;width:calc(33.33% - 30px);height:auto;margin-right:30px;left:0;}}.image-gallery-thumbnail:nth-child(5){position:absolute;bottom:20px;left:20px;width:105px;height:105px;@media screen and (max-width:1100px) and (min-width:992px){position:absolute;bottom:50px;left:20px;width:105px;height:105px;}@media (max-width:991px){position:absolute;bottom:40px;left:115px;width:105px;height:105px;}@media (max-width:767px){position:relative;top:0;width:calc(33.33% - 30px);height:auto;margin-right:30px;left:0;}}.image-gallery-thumbnail{transition:all 0.35s ease;border:0;border-radius:50%;.image-gallery-thumbnail-inner{width:100%;height:100%;}&.active{border:0;transform:scale(1.3);box-shadow:0px 18px 68px 0px rgba(22,30,54,0.25);@media (max-width:1100px){box-shadow:none;}.image-gallery-thumbnail-inner{@keyframes pulse{0%{transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);opacity:1;}100%{transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);opacity:0;}}@media (max-width:991px){@keyframes pulse{0%{transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);opacity:0;}100%{transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1.2);opacity:0;}}}&::before{content:'';position:absolute;display:block;width:100%;height:100%;box-shadow:0 0 0 0.8px rgba(0,0,0,0.1);border-radius:50%;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);animation:pulse 2.2s ease-out infinite;backface-visibility:hidden;pointer-events:none;}&::after{content:'';position:absolute;display:block;width:100%;height:100%;box-shadow:0 0 0 0.8px rgba(0,0,0,0.1);border-radius:50%;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);animation:pulse 2.2s ease-out infinite;backface-visibility:hidden;pointer-events:none;animation-delay:1s;}}img{position:relative;@media (max-width:768px){margin:10px 0;}}}}}}}}.cardExtraImage{@media screen and (max-width:1440px) and (min-width:1100px){margin-left:-270px;margin-top:50px;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#1a73e8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#1a73e8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#1a73e8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#1a73e8'), _assets_image_app_substract_png__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_image_app_substract_hover_png__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_image_app_substract_hover_png__WEBPACK_IMPORTED_MODULE_4___default.a);
var BannerSquareShape = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "appstyle__BannerSquareShape",
  componentId: "dc5z0d-1"
})(["width:980px;height:1110px;background:#1a73e8;border-radius:50px;-webkit-transform:rotate(105deg);-ms-transform:rotate(105deg);transform:rotate(107deg);position:absolute;left:58%;top:-28%;z-index:-1;pointer-events:none;background-image:url(", ");@media (max-width:1300px){width:870px;height:1000px;transform:rotate(103deg);position:absolute;left:64%;}@media (max-width:1100px){display:none;}"], _assets_image_app_pattern_png__WEBPACK_IMPORTED_MODULE_5___default.a);
var BannerCircleShape = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "appstyle__BannerCircleShape",
  componentId: "dc5z0d-2"
})(["width:500px;height:500px;background:#ffc845;border-radius:50%;position:absolute;left:55%;top:47%;z-index:-1;transform:translateY(-50%);pointer-events:none;@media (max-width:1300px){width:400px;height:400px;left:63%;}@media (max-width:1100px){width:400px;height:400px;left:60%;}@media (max-width:991px){width:345px;height:345px;left:54%;}@media (max-width:767px){display:none;}"]);
var PaymentCircleShape = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "appstyle__PaymentCircleShape",
  componentId: "dc5z0d-3"
})(["width:700px;height:700px;background:#ff5400;border-radius:50%;position:absolute;left:5%;top:47%;z-index:-1;transform:translateY(-50%);pointer-events:none;@media (max-width:1440px){width:550px;height:550px;}@media (max-width:1100px){width:450px;height:450px;}@media (max-width:991px){width:350px;height:350px;}@media (max-width:767px){display:none;}"]);
var ConditionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "appstyle__ConditionWrapper",
  componentId: "dc5z0d-4"
})(["position:relative;"]);


/***/ }),

/***/ "../../node_modules/common/src/containers/Crypto/Contact/contact.style.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Crypto/Contact/contact.style.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: SectionMainWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionMainWrapper", function() { return SectionMainWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ContactFromWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "contactstyle__ContactFromWrapper",
  componentId: "sc-1laf5hu-0"
})(["display:flex;align-items:stretch;width:auto;max-width:100%;margin-left:auto;margin-right:auto;margin-bottom:25px;position:relative;@media (max-width:990px){padding:0 20px;}@media (max-width:575px){flex-direction:column;align-items:center;margin-bottom:25px;button{width:100%;}}.email_input{flex-grow:1;@media (max-width:575px){width:100%;margin-right:0;margin-bottom:20px;}&.is-material{&.is-focus{label{color:#aeb1b6;font-size:12px;}}}input{height:100%;background:#fff;font-size:16px;font-weight:500;color:#343d48;padding:5px 15px;border-color:#dadada;border-style:solid;border-width:2px;border-color:rgb(233,227,254);border-radius:10px;background-color:rgb(243,242,250);height:84px;@media (max-width:575px){height:60px;}}label{font-size:14px;color:#343d48;font-weight:500;padding-left:10px;top:5px;}}.field-wrapper{height:100%;}button{position:absolute;right:20px;border-radius:6px;background-color:rgb(106,82,253);height:60px;top:12px;&:hover{background-color:rgb(106,82,253);border-color:gb(106,82,253);opacity:0.85;}@media (max-width:990px){right:40px;}@media (max-width:575px){position:relative;right:0;top:0;height:48px;}}"]);
var SectionMainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "contactstyle__SectionMainWrapper",
  componentId: "sc-1laf5hu-1"
})(["margin-top:-450px;z-index:1;position:relative;@media (max-width:768px){padding-left:30px;padding-right:30px;}@media (max-width:480px){padding-left:15px;padding-right:15px;}.containerClass{border-radius:20px;background-color:rgb(255,255,255);box-shadow:0px 0px 94px 6px rgba(70,70,70,0.05);padding:80px 0;.contactdes{text-align:center;@media (max-width:990px){padding:0 20px;}}}"]);

/* harmony default export */ __webpack_exports__["default"] = (ContactFromWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Crypto/Contact/index.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Crypto/Contact/index.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Input */ "../../node_modules/reusecore/src/elements/Input/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _contact_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact.style */ "../../node_modules/common/src/containers/Crypto/Contact/contact.style.js");

var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Crypto/Contact/index.js";












var ContactSection = function ContactSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      row = _ref.row,
      contactForm = _ref.contactForm,
      secTitleWrapper = _ref.secTitleWrapper,
      secHeading = _ref.secHeading,
      secText = _ref.secText,
      button = _ref.button,
      note = _ref.note,
      title = _ref.title,
      description = _ref.description,
      colornote = _ref.colornote;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contact_style__WEBPACK_IMPORTED_MODULE_11__["SectionMainWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "containerClass",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })),
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contactForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contact_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputType: "text",
    placeholder: "Informe seu Nome",
    iconPosition: "right",
    isMaterial: false,
    className: "email_input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contact_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputType: "textarea",
    placeholder: "Digite a sua mensagem",
    iconPosition: "right",
    isMaterial: false,
    className: "email_input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contact_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputType: "email",
    placeholder: "Informe seu Email",
    iconPosition: "right",
    isMaterial: false,
    className: "email_input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "ENVIAR",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "contactdes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "span"
  }, note, {
    content: "Fa\xE7a parte da nossa comunidade. ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Curta a OT no Facebook. "))))))));
};

ContactSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  contactForm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secHeading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  note: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colornote: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
ContactSection.defaultProps = {
  sectionWrapper: {
    id: 'contact_section',
    as: 'section',
    pt: ['8px', '80px', '80px', '80px'],
    pb: ['0', '80px', '80px', '80px', '80px']
  },
  secTitleWrapper: {
    mb: ['40px', '40px', '40px'],
    p: ['0 15px', 0, 0, 0, 0]
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: "".concat(2),
    letterSpacing: '0.15em',
    fontWeight: "".concat(6),
    color: 'primary',
    mb: "".concat(3)
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ["".concat(6), "".concat(8)],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: "".concat(0)
  },
  row: {
    flexBox: true,
    justifyContent: 'center'
  },
  contactForm: {
    width: [1, 1, 1, 1 / 2]
  },
  button: {
    type: 'button',
    fontSize: "".concat(2),
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: "".concat(4)
  },
  note: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center']
  },
  colornote: {
    fontSize: '16px',
    fontWeight: '500',
    color: 'rgb(106, 82, 253)',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center']
  },
  title: {
    content: 'Entre em contato com a Original Total',
    fontSize: ['20px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    textAlign: ['center', 'center']
  },
  description: {
    content: 'Envie seu contato através do formulário abaixo ou mande um e-mail para seja@originaltotal.com',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center']
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ContactSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Crypto/Footer/footer.style.js":
/*!************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Crypto/Footer/footer.style.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: BgImageWrapper, List, ListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgImageWrapper", function() { return BgImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_crypto_footer_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/image/crypto/footer.png */ "../../node_modules/common/src/assets/image/crypto/footer.png");
/* harmony import */ var _assets_image_crypto_footer_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_footer_png__WEBPACK_IMPORTED_MODULE_1__);


var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "sc-1r5b4xm-0"
})(["padding:28vw 0;background-image:url(", ");background-repeat:no-repeat;background-position:top center;background-size:cover;z-index:1;@media (max-width:1440px){padding:40vw 0 60px;}@media (max-width:990px){padding:53vw 0 60px;}@media (max-width:767px){padding:115vw 0 60px;}.Language_search_select{max-width:135px;@media (max-width:575px){height:52px;margin-bottom:20px;}@media (max-width:480px){height:20px;margin-bottom:0px;}.select__control,.select-field__wrapper{height:100%;}.select__control{padding:0 15px 0 0px;box-shadow:none;position:relative;border-color:transparent;background:transparent;@media (min-width:576px){border-color:transparent;border-left:0;border-right:0;border-radius:0;&:before{content:'';position:absolute;width:1px;height:55%;background:transparent;display:block;top:50%;left:0;transform:translateY(-50%);}}.select__placeholder{font-size:16px;color:#fff;font-family:'Lato';font-weight:400;}.select__indicator{color:#fff;}.select__value-container{padding:0;.select__single-value{font-size:16px;color:#fff;font-family:'Lato';font-weight:400;}}}.select__indicator-separator{display:none;}}.appDownload{margin-top:60px;margin-bottom:30px;}.imageWrapper{display:flex;@media (max-width:1200px){flex-direction:column;}img{margin-right:15px;@media (max-width:1200px){margin-bottom:15px;margin-right:0;width:150px;}}}.copyRight{margin-top:120px;margin-left:0;margin-right:0;width:calc(100% - 80px);@media (max-width:1440px){margin-top:80px;}@media (max-width:768px){width:calc(100% - 20px);margin-top:60px;}@media (max-width:600px){margin-top:20px;}.copyRightText{font-size:16px;font-family:'Lato';font-weight:400;color:#fff;@media (max-width:480px){font-size:14px;margin-bottom:10px;}}.footer_social{margin-left:auto;margin-top:-15px;@media (max-width:600px){margin-left:0;margin-top:15px;}a{&:hover{color:#fff;opacity:0.85;}}}}.mainRow{margin-top:100px;}"], _assets_image_crypto_footer_png__WEBPACK_IMPORTED_MODULE_1___default.a);
var List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "sc-1r5b4xm-1"
})([""]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "sc-1r5b4xm-2"
})(["a{color:#fff;font-size:14px;line-height:36px;transition:all 0.2s ease;&:hover,&:focus{outline:0;text-decoration:none;opacity:0.85;}}"]);
var BgImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "footerstyle__BgImageWrapper",
  componentId: "sc-1r5b4xm-3"
})(["position:absolute;left:0;width:100%;top:-1px;@media (max-width:1200px){display:none;}img{width:100%;height:auto;display:block;}"]);

/* harmony default export */ __webpack_exports__["default"] = (FooterWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Crypto/Footer/index.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Crypto/Footer/index.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var common_src_containers_Crypto_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/containers/Crypto/Contact */ "../../node_modules/common/src/containers/Crypto/Contact/index.js");
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer.style */ "../../node_modules/common/src/containers/Crypto/Footer/footer.style.js");
/* harmony import */ var _data_Crypto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/Crypto */ "../../node_modules/common/src/data/Crypto/index.js");
/* harmony import */ var _assets_image_ride_footerapp_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/image/ride/footerapp.svg */ "../../node_modules/common/src/assets/image/ride/footerapp.svg");
/* harmony import */ var _assets_image_ride_footerapp_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_footerapp_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_ride_footerplay_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/image/ride/footerplay.svg */ "../../node_modules/common/src/assets/image/ride/footerplay.svg");
/* harmony import */ var _assets_image_ride_footerplay_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_footerplay_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_image_crypto_footer_bg_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/image/crypto/footer-bg.svg */ "../../node_modules/common/src/assets/image/crypto/footer-bg.svg");
/* harmony import */ var _assets_image_crypto_footer_bg_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_footer_bg_svg__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Crypto/Footer/index.js";















var Footer = function Footer(_ref) {
  var row = _ref.row,
      col = _ref.col,
      colOne = _ref.colOne,
      colTwo = _ref.colTwo,
      titleStyle = _ref.titleStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "contato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_containers_Crypto_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_10__["BgImageWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: _assets_image_crypto_footer_bg_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "Footer background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row mainRow"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, colOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Baixe o App"
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "imageWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: _assets_image_ride_footerapp_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "App Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: _assets_image_ride_footerplay_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "PlaystoreImage Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, colTwo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), _data_Crypto__WEBPACK_IMPORTED_MODULE_11__["menuWidget"].map(function (widget) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: widget.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: widget.title
    }, titleStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_10__["List"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, widget.menuItems.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_10__["ListItem"], {
        key: "list__item-".concat(item.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: item.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "ListItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, item.text)));
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row copyRight"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: "Copyright 2019 @Original Total.",
    className: "copyRightText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))));
}; // Footer style props


Footer.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colOne: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colTwo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // Footer default style

Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-4px',
    mr: '-4px'
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '33%', '33%'],
    mb: ['30px', 0],
    pl: ['0px', 0],
    pr: ['0px', '0px', 0]
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '67%', '67%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col default style
  col: {
    width: ['100%', 1 / 3, 1 / 3, 1 / 3],
    pl: [0, '15px'],
    pr: [0, '15px'],
    mb: ['30px', '30px']
  },
  // widget title default style
  titleStyle: {
    color: '#FFFFFF',
    fontSize: ['15px', '16px', '16px', '18px', '18px'],
    fontWeight: '600',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    fontFamily: 'Poppins'
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#FFFFFF',
    fontSize: '16px',
    mb: '12px',
    fontWeight: '600',
    fontFamily: 'Lato'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "../../node_modules/common/src/containers/Crypto/crypto.style.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Crypto/crypto.style.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: GlobalStyle, ContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body{\n    font-family: 'Poppins', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Poppins', sans-serif;\n  }\n  p{\n    font-family: 'Poppins', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #000;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: rgb(255,148,147);;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: rgb(255,148,147);\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: rgb(255,148,147);;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #6d4efe;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n"], ["\n  body{\n    font-family: 'Poppins', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Poppins', sans-serif;\n  }\n  p{\n    font-family: 'Poppins', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #000;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: rgb(255,148,147);;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: rgb(255,148,147);\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: rgb(255,148,147);;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #6d4efe;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "cryptostyle__ContentWrapper",
  componentId: "sc-1e98ter-0"
})(["overflow:hidden;.sticky-nav-active{.saas_navbar{background:#fff;box-shadow:0px 3px 8px 0px rgba(43,83,135,0.08);padding:15px 0;.main-logo{display:none;}.logo-alt{display:block;}.main_menu{li{a{color:#000;&:hover{color:rgb(255,148,147);}}&.is-current{a{color:rgb(255,148,147);}}}}}.hamburgMenu__bar{> span{background:#2aa275;}}}.saas_navbar{position:fixed;top:0;left:0;width:100%;transition:0.35s ease-in-out;padding:30px 0;.logo-alt{display:none;}.main_menu{margin-right:40px;li{display:inline-block;padding-left:13px;padding-right:13px;&:first-child{padding-left:0;}&:last-child{padding-right:0;}&.is-current{a{color:rgb(255,148,147);}}a{padding:5px;font-size:16px;font-weight:400;color:#fff;transition:0.15s ease-in-out;&:hover{color:rgb(255,148,147);}}}@media (max-width:990px){display:none;}}.navbar_button{@media (max-width:990px){display:none;}button{border-radius:6px;background-image:-moz-linear-gradient( 29deg,rgb(255,148,147) 0%,rgb(255,120,162) 100% );background-image:-webkit-linear-gradient( 29deg,rgb(255,148,147) 0%,rgb(255,120,162) 100% );background-image:-ms-linear-gradient( 29deg,rgb(255,148,147) 0%,rgb(255,120,162) 100% );&:hover{box-shadow:-6.691px 7.431px 20px 0px rgba(255,131,157,0.2);}> span{font-weight:700;letter-spacing:1px;}}}.reusecore-drawer__handler{@media (min-width:991px){display:none !important;}.hamburgMenu__bar{> span{}}}}"]);

/***/ }),

/***/ "../../node_modules/common/src/containers/Hosting/Features/index.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Hosting/Features/index.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _hosting_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hosting.style */ "../../node_modules/common/src/containers/Hosting/hosting.style.js");
/* harmony import */ var _data_Hosting_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/Hosting/data */ "../../node_modules/common/src/data/Hosting/data.js");
/* harmony import */ var _assets_image_hosting_shape_1_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/image/hosting/shape-1.svg */ "../../node_modules/common/src/assets/image/hosting/shape-1.svg");
/* harmony import */ var _assets_image_hosting_shape_1_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_shape_1_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_image_hosting_shape_2_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/image/hosting/shape-2.svg */ "../../node_modules/common/src/assets/image/hosting/shape-2.svg");
/* harmony import */ var _assets_image_hosting_shape_2_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_shape_2_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_hosting_shape_3_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/image/hosting/shape-3.svg */ "../../node_modules/common/src/assets/image/hosting/shape-3.svg");
/* harmony import */ var _assets_image_hosting_shape_3_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_shape_3_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_image_hosting_shape_4_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/image/hosting/shape-4.svg */ "../../node_modules/common/src/assets/image/hosting/shape-4.svg");
/* harmony import */ var _assets_image_hosting_shape_4_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_shape_4_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_hosting_shape_5_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/image/hosting/shape-5.svg */ "../../node_modules/common/src/assets/image/hosting/shape-5.svg");
/* harmony import */ var _assets_image_hosting_shape_5_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_shape_5_svg__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Hosting/Features/index.js";
















var FeatureSection = function FeatureSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      row = _ref.row,
      col = _ref.col,
      secTitleWrapper = _ref.secTitleWrapper,
      secHeading = _ref.secHeading,
      secText = _ref.secText,
      featureItemHeading = _ref.featureItemHeading,
      featureItemDes = _ref.featureItemDes;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secText, {
    content: "NOSSOS SERVI\xC7OS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "A Original Total fornece uma gama completa de servi\xE7os",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), _data_Hosting_data__WEBPACK_IMPORTED_MODULE_10__["FEATURES_DATA"].map(function (featureItem, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, {
      key: "feature-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), featureItem.animation ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
      bottom: true,
      delay: index * 120,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_hosting_style__WEBPACK_IMPORTED_MODULE_9__["FeatureItem"], {
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, featureItemHeading, {
        content: featureItem.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, featureItemDes, {
        content: featureItem.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })),
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: featureItem.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }),
      additionalContent: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "hover-shape-1 hover-shape",
        src: _assets_image_hosting_shape_1_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
        alt: "Shape One",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "hover-shape-2 hover-shape",
        src: _assets_image_hosting_shape_2_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
        alt: "Shape Two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "hover-shape-3 hover-shape",
        src: _assets_image_hosting_shape_3_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
        alt: "Shape Three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "hover-shape-4 hover-shape",
        src: _assets_image_hosting_shape_4_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        alt: "Shape Four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "hover-shape-5 hover-shape",
        src: _assets_image_hosting_shape_5_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
        alt: "Shape Five",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_hosting_style__WEBPACK_IMPORTED_MODULE_9__["FeatureItem"], {
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, featureItemHeading, {
        content: featureItem.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, featureItemDes, {
        content: featureItem.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      })),
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: featureItem.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }),
      additionalContent: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "hover-shape-1 hover-shape",
        src: _assets_image_hosting_shape_1_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
        alt: "Shape One",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "hover-shape-2 hover-shape",
        src: _assets_image_hosting_shape_2_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
        alt: "Shape Two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "hover-shape-3 hover-shape",
        src: _assets_image_hosting_shape_3_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
        alt: "Shape Three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "hover-shape-4 hover-shape",
        src: _assets_image_hosting_shape_4_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        alt: "Shape Four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "hover-shape-5 hover-shape",
        src: _assets_image_hosting_shape_5_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
        alt: "Shape Five",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }));
  }))));
};

FeatureSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secHeading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureItemHeading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureItemDes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
FeatureSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px'],
    id: 'servicos'
  },
  secTitleWrapper: {
    mb: ['50px', '60px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff3e00',
    mb: '10px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  col: {
    className: 'col',
    width: [1, 1 / 2, 1 / 3, 1 / 3],
    pr: '15px',
    pl: '15px',
    mb: '30px'
  },
  featureItemHeading: {
    fontSize: ['18px', '18px', '16px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '10px'],
    letterSpacing: '-0.020em',
    maxWidth: ['auto', 'auto', 'auto', '180px']
  },
  featureItemDes: {
    fontSize: ['14px', '14px', '14px', '15px'],
    lineHeight: '1.75',
    color: '#343d48cc',
    mb: ['20px', '20px', '20px', '20px']
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Hosting/hosting.style.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Hosting/hosting.style.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: GlobalStyle, ContentWrapper, FeatureItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureItem", function() { return FeatureItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;    \n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #343d48;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: #eb4d4b;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: #eb4d4b;\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: #eb4d4b;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #eb4d4b;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n  \n\n  /* Modal default style */\n  button.modalCloseBtn {\n    color: ", " !important;\n\n    &.alt {\n      background-color: ", " !important;\n      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;\n    }\n  }\n"], ["\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;    \n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #343d48;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: #eb4d4b;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: #eb4d4b;\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: #eb4d4b;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #eb4d4b;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n  \n\n  /* Modal default style */\n  button.modalCloseBtn {\n    color: ", " !important;\n\n    &.alt {\n      background-color: ", " !important;\n      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#5268db'));
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "hostingstyle__ContentWrapper",
  componentId: "qxdvd0-0"
})(["overflow:hidden;.sticky-nav-active{.hosting_navbar{background:#fff;box-shadow:0px 3px 8px 0px rgba(43,83,135,0.08);padding:15px 0;}}.hosting_navbar{position:fixed;top:0;left:0;width:100%;transition:0.35s ease-in-out;padding:30px 0;.main_menu{margin-right:40px;li{display:inline-block;padding-left:13px;padding-right:13px;&:first-child{padding-left:0;}&:last-child{padding-right:0;}&.is-current{a{color:#eb4d4b;}}a{padding:5px;font-size:16px;font-weight:400;color:#343d48;transition:0.15s ease-in-out;&:hover{color:#eb4d4b;}}}@media (max-width:990px){display:none;}}.navbar_button{@media (max-width:990px){display:none;}}.reusecore-drawer__handler{@media (min-width:991px){display:none !important;}.hamburgMenu__bar{> span{}}}}.info-sec-container{@media (min-width:768px){position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1;}@media (max-width:768px) and (min-width:768px){top:40%;}@media (max-width:767px){padding-top:40px;}}.accordion_item{border-bottom:1px solid #ebebeb;border-top:0;}.accordion_title{padding:23px 30px;@media (max-width:575px){padding-left:0;padding-right:0;}}.accordion_body{padding:0 30px 23px 30px;}.service_section{background:linear-gradient( to bottom,#ffffff 0%,#f9fbfd 50%,#ffffff 100% );.service_col{border-width:1px 0 0 1px;border-style:solid;border-color:#f1f4f6;&:nth-child(3n + 3),&:last-child{border-right-width:1px;}&:nth-last-child(-n + 3){border-bottom-width:1px;}.service_item{position:relative;height:100%;transition:0.2s ease-in-out;&:hover{box-shadow:0 40px 90px -30px rgba(39,79,117,0.2);z-index:1;}&:before{content:'';position:absolute;width:85%;height:0;bottom:0;left:50%;display:block;pointer-events:0;transform:translateX(-50%);}&:hover{&:before{box-shadow:0px 0px 60px 0px rgba(39,79,117,0.2);}}img{width:80px;height:70px;}}}}@media (max-width:990px){.glide__slide--active .pricing_table{box-shadow:0px 0px 30px rgba(0,0,0,0.05);border:0;}}"]);
var FeatureItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "hostingstyle__FeatureItem",
  componentId: "qxdvd0-1"
})(["position:relative;padding:50px 30px;border:1px solid #f2f4f7;border-radius:5px;background-color:#fff;transition:0.35s ease-in-out;@media (max-width:768px) and (min-width:768px){padding:30px 20px;}@media (max-width:575px){padding:40px 25px;}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;opacity:0;background:linear-gradient( 138deg,rgb(249,212,35) 0%,rgb(255,78,80) 100% );transition:0.35s ease-in-out;}& > div{position:relative;}h2,p{transition:0.35s ease-in-out;}.hover-shape{width:20px;height:auto;position:absolute;z-index:1;opacity:0;pointer-events:none;transition:0.6s cubic-bezier(0.215,0.61,0.355,1);transform:rotate(260deg);}.hover-shape-1{left:0;top:20px;}.hover-shape-2{right:29%;top:0;}.hover-shape-3{right:0;bottom:35%;}.hover-shape-4{right:30%;bottom:0;}.hover-shape-5{left:0;bottom:30%;}.icon__wrapper{margin-bottom:40px;@media (max-width:768px) and (min-width:768px){margin-bottom:30px;}@media (max-width:575px){margin-bottom:25px;}i{line-height:1;font-size:65px;transition:0.35s ease-in-out;@media (max-width:768px) and (min-width:768px){font-size:50px;}&.violate{color:#8569ff;}&.yellow{color:#ffb129;}&.green{color:#18d379;}}}.button__wrapper{a{color:#c2cbd6;font-size:24px;transition:0.35s ease-in-out;@media (max-width:768px) and (min-width:768px){font-size:20px;}@media (max-width:575px){font-size:22px;}}}&:hover{background-color:#eb4d4b;&:before{opacity:0.37;}.hover-shape-1{left:-40px;top:20px;}.hover-shape-2{right:29%;top:-47px;}.hover-shape-3{right:-27px;bottom:35%;}.hover-shape-4{right:30%;bottom:-60px;}.hover-shape-5{left:-35px;bottom:30%;}.hover-shape{transform:rotate(0);opacity:1;}h2,p{color:#fff;}.icon__wrapper{i{color:#fff;}}.button__wrapper{a{color:#fff;}}}"]);

/***/ }),

/***/ "../../node_modules/common/src/containers/Ride/Banner/banner.style.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Ride/Banner/banner.style.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: BannerWrapper, EmailInputWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerWrapper", function() { return BannerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailInputWrapper", function() { return EmailInputWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_ride_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/image/ride/background.png */ "../../node_modules/common/src/assets/image/ride/background.png");
/* harmony import */ var _assets_image_ride_background_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_background_png__WEBPACK_IMPORTED_MODULE_1__);


var BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "bannerstyle__BannerWrapper",
  componentId: "sc-1j49zug-0"
})(["background-image:url(", ");display:flex;height:105vh;overflow:hidden;background-repeat:no-repeat;background-position:105% center;background-size:1020px;position:relative;margin-top:-40px;@media (max-width:1750px){background-size:900px;}@media (max-width:1600px){background-position:102% center;background-size:800px;height:94vh;}@media (max-width:1440px){background-position:106% center;background-size:700px;height:93vh;background-size:contain;margin-top:0;}@media (max-width:1280px){background-position:102% center;background-size:contain;height:100%;margin-bottom:60px;margin-top:0;}@media (max-width:1024px){background-position:135% center;background-size:contain;height:100%;margin-bottom:60px;overflow:hidden;}@media (max-width:990px){background-position:100% center;background-size:contain;height:100%;margin-bottom:0px;overflow:hidden;background-image:none;background:#faf8ff;padding-bottom:100px;}@media (max-width:480px){padding-bottom:70px;}.image_area{position:relative;img{padding-top:390px;@media (max-width:1750px){padding-top:310px;}@media (max-width:1600px){padding-top:210px;}@media (max-width:1440px){height:93%;padding-top:150px;}@media (max-width:1280px){height:100%;padding-top:30px;}@media (max-width:990px){display:none;}}.man_image_area{position:absolute;margin-left:30px;@media (max-width:1750px){margin-left:10px;}@media (max-width:1440px){height:93%;margin-left:0px;}@media (max-width:1280px){margin-left:-20px;height:65%;}}.car_image_area{margin-left:180px;@media (max-width:1440px){height:60%;padding-top:30px;margin-left:30px;}}}.bannerImageBtn{display:flex;margin-top:5px;.app_image_area{margin-right:15px;}}.contentArea{@media (max-width:990px){width:100%;}}.container{@media (max-width:480px){padding-left:15px;padding-right:15px;}}"], _assets_image_ride_background_png__WEBPACK_IMPORTED_MODULE_1___default.a);
var EmailInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__EmailInputWrapper",
  componentId: "sc-1j49zug-1"
})(["display:flex;margin-top:25px;.reusecore__input{width:55%;margin-right:15px;.field-wrapper{input{height:56px;background-color:rgb(255,255,255);box-shadow:0px 7px 25px rgba(0,0,0,0.08);border:0;border-radius:4px;color:#15172c;font-family:'Lato';font-size:16px;font-weight:500;padding-left:30px;@media (max-width:480px){height:50px;}&:placeholder{color:#15172c;font-family:'Lato';font-size:16px;font-weight:500;opacity:1;}}}}button{@media (max-width:480px){height:50px;}@media (max-width:400px){padding-left:15px;padding-right:15px;}> span{font-weight:700;}&:hover{box-shadow:0px 9px 21px rgba(131,84,255,0.25);}}"]);


/***/ }),

/***/ "../../node_modules/common/src/containers/Ride/Banner/index.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Ride/Banner/index.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./banner.style */ "../../node_modules/common/src/containers/Ride/Banner/banner.style.js");
/* harmony import */ var _assets_image_ride_man_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/image/ride/man.png */ "../../node_modules/common/src/assets/image/ride/man.png");
/* harmony import */ var _assets_image_ride_man_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_man_png__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Ride/Banner/index.js";











var BannerSection = function BannerSection(_ref) {
  var row = _ref.row,
      contentArea = _ref.contentArea,
      imageArea = _ref.imageArea,
      greetingStyle = _ref.greetingStyle,
      aboutStyle = _ref.aboutStyle,
      greetingStyleTwo = _ref.greetingStyleTwo,
      button = _ref.button;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_9__["BannerWrapper"], {
    id: "banner_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contentArea, {
    className: "contentArea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Validamos a Originalidade dos seus produtos."
  }, greetingStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Aproximamos a sua marca das pessoas atrav\xE9s de uma experi\xEAncia digital \xFAnica."
  }, greetingStyleTwo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_9__["EmailInputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#nuvem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "QUERO SABER MAIS"
  }, button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageArea, {
    className: "image_area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: _assets_image_ride_man_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    className: "man_image_area",
    alt: "Man Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })))));
};

BannerSection.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  contentArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  greetingStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  nameStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  designationStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  aboutStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  roleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  roleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  greetingStyleTwo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'stretch'
  },
  contentArea: {
    width: ['100%', '100%', '50%', '50%'],
    p: ['90px 0 0px 0', '95px 0 0px 0', '150px 0 0px 0', '150px 0 0px 0', '210px 0 0px 0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  imageArea: {
    width: ['100%', '100%', '50%', '50%'],
    flexBox: true,
    alignItems: 'flex-end',
    position: 'relative'
  },
  greetingStyle: {
    as: 'h1',
    color: '#15172c',
    fontSize: ['32px', '44px', '46px', '50px', '52px'],
    fontWeight: '600',
    fontFamily: 'Poppins',
    lineHeight: ['32px', '44px', '46px', '50px', '52px'],
    mb: '20px',
    mt: '20px'
  },
  greetingStyleTwo: {
    as: 'h1',
    color: '#15172c',
    fontSize: ['22px', '28px', '32px', '32px', '34px'],
    fontWeight: '400',
    fontFamily: 'Poppins',
    lineHeight: ['26px', '44spx', '46px', '50px', '52px'],
    mb: '8px'
  },
  roleWrapper: {
    flexBox: true,
    mb: '28px'
  },
  roleStyle: {
    as: 'h4',
    fontSize: ['18px', '18px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#fff',
    mb: '0',
    ml: '10px'
  },
  aboutStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontFamily: 'Lato',
    fontWeight: '400',
    color: '#15172c',
    lineHeight: '1.5',
    mb: '30px',
    mt: '30px'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    minHeight: '55px',
    pt: '0px',
    pb: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BannerSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Ride/FeatureSlider/featureSlider.style.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Ride/FeatureSlider/featureSlider.style.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_ride_mobile1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/image/ride/mobile1.png */ "../../node_modules/common/src/assets/image/ride/mobile1.png");
/* harmony import */ var _assets_image_ride_mobile1_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_mobile1_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_ride_mockup_bg_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/ride/mockup_bg.svg */ "../../node_modules/common/src/assets/image/ride/mockup_bg.svg");
/* harmony import */ var _assets_image_ride_mockup_bg_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_mockup_bg_svg__WEBPACK_IMPORTED_MODULE_2__);



var FeatureSliderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureSliderstyle__FeatureSliderWrapper",
  componentId: "sc-9f6cy3-0"
})(["position:relative;padding-top:60px;padding-bottom:60px;@media (max-width:1600px){padding-bottom:100px;}@media (max-width:1440px){padding-top:140px;padding-bottom:240px;}@media (max-width:1024px){padding-top:140px;padding-bottom:140px;}@media (max-width:990px){padding-bottom:140px;}.container{max-width:100% !important;padding:0;}.FeatureSlider{position:relative;background-image:url(", ");display:flex;height:100vh;background-repeat:no-repeat;background-size:contain;background-position:center;@media (max-width:1440px){background-position:bottom;}@media (max-width:1024px){background-image:none;height:100%;}@media (max-width:990px){background-position:center;}@media (max-width:480px){background-image:none;}.image-gallery{position:relative;z-index:2;margin:0 auto -60px;}.image-gallery-slide-wrapper{width:375px;margin-left:auto;margin-right:auto;position:relative;height:749px;@media (max-width:990px){width:250px;height:505px;}&::before{content:'';background-image:url(", ");position:absolute;width:100%;height:100%;top:0;left:0;z-index:1;background-repeat:no-repeat;background-size:contain;}&:after{content:'';width:calc(100% - 20px);height:calc(100% - 20px);top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 0 68px rgba(42,26,142,0.2);display:block;position:absolute;border-radius:50px;}.image-gallery-swipe{padding:19px 15px 16px 19px;overflow:hidden;height:100%;@media (max-width:990px){padding:9px 6px 8px 6px;}.image-gallery-slides{height:100%;border-radius:20px;@media (max-width:990px){border-radius:40px;}}}}.image-gallery-bullets{bottom:auto;margin:0;position:absolute;width:100%;z-index:4;top:auto;bottom:-70px;left:auto;display:flex;justify-content:center;align-items:center;.image-gallery-bullets-container{margin:0;padding:0;text-align:center;display:flex;flex-direction:row;.image-gallery-bullet{padding:0;margin:0;margin-right:15px;transition:all 0.3s ease;width:13px;height:13px;border-radius:50%;top:50%;left:0;box-shadow:0 1px 2px rgba(0,0,0,0.16);z-index:1;background:#fff;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);&::after{content:'';position:absolute;width:8px;height:8px;border-radius:50%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#f3f2fb;-webkit-transition:0.25s ease-in-out;transition:0.25s ease-in-out;}&.active{box-shadow:0 1px 2px rgba(0,0,0,0.2);background:#fff;width:13px;height:13px;&::after{background-color:#6150cc;width:8px;height:8px;}}}}}.image-gallery-thumbnails{display:none;}}"], _assets_image_ride_mockup_bg_svg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_image_ride_mobile1_png__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (FeatureSliderWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Ride/FeatureSlider/index.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Ride/FeatureSlider/index.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-gallery */ "react-image-gallery");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-gallery/styles/css/image-gallery.css */ "../../node_modules/react-image-gallery/styles/css/image-gallery.css");
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _featureSlider_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./featureSlider.style */ "../../node_modules/common/src/containers/Ride/FeatureSlider/featureSlider.style.js");
/* harmony import */ var _assets_image_ride_mask_0_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/image/ride/mask-0.png */ "../../node_modules/common/src/assets/image/ride/mask-0.png");
/* harmony import */ var _assets_image_ride_mask_0_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_mask_0_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_image_ride_mask_1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/image/ride/mask-1.png */ "../../node_modules/common/src/assets/image/ride/mask-1.png");
/* harmony import */ var _assets_image_ride_mask_1_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_mask_1_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_ride_mask_2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/image/ride/mask-2.png */ "../../node_modules/common/src/assets/image/ride/mask-2.png");
/* harmony import */ var _assets_image_ride_mask_2_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_mask_2_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_image_ride_mask_3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/image/ride/mask-3.png */ "../../node_modules/common/src/assets/image/ride/mask-3.png");
/* harmony import */ var _assets_image_ride_mask_3_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_mask_3_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_ride_mask_4_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/image/ride/mask-4.png */ "../../node_modules/common/src/assets/image/ride/mask-4.png");
/* harmony import */ var _assets_image_ride_mask_4_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_mask_4_png__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Ride/FeatureSlider/index.js";















var images = [{
  original: "".concat(_assets_image_ride_mask_0_png__WEBPACK_IMPORTED_MODULE_11___default.a)
}, {
  original: "".concat(_assets_image_ride_mask_1_png__WEBPACK_IMPORTED_MODULE_12___default.a)
}, {
  original: "".concat(_assets_image_ride_mask_2_png__WEBPACK_IMPORTED_MODULE_13___default.a)
}, {
  original: "".concat(_assets_image_ride_mask_3_png__WEBPACK_IMPORTED_MODULE_14___default.a)
}, {
  original: "".concat(_assets_image_ride_mask_4_png__WEBPACK_IMPORTED_MODULE_15___default.a)
}];

var FeatureSlider = function FeatureSlider(_ref) {
  var secTitleWrapper = _ref.secTitleWrapper,
      secTitle = _ref.secTitle,
      secDescription = _ref.secDescription;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_featureSlider_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "appslider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "FeatureSliderInner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "100%",
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {
    up: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitle, {
    content: "App Original Total",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {
    up: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "Permita que seus consumidores validem a originalidade dos seus produtos de forma simples e r\xE1pida.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "FeatureSlider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_3___default.a, {
    items: images,
    className: "Slider-img",
    showPlayButton: false,
    showFullscreenButton: false,
    showNav: false,
    showBullets: true,
    autoPlay: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))));
}; // FeatureSlider style props


FeatureSlider.propTypes = {
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // FeatureSlider default style

FeatureSlider.defaultProps = {
  secTitleWrapper: {
    mb: ['65px', '65px', '70px', '70px', '70px']
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '36px'],
    fontWeight: '600',
    color: '#15172C',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    textAlign: 'center',
    fontFamily: 'Poppins'
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
    width: '300px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    fontFamily: 'Lato'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureSlider);

/***/ }),

/***/ "../../node_modules/common/src/containers/Ride/Navbar/index.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Ride/Navbar/index.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Navbar */ "../../node_modules/reusecore/src/elements/Navbar/index.js");
/* harmony import */ var reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Drawer */ "../../node_modules/reusecore/src/elements/Drawer/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var _components_HamburgMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/HamburgMenu */ "../../node_modules/common/src/components/HamburgMenu/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var _data_Ride__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/Ride */ "../../node_modules/common/src/data/Ride/index.js");
/* harmony import */ var _components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/ScrollSpyMenu */ "../../node_modules/common/src/components/ScrollSpyMenu/index.js");
/* harmony import */ var _assets_image_logo_ot_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/image/logo-ot.png */ "../../node_modules/common/src/assets/image/logo-ot.png");
/* harmony import */ var _assets_image_logo_ot_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_logo_ot_png__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Ride/Navbar/index.js";















var Navbar = function Navbar(_ref) {
  var navbarStyle = _ref.navbarStyle,
      logoStyle = _ref.logoStyle,
      row = _ref.row,
      menuWrapper = _ref.menuWrapper;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_9__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch; // Toggle drawer


  var toggleHandler = function toggleHandler() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, navbarStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "#",
    logoSrc: _assets_image_logo_ot_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    title: "Portfolio",
    logoStyle: logoStyle,
    className: "main-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "#",
    logoSrc: _assets_image_logo_ot_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    title: "Portfolio",
    logoStyle: logoStyle,
    className: "logo-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, menuWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "main_menu menuLeft",
    menuItems: _data_Ride__WEBPACK_IMPORTED_MODULE_10__["MENU_LEFT_ITEMS"],
    offset: -140,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "main_menu menuRight",
    menuItems: _data_Ride__WEBPACK_IMPORTED_MODULE_10__["MENU_RIGHT_ITEMS"],
    offset: -70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "420px",
    placement: "right",
    drawerHandler: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
      barColor: "#3444f1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "mobile_menu",
    menuItems: _data_Ride__WEBPACK_IMPORTED_MODULE_10__["MENU_ITEMS"],
    drawerClose: true,
    offset: -100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))))));
};

Navbar.propTypes = {
  navbarStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  menuWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
Navbar.defaultProps = {
  navbarStyle: {
    className: 'hosting_navbar',
    minHeight: '70px',
    display: 'block'
  },
  row: {
    flexBox: true,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  logoStyle: {
    maxWidth: ['60px', '70px']
  },
  button: {
    type: 'button',
    fontSize: '16px',
    pl: '0',
    pr: '0',
    colors: 'primary',
    minHeight: 'auto'
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "../../node_modules/common/src/containers/Ride/ride.style.js":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/containers/Ride/ride.style.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: GlobalStyle, ContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body {\n    font-family: 'Lato', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Poppins', sans-serif;\n    margin-top: 0;\n  }\n  p{\n    font-family: 'Lato', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 500;\n            color: #000;\n            position: relative;\n            font-family: 'Raleway', sans-serif;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              &:before {\n                transform: scaleX(1);\n                transform-origin: left center 0;\n                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n              }\n            }\n            &:before{\n              content: '';\n              position: absolute;\n              width: calc(100% - 8px);\n              height: 11px;\n              background: #ff3e00;\n              bottom: 2px;\n              left: -4px;\n              z-index: -1;\n              transform: scaleX(0);\n              transform-origin: right center 0;\n              transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n            }\n          }\n          &.is-current {\n            a {\n              &:before {\n                transform: scaleX(1);\n                transform-origin: left center 0;\n                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n        font-family: 'Raleway', sans-serif;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #3444f1;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n"], ["\n  body {\n    font-family: 'Lato', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Poppins', sans-serif;\n    margin-top: 0;\n  }\n  p{\n    font-family: 'Lato', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 500;\n            color: #000;\n            position: relative;\n            font-family: 'Raleway', sans-serif;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              &:before {\n                transform: scaleX(1);\n                transform-origin: left center 0;\n                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n              }\n            }\n            &:before{\n              content: '';\n              position: absolute;\n              width: calc(100% - 8px);\n              height: 11px;\n              background: #ff3e00;\n              bottom: 2px;\n              left: -4px;\n              z-index: -1;\n              transform: scaleX(0);\n              transform-origin: right center 0;\n              transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n            }\n          }\n          &.is-current {\n            a {\n              &:before {\n                transform: scaleX(1);\n                transform-origin: left center 0;\n                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n        font-family: 'Raleway', sans-serif;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #3444f1;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ridestyle__ContentWrapper",
  componentId: "uq6z3r-0"
})(["overflow:hidden;.menuLeft{margin-left:105px;}.menuRight{margin-left:auto;}.sticky-nav-active{.hosting_navbar{background:#fff;box-shadow:0px 3px 8px 0px rgba(43,83,135,0.08);padding:15px 0;@media (min-width:1440px){padding:25px 0;}.main-logo{display:none;}.logo-alt{display:block;}}}.portfolio_button{border-radius:0;border:2px solid ", ";background-color:transparent;position:relative;min-height:50px;text-transform:initial;transition:0.2s ease-in-out;&:before{content:'';background-color:", ";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);display:block;z-index:-1;top:8px;left:8px;transition:inherit;}&:hover{border-color:transparent;&:before{top:0;left:0;width:100%;height:100%;}}}.hosting_navbar{position:fixed;top:0;left:0;width:100%;transition:0.35s ease-in-out;padding:35px 0 30px 0;@media (max-width:990px){padding:30px 0;}.logo-alt{display:none;}.main_menu{margin-right:40px;li{display:inline-block;padding-left:30px;padding-right:30px;color:#000;&:first-child{padding-left:0;}&:last-child{padding-right:0;}&.is-current{a{color:#000;&:after{transform:scaleX(1);transform-origin:left center 0;transition:transform 0.35s cubic-bezier(0.43,0.49,0.51,0.68);}}}a{padding:5px 0;font-size:16px;font-weight:500;font-family:'Poppins',sans-serif;color:#15172c;position:relative;transition:0.15s ease-in-out;&:hover{color:#15172c;&:after{transform:scaleX(1);transform-origin:left center 0;transition:transform 0.35s cubic-bezier(0.43,0.49,0.51,0.68);}}&:after{content:'';position:absolute;width:100%;height:9px;background:linear-gradient(to left,#ff3e00,#ff3e00);bottom:5px;left:6px;z-index:-1;transform:scaleX(0);transform-origin:right center 0;transition:transform 0.7s cubic-bezier(0.19,1,0.22,1) 0s;}}}@media (max-width:990px){display:none;}}.navbar_button{button{font-family:'Raleway',sans-serif;font-weight:700;}@media (max-width:990px){display:none;}}.reusecore-drawer__handler{@media (min-width:991px){display:none !important;}.hamburgMenu__bar{> span{}}}}.sticky-nav-active{.hosting_navbar{.main_menu{li{a{color:#302b4e;&:after{background:#ff3e00;}}}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.borderColor', '#1b1e25'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#3444f1'));

/***/ }),

/***/ "../../node_modules/common/src/contexts/DrawerContext.js":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/contexts/DrawerContext.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: DrawerContext, DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/contexts/DrawerContext.js";

var initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

var DrawerContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var DrawerProvider = function DrawerProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DrawerContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children);
};

/***/ }),

/***/ "../../node_modules/common/src/data/Crypto/index.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/data/Crypto/index.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: MENU_ITEMS, TESTIMONIALS, TRANSACTIONS_FEATURE, PROOFS_FEATURE, SCALABLE_FEATURE, BETA_FEATURE, menuWidget, Language_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTIMONIALS", function() { return TESTIMONIALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTIONS_FEATURE", function() { return TRANSACTIONS_FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROOFS_FEATURE", function() { return PROOFS_FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCALABLE_FEATURE", function() { return SCALABLE_FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BETA_FEATURE", function() { return BETA_FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuWidget", function() { return menuWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language_NAMES", function() { return Language_NAMES; });
/* harmony import */ var _assets_image_crypto_author_4_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/crypto/author-4.jpg */ "../../node_modules/common/src/assets/image/crypto/author-4.jpg");
/* harmony import */ var _assets_image_crypto_author_4_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_author_4_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_crypto_author_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/crypto/author-2.jpg */ "../../node_modules/common/src/assets/image/crypto/author-2.jpg");
/* harmony import */ var _assets_image_crypto_author_2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_author_2_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_crypto_author_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/crypto/author-3.jpg */ "../../node_modules/common/src/assets/image/crypto/author-3.jpg");
/* harmony import */ var _assets_image_crypto_author_3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_author_3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_crypto_author_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/crypto/author-1.jpg */ "../../node_modules/common/src/assets/image/crypto/author-1.jpg");
/* harmony import */ var _assets_image_crypto_author_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_author_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_crypto_tf1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/crypto/tf1.svg */ "../../node_modules/common/src/assets/image/crypto/tf1.svg");
/* harmony import */ var _assets_image_crypto_tf1_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_tf1_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_crypto_tf2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/crypto/tf2.svg */ "../../node_modules/common/src/assets/image/crypto/tf2.svg");
/* harmony import */ var _assets_image_crypto_tf2_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_tf2_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_crypto_tf3_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/crypto/tf3.svg */ "../../node_modules/common/src/assets/image/crypto/tf3.svg");
/* harmony import */ var _assets_image_crypto_tf3_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_tf3_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_crypto_tf4_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/crypto/tf4.svg */ "../../node_modules/common/src/assets/image/crypto/tf4.svg");
/* harmony import */ var _assets_image_crypto_tf4_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_tf4_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_crypto_proof1_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/image/crypto/proof1.svg */ "../../node_modules/common/src/assets/image/crypto/proof1.svg");
/* harmony import */ var _assets_image_crypto_proof1_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_proof1_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_crypto_proof2_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/image/crypto/proof2.svg */ "../../node_modules/common/src/assets/image/crypto/proof2.svg");
/* harmony import */ var _assets_image_crypto_proof2_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_proof2_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_crypto_proof3_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/image/crypto/proof3.svg */ "../../node_modules/common/src/assets/image/crypto/proof3.svg");
/* harmony import */ var _assets_image_crypto_proof3_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_proof3_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_image_crypto_proof4_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/image/crypto/proof4.svg */ "../../node_modules/common/src/assets/image/crypto/proof4.svg");
/* harmony import */ var _assets_image_crypto_proof4_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_proof4_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_image_crypto_proof5_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/image/crypto/proof5.svg */ "../../node_modules/common/src/assets/image/crypto/proof5.svg");
/* harmony import */ var _assets_image_crypto_proof5_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_proof5_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_crypto_proof6_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/image/crypto/proof6.svg */ "../../node_modules/common/src/assets/image/crypto/proof6.svg");
/* harmony import */ var _assets_image_crypto_proof6_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_proof6_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/image/crypto/jackpot.svg */ "../../node_modules/common/src/assets/image/crypto/jackpot.svg");
/* harmony import */ var _assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_crypto_beta_1_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/image/crypto/beta-1.svg */ "../../node_modules/common/src/assets/image/crypto/beta-1.svg");
/* harmony import */ var _assets_image_crypto_beta_1_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_beta_1_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_image_crypto_beta_2_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/image/crypto/beta-2.svg */ "../../node_modules/common/src/assets/image/crypto/beta-2.svg");
/* harmony import */ var _assets_image_crypto_beta_2_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_beta_2_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_image_crypto_beta_3_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/image/crypto/beta-3.svg */ "../../node_modules/common/src/assets/image/crypto/beta-3.svg");
/* harmony import */ var _assets_image_crypto_beta_3_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_image_crypto_beta_3_svg__WEBPACK_IMPORTED_MODULE_17__);


















var MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '0'
}, {
  label: 'Feature',
  path: '#trusted',
  offset: '0'
}, {
  label: 'Offers',
  path: '#scalable',
  offset: '-10'
}, {
  label: 'Payment Proofs',
  path: '#featureslider',
  offset: '-10'
}, {
  label: 'Contact Us',
  path: '#footerSection',
  offset: '380'
}];
var TESTIMONIALS = [{
  review: 'Best working experience  with this amazing team & in future, we want to work together',
  name: 'Denny Hilguston',
  designation: 'CEO of Dell Co.',
  avatar: "".concat(_assets_image_crypto_author_4_jpg__WEBPACK_IMPORTED_MODULE_0___default.a)
}, {
  review: 'Impressed with master class support of the team and really look forward for the future.',
  name: 'Justin Albuz',
  designation: 'Co Founder of IBM',
  avatar: "".concat(_assets_image_crypto_author_2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a)
}, {
  review: 'I have bought more than 10 themes on ThemeForest, and this is the first one I review.',
  name: 'Milly Cristiana',
  designation: 'Manager of Hp co.',
  avatar: "".concat(_assets_image_crypto_author_3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a)
}, {
  review: 'Impressed with master class support of the team and really look forward for the future.',
  name: 'Milly Cristiana',
  designation: 'Manager of Hp co.',
  avatar: "".concat(_assets_image_crypto_author_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a)
}];
var TRANSACTIONS_FEATURE = [{
  image: _assets_image_crypto_tf1_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  title: 'Create Payment Address',
  des: 'Provide your payout wallet address and callback URL to PayBear API.'
}, {
  image: _assets_image_crypto_tf2_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Ask for Payment',
  des: 'Show your customer the wallet address as well as the payment amount.'
}, {
  image: _assets_image_crypto_tf3_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Get Paid',
  des: 'Payment is sent to the payout wallet immediately.'
}, {
  image: _assets_image_crypto_tf4_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'Get Payment Notification.',
  des: 'Callbacks are sent to the URL you specified. You can process customer order'
}];
var PROOFS_FEATURE = [{
  image: _assets_image_crypto_proof1_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  title: 'Instant trading',
  des: 'Never miss a price swing.'
}, {
  image: _assets_image_crypto_proof2_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  title: 'No hidden fees',
  des: 'know our fees upfront.'
}, {
  image: _assets_image_crypto_proof3_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
  title: 'Secure storage',
  des: 'Sleep with peace of mind.'
}, {
  image: _assets_image_crypto_proof4_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
  title: 'Systematic trading',
  des: 'History intraday market.'
}, {
  image: _assets_image_crypto_proof5_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
  title: 'Network Effect',
  des: 'Casinos contribute 1%.'
}, {
  image: _assets_image_crypto_proof6_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
  title: 'Bigger Rewards',
  des: 'Players are incentivized.'
}];
var SCALABLE_FEATURE = [{
  image: _assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
  title: 'Daily Jackpot',
  des: '35000 CLV'
}, {
  image: _assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
  title: 'Weekly Jackpot',
  des: '250000 CLV'
}, {
  image: _assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
  title: 'Monthly Jackpot',
  des: '4999697 CLV'
}, {
  image: _assets_image_crypto_jackpot_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
  title: 'Yearly Jackpot',
  des: '300245785000 CLV'
}];
var BETA_FEATURE = [{
  image: _assets_image_crypto_beta_1_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
  title: 'SEPA Transfers',
  des: 'Deposit & Withdraw money.'
}, {
  image: _assets_image_crypto_beta_2_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
  title: '24/7 Support',
  des: 'Always here for you.'
}, {
  image: _assets_image_crypto_beta_3_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
  title: 'Secure',
  des: 'Your money is safe.'
}];
var menuWidget = [{
  id: 1,
  title: 'About Us',
  menuItems: [{
    id: 1,
    url: '#',
    text: 'Support Center'
  }, {
    id: 2,
    url: '#',
    text: 'Customer Support'
  }, {
    id: 3,
    url: '#',
    text: 'About Us'
  }, {
    id: 4,
    url: '#',
    text: 'Copyright'
  }, {
    id: 5,
    url: '#',
    text: 'Popular Campaign'
  }]
}, {
  id: 2,
  title: 'Our Information',
  menuItems: [{
    id: 1,
    url: '#',
    text: 'Return Policy'
  }, {
    id: 2,
    url: '#',
    text: 'Privacy Policy'
  }, {
    id: 3,
    url: '#',
    text: 'Terms & Conditions'
  }, {
    id: 4,
    url: '#',
    text: 'Site Map'
  }, {
    id: 5,
    url: '#',
    text: 'Store Hours'
  }]
}, {
  id: 3,
  title: 'My Account',
  menuItems: [{
    id: 1,
    url: '#',
    text: 'Press inquiries'
  }, {
    id: 2,
    url: '#',
    text: 'Social media directories'
  }, {
    id: 3,
    url: '#',
    text: 'Images & B-roll'
  }, {
    id: 4,
    url: '#',
    text: 'Permissions'
  }, {
    id: 5,
    url: '#',
    text: 'Speaker requests'
  }]
}];
var Language_NAMES = [{
  label: 'English',
  value: 'eng'
}, {
  label: 'Chinese',
  value: 'chinese'
}, {
  label: 'Indian',
  value: 'indian'
}];

/***/ }),

/***/ "../../node_modules/common/src/data/Hosting/data.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/data/Hosting/data.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: FEATURES_DATA, FAQ_DATA, SERVICES_DATA, MENU_ITEMS, FOOTER_WIDGET, MONTHLY_PRICING_TABLE, YEARLY_PRICING_TABLE, TESTIMONIALS, DOMAIN_NAMES, DOMAIN_PRICE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURES_DATA", function() { return FEATURES_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQ_DATA", function() { return FAQ_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICES_DATA", function() { return SERVICES_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER_WIDGET", function() { return FOOTER_WIDGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHLY_PRICING_TABLE", function() { return MONTHLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEARLY_PRICING_TABLE", function() { return YEARLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTIMONIALS", function() { return TESTIMONIALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN_NAMES", function() { return DOMAIN_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN_PRICE", function() { return DOMAIN_PRICE; });
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ "../../node_modules/common/src/data/Hosting/images.js");
 // Feature Section Content

var FEATURES_DATA = [{
  title: 'Etiquetas Customizaveis',
  description: 'A Original Total fornece etiquetas customizaveis com código de raspagem único.',
  icon: 'flaticon-prototype violate',
  animation: true
}, {
  title: 'Plataforma em Nuvem',
  description: 'Oferecemos uma plataforma em nuvem para gerenciar suas etiquetas, produtos e consumidores em tempo real.',
  icon: 'flaticon-upload yellow',
  animation: true
}, {
  title: 'App OT',
  description: 'App exclusivo para validação da originalidade dos produtos pelos clientes com social media integrado.',
  icon: 'flaticon-startup green',
  animation: true
}]; // FAQ Section Content

var FAQ_DATA = [{
  expend: true,
  title: 'How to contact with Customer Service?',
  description: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. '
}, {
  title: 'App installation failed, how to update system information?',
  description: 'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . '
}, {
  title: 'Website reponse taking time, how to improve?',
  description: 'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .'
}, {
  title: 'New update fixed all bug and issues?',
  description: 'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .'
}]; // Service Section Content

var SERVICES_DATA = [{
  title: 'Etiquetas Customizaveis',
  description: 'A Original Total fornece etiquetas customizaveis com código de raspagem único.',
  icon: "".concat(_images__WEBPACK_IMPORTED_MODULE_0__["IconOne"])
}, {
  title: 'Plataforma em Nuvem',
  description: 'Oferecemos nossa plataforma em nuvem para gerenciar suas etiquetas, produtos e consumidores em tempo real.',
  icon: "".concat(_images__WEBPACK_IMPORTED_MODULE_0__["IconTwo"])
}, {
  title: 'App OT',
  description: 'App exclusivo para validação da originalidade dos produtos pelos clientes com social media integrado.',
  icon: "".concat(_images__WEBPACK_IMPORTED_MODULE_0__["IconThree"])
}];
var MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '70'
}, {
  label: 'Feature',
  path: '#feature_section',
  offset: '70'
}, {
  label: 'Service',
  path: '#service_section',
  offset: '70'
}, {
  label: 'Testimonial',
  path: '#testimonial_section',
  offset: '70'
}, {
  label: 'FAQ',
  path: '#faq_section',
  offset: '70'
}, {
  label: 'Contact',
  path: '#contact_section',
  offset: '70'
}];
var FOOTER_WIDGET = [{
  title: 'About Us',
  menuItems: [{
    url: '#',
    text: 'Support Center'
  }, {
    url: '#',
    text: 'Customer Support'
  }, {
    url: '#',
    text: 'About Us'
  }, {
    url: '#',
    text: 'Copyright'
  }, {
    url: '#',
    text: 'Popular Campaign'
  }]
}, {
  title: 'Our Information',
  menuItems: [{
    url: '#',
    text: 'Return Policy'
  }, {
    url: '#',
    text: 'Privacy Policy'
  }, {
    url: '#',
    text: 'Terms & Conditions'
  }, {
    url: '#',
    text: 'Site Map'
  }, {
    url: '#',
    text: 'Store Hours'
  }]
}, {
  title: 'My Account',
  menuItems: [{
    url: '#',
    text: 'Press inquiries'
  }, {
    url: '#',
    text: 'Social media directories'
  }, {
    url: '#',
    text: 'Images & B-roll'
  }, {
    url: '#',
    text: 'Permissions'
  }, {
    url: '#',
    text: 'Speaker requests'
  }]
}, {
  title: 'Policy',
  menuItems: [{
    url: '#',
    text: 'Application security'
  }, {
    url: '#',
    text: 'Software principles'
  }, {
    url: '#',
    text: 'Unwanted software policy'
  }, {
    url: '#',
    text: 'Responsible supply chain'
  }]
}];
var MONTHLY_PRICING_TABLE = [{
  freePlan: true,
  name: 'Basic Account',
  description: 'For Small teams or group who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'CREATE FREE ACCOUNT',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Mediums teams or group who need to build website ',
  price: '$9.87',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$12.98',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}];
var YEARLY_PRICING_TABLE = [{
  freePlan: true,
  name: 'Basic Account',
  description: 'For a single client or team who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'CREATE FREE ACCOUNT',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Small teams or group who need to build website ',
  price: '$6.00',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Unlimited secure storage'
  }, {
    content: '2,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: '24/7 phone support'
  }, {
    content: '50+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$9.99',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '3,000s of Templates Ready'
  }, {
    content: 'Advanced branding'
  }, {
    content: 'Knowledge base support'
  }, {
    content: '80+ Webmaster Tools'
  }]
}];
var TESTIMONIALS = [{
  review: 'Best working experience  with this amazing team & in future, we want to work together',
  name: 'Denny Hilguston',
  designation: 'CEO of Dell Co.',
  avatar: "".concat(_images__WEBPACK_IMPORTED_MODULE_0__["AuthorOne"])
}, {
  review: 'Impressed with master class support of the team and really look forward for the future.',
  name: 'Justin Albuz',
  designation: 'Co Founder of IBM',
  avatar: "".concat(_images__WEBPACK_IMPORTED_MODULE_0__["AuthorTwo"])
}, {
  review: 'I have bought more than 10 themes on ThemeForest, and this is the first one I review.',
  name: 'Milly Cristiana',
  designation: 'Manager of Hp co.',
  avatar: "".concat(_images__WEBPACK_IMPORTED_MODULE_0__["AuthorThree"])
}];
var DOMAIN_NAMES = [{
  label: '.com',
  value: 'com'
}, {
  label: '.net',
  value: 'net'
}, {
  label: '.org',
  value: 'org'
}, {
  label: '.co',
  value: 'co'
}, {
  label: '.edu',
  value: 'edu'
}, {
  label: '.me',
  value: 'me'
}];
var DOMAIN_PRICE = [{
  content: '.com $9.26'
}, {
  content: '.sg $7.91'
}, {
  content: '.space $12.54'
}, {
  content: '.info $9.13'
}, {
  content: '& much more',
  url: '#'
}];

/***/ }),

/***/ "../../node_modules/common/src/data/Hosting/images.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/data/Hosting/images.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: IconOne, IconTwo, IconThree, IconFour, IconFive, IconSix, AuthorOne, AuthorTwo, AuthorThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_image_hosting_icon1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/hosting/icon1.svg */ "../../node_modules/common/src/assets/image/hosting/icon1.svg");
/* harmony import */ var _assets_image_hosting_icon1_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_icon1_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconOne", function() { return _assets_image_hosting_icon1_svg__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _assets_image_hosting_icon2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/hosting/icon2.svg */ "../../node_modules/common/src/assets/image/hosting/icon2.svg");
/* harmony import */ var _assets_image_hosting_icon2_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_icon2_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconTwo", function() { return _assets_image_hosting_icon2_svg__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _assets_image_hosting_icon3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/hosting/icon3.svg */ "../../node_modules/common/src/assets/image/hosting/icon3.svg");
/* harmony import */ var _assets_image_hosting_icon3_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_icon3_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconThree", function() { return _assets_image_hosting_icon3_svg__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _assets_image_hosting_icon4_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/hosting/icon4.svg */ "../../node_modules/common/src/assets/image/hosting/icon4.svg");
/* harmony import */ var _assets_image_hosting_icon4_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_icon4_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconFour", function() { return _assets_image_hosting_icon4_svg__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _assets_image_hosting_icon5_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/hosting/icon5.svg */ "../../node_modules/common/src/assets/image/hosting/icon5.svg");
/* harmony import */ var _assets_image_hosting_icon5_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_icon5_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconFive", function() { return _assets_image_hosting_icon5_svg__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _assets_image_hosting_icon6_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/hosting/icon6.svg */ "../../node_modules/common/src/assets/image/hosting/icon6.svg");
/* harmony import */ var _assets_image_hosting_icon6_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_icon6_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconSix", function() { return _assets_image_hosting_icon6_svg__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var _assets_image_hosting_author_1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/hosting/author-1.jpg */ "../../node_modules/common/src/assets/image/hosting/author-1.jpg");
/* harmony import */ var _assets_image_hosting_author_1_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_author_1_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "AuthorOne", function() { return _assets_image_hosting_author_1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var _assets_image_hosting_author_2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/hosting/author-2.jpg */ "../../node_modules/common/src/assets/image/hosting/author-2.jpg");
/* harmony import */ var _assets_image_hosting_author_2_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_author_2_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "AuthorTwo", function() { return _assets_image_hosting_author_2_jpg__WEBPACK_IMPORTED_MODULE_7___default.a; });
/* harmony import */ var _assets_image_hosting_author_3_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/image/hosting/author-3.jpg */ "../../node_modules/common/src/assets/image/hosting/author-3.jpg");
/* harmony import */ var _assets_image_hosting_author_3_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_author_3_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "AuthorThree", function() { return _assets_image_hosting_author_3_jpg__WEBPACK_IMPORTED_MODULE_8___default.a; });
// Service Icons





 //Testimonial reviewers image






/***/ }),

/***/ "../../node_modules/common/src/data/Ride/index.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/data/Ride/index.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: MENU_ITEMS, MENU_LEFT_ITEMS, MENU_RIGHT_ITEMS, Features, LatestNews, Testimonial, menuWidget, Language_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_LEFT_ITEMS", function() { return MENU_LEFT_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_RIGHT_ITEMS", function() { return MENU_RIGHT_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return Features; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestNews", function() { return LatestNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testimonial", function() { return Testimonial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuWidget", function() { return menuWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language_NAMES", function() { return Language_NAMES; });
/* harmony import */ var _assets_image_ride_feature_2_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/ride/feature-2.svg */ "../../node_modules/common/src/assets/image/ride/feature-2.svg");
/* harmony import */ var _assets_image_ride_feature_2_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_feature_2_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_ride_feature_1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/ride/feature-1.svg */ "../../node_modules/common/src/assets/image/ride/feature-1.svg");
/* harmony import */ var _assets_image_ride_feature_1_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_feature_1_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_ride_feature_3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/ride/feature-3.svg */ "../../node_modules/common/src/assets/image/ride/feature-3.svg");
/* harmony import */ var _assets_image_ride_feature_3_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_feature_3_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_ride_blog_1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/ride/blog-1.svg */ "../../node_modules/common/src/assets/image/ride/blog-1.svg");
/* harmony import */ var _assets_image_ride_blog_1_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_blog_1_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_ride_blog_2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/ride/blog-2.svg */ "../../node_modules/common/src/assets/image/ride/blog-2.svg");
/* harmony import */ var _assets_image_ride_blog_2_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_blog_2_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/saas/testimonial/client-1.jpg */ "../../node_modules/common/src/assets/image/saas/testimonial/client-1.jpg");
/* harmony import */ var _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/agency/client/denny.png */ "../../node_modules/common/src/assets/image/agency/client/denny.png");
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6__);







var MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '70'
}, {
  label: 'Plataforma em Nuvem',
  path: '#nuvem',
  offset: '70'
}, {
  label: 'App',
  path: '#app',
  offset: '140'
}, {
  label: 'Serviços',
  path: '#servicos',
  offset: '70'
}, {
  label: 'Contato',
  path: '#contato',
  offset: '70'
}];
var MENU_LEFT_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '70'
}, {
  label: 'Plataforma em Nuvem',
  path: '#nuvem',
  offset: '70'
}, {
  label: 'App',
  path: '#app',
  offset: '70'
}, {
  label: 'Serviços',
  path: '#servicos',
  offset: '70'
}, {
  label: 'Contato',
  path: '#contato',
  offset: '70'
}];
var MENU_RIGHT_ITEMS = [{
  label: 'Login',
  path: '#',
  offset: '70'
}, {
  label: 'Registrar',
  path: '#',
  offset: '70'
}];
var Features = [{
  id: 1,
  img: "".concat(_assets_image_ride_feature_2_svg__WEBPACK_IMPORTED_MODULE_0___default.a),
  title: 'Delivery',
  description: 'Documents, accessories, packages and even gifts! Deliver them all within your city, in a jiffy!'
}, {
  id: 2,
  img: "".concat(_assets_image_ride_feature_1_svg__WEBPACK_IMPORTED_MODULE_1___default.a),
  title: 'Bike Share',
  description: 'All the Riders have been verified by us. Not random people with bikes that we don’t know.'
}, {
  id: 3,
  img: "".concat(_assets_image_ride_feature_3_svg__WEBPACK_IMPORTED_MODULE_2___default.a),
  title: 'Food',
  description: 'Order food from your favorite Place near you with the convenience of Godrive.'
}];
var LatestNews = [{
  id: 1,
  img: "".concat(_assets_image_ride_blog_1_svg__WEBPACK_IMPORTED_MODULE_3___default.a),
  title: 'Built for drivers, with drivers',
  description: 'The new Driver app helps you earn smarter and supports you–like a partner–at every turn.',
  buttonText: 'Learn More'
}, {
  id: 2,
  img: "".concat(_assets_image_ride_blog_2_svg__WEBPACK_IMPORTED_MODULE_4___default.a),
  title: 'Bike Share',
  description: 'All the Riders have been verified by us. Not random people with bikes that we don’t know.',
  buttonText: 'Learn More'
}];
var Testimonial = [{
  id: 1,
  name: 'Michal Corleone Jr.',
  designation: 'CEO of Invission Co.',
  comment: 'Love to work with this designer in every our future project to ensure we are going to build best prototyping features. Impressed with master class support of the team and really look forward for the future. A true passionate team.',
  avatar_url: _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  social_icon: 'flaticon-instagram'
}, {
  id: 2,
  name: 'Roman Ul Oman',
  designation: 'Co-founder of QatarDiaries',
  comment: 'Impressed with master class support of the team and really look forward for the future. A true passionate team. Love to work with this designer in every our future project to ensure we are going to build best prototyping features.',
  avatar_url: _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  social_icon: 'flaticon-twitter'
}];
var menuWidget = [{
  id: 1,
  title: 'About Us',
  menuItems: [{
    id: 1,
    url: '#',
    text: 'Support Center'
  }, {
    id: 2,
    url: '#',
    text: 'Customer Support'
  }, {
    id: 3,
    url: '#',
    text: 'About Us'
  }, {
    id: 4,
    url: '#',
    text: 'Copyright'
  }, {
    id: 5,
    url: '#',
    text: 'Popular Campaign'
  }]
}, {
  id: 2,
  title: 'Our Information',
  menuItems: [{
    id: 1,
    url: '#',
    text: 'Return Policy'
  }, {
    id: 2,
    url: '#',
    text: 'Privacy Policy'
  }, {
    id: 3,
    url: '#',
    text: 'Terms & Conditions'
  }, {
    id: 4,
    url: '#',
    text: 'Site Map'
  }, {
    id: 5,
    url: '#',
    text: 'Store Hours'
  }]
}, {
  id: 3,
  title: 'My Account',
  menuItems: [{
    id: 1,
    url: '#',
    text: 'Press inquiries'
  }, {
    id: 2,
    url: '#',
    text: 'Social media directories'
  }, {
    id: 3,
    url: '#',
    text: 'Images & B-roll'
  }, {
    id: 4,
    url: '#',
    text: 'Permissions'
  }, {
    id: 5,
    url: '#',
    text: 'Speaker requests'
  }]
}];
var Language_NAMES = [{
  label: 'English',
  value: 'eng'
}, {
  label: 'Chinese',
  value: 'chinese'
}, {
  label: 'Indian',
  value: 'indian'
}];

/***/ }),

/***/ "../../node_modules/common/src/theme/ride/colors.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/theme/ride/colors.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = {
  transparent: 'transparent',
  // 0
  black: '#000000',
  // 1
  white: '#ffffff',
  // 2
  headingColor: '#0f2137',
  textColor: '#5d646d',
  // 3
  labelColor: '#767676',
  // 4
  inactiveField: '#f2f2f2',
  // 5
  inactiveButton: '#b7dbdd',
  // 6
  inactiveIcon: '#EBEBEB',
  // 7
  primary: '#ff3e00',
  // 8
  primaryHover: '#ff3e00',
  // 9
  secondary: '#ff5b60',
  // 10
  secondaryHover: '#FF282F',
  // 11
  yellow: '#fdb32a',
  // 12
  yellowHover: '#F29E02',
  // 13
  primaryBoxShadow: ' 0px 9px 19.74px 1.26px rgba(82, 104, 219, 0.57) '
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "../../node_modules/common/src/theme/ride/index.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/common/src/theme/ride/index.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: rideTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rideTheme", function() { return rideTheme; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "../../node_modules/common/src/theme/ride/colors.js");

var rideTheme = {
  breakpoints: [575, 768, 990, 1440],
  space: [0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100],
  fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: _colors__WEBPACK_IMPORTED_MODULE_0__["default"],
  colorStyles: {
    primary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      border: '1px solid',
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
        boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)',
        backgroundImage: 'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)'
      }
    },
    secondary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    },
    warning: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    error: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    primaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover
      }
    },
    secondaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    },
    warningWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    errorWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    transparentBg: {
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      padding: 0,
      height: 'auto',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  } // FlexBox: {
  //   backgroundColor: 'green'
  // }

};

/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/next/dist/client/link.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "../../node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/next/dist/client/router.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "../../node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/next/dist/client/with-router.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "../../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/next/link.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../../node_modules/next/router.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/next/router.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "../../node_modules/next/dist/client/router.js")


/***/ }),

/***/ "../../node_modules/react-image-gallery/styles/css/image-gallery.css":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/react-image-gallery/styles/css/image-gallery.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/reusecore/node_modules/rc-drawer/assets/index.css":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/node_modules/rc-drawer/assets/index.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Animation/index.js":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Animation/index.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: AnimSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimSpinner", function() { return AnimSpinner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var spinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
var AnimSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 1s linear infinite;"], spinner);


/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Box/index.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Box/index.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Box/index.js";





var BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('div')(_base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Box'), function (props) {
  return props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])({
    display: 'flex'
  }, styled_system__WEBPACK_IMPORTED_MODULE_5__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_5__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_5__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('FlexBox'));
});

var Box = function Box(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BoxWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Box);
Box.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,

  /** Using this props we can convert our Box Component to a Flex Container or Component */
  flexBox: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['div', 'article', 'section', 'address', 'header', 'footer', 'nav', 'main']),
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  flex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  border: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderTop: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRight: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderBottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderLeft: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))])
};
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/button.style.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Button/button.style.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");





var ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "ntq24p-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";min-height:", "px;min-width:", "px;border-radius:", "px;font-family:inherit;font-size:", "px;font-weight:", ";text-decoration:none;text-transform:capitalize;padding-top:", "px;padding-bottom:", "px;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;span.btn-text{padding-left:", "px;padding-right:", "px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", " ", ""], Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('heights.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('widths.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radius.0', '3'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["buttonStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["sizeStyle"], _base__WEBPACK_IMPORTED_MODULE_4__["base"]); // prop types can also be added from the style functions

ButtonStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/index.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Button/index.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.style */ "../../node_modules/reusecore/src/elements/Button/button.style.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "../../node_modules/reusecore/src/elements/Loader/index.js");


var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Button/index.js";





var Button = function Button(_ref) {
  var type = _ref.type,
      title = _ref.title,
      icon = _ref.icon,
      disabled = _ref.disabled,
      iconPosition = _ref.iconPosition,
      onClick = _ref.onClick,
      loader = _ref.loader,
      loaderColor = _ref.loaderColor,
      isMaterial = _ref.isMaterial,
      isLoading = _ref.isLoading,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  var buttonIcon = isLoading !== false ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, loader ? loader : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loaderColor: loaderColor || '#30C56D',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })) : icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, icon); // set icon position

  var position = iconPosition || 'right';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), position === 'left' && buttonIcon, title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, title), position === 'right' && buttonIcon);
};

Button.propTypes = {
  /** ClassName of the button */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Add icon */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add loader */
  loader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add Material effect */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** If true button will be disabled */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'warning', 'error', 'primaryWithBg', 'secondaryWithBg', 'warningWithBg', 'errorWithBg']),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Card/index.js":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Card/index.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Card/index.js";






var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('div')(_base__WEBPACK_IMPORTED_MODULE_8__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_6__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundImage"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundSize"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundPosition"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundRepeat"], styled_system__WEBPACK_IMPORTED_MODULE_6__["opacity"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__["cards"], Object(_base__WEBPACK_IMPORTED_MODULE_8__["themed"])('Card'));

var Card = function Card(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), children);
};

Card.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
}, styled_system__WEBPACK_IMPORTED_MODULE_6__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["borderRadius"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundImage"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundPosition"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundRepeat"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["opacity"].propTypes, _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__["cards"].propTypes);
Card.defaultProps = {
  boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.05)'
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Drawer/index.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Drawer/index.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "../../node_modules/reusecore/node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Drawer/index.js";





var Drawer = function Drawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      closeButton = _ref.closeButton,
      closeButtonStyle = _ref.closeButtonStyle,
      drawerHandler = _ref.drawerHandler,
      toggleHandler = _ref.toggleHandler,
      open = _ref.open,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_drawer__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    onMaskClick: toggleHandler,
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, closeButton), children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, drawerHandler));
};

Drawer.propTypes = {
  /** ClassName of the Drawer */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set drawer width. Default value is 300px. */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set drawer position left || right || top || bottom. */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right', 'top', 'bottom']),

  /** drawerHandler could be button, icon, string or any component */
  drawerHandler: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element.isRequired
};
Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Heading/index.js":
/*!************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Heading/index.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Heading/index.js";





var HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p')(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Heading'));

var Heading = function Heading(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HeadingWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);
Heading.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Image/index.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Image/index.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Image/index.js";




var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('img')({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_5__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_5__["themed"])('Image'));

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["src", "alt"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: src,
    alt: alt
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);
Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Input/index.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Input/index.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.style */ "../../node_modules/reusecore/src/elements/Input/input.style.js");




var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Input/index.js";




var Input = function Input(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      inputType = _ref.inputType,
      isMaterial = _ref.isMaterial,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      passwordShowHide = _ref.passwordShowHide,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["label", "value", "onBlur", "onFocus", "onChange", "inputType", "isMaterial", "icon", "iconPosition", "passwordShowHide", "className"]);

  // use toggle hooks
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    toggle: false,
    focus: false,
    value: ''
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // toggle function


  var handleToggle = function handleToggle() {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      toggle: !state.toggle
    }));
  }; // add focus class


  var handleOnFocus = function handleOnFocus(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      focus: true
    }));
    onFocus(event);
  }; // remove focus class


  var handleOnBlur = function handleOnBlur(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      focus: false
    }));
    onBlur(event);
  }; // handle input value


  var handleOnChange = function handleOnChange(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      value: event.target.value
    }));
    onChange(event.target.value);
  }; // get input focus class


  var getInputFocusClass = function getInputFocusClass() {
    if (state.focus === true || state.value !== '') {
      return 'is-focus';
    } else {
      return '';
    }
  }; // init variable


  var inputElement, htmlFor; // Add all classs to an array

  var addAllClasses = ['reusecore__input']; // Add is-material class

  if (isMaterial) {
    addAllClasses.push('is-material');
  } // Add icon position class if input element has icon


  if (icon && iconPosition) {
    addAllClasses.push("icon-".concat(iconPosition));
  } // Add new class


  if (className) {
    addAllClasses.push(className);
  } // if lable is not empty


  if (label) {
    htmlFor = label.replace(/\s+/g, '_').toLowerCase();
  } // Label position


  var LabelPosition = isMaterial === true ? 'bottom' : 'top'; // Label field

  var LabelField = label && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: htmlFor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, label); // Input type check

  switch (inputType) {
    case 'textarea':
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }));
      break;

    case 'password':
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "field-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: state.toggle ? 'password' : 'text',
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), passwordShowHide && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_style__WEBPACK_IMPORTED_MODULE_6__["EyeButton"], {
        onClick: handleToggle,
        className: state.toggle ? 'eye' : 'eye-closed',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      })));
      break;

    default:
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "field-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: inputType,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })), icon && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "input-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, icon));
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "".concat(addAllClasses.join(' '), " ").concat(getInputFocusClass()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, LabelPosition === 'top' && LabelField, inputElement, isMaterial && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), LabelPosition === 'bottom' && LabelField);
};
/** Inout prop type checking. */


Input.propTypes = {
  /** className of the Input component. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** Set input label value. */
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** The input value, required for a controlled component. */
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['string', 'number']),

  /** Make default input into material style input. */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Password show hide icon button prop [*only for password field]. */
  passwordShowHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Set input type of the input element. Default type is text. */
  inputType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['text', 'email', 'password', 'number', 'textarea']),

  /** Add icon in input field. This prop will not work with password
   * and textarea field.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /** Set input field icon position. Default position is 'left'. */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['left', 'right']),

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/** Inout default type. */

Input.defaultProps = {
  inputType: 'text',
  isMaterial: false,
  iconPosition: 'left',
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Input/input.style.js":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Input/input.style.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: EyeButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeButton", function() { return EyeButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var InputField = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "inputstyle__InputField",
  componentId: "sc-8lywy0-0"
})(["position:relative;.field-wrapper{position:relative;}&.icon-left,&.icon-right{.field-wrapper{display:flex;align-items:center;> .input-icon{position:absolute;top:0;bottom:auto;display:flex;align-items:center;justify-content:center;width:34px;height:40px;}}}&.icon-left{.field-wrapper{> .input-icon{left:0;right:auto;}> input{padding-left:34px;}}}&.icon-right{.field-wrapper{> .input-icon{left:auto;right:0;}> input{padding-right:34px;}}}label{display:block;color:", ";font-size:", "px;font-weight:", ";margin-bottom:", "px;transition:0.2s ease all;}textarea,input{font-size:16px;padding:11px;display:block;width:100%;color:", ";box-shadow:none;border-radius:4px;box-sizing:border-box;border:1px solid ", ";transition:border-color 0.2s ease;&:focus{outline:none;border-color:", ";}}textarea{min-height:150px;}&.is-material{label{position:absolute;left:0;top:10px;}input,textarea{border-radius:0;border-top:0;border-left:0;border-right:0;padding-left:0;padding-right:0;}textarea{min-height:40px;padding-bottom:0;}.highlight{position:absolute;height:1px;top:auto;left:50%;bottom:0;width:0;pointer-events:none;transition:all 0.2s ease;}&.icon-left,&.icon-right{.field-wrapper{flex-direction:row-reverse;> .input-icon{width:auto;}> input{flex:1;}}}&.icon-left{.field-wrapper{> input{padding-left:20px;}}label{top:-15px;font-size:12px;}}&.icon-right{.field-wrapper{> input{padding-right:20px;}}}&.is-focus{input{border-color:", ";}label{top:-16px;font-size:12px;color:", ";}.highlight{width:100%;height:2px;background-color:", ";left:0;}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.labelColor', '#767676'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('space.3', '10'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'));
var EyeButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "inputstyle__EyeButton",
  componentId: "sc-8lywy0-1"
})(["width:43px;height:40px;border:0;padding:0;margin:0;top:0;right:0;position:absolute;outline:none;cursor:pointer;box-shadow:none;display:flex;align-items:center;justify-content:center;background-color:transparent;> span{width:12px;height:12px;display:block;border:solid 1px ", ";border-radius:75% 15%;transform:rotate(45deg);position:relative;&:before{content:'';display:block;width:4px;height:4px;border-radius:50%;left:3px;top:3px;position:absolute;border:solid 1px ", ";}}&.eye-closed{> span{&:after{content:'';display:block;width:1px;height:20px;left:calc(50% - 1px / 2);top:-4px;position:absolute;background-color:", ";transform:rotate(-12deg);}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'));

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Link/index.js":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Link/index.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Link/index.js";




var LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('a')({
  textDecoration: 'none'
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Link'));

var Link = function Link(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LinkWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Link);
Link.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"].propTypes);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/index.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Loader/index.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.style */ "../../node_modules/reusecore/src/elements/Loader/loader.style.js");


var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Loader/index.js";




var Loader = function Loader(_ref) {
  var loaderColor = _ref.loaderColor,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loader_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

Loader.propTypes = {
  /** ClassName of the Loader */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set loader width in number || string */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set loader height in number || string */
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set color for loader */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Loader.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/loader.style.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Loader/loader.style.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Animation */ "../../node_modules/reusecore/src/elements/Animation/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");






var LoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "sc-6byg9m-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", " ", " ", ""], function (props) {
  return props.loaderColor ? props.loaderColor : '#000000';
}, _Animation__WEBPACK_IMPORTED_MODULE_4__["AnimSpinner"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], _base__WEBPACK_IMPORTED_MODULE_5__["base"]); // prop types can also be added from the style functions

LoaderStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/index.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Navbar/index.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.style */ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js");


var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Navbar/index.js";




var Navbar = function Navbar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      navbarStyle = _ref.navbarStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "navbarStyle"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__navbar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), children);
};

Navbar.propTypes = {
  /** ClassName of the Navbar. Default class is reusecore__navbar*/
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render menu, logo, button or any component that
   * you want to show in navbar. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  space: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRadius: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  boxShadow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexWrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/** Navbar default proptype */

Navbar.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Navbar/navbar.style.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var NavbarStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "navbarstyle__NavbarStyle",
  componentId: "i4x6b2-0"
})(["display:flex;align-items:center;min-height:56px;padding:10px 16px;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"]);
NavbarStyle.displayName = 'NavbarStyle';
/* harmony default export */ __webpack_exports__["default"] = (NavbarStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Text/index.js":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Text/index.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/Text/index.js";





var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p')(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Text'));

var Text = function Text(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TextWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);
Text.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/UI/Logo/index.js":
/*!************************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/UI/Logo/index.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Link */ "../../node_modules/reusecore/src/elements/Link/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Image */ "../../node_modules/reusecore/src/elements/Image/index.js");


var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/UI/Logo/index.js";






var Logo = function Logo(_ref) {
  var logoWrapperStyle = _ref.logoWrapperStyle,
      logoStyle = _ref.logoStyle,
      titleStyle = _ref.titleStyle,
      withAchor = _ref.withAchor,
      anchorProps = _ref.anchorProps,
      logoSrc = _ref.logoSrc,
      title = _ref.title,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["logoWrapperStyle", "logoStyle", "titleStyle", "withAchor", "anchorProps", "logoSrc", "title"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, logoWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), withAchor ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, anchorProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

Logo.propTypes = {
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  logoWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  withAchor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  anchorProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/base.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/elements/base.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: themed, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


/** this is our Base Component every components must be Extend it */

var themed = function themed(key) {
  return function (props) {
    return props.theme[key];
  };
};
var base = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(function () {
  return {
    boxSizing: 'border-box'
  };
}, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["order"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]);
base.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["height"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["order"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"].propTypes);

/***/ }),

/***/ "../../node_modules/reusecore/src/theme/customVariant.js":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/node_modules/reusecore/src/theme/customVariant.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: cards, buttonStyle, colorStyle, sizeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeStyle", function() { return sizeStyle; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);

var buttonStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonStyles'
});
var colorStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
var sizeStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
var cards = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'cards'
});


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_theme_ride__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/theme/ride */ "../../node_modules/common/src/theme/ride/index.js");
/* harmony import */ var common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/assets/css/style */ "../../node_modules/common/src/assets/css/style.js");
/* harmony import */ var common_src_containers_Ride_ride_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/containers/Ride/ride.style */ "../../node_modules/common/src/containers/Ride/ride.style.js");
/* harmony import */ var common_src_containers_App_app_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/containers/App/app.style */ "../../node_modules/common/src/containers/App/app.style.js");
/* harmony import */ var common_src_containers_Crypto_crypto_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/containers/Crypto/crypto.style */ "../../node_modules/common/src/containers/Crypto/crypto.style.js");
/* harmony import */ var common_src_containers_Hosting_hosting_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/containers/Hosting/hosting.style */ "../../node_modules/common/src/containers/Hosting/hosting.style.js");
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var common_src_containers_Ride_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/containers/Ride/Navbar */ "../../node_modules/common/src/containers/Ride/Navbar/index.js");
/* harmony import */ var common_src_containers_Ride_Banner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/containers/Ride/Banner */ "../../node_modules/common/src/containers/Ride/Banner/index.js");
/* harmony import */ var common_src_containers_App_Control__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/containers/App/Control */ "../../node_modules/common/src/containers/App/Control/index.js");
/* harmony import */ var common_src_containers_App_PaymentSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/src/containers/App/PaymentSection */ "../../node_modules/common/src/containers/App/PaymentSection/index.js");
/* harmony import */ var common_src_containers_Crypto_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! common/src/containers/Crypto/Footer */ "../../node_modules/common/src/containers/Crypto/Footer/index.js");
/* harmony import */ var common_src_containers_Ride_FeatureSlider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/src/containers/Ride/FeatureSlider */ "../../node_modules/common/src/containers/Ride/FeatureSlider/index.js");
/* harmony import */ var common_src_containers_Hosting_Features__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! common/src/containers/Hosting/Features */ "../../node_modules/common/src/containers/Hosting/Features/index.js");
var _jsxFileName = "/Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/packages/landing/pages/index.js";


















/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: common_src_theme_ride__WEBPACK_IMPORTED_MODULE_4__["rideTheme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Original Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ec5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: "React next landing page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Lato:300,400,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, user-scalable=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_5__["ResetCSS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Ride_ride_style__WEBPACK_IMPORTED_MODULE_6__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Ride_ride_style__WEBPACK_IMPORTED_MODULE_6__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_10__["DrawerProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Ride_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Ride_Banner__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_App_app_style__WEBPACK_IMPORTED_MODULE_7__["AppWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_App_Control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_App_PaymentSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Ride_FeatureSlider__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Hosting_hosting_style__WEBPACK_IMPORTED_MODULE_9__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Hosting_Features__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Crypto_crypto_style__WEBPACK_IMPORTED_MODULE_8__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Crypto_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/leobagua/Downloads/SuperProps - React Next Landing Page Templates/SuperProps/packages/landing/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-image-gallery":
/*!**************************************!*\
  !*** external "react-image-gallery" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-gallery");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-scrollspy":
/*!**********************************!*\
  !*** external "react-scrollspy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map