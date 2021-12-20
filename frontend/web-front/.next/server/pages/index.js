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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: favs , 1: setFav  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAPIData = async ()=>{\n        let instance;\n        instance = axios__WEBPACK_IMPORTED_MODULE_2___default().create({\n            baseURL: 'http://localhost:8080'\n        });\n        try {\n            const response = await instance.get('/api/');\n            console.log(response === null || response === void 0 ? void 0 : response.data);\n            const favdata = response === null || response === void 0 ? void 0 : response.data;\n            setFav(favdata);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"text-4xl text-green-700 text-center font-semibold\",\n        __source: {\n            fileName: \"/home/app/frontend/src/pages/index.tsx\",\n            lineNumber: 31,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: [\n            \"hello world\",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: getAPIData,\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                __source: {\n                    fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"click\"\n            }),\n            favs.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    },\n                    __self: undefined,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            },\n                            __self: undefined,\n                            children: item.title\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            },\n                            __self: undefined,\n                            children: item.body\n                        })\n                    ]\n                }, item.id)\n            )\n        ]\n    }));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDVjtBQUNYO0FBUWpDLGlFQUFnQixJQUFNLENBQUM7SUFDbkIsS0FBSyxNQUFFRyxJQUFJLE1BQUVDLE1BQU0sTUFBSUgsK0NBQVEsQ0FBUSxDQUFDLENBQUM7SUFFekMsS0FBSyxDQUFDSSxVQUFVLGFBQWUsQ0FBQztRQUM1QixHQUFHLENBQUNDLFFBQVE7UUFFWkEsUUFBUSxHQUFHSixtREFBWSxDQUFDLENBQUM7WUFDckJNLE9BQU8sRUFBRSxDQUF1QjtRQUNwQyxDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUM7WUFDRCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNILFFBQVEsQ0FBQ0ksR0FBRyxDQUFDLENBQU87WUFDM0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxRQUFRLENBQUVJLElBQUk7WUFDMUIsS0FBSyxDQUFDQyxPQUFPLEdBQUdMLFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLFFBQVEsQ0FBRUksSUFBSTtZQUM5QlQsTUFBTSxDQUFDVSxPQUFPO1FBQ2xCLENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxDQUFDO1lBQ2JKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxLQUFLO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSx1RUFDREMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBbUQ7Ozs7Ozs7O1lBQUMsQ0FFL0Q7aUZBQUNDLENBQU07Z0JBQUNDLE9BQU8sRUFBRWQsVUFBVTtnQkFBRVksU0FBUyxFQUFDLENBQXNFOzs7Ozs7OzBCQUFDLENBQUs7O1lBQ2xIZCxJQUFJLENBQUNpQixHQUFHLEVBQUVDLElBQUkseUVBQ1ZMLENBQUc7Ozs7Ozs7OzZGQUNDTSxDQUFFOzs7Ozs7O3NDQUFFRCxJQUFJLENBQUNFLEtBQUs7OzZGQUNkQyxDQUFDOzs7Ozs7O3NDQUFFSCxJQUFJLENBQUNJLElBQUk7OzttQkFGUEosSUFBSSxDQUFDSyxFQUFFOzs7O0FBT2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcblxudHlwZSBGYXYgPSB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHRpdGxlOiBTdHJpbmdcbiAgICBib2R5OiBTdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgICBjb25zdCBbZmF2cywgc2V0RmF2XSA9IHVzZVN0YXRlPEZhdltdPihbXSlcblxuICAgIGNvbnN0IGdldEFQSURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBpbnN0YW5jZTogQXhpb3NJbnN0YW5jZVxuXG4gICAgICAgIGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICAgICAgICB9KVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGluc3RhbmNlLmdldCgnL2FwaS8nKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGEpXG4gICAgICAgICAgICBjb25zdCBmYXZkYXRhID0gcmVzcG9uc2U/LmRhdGEgYXMgRmF2W11cbiAgICAgICAgICAgIHNldEZhdihmYXZkYXRhKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LWdyZWVuLTcwMCB0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICBoZWxsbyB3b3JsZFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRBUElEYXRhfSBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiPmNsaWNrPC9idXR0b24+XG4gICAgICAgICAgICB7ZmF2cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57aXRlbS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59KSBhcyBGQyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJmYXZzIiwic2V0RmF2IiwiZ2V0QVBJRGF0YSIsImluc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmYXZkYXRhIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaXRlbSIsImgxIiwidGl0bGUiLCJwIiwiYm9keSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
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