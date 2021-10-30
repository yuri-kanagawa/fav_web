"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: favs , 1: setFav  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAPIData = async ()=>{\n        let instance;\n        instance = axios__WEBPACK_IMPORTED_MODULE_2___default().create({\n            baseURL: 'http://localhost:8080'\n        });\n        try {\n            const response = await instance.get('/api/');\n            console.log(response === null || response === void 0 ? void 0 : response.data);\n            const favdata = response === null || response === void 0 ? void 0 : response.data;\n            setFav(favdata);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/app/frontend/src/pages/index.tsx\",\n            lineNumber: 30\n        },\n        __self: undefined,\n        children: [\n            \"hello world\",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: getAPIData,\n                __source: {\n                    fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                    lineNumber: 32\n                },\n                __self: undefined,\n                children: \"click\"\n            }),\n            favs.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                        lineNumber: 34\n                    },\n                    __self: undefined,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                                lineNumber: 35\n                            },\n                            __self: undefined,\n                            children: item.title\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                                lineNumber: 36\n                            },\n                            __self: undefined,\n                            children: item.body\n                        })\n                    ]\n                }, item.id)\n            )\n        ]\n    }));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ1Y7QUFRNUMsaUVBQWdCLElBQU0sQ0FBQztJQUNuQixLQUFLLE1BQUVHLElBQUksTUFBRUMsTUFBTSxNQUFJSCwrQ0FBUSxDQUFRLENBQUMsQ0FBQztJQUV6QyxLQUFLLENBQUNJLFVBQVUsYUFBZSxDQUFDO1FBQzVCLEdBQUcsQ0FBQ0MsUUFBUTtRQUVaQSxRQUFRLEdBQUdKLG1EQUFZLENBQUMsQ0FBQztZQUNyQk0sT0FBTyxFQUFFLENBQXVCO1FBQ3BDLENBQUM7UUFFRCxHQUFHLENBQUMsQ0FBQztZQUNELEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ0gsUUFBUSxDQUFDSSxHQUFHLENBQUMsQ0FBTztZQUMzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLFFBQVEsQ0FBRUksSUFBSTtZQUMxQixLQUFLLENBQUNDLE9BQU8sR0FBR0wsUUFBUSxhQUFSQSxRQUFRLEtBQVJBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsUUFBUSxDQUFFSSxJQUFJO1lBQzlCVCxNQUFNLENBQUNVLE9BQU87UUFDbEIsQ0FBQyxDQUFDLEtBQUssRUFBRUMsS0FBSyxFQUFFLENBQUM7WUFDYkosT0FBTyxDQUFDQyxHQUFHLENBQUNHLEtBQUs7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLHVFQUNEQyxDQUFHOzs7Ozs7O1lBQUMsQ0FFRDtpRkFBQ0MsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFYixVQUFVOzs7Ozs7MEJBQUUsQ0FBSzs7WUFDakNGLElBQUksQ0FBQ2dCLEdBQUcsRUFBRUMsSUFBSSx5RUFDVkosQ0FBRzs7Ozs7Ozs2RkFDQ0ssQ0FBRTs7Ozs7O3NDQUFFRCxJQUFJLENBQUNFLEtBQUs7OzZGQUNkQyxDQUFDOzs7Ozs7c0NBQUVILElBQUksQ0FBQ0ksSUFBSTs7O21CQUZQSixJQUFJLENBQUNLLEVBQUU7Ozs7QUFPakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcydcblxudHlwZSBGYXYgPSB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHRpdGxlOiBTdHJpbmdcbiAgICBib2R5OiBTdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgICBjb25zdCBbZmF2cywgc2V0RmF2XSA9IHVzZVN0YXRlPEZhdltdPihbXSlcblxuICAgIGNvbnN0IGdldEFQSURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBpbnN0YW5jZTogQXhpb3NJbnN0YW5jZVxuXG4gICAgICAgIGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICAgICAgICB9KVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGluc3RhbmNlLmdldCgnL2FwaS8nKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGEpXG4gICAgICAgICAgICBjb25zdCBmYXZkYXRhID0gcmVzcG9uc2U/LmRhdGEgYXMgRmF2W11cbiAgICAgICAgICAgIHNldEZhdihmYXZkYXRhKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIGhlbGxvIHdvcmxkXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldEFQSURhdGF9PmNsaWNrPC9idXR0b24+XG4gICAgICAgICAgICB7ZmF2cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57aXRlbS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59KSBhcyBGQyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJmYXZzIiwic2V0RmF2IiwiZ2V0QVBJRGF0YSIsImluc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmYXZkYXRhIiwiZXJyb3IiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaXRlbSIsImgxIiwidGl0bGUiLCJwIiwiYm9keSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();