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

/***/ "./components/Index/ProfileList.js":
/*!*****************************************!*\
  !*** ./components/Index/ProfileList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/enzyme/Desktop/Profile-App-React/components/Index/ProfileList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction ProfileList({\n  profiles\n}) {\n  function mapProfilesToItems(profiles) {\n    return profiles.map(data => ({\n      header: data.name,\n      image: data.mediaUrl,\n      color: 'teal',\n      meta: data.age,\n      fluid: true,\n      childkey: data._id,\n      href: `/profile?_id=${data._id}`\n    }));\n  }\n\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Group, {\n    stackable: true,\n    itemsPerRow: \"3\",\n    centered: true,\n    items: mapProfilesToItems(profiles),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 10\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZGV4L1Byb2ZpbGVMaXN0LmpzPzdjOWUiXSwibmFtZXMiOlsiUHJvZmlsZUxpc3QiLCJwcm9maWxlcyIsIm1hcFByb2ZpbGVzVG9JdGVtcyIsIm1hcCIsImRhdGEiLCJoZWFkZXIiLCJuYW1lIiwiaW1hZ2UiLCJtZWRpYVVybCIsImNvbG9yIiwibWV0YSIsImFnZSIsImZsdWlkIiwiY2hpbGRrZXkiLCJfaWQiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUI7QUFBRUM7QUFBRixDQUFyQixFQUFrQztBQUVoQyxXQUFTQyxrQkFBVCxDQUE0QkQsUUFBNUIsRUFBcUM7QUFDbkMsV0FBT0EsUUFBUSxDQUFDRSxHQUFULENBQWFDLElBQUksS0FBRztBQUN6QkMsWUFBTSxFQUFFRCxJQUFJLENBQUNFLElBRFk7QUFFekJDLFdBQUssRUFBRUgsSUFBSSxDQUFDSSxRQUZhO0FBR3pCQyxXQUFLLEVBQUUsTUFIa0I7QUFJekJDLFVBQUksRUFBRU4sSUFBSSxDQUFDTyxHQUpjO0FBS3pCQyxXQUFLLEVBQUUsSUFMa0I7QUFNekJDLGNBQVEsRUFBRVQsSUFBSSxDQUFDVSxHQU5VO0FBT3pCQyxVQUFJLEVBQUUsZ0JBQWVYLElBQUksQ0FBQ1UsR0FBSTtBQVBMLEtBQUgsQ0FBakIsQ0FBUDtBQVNEOztBQUNELFNBQU8sTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxhQUFTLE1BQXJCO0FBQXNCLGVBQVcsRUFBQyxHQUFsQztBQUFzQyxZQUFRLE1BQTlDO0FBQStDLFNBQUssRUFBRVosa0JBQWtCLENBQUNELFFBQUQsQ0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0Q7O0FBRWNELDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbmRleC9Qcm9maWxlTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmZ1bmN0aW9uIFByb2ZpbGVMaXN0KHsgcHJvZmlsZXN9KSB7XG5cbiAgZnVuY3Rpb24gbWFwUHJvZmlsZXNUb0l0ZW1zKHByb2ZpbGVzKXtcbiAgICByZXR1cm4gcHJvZmlsZXMubWFwKGRhdGE9Pih7XG4gICAgICBoZWFkZXI6IGRhdGEubmFtZSxcbiAgICAgIGltYWdlOiBkYXRhLm1lZGlhVXJsLFxuICAgICAgY29sb3I6ICd0ZWFsJyxcbiAgICAgIG1ldGE6IGRhdGEuYWdlLFxuICAgICAgZmx1aWQ6IHRydWUsXG4gICAgICBjaGlsZGtleTogZGF0YS5faWQsXG4gICAgICBocmVmOmAvcHJvZmlsZT9faWQ9JHtkYXRhLl9pZH1gXG4gICAgfSkpXG4gIH1cbiAgcmV0dXJuIDxDYXJkLkdyb3VwIHN0YWNrYWJsZSBpdGVtc1BlclJvdz1cIjNcIiBjZW50ZXJlZCBpdGVtcz17bWFwUHJvZmlsZXNUb0l0ZW1zKHByb2ZpbGVzKX0vPlxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Index/ProfileList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Index_ProfileList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Index/ProfileList */ \"./components/Index/ProfileList.js\");\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ \"./utils/baseUrl.js\");\nvar _jsxFileName = \"/home/enzyme/Desktop/Profile-App-React/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Home({\n  profiles\n}) {\n  return __jsx(_components_Index_ProfileList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    profiles: profiles,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 10\n    }\n  });\n}\n\nHome.getInitialProps = async () => {\n  // fetch data on server\n  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}/api/profiles`;\n  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url);\n  return {\n    profiles: response.data\n  }; // return response data as an object\n  // note: this object will be merged with existing props\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9maWxlcyIsImdldEluaXRpYWxQcm9wcyIsInVybCIsImJhc2VVcmwiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUE0QjtBQUUxQixTQUFPLE1BQUMscUVBQUQ7QUFBYSxZQUFRLEVBQUVBLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNEOztBQUVERCxJQUFJLENBQUNFLGVBQUwsR0FBdUIsWUFBWTtBQUNqQztBQUNBLFFBQU1DLEdBQUcsR0FBSSxHQUFFQyxzREFBUSxlQUF2QjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVKLEdBQVYsQ0FBdkI7QUFDQSxTQUFPO0FBQUVGLFlBQVEsRUFBRUksUUFBUSxDQUFDRztBQUFyQixHQUFQLENBSmlDLENBS2pDO0FBQ0E7QUFDRCxDQVBEOztBQVNlUixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFByb2ZpbGVMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0luZGV4L1Byb2ZpbGVMaXN0XCI7XG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi91dGlscy9iYXNlVXJsJ1xuXG5mdW5jdGlvbiBIb21lKHsgcHJvZmlsZXMgfSkge1xuIFxuICByZXR1cm4gPFByb2ZpbGVMaXN0IHByb2ZpbGVzPXtwcm9maWxlc30vPlxufVxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgLy8gZmV0Y2ggZGF0YSBvbiBzZXJ2ZXJcbiAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGVzYDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgcmV0dXJuIHsgcHJvZmlsZXM6IHJlc3BvbnNlLmRhdGEgfTtcbiAgLy8gcmV0dXJuIHJlc3BvbnNlIGRhdGEgYXMgYW4gb2JqZWN0XG4gIC8vIG5vdGU6IHRoaXMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggZXhpc3RpbmcgcHJvcHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst baseUrl = false ? undefined : 'http://localhost:3000';\n/* harmony default export */ __webpack_exports__[\"default\"] = (baseUrl);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9iYXNlVXJsLmpzP2FlMzMiXSwibmFtZXMiOlsiYmFzZVVybCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxPQUFPLEdBQ1QsUUFDTSxTQUROLEdBRU0sdUJBSFY7QUFLZUEsc0VBQWYiLCJmaWxlIjoiLi91dGlscy9iYXNlVXJsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFzZVVybD1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgID8gJ2h0dHBzOi8vcmVhY3QtYXBwLWRlbW8tZW56eW1lLmhlcm9rdWFwcC5jb20vJ1xuICAgICAgICA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnXG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/baseUrl.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/enzyme/Desktop/Profile-App-React/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

/***/ })

/******/ });