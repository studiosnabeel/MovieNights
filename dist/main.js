'use strict';
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self['webpackChunkgroupcapstone'] =
  self['webpackChunkgroupcapstone'] || []).push([
  ['main'],
  {
    /***/ './node_modules/css-loader/dist/cjs.js!./src/style.css':
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        // eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Assets/BG.jpg */ \"./src/Assets/BG.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Assets/logo.jpg */ \"./src/Assets/logo.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  color: white;\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n/* CSS for header and footer */\\r\\n\\r\\n.header {\\r\\n  margin-bottom: 90px;\\r\\n}\\r\\n\\r\\n.nav-bar {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  z-index: 100;\\r\\n  padding: 10px 60px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  background-color: rgba(147, 147, 147, 0.1);\\r\\n  backdrop-filter: blur(8px);\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-size: contain;\\r\\n  background-repeat: no-repeat;\\r\\n  opacity: 0.9;\\r\\n  height: 50px;\\r\\n  width: 100px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 16px;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.list-items a {\\r\\n  text-decoration: none;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  padding: 10px 20px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  letter-spacing: 5px;\\r\\n}\\r\\n\\r\\n/* CSS for find section */\\r\\n\\r\\n.find {\\r\\n  flex-wrap: wrap;\\r\\n  padding: 40px 40px;\\r\\n  display: flex;\\r\\n  gap: 12px;\\r\\n  justify-content: flex-end;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#showMovies {\\r\\n  background-color: #460700;\\r\\n  color: white;\\r\\n  height: 36px;\\r\\n  border-radius: 10px;\\r\\n  font-weight: 700;\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n/* CSS show movies section */\\r\\n\\r\\n.movie-list {\\r\\n  display: grid;\\r\\n  grid-template-columns: 25% 25% 25%;\\r\\n  justify-content: center;\\r\\n  column-gap: 60px;\\r\\n  row-gap: 20px;\\r\\n  margin-block: 5%;\\r\\n  padding-top: 0;\\r\\n}\\r\\n\\r\\n.name-icon {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.movie-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: space-evenly;\\r\\n  background-color: rgb(70, 7, 0, 0.1);\\r\\n  backdrop-filter: blur(8px);\\r\\n  color: white;\\r\\n  padding: 10px;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 50px 4px 4px 4px;\\r\\n}\\r\\n\\r\\n.commentBtn {\\r\\n  background-color: #460700;\\r\\n  color: white;\\r\\n  height: 40px;\\r\\n  border-radius: 10px;\\r\\n  font-weight: 400;\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.bi-heart:hover {\\r\\n  color: #ff5757;\\r\\n}\\r\\n\\r\\n.bi-heart:active {\\r\\n  color: #ff0;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  align-self: flex-end;\\r\\n  padding-right: 4%;\\r\\n  margin-block: 0;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n/* popup section */\\r\\n\\r\\n.show {\\r\\n  height: 85%;\\r\\n  width: 80vw;\\r\\n  background-color: rgb(10 10 10 / 50%);\\r\\n  backdrop-filter: blur(20px);\\r\\n  position: fixed;\\r\\n  top: 5vw;\\r\\n  left: 10vw;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  z-index: 1000;\\r\\n  border-radius: 10px;\\r\\n  overflow-y: scroll;\\r\\n  color: antiquewhite;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.popup-window {\\r\\n  background-color: rgb(120 33 33 / 50%);\\r\\n  backdrop-filter: blur(20px);\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  z-index: 100;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.movie-title {\\r\\n  font-size: 30px;\\r\\n  font-weight: 900;\\r\\n  text-align: center;\\r\\n  display: inline;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  font-size: 30px;\\r\\n  font-weight: 900;\\r\\n  padding: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popContentLoad {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.popContentLoad img {\\r\\n  max-width: 50%;\\r\\n  max-height: 30%;\\r\\n  object-fit: cover;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.popContentLoad a {\\r\\n  text-decoration: none;\\r\\n  color: white;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.popContentLoad a:hover {\\r\\n  color: rgb(177, 13, 13);\\r\\n}\\r\\n\\r\\n.movie-details {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n  gap: 20px;\\r\\n  padding: 20px;\\r\\n  align-content: space-between;\\r\\n}\\r\\n\\r\\n/* comment section in the popup window */\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  font-size: 25px;\\r\\n  font-weight: 900;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  border-radius: 10px;\\r\\n  border: none;\\r\\n  padding: 10px;\\r\\n  font-size: 20px;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.submit-comment {\\r\\n  border-radius: 10px;\\r\\n  border: none;\\r\\n  padding: 10px;\\r\\n  font-size: 20px;\\r\\n  background-color: rgb(104, 12, 12);\\r\\n  color: white;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.commentContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n  margin: 10px;\\r\\n  border: 1px solid white;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.commentItem {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.submit-comment:hover {\\r\\n  background-color: rgba(58, 49, 49, 0.8);\\r\\n}\\r\\n\\r\\n/* breakpoint 980px css media */\\r\\n\\r\\n@media (max-width: 980px) {\\r\\n  .movie-list {\\r\\n    grid-template-columns: 40% 40%;\\r\\n\\r\\n    /* margin-top: 20%; */\\r\\n  }\\r\\n\\r\\n  .name-icon {\\r\\n    justify-content: space-around;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* @media breakpoint 670px css */\\r\\n\\r\\n@media (max-width: 670px) {\\r\\n  .movie-list {\\r\\n    grid-template-columns: 80%;\\r\\n\\r\\n    /* margin-top: 30%; */\\r\\n  }\\r\\n\\r\\n  .name-icon {\\r\\n    justify-content: space-around;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* breakpoint 530px css */\\r\\n\\r\\n@media (max-width: 530px) {\\r\\n  .logo {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .list {\\r\\n    justify-content: center;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* breakpoint 415px css */\\r\\n\\r\\n@media (max-width: 415px) {\\r\\n  .find {\\r\\n    margin-top: 150px;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* breakpoint 300px css */\\r\\n\\r\\n@media (max-width: 300px) {\\r\\n  .find {\\r\\n    margin-top: 130px;\\r\\n  }\\r\\n\\r\\n  .movie-img {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://groupcapstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");
        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://groupcapstone/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/getUrl.js':
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^[\'"].*[\'"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/["\'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return "\\"".concat(url.replace(/"/g, \'\\\\"\').replace(/\\n/g, "\\\\n"), "\\"");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://groupcapstone/./node_modules/css-loader/dist/runtime/getUrl.js?'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://groupcapstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?'
        );

        /***/
      },

    /***/ './src/style.css':
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://groupcapstone/./src/style.css?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://groupcapstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://groupcapstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://groupcapstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://groupcapstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://groupcapstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://groupcapstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?'
        );

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_fetchMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/fetchMovies.js */ \"./src/module/fetchMovies.js\");\n/* harmony import */ var _module_countMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/countMovies.js */ \"./src/module/countMovies.js\");\n\n\n\n\nconst movieList = document.getElementById('movie-list');\n(0,_module_fetchMovies_js__WEBPACK_IMPORTED_MODULE_1__.showMovies)(movieList, _module_fetchMovies_js__WEBPACK_IMPORTED_MODULE_1__.fetchMovies);\n\nconst movieCount = document.getElementById('movie-counter');\n(0,_module_fetchMovies_js__WEBPACK_IMPORTED_MODULE_1__.fetchMovies)().then((data) => {\n  (0,_module_countMovies_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data, movieCount);\n});\n\nconst startIndex = document.getElementById('indexStart');\nconst endIndex = document.getElementById('indexEnd');\nconst showBtn = document.getElementById('showMovies');\nconst errorMsg = document.getElementById('error');\n\nshowBtn.onclick = () => {\n  const start = startIndex.value;\n  const end = endIndex.value;\n  if (start !== '' && end !== '') {\n    if (+start >= +end) {\n      errorMsg.innerHTML = 'Invalid input';\n    }\n    (0,_module_fetchMovies_js__WEBPACK_IMPORTED_MODULE_1__.showMovies)(movieList, () => (0,_module_fetchMovies_js__WEBPACK_IMPORTED_MODULE_1__.fetchMovies)(start, end));\n    (0,_module_fetchMovies_js__WEBPACK_IMPORTED_MODULE_1__.fetchMovies)(start, end).then((data) => {\n      (0,_module_countMovies_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data, movieCount);\n    });\n  }\n};\n\nstartIndex.onfocus = () => {\n  errorMsg.innerHTML = '';\n};\n\nendIndex.onfocus = () => {\n  errorMsg.innerHTML = '';\n};\n\n\n//# sourceURL=webpack://groupcapstone/./src/index.js?"
        );

        /***/
      },

    /***/ './src/module/addingComments.js':
      /*!**************************************!*\
  !*** ./src/module/addingComments.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addComment = async (Obj) => {\n  const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${\"mbem949vx6YF4PaN9CFw\"}/comments/`;\n  const data = await fetch(commentUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(Obj),\n  });\n  const response = await data.text;\n  return response;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://groupcapstone/./src/module/addingComments.js?"
        );

        /***/
      },

    /***/ './src/module/commentCounters.js':
      /*!***************************************!*\
  !*** ./src/module/commentCounters.js ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = () => {\n  let noOfComments = 0;\n  const commentList = document.querySelector(\'.commentContainer\');\n  noOfComments = commentList.childElementCount;\n  return noOfComments;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n\n//# sourceURL=webpack://groupcapstone/./src/module/commentCounters.js?'
        );

        /***/
      },

    /***/ './src/module/countMovies.js':
      /*!***********************************!*\
  !*** ./src/module/countMovies.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countMovie = (arr, element) => {\n  element.innerHTML = `Movies(${arr.length})`;\n  return element.innerHTML;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countMovie);\n\n\n//# sourceURL=webpack://groupcapstone/./src/module/countMovies.js?'
        );

        /***/
      },

    /***/ './src/module/fetchMovies.js':
      /*!***********************************!*\
  !*** ./src/module/fetchMovies.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchMovies\": () => (/* binding */ fetchMovies),\n/* harmony export */   \"showMovies\": () => (/* binding */ showMovies)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/module/popup.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ \"./src/module/likes.js\");\n\n\n\nconst url = 'https://api.tvmaze.com/shows';\nconst urlLike = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${\"mbem949vx6YF4PaN9CFw\"}/likes/`;\n\nconst popContentLoad = document.querySelector('.popContentLoad');\n\nconst fetchMovies = async (start = 0, end = 12) => {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    if (+start < +end) {\n      const newData = data.slice(start, end);\n      return newData;\n    }\n    if (+start >= +end) {\n      const newData = data.slice(0, 12);\n      return newData;\n    }\n    return '';\n  } catch (e) {\n    return e.message;\n  }\n};\n\nconst getLikes = async () => {\n  try {\n    const response = await fetch(urlLike);\n    const data = await response.json();\n    return data;\n  } catch (e) {\n    return e.message;\n  }\n};\n\nconst showMovies = (movieList, fetchMovies) => {\n  movieList.replaceChildren();\n  fetchMovies().then((res) => {\n    res.map((movie) => {\n      const movieCard = document.createElement('div');\n      movieCard.className = 'movie-card';\n      movieCard.id = movie.id;\n\n      const movieImage = document.createElement('img');\n      movieImage.className = 'movie-img';\n      movieImage.src = movie.image.medium;\n      movieCard.appendChild(movieImage);\n\n      const movieDescription = document.createElement('div');\n      movieDescription.className = 'movie-description';\n\n      const nameIcon = document.createElement('div');\n      nameIcon.className = 'name-icon';\n      const movieName = document.createElement('h3');\n\n      movieName.innerHTML = movie.name;\n      nameIcon.appendChild(movieName);\n\n      const icon = document.createElement('div');\n      icon.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-heart\" viewBox=\"0 0 16 16\">\n  <path d=\"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"/>\n</svg>`;\n      nameIcon.appendChild(icon);\n      movieDescription.appendChild(nameIcon);\n\n      const likes = document.createElement('p');\n      likes.className = 'likes';\n      likes.innerHTML = '0 likes';\n      getLikes().then((data) => {\n        data.filter((item) => {\n          if (item.item_id === `item${movie.id}`) {\n            likes.innerHTML = `${item.likes} likes`;\n          }\n          return '';\n        });\n      });\n      movieDescription.appendChild(likes);\n      icon.onclick = (e) => {\n        const { id } = e.target.parentElement.parentElement.parentElement.parentElement;\n        (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.addLike)(id, likes);\n      };\n      icon.style.cursor = 'pointer';\n      const genreLang = document.createElement('div');\n      genreLang.className = 'genre-lang';\n      const genre = document.createElement('p');\n      const list = movie.genres.toString();\n      genre.innerHTML = `Genre: ${list}`;\n      genreLang.appendChild(genre);\n      const lang = document.createElement('p');\n      lang.innerHTML = `Language: ${movie.language}`;\n      genreLang.appendChild(lang);\n      movieDescription.appendChild(genreLang);\n      movieCard.appendChild(movieDescription);\n      const commentBtn = document.createElement('button');\n      commentBtn.className = 'commentBtn';\n\n      commentBtn.innerHTML = 'Comments';\n      commentBtn.onclick = () => {\n        popContentLoad.innerHTML = '';\n        (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(movie.id);\n      };\n\n      movieCard.appendChild(commentBtn);\n      movieList.appendChild(movieCard);\n      return '';\n    });\n  });\n};\n\n\n//# sourceURL=webpack://groupcapstone/./src/module/fetchMovies.js?"
        );

        /***/
      },

    /***/ './src/module/likes.js':
      /*!*****************************!*\
  !*** ./src/module/likes.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\nconst urlLike = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${\"mbem949vx6YF4PaN9CFw\"}/likes/`;\n\nconst updateLikes = async (id, likes) => {\n  try {\n    const response = await fetch(urlLike);\n    const data = await response.json();\n    data.filter((item) => {\n      if (item.item_id === `item${id}`) {\n        likes.innerHTML = `${item.likes} likes`;\n      } else {\n        return '';\n      }\n      return '';\n    });\n  } catch (e) {\n    return e.message;\n  }\n  return '';\n};\n\nconst addLike = async (id, likes) => {\n  try {\n    await fetch(urlLike, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: `item${id}`,\n      }),\n      headers: {\n        'Content-Type': 'application/json; charset=UTF-8',\n      },\n    });\n    updateLikes(id, likes);\n  } catch (e) {\n    return e.message;\n  }\n  return '';\n};\n\n\n//# sourceURL=webpack://groupcapstone/./src/module/likes.js?"
        );

        /***/
      },

    /***/ './src/module/popup.js':
      /*!*****************************!*\
  !*** ./src/module/popup.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addingComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addingComments.js */ \"./src/module/addingComments.js\");\n/* harmony import */ var _commentCounters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounters.js */ \"./src/module/commentCounters.js\");\n\n\n\nconst popUp = document.querySelector('.popUpContent');\nconst popContentLoad = document.querySelector('.popContentLoad');\nconst background = document.querySelector('#popup-window');\nconst form = document.querySelector('.newComment');\nlet noOfComments = 0;\nconst submit = document.querySelector('.submit-comment');\n\nconst fetchData = async (url) => {\n  const response = await fetch(url);\n  const data = await response.json();\n  return data;\n};\n\nconst openPopup = (id) => {\n  popUp.classList.remove('hide');\n  popUp.classList.add('show');\n  background.classList.remove('hide');\n  const geturl = `https://api.tvmaze.com/shows/${id}`;\n  fetchData(geturl).then((res) => {\n    const movieTitle = document.createElement('h2');\n    movieTitle.classList.add('movie-title');\n    movieTitle.innerHTML = res.name;\n    const movieImage = document.createElement('img');\n    movieImage.classList.add('movieImage');\n    movieImage.src = res.image.original;\n    const movieDescription = document.createElement('p');\n    movieDescription.innerHTML = res.summary;\n    const movieDetails = document.createElement('div');\n    movieDetails.classList.add('movie-details');\n    const movieGenres = document.createElement('p');\n    movieGenres.innerHTML = `Genres: ${res.genres}`;\n    const movieRating = document.createElement('p');\n    movieRating.innerHTML = `Rating: ${res.rating.average}`;\n    const movieRuntime = document.createElement('p');\n    movieRuntime.innerHTML = `Runtime: ${res.runtime}`;\n    const movieLanguage = document.createElement('p');\n    movieLanguage.innerHTML = `Language: ${res.language}`;\n    const premiere = document.createElement('p');\n    premiere.innerHTML = `Premiere start on: ${res.premiered}`;\n    const movieStatus = document.createElement('p');\n    movieStatus.innerHTML = `Status: ${res.status}`;\n    const movieURL = document.createElement('a');\n    movieURL.className = 'movieURL';\n    movieURL.href = res.url;\n    movieURL.innerHTML = 'Click here to see more details';\n    movieDetails.appendChild(movieGenres);\n    movieDetails.appendChild(movieRating);\n    movieDetails.appendChild(movieRuntime);\n    movieDetails.appendChild(movieLanguage);\n    movieDetails.appendChild(premiere);\n    movieDetails.appendChild(movieStatus);\n    popContentLoad.appendChild(movieTitle);\n    popContentLoad.appendChild(movieImage);\n    popContentLoad.appendChild(movieDescription);\n    popContentLoad.appendChild(movieDetails);\n    popContentLoad.appendChild(movieURL);\n\n    submit.addEventListener('click', (e) => {\n      e.preventDefault();\n      const user = document.querySelector('#name').value;\n      const comment = document.querySelector('#comment').value;\n      if (user && comment) {\n        const commentObj = {\n          item_id: id,\n          username: user,\n          comment,\n        };\n\n        (0,_addingComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(commentObj).then((res) => {\n          if (res) {\n            const commentCount = document.querySelector('#commentCount');\n            const commentList = document.querySelector('.commentContainer');\n            const commentItem = document.createElement('div');\n            commentItem.classList.add('commentItem');\n            const commentTime = document.createElement('p');\n            commentTime.classList.add('commentTime');\n            commentTime.innerText = new Date();\n            const commentUser = document.createElement('p');\n            commentUser.classList.add('commentUser');\n            commentUser.innerHTML = `${user} : `;\n            const commentText = document.createElement('p');\n            commentText.classList.add('commentText');\n            commentText.innerHTML = comment;\n            commentItem.appendChild(commentTime);\n            commentItem.appendChild(commentUser);\n            commentItem.appendChild(commentText);\n            commentList.appendChild(commentItem);\n            noOfComments += 1;\n            commentCount.innerHTML = `Comments (${noOfComments})`;\n          }\n        });\n        form.reset();\n      }\n    });\n    const fetchComments = async () => {\n      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${\"mbem949vx6YF4PaN9CFw\"}/comments/?item_id=${id}`;\n      const response = await fetch(url);\n      const data = await response.json();\n      return data;\n    };\n    fetchComments().then((res) => {\n      const commentList = document.querySelector('.commentContainer');\n      commentList.innerHTML = '';\n      res.forEach((comment) => {\n        const commentItem = document.createElement('div');\n        commentItem.classList.add('commentItem');\n        const commentTime = document.createElement('p');\n        commentTime.classList.add('commentTime');\n        commentTime.innerText = `(${comment.creation_date}) `;\n        const commentUser = document.createElement('p');\n        commentUser.classList.add('commentUser');\n        commentUser.innerHTML = `${comment.username} : `;\n        const commentText = document.createElement('p');\n        commentText.classList.add('commentText');\n        commentText.innerHTML = comment.comment;\n        commentItem.appendChild(commentTime);\n        commentItem.appendChild(commentUser);\n        commentItem.appendChild(commentText);\n        commentList.appendChild(commentItem);\n      });\n      const commentCount = document.querySelector('#commentCount');\n      noOfComments = (0,_commentCounters_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      commentCount.innerHTML = `Comments (${noOfComments})`;\n    });\n  });\n};\n\nconst closeBtn = document.querySelector('.close-btn');\ncloseBtn.addEventListener('click', () => {\n  popUp.classList.remove('show');\n  popUp.classList.add('hide');\n  background.classList.add('hide');\n  popContentLoad.innerHTML = '';\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openPopup);\n\n\n//# sourceURL=webpack://groupcapstone/./src/module/popup.js?"
        );

        /***/
      },

    /***/ './src/Assets/BG.jpg':
      /*!***************************!*\
  !*** ./src/Assets/BG.jpg ***!
  \***************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "6a528ef4d3f7050c0e3c.jpg";\n\n//# sourceURL=webpack://groupcapstone/./src/Assets/BG.jpg?'
        );

        /***/
      },

    /***/ './src/Assets/logo.jpg':
      /*!*****************************!*\
  !*** ./src/Assets/logo.jpg ***!
  \*****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "08b5501a2455dcee0772.jpg";\n\n//# sourceURL=webpack://groupcapstone/./src/Assets/logo.jpg?'
        );

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__('./src/index.js');
    /******/
  },
]);
