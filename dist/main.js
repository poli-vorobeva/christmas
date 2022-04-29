/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Tree/Tree.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Tree/Tree.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".treePage-container {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-evenly;\r\n    position: relative;\r\n    top: 50px;\r\n    background-size:cover;\r\n    mix-blend-mode: color-burn;\r\n    background-repeat: no-repeat;\r\n    backdrop-filter: blur(10px);\r\n}\r\n\r\n.canvasSection {\r\n    flex-grow: 3;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.canvas{\r\n    width: 80%;\r\n    height: calc( 95vh - 50px);\r\n    margin: 0 auto;\r\n}\r\n.chooseContainer {\r\n    height: 90vh;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: space-evenly;\r\n}\r\n.chooseTree,.chooseBackground,.chooseGirland{\r\n    position: relative;\r\n}\r\n.bgItemsWrapper-hide {\r\n    gap: 3px;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    transition: all ease 1000ms;\r\n    position: absolute;\r\n    display: none;\r\n    left:100%;\r\n    top:40%;\r\n    opacity: 0;\r\n    background: #f9a84863;\r\n    padding: 7px;\r\n    border-radius: 9px;\r\n    box-shadow: inset -2px 0px 37px -4px #ef8340;\r\n}\r\n.bgItemsWrapper-show{\r\n    opacity: 1;\r\n}\r\n.bgItem {\r\n    width: 50px;\r\n    height: 50px;\r\n    border: 3px solid #ff7166f2;\r\n    box-shadow: 0px -2px 10px 3px #db5656a3;\r\n    border-radius: 10px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    transition: all ease 500ms;\r\n}\r\n.bgItem:hover{\r\n    box-shadow: 0px -2px 10px 3px rgba(182, 61, 61, 0.72);\r\n    transform: scale(1.01);\r\n}\r\n\r\n.treeImages-hide{\r\n    display: none;\r\n    column-gap: 10px;\r\n    row-gap: 2px;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    transition: all ease 1000ms;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 100%;\r\n    opacity: 0;\r\n    background: #f7ab28ad;\r\n    padding: 5px;\r\n    border-radius: 15px;\r\n    box-shadow: inset 5px 14px 23px 3px #dd4f4f26;\r\n}\r\n.treeImages-show{\r\n    opacity: 1;\r\n}\r\n\r\n.treeItem {\r\n    width: 50px;\r\n    height: 80px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    border-bottom: 4px solid #fbf8f6b3;\r\n    border-radius: 10px;\r\n    transition:all ease 500ms;\r\n}\r\n.treeItem:hover{\r\n    box-shadow: inset 0px -6px 26px 5px #ffffff;\r\n}\r\n\r\n.colorItem {\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.toysSection {\r\n    height: 50%;\r\n    display: grid;\r\n    gap: 3px;\r\n    grid-template-columns: repeat(4, 1fr);\r\n}\r\n\r\n.toySectionItem {\r\n    width: 40px;\r\n    height: 40px;\r\n    border: 1px solid gray;\r\n    border-radius: 5px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n.toyCount{\r\n    width: 20px;\r\n     height: 20px;\r\n    border-radius: 50%;\r\n }\r\n.girland-hide{\r\n    transition: all ease 1000ms;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 100%;\r\n    opacity: 0;\r\n    display: none;\r\n\r\n}\r\n.girland-show{\r\n    opacity: 1;\r\n}", "",{"version":3,"sources":["webpack://./src/Tree/Tree.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,kBAAkB;IAClB,SAAS;IACT,qBAAqB;IACrB,0BAA0B;IAC1B,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,0BAA0B;IAC1B,cAAc;AAClB;AACA;IACI,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,6BAA6B;AACjC;AACA;IACI,kBAAkB;AACtB;AACA;IACI,QAAQ;IACR,qCAAqC;IACrC,2BAA2B;IAC3B,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,OAAO;IACP,UAAU;IACV,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,4CAA4C;AAChD;AACA;IACI,UAAU;AACd;AACA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,uCAAuC;IACvC,mBAAmB;IACnB,2BAA2B;IAC3B,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;AAC9B;AACA;IACI,qDAAqD;IACrD,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,qCAAqC;IACrC,2BAA2B;IAC3B,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,UAAU;IACV,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;IACnB,6CAA6C;AACjD;AACA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,sBAAsB;IACtB,4BAA4B;IAC5B,kCAAkC;IAClC,mBAAmB;IACnB,yBAAyB;AAC7B;AACA;IACI,2CAA2C;AAC/C;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,QAAQ;IACR,qCAAqC;AACzC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,2BAA2B;IAC3B,sBAAsB;IACtB,4BAA4B;AAChC;AACA;IACI,WAAW;KACV,YAAY;IACb,kBAAkB;CACrB;AACD;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,UAAU;IACV,aAAa;;AAEjB;AACA;IACI,UAAU;AACd","sourcesContent":[".treePage-container {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-evenly;\r\n    position: relative;\r\n    top: 50px;\r\n    background-size:cover;\r\n    mix-blend-mode: color-burn;\r\n    background-repeat: no-repeat;\r\n    backdrop-filter: blur(10px);\r\n}\r\n\r\n.canvasSection {\r\n    flex-grow: 3;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.canvas{\r\n    width: 80%;\r\n    height: calc( 95vh - 50px);\r\n    margin: 0 auto;\r\n}\r\n.chooseContainer {\r\n    height: 90vh;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: space-evenly;\r\n}\r\n.chooseTree,.chooseBackground,.chooseGirland{\r\n    position: relative;\r\n}\r\n.bgItemsWrapper-hide {\r\n    gap: 3px;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    transition: all ease 1000ms;\r\n    position: absolute;\r\n    display: none;\r\n    left:100%;\r\n    top:40%;\r\n    opacity: 0;\r\n    background: #f9a84863;\r\n    padding: 7px;\r\n    border-radius: 9px;\r\n    box-shadow: inset -2px 0px 37px -4px #ef8340;\r\n}\r\n.bgItemsWrapper-show{\r\n    opacity: 1;\r\n}\r\n.bgItem {\r\n    width: 50px;\r\n    height: 50px;\r\n    border: 3px solid #ff7166f2;\r\n    box-shadow: 0px -2px 10px 3px #db5656a3;\r\n    border-radius: 10px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    transition: all ease 500ms;\r\n}\r\n.bgItem:hover{\r\n    box-shadow: 0px -2px 10px 3px rgba(182, 61, 61, 0.72);\r\n    transform: scale(1.01);\r\n}\r\n\r\n.treeImages-hide{\r\n    display: none;\r\n    column-gap: 10px;\r\n    row-gap: 2px;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    transition: all ease 1000ms;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 100%;\r\n    opacity: 0;\r\n    background: #f7ab28ad;\r\n    padding: 5px;\r\n    border-radius: 15px;\r\n    box-shadow: inset 5px 14px 23px 3px #dd4f4f26;\r\n}\r\n.treeImages-show{\r\n    opacity: 1;\r\n}\r\n\r\n.treeItem {\r\n    width: 50px;\r\n    height: 80px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    border-bottom: 4px solid #fbf8f6b3;\r\n    border-radius: 10px;\r\n    transition:all ease 500ms;\r\n}\r\n.treeItem:hover{\r\n    box-shadow: inset 0px -6px 26px 5px #ffffff;\r\n}\r\n\r\n.colorItem {\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.toysSection {\r\n    height: 50%;\r\n    display: grid;\r\n    gap: 3px;\r\n    grid-template-columns: repeat(4, 1fr);\r\n}\r\n\r\n.toySectionItem {\r\n    width: 40px;\r\n    height: 40px;\r\n    border: 1px solid gray;\r\n    border-radius: 5px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n.toyCount{\r\n    width: 20px;\r\n     height: 20px;\r\n    border-radius: 50%;\r\n }\r\n.girland-hide{\r\n    transition: all ease 1000ms;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 100%;\r\n    opacity: 0;\r\n    display: none;\r\n\r\n}\r\n.girland-show{\r\n    opacity: 1;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/header/Header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/header/Header.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.header{\r\n    width: 100vw;\r\n    height: 50px;\r\n    background: rgba(201, 25, 25, 0.73);\r\n    position: absolute;\r\n    z-index: 5;\r\n}\r\n.headerNav{\r\n    width: 100px;\r\n    height: 50px;\r\n    border: none;\r\n    background: #c91919;\r\n    color: white;\r\n    letter-spacing: 2px;\r\n    transition: all ease-in 500ms;\r\n}\r\n.headerNav:hover{\r\n    box-shadow: inset -1px -5px 13px 3px #e3ccccdb;\r\n}", "",{"version":3,"sources":["webpack://./src/header/Header.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,8CAA8C;AAClD","sourcesContent":["header{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.header{\r\n    width: 100vw;\r\n    height: 50px;\r\n    background: rgba(201, 25, 25, 0.73);\r\n    position: absolute;\r\n    z-index: 5;\r\n}\r\n.headerNav{\r\n    width: 100px;\r\n    height: 50px;\r\n    border: none;\r\n    background: #c91919;\r\n    color: white;\r\n    letter-spacing: 2px;\r\n    transition: all ease-in 500ms;\r\n}\r\n.headerNav:hover{\r\n    box-shadow: inset -1px -5px 13px 3px #e3ccccdb;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/SettingsPage.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/settingsPage/SettingsPage.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".settingsPage {\r\n    width: 100vw;\r\n    height: calc( 100vh - 50px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    /*background-image: url('../../src/assets/bgSettings.png');*/\r\n}", "",{"version":3,"sources":["webpack://./src/settingsPage/SettingsPage.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,4DAA4D;AAChE","sourcesContent":[".settingsPage {\r\n    width: 100vw;\r\n    height: calc( 100vh - 50px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    /*background-image: url('../../src/assets/bgSettings.png');*/\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/decoration/DecorationSection.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/settingsPage/decoration/DecorationSection.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".decorationSection {\r\n    width: 90vw;\r\n    height: 40%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: space-between;\r\n}", "",{"version":3,"sources":["webpack://./src/settingsPage/decoration/DecorationSection.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,WAAW;IACX,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC","sourcesContent":[".decorationSection {\r\n    width: 90vw;\r\n    height: 40%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: space-between;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/decoration/ToyItem/ToyItem.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/settingsPage/decoration/ToyItem/ToyItem.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toyCell {\r\n    width: 23%;\r\n    height: 200px;\r\n    min-width: 200px;\r\n    margin: 1px;\r\n    background: #2e33658a;\r\n    box-shadow: inset 1px 1px 80px 15px #f2eaeacc\r\n}\r\n\r\n.toyCell h5 {\r\n    color: #b51313;\r\n    text-transform: capitalize;\r\n    letter-spacing: 3%;\r\n    text-align: center;\r\n    text-shadow: 2px 2px 8px #1e6193;\r\n    line-height: 2rem;\r\n}\r\n\r\n.toyCellContent {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    padding: 10px;\r\n}\r\n\r\n.toyCellData {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n}\r\n\r\n.toyCellData img {\r\n    width: 80px;\r\n    height: 80px;\r\n    padding: 10px;\r\n    background: #a591837a;\r\n    border-radius: 50%;\r\n    box-shadow: inset 1px 0px 25px 1px #f3e7e7;\r\n}", "",{"version":3,"sources":["webpack://./src/settingsPage/decoration/ToyItem/ToyItem.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,qBAAqB;IACrB;AACJ;;AAEA;IACI,cAAc;IACd,0BAA0B;IAC1B,kBAAkB;IAClB,kBAAkB;IAClB,gCAAgC;IAChC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,kBAAkB;IAClB,0CAA0C;AAC9C","sourcesContent":[".toyCell {\r\n    width: 23%;\r\n    height: 200px;\r\n    min-width: 200px;\r\n    margin: 1px;\r\n    background: #2e33658a;\r\n    box-shadow: inset 1px 1px 80px 15px #f2eaeacc\r\n}\r\n\r\n.toyCell h5 {\r\n    color: #b51313;\r\n    text-transform: capitalize;\r\n    letter-spacing: 3%;\r\n    text-align: center;\r\n    text-shadow: 2px 2px 8px #1e6193;\r\n    line-height: 2rem;\r\n}\r\n\r\n.toyCellContent {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    padding: 10px;\r\n}\r\n\r\n.toyCellData {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n}\r\n\r\n.toyCellData img {\r\n    width: 80px;\r\n    height: 80px;\r\n    padding: 10px;\r\n    background: #a591837a;\r\n    border-radius: 50%;\r\n    box-shadow: inset 1px 0px 25px 1px #f3e7e7;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/filters/DiaposoneSection/DiaposoneRange.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/settingsPage/filters/DiaposoneSection/DiaposoneRange.css ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".diaposoneCountContainer,.diaposoneYearContainer{\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n.inputWrapper {\r\n    position: relative;\r\n    height: 20px;\r\n    --thrumb-color: #d9117e;\r\n}\r\n\r\n.inputWrapper div {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.inputWrapper .underLayer {\r\n    width: 100%;\r\n    height: 10px;\r\n    overflow: hidden;\r\n    background: rgba(152, 164, 226, 0.42);\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 0;\r\n    position: relative;\r\n\r\n    border-radius: 10px;\r\n\r\n}\r\n.inputWrapper .underLayer .insideDiv{\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    width: unset;\r\n    background: orange;\r\n    border-radius:10px;\r\n}\r\n\r\ninput[type=range] {\r\n    height: 100%;\r\n    margin: 0;\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    display: block;\r\n    background: transparent;\r\n}\r\n\r\ninput[type=range]:focus {\r\n    outline: none;\r\n}\r\n.secondInputWrapper{\r\n    z-index: 1;\r\n}\r\n.firstInputWrapper{\r\n    z-index: 5;\r\n}\r\n\r\n.inputWrapper .secondThrumd {\r\n    width: 20px;\r\n    height: 20px;\r\n    background: green;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 0;\r\n    transition: all ease 500ms;\r\n    /*left: calc(var(--containerWidth) - 20px);*/\r\n    z-index: 10;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n    width: 100%;\r\n    height: 50%;\r\n    cursor: pointer;\r\n    animate: 0.2s;\r\n    background: transparent;\r\n    border-radius: 9px;\r\n    border: none;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n    /*position: absolute;*/\r\n    /*    top: 0;*/\r\n    margin-top: -5px;\r\n    border: none;\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 50%;\r\n    background: var(--thrumb-color);\r\n    cursor: pointer;\r\n    -webkit-appearance: none;\r\n    transition: all ease 500ms;\r\n}\r\n\r\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n    background: transparent;\r\n}\r\n\r\ninput[type=range]::-moz-range-track {\r\n    width: 100%;\r\n    height: 50%;\r\n    cursor: pointer;\r\n    animate: 0.2s;\r\n    background: transparent;\r\n    border-radius: 9px;\r\n    border: none;\r\n}\r\n\r\ninput[type=range]::-moz-range-thumb {\r\n    /*position: absolute;*/\r\n    /*top: 0;*/\r\n    margin-top: -5px;\r\n    border: none;\r\n    height: 20px;;\r\n    width: 20px;\r\n    transition: all ease 500ms;\r\n    border-radius: 50%;\r\n    background: var(--thrumb-color);\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=range]::-ms-track {\r\n    width: 100%;\r\n    height: 50%;\r\n    cursor: pointer;\r\n    animate: 0.2s;\r\n    background: transparent;\r\n    border-color: transparent;\r\n    color: transparent;\r\n}\r\n\r\ninput[type=range]::-ms-fill-lower {\r\n    background: transparent;\r\n    border: none;\r\n    border-radius: 18px;\r\n}\r\n\r\ninput[type=range]::-ms-fill-upper {\r\n    background: transparent;\r\n    border: none;\r\n    border-radius: 18px;\r\n}\r\n\r\ninput[type=range]::-ms-thumb {\r\n    /*position: absolute;*/\r\n    /*top: 0;*/\r\n    margin-top: -5px;\r\n    margin-top: 1px;\r\n    border: none;\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 20px;\r\n    background: var(--thrumb-color);\r\n    cursor: pointer;\r\n    transition: all ease 500ms;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-lower {\r\n    background: transparent;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-upper {\r\n    background: transparent;\r\n}", "",{"version":3,"sources":["webpack://./src/settingsPage/filters/DiaposoneSection/DiaposoneRange.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,qCAAqC;IACrC,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,kBAAkB;;IAElB,mBAAmB;;AAEvB;AACA;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,wBAAwB;IACxB,WAAW;IACX,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,0BAA0B;IAC1B,4CAA4C;IAC5C,WAAW;AACf;;AAEA;IACI,WAAW;IACX,WAAW;IACX,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,+BAA+B;IAC/B,eAAe;IACf,wBAAwB;IACxB,0BAA0B;AAC9B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,0BAA0B;IAC1B,kBAAkB;IAClB,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,+BAA+B;IAC/B,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":[".diaposoneCountContainer,.diaposoneYearContainer{\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n.inputWrapper {\r\n    position: relative;\r\n    height: 20px;\r\n    --thrumb-color: #d9117e;\r\n}\r\n\r\n.inputWrapper div {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.inputWrapper .underLayer {\r\n    width: 100%;\r\n    height: 10px;\r\n    overflow: hidden;\r\n    background: rgba(152, 164, 226, 0.42);\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 0;\r\n    position: relative;\r\n\r\n    border-radius: 10px;\r\n\r\n}\r\n.inputWrapper .underLayer .insideDiv{\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    width: unset;\r\n    background: orange;\r\n    border-radius:10px;\r\n}\r\n\r\ninput[type=range] {\r\n    height: 100%;\r\n    margin: 0;\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    display: block;\r\n    background: transparent;\r\n}\r\n\r\ninput[type=range]:focus {\r\n    outline: none;\r\n}\r\n.secondInputWrapper{\r\n    z-index: 1;\r\n}\r\n.firstInputWrapper{\r\n    z-index: 5;\r\n}\r\n\r\n.inputWrapper .secondThrumd {\r\n    width: 20px;\r\n    height: 20px;\r\n    background: green;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 0;\r\n    transition: all ease 500ms;\r\n    /*left: calc(var(--containerWidth) - 20px);*/\r\n    z-index: 10;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n    width: 100%;\r\n    height: 50%;\r\n    cursor: pointer;\r\n    animate: 0.2s;\r\n    background: transparent;\r\n    border-radius: 9px;\r\n    border: none;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n    /*position: absolute;*/\r\n    /*    top: 0;*/\r\n    margin-top: -5px;\r\n    border: none;\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 50%;\r\n    background: var(--thrumb-color);\r\n    cursor: pointer;\r\n    -webkit-appearance: none;\r\n    transition: all ease 500ms;\r\n}\r\n\r\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n    background: transparent;\r\n}\r\n\r\ninput[type=range]::-moz-range-track {\r\n    width: 100%;\r\n    height: 50%;\r\n    cursor: pointer;\r\n    animate: 0.2s;\r\n    background: transparent;\r\n    border-radius: 9px;\r\n    border: none;\r\n}\r\n\r\ninput[type=range]::-moz-range-thumb {\r\n    /*position: absolute;*/\r\n    /*top: 0;*/\r\n    margin-top: -5px;\r\n    border: none;\r\n    height: 20px;;\r\n    width: 20px;\r\n    transition: all ease 500ms;\r\n    border-radius: 50%;\r\n    background: var(--thrumb-color);\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=range]::-ms-track {\r\n    width: 100%;\r\n    height: 50%;\r\n    cursor: pointer;\r\n    animate: 0.2s;\r\n    background: transparent;\r\n    border-color: transparent;\r\n    color: transparent;\r\n}\r\n\r\ninput[type=range]::-ms-fill-lower {\r\n    background: transparent;\r\n    border: none;\r\n    border-radius: 18px;\r\n}\r\n\r\ninput[type=range]::-ms-fill-upper {\r\n    background: transparent;\r\n    border: none;\r\n    border-radius: 18px;\r\n}\r\n\r\ninput[type=range]::-ms-thumb {\r\n    /*position: absolute;*/\r\n    /*top: 0;*/\r\n    margin-top: -5px;\r\n    margin-top: 1px;\r\n    border: none;\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 20px;\r\n    background: var(--thrumb-color);\r\n    cursor: pointer;\r\n    transition: all ease 500ms;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-lower {\r\n    background: transparent;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-upper {\r\n    background: transparent;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/filters/FiltersContainer.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/settingsPage/filters/FiltersContainer.css ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".filtersContainer {\r\n    width: 90vw;\r\n    height: 40%;\r\n    margin: 100px auto 0;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n}\r\n\r\n.valueSection,\r\n.diaposoneSection,\r\n.sortSection {\r\n    width: 30%;\r\n    height: 100%;\r\n    background: rgb(149 14 14 / 66%);\r\n    border: 2px solid red;\r\n    box-shadow: 0 1px 10px 3px #ff0000d1;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.filtersContainer h5 {\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    color: white;\r\n}", "",{"version":3,"sources":["webpack://./src/settingsPage/filters/FiltersContainer.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,WAAW;IACX,oBAAoB;IACpB,aAAa;IACb,qBAAqB;IACrB,8BAA8B;AAClC;;AAEA;;;IAGI,UAAU;IACV,YAAY;IACZ,gCAAgC;IAChC,qBAAqB;IACrB,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,6BAA6B;AACjC;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;AAChB","sourcesContent":[".filtersContainer {\r\n    width: 90vw;\r\n    height: 40%;\r\n    margin: 100px auto 0;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n}\r\n\r\n.valueSection,\r\n.diaposoneSection,\r\n.sortSection {\r\n    width: 30%;\r\n    height: 100%;\r\n    background: rgb(149 14 14 / 66%);\r\n    border: 2px solid red;\r\n    box-shadow: 0 1px 10px 3px #ff0000d1;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.filtersContainer h5 {\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    color: white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/filters/SortSection/SortSection.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/settingsPage/filters/SortSection/SortSection.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sortSection form select {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    display: block;\r\n    border-radius: 20px;\r\n    background: #bd6666;\r\n    border: none;\r\n    outline: none;\r\n    color: white;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n}\r\n\r\n.sortSection form button {\r\n    margin: 10px auto;\r\n    display: block;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    border: none;\r\n    width: 90%;\r\n    letter-spacing: 1px;\r\n    color: #881507;\r\n}", "",{"version":3,"sources":["webpack://./src/settingsPage/filters/SortSection/SortSection.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,cAAc;IACd,cAAc;IACd,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,UAAU;IACV,mBAAmB;IACnB,cAAc;AAClB","sourcesContent":[".sortSection form select {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    display: block;\r\n    border-radius: 20px;\r\n    background: #bd6666;\r\n    border: none;\r\n    outline: none;\r\n    color: white;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n}\r\n\r\n.sortSection form button {\r\n    margin: 10px auto;\r\n    display: block;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    border: none;\r\n    width: 90%;\r\n    letter-spacing: 1px;\r\n    color: #881507;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/filters/ValueSecton/ValueSection.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/settingsPage/filters/ValueSecton/ValueSection.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".valueSection span {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.byColorText {\r\n    display: block;\r\n}\r\n\r\n.colorCell {\r\n    width: 20px;\r\n    height: 20px;\r\n    transition: all ease 500ms;\r\n}\r\n\r\n.colorCell:hover {\r\n    border: 2px solid gray\r\n}\r\n\r\n.colorCell-active {\r\n    border-radius: 20px;\r\n    box-shadow: 1px 1px 5px 2px;\r\n}\r\n\r\n.byShape,\r\n.bySize,\r\n.byColor {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n    color: white;\r\n    letter-spacing: 1px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.shapeCell {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    transition: all ease 500ms;\r\n}\r\n\r\n.shapeCell-active,\r\n.shapeCell-active {\r\n    filter: invert(9%) sepia(63%) saturate(461%) hue-rotate( 322deg) brightness(83%) contrast(88%);\r\n}\r\n\r\n.shapeCell:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.sizesWrapper,\r\n.shapesWrapper,\r\n.colorCellsWrapper {\r\n    width: 85%;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-around;\r\n    flex-grow: 3;\r\n}\r\n\r\n.sizeCell {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}", "",{"version":3,"sources":["webpack://./src/settingsPage/filters/ValueSecton/ValueSection.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI;AACJ;;AAEA;IACI,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;;;IAGI,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;AAC9B;;AAEA;;IAEI,8FAA8F;AAClG;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;IAGI,UAAU;IACV,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,4BAA4B;AAChC","sourcesContent":[".valueSection span {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.byColorText {\r\n    display: block;\r\n}\r\n\r\n.colorCell {\r\n    width: 20px;\r\n    height: 20px;\r\n    transition: all ease 500ms;\r\n}\r\n\r\n.colorCell:hover {\r\n    border: 2px solid gray\r\n}\r\n\r\n.colorCell-active {\r\n    border-radius: 20px;\r\n    box-shadow: 1px 1px 5px 2px;\r\n}\r\n\r\n.byShape,\r\n.bySize,\r\n.byColor {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n    color: white;\r\n    letter-spacing: 1px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.shapeCell {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    transition: all ease 500ms;\r\n}\r\n\r\n.shapeCell-active,\r\n.shapeCell-active {\r\n    filter: invert(9%) sepia(63%) saturate(461%) hue-rotate( 322deg) brightness(83%) contrast(88%);\r\n}\r\n\r\n.shapeCell:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.sizesWrapper,\r\n.shapesWrapper,\r\n.colorCellsWrapper {\r\n    width: 85%;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-around;\r\n    flex-grow: 3;\r\n}\r\n\r\n.sizeCell {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/startPage/StartPage.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/startPage/StartPage.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".startPage {\r\n    background: rebeccapurple;\r\n}\r\n\r\n.startPageCanvas {\r\n    filter: blur(2px);\r\n}\r\n\r\n.startPageCanvas,\r\n.startPageContainer {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.startPageContainer {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: rgba(255, 255, 255, 0.25);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.startPageContainer div {\r\n    width: 40vw;\r\n    background: #c91919;\r\n    border-radius: 15px;\r\n    /* line-height: 100%; */\r\n    text-align: center;\r\n    padding: 50px;\r\n    color: wheat;\r\n    text-transform: uppercase;\r\n    letter-spacing: 6px;\r\n    font-size: 21px;\r\n    mix-blend-mode: multiply;\r\n    box-shadow: inset 5px -5px 18px 9px #b50707;\r\n}", "",{"version":3,"sources":["webpack://./src/startPage/StartPage.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,kBAAkB;IAClB,MAAM;IACN,OAAO;AACX;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,wBAAwB;IACxB,2CAA2C;AAC/C","sourcesContent":[".startPage {\r\n    background: rebeccapurple;\r\n}\r\n\r\n.startPageCanvas {\r\n    filter: blur(2px);\r\n}\r\n\r\n.startPageCanvas,\r\n.startPageContainer {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.startPageContainer {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: rgba(255, 255, 255, 0.25);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.startPageContainer div {\r\n    width: 40vw;\r\n    background: #c91919;\r\n    border-radius: 15px;\r\n    /* line-height: 100%; */\r\n    text-align: center;\r\n    padding: 50px;\r\n    color: wheat;\r\n    text-transform: uppercase;\r\n    letter-spacing: 6px;\r\n    font-size: 21px;\r\n    mix-blend-mode: multiply;\r\n    box-shadow: inset 5px -5px 18px 9px #b50707;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;IAC5B,4BAA4B;IAC5B,wBAAwB;AAC5B","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/Tree/Tree.css":
/*!***************************!*\
  !*** ./src/Tree/Tree.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Tree_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Tree.css */ "./node_modules/css-loader/dist/cjs.js!./src/Tree/Tree.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Tree_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Tree_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Tree_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Tree_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/header/Header.css":
/*!*******************************!*\
  !*** ./src/header/Header.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Header.css */ "./node_modules/css-loader/dist/cjs.js!./src/header/Header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/settingsPage/SettingsPage.css":
/*!*******************************************!*\
  !*** ./src/settingsPage/SettingsPage.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_SettingsPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./SettingsPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/SettingsPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_SettingsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_SettingsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_SettingsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_SettingsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/settingsPage/decoration/DecorationSection.css":
/*!***********************************************************!*\
  !*** ./src/settingsPage/decoration/DecorationSection.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_DecorationSection_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./DecorationSection.css */ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/decoration/DecorationSection.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_DecorationSection_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_DecorationSection_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_DecorationSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_DecorationSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/settingsPage/decoration/ToyItem/ToyItem.css":
/*!*********************************************************!*\
  !*** ./src/settingsPage/decoration/ToyItem/ToyItem.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ToyItem_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./ToyItem.css */ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/decoration/ToyItem/ToyItem.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ToyItem_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ToyItem_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ToyItem_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ToyItem_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/settingsPage/filters/DiaposoneSection/DiaposoneRange.css":
/*!**********************************************************************!*\
  !*** ./src/settingsPage/filters/DiaposoneSection/DiaposoneRange.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_DiaposoneRange_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./DiaposoneRange.css */ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/filters/DiaposoneSection/DiaposoneRange.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_DiaposoneRange_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_DiaposoneRange_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_DiaposoneRange_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_DiaposoneRange_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/settingsPage/filters/FiltersContainer.css":
/*!*******************************************************!*\
  !*** ./src/settingsPage/filters/FiltersContainer.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_FiltersContainer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./FiltersContainer.css */ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/filters/FiltersContainer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_FiltersContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_FiltersContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_FiltersContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_FiltersContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/settingsPage/filters/SortSection/SortSection.css":
/*!**************************************************************!*\
  !*** ./src/settingsPage/filters/SortSection/SortSection.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_SortSection_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./SortSection.css */ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/filters/SortSection/SortSection.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_SortSection_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_SortSection_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_SortSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_SortSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/settingsPage/filters/ValueSecton/ValueSection.css":
/*!***************************************************************!*\
  !*** ./src/settingsPage/filters/ValueSecton/ValueSection.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ValueSection_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./ValueSection.css */ "./node_modules/css-loader/dist/cjs.js!./src/settingsPage/filters/ValueSecton/ValueSection.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ValueSection_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ValueSection_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ValueSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ValueSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/startPage/StartPage.css":
/*!*************************************!*\
  !*** ./src/startPage/StartPage.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_StartPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./StartPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/startPage/StartPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_StartPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_StartPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_StartPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_StartPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Tree/ToyImage.ts":
/*!******************************!*\
  !*** ./src/Tree/ToyImage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToyImage": () => (/* binding */ ToyImage)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/controll */ "./src/common/controll.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ToyImage = /** @class */ (function (_super) {
    __extends(ToyImage, _super);
    function ToyImage(parentNode, toyData) {
        var _this = _super.call(this, parentNode) || this;
        _this.startX = toyData.x,
            _this.startY = toyData.y,
            _this.size = toyData.size,
            _this.index = toyData.num;
        _this.toyImage = new Image();
        _this.id = +new Date();
        _this.toyImage.src = "./public/assets/toys/".concat(_this.index, ".png");
        return _this;
    }
    ToyImage.prototype.render = function (context) {
        context.globalCompositeOperation = 'source-over';
        context.drawImage(this.toyImage, this.startX, this.startY, this.size, this.size);
    };
    return ToyImage;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/Tree/Tree.ts":
/*!**************************!*\
  !*** ./src/Tree/Tree.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreePage": () => (/* binding */ TreePage)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _chooseSection_chooseSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chooseSection/chooseSection */ "./src/Tree/chooseSection/chooseSection.ts");
/* harmony import */ var _canvasSection_canvasSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvasSection/canvasSection */ "./src/Tree/canvasSection/canvasSection.ts");
/* harmony import */ var _toysSection_toysSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toysSection/toysSection */ "./src/Tree/toysSection/toysSection.ts");
/* harmony import */ var _Tree_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tree.css */ "./src/Tree/Tree.css");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var TreePage = /** @class */ (function (_super) {
    __extends(TreePage, _super);
    function TreePage(parentNode, filtersModel) {
        var _this = _super.call(this, parentNode, 'div', 'treePage-container') || this;
        _this.node.style.backgroundImage = 'url(./public/assets/bgStartPage.jpg)';
        _this.chooseSection = new _chooseSection_chooseSection__WEBPACK_IMPORTED_MODULE_1__.ChooseSection(_this.node);
        _this.chooseSection.setCanvasTree = function (tr) {
            _this.canvasSection.setCanvasTree(tr);
        };
        _this.canvasSection = new _canvasSection_canvasSection__WEBPACK_IMPORTED_MODULE_2__.CanvasSection(_this.node);
        _this.chooseSection.setCanvasBackground = function (bgImageIndex) {
            _this.canvasSection.setCanvasBackground(bgImageIndex);
        };
        _this.toysSection = new _toysSection_toysSection__WEBPACK_IMPORTED_MODULE_3__.ToysSection(_this.node, filtersModel);
        return _this;
    }
    return TreePage;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/Tree/canvasSection/Dot.ts":
/*!***************************************!*\
  !*** ./src/Tree/canvasSection/Dot.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dot": () => (/* binding */ Dot)
/* harmony export */ });
var Dot = /** @class */ (function () {
    function Dot(ctx, x, y) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.size = Math.random() * 1 + 2;
        this.speedY = Math.random() * 4;
        this.speedX = Math.random() * 4 - 2;
        this.maxSize = Math.random() * 2 + 3;
        this.size = Math.random() * 1 + 1;
        this.vs = Math.random() * 0.2 + 0.55;
        this.angleX = Math.random() * 6.2;
        this.angleY = Math.random() * 6.2;
        this.vax = Math.random() * 0.6 - 0.3;
        this.vay = Math.random() * 0.6 - 0.3;
        this.lightness = 10;
        this.ctx.fillStyle = "rgba(".concat(Math.random() * 100 + 150, ",").concat(Math.random() * 100 + 150, ",").concat(Math.random() * 100 + 150, ",0.65)");
        this.angle = 0;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 5;
        this.ctx.shadowBlur = 5;
        this.ctx.shadowColor = 'rgba(15,18,31,0.72)';
    }
    Dot.prototype.update = function (x, y) {
        this.x += this.speedX + Math.sin(this.angleX);
        this.y += this.speedY + Math.sin(this.angleY);
        this.size += this.vs;
        this.angleX += this.vax;
        this.angleY += this.vay;
        this.angle += this.va;
        //this.ctx.globalCompositeOperation = 'destination-in'
        if (this.size < this.maxSize + 2) {
            // this.ctx.globalCompositeOperation = 'destination-in'
            this.ctx.save();
            // this.ctx.globalCompositeOperation = 'destination-in'
            this.ctx.translate(this.x, this.y);
            this.ctx.rotate(this.angle);
            this.ctx.fillRect(0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
            var double = this.size * 2;
            this.ctx.lineWidth = 0.5;
            this.ctx.strokeStyle = "rgba(255,0,".concat(Math.random() * 50, ",1)");
            //this.ctx.globalCompositeOperation = 'source-over'
            // this.ctx.strokeRect(0 - double / 2, 0 - double / 2, double, double)
            this.ctx.strokeRect(0 - this.size, 0 - this.size, this.size, this.size);
            var triple = this.size * 3;
            this.ctx.lineWidth = 0.2;
            this.ctx.strokeStyle = 'white';
            // this.ctx.strokeRect(0 - triple / 2, 0 - triple / 2, triple, triple)
            this.ctx.strokeRect(0 - this.size, 0 - this.size, this.size, this.size);
            requestAnimationFrame(this.update.bind(this));
            this.ctx.restore();
            // this.onChangeDot(this.ctx.canvas)
        }
    };
    return Dot;
}());



/***/ }),

/***/ "./src/Tree/canvasSection/MaskCanvas.ts":
/*!**********************************************!*\
  !*** ./src/Tree/canvasSection/MaskCanvas.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaskCanvas": () => (/* binding */ MaskCanvas)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/controll */ "./src/common/controll.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MaskCanvas = /** @class */ (function (_super) {
    __extends(MaskCanvas, _super);
    function MaskCanvas(parentNode, image, width, height) {
        var _this = _super.call(this, parentNode) || this;
        _this.secondCanvas = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](parentNode, 'canvas');
        _this.secondCanvas.node.width = width,
            _this.secondCanvas.node.height = height;
        var secondCtx = _this.secondCanvas.node.getContext('2d');
        secondCtx.drawImage(image, 0, 0, width, height);
        var data = secondCtx.getImageData(0, 0, width, height);
        _this.isEmptyMap = new Map();
        var countX = 0;
        var countY = 0;
        //значения границ по строкам
        var limitValues = [];
        var rowObject = { y: countY, x: [] };
        var firstInRow = false;
        var lastInRow = null;
        for (var i = 0; i < data.data.length; i += 4) {
            if (countX === Math.floor(width)) {
                rowObject.x.push(lastInRow);
                limitValues.push(rowObject);
                countX = 0;
                countY++;
                firstInRow = false;
                lastInRow = null;
                rowObject = { y: countY, x: [] };
            }
            countX++;
            if (!(data.data[i + 3] == 0)) {
                _this.isEmptyMap.set("".concat(countX, "-").concat(countY), true);
                if (!firstInRow) {
                    firstInRow = true;
                    rowObject.x.push(countX);
                }
                else {
                    lastInRow = countX;
                }
            }
            // if (data.data[i + 3] < 10) {
            //   this.isEmptyMap.set(`${countX}-${countY}`, false)
            // }
            // else {
            //    this.isEmptyMap.set(`${countX}-${countY}`, true)
            // }
        }
        _this.coordsForGarland = _this.setLimitsForGarland(limitValues);
        _this.secondCanvas.destroy();
        return _this;
    }
    MaskCanvas.prototype.getGarlandCoords = function () {
        return this.coordsForGarland;
    };
    MaskCanvas.prototype.setLimitsForGarland = function (limitValues) {
        var limitsForGarland = [];
        for (var i = 0; i < limitValues.length; i += 50) {
            limitsForGarland.push(limitValues[i]);
        }
        return limitsForGarland;
    };
    MaskCanvas.prototype.checkPixel = function (x, y) {
        return this.isEmptyMap.get("".concat(Math.floor(x), "-").concat(Math.floor(y)));
    };
    MaskCanvas.prototype.getCursorPosition = function (event, node) {
        var rect = node.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        return { x: x, y: y };
    };
    MaskCanvas.prototype.pick = function (e, node, context) {
        var _a = this.getCursorPosition(e, node), x = _a.x, y = _a.y;
        return { x: x, y: y };
    };
    return MaskCanvas;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/Tree/canvasSection/canvasSection.ts":
/*!*************************************************!*\
  !*** ./src/Tree/canvasSection/canvasSection.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasSection": () => (/* binding */ CanvasSection)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _ToyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ToyImage */ "./src/Tree/ToyImage.ts");
/* harmony import */ var _MaskCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaskCanvas */ "./src/Tree/canvasSection/MaskCanvas.ts");
/* harmony import */ var _createGirland__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createGirland */ "./src/Tree/canvasSection/createGirland.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var CanvasSection = /** @class */ (function (_super) {
    __extends(CanvasSection, _super);
    function CanvasSection(parentNode) {
        var _this = _super.call(this, parentNode) || this;
        _this.parentNode = parentNode;
        _this.toysOnTree = [];
        _this.node.classList.add('canvasSection');
        _this.canvasSection = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'canvas', 'canvas');
        _this.canvasSection.node.width = _this.canvasWidth = _this.canvasSection.node.getBoundingClientRect().width;
        _this.canvasSection.node.height = _this.canvasHeight = _this.canvasSection.node.getBoundingClientRect().height;
        _this.canvasSection.node.onclick = function (e) {
            console.log(e.offsetX, e.offsetY);
        };
        _this.prevPosX;
        _this.prevPosX;
        _this.mouseDownHandlerBinded = _this.mouseDownHandler.bind(_this);
        _this.moveHandlerBinded = _this.moveHandler.bind(_this);
        _this.setCanvasBackground('1');
        _this.setCanvasTree('1');
        _this.offsetTreeCanvasWidth = _this.canvasWidth * 0.2 / 2;
        _this.offsetTreeCanvasHeight = _this.canvasHeight * 0.2 / 2;
        _this.canvasSection.node.addEventListener('mousedown', _this.mouseDownHandlerBinded);
        _this.ctx = _this.canvasSection.node.getContext('2d');
        _this.canvasBackground = null;
        _this.canvasTree = null;
        _this.maskCanvas = null;
        _this.createGarland = new _createGirland__WEBPACK_IMPORTED_MODULE_3__.CreateGarland(_this.canvasSection.node.width, _this.canvasSection.node.height);
        _this.node.ondragover = function (e) {
            e.preventDefault();
        };
        _this.node.ondrop = function (e) {
            var _a = _this.getCursorPosition(e, _this.node), x = _a.x, y = _a.y;
            if (!_this.isOverCanvas(x - _this.canvasTree.startX, y - _this.canvasTree.startY))
                return;
            else {
                if (_this.maskCanvas.checkPixel(x - _this.canvasTree.startX, y - _this.canvasTree.startY)) {
                    var toy = new _ToyImage__WEBPACK_IMPORTED_MODULE_1__.ToyImage(_this.node, {
                        x: x - 25, y: y - 25,
                        num: +e.dataTransfer.getData('el'), size: 50
                    });
                    toy.render(_this.ctx);
                    _this.toysOnTree.push(toy);
                }
            }
        };
        return _this;
    }
    CanvasSection.prototype.mouseDownHandler = function (e) {
        this.prevPosX = this.getCursorPosition(e, this.node).x;
        this.prevPosY = this.getCursorPosition(e, this.node).y;
        this.canvasSection.node.addEventListener('mousemove', this.moveHandlerBinded);
    };
    CanvasSection.prototype.moveHandler = function (e) {
        var _this = this;
        var currentToy = this.getCurrentToy(e);
        var _a = this.getCursorPosition(e, this.node), x = _a.x, y = _a.y;
        currentToy && (currentToy.startX = currentToy.startX + x - this.prevPosX);
        currentToy && (currentToy.startY = currentToy.startY + y - this.prevPosY);
        this.prevPosX = x;
        this.prevPosY = y;
        this.drawScene();
        this.canvasSection.node.onmouseup = function (e) {
            var _a = _this.getCursorPosition(e, _this.canvasSection.node), x = _a.x, y = _a.y;
            if (_this.isOverCanvas(x - 50, y - 50)) {
                var canvasX = x - _this.canvasTree.startX;
                var canvasY = y - _this.canvasTree.startY;
                if (!_this.maskCanvas.checkPixel(canvasX, canvasY)) {
                    _this.deleteToy(_this.getCurrentToy(e));
                    //TODO даляются все одинаковые элементы
                    //попадают элнменты в диапозоне
                }
            }
            _this.canvasSection.node.removeEventListener('mousemove', _this.moveHandlerBinded);
        };
    };
    CanvasSection.prototype.isOverCanvas = function (x, y) {
        // console.log(this.canvasTree.startX,this.canvasTree.startX + this.canvasTree.width,'^',this.canvasTree.startY,this.canvasTree.startY + this.canvasTree.height)
        // console.log(x,y)
        return (x >= this.canvasTree.startX
            && x <= this.canvasTree.startX + this.canvasTree.width
            || y >= this.canvasTree.startY
            || y <= this.canvasTree.startY + this.canvasTree.height);
    };
    CanvasSection.prototype.smallFoo = function () {
        var _this = this;
        var garCanvas = this.createGarland.newCanvas;
        this.ctx.clearRect(0, 0, garCanvas.width, garCanvas.height);
        this.drawBackground();
        this.drawTree();
        this.ctx.drawImage(garCanvas, 0, 0);
        requestAnimationFrame(function () {
            _this.drawBackground();
            _this.drawTree();
            _this.smallFoo();
            _this.toysOnTree.forEach(function (toy) {
                toy.render(_this.ctx);
            });
        });
    };
    CanvasSection.prototype.drawScene = function () {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.smallFoo();
    };
    CanvasSection.prototype.deleteToy = function (delToy) {
        this.toysOnTree = this.toysOnTree.filter(function (toy) { return toy.id !== delToy.id; });
        this.drawScene();
    };
    CanvasSection.prototype.getCurrentToy = function (e) {
        var _a = this.getCursorPosition(e, this.node), x = _a.x, y = _a.y;
        var toy = this.toysOnTree.filter(function (toy) {
            if (x > toy.startX && x < toy.startX + 50
                && y > toy.startY && y < toy.startY + 50) {
                return true;
            }
            else {
                return false;
            }
        });
        return toy[toy.length - 1];
    };
    CanvasSection.prototype.getCursorPosition = function (event, node) {
        var rect = node.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        return { x: x, y: y };
    };
    CanvasSection.prototype.setCanvasBackground = function (bgImageIndex) {
        this.createImage("./public/assets/bg/".concat(bgImageIndex, ".jpg"), this.canvasWidth, this.canvasHeight, this.bgOnload);
    };
    ;
    CanvasSection.prototype.setCanvasTree = function (treeImageIndex) {
        this.createImage("./public/assets/tree/".concat(treeImageIndex, ".png"), this.canvasWidth * 0.7, this.canvasHeight * 0.7, this.treeOnload);
    };
    CanvasSection.prototype.createImage = function (url, width, height, callcack) {
        var image = new Image();
        image.src = url;
        image.width = width;
        image.height = height;
        image.onload = function () {
            callcack(image);
        };
    };
    CanvasSection.prototype.bgOnload = function (canvasImage) {
        this.canvasBackground = {
            image: canvasImage,
            startX: 0,
            startY: 0,
            width: this.canvasWidth,
            height: this.canvasHeight,
        };
    };
    CanvasSection.prototype.treeOnload = function (treeImage) {
        var _this = this;
        this.maskCanvas = new _MaskCanvas__WEBPACK_IMPORTED_MODULE_2__.MaskCanvas(this.node, treeImage, this.canvasWidth * 0.7, this.canvasHeight * 0.7);
        var arr = this.maskCanvas.getGarlandCoords();
        var newCoords = arr.map(function (el) {
            el.y = el.y + Math.floor(_this.offsetTreeCanvasHeight);
            el.x[0] = el.x[0] + Math.floor(_this.offsetTreeCanvasWidth);
            el.x[1] = el.x[1] + Math.floor(_this.offsetTreeCanvasWidth);
            return el;
        });
        this.createGarland.setCoords(newCoords);
        this.canvasTree = {
            startX: this.canvasWidth * 0.2 / 2, startY: this.canvasHeight * 0.2 / 2, image: treeImage,
            width: this.canvasWidth * 0.8, height: this.canvasHeight * 0.8
        };
        this.drawScene();
    };
    CanvasSection.prototype.drawBackground = function () {
        this.canvasBackground.image
            && this.ctx.drawImage(this.canvasBackground.image, 0, 0, this.canvasBackground.width, this.canvasBackground.height);
    };
    CanvasSection.prototype.drawTree = function () {
        this.ctx.globalCompositeOperation = 'source-over';
        this.canvasTree && this.ctx.drawImage(this.canvasTree.image, this.canvasTree.startX, this.canvasTree.startY, this.canvasTree.width, this.canvasTree.height);
    };
    return CanvasSection;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/Tree/canvasSection/createGirland.ts":
/*!*************************************************!*\
  !*** ./src/Tree/canvasSection/createGirland.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateGarland": () => (/* binding */ CreateGarland)
/* harmony export */ });
/* harmony import */ var _Dot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dot */ "./src/Tree/canvasSection/Dot.ts");

var CreateGarland = /** @class */ (function () {
    function CreateGarland(width, height) {
        this.newCanvas = document.createElement('canvas');
        this.newCanvas.width = width;
        this.newCanvas.height = height;
        console.log('top', this.newCanvas.width, this.newCanvas.height);
        this.newCtx = this.newCanvas.getContext('2d');
        this.newCtx.globalCompositeOperation = 'destination-over';
        //  this.newCtx.fillStyle = 'rgba(217,217,38,0.97)'
        //  this.newCtx.fillRect(0, 0, this.newCanvas.width, this.newCanvas.height)
    }
    CreateGarland.prototype.draw = function () {
        var _this = this;
        var _loop_1 = function (i) {
            if (!this_1.garlandCoordinates[i + 1])
                return { value: void 0 };
            var startX = this_1.garlandCoordinates[i].x[0];
            var startY = this_1.garlandCoordinates[i].y;
            // new Dot(this.newCtx,startX,startY).update(startX,startY)
            var xDistance = this_1.garlandCoordinates[i + 1].x[1] - this_1.garlandCoordinates[i].x[0];
            var steps = Math.ceil(xDistance / 50);
            var xStep = xDistance / steps;
            var currentStep = 1;
            var updateCoords = function () {
                if (currentStep < steps / 2) {
                    startX += xStep;
                    startY += 10;
                }
                else if (currentStep >= steps / 2 && currentStep < steps / 2 + 4) {
                    startX += xStep;
                }
                else {
                    startX += xStep;
                    startY -= 8;
                }
                for (var i_1 = 0; i_1 < 7; i_1++) {
                    new _Dot__WEBPACK_IMPORTED_MODULE_0__.Dot(_this.newCtx, startX, startY).update(startX, startY);
                }
                currentStep++;
            };
            var intervalFunction = function () {
                updateCoords();
                if (currentStep == steps) {
                    clearInterval(inter);
                }
            };
            var inter = setInterval(intervalFunction, 50);
        };
        var this_1 = this;
        for (var i = 1; i < this.garlandCoordinates.length - 1; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    CreateGarland.prototype.setCoords = function (data) {
        this.garlandCoordinates = data;
        this.draw();
    };
    return CreateGarland;
}());



/***/ }),

/***/ "./src/Tree/chooseSection/chooseSection.ts":
/*!*************************************************!*\
  !*** ./src/Tree/chooseSection/chooseSection.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseSection": () => (/* binding */ ChooseSection)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/controll */ "./src/common/controll.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ChooseSection = /** @class */ (function (_super) {
    __extends(ChooseSection, _super);
    function ChooseSection(parentNode) {
        var _this = _super.call(this, parentNode) || this;
        _this.bgImages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        _this.treeImages = ['1', '2', '3', '4', '5', '6'];
        _this.girlandColors = ['red', 'green', 'blue'];
        _this.node.classList.add('chooseContainer');
        _this.chooseBackground = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'chooseBackground');
        _this.chooseBackgroundButton = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.chooseBackground.node, 'button', 'chooseBackgroundButton', 'Выбери фон');
        _this.chooseBackgroundButton.node.onclick = function () {
            _this.bgItems.node.style.display = 'grid';
            setTimeout(function () {
                _this.bgItems.node.classList.toggle('bgItemsWrapper-show');
            }, 0);
        };
        _this.bgItems = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.chooseBackground.node, 'div', 'bgItemsWrapper-hide');
        _this.bgImages.forEach(function (bg) {
            var bgItem = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.bgItems.node, 'div', 'bgItem');
            bgItem.node.style.backgroundImage = "url(./public/assets/bg/".concat(bg, ".jpg)");
            bgItem.node.onclick = function () {
                _this.bgItems.node.classList.remove('bgItemsWrapper-show');
                _this.setCanvasBackground(bg);
                setTimeout(function () {
                    _this.bgItems.node.style.display = 'none';
                }, 0);
            };
        });
        _this.chooseTree = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'chooseTree');
        _this.treeImgs = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.chooseTree.node, 'div', 'treeImages-hide');
        _this.treeImgsButton = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.chooseTree.node, 'button', 'chooseTreeButton', 'Выбери елку');
        _this.treeImgsButton.node.onclick = function () {
            _this.treeImgs.node.style.display = 'grid';
            setTimeout(function () {
                _this.treeImgs.node.classList.toggle('treeImages-show');
            }, 0);
        };
        _this.treeImages.forEach(function (tr) {
            var treeItem = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.treeImgs.node, 'div', 'treeItem');
            treeItem.node.style.backgroundImage = "url(./public/assets/tree/".concat(tr, ".png)");
            treeItem.node.onclick = function () {
                _this.setCanvasTree(tr);
                _this.treeImgs.node.classList.remove('treeImages-show');
            };
        });
        _this.chooseGirland = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'chooseGirland', 'girland');
        _this.girlandButton = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.chooseGirland.node, 'button', 'chooseGirlandButton', 'Включить гирлянду');
        _this.girlandButton.node.onclick = function () {
            _this.colorsList.node.style.display = 'flex';
            setTimeout(function () { _this.colorsList.node.classList.toggle('girland-show'); }, 0);
        };
        _this.colorsList = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.chooseGirland.node, 'ul', 'girland-hide');
        _this.girlandColors.forEach(function (col) {
            var color = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.colorsList.node, 'li', 'colorItem');
            color.node.style.background = col;
            color.node.onclick = function () {
                _this.colorsList.node.classList.remove('girland-show');
            };
        });
        return _this;
    }
    return ChooseSection;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/Tree/toysSection/toysSection.ts":
/*!*********************************************!*\
  !*** ./src/Tree/toysSection/toysSection.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToysSection": () => (/* binding */ ToysSection)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/controll */ "./src/common/controll.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ToysSection = /** @class */ (function (_super) {
    __extends(ToysSection, _super);
    function ToysSection(parentNode, filtersModel) {
        var _this = _super.call(this, parentNode) || this;
        _this.node.classList.add('toysSection');
        return _this;
        //    filtersModel.getFavorites().forEach(toy => {
        //     const toyItem = new Control(this.node, 'div', 'toySectionItem')
        //  toyItem.node.style.backgroundImage = `url(./public/assets/toys/${toy.num}.png)`
        //     const image=new Image()
        //     image.src=`./public/assets/toys/${toy.num}.png`;
        //     image.style.width='60%'
        //     image.style.height='60%'
        //     image.draggable=true
        //     image.ondragstart=(e)=>{
        //       e.dataTransfer.setData('el',toy.num)
        // console.log("JUYJUJUYJ",e.dataTransfer)
        //     }
        //    toyItem.node.appendChild(image)
        //    const toyCount = new Control(toyItem.node, 'span', 'toyCount', toy.count)
        //  })
    }
    return ToysSection;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/controll */ "./src/common/controll.ts");
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/Header */ "./src/header/Header.ts");
/* harmony import */ var _settingsPage_SettingsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settingsPage/SettingsPage */ "./src/settingsPage/SettingsPage.ts");
/* harmony import */ var _Tree_Tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tree/Tree */ "./src/Tree/Tree.ts");
/* harmony import */ var _settingsPage_filters_FiltersModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settingsPage/filters/FiltersModel */ "./src/settingsPage/filters/FiltersModel.ts");
/* harmony import */ var _startPage_StartPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./startPage/StartPage */ "./src/startPage/StartPage.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(parentNode, data) {
        var _this = _super.call(this, parentNode, 'div', 'container') || this;
        _this.parent = parentNode;
        _this.backgroundsImages = data[0];
        _this.treesImages = data[1];
        _this.toysObj = data[2].toys;
        _this.header = new _header_Header__WEBPACK_IMPORTED_MODULE_1__.Header(_this.node);
        _this.startPage = new _startPage_StartPage__WEBPACK_IMPORTED_MODULE_5__.StartPage(_this.node);
        _this.startPage.changePage = function (page) {
            _this.changePage(page);
        };
        _this.filtersModel = new _settingsPage_filters_FiltersModel__WEBPACK_IMPORTED_MODULE_4__.FiltersModel(_this.toysObj);
        _this.header.changePage = function (page) {
            _this.changePage(page);
        };
        _this.settingsPage.addFavorite = function (toyData) {
            _this.filtersModel.addFavorite(toyData);
        };
        return _this;
    }
    App.prototype.toggleNavPage = function (firstEl, secondEl) {
        firstEl && firstEl.destroy();
        firstEl && firstEl.destroy();
        secondEl && secondEl.destroy();
    };
    App.prototype.changePage = function (page) {
        var _this = this;
        if (page === 'settings') {
            console.log(this.treePage);
            this.toggleNavPage(this.treePage, this.startPage);
            this.settingsPage = new _settingsPage_SettingsPage__WEBPACK_IMPORTED_MODULE_2__.SettingsPage(this.node, this.filtersModel, this.toysObj);
            this.settingsPage.addFavorite = function (toyData) {
                _this.addFavorite(toyData);
            };
        }
        else if (page === 'tree') {
            this.toggleNavPage(this.settingsPage, this.startPage);
            this.treePage = new _Tree_Tree__WEBPACK_IMPORTED_MODULE_3__.TreePage(this.node, this.filtersModel);
        }
    };
    return App;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));

//TODO Button disabled


/***/ }),

/***/ "./src/common/controll.ts":
/*!********************************!*\
  !*** ./src/common/controll.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Control = /** @class */ (function () {
    function Control(parentNode, tagName, className, content) {
        if (tagName === void 0) { tagName = 'div'; }
        if (className === void 0) { className = ''; }
        if (content === void 0) { content = ''; }
        var el = document.createElement(tagName);
        el.className = className;
        el.textContent = content;
        if (parentNode) {
            parentNode.append(el);
        }
        this.node = el;
    }
    Control.prototype.setCanvasBackground = function (bgImageIndex) {
        throw new Error("Method not implemented.");
    };
    Control.prototype.destroy = function () {
        this.node.remove();
    };
    return Control;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Control);


/***/ }),

/***/ "./src/header/Header.ts":
/*!******************************!*\
  !*** ./src/header/Header.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.css */ "./src/header/Header.css");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(parentNode) {
        var _this = _super.call(this, parentNode, 'header', 'header') || this;
        _this.settingsButton = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'button', 'headerNav', 'Настройки');
        _this.settingsButton.node.onclick = function () {
            _this.toggleDisable(_this.settingsButton.node, _this.treeButton.node);
            _this.changePage('settings');
        };
        _this.treeButton = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'button', 'headerNav', 'Елка');
        _this.treeButton.node.onclick = function () {
            _this.toggleDisable(_this.treeButton.node, _this.settingsButton.node);
            _this.changePage('tree');
        };
        return _this;
    }
    Header.prototype.toggleDisable = function (currentButton, anotherButton) {
        currentButton.setAttribute('disabled', 'true');
        if (anotherButton.getAttribute('disabled') === 'true') {
            anotherButton.removeAttribute('disabled');
        }
    };
    return Header;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/settingsPage/SettingsPage.ts":
/*!******************************************!*\
  !*** ./src/settingsPage/SettingsPage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _SettingsPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsPage.css */ "./src/settingsPage/SettingsPage.css");
/* harmony import */ var _filters_FilterContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters/FilterContainer */ "./src/settingsPage/filters/FilterContainer.ts");
/* harmony import */ var _decoration_DecorationSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decoration/DecorationSection */ "./src/settingsPage/decoration/DecorationSection.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SettingsPage = /** @class */ (function (_super) {
    __extends(SettingsPage, _super);
    function SettingsPage(parentNode, filtersModel, toysData) {
        var _this = _super.call(this, parentNode, 'div', 'settingsPage') || this;
        document.querySelector('body').style.backgroundImage = "url('./public/assets/bgSettings.png')";
        _this.filtersModel = filtersModel;
        _this.filtersModel.onRedrawToys = function (toysArray) {
            _this.decorationSection.drawSection(toysArray);
        };
        _this.filtersContainer = new _filters_FilterContainer__WEBPACK_IMPORTED_MODULE_2__.FilterContainer(_this.node);
        _this.filtersContainer.onChooseColor = function (color) {
            _this.filtersModel.setOneFilter('color', color);
        };
        _this.filtersContainer.onChooseShape = function (shape) {
            _this.filtersModel.setOneFilter('shape', shape);
        };
        _this.filtersContainer.onChooseSize = function (size) {
            _this.filtersModel.setOneFilter('size', size);
        };
        _this.filtersContainer.setDiaposoneData = function (data) {
            _this.filtersModel.setDiaposon(data);
        };
        _this.filtersContainer.setSortOrder = function (order) {
            _this.filtersModel.setSortOrder(order);
        };
        _this.decorationSection = new _decoration_DecorationSection__WEBPACK_IMPORTED_MODULE_3__.DecorationSection(_this.node, toysData);
        _this.decorationSection.addFavorite = function (toyData) {
            _this.addFavorite(toyData);
        };
        return _this;
    }
    return SettingsPage;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/settingsPage/decoration/DecorationSection.ts":
/*!**********************************************************!*\
  !*** ./src/settingsPage/decoration/DecorationSection.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecorationSection": () => (/* binding */ DecorationSection)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _DecorationSection_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DecorationSection.css */ "./src/settingsPage/decoration/DecorationSection.css");
/* harmony import */ var _ToyItem_ToyItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToyItem/ToyItem */ "./src/settingsPage/decoration/ToyItem/ToyItem.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DecorationSection = /** @class */ (function (_super) {
    __extends(DecorationSection, _super);
    function DecorationSection(parentNode, toyData) {
        var _this = _super.call(this, parentNode, 'div', 'decorationSection') || this;
        _this.drawSection(toyData);
        return _this;
    }
    DecorationSection.prototype.drawSection = function (toyData) {
        var _this = this;
        this.node.innerHTML = '';
        toyData.forEach(function (d) {
            var toy = new _ToyItem_ToyItem__WEBPACK_IMPORTED_MODULE_2__.ToyItem(_this.node, d);
            toy.addFavorite = function (toyData) {
                _this.addFavorite(toyData);
            };
        });
    };
    return DecorationSection;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/settingsPage/decoration/ToyItem/ToyItem.ts":
/*!********************************************************!*\
  !*** ./src/settingsPage/decoration/ToyItem/ToyItem.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToyItem": () => (/* binding */ ToyItem)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _ToyItem_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToyItem.css */ "./src/settingsPage/decoration/ToyItem/ToyItem.css");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ToyItem = /** @class */ (function (_super) {
    __extends(ToyItem, _super);
    function ToyItem(parentNode, toyData) {
        var _this = _super.call(this, parentNode, 'div', 'toyCell') || this;
        var title = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'h5', '', toyData.name);
        var dataContainer = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'toyCellData');
        var img = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](dataContainer.node, 'img');
        img.node.src = "./public/assets/toys/".concat(+toyData.num + '', ".png");
        var dataContent = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](dataContainer.node, 'div', 'toyCellContent');
        var count = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](dataContent.node, 'span', '', "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ".concat(toyData.count));
        var year = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](dataContent.node, 'span', '', "\u0413\u043E\u0434: ".concat(toyData.year));
        var shape = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](dataContent.node, 'span', '', "\u0424\u043E\u0440\u043C\u0430: ".concat(toyData.shape));
        var color = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](dataContent.node, 'span', '', "\u0426\u0432\u0435\u0442: ".concat(toyData.color));
        var size = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](dataContent.node, 'span', '', "\u0426\u0432\u0435\u0442: ".concat(toyData.size));
        var favorite = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](dataContent.node, 'span', '', "\u041B\u044E\u0431\u0438\u043C\u0430\u044F: ".concat(!toyData.favorite ? 'нет' : 'да'));
        var selectFavorite = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](dataContent.node, 'button', '', 'Добавить к любимым');
        selectFavorite.node.onclick = function () {
            _this.addFavorite(toyData);
        };
        return _this;
    }
    return ToyItem;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/settingsPage/filters/DiaposoneSection/DianosoneSection.ts":
/*!***********************************************************************!*\
  !*** ./src/settingsPage/filters/DiaposoneSection/DianosoneSection.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiaposoneSection": () => (/* binding */ DiaposoneSection)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _DiaposoneValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiaposoneValue */ "./src/settingsPage/filters/DiaposoneSection/DiaposoneValue.ts");
/* harmony import */ var _DiaposoneYear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiaposoneYear */ "./src/settingsPage/filters/DiaposoneSection/DiaposoneYear.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DiaposoneSection = /** @class */ (function (_super) {
    __extends(DiaposoneSection, _super);
    function DiaposoneSection(parentNode) {
        var _this = _super.call(this, parentNode, 'div', 'diaposoneSection') || this;
        _this.title = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'h5', 'diaposoneSection-title', 'фильтры по диапазону');
        var diaposoneValue = new _DiaposoneValue__WEBPACK_IMPORTED_MODULE_1__["default"](_this.node);
        diaposoneValue.onDiaposoneSectionSpanValue = function (data) {
            _this.diaposoneSectionSpanValue(data);
        };
        var diaposoneYear = new _DiaposoneYear__WEBPACK_IMPORTED_MODULE_2__["default"](_this.node);
        diaposoneYear.onDiaposoneSectionSpanValue = function (data) {
            _this.diaposoneSectionSpanValue(data);
        };
        return _this;
    }
    return DiaposoneSection;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/settingsPage/filters/DiaposoneSection/DiaposoeElement.ts":
/*!**********************************************************************!*\
  !*** ./src/settingsPage/filters/DiaposoneSection/DiaposoeElement.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _DiaposonRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiaposonRange */ "./src/settingsPage/filters/DiaposoneSection/DiaposonRange.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DiaposoneElement = /** @class */ (function (_super) {
    __extends(DiaposoneElement, _super);
    function DiaposoneElement(parentNode, data) {
        var _this = _super.call(this, parentNode) || this;
        var diaposoneTitle = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'h6', '', data.titleText);
        var diaposoneContainer = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', data.containerClass);
        var start = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](diaposoneContainer.node, 'span', data.startClass, '' + data.values[0]);
        var diaposoneRange = new _DiaposonRange__WEBPACK_IMPORTED_MODULE_1__.DiaposoneRange(diaposoneContainer.node, data.values);
        var limit = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](diaposoneContainer.node, 'span', data.limitClass, '' + data.values[1]);
        diaposoneRange.startSpanValue = function (value) {
            start.node.innerText = value;
            _this.onDiaposoneSectionSpanValue({
                name: data.valueName,
                direction: 'from',
                value: value
            });
        };
        diaposoneRange.finishSpanValue = function (value) {
            limit.node.innerText = value;
            _this.onDiaposoneSectionSpanValue({
                name: data.valueName,
                direction: 'to',
                value: value
            });
        };
        return _this;
    }
    return DiaposoneElement;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiaposoneElement);


/***/ }),

/***/ "./src/settingsPage/filters/DiaposoneSection/DiaposonRange.ts":
/*!********************************************************************!*\
  !*** ./src/settingsPage/filters/DiaposoneSection/DiaposonRange.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiaposoneRange": () => (/* binding */ DiaposoneRange)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _DiaposoneRange_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiaposoneRange.css */ "./src/settingsPage/filters/DiaposoneSection/DiaposoneRange.css");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DiaposoneRange = /** @class */ (function (_super) {
    __extends(DiaposoneRange, _super);
    function DiaposoneRange(parentNode, values) {
        var _this = _super.call(this, parentNode, 'div', 'inputWrapper') || this;
        _this.inputWidth = 150;
        _this.stepPercent = 100 / (values[1] - values[0]);
        //this.inputWrapper = new Control(parentNode, )
        _this.node.style.width = _this.inputWidth + "px";
        var underLayer = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'underLayer');
        var insideUnderLayer = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'insideDiv');
        _this.secondInputWrapper = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'secondInputWrapper');
        var inputSecond = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.secondInputWrapper.node, 'input', 'secondInput');
        _this.rangeAttributes(inputSecond.node, values[0], values[1], values[1]);
        _this.firstInputWrapper = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'firstInputWrapper');
        var inputFirst = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.firstInputWrapper.node, 'input', 'firstInput');
        _this.rangeAttributes(inputFirst.node, values[0], values[1], values[0]);
        _this.debounce = false;
        _this.secondThumb = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'secondThrumd');
        _this.secondThumb.node.style.left = _this.inputWidth - 20 + 'px';
        _this.secondThumb.node.onmouseover = function () {
            // if (!this.debounce) {
            _this.secondThumbToggle(true);
            _this.debounce = true;
            // }
        };
        _this.secondThumb.node.onmouseleave = function () {
            _this.secondThumbToggle(false);
            _this.debounce = true;
        };
        _this.secondInputWrapper.node.oninput = function (e) {
            _this.finishSpanValue(e.target.value);
            var rightMove = (values[1] - +e.target.value) * _this.stepPercent;
            _this.secondThumb.node.style.left = (_this.inputWidth - 20) - (_this.inputWidth - 20) * rightMove / 100 + "px";
            insideUnderLayer.node.style.right = _this.inputWidth * rightMove / 100 + "px";
        };
        _this.secondInputWrapper.node.onchange = function (e) {
            setTimeout(function () {
                _this.debounce = false;
            }, 300);
            _this.secondThumbToggle(false);
            // this.secondThumb.node.style.left = (this.inputWidth - 20) * (+(e.target as HTMLInputElement).value / 100) + "px";
            // (this.secondThumb.node as HTMLInputElement).value = (e.target as HTMLInputElement).value
            inputSecond.node.value = e.target.value;
        };
        _this.firstInputWrapper.node.oninput = function (e) {
            _this.startSpanValue(e.target.value);
            var leftMove = (_this.inputWidth - 20) * ((+e.target.value - values[0]) * _this.stepPercent) / 100 + 'px';
            insideUnderLayer.node.style.left = leftMove;
        };
        return _this;
    }
    DiaposoneRange.prototype.secondThumbToggle = function (toggle) {
        this.secondThumb.node.style.display = toggle ? 'none' : 'block';
        this.secondInputWrapper.node.style.zIndex = toggle ? '5' : '1';
        this.firstInputWrapper.node.style.zIndex = toggle ? '1' : '5';
    };
    DiaposoneRange.prototype.rangeAttributes = function (el, val1, val2, val3) {
        el.type = 'range';
        el.min = '' + val1;
        el.max = '' + val2;
        el.value = '' + val3;
    };
    return DiaposoneRange;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/settingsPage/filters/DiaposoneSection/DiaposoneValue.ts":
/*!*********************************************************************!*\
  !*** ./src/settingsPage/filters/DiaposoneSection/DiaposoneValue.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _DiaposoeElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiaposoeElement */ "./src/settingsPage/filters/DiaposoneSection/DiaposoeElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DiaposoneValue = /** @class */ (function (_super) {
    __extends(DiaposoneValue, _super);
    function DiaposoneValue(parentNode) {
        var _this = _super.call(this, parentNode, 'div', 'decorationCount') || this;
        var countData = {
            values: [1, 12],
            titleText: 'количество экземпляров',
            containerClass: 'diaposoneCountContainer',
            startClass: 'decorationCount-startValue',
            limitClass: 'decorationCount-limitValue',
            valueName: 'count'
        };
        var countDiaposone = new _DiaposoeElement__WEBPACK_IMPORTED_MODULE_1__["default"](_this.node, countData);
        countDiaposone.onDiaposoneSectionSpanValue = function (data) {
            _this.onDiaposoneSectionSpanValue(data);
        };
        return _this;
    }
    return DiaposoneValue;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiaposoneValue);


/***/ }),

/***/ "./src/settingsPage/filters/DiaposoneSection/DiaposoneYear.ts":
/*!********************************************************************!*\
  !*** ./src/settingsPage/filters/DiaposoneSection/DiaposoneYear.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _DiaposoeElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiaposoeElement */ "./src/settingsPage/filters/DiaposoneSection/DiaposoeElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DiaposoneYear = /** @class */ (function (_super) {
    __extends(DiaposoneYear, _super);
    function DiaposoneYear(parentNode) {
        var _this = _super.call(this, parentNode, 'div', 'decorationYear') || this;
        var yearData = {
            values: [1940, 2020],
            titleText: 'Год покупки',
            containerClass: 'diaposoneYearContainer',
            startClass: 'decorationYear-startValue',
            limitClass: 'decorationYear-limitValue',
            valueName: 'year',
        };
        var yearDiaposone = new _DiaposoeElement__WEBPACK_IMPORTED_MODULE_1__["default"](_this.node, yearData);
        yearDiaposone.onDiaposoneSectionSpanValue = function (data) {
            _this.onDiaposoneSectionSpanValue(data);
        };
        return _this;
    }
    return DiaposoneYear;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiaposoneYear);


/***/ }),

/***/ "./src/settingsPage/filters/FilterContainer.ts":
/*!*****************************************************!*\
  !*** ./src/settingsPage/filters/FilterContainer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterContainer": () => (/* binding */ FilterContainer)
/* harmony export */ });
/* harmony import */ var _FiltersContainer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FiltersContainer.css */ "./src/settingsPage/filters/FiltersContainer.css");
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _ValueSecton_ValueSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValueSecton/ValueSection */ "./src/settingsPage/filters/ValueSecton/ValueSection.ts");
/* harmony import */ var _DiaposoneSection_DianosoneSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DiaposoneSection/DianosoneSection */ "./src/settingsPage/filters/DiaposoneSection/DianosoneSection.ts");
/* harmony import */ var _SortSection_SortSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SortSection/SortSection */ "./src/settingsPage/filters/SortSection/SortSection.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var FilterContainer = /** @class */ (function (_super) {
    __extends(FilterContainer, _super);
    function FilterContainer(parentNode) {
        var _this = _super.call(this, parentNode, 'div', 'filtersContainer') || this;
        var valueSection = new _ValueSecton_ValueSection__WEBPACK_IMPORTED_MODULE_2__.ValueSection(_this.node);
        valueSection.onChooseColor = function (color) {
            _this.onChooseColor(color);
        };
        valueSection.onChooseShape = function (shape) {
            _this.onChooseShape(shape);
        };
        valueSection.onChooseSize = function (size) {
            _this.onChooseSize(size);
        };
        var byDaiposoneSection = new _DiaposoneSection_DianosoneSection__WEBPACK_IMPORTED_MODULE_3__.DiaposoneSection(_this.node);
        byDaiposoneSection.diaposoneSectionSpanValue = function (data) {
            _this.setDiaposoneData(data);
        };
        var bySortSection = new _SortSection_SortSection__WEBPACK_IMPORTED_MODULE_4__.SortSection(_this.node);
        bySortSection.sortOrder = function (order) {
            _this.setSortOrder(order);
        };
        return _this;
    }
    return FilterContainer;
}(_common_controll__WEBPACK_IMPORTED_MODULE_1__["default"]));



/***/ }),

/***/ "./src/settingsPage/filters/FiltersModel.ts":
/*!**************************************************!*\
  !*** ./src/settingsPage/filters/FiltersModel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersModel": () => (/* binding */ FiltersModel)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var FiltersModel = /** @class */ (function () {
    function FiltersModel(toysData) {
        var _this = this;
        this.toysData = toysData;
        this.currentToysData = JSON.parse(JSON.stringify(toysData));
        this.sortOrder = [];
        this.modifyFilters = false;
        this.filtersObj = {
            color: function () { return _this.filterValuesChecked('color'); },
            shape: function () { return _this.filterValuesChecked('shape'); },
            size: function () { return _this.filterValuesChecked('size'); }
        };
        this.diaposoneObj = {
            year: { from: 1940, to: 2020 },
            count: { from: 1, to: 12 }
        };
        this.filtersData = {
            shape: {
                шар: false,
                шишка: false,
                снежинка: false,
                фигурка: false,
                колокольчик: false
            },
            color: {
                красный: false,
                желтый: false,
                зелёный: false,
                белый: false,
                синий: false
            },
            size: {
                малый: false,
                средний: false, большой: false
            }
        };
        this.favorites = [];
    }
    FiltersModel.prototype.addFavorite = function (toy) {
        this.favorites.push(toy);
    };
    FiltersModel.prototype.filterValuesChecked = function (name) {
        var arr = [];
        Object.entries(this.filtersData[name]).forEach(function (v) {
            v[1] === true && arr.push(v[0]);
        });
        if (arr.length === 0) {
            Object.entries(this.filtersData[name]).forEach(function (v) { return arr.push(v[0]); });
        }
        return arr;
    };
    FiltersModel.prototype.setDiaposon = function (diaposonData) {
        var filterObject = this.diaposoneObj[diaposonData.name];
        //console.log('$$$',filterObject[diaposonData.direction as keyof IDiaposone])
        var oldData = filterObject[diaposonData.direction];
        filterObject[diaposonData.direction] = +diaposonData.value;
        console.log("OLDnew", oldData, '---', filterObject[diaposonData.direction]);
        //равны 
        if (oldData < filterObject[diaposonData.direction] || oldData === undefined) {
            if (diaposonData.direction === 'from') {
                this.extendFilters();
            }
            else {
                console.log("insideElse");
                this.extendFilters();
                // this.reduceFilters()
            }
        }
        else if (oldData > filterObject[diaposonData.direction]) {
            //console.log('insideELSE')  
            if (diaposonData.direction === 'from') {
                this.extendFilters();
                //console.log("OLDDD",oldData)
                // this.reduceFilters()
            }
            else {
                // console.log("OLDDD",oldData)
                this.reduceFilters();
                // this.extendFilters()
            }
        }
    };
    FiltersModel.prototype.checkFilters = function (toy) {
        var _this = this;
        if (!(+toy.year <= this.diaposoneObj.year.to
            && +toy.year >= this.diaposoneObj.year.from
            && +toy.count <= this.diaposoneObj.count.to
            && +toy.count >= this.diaposoneObj.count.from)) {
            return;
        }
        var results = [];
        Object.entries(this.filtersObj).forEach(function (filterSection) {
            results.push(_this.filtersObj[filterSection[0]]().some(function (filter) {
                if (toy[filterSection[0]] === filter) {
                    return true;
                }
            }));
        });
        return results.every(function (result) { return result === true; });
    };
    FiltersModel.prototype.createToysArray = function (arrayToCheck) {
        var _this = this;
        return Array.from(new Set(arrayToCheck.filter(function (e) {
            return _this.checkFilters(e);
        })));
    };
    FiltersModel.prototype.reduceFilters = function () {
        this.currentToysData = this.createToysArray(this.currentToysData);
        if (this.sortOrder) {
            this.currentToysData = this.useSort(this.currentToysData);
        }
        console.log(this.currentToysData);
        this.onRedrawToys(this.currentToysData);
    };
    FiltersModel.prototype.extendFilters = function () {
        var _this = this;
        console.log('extend', this.currentToysData);
        var newD = this.toysData.filter(function (e) {
            return _this.checkFilters(e);
        });
        this.currentToysData = __spreadArray([], newD, true);
        console.log(this.currentToysData);
        if (this.sortOrder) {
            this.currentToysData = this.useSort(this.currentToysData);
        }
        this.onRedrawToys(this.currentToysData);
    };
    FiltersModel.prototype.useSort = function (toys) {
        var _this = this;
        var sortedArray = toys.sort(function (a, b) {
            if (_this.sortOrder[0] === 'alphabet') {
                if (a.name > b.name) {
                    if (_this.sortOrder[1] === 'direct') {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }
                else {
                    if (_this.sortOrder[1] === 'direct') {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                }
            }
            else {
                if (+a.count > +b.count) {
                    (_this.sortOrder[1] === 'direct') ? 1 : -1;
                }
                else {
                    (_this.sortOrder[1] === 'direct') ? -1 : 1;
                }
            }
        });
        return sortedArray;
    };
    FiltersModel.prototype.setSortOrder = function (order) {
        this.sortOrder = order.split('-');
        this.currentToysData = this.useSort(this.currentToysData);
        this.onRedrawToys(this.currentToysData);
        //  this.getData()
    };
    FiltersModel.prototype.setOneFilter = function (filterName, value) {
        this.filtersData[filterName][value] = !this.filtersData[filterName][value];
        if (this.filtersObj[filterName]().length === 1) {
            this.reduceFilters();
        }
        else {
            this.extendFilters();
        }
    };
    FiltersModel.prototype.getFavorites = function () {
        //return this.favorites.length ? this.favorites : data.filter((e, i) => i < 20)
        return this.favorites.length && this.favorites;
    };
    return FiltersModel;
}());



/***/ }),

/***/ "./src/settingsPage/filters/SortSection/OptionElement.ts":
/*!***************************************************************!*\
  !*** ./src/settingsPage/filters/SortSection/OptionElement.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionElement": () => (/* binding */ OptionElement)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var OptionElement = /** @class */ (function (_super) {
    __extends(OptionElement, _super);
    function OptionElement(parentNode, title, value) {
        var _this = _super.call(this, parentNode) || this;
        _this.optionElement = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](parentNode, 'option', '', title);
        _this.optionElement.node.value = value;
        return _this;
    }
    return OptionElement;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/settingsPage/filters/SortSection/SortSection.ts":
/*!*************************************************************!*\
  !*** ./src/settingsPage/filters/SortSection/SortSection.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortSection": () => (/* binding */ SortSection)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _OptionElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionElement */ "./src/settingsPage/filters/SortSection/OptionElement.ts");
/* harmony import */ var _SortSection_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortSection.css */ "./src/settingsPage/filters/SortSection/SortSection.css");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SortSection = /** @class */ (function (_super) {
    __extends(SortSection, _super);
    function SortSection(parentNode) {
        var _this = _super.call(this, parentNode, 'div', 'sortSection') || this;
        _this.title = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'h5', 'sortSection-title', 'сортирока');
        _this.form = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'form', '');
        _this.select = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.form.node, 'select');
        _this.select.node.onchange = function (e) {
            console.log(_this.select.node.value);
            _this.sortOrder(_this.select.node.value);
        };
        _this.optionsValues = [
            {
                value: 'alphabet-direct',
                title: 'Сортировка от А до Я'
            },
            {
                value: 'alphabet-reverse',
                title: 'Сортировка от Я до А'
            },
            {
                value: 'count-direct',
                title: 'Сортировка по количеству(по возрастанию)'
            },
            {
                value: 'count-reverse',
                title: 'Сортировка по количеству(по убыванию)'
            }
        ];
        _this.optionsValues.forEach(function (_option) {
            var option = new _OptionElement__WEBPACK_IMPORTED_MODULE_1__.OptionElement(_this.select.node, _option.title, _option.value);
        });
        _this.cancelFilters = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.form.node, 'button', '', 'Сбросить фильтры');
        return _this;
    }
    return SortSection;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/settingsPage/filters/ValueSecton/ByColorFilter.ts":
/*!***************************************************************!*\
  !*** ./src/settingsPage/filters/ValueSecton/ByColorFilter.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByColorFilter": () => (/* binding */ ByColorFilter)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ByColorFilter = /** @class */ (function (_super) {
    __extends(ByColorFilter, _super);
    function ByColorFilter(parentNode) {
        var _this = _super.call(this, parentNode, 'div', 'byColor') || this;
        var colors = [
            { color: 'желтый', rgb: 'rgb(250,250,0)' },
            { color: 'белый', rgb: 'rgb(255,255,255)' },
            { color: 'красный', rgb: 'rgb(255,0,0)' },
            { color: 'синий', rgb: 'rgb(0,0,255)' },
            { color: 'зелёный', rgb: 'rgb(0,255,0)' }
        ];
        var byColorText = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'span', 'byColorText', 'По цвету: ');
        var colorCellsWrapper = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'colorCellsWrapper');
        colors.forEach(function (color) {
            var colorCell = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](colorCellsWrapper.node, 'div', 'colorCell');
            colorCell.node.style.background = color.rgb;
            colorCell.node.onclick = function () {
                colorCell.node.classList.toggle("colorCell-active");
                _this.onChooseColor(color.color);
            };
        });
        return _this;
    }
    return ByColorFilter;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/settingsPage/filters/ValueSecton/ByShapeFilter.ts":
/*!***************************************************************!*\
  !*** ./src/settingsPage/filters/ValueSecton/ByShapeFilter.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByShapeFilter": () => (/* binding */ ByShapeFilter)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ByShapeFilter = /** @class */ (function (_super) {
    __extends(ByShapeFilter, _super);
    function ByShapeFilter(parentNode) {
        var _this = _super.call(this, parentNode, 'div', 'byShape') || this;
        var shapes = [
            { shape: 'шар', src: './public/assets/svg/ball.svg' },
            { shape: 'колокольчик', src: './public/assets/svg/bell.svg' },
            { shape: 'шишка', src: './public/assets/svg/cone.svg' },
            { shape: 'снежинка', src: './public/assets/svg/snowflake.svg' },
            { shape: 'фигурка', src: './public/assets/svg/toy.svg' }
        ];
        var byShapeText = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'span', 'byFormText', 'По форме: ');
        var shapesWrapper = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'shapesWrapper');
        shapes.forEach(function (_shape) {
            var shape = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](shapesWrapper.node, 'div', 'shapeCell');
            shape.node.style.backgroundImage = "url(".concat(_shape.src, ")");
            shape.node.onclick = function () {
                shape.node.classList.toggle('shapeCell-active');
                _this.onChooseShape(_shape.shape);
            };
        });
        return _this;
    }
    return ByShapeFilter;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/settingsPage/filters/ValueSecton/BySizeFilter.ts":
/*!**************************************************************!*\
  !*** ./src/settingsPage/filters/ValueSecton/BySizeFilter.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BySizeFilter": () => (/* binding */ BySizeFilter)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BySizeFilter = /** @class */ (function (_super) {
    __extends(BySizeFilter, _super);
    function BySizeFilter(parentNode) {
        var _this = _super.call(this, parentNode, 'div', 'bySize') || this;
        var sizes = ['малый', 'средний', 'большой'];
        var bySizeText = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'span', 'bySizeText', 'По размеру: ');
        var sizesWrapper = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'sizesWrapper');
        sizes.forEach(function (_size, ind) {
            var size = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](sizesWrapper.node, 'div', 'sizeCell');
            size.node.style.backgroundImage = 'url(./public/assets/svg/ball.svg)';
            size.node.style.transform = "scale(".concat(ind === 1 ? 1.2 : ind === 2 ? 1.4 : 1, ")");
            size.node.onclick = function () {
                size.node.classList.toggle('shapeCell-active');
                _this.onChooseSize(_size);
            };
        });
        return _this;
    }
    return BySizeFilter;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/settingsPage/filters/ValueSecton/Favorite.ts":
/*!**********************************************************!*\
  !*** ./src/settingsPage/filters/ValueSecton/Favorite.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Favorite": () => (/* binding */ Favorite)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Favorite = /** @class */ (function (_super) {
    __extends(Favorite, _super);
    function Favorite(parentNode) {
        var _this = _super.call(this, parentNode, 'div') || this;
        var favorite = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'input');
        favorite.node.setAttribute('type', 'checkbox');
        favorite.node.id = 'favorite';
        var favoriteLabel = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'label');
        favoriteLabel.node.setAttribute('for', 'favorite');
        return _this;
    }
    return Favorite;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/settingsPage/filters/ValueSecton/ValueSection.ts":
/*!**************************************************************!*\
  !*** ./src/settingsPage/filters/ValueSecton/ValueSection.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueSection": () => (/* binding */ ValueSection)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _ValueSection_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValueSection.css */ "./src/settingsPage/filters/ValueSecton/ValueSection.css");
/* harmony import */ var _ByColorFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ByColorFilter */ "./src/settingsPage/filters/ValueSecton/ByColorFilter.ts");
/* harmony import */ var _ByShapeFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ByShapeFilter */ "./src/settingsPage/filters/ValueSecton/ByShapeFilter.ts");
/* harmony import */ var _BySizeFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BySizeFilter */ "./src/settingsPage/filters/ValueSecton/BySizeFilter.ts");
/* harmony import */ var _Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Favorite */ "./src/settingsPage/filters/ValueSecton/Favorite.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var ValueSection = /** @class */ (function (_super) {
    __extends(ValueSection, _super);
    function ValueSection(parentNode) {
        var _this = _super.call(this, parentNode, 'div', 'valueSection') || this;
        var title = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'h5', 'valueSection-title', 'фильтры по значению');
        var byShape = new _ByShapeFilter__WEBPACK_IMPORTED_MODULE_3__.ByShapeFilter(_this.node);
        byShape.onChooseShape = function (shape) { return _this.onChooseShape(shape); };
        var byColor = new _ByColorFilter__WEBPACK_IMPORTED_MODULE_2__.ByColorFilter(_this.node);
        byColor.onChooseColor = function (color) { return _this.onChooseColor(color); };
        var bySize = new _BySizeFilter__WEBPACK_IMPORTED_MODULE_4__.BySizeFilter(_this.node);
        bySize.onChooseSize = function (size) { return _this.onChooseSize(size); };
        var favorite = new _Favorite__WEBPACK_IMPORTED_MODULE_5__.Favorite(_this.node);
        return _this;
    }
    return ValueSection;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/startPage/StartPage.ts":
/*!************************************!*\
  !*** ./src/startPage/StartPage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPage": () => (/* binding */ StartPage)
/* harmony export */ });
/* harmony import */ var _common_controll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/controll */ "./src/common/controll.ts");
/* harmony import */ var _StartPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StartPage.css */ "./src/startPage/StartPage.css");
/* harmony import */ var _snowFlake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snowFlake */ "./src/startPage/snowFlake.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



//import { generateSnowFlake } from "../Tree/canvasSection/snowFlakes";
var StartPage = /** @class */ (function (_super) {
    __extends(StartPage, _super);
    function StartPage(parentNode) {
        var _this = _super.call(this, parentNode, 'div', 'startPage') || this;
        _this.canvas = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'canvas', 'startPageCanvas');
        _this.canvas.node.width = window.innerWidth;
        _this.canvas.node.height = window.innerHeight;
        _this.ctx = _this.canvas.node.getContext('2d');
        _this.backgoundImage = new Image();
        _this.backgoundImage.src = './public/assets/bgStartPage.jpg';
        _this.startPageContainer = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'div', 'startPageContainer');
        _this.startTitle = new StartButton(_this.startPageContainer.node, 'startTitle', 'Игра "Наряди елку"');
        _this.startButton = new StartButton(_this.startPageContainer.node, 'startButton', 'Начать игру');
        _this.startButton.node.onclick = function () {
            _this.changePage('tree');
            _this.destroy();
        };
        _this.snowArray = [];
        for (var i = 0; i < 100; i++) {
            _this.snowArray.push(new _snowFlake__WEBPACK_IMPORTED_MODULE_2__.SnowFlake(_this.canvas.node));
        }
        _this.snowFlakes = new Image();
        _this.snowFlakes.src = './public/assets/snowFlakes.png';
        setInterval(function () { return _this.handleSnowFlakes(_this.snowFlakes); }, 1000 / 50);
        return _this;
    }
    StartPage.prototype.handleSnowFlakes = function (flakes) {
        this.clear();
        this.ctx.drawImage(this.backgoundImage, 0, 0, this.canvas.node.width, this.canvas.node.height);
        for (var i = 0; i < this.snowArray.length; i++) {
            this.snowArray[i].update();
            this.snowArray[i].draw(flakes);
        }
    };
    StartPage.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.node.width, this.canvas.node.height);
    };
    return StartPage;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));

var StartButton = /** @class */ (function (_super) {
    __extends(StartButton, _super);
    function StartButton(parentNode, className, text) {
        var _this = _super.call(this, parentNode, 'div', className) || this;
        var textEl = new _common_controll__WEBPACK_IMPORTED_MODULE_0__["default"](_this.node, 'p', '', text);
        return _this;
    }
    return StartButton;
}(_common_controll__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ }),

/***/ "./src/startPage/snowFlake.ts":
/*!************************************!*\
  !*** ./src/startPage/snowFlake.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnowFlake": () => (/* binding */ SnowFlake)
/* harmony export */ });
var SnowFlake = /** @class */ (function () {
    function SnowFlake(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 60 + 20;
        this.speed = Math.random() * 0.5 + 0.2;
        this.frameX = Math.floor(Math.random() * 4);
        this.frameY = Math.floor(Math.random() * 4);
        this.frameSize = 250;
        this.angle = 0;
        this.spin = Math.random() > 0.5 ? 0.2 : -1;
        this.blur = Math.floor(Math.random() * 5);
    }
    SnowFlake.prototype.update = function () {
        this.y -= this.speed;
        if (this.y + this.size < 0)
            this.y = this.canvas.height + this.size;
        this.angle += this.spin;
    };
    SnowFlake.prototype.draw = function (flakes) {
        var ctx = this.canvas.getContext('2d');
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        //ctx.filter=`blur(2px)`
        ctx.drawImage(flakes, this.frameX * this.frameSize, this.frameY * this.frameSize, this.frameSize, this.frameSize, 0 - this.size / 2, 0 - this.size / 4, this.size, this.size);
        ctx.restore();
    };
    return SnowFlake;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var bgArray = ['./public/assets/bg/1.jpg', './public/assets/bg/2.jpg',
    './public/assets/bg/3.jpg', './public/assets/bg/4.jpg', './public/assets/bg/5.jpg',
    './public/assets/bg/6.jpg', './public/assets/bg/7.jpg', './public/assets/bg/8.jpg',
    './public/assets/bg/9.jpg', './public/assets/bg/10.jpg'];
var treesArray = ['./public/assets/tree/1.png', './public/assets/tree/2.png',
    './public/assets/tree/3.png', './public/assets/tree/4.png', './public/assets/tree/5.png',
    './public/assets/tree/6.png'];
var toysObj = function () {
    return new Promise(function (res, rej) {
        var fetchE = fetch('./public/assets/data.json');
        fetchE.then(function (w) {
            res(w.json());
        });
    });
};
function getAsyncImages(array) {
    return new Promise(function (res, rej) {
        var pr = function (adr) {
            return new Promise(function (res, rej) {
                var img = new Image();
                img.onload = function () {
                    return res(img);
                };
                img.src = adr;
            });
        };
        var prAll = function processArray() {
            return __awaiter(this, void 0, void 0, function () {
                var promises;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            promises = array.map(function (name) { return pr(name); });
                            return [4 /*yield*/, Promise.all(promises)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        var data = prAll();
        console.log(data);
        res(data);
    });
}
var promiseAllData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var prAr;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                prAr = [getAsyncImages(bgArray), getAsyncImages(treesArray), toysObj()];
                return [4 /*yield*/, Promise.all(prAr)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
promiseAllData().then(function (d) {
    var app = new _app__WEBPACK_IMPORTED_MODULE_0__.App(document.body, d);
});
//document.body.append(generateSnowFlake())
// document.body.append(canvasS)
// document.body.append(canvTree)
// const canvasMain= new CanvasMain()
// document.body.append(canvasMain.canvas)

})();

/******/ })()
;
//# sourceMappingURL=main.js.map