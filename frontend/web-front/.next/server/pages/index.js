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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: favs , 1: setFav  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAPIData = async ()=>{\n        let instance;\n        instance = axios__WEBPACK_IMPORTED_MODULE_2___default().create({\n            baseURL: 'http://localhost:8080'\n        });\n        try {\n            const response = await instance.get('/api/');\n            console.log(response === null || response === void 0 ? void 0 : response.data);\n            const favdata = response === null || response === void 0 ? void 0 : response.data;\n            setFav(favdata);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"text-4xl text-green-700 text-center font-semibold\",\n        __source: {\n            fileName: \"/home/app/frontend/src/pages/index.tsx\",\n            lineNumber: 31\n        },\n        __self: undefined,\n        children: [\n            \"hello world\",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: getAPIData,\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                __source: {\n                    fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                    lineNumber: 33\n                },\n                __self: undefined,\n                children: \"click\"\n            }),\n            favs.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                        lineNumber: 35\n                    },\n                    __self: undefined,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                                lineNumber: 36\n                            },\n                            __self: undefined,\n                            children: item.title\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                                lineNumber: 37\n                            },\n                            __self: undefined,\n                            children: item.body\n                        })\n                    ]\n                }, item.id)\n            )\n        ]\n    }));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDVjtBQUNYO0FBUWpDLGlFQUFnQixJQUFNLENBQUM7SUFDbkIsS0FBSyxNQUFFRyxJQUFJLE1BQUVDLE1BQU0sTUFBSUgsK0NBQVEsQ0FBUSxDQUFDLENBQUM7SUFFekMsS0FBSyxDQUFDSSxVQUFVLGFBQWUsQ0FBQztRQUM1QixHQUFHLENBQUNDLFFBQVE7UUFFWkEsUUFBUSxHQUFHSixtREFBWSxDQUFDLENBQUM7WUFDckJNLE9BQU8sRUFBRSxDQUF1QjtRQUNwQyxDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUM7WUFDRCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNILFFBQVEsQ0FBQ0ksR0FBRyxDQUFDLENBQU87WUFDM0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxRQUFRLENBQUVJLElBQUk7WUFDMUIsS0FBSyxDQUFDQyxPQUFPLEdBQUdMLFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLFFBQVEsQ0FBRUksSUFBSTtZQUM5QlQsTUFBTSxDQUFDVSxPQUFPO1FBQ2xCLENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxDQUFDO1lBQ2JKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxLQUFLO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSx1RUFDREMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBbUQ7Ozs7Ozs7WUFBQyxDQUUvRDtpRkFBQ0MsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFZCxVQUFVO2dCQUFFWSxTQUFTLEVBQUMsQ0FBc0U7Ozs7OzswQkFBQyxDQUFLOztZQUNsSGQsSUFBSSxDQUFDaUIsR0FBRyxFQUFFQyxJQUFJLHlFQUNWTCxDQUFHOzs7Ozs7OzZGQUNDTSxDQUFFOzs7Ozs7c0NBQUVELElBQUksQ0FBQ0UsS0FBSzs7NkZBQ2RDLENBQUM7Ozs7OztzQ0FBRUgsSUFBSSxDQUFDSSxJQUFJOzs7bUJBRlBKLElBQUksQ0FBQ0ssRUFBRTs7OztBQU9qQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXG5cbnR5cGUgRmF2ID0ge1xuICAgIGlkOiBzdHJpbmdcbiAgICB0aXRsZTogU3RyaW5nXG4gICAgYm9keTogU3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gICAgY29uc3QgW2ZhdnMsIHNldEZhdl0gPSB1c2VTdGF0ZTxGYXZbXT4oW10pXG5cbiAgICBjb25zdCBnZXRBUElEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgaW5zdGFuY2U6IEF4aW9zSW5zdGFuY2VcblxuICAgICAgICBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgICAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICAgICAgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBpbnN0YW5jZS5nZXQoJy9hcGkvJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKVxuICAgICAgICAgICAgY29uc3QgZmF2ZGF0YSA9IHJlc3BvbnNlPy5kYXRhIGFzIEZhdltdXG4gICAgICAgICAgICBzZXRGYXYoZmF2ZGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1ncmVlbi03MDAgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgaGVsbG8gd29ybGRcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0QVBJRGF0YX0gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIj5jbGljazwvYnV0dG9uPlxuICAgICAgICAgICAge2ZhdnMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICA8aDE+e2l0ZW0udGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uYm9keX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSkgYXMgRkMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiZmF2cyIsInNldEZhdiIsImdldEFQSURhdGEiLCJpbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJyZXNwb25zZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZmF2ZGF0YSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJoMSIsInRpdGxlIiwicCIsImJvZHkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

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