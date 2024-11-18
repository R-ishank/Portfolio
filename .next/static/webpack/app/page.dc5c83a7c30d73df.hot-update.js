"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Projects.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/Projects.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst projects = [\n    {\n        title: \"TOIFA - Times Of India Film Fare Awards\",\n        image: \"/toifa.png\",\n        url: \"https://toifa.in/\",\n        description: \"TOIFA (Times of India Film Awards) is a revamped version of the classic Filmfare Awards, built using Next.js on a serverless architecture, offering improved performance and modern, scalable infrastructure.\",\n        technologies1: \" Next.js\",\n        technologies2: \"Serverless\",\n        technologies3: \"DynamoDB\"\n    },\n    {\n        title: \"BombayTimes\",\n        image: \"/bombaytimes.png\",\n        url: \"https://www.bombaytimes.com/\",\n        description: \"A React-based frontend to Keep yourself updated with the latest news, videos, photos about the entertainment industry, celebrity, lifestyle, travel, events and a lot more.\",\n        technologies1: \" Next.js\",\n        technologies2: \"Serverless\",\n        technologies3: \"MySQL\"\n    },\n    {\n        title: \"ECoupon\",\n        image: \"/Ecoupon.png\",\n        url: \"https://mytoiconnect.com/login/\",\n        description: \"A featured e-delivery tracking platform built with .NET and consumed RFC's of SAP and SQL Database to mentain the Transaction records between the Customer, Vendor and Dealer.\",\n        technologies1: \".NET \",\n        technologies2: \"SAP\",\n        technologies3: \"SQL(procedures)\"\n    },\n    {\n        title: \"Times Subscription\",\n        image: \"/subscribe.png\",\n        url: \"https://subscribe.timesgroup.com/v2/\",\n        description: \"A comprehensive dashboard for the Times Of India Newspaper subscription. TOI+ Offer Ends Soon: Upto 35% Read the latest news and exclusive stories with TOI Digital Newspaper & TOI+ subscription\",\n        technologies1: \" Next.js\",\n        technologies2: \"Serverless\",\n        technologies3: \"MySQL\"\n    },\n    {\n        title: \"Times Content\",\n        image: \"/timescontent.png\",\n        url: \"https://timeshighriseawards.com/index.html\",\n        description: \"A React.js application to Browse & Buy photos, images, cartoons, graphics, articles, microfilm, Audio & Video content; from India's largest media group The Times Group.\",\n        technologies1: \" React.js\",\n        technologies2: \"Serverless\",\n        technologies3: \"MySQL\"\n    },\n    {\n        title: \"Times High Rise\",\n        image: \"/highrise.png\",\n        url: \"https://timeshighriseawards.com/index.html\",\n        description: \"A complex application for Nominating your residential complex for the prestigious Times High Rise Awards. This esteemed award celebrates excellence, honouring complexes that excel across various parameters and set newbenchmarks in quality living..\",\n        technologies1: \" Next.js\",\n        technologies2: \"Serverless\",\n        technologies3: \"DynamoDB\"\n    },\n    {\n        title: \"Times Food and NightLife Awards\",\n        image: \"/timesfood.png\",\n        url: \"https://timesfoodawards.com/\",\n        description: \"Next.js application which showcases the Times Food & Nightlife Awards celebrates the best in F&B and honours those making a difference in the world of hospitality through their innovation and ...\",\n        technologies1: \" Next.js\",\n        technologies2: \"Serverless\",\n        technologies3: \"MySQL & DynamoDB\"\n    }\n];\nfunction ProjectDiverter(url) {\n    // Use a production-friendly redirect that handles both relative and absolute URLs\n    if (url && \"object\" !== \"undefined\") {\n        window.location.href = url;\n    }\n}\n_c = ProjectDiverter;\nfunction Projects() {\n    // const handleProjectClick = (url: string) => {\n    //   ProjectDiverter(url);\n    // };\n    const handleProjectClick = (url)=>{\n        window.open(url, \"_blank\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.section, {\n        initial: {\n            opacity: 0,\n            y: 20\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.5,\n            delay: 0.4\n        },\n        className: \"bg-gray-800 rounded-lg p-8 shadow-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-6\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/rishanktiwari/Desktop/NEW/Projects/rish-portf/forGIT/Portfolio/src/app/components/Projects.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\",\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        className: \"bg-gray-700 rounded-lg overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: project.image,\n                                alt: project.title,\n                                onClick: ()=>handleProjectClick(project.url),\n                                className: \"w-full h-40 \"\n                            }, void 0, false, {\n                                fileName: \"/Users/rishanktiwari/Desktop/NEW/Projects/rish-portf/forGIT/Portfolio/src/app/components/Projects.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl font-semibold mb-2\",\n                                        children: project.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rishanktiwari/Desktop/NEW/Projects/rish-portf/forGIT/Portfolio/src/app/components/Projects.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-400\",\n                                        children: project.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rishanktiwari/Desktop/NEW/Projects/rish-portf/forGIT/Portfolio/src/app/components/Projects.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rishanktiwari/Desktop/NEW/Projects/rish-portf/forGIT/Portfolio/src/app/components/Projects.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-2 flex justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-grey-500\",\n                                        children: project.technologies1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rishanktiwari/Desktop/NEW/Projects/rish-portf/forGIT/Portfolio/src/app/components/Projects.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mx-1\",\n                                        children: \"/\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rishanktiwari/Desktop/NEW/Projects/rish-portf/forGIT/Portfolio/src/app/components/Projects.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-grey-500\",\n                                        children: project.technologies2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rishanktiwari/Desktop/NEW/Projects/rish-portf/forGIT/Portfolio/src/app/components/Projects.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rishanktiwari/Desktop/NEW/Projects/rish-portf/forGIT/Portfolio/src/app/components/Projects.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/rishanktiwari/Desktop/NEW/Projects/rish-portf/forGIT/Portfolio/src/app/components/Projects.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/rishanktiwari/Desktop/NEW/Projects/rish-portf/forGIT/Portfolio/src/app/components/Projects.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rishanktiwari/Desktop/NEW/Projects/rish-portf/forGIT/Portfolio/src/app/components/Projects.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Projects;\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectDiverter\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUV1QztBQUN2QyxNQUFNQyxXQUFXO0lBRWY7UUFDRUMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsYUFDRTtRQUNGQyxlQUFjO1FBQ2RDLGVBQWM7UUFDZEMsZUFBYztJQUNoQjtJQUNBO1FBQ0VOLE9BQU87UUFDUEMsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLGFBQ0U7UUFDQUMsZUFBYztRQUNkQyxlQUFjO1FBQ2RDLGVBQWM7SUFDbEI7SUFDQTtRQUNFTixPQUFPO1FBQ1BDLE9BQU87UUFDUEMsS0FBSztRQUNMQyxhQUNFO1FBQ0FDLGVBQWM7UUFDZEMsZUFBYztRQUNkQyxlQUFjO0lBQ2xCO0lBQ0E7UUFDRU4sT0FBTztRQUNQQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsYUFDRTtRQUNBQyxlQUFjO1FBQ2RDLGVBQWM7UUFDZEMsZUFBYztJQUNsQjtJQUVBO1FBQ0VOLE9BQU87UUFDUEMsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLGFBQ0U7UUFDQUMsZUFBYztRQUNkQyxlQUFjO1FBQ2RDLGVBQWM7SUFDbEI7SUFDQTtRQUNFTixPQUFPO1FBQ1BDLE9BQU87UUFDUEMsS0FBSztRQUNMQyxhQUNFO1FBQ0FDLGVBQWM7UUFDZEMsZUFBYztRQUNkQyxlQUFjO0lBQ2xCO0lBQ0E7UUFDRU4sT0FBTztRQUNQQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsYUFBYTtRQUNiQyxlQUFjO1FBQ2RDLGVBQWM7UUFDZEMsZUFBYztJQUNoQjtDQUNEO0FBRUQsU0FBU0MsZ0JBQWdCTCxHQUFXO0lBQ2xDLGtGQUFrRjtJQUNsRixJQUFJQSxPQUFPLGFBQWtCLGFBQWE7UUFDeENNLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHUjtJQUN6QjtBQUNGO0tBTFNLO0FBT00sU0FBU0k7SUFDdEIsZ0RBQWdEO0lBQ2hELDBCQUEwQjtJQUMxQixLQUFLO0lBQ0wsTUFBTUMscUJBQXFCLENBQUNWO1FBQzFCTSxPQUFPSyxJQUFJLENBQUNYLEtBQUs7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ0osaURBQU1BLENBQUNnQixPQUFPO1FBQ2JDLFNBQVM7WUFBRUMsU0FBUztZQUFHQyxHQUFHO1FBQUc7UUFDN0JDLFNBQVM7WUFBRUYsU0FBUztZQUFHQyxHQUFHO1FBQUU7UUFDNUJFLFlBQVk7WUFBRUMsVUFBVTtZQUFLQyxPQUFPO1FBQUk7UUFDeENDLFdBQVU7OzBCQUVWLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNFO2dCQUFJRixXQUFVOzBCQUNadkIsU0FBUzBCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUM3QixpREFBTUEsQ0FBQzBCLEdBQUc7d0JBRVRJLFlBQVk7NEJBQUVDLE9BQU87d0JBQUs7d0JBQzFCUCxXQUFVOzswQ0FFViw4REFBQ1E7Z0NBQ0NDLEtBQUtMLFFBQVF6QixLQUFLO2dDQUNsQitCLEtBQUtOLFFBQVExQixLQUFLO2dDQUNsQmlDLFNBQVMsSUFBTXJCLG1CQUFtQmMsUUFBUXhCLEdBQUc7Z0NBQzdDb0IsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDRTtnQ0FBSUYsV0FBVTs7a0RBQ2IsOERBQUNZO3dDQUFHWixXQUFVO2tEQUE4QkksUUFBUTFCLEtBQUs7Ozs7OztrREFDekQsOERBQUNtQzt3Q0FBRWIsV0FBVTtrREFBaUJJLFFBQVF2QixXQUFXOzs7Ozs7Ozs7Ozs7MENBRW5ELDhEQUFDcUI7Z0NBQUlGLFdBQVU7O2tEQUNYLDhEQUFDYTt3Q0FBRWIsV0FBVTtrREFBaUJJLFFBQVF0QixhQUFhOzs7Ozs7a0RBQ25ELDhEQUFDK0I7d0NBQUViLFdBQVU7a0RBQU87Ozs7OztrREFDcEIsOERBQUNhO3dDQUFFYixXQUFVO2tEQUFpQkksUUFBUXJCLGFBQWE7Ozs7Ozs7Ozs7Ozs7dUJBakJsRHNCOzs7Ozs7Ozs7Ozs7Ozs7O0FBd0JqQjtNQTNDd0JoQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvamVjdHMudHN4PzcyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5jb25zdCBwcm9qZWN0cyA9IFtcblxuICB7XG4gICAgdGl0bGU6IFwiVE9JRkEgLSBUaW1lcyBPZiBJbmRpYSBGaWxtIEZhcmUgQXdhcmRzXCIsXG4gICAgaW1hZ2U6IFwiL3RvaWZhLnBuZ1wiLFxuICAgIHVybDogXCJodHRwczovL3RvaWZhLmluL1wiLCAvLyB1cmxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVE9JRkEgKFRpbWVzIG9mIEluZGlhIEZpbG0gQXdhcmRzKSBpcyBhIHJldmFtcGVkIHZlcnNpb24gb2YgdGhlIGNsYXNzaWMgRmlsbWZhcmUgQXdhcmRzLCBidWlsdCB1c2luZyBOZXh0LmpzIG9uIGEgc2VydmVybGVzcyBhcmNoaXRlY3R1cmUsIG9mZmVyaW5nIGltcHJvdmVkIHBlcmZvcm1hbmNlIGFuZCBtb2Rlcm4sIHNjYWxhYmxlIGluZnJhc3RydWN0dXJlLlwiLFxuICAgIHRlY2hub2xvZ2llczE6XCIgTmV4dC5qc1wiLFxuICAgIHRlY2hub2xvZ2llczI6XCJTZXJ2ZXJsZXNzXCIsXG4gICAgdGVjaG5vbG9naWVzMzpcIkR5bmFtb0RCXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkJvbWJheVRpbWVzXCIsXG4gICAgaW1hZ2U6IFwiL2JvbWJheXRpbWVzLnBuZ1wiLFxuICAgIHVybDogXCJodHRwczovL3d3dy5ib21iYXl0aW1lcy5jb20vXCIsIC8vIHVybFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIFJlYWN0LWJhc2VkIGZyb250ZW5kIHRvIEtlZXAgeW91cnNlbGYgdXBkYXRlZCB3aXRoIHRoZSBsYXRlc3QgbmV3cywgdmlkZW9zLCBwaG90b3MgYWJvdXQgdGhlIGVudGVydGFpbm1lbnQgaW5kdXN0cnksIGNlbGVicml0eSwgbGlmZXN0eWxlLCB0cmF2ZWwsIGV2ZW50cyBhbmQgYSBsb3QgbW9yZS5cIixcbiAgICAgIHRlY2hub2xvZ2llczE6XCIgTmV4dC5qc1wiLFxuICAgICAgdGVjaG5vbG9naWVzMjpcIlNlcnZlcmxlc3NcIixcbiAgICAgIHRlY2hub2xvZ2llczM6XCJNeVNRTFwiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJFQ291cG9uXCIsXG4gICAgaW1hZ2U6IFwiL0Vjb3Vwb24ucG5nXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vbXl0b2ljb25uZWN0LmNvbS9sb2dpbi9cIiwgLy8gdXJsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgZmVhdHVyZWQgZS1kZWxpdmVyeSB0cmFja2luZyBwbGF0Zm9ybSBidWlsdCB3aXRoIC5ORVQgYW5kIGNvbnN1bWVkIFJGQydzIG9mIFNBUCBhbmQgU1FMIERhdGFiYXNlIHRvIG1lbnRhaW4gdGhlIFRyYW5zYWN0aW9uIHJlY29yZHMgYmV0d2VlbiB0aGUgQ3VzdG9tZXIsIFZlbmRvciBhbmQgRGVhbGVyLlwiLFxuICAgICAgdGVjaG5vbG9naWVzMTpcIi5ORVQgXCIsXG4gICAgICB0ZWNobm9sb2dpZXMyOlwiU0FQXCIsXG4gICAgICB0ZWNobm9sb2dpZXMzOlwiU1FMKHByb2NlZHVyZXMpXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRpbWVzIFN1YnNjcmlwdGlvblwiLFxuICAgIGltYWdlOiBcIi9zdWJzY3JpYmUucG5nXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vc3Vic2NyaWJlLnRpbWVzZ3JvdXAuY29tL3YyL1wiLCAvLyB1cmxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBjb21wcmVoZW5zaXZlIGRhc2hib2FyZCBmb3IgdGhlIFRpbWVzIE9mIEluZGlhIE5ld3NwYXBlciBzdWJzY3JpcHRpb24uIFRPSSsgT2ZmZXIgRW5kcyBTb29uOiBVcHRvIDM1JSBSZWFkIHRoZSBsYXRlc3QgbmV3cyBhbmQgZXhjbHVzaXZlIHN0b3JpZXMgd2l0aCBUT0kgRGlnaXRhbCBOZXdzcGFwZXIgJiBUT0krIHN1YnNjcmlwdGlvblwiLFxuICAgICAgdGVjaG5vbG9naWVzMTpcIiBOZXh0LmpzXCIsXG4gICAgICB0ZWNobm9sb2dpZXMyOlwiU2VydmVybGVzc1wiLFxuICAgICAgdGVjaG5vbG9naWVzMzpcIk15U1FMXCJcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwiVGltZXMgQ29udGVudFwiLFxuICAgIGltYWdlOiBcIi90aW1lc2NvbnRlbnQucG5nXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vdGltZXNoaWdocmlzZWF3YXJkcy5jb20vaW5kZXguaHRtbFwiLCAvLyB1cmxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBSZWFjdC5qcyBhcHBsaWNhdGlvbiB0byBCcm93c2UgJiBCdXkgcGhvdG9zLCBpbWFnZXMsIGNhcnRvb25zLCBncmFwaGljcywgYXJ0aWNsZXMsIG1pY3JvZmlsbSwgQXVkaW8gJiBWaWRlbyBjb250ZW50OyBmcm9tIEluZGlhJ3MgbGFyZ2VzdCBtZWRpYSBncm91cCBUaGUgVGltZXMgR3JvdXAuXCIsXG4gICAgICB0ZWNobm9sb2dpZXMxOlwiIFJlYWN0LmpzXCIsXG4gICAgICB0ZWNobm9sb2dpZXMyOlwiU2VydmVybGVzc1wiLFxuICAgICAgdGVjaG5vbG9naWVzMzpcIk15U1FMXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRpbWVzIEhpZ2ggUmlzZVwiLFxuICAgIGltYWdlOiBcIi9oaWdocmlzZS5wbmdcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly90aW1lc2hpZ2hyaXNlYXdhcmRzLmNvbS9pbmRleC5odG1sXCIsIC8vIHVybFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGNvbXBsZXggYXBwbGljYXRpb24gZm9yIE5vbWluYXRpbmcgeW91ciByZXNpZGVudGlhbCBjb21wbGV4IGZvciB0aGUgcHJlc3RpZ2lvdXMgVGltZXMgSGlnaCBSaXNlIEF3YXJkcy4gVGhpcyBlc3RlZW1lZCBhd2FyZCBjZWxlYnJhdGVzIGV4Y2VsbGVuY2UsIGhvbm91cmluZyBjb21wbGV4ZXMgdGhhdCBleGNlbCBhY3Jvc3MgdmFyaW91cyBwYXJhbWV0ZXJzIGFuZCBzZXQgbmV3YmVuY2htYXJrcyBpbiBxdWFsaXR5IGxpdmluZy4uXCIsXG4gICAgICB0ZWNobm9sb2dpZXMxOlwiIE5leHQuanNcIixcbiAgICAgIHRlY2hub2xvZ2llczI6XCJTZXJ2ZXJsZXNzXCIsXG4gICAgICB0ZWNobm9sb2dpZXMzOlwiRHluYW1vREJcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUaW1lcyBGb29kIGFuZCBOaWdodExpZmUgQXdhcmRzJyxcbiAgICBpbWFnZTogJy90aW1lc2Zvb2QucG5nJyxcbiAgICB1cmw6ICdodHRwczovL3RpbWVzZm9vZGF3YXJkcy5jb20vJywgLy8gdXJsXG4gICAgZGVzY3JpcHRpb246ICdOZXh0LmpzIGFwcGxpY2F0aW9uIHdoaWNoIHNob3djYXNlcyB0aGUgVGltZXMgRm9vZCAmIE5pZ2h0bGlmZSBBd2FyZHMgY2VsZWJyYXRlcyB0aGUgYmVzdCBpbiBGJkIgYW5kIGhvbm91cnMgdGhvc2UgbWFraW5nIGEgZGlmZmVyZW5jZSBpbiB0aGUgd29ybGQgb2YgaG9zcGl0YWxpdHkgdGhyb3VnaCB0aGVpciBpbm5vdmF0aW9uIGFuZCAuLi4nLFxuICAgIHRlY2hub2xvZ2llczE6XCIgTmV4dC5qc1wiLFxuICAgIHRlY2hub2xvZ2llczI6XCJTZXJ2ZXJsZXNzXCIsXG4gICAgdGVjaG5vbG9naWVzMzpcIk15U1FMICYgRHluYW1vREJcIlxuICB9LFxuXTtcblxuZnVuY3Rpb24gUHJvamVjdERpdmVydGVyKHVybDogc3RyaW5nKSB7XG4gIC8vIFVzZSBhIHByb2R1Y3Rpb24tZnJpZW5kbHkgcmVkaXJlY3QgdGhhdCBoYW5kbGVzIGJvdGggcmVsYXRpdmUgYW5kIGFic29sdXRlIFVSTHNcbiAgaWYgKHVybCAmJiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gIC8vIGNvbnN0IGhhbmRsZVByb2plY3RDbGljayA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAvLyAgIFByb2plY3REaXZlcnRlcih1cmwpO1xuICAvLyB9O1xuICBjb25zdCBoYW5kbGVQcm9qZWN0Q2xpY2sgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICB3aW5kb3cub3Blbih1cmwsIFwiX2JsYW5rXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5zZWN0aW9uXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IDAuNCB9fVxuICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcm91bmRlZC1sZyBwLTggc2hhZG93LWxnXCJcbiAgICA+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTZcIj5Qcm9qZWN0czwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNzAwIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcm9qZWN0Q2xpY2socHJvamVjdC51cmwpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00MCBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPntwcm9qZWN0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXgganVzdGlmeS1jZW50ZXJcIiA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmV5LTUwMFwiPntwcm9qZWN0LnRlY2hub2xvZ2llczF9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTFcIj4vPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JleS01MDBcIj57cHJvamVjdC50ZWNobm9sb2dpZXMyfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInByb2plY3RzIiwidGl0bGUiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzMSIsInRlY2hub2xvZ2llczIiLCJ0ZWNobm9sb2dpZXMzIiwiUHJvamVjdERpdmVydGVyIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiUHJvamVjdHMiLCJoYW5kbGVQcm9qZWN0Q2xpY2siLCJvcGVuIiwic2VjdGlvbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImNsYXNzTmFtZSIsImgyIiwiZGl2IiwibWFwIiwicHJvamVjdCIsImluZGV4Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Projects.tsx\n"));

/***/ })

});