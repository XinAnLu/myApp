(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!************************************!*\
  !*** E:/progject/归档/drag2/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 99));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 102));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7OztBQUduQix1RTtBQUNBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUwsWUFBSjtBQUNMRyxZQURLLEVBQVo7O0FBR0FFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuICAgIC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************************!*\
  !*** E:/progject/归档/drag2/pages.json ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}


if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/part1/step1/step1', function () {return Vue.extend(__webpack_require__(/*! pages/part1/step1/step1.vue?mpType=page */ 2).default);});
__definePage('pages/part1/step2/step2', function () {return Vue.extend(__webpack_require__(/*! pages/part1/step2/step2.vue?mpType=page */ 9).default);});
__definePage('pages/part2/step1/step1', function () {return Vue.extend(__webpack_require__(/*! pages/part2/step1/step1.vue?mpType=page */ 15).default);});
__definePage('pages/part2/step2/step2', function () {return Vue.extend(__webpack_require__(/*! pages/part2/step2/step2.vue?mpType=page */ 25).default);});
__definePage('pages/part2/step3/step3', function () {return Vue.extend(__webpack_require__(/*! pages/part2/step3/step3.vue?mpType=page */ 31).default);});
__definePage('pages/part2/step4/step4', function () {return Vue.extend(__webpack_require__(/*! pages/part2/step4/step4.vue?mpType=page */ 38).default);});
__definePage('pages/part2/step5/step5', function () {return Vue.extend(__webpack_require__(/*! pages/part2/step5/step5.vue?mpType=page */ 44).default);});
__definePage('pages/part2/step6/step6', function () {return Vue.extend(__webpack_require__(/*! pages/part2/step6/step6.vue?mpType=page */ 51).default);});
__definePage('pages/part2/step7/step7', function () {return Vue.extend(__webpack_require__(/*! pages/part2/step7/step7.vue?mpType=page */ 58).default);});
__definePage('pages/part2/step8/step8', function () {return Vue.extend(__webpack_require__(/*! pages/part2/step8/step8.vue?mpType=page */ 64).default);});
__definePage('pages/part2/step9/step9', function () {return Vue.extend(__webpack_require__(/*! pages/part2/step9/step9.vue?mpType=page */ 73).default);});
__definePage('pages/part2/step10/step10', function () {return Vue.extend(__webpack_require__(/*! pages/part2/step10/step10.vue?mpType=page */ 80).default);});
__definePage('pages/part2/step11/step11', function () {return Vue.extend(__webpack_require__(/*! pages/part2/step11/step11.vue?mpType=page */ 85).default);});
__definePage('pages/part3/step1/step1', function () {return Vue.extend(__webpack_require__(/*! pages/part3/step1/step1.vue?mpType=page */ 92).default);});

/***/ }),
/* 2 */
/*!********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part1/step1/step1.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step1_vue_vue_type_template_id_db920e1e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step1.vue?vue&type=template&id=db920e1e&scoped=true&mpType=page */ 3);\n/* harmony import */ var _step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step1.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step1_vue_vue_type_template_id_db920e1e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step1_vue_vue_type_template_id_db920e1e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"db920e1e\",\n  null,\n  false,\n  _step1_vue_vue_type_template_id_db920e1e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part1/step1/step1.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc3RlcDEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRiOTIwZTFlJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zdGVwMS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3RlcDEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkYjkyMGUxZVwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9wYXJ0MS9zdGVwMS9zdGVwMS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part1/step1/step1.vue?vue&type=template&id=db920e1e&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_db920e1e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step1.vue?vue&type=template&id=db920e1e&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_db920e1e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_db920e1e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_db920e1e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_db920e1e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part1/step1/step1.vue?vue&type=template&id=db920e1e&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("image", {
        staticClass: _vm._$s(1, "sc", "zhujiemian"),
        attrs: {
          src: _vm._$s(
            1,
            "a-src",
            __webpack_require__(/*! ../../../static/p1/zhujiemian.png */ 5)
          ),
          _i: 1
        }
      }),
      _c("view", {
        staticClass: _vm._$s(2, "sc", "shiyanshi"),
        attrs: { _i: 2 },
        on: { click: _vm.shiyanshi }
      }),
      _c("view", {
        staticClass: _vm._$s(3, "sc", "siyushi"),
        attrs: { _i: 3 },
        on: { click: _vm.SiYuShi }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*****************************************************!*\
  !*** E:/progject/归档/drag2/static/p1/zhujiemian.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p1/zhujiemian.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9wMS96aHVqaWVtaWFuLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part1/step1/step1.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step1.vue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3RlcDEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXAxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part1/step1/step1.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n  },\n  mounted: function mounted() {\n\n  },\n  onLoad: function onLoad() {\n\n    plus.screen.lockOrientation('default');\n\n  },\n  onUnload: function onUnload() {\n\n    plus.screen.lockOrientation('portrait-primary');\n\n  },\n  methods: {\n    SiYuShi: function SiYuShi() {\n      uni.navigateTo({\n        url: '/pages/part1/step2/step2' });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDEvc3RlcDEvc3RlcDEudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtb3VudGVkIiwib25Mb2FkIiwicGx1cyIsInNjcmVlbiIsImxvY2tPcmllbnRhdGlvbiIsIm9uVW5sb2FkIiwibWV0aG9kcyIsIlNpWXVTaGkiLCJ1bmkiLCJuYXZpZ2F0ZVRvIiwidXJsIl0sIm1hcHBpbmdzIjoid0ZBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNkQSxNQURjLGtCQUNQO0FBQ04sV0FBTyxFQUFQO0FBQ0EsR0FIYTtBQUlkQyxTQUpjLHFCQUlKOztBQUVULEdBTmE7QUFPZEMsUUFQYyxvQkFPTDs7QUFFTEMsUUFBSSxDQUFDQyxNQUFMLENBQVlDLGVBQVosQ0FBNEIsU0FBNUI7O0FBRUgsR0FYYTtBQVlkQyxVQVpjLHNCQVlIOztBQUVQSCxRQUFJLENBQUNDLE1BQUwsQ0FBWUMsZUFBWixDQUE0QixrQkFBNUI7O0FBRUgsR0FoQmE7QUFpQmRFLFNBQU8sRUFBRTtBQUNSQyxXQURRLHFCQUNFO0FBQ1RDLFNBQUcsQ0FBQ0MsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBQywwQkFEVSxFQUFmOztBQUdBLEtBTE8sRUFqQkssRSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHt9O1xyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHJcblx0fSxcclxuXHRvbkxvYWQoKSB7XHJcblxyXG5cdFx0ICAgcGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKCdkZWZhdWx0Jyk7IFxyXG5cclxuXHR9LFxyXG5cdG9uVW5sb2FkKCkge1xyXG5cclxuXHRcdCAgIHBsdXMuc2NyZWVuLmxvY2tPcmllbnRhdGlvbigncG9ydHJhaXQtcHJpbWFyeScpOyBcclxuXHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRTaVl1U2hpKCkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOicvcGFnZXMvcGFydDEvc3RlcDIvc3RlcDInXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/*!********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part1/step2/step2.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step2_vue_vue_type_template_id_2d127033_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step2.vue?vue&type=template&id=2d127033&mpType=page */ 10);\n/* harmony import */ var _step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step2.vue?vue&type=script&lang=js&mpType=page */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step2_vue_vue_type_template_id_2d127033_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step2_vue_vue_type_template_id_2d127033_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _step2_vue_vue_type_template_id_2d127033_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part1/step2/step2.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc3RlcDIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJkMTI3MDMzJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zdGVwMi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3RlcDIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDEvc3RlcDIvc3RlcDIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!**************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part1/step2/step2.vue?vue&type=template&id=2d127033&mpType=page ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_2d127033_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step2.vue?vue&type=template&id=2d127033&mpType=page */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_2d127033_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_2d127033_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_2d127033_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_2d127033_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 11 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part1/step2/step2.vue?vue&type=template&id=2d127033&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "question-wrap"),
      style: _vm._$s(0, "s", { height: _vm.screenHeight }),
      attrs: { _i: 0 }
    },
    [
      _c("u-navbar", {
        attrs: {
          title: null,
          "border-bottom": false,
          "is-fixed": false,
          background: null,
          "back-icon-color": "#ffffff",
          _i: 1
        }
      }),
      _c("image", {
        staticClass: _vm._$s(2, "sc", "ditu"),
        attrs: {
          src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../../static/p1/ditu.png */ 12)),
          _i: 2
        }
      }),
      _c("view", {
        staticClass: _vm._$s(3, "sc", "jianyijian"),
        attrs: { _i: 3 },
        on: {
          click: function($event) {
            return _vm.jianyijian()
          }
        }
      }),
      _c("view", {
        staticClass: _vm._$s(4, "sc", "huanchongjian"),
        attrs: { _i: 4 },
        on: {
          click: function($event) {
            return _vm.huanchongjian()
          }
        }
      }),
      _c("view", {
        staticClass: _vm._$s(5, "sc", "xixiaojian"),
        attrs: { _i: 5 },
        on: {
          click: function($event) {
            return _vm.xixiaojian()
          }
        }
      }),
      _c("view", {
        staticClass: _vm._$s(6, "sc", "ergeng"),
        attrs: { _i: 6 },
        on: {
          click: function($event) {
            return _vm.ergeng()
          }
        }
      }),
      _c("view", {
        staticClass: _vm._$s(7, "sc", "yigeng"),
        attrs: { _i: 7 },
        on: {
          click: function($event) {
            return _vm.yigeng()
          }
        }
      }),
      _c("view", {
        staticClass: _vm._$s(8, "sc", "qianshi"),
        attrs: { _i: 8 },
        on: {
          click: function($event) {
            return _vm.qianshi()
          }
        }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!***********************************************!*\
  !*** E:/progject/归档/drag2/static/p1/ditu.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p1/ditu.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDEvZGl0dS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part1/step2/step2.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step2.vue?vue&type=script&lang=js&mpType=page */ 14);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXAyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGVwMi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part1/step2/step2.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      //屏幕高度\n      screenHeight: 0 };\n\n  },\n  onLoad: function onLoad() {\n    this.screenHeight = uni.getSystemInfoSync().windowHeight;\n    plus.screen.lockOrientation(\"landscape\");\n  },\n  methods: {\n    jianyijian: function jianyijian() {\n      uni.navigateTo({\n        url: '/pages/part2/step1/step1' });\n\n    },\n    huanchongjian: function huanchongjian() {\n      uni.navigateTo({\n        url: '/pages/part3/step1/step1' });\n\n    },\n    xixiaojian: function xixiaojian() {\n      uni.navigateTo({\n        url: '/pages/part3/step1/step1' });\n\n    },\n    ergeng: function ergeng() {\n      uni.navigateTo({\n        url: '/pages/part3/step1/step1' });\n\n    },\n    yigeng: function yigeng() {\n      uni.navigateTo({\n        url: '/pages/part3/step1/step1' });\n\n    },\n    qianshi: function qianshi() {\n      uni.navigateTo({\n        url: '/pages/part3/step1/step1' });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDEvc3RlcDIvc3RlcDIudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJzY3JlZW5IZWlnaHQiLCJvbkxvYWQiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd0hlaWdodCIsInBsdXMiLCJzY3JlZW4iLCJsb2NrT3JpZW50YXRpb24iLCJtZXRob2RzIiwiamlhbnlpamlhbiIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJodWFuY2hvbmdqaWFuIiwieGl4aWFvamlhbiIsImVyZ2VuZyIsInlpZ2VuZyIsInFpYW5zaGkiXSwibWFwcGluZ3MiOiJ3RkFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNiQSxNQURhLGtCQUNOO0FBQ0wsV0FBTztBQUNMO0FBQ0FDLGtCQUFZLEVBQUUsQ0FGVCxFQUFQOztBQUlELEdBTlk7QUFPYkMsUUFQYSxvQkFPSjtBQUNQLFNBQUtELFlBQUwsR0FBb0JFLEdBQUcsQ0FBQ0MsaUJBQUosR0FBd0JDLFlBQTVDO0FBQ0hDLFFBQUksQ0FBQ0MsTUFBTCxDQUFZQyxlQUFaLENBQTRCLFdBQTVCO0FBQ0UsR0FWWTtBQVdiQyxTQUFPLEVBQUU7QUFDUkMsY0FEUSx3QkFDSztBQUNaUCxTQUFHLENBQUNRLFVBQUosQ0FBZTtBQUNkQyxXQUFHLEVBQUMsMEJBRFUsRUFBZjs7QUFHQSxLQUxPO0FBTVJDLGlCQU5RLDJCQU1RO0FBQ2ZWLFNBQUcsQ0FBQ1EsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBQywwQkFEVSxFQUFmOztBQUdBLEtBVk87QUFXUkUsY0FYUSx3QkFXSztBQUNaWCxTQUFHLENBQUNRLFVBQUosQ0FBZTtBQUNkQyxXQUFHLEVBQUMsMEJBRFUsRUFBZjs7QUFHQSxLQWZPO0FBZ0JSRyxVQWhCUSxvQkFnQkM7QUFDUlosU0FBRyxDQUFDUSxVQUFKLENBQWU7QUFDZEMsV0FBRyxFQUFDLDBCQURVLEVBQWY7O0FBR0EsS0FwQk87QUFxQlJJLFVBckJRLG9CQXFCQztBQUNSYixTQUFHLENBQUNRLFVBQUosQ0FBZTtBQUNkQyxXQUFHLEVBQUMsMEJBRFUsRUFBZjs7QUFHQSxLQXpCTztBQTBCUkssV0ExQlEscUJBMEJFO0FBQ1RkLFNBQUcsQ0FBQ1EsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBQywwQkFEVSxFQUFmOztBQUdBLEtBOUJPLEVBWEksRSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8v5bGP5bmV6auY5bqmXHJcbiAgICAgIHNjcmVlbkhlaWdodDogMCxcclxuICAgIH07XHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnNjcmVlbkhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodDtcclxuXHRwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oXCJsYW5kc2NhcGVcIik7IFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG5cdCAgamlhbnlpamlhbigpIHtcclxuXHRcdCAgdW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0ICBcdHVybDonL3BhZ2VzL3BhcnQyL3N0ZXAxL3N0ZXAxJ1xyXG5cdFx0ICB9KVxyXG5cdCAgfSxcclxuXHQgIGh1YW5jaG9uZ2ppYW4oKSB7XHJcblx0XHQgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdCAgXHR1cmw6Jy9wYWdlcy9wYXJ0My9zdGVwMS9zdGVwMSdcclxuXHRcdCAgfSlcclxuXHQgIH0sXHJcblx0ICB4aXhpYW9qaWFuKCkge1xyXG5cdFx0ICB1bmkubmF2aWdhdGVUbyh7XHJcblx0XHQgIFx0dXJsOicvcGFnZXMvcGFydDMvc3RlcDEvc3RlcDEnXHJcblx0XHQgIH0pXHJcblx0ICB9LFxyXG5cdCAgZXJnZW5nKCkge1xyXG5cdFx0ICB1bmkubmF2aWdhdGVUbyh7XHJcblx0XHQgIFx0dXJsOicvcGFnZXMvcGFydDMvc3RlcDEvc3RlcDEnXHJcblx0XHQgIH0pXHJcblx0ICB9LFxyXG5cdCAgeWlnZW5nKCkge1xyXG5cdFx0ICB1bmkubmF2aWdhdGVUbyh7XHJcblx0XHQgIFx0dXJsOicvcGFnZXMvcGFydDMvc3RlcDEvc3RlcDEnXHJcblx0XHQgIH0pXHJcblx0ICB9LFxyXG5cdCAgcWlhbnNoaSgpIHtcclxuXHRcdCAgdW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0ICBcdHVybDonL3BhZ2VzL3BhcnQzL3N0ZXAxL3N0ZXAxJ1xyXG5cdFx0ICB9KVxyXG5cdCAgfVxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step1/step1.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step1_vue_vue_type_template_id_88f2451c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step1.vue?vue&type=template&id=88f2451c&scoped=true&mpType=page */ 16);\n/* harmony import */ var _step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step1.vue?vue&type=script&lang=js&mpType=page */ 22);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step1_vue_vue_type_template_id_88f2451c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step1_vue_vue_type_template_id_88f2451c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"88f2451c\",\n  null,\n  false,\n  _step1_vue_vue_type_template_id_88f2451c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part2/step1/step1.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0ZXAxLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04OGYyNDUxYyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RlcDEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N0ZXAxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiODhmMjQ1MWNcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDIvc3RlcDEvc3RlcDEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step1/step1.vue?vue&type=template&id=88f2451c&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_88f2451c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step1.vue?vue&type=template&id=88f2451c&scoped=true&mpType=page */ 17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_88f2451c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_88f2451c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_88f2451c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_88f2451c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 17 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step1/step1.vue?vue&type=template&id=88f2451c&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("movable-area", [
        _c("image", {
          staticClass: _vm._$s(2, "sc", "xz"),
          attrs: {
            id: "xz",
            src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../../static/p2/xz.png */ 18)),
            _i: 2
          }
        }),
        _c(
          "movable-view",
          {
            staticClass: _vm._$s(3, "sc", "pzBox"),
            attrs: { _i: 3 },
            on: { change: _vm.onChange }
          },
          [
            _c("image", {
              staticClass: _vm._$s(4, "sc", "pz"),
              attrs: {
                id: "pz",
                src: _vm._$s(4, "a-src", __webpack_require__(/*! ../../../static/p2/pz.png */ 19)),
                _i: 4
              }
            })
          ]
        )
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "navBox"), attrs: { _i: 5 } },
        [
          _c("image", {
            staticClass: _vm._$s(6, "sc", "pre"),
            attrs: {
              src: _vm._$s(
                6,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowLeft.png */ 20)
              ),
              _i: 6
            },
            on: { click: _vm.handleLeftClick }
          }),
          _c("image", {
            staticClass: _vm._$s(7, "sc", "next"),
            attrs: {
              src: _vm._$s(
                7,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowRight.png */ 21)
              ),
              _i: 7
            },
            on: { click: _vm.handleRightClick }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 18 */
/*!*********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/xz.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/xz.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIveHoucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/pz.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/pz.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvcHoucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!****************************************************!*\
  !*** E:/progject/归档/drag2/static/p2/arrowLeft.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/arrowLeft.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvYXJyb3dMZWZ0LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*****************************************************!*\
  !*** E:/progject/归档/drag2/static/p2/arrowRight.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/arrowRight.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvYXJyb3dSaWdodC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step1/step1.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step1.vue?vue&type=script&lang=js&mpType=page */ 23);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXAxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGVwMS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step1/step1.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n  },\n  mounted: function mounted() {var _this = this;\n    this._xz = null;\n    this._has = false;\n    var query = uni.createSelectorQuery().in(this);\n    query.\n    select('#xz').\n    boundingClientRect(function (data) {\n      __f__(\"log\", 'data1 = ', data, \" at pages/part2/step1/step1.vue:26\");\n      _this._xz = data;\n    }).\n    exec();\n  },\n  methods: {\n    // 碰撞检测, target目标坐标 drag拖拽的目标\n    coll: function coll(domA, domB, callback) {\n      if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {\n        return false; // 未碰撞\n      } else {\n        // console.log(\"碰撞....\")\n        callback();\n        return true; // 碰撞\n      }\n    },\n    onChange: function onChange(e) {var _this2 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#pz').\n      boundingClientRect(function (data) {\n        _this2.coll(_this2._xz, data, function () {\n          if (!_this2._has) {\n            _this2._has = true;\n            __f__(\"log\", '碰撞了..', \" at pages/part2/step1/step1.vue:50\");\n            uni.navigateTo({\n              url: '/pages/part2/step2/step2' });\n\n          }\n        });\n      }).\n      exec();\n    },\n    handleLeftClick: function handleLeftClick() {\n      // uni.navigateBack();\n      uni.navigateTo({\n        url: '/pages/part1/step2/step2' });\n\n    },\n    handleRightClick: function handleRightClick() {\n      uni.navigateTo({\n        url: '/pages/part2/step2/step2' });\n\n    } },\n\n  onLoad: function onLoad() {\n    plus.screen.lockOrientation(\"landscape\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDIvc3RlcDEvc3RlcDEudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtb3VudGVkIiwiX3h6IiwiX2hhcyIsInF1ZXJ5IiwidW5pIiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZXhlYyIsIm1ldGhvZHMiLCJjb2xsIiwiZG9tQSIsImRvbUIiLCJjYWxsYmFjayIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIm9uQ2hhbmdlIiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVMZWZ0Q2xpY2siLCJoYW5kbGVSaWdodENsaWNrIiwib25Mb2FkIiwicGx1cyIsInNjcmVlbiIsImxvY2tPcmllbnRhdGlvbiJdLCJtYXBwaW5ncyI6InFJQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2RBLE1BRGMsa0JBQ1A7QUFDTixXQUFPLEVBQVA7QUFDQSxHQUhhO0FBSWRDLFNBSmMscUJBSUo7QUFDVCxTQUFLQyxHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxHQUFHLENBQUNDLG1CQUFKLEdBQTBCQyxFQUExQixDQUE2QixJQUE3QixDQUFkO0FBQ0FILFNBQUs7QUFDSEksVUFERixDQUNTLEtBRFQ7QUFFRUMsc0JBRkYsQ0FFcUIsVUFBQVQsSUFBSSxFQUFJO0FBQzNCLG1CQUFZLFVBQVosRUFBd0JBLElBQXhCO0FBQ0EsV0FBSSxDQUFDRSxHQUFMLEdBQVdGLElBQVg7QUFDQSxLQUxGO0FBTUVVLFFBTkY7QUFPQSxHQWZhO0FBZ0JkQyxTQUFPLEVBQUU7QUFDUjtBQUNBQyxRQUZRLGdCQUVIQyxJQUZHLEVBRUdDLElBRkgsRUFFU0MsUUFGVCxFQUVtQjtBQUMxQixVQUFJRixJQUFJLENBQUNHLElBQUwsR0FBWUYsSUFBSSxDQUFDRyxLQUFqQixJQUEwQkosSUFBSSxDQUFDSyxHQUFMLEdBQVdKLElBQUksQ0FBQ0ssTUFBMUMsSUFBb0ROLElBQUksQ0FBQ0ksS0FBTCxHQUFhSCxJQUFJLENBQUNFLElBQXRFLElBQThFSCxJQUFJLENBQUNNLE1BQUwsR0FBY0wsSUFBSSxDQUFDSSxHQUFyRyxFQUEwRztBQUN6RyxlQUFPLEtBQVAsQ0FEeUcsQ0FDM0Y7QUFDZCxPQUZELE1BRU87QUFDTjtBQUNBSCxnQkFBUTtBQUNSLGVBQU8sSUFBUCxDQUhNLENBR087QUFDYjtBQUNELEtBVk87QUFXUkssWUFBUSxFQUFFLGtCQUFTQyxDQUFULEVBQVk7QUFDckIsVUFBTWpCLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixHQUEwQkMsRUFBMUIsQ0FBNkIsSUFBN0IsQ0FBZDtBQUNBSCxXQUFLO0FBQ0hJLFlBREYsQ0FDUyxLQURUO0FBRUVDLHdCQUZGLENBRXFCLFVBQUFULElBQUksRUFBSTtBQUMzQixjQUFJLENBQUNZLElBQUwsQ0FBVSxNQUFJLENBQUNWLEdBQWYsRUFBb0JGLElBQXBCLEVBQTBCLFlBQU07QUFDL0IsY0FBSSxDQUFDLE1BQUksQ0FBQ0csSUFBVixFQUFnQjtBQUNmLGtCQUFJLENBQUNBLElBQUwsR0FBWSxJQUFaO0FBQ0EseUJBQVksT0FBWjtBQUNBRSxlQUFHLENBQUNpQixVQUFKLENBQWU7QUFDZEMsaUJBQUcsRUFBRSwwQkFEUyxFQUFmOztBQUdBO0FBQ0QsU0FSRDtBQVNBLE9BWkY7QUFhRWIsVUFiRjtBQWNBLEtBM0JPO0FBNEJSYyxtQkE1QlEsNkJBNEJVO0FBQ2pCO0FBQ0FuQixTQUFHLENBQUNpQixVQUFKLENBQWU7QUFDZEMsV0FBRyxFQUFFLDBCQURTLEVBQWY7O0FBR0EsS0FqQ087QUFrQ1JFLG9CQWxDUSw4QkFrQ1c7QUFDbEJwQixTQUFHLENBQUNpQixVQUFKLENBQWU7QUFDZEMsV0FBRyxFQUFFLDBCQURTLEVBQWY7O0FBR0EsS0F0Q08sRUFoQks7O0FBd0RkRyxRQXhEYyxvQkF3REw7QUFDUkMsUUFBSSxDQUFDQyxNQUFMLENBQVlDLGVBQVosQ0FBNEIsV0FBNUI7QUFDQSxHQTFEYSxFIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHt9O1xyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdHRoaXMuX3h6ID0gbnVsbDtcclxuXHRcdHRoaXMuX2hhcyA9IGZhbHNlO1xyXG5cdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0cXVlcnlcclxuXHRcdFx0LnNlbGVjdCgnI3h6JylcclxuXHRcdFx0LmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZGF0YTEgPSAnLCBkYXRhKTtcclxuXHRcdFx0XHR0aGlzLl94eiA9IGRhdGE7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5leGVjKCk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHQvLyDnorDmkp7mo4DmtYssIHRhcmdldOebruagh+WdkOaghyBkcmFn5ouW5ou955qE55uu5qCHXHJcblx0XHRjb2xsKGRvbUEsIGRvbUIsIGNhbGxiYWNrKSB7XHJcblx0XHRcdGlmIChkb21BLmxlZnQgPiBkb21CLnJpZ2h0IHx8IGRvbUEudG9wID4gZG9tQi5ib3R0b20gfHwgZG9tQS5yaWdodCA8IGRvbUIubGVmdCB8fCBkb21BLmJvdHRvbSA8IGRvbUIudG9wKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyDmnKrnorDmkp5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIueisOaSni4uLi5cIilcclxuXHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlOyAvLyDnorDmkp5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0cXVlcnlcclxuXHRcdFx0XHQuc2VsZWN0KCcjcHonKVxyXG5cdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNvbGwodGhpcy5feHosIGRhdGEsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLl9oYXMpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLl9oYXMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnorDmkp7kuoYuLicpO1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwMi9zdGVwMidcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5leGVjKCk7XHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlTGVmdENsaWNrKCkge1xyXG5cdFx0XHQvLyB1bmkubmF2aWdhdGVCYWNrKCk7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvcGFydDEvc3RlcDIvc3RlcDInXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlUmlnaHRDbGljaygpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwMi9zdGVwMidcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0fSxcclxuXHRvbkxvYWQoKSB7XHJcblx0XHRwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oXCJsYW5kc2NhcGVcIik7XHJcblx0fVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 25 */
/*!********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step2/step2.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step2_vue_vue_type_template_id_566254b4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step2.vue?vue&type=template&id=566254b4&scoped=true&mpType=page */ 26);\n/* harmony import */ var _step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step2.vue?vue&type=script&lang=js&mpType=page */ 29);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step2_vue_vue_type_template_id_566254b4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step2_vue_vue_type_template_id_566254b4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"566254b4\",\n  null,\n  false,\n  _step2_vue_vue_type_template_id_566254b4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part2/step2/step2.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0ZXAyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NjYyNTRiNCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RlcDIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N0ZXAyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTY2MjU0YjRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDIvc3RlcDIvc3RlcDIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step2/step2.vue?vue&type=template&id=566254b4&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_566254b4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step2.vue?vue&type=template&id=566254b4&scoped=true&mpType=page */ 27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_566254b4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_566254b4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_566254b4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_template_id_566254b4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 27 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step2/step2.vue?vue&type=template&id=566254b4&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("movable-area", [
        _c(
          "movable-view",
          {
            staticClass: _vm._$s(2, "sc", "xzBox"),
            attrs: { _i: 2 },
            on: { change: _vm.onChange }
          },
          [
            _c("image", {
              staticClass: _vm._$s(3, "sc", "xz"),
              attrs: {
                id: "xz",
                src: _vm._$s(3, "a-src", __webpack_require__(/*! ../../../static/p2/xz.png */ 18)),
                _i: 3
              }
            })
          ]
        ),
        _c("image", {
          staticClass: _vm._$s(4, "sc", "door"),
          attrs: {
            id: "door",
            src: _vm._$s(4, "a-src", __webpack_require__(/*! ../../../static/p2/door.png */ 28)),
            _i: 4
          }
        })
      ]),
      _c("button", {
        staticClass: _vm._$s(5, "sc", "btn startBtn"),
        attrs: { _i: 5 }
      }),
      _c("button", {
        staticClass: _vm._$s(6, "sc", "btn closeBtn"),
        attrs: { _i: 6 }
      }),
      _c("view", { staticClass: _vm._$s(7, "sc", "tit"), attrs: { _i: 7 } }),
      _c(
        "view",
        { staticClass: _vm._$s(8, "sc", "navBox"), attrs: { _i: 8 } },
        [
          _c("image", {
            staticClass: _vm._$s(9, "sc", "pre"),
            attrs: {
              src: _vm._$s(
                9,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowLeft.png */ 20)
              ),
              _i: 9
            },
            on: { click: _vm.handleLeftClick }
          }),
          _c("image", {
            staticClass: _vm._$s(10, "sc", "next"),
            attrs: {
              src: _vm._$s(
                10,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowRight.png */ 21)
              ),
              _i: 10
            },
            on: { click: _vm.handleRightClick }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 28 */
/*!***********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/door.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/door.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvZG9vci5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step2/step2.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step2.vue?vue&type=script&lang=js&mpType=page */ 30);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXAyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGVwMi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step2/step2.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n  },\n  mounted: function mounted() {var _this = this;\n    this._xz = null;\n    this._has = false;\n    var query = uni.createSelectorQuery().in(this);\n    query.\n    select('#door').\n    boundingClientRect(function (data) {\n      __f__(\"log\", 'data1 = ', data, \" at pages/part2/step2/step2.vue:35\");\n      _this._xz = data;\n    }).\n    exec();\n  },\n  methods: {\n    // 碰撞检测, target目标坐标 drag拖拽的目标\n    coll: function coll(domA, domB, callback) {\n      if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {\n        return false; // 未碰撞\n      } else {\n        // console.log(\"碰撞....\")\n        callback();\n        return true; // 碰撞\n      }\n    },\n    onChange: function onChange(e) {var _this2 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#xz').\n      boundingClientRect(function (data) {\n        _this2.coll(_this2._xz, data, function () {\n          if (!_this2._has) {\n            _this2._has = true;\n            __f__(\"log\", '碰撞了..', \" at pages/part2/step2/step2.vue:59\");\n\n            setTimeout(function () {\n              uni.navigateTo({\n                url: '/pages/part2/step3/step3' });\n\n            }, 500);\n          }\n        });\n      }).\n      exec();\n    },\n    handleLeftClick: function handleLeftClick() {\n      // uni.navigateBack();\n      uni.navigateTo({\n        url: '/pages/part2/step1/step1' });\n\n    },\n    handleRightClick: function handleRightClick() {\n      uni.navigateTo({\n        url: '/pages/part2/step3/step3' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDIvc3RlcDIvc3RlcDIudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtb3VudGVkIiwiX3h6IiwiX2hhcyIsInF1ZXJ5IiwidW5pIiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZXhlYyIsIm1ldGhvZHMiLCJjb2xsIiwiZG9tQSIsImRvbUIiLCJjYWxsYmFjayIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIm9uQ2hhbmdlIiwiZSIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlTGVmdENsaWNrIiwiaGFuZGxlUmlnaHRDbGljayJdLCJtYXBwaW5ncyI6InFJQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2RBLE1BRGMsa0JBQ1A7QUFDTixXQUFPLEVBQVA7QUFDQSxHQUhhO0FBSWRDLFNBSmMscUJBSUo7QUFDVCxTQUFLQyxHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxHQUFHLENBQUNDLG1CQUFKLEdBQTBCQyxFQUExQixDQUE2QixJQUE3QixDQUFkO0FBQ0FILFNBQUs7QUFDSEksVUFERixDQUNTLE9BRFQ7QUFFRUMsc0JBRkYsQ0FFcUIsVUFBQVQsSUFBSSxFQUFJO0FBQzNCLG1CQUFZLFVBQVosRUFBd0JBLElBQXhCO0FBQ0EsV0FBSSxDQUFDRSxHQUFMLEdBQVdGLElBQVg7QUFDQSxLQUxGO0FBTUVVLFFBTkY7QUFPQSxHQWZhO0FBZ0JkQyxTQUFPLEVBQUU7QUFDUjtBQUNBQyxRQUZRLGdCQUVIQyxJQUZHLEVBRUdDLElBRkgsRUFFU0MsUUFGVCxFQUVtQjtBQUMxQixVQUFJRixJQUFJLENBQUNHLElBQUwsR0FBWUYsSUFBSSxDQUFDRyxLQUFqQixJQUEwQkosSUFBSSxDQUFDSyxHQUFMLEdBQVdKLElBQUksQ0FBQ0ssTUFBMUMsSUFBb0ROLElBQUksQ0FBQ0ksS0FBTCxHQUFhSCxJQUFJLENBQUNFLElBQXRFLElBQThFSCxJQUFJLENBQUNNLE1BQUwsR0FBY0wsSUFBSSxDQUFDSSxHQUFyRyxFQUEwRztBQUN6RyxlQUFPLEtBQVAsQ0FEeUcsQ0FDM0Y7QUFDZCxPQUZELE1BRU87QUFDTjtBQUNBSCxnQkFBUTtBQUNSLGVBQU8sSUFBUCxDQUhNLENBR087QUFDYjtBQUNELEtBVk87QUFXUkssWUFBUSxFQUFFLGtCQUFTQyxDQUFULEVBQVk7QUFDckIsVUFBTWpCLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixHQUEwQkMsRUFBMUIsQ0FBNkIsSUFBN0IsQ0FBZDtBQUNBSCxXQUFLO0FBQ0hJLFlBREYsQ0FDUyxLQURUO0FBRUVDLHdCQUZGLENBRXFCLFVBQUFULElBQUksRUFBSTtBQUMzQixjQUFJLENBQUNZLElBQUwsQ0FBVSxNQUFJLENBQUNWLEdBQWYsRUFBb0JGLElBQXBCLEVBQTBCLFlBQU07QUFDL0IsY0FBSSxDQUFDLE1BQUksQ0FBQ0csSUFBVixFQUFnQjtBQUNmLGtCQUFJLENBQUNBLElBQUwsR0FBWSxJQUFaO0FBQ0EseUJBQVksT0FBWjs7QUFFQW1CLHNCQUFVLENBQUMsWUFBTTtBQUNoQmpCLGlCQUFHLENBQUNrQixVQUFKLENBQWU7QUFDZEMsbUJBQUcsRUFBRSwwQkFEUyxFQUFmOztBQUdBLGFBSlMsRUFJUCxHQUpPLENBQVY7QUFLQTtBQUNELFNBWEQ7QUFZQSxPQWZGO0FBZ0JFZCxVQWhCRjtBQWlCQSxLQTlCTztBQStCUmUsbUJBL0JRLDZCQStCVTtBQUNqQjtBQUNBcEIsU0FBRyxDQUFDa0IsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBRSwwQkFEUyxFQUFmOztBQUdBLEtBcENPO0FBcUNSRSxvQkFyQ1EsOEJBcUNXO0FBQ2xCckIsU0FBRyxDQUFDa0IsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBRSwwQkFEUyxFQUFmOztBQUdBLEtBekNPLEVBaEJLLEUiLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge307XHJcblx0fSxcclxuXHRtb3VudGVkKCkge1xyXG5cdFx0dGhpcy5feHogPSBudWxsO1xyXG5cdFx0dGhpcy5faGFzID0gZmFsc2U7XHJcblx0XHRjb25zdCBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcblx0XHRxdWVyeVxyXG5cdFx0XHQuc2VsZWN0KCcjZG9vcicpXHJcblx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2RhdGExID0gJywgZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5feHogPSBkYXRhO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuZXhlYygpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly8g56Kw5pKe5qOA5rWLLCB0YXJnZXTnm67moIflnZDmoIcgZHJhZ+aLluaLveeahOebruagh1xyXG5cdFx0Y29sbChkb21BLCBkb21CLCBjYWxsYmFjaykge1xyXG5cdFx0XHRpZiAoZG9tQS5sZWZ0ID4gZG9tQi5yaWdodCB8fCBkb21BLnRvcCA+IGRvbUIuYm90dG9tIHx8IGRvbUEucmlnaHQgPCBkb21CLmxlZnQgfHwgZG9tQS5ib3R0b20gPCBkb21CLnRvcCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8g5pyq56Kw5pKeXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCLnorDmkp4uLi4uXCIpXHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLy8g56Kw5pKeXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRjb25zdCBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcblx0XHRcdHF1ZXJ5XHJcblx0XHRcdFx0LnNlbGVjdCgnI3h6JylcclxuXHRcdFx0XHQuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jb2xsKHRoaXMuX3h6LCBkYXRhLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghdGhpcy5faGFzKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5faGFzID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn56Kw5pKe5LqGLi4nKTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwMy9zdGVwMydcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fSwgNTAwKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5leGVjKCk7XHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlTGVmdENsaWNrKCkge1xyXG5cdFx0XHQvLyB1bmkubmF2aWdhdGVCYWNrKCk7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvcGFydDIvc3RlcDEvc3RlcDEnXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGhhbmRsZVJpZ2h0Q2xpY2soKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvcGFydDIvc3RlcDMvc3RlcDMnXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step3/step3.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step3_vue_vue_type_template_id_1d846814_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step3.vue?vue&type=template&id=1d846814&scoped=true&mpType=page */ 32);\n/* harmony import */ var _step3_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step3.vue?vue&type=script&lang=js&mpType=page */ 36);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step3_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step3_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step3_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step3_vue_vue_type_template_id_1d846814_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step3_vue_vue_type_template_id_1d846814_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1d846814\",\n  null,\n  false,\n  _step3_vue_vue_type_template_id_1d846814_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part2/step3/step3.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0ZXAzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZDg0NjgxNCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RlcDMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N0ZXAzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWQ4NDY4MTRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDIvc3RlcDMvc3RlcDMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!**************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step3/step3.vue?vue&type=template&id=1d846814&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_template_id_1d846814_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step3.vue?vue&type=template&id=1d846814&scoped=true&mpType=page */ 33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_template_id_1d846814_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_template_id_1d846814_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_template_id_1d846814_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_template_id_1d846814_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 33 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step3/step3.vue?vue&type=template&id=1d846814&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("movable-area", [
        _c(
          "movable-view",
          {
            staticClass: _vm._$s(2, "sc", "xzBox"),
            attrs: { _i: 2 },
            on: { change: _vm.onChange }
          },
          [
            _c("image", {
              staticClass: _vm._$s(3, "sc", "xz"),
              attrs: {
                id: "xz",
                src: _vm._$s(3, "a-src", __webpack_require__(/*! ../../../static/p2/zwx.png */ 34)),
                _i: 3
              }
            }),
            _c(
              "view",
              { staticClass: _vm._$s(4, "sc", "time"), attrs: { _i: 4 } },
              [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.num)))]
            ),
            _c("view", {
              staticClass: _vm._$s(5, "sc", "jia"),
              attrs: { _i: 5 },
              on: { click: _vm.handleJia }
            }),
            _c("view", {
              staticClass: _vm._$s(6, "sc", "jia jian"),
              attrs: { _i: 6 },
              on: { click: _vm.handleJian }
            })
          ]
        ),
        _c("image", {
          staticClass: _vm._$s(7, "sc", "door"),
          attrs: {
            id: "door",
            src: _vm._$s(7, "a-src", __webpack_require__(/*! ../../../static/p2/door2.png */ 35)),
            _i: 7
          }
        })
      ]),
      _c("button", {
        staticClass: _vm._$s(8, "sc", "btn startBtn"),
        attrs: { _i: 8 },
        on: { click: _vm.handleStart }
      }),
      _c("button", {
        staticClass: _vm._$s(9, "sc", "btn closeBtn"),
        attrs: { _i: 9 },
        on: { click: _vm.handleClose }
      }),
      _c("view", { staticClass: _vm._$s(10, "sc", "tit"), attrs: { _i: 10 } }, [
        _vm._v(_vm._$s(10, "t0-0", _vm._s(_vm.time)))
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(11, "sc", "navBox"), attrs: { _i: 11 } },
        [
          _c("image", {
            staticClass: _vm._$s(12, "sc", "pre"),
            attrs: {
              src: _vm._$s(
                12,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowLeft.png */ 20)
              ),
              _i: 12
            },
            on: { click: _vm.handleLeftClick }
          }),
          _c("image", {
            staticClass: _vm._$s(13, "sc", "next"),
            attrs: {
              src: _vm._$s(
                13,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowRight.png */ 21)
              ),
              _i: 13
            },
            on: { click: _vm.handleRightClick }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 34 */
/*!**********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/zwx.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/zwx.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvend4LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!************************************************!*\
  !*** E:/progject/归档/drag2/static/p2/door2.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/door2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvZG9vcjIucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step3/step3.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step3.vue?vue&type=script&lang=js&mpType=page */ 37);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step3_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXAzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGVwMy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step3/step3.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      time: '00:00',\n      num: 0 };\n\n  },\n  mounted: function mounted() {var _this = this;\n    this._xz = null;\n    this._has = false;\n    var query = uni.createSelectorQuery().in(this);\n    query.\n    select('#door').\n    boundingClientRect(function (data) {\n      __f__(\"log\", 'data1 = ', data, \" at pages/part2/step3/step3.vue:38\");\n      _this._xz = data;\n    }).\n    exec();\n  },\n  methods: {\n    handleStart: function handleStart() {var _this2 = this;\n      setTimeout(function () {\n        _this2.time = '20:00';\n      }, 1000);\n    },\n    handleClose: function handleClose() {\n      if (this.time == '20:00') {\n        uni.showToast({\n          title: '操作正确！' });\n\n        uni.navigateTo({\n          url: '/pages/part2/step4/step4' });\n\n      } else {\n        uni.showToast({\n          title: '操作错误！',\n          icon: 'error' });\n\n      }\n    },\n    handleJia: function handleJia() {\n      this.num += 1;\n    },\n    handleJian: function handleJian() {\n      if (this.num == 0) {\n        return;\n      }\n      this.num -= 1;\n    },\n    // 碰撞检测, target目标坐标 drag拖拽的目标\n    coll: function coll(domA, domB, callback) {\n      if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {\n        return false; // 未碰撞\n      } else {\n        // console.log(\"碰撞....\")\n        callback();\n        return true; // 碰撞\n      }\n    },\n    onChange: function onChange(e) {var _this3 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#xz').\n      boundingClientRect(function (data) {\n        _this3.coll(_this3._xz, data, function () {\n          if (!_this3._has) {\n            _this3._has = true;\n            __f__(\"log\", '碰撞了..', \" at pages/part2/step3/step3.vue:91\");\n          }\n        });\n      }).\n      exec();\n    },\n    handleLeftClick: function handleLeftClick() {\n      // uni.navigateBack();\n      uni.navigateTo({\n        url: '/pages/part2/step2/step2' });\n\n    },\n    handleRightClick: function handleRightClick() {\n      uni.navigateTo({\n        url: '/pages/part2/step4/step4' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDIvc3RlcDMvc3RlcDMudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ0aW1lIiwibnVtIiwibW91bnRlZCIsIl94eiIsIl9oYXMiLCJxdWVyeSIsInVuaSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpbiIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImV4ZWMiLCJtZXRob2RzIiwiaGFuZGxlU3RhcnQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xvc2UiLCJzaG93VG9hc3QiLCJ0aXRsZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJpY29uIiwiaGFuZGxlSmlhIiwiaGFuZGxlSmlhbiIsImNvbGwiLCJkb21BIiwiZG9tQiIsImNhbGxiYWNrIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwib25DaGFuZ2UiLCJlIiwiaGFuZGxlTGVmdENsaWNrIiwiaGFuZGxlUmlnaHRDbGljayJdLCJtYXBwaW5ncyI6InFJQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2RBLE1BRGMsa0JBQ1A7QUFDTixXQUFPO0FBQ05DLFVBQUksRUFBRSxPQURBO0FBRU5DLFNBQUcsRUFBRSxDQUZDLEVBQVA7O0FBSUEsR0FOYTtBQU9kQyxTQVBjLHFCQU9KO0FBQ1QsU0FBS0MsR0FBTCxHQUFXLElBQVg7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNBLFFBQU1DLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixHQUEwQkMsRUFBMUIsQ0FBNkIsSUFBN0IsQ0FBZDtBQUNBSCxTQUFLO0FBQ0hJLFVBREYsQ0FDUyxPQURUO0FBRUVDLHNCQUZGLENBRXFCLFVBQUFYLElBQUksRUFBSTtBQUMzQixtQkFBWSxVQUFaLEVBQXdCQSxJQUF4QjtBQUNBLFdBQUksQ0FBQ0ksR0FBTCxHQUFXSixJQUFYO0FBQ0EsS0FMRjtBQU1FWSxRQU5GO0FBT0EsR0FsQmE7QUFtQmRDLFNBQU8sRUFBRTtBQUNSQyxlQURRLHlCQUNNO0FBQ2JDLGdCQUFVLENBQUMsWUFBTTtBQUNoQixjQUFJLENBQUNkLElBQUwsR0FBWSxPQUFaO0FBQ0EsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdBLEtBTE87QUFNUmUsZUFOUSx5QkFNTTtBQUNiLFVBQUksS0FBS2YsSUFBTCxJQUFhLE9BQWpCLEVBQTBCO0FBQ3pCTSxXQUFHLENBQUNVLFNBQUosQ0FBYztBQUNiQyxlQUFLLEVBQUUsT0FETSxFQUFkOztBQUdBWCxXQUFHLENBQUNZLFVBQUosQ0FBZTtBQUNkQyxhQUFHLEVBQUUsMEJBRFMsRUFBZjs7QUFHQSxPQVBELE1BT087QUFDTmIsV0FBRyxDQUFDVSxTQUFKLENBQWM7QUFDYkMsZUFBSyxFQUFFLE9BRE07QUFFYkcsY0FBSSxFQUFFLE9BRk8sRUFBZDs7QUFJQTtBQUNELEtBcEJPO0FBcUJSQyxhQXJCUSx1QkFxQkk7QUFDWCxXQUFLcEIsR0FBTCxJQUFZLENBQVo7QUFDQSxLQXZCTztBQXdCUnFCLGNBeEJRLHdCQXdCSztBQUNaLFVBQUksS0FBS3JCLEdBQUwsSUFBWSxDQUFoQixFQUFtQjtBQUNsQjtBQUNBO0FBQ0QsV0FBS0EsR0FBTCxJQUFZLENBQVo7QUFDQSxLQTdCTztBQThCUjtBQUNBc0IsUUEvQlEsZ0JBK0JIQyxJQS9CRyxFQStCR0MsSUEvQkgsRUErQlNDLFFBL0JULEVBK0JtQjtBQUMxQixVQUFJRixJQUFJLENBQUNHLElBQUwsR0FBWUYsSUFBSSxDQUFDRyxLQUFqQixJQUEwQkosSUFBSSxDQUFDSyxHQUFMLEdBQVdKLElBQUksQ0FBQ0ssTUFBMUMsSUFBb0ROLElBQUksQ0FBQ0ksS0FBTCxHQUFhSCxJQUFJLENBQUNFLElBQXRFLElBQThFSCxJQUFJLENBQUNNLE1BQUwsR0FBY0wsSUFBSSxDQUFDSSxHQUFyRyxFQUEwRztBQUN6RyxlQUFPLEtBQVAsQ0FEeUcsQ0FDM0Y7QUFDZCxPQUZELE1BRU87QUFDTjtBQUNBSCxnQkFBUTtBQUNSLGVBQU8sSUFBUCxDQUhNLENBR087QUFDYjtBQUNELEtBdkNPO0FBd0NSSyxZQUFRLEVBQUUsa0JBQVNDLENBQVQsRUFBWTtBQUNyQixVQUFNM0IsS0FBSyxHQUFHQyxHQUFHLENBQUNDLG1CQUFKLEdBQTBCQyxFQUExQixDQUE2QixJQUE3QixDQUFkO0FBQ0FILFdBQUs7QUFDSEksWUFERixDQUNTLEtBRFQ7QUFFRUMsd0JBRkYsQ0FFcUIsVUFBQVgsSUFBSSxFQUFJO0FBQzNCLGNBQUksQ0FBQ3dCLElBQUwsQ0FBVSxNQUFJLENBQUNwQixHQUFmLEVBQW9CSixJQUFwQixFQUEwQixZQUFNO0FBQy9CLGNBQUksQ0FBQyxNQUFJLENBQUNLLElBQVYsRUFBZ0I7QUFDZixrQkFBSSxDQUFDQSxJQUFMLEdBQVksSUFBWjtBQUNBLHlCQUFZLE9BQVo7QUFDQTtBQUNELFNBTEQ7QUFNQSxPQVRGO0FBVUVPLFVBVkY7QUFXQSxLQXJETztBQXNEUnNCLG1CQXREUSw2QkFzRFU7QUFDakI7QUFDQTNCLFNBQUcsQ0FBQ1ksVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBRSwwQkFEUyxFQUFmOztBQUdBLEtBM0RPO0FBNERSZSxvQkE1RFEsOEJBNERXO0FBQ2xCNUIsU0FBRyxDQUFDWSxVQUFKLENBQWU7QUFDZEMsV0FBRyxFQUFFLDBCQURTLEVBQWY7O0FBR0EsS0FoRU8sRUFuQkssRSIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHRpbWU6ICcwMDowMCcsXHJcblx0XHRcdG51bTogMFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHR0aGlzLl94eiA9IG51bGw7XHJcblx0XHR0aGlzLl9oYXMgPSBmYWxzZTtcclxuXHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdHF1ZXJ5XHJcblx0XHRcdC5zZWxlY3QoJyNkb29yJylcclxuXHRcdFx0LmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZGF0YTEgPSAnLCBkYXRhKTtcclxuXHRcdFx0XHR0aGlzLl94eiA9IGRhdGE7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5leGVjKCk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRoYW5kbGVTdGFydCgpIHtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy50aW1lID0gJzIwOjAwJztcclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlQ2xvc2UoKSB7XHJcblx0XHRcdGlmICh0aGlzLnRpbWUgPT0gJzIwOjAwJykge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmk43kvZzmraPnoa7vvIEnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3BhcnQyL3N0ZXA0L3N0ZXA0J1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+aTjeS9nOmUmeivr++8gScsXHJcblx0XHRcdFx0XHRpY29uOiAnZXJyb3InXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRoYW5kbGVKaWEoKSB7XHJcblx0XHRcdHRoaXMubnVtICs9IDE7XHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlSmlhbigpIHtcclxuXHRcdFx0aWYgKHRoaXMubnVtID09IDApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5udW0gLT0gMTtcclxuXHRcdH0sXHJcblx0XHQvLyDnorDmkp7mo4DmtYssIHRhcmdldOebruagh+WdkOaghyBkcmFn5ouW5ou955qE55uu5qCHXHJcblx0XHRjb2xsKGRvbUEsIGRvbUIsIGNhbGxiYWNrKSB7XHJcblx0XHRcdGlmIChkb21BLmxlZnQgPiBkb21CLnJpZ2h0IHx8IGRvbUEudG9wID4gZG9tQi5ib3R0b20gfHwgZG9tQS5yaWdodCA8IGRvbUIubGVmdCB8fCBkb21BLmJvdHRvbSA8IGRvbUIudG9wKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyDmnKrnorDmkp5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIueisOaSni4uLi5cIilcclxuXHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlOyAvLyDnorDmkp5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0cXVlcnlcclxuXHRcdFx0XHQuc2VsZWN0KCcjeHonKVxyXG5cdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNvbGwodGhpcy5feHosIGRhdGEsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLl9oYXMpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLl9oYXMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnorDmkp7kuoYuLicpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5leGVjKCk7XHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlTGVmdENsaWNrKCkge1xyXG5cdFx0XHQvLyB1bmkubmF2aWdhdGVCYWNrKCk7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvcGFydDIvc3RlcDIvc3RlcDInXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGhhbmRsZVJpZ2h0Q2xpY2soKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvcGFydDIvc3RlcDQvc3RlcDQnXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step4/step4.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step4_vue_vue_type_template_id_e7cd7990_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step4.vue?vue&type=template&id=e7cd7990&scoped=true&mpType=page */ 39);\n/* harmony import */ var _step4_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step4.vue?vue&type=script&lang=js&mpType=page */ 42);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step4_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step4_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step4_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step4_vue_vue_type_template_id_e7cd7990_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step4_vue_vue_type_template_id_e7cd7990_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e7cd7990\",\n  null,\n  false,\n  _step4_vue_vue_type_template_id_e7cd7990_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part2/step4/step4.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0ZXA0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lN2NkNzk5MCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RlcDQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N0ZXA0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTdjZDc5OTBcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDIvc3RlcDQvc3RlcDQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!**************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step4/step4.vue?vue&type=template&id=e7cd7990&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step4_vue_vue_type_template_id_e7cd7990_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step4.vue?vue&type=template&id=e7cd7990&scoped=true&mpType=page */ 40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step4_vue_vue_type_template_id_e7cd7990_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step4_vue_vue_type_template_id_e7cd7990_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step4_vue_vue_type_template_id_e7cd7990_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step4_vue_vue_type_template_id_e7cd7990_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 40 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step4/step4.vue?vue&type=template&id=e7cd7990&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("movable-area", [
        _c(
          "movable-view",
          {
            staticClass: _vm._$s(2, "sc", "hzBox"),
            attrs: { _i: 2 },
            on: { change: _vm.onChange }
          },
          [
            _c("image", {
              staticClass: _vm._$s(3, "sc", "hz"),
              attrs: {
                id: "hz",
                src: _vm._$s(3, "a-src", __webpack_require__(/*! ../../../static/p2/xz.png */ 18)),
                _i: 3
              }
            })
          ]
        ),
        _c("image", {
          staticClass: _vm._$s(4, "sc", "door3"),
          attrs: {
            id: "door3",
            src: _vm._$s(4, "a-src", __webpack_require__(/*! ../../../static/p2/door3.png */ 41)),
            _i: 4
          }
        })
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "navBox"), attrs: { _i: 5 } },
        [
          _c("image", {
            staticClass: _vm._$s(6, "sc", "pre"),
            attrs: {
              src: _vm._$s(
                6,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowLeft.png */ 20)
              ),
              _i: 6
            },
            on: { click: _vm.handleLeftClick }
          }),
          _c("image", {
            staticClass: _vm._$s(7, "sc", "next"),
            attrs: {
              src: _vm._$s(
                7,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowRight.png */ 21)
              ),
              _i: 7
            },
            on: { click: _vm.handleRightClick }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 41 */
/*!************************************************!*\
  !*** E:/progject/归档/drag2/static/p2/door3.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/door3.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvZG9vcjMucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step4/step4.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step4_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step4.vue?vue&type=script&lang=js&mpType=page */ 43);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step4_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step4_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step4_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step4_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step4_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXA0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGVwNC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step4/step4.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      time: '00:00' };\n\n  },\n  mounted: function mounted() {var _this = this;\n    this._xz = null;\n    this._has = false;\n    // 查询元素的坐标位置\n    var query = uni.createSelectorQuery().in(this);\n    query.\n    select('#door3').\n    boundingClientRect(function (data) {\n      __f__(\"log\", 'data1 = ', data, \" at pages/part2/step4/step4.vue:55\");\n      _this._xz = data;\n    }).\n    exec();\n  },\n  methods: {\n    // 碰撞检测, target目标坐标 drag拖拽的目标\n    coll: function coll(domA, domB, callback) {\n      if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {\n        // console.log(\"未碰撞\")\n        callback();\n        return false; // 未碰撞\n      } else {\n        // console.log(\"碰撞....\")\n        return true; // 碰撞\n      }\n    },\n    onChange: function onChange(e) {var _this2 = this;\n      // console.log(\"移动了...\")\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#hz').\n      boundingClientRect(function (data) {\n        _this2.coll(_this2._xz, data, function () {\n          if (!_this2._has) {\n            _this2._has = true;\n            __f__(\"log\", '移出了门...', \" at pages/part2/step4/step4.vue:81\");\n            uni.navigateTo({\n              url: '/pages/part2/step5/step5' });\n\n          }\n        });\n      }).\n      exec();\n    },\n    handleLeftClick: function handleLeftClick() {\n      // uni.navigateBack();\n      uni.navigateTo({\n        url: '/pages/part2/step3/step3' });\n\n    },\n    handleRightClick: function handleRightClick() {\n      uni.navigateTo({\n        url: '/pages/part2/step5/step5' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDIvc3RlcDQvc3RlcDQudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ0aW1lIiwibW91bnRlZCIsIl94eiIsIl9oYXMiLCJxdWVyeSIsInVuaSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpbiIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImV4ZWMiLCJtZXRob2RzIiwiY29sbCIsImRvbUEiLCJkb21CIiwiY2FsbGJhY2siLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJvbkNoYW5nZSIsImUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlTGVmdENsaWNrIiwiaGFuZGxlUmlnaHRDbGljayJdLCJtYXBwaW5ncyI6InFJQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNkQSxNQURjLGtCQUNQO0FBQ04sV0FBTztBQUNOQyxVQUFJLEVBQUUsT0FEQSxFQUFQOztBQUdBLEdBTGE7QUFNZEMsU0FOYyxxQkFNSjtBQUNULFNBQUtDLEdBQUwsR0FBVyxJQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQTtBQUNBLFFBQU1DLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixHQUEwQkMsRUFBMUIsQ0FBNkIsSUFBN0IsQ0FBZDtBQUNBSCxTQUFLO0FBQ0hJLFVBREYsQ0FDUyxRQURUO0FBRUVDLHNCQUZGLENBRXFCLFVBQUFWLElBQUksRUFBSTtBQUMzQixtQkFBWSxVQUFaLEVBQXdCQSxJQUF4QjtBQUNBLFdBQUksQ0FBQ0csR0FBTCxHQUFXSCxJQUFYO0FBQ0EsS0FMRjtBQU1FVyxRQU5GO0FBT0EsR0FsQmE7QUFtQmRDLFNBQU8sRUFBRTtBQUNSO0FBQ0FDLFFBRlEsZ0JBRUhDLElBRkcsRUFFR0MsSUFGSCxFQUVTQyxRQUZULEVBRW1CO0FBQzFCLFVBQUlGLElBQUksQ0FBQ0csSUFBTCxHQUFZRixJQUFJLENBQUNHLEtBQWpCLElBQTBCSixJQUFJLENBQUNLLEdBQUwsR0FBV0osSUFBSSxDQUFDSyxNQUExQyxJQUFvRE4sSUFBSSxDQUFDSSxLQUFMLEdBQWFILElBQUksQ0FBQ0UsSUFBdEUsSUFBOEVILElBQUksQ0FBQ00sTUFBTCxHQUFjTCxJQUFJLENBQUNJLEdBQXJHLEVBQTBHO0FBQ3pHO0FBQ0FILGdCQUFRO0FBQ1IsZUFBTyxLQUFQLENBSHlHLENBRzNGO0FBQ2QsT0FKRCxNQUlPO0FBQ047QUFDQSxlQUFPLElBQVAsQ0FGTSxDQUVPO0FBQ2I7QUFDRCxLQVhPO0FBWVJLLFlBQVEsRUFBRSxrQkFBU0MsQ0FBVCxFQUFZO0FBQ3JCO0FBQ0EsVUFBTWpCLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixHQUEwQkMsRUFBMUIsQ0FBNkIsSUFBN0IsQ0FBZDtBQUNBSCxXQUFLO0FBQ0hJLFlBREYsQ0FDUyxLQURUO0FBRUVDLHdCQUZGLENBRXFCLFVBQUFWLElBQUksRUFBSTtBQUMzQixjQUFJLENBQUNhLElBQUwsQ0FBVSxNQUFJLENBQUNWLEdBQWYsRUFBb0JILElBQXBCLEVBQTBCLFlBQU07QUFDL0IsY0FBSSxDQUFDLE1BQUksQ0FBQ0ksSUFBVixFQUFnQjtBQUNmLGtCQUFJLENBQUNBLElBQUwsR0FBWSxJQUFaO0FBQ0EseUJBQVksU0FBWjtBQUNBRSxlQUFHLENBQUNpQixVQUFKLENBQWU7QUFDZEMsaUJBQUcsRUFBRSwwQkFEUyxFQUFmOztBQUdBO0FBQ0QsU0FSRDtBQVNBLE9BWkY7QUFhRWIsVUFiRjtBQWNBLEtBN0JPO0FBOEJSYyxtQkE5QlEsNkJBOEJVO0FBQ2pCO0FBQ0FuQixTQUFHLENBQUNpQixVQUFKLENBQWU7QUFDZEMsV0FBRyxFQUFFLDBCQURTLEVBQWY7O0FBR0EsS0FuQ087QUFvQ1JFLG9CQXBDUSw4QkFvQ1c7QUFDbEJwQixTQUFHLENBQUNpQixVQUFKLENBQWU7QUFDZEMsV0FBRyxFQUFFLDBCQURTLEVBQWY7O0FBR0EsS0F4Q08sRUFuQkssRSIsImZpbGUiOiI0My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHRpbWU6ICcwMDowMCdcclxuXHRcdH07XHJcblx0fSxcclxuXHRtb3VudGVkKCkge1xyXG5cdFx0dGhpcy5feHogPSBudWxsO1xyXG5cdFx0dGhpcy5faGFzID0gZmFsc2U7XHJcblx0XHQvLyDmn6Xor6LlhYPntKDnmoTlnZDmoIfkvY3nva5cclxuXHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdHF1ZXJ5XHJcblx0XHRcdC5zZWxlY3QoJyNkb29yMycpXHJcblx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2RhdGExID0gJywgZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5feHogPSBkYXRhO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuZXhlYygpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly8g56Kw5pKe5qOA5rWLLCB0YXJnZXTnm67moIflnZDmoIcgZHJhZ+aLluaLveeahOebruagh1xyXG5cdFx0Y29sbChkb21BLCBkb21CLCBjYWxsYmFjaykge1xyXG5cdFx0XHRpZiAoZG9tQS5sZWZ0ID4gZG9tQi5yaWdodCB8fCBkb21BLnRvcCA+IGRvbUIuYm90dG9tIHx8IGRvbUEucmlnaHQgPCBkb21CLmxlZnQgfHwgZG9tQS5ib3R0b20gPCBkb21CLnRvcCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi5pyq56Kw5pKeXCIpXHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIOacqueisOaSnlxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi56Kw5pKeLi4uLlwiKVxyXG5cdFx0XHRcdHJldHVybiB0cnVlOyAvLyDnorDmkp5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwi56e75Yqo5LqGLi4uXCIpXHJcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0cXVlcnlcclxuXHRcdFx0XHQuc2VsZWN0KCcjaHonKVxyXG5cdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNvbGwodGhpcy5feHosIGRhdGEsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLl9oYXMpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLl9oYXMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnp7vlh7rkuobpl6guLi4nKTtcclxuXHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvcGFydDIvc3RlcDUvc3RlcDUnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuZXhlYygpO1xyXG5cdFx0fSxcclxuXHRcdGhhbmRsZUxlZnRDbGljaygpIHtcclxuXHRcdFx0Ly8gdW5pLm5hdmlnYXRlQmFjaygpO1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL3BhcnQyL3N0ZXAzL3N0ZXAzJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVSaWdodENsaWNrKCkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL3BhcnQyL3N0ZXA1L3N0ZXA1J1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHR9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step5/step5.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step5_vue_vue_type_template_id_26f4ba7a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step5.vue?vue&type=template&id=26f4ba7a&scoped=true&mpType=page */ 45);\n/* harmony import */ var _step5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step5.vue?vue&type=script&lang=js&mpType=page */ 49);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step5_vue_vue_type_template_id_26f4ba7a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step5_vue_vue_type_template_id_26f4ba7a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"26f4ba7a\",\n  null,\n  false,\n  _step5_vue_vue_type_template_id_26f4ba7a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part2/step5/step5.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0ZXA1LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNmY0YmE3YSZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RlcDUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N0ZXA1LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjZmNGJhN2FcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDIvc3RlcDUvc3RlcDUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */
/*!**************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step5/step5.vue?vue&type=template&id=26f4ba7a&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step5_vue_vue_type_template_id_26f4ba7a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step5.vue?vue&type=template&id=26f4ba7a&scoped=true&mpType=page */ 46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step5_vue_vue_type_template_id_26f4ba7a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step5_vue_vue_type_template_id_26f4ba7a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step5_vue_vue_type_template_id_26f4ba7a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step5_vue_vue_type_template_id_26f4ba7a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 46 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step5/step5.vue?vue&type=template&id=26f4ba7a&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "tit"), attrs: { _i: 1 } }),
      _c("image", {
        staticClass: _vm._$s(2, "sc", "czt1"),
        attrs: {
          src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../../static/p2/czt1.png */ 47)),
          _i: 2
        },
        on: { click: _vm.clickCzt1 }
      }),
      _c("image", {
        staticClass: _vm._$s(3, "sc", "czt2"),
        attrs: {
          src: _vm._$s(3, "a-src", __webpack_require__(/*! ../../../static/p2/czt2.png */ 48)),
          _i: 3
        },
        on: { click: _vm.clickCzt2 }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(4, "sc", "navBox"), attrs: { _i: 4 } },
        [
          _c("image", {
            staticClass: _vm._$s(5, "sc", "pre"),
            attrs: {
              src: _vm._$s(
                5,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowLeft.png */ 20)
              ),
              _i: 5
            },
            on: { click: _vm.handleLeftClick }
          }),
          _c("image", {
            staticClass: _vm._$s(6, "sc", "next"),
            attrs: {
              src: _vm._$s(
                6,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowRight.png */ 21)
              ),
              _i: 6
            },
            on: { click: _vm.handleRightClick }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 47 */
/*!***********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/czt1.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/czt1.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvY3p0MS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///47\n");

/***/ }),
/* 48 */
/*!***********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/czt2.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/czt2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjQ4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvY3p0Mi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step5/step5.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step5.vue?vue&type=script&lang=js&mpType=page */ 50);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI0OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXA1LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGVwNS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///49\n");

/***/ }),
/* 50 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step5/step5.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      time: '00:00' };\n\n  },\n  mounted: function mounted() {var _this = this;\n    this._xz = null;\n    this._has = false;\n    // 查询元素的坐标位置\n    var query = uni.createSelectorQuery().in(this);\n    query.\n    select('#door3').\n    boundingClientRect(function (data) {\n      __f__(\"log\", 'data1 = ', data, \" at pages/part2/step5/step5.vue:28\");\n      _this._xz = data;\n    }).\n    exec();\n  },\n  methods: {\n    // 碰撞检测, target目标坐标 drag拖拽的目标\n    coll: function coll(domA, domB, callback) {\n      if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {\n        // console.log(\"未碰撞\")\n        callback();\n        return false; // 未碰撞\n      } else {\n        // console.log(\"碰撞....\")\n        return true; // 碰撞\n      }\n    },\n    onChange: function onChange(e) {var _this2 = this;\n      // console.log(\"移动了...\")\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#hz').\n      boundingClientRect(function (data) {\n        _this2.coll(_this2._xz, data, function () {\n          if (!_this2._has) {\n            _this2._has = true;\n            __f__(\"log\", '移出了门...', \" at pages/part2/step5/step5.vue:54\");\n          }\n        });\n      }).\n      exec();\n    },\n    clickCzt1: function clickCzt1() {\n      uni.showToast({\n        title: '操作正确！' });\n\n      uni.navigateTo({\n        url: '/pages/part2/step6/step6' });\n\n    },\n    clickCzt2: function clickCzt2() {\n      uni.showToast({\n        title: '操作错误！',\n        icon: 'error' });\n\n    },\n    handleLeftClick: function handleLeftClick() {\n      // uni.navigateBack();\n      uni.navigateTo({\n        url: '/pages/part2/step4/step4' });\n\n    },\n    handleRightClick: function handleRightClick() {\n      uni.navigateTo({\n        url: '/pages/part2/step6/step6' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDIvc3RlcDUvc3RlcDUudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ0aW1lIiwibW91bnRlZCIsIl94eiIsIl9oYXMiLCJxdWVyeSIsInVuaSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpbiIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImV4ZWMiLCJtZXRob2RzIiwiY29sbCIsImRvbUEiLCJkb21CIiwiY2FsbGJhY2siLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJvbkNoYW5nZSIsImUiLCJjbGlja0N6dDEiLCJzaG93VG9hc3QiLCJ0aXRsZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjbGlja0N6dDIiLCJpY29uIiwiaGFuZGxlTGVmdENsaWNrIiwiaGFuZGxlUmlnaHRDbGljayJdLCJtYXBwaW5ncyI6InFJQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNkQSxNQURjLGtCQUNQO0FBQ04sV0FBTztBQUNOQyxVQUFJLEVBQUUsT0FEQSxFQUFQOztBQUdBLEdBTGE7QUFNZEMsU0FOYyxxQkFNSjtBQUNULFNBQUtDLEdBQUwsR0FBVyxJQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQTtBQUNBLFFBQU1DLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixHQUEwQkMsRUFBMUIsQ0FBNkIsSUFBN0IsQ0FBZDtBQUNBSCxTQUFLO0FBQ0hJLFVBREYsQ0FDUyxRQURUO0FBRUVDLHNCQUZGLENBRXFCLFVBQUFWLElBQUksRUFBSTtBQUMzQixtQkFBWSxVQUFaLEVBQXdCQSxJQUF4QjtBQUNBLFdBQUksQ0FBQ0csR0FBTCxHQUFXSCxJQUFYO0FBQ0EsS0FMRjtBQU1FVyxRQU5GO0FBT0EsR0FsQmE7QUFtQmRDLFNBQU8sRUFBRTtBQUNSO0FBQ0FDLFFBRlEsZ0JBRUhDLElBRkcsRUFFR0MsSUFGSCxFQUVTQyxRQUZULEVBRW1CO0FBQzFCLFVBQUlGLElBQUksQ0FBQ0csSUFBTCxHQUFZRixJQUFJLENBQUNHLEtBQWpCLElBQTBCSixJQUFJLENBQUNLLEdBQUwsR0FBV0osSUFBSSxDQUFDSyxNQUExQyxJQUFvRE4sSUFBSSxDQUFDSSxLQUFMLEdBQWFILElBQUksQ0FBQ0UsSUFBdEUsSUFBOEVILElBQUksQ0FBQ00sTUFBTCxHQUFjTCxJQUFJLENBQUNJLEdBQXJHLEVBQTBHO0FBQ3pHO0FBQ0FILGdCQUFRO0FBQ1IsZUFBTyxLQUFQLENBSHlHLENBRzNGO0FBQ2QsT0FKRCxNQUlPO0FBQ047QUFDQSxlQUFPLElBQVAsQ0FGTSxDQUVPO0FBQ2I7QUFDRCxLQVhPO0FBWVJLLFlBQVEsRUFBRSxrQkFBU0MsQ0FBVCxFQUFZO0FBQ3JCO0FBQ0EsVUFBTWpCLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixHQUEwQkMsRUFBMUIsQ0FBNkIsSUFBN0IsQ0FBZDtBQUNBSCxXQUFLO0FBQ0hJLFlBREYsQ0FDUyxLQURUO0FBRUVDLHdCQUZGLENBRXFCLFVBQUFWLElBQUksRUFBSTtBQUMzQixjQUFJLENBQUNhLElBQUwsQ0FBVSxNQUFJLENBQUNWLEdBQWYsRUFBb0JILElBQXBCLEVBQTBCLFlBQU07QUFDL0IsY0FBSSxDQUFDLE1BQUksQ0FBQ0ksSUFBVixFQUFnQjtBQUNmLGtCQUFJLENBQUNBLElBQUwsR0FBWSxJQUFaO0FBQ0EseUJBQVksU0FBWjtBQUNBO0FBQ0QsU0FMRDtBQU1BLE9BVEY7QUFVRU8sVUFWRjtBQVdBLEtBMUJPO0FBMkJSWSxhQTNCUSx1QkEyQkk7QUFDWGpCLFNBQUcsQ0FBQ2tCLFNBQUosQ0FBYztBQUNiQyxhQUFLLEVBQUUsT0FETSxFQUFkOztBQUdBbkIsU0FBRyxDQUFDb0IsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBRSwwQkFEUyxFQUFmOztBQUdBLEtBbENPO0FBbUNSQyxhQW5DUSx1QkFtQ0k7QUFDWHRCLFNBQUcsQ0FBQ2tCLFNBQUosQ0FBYztBQUNiQyxhQUFLLEVBQUUsT0FETTtBQUViSSxZQUFJLEVBQUUsT0FGTyxFQUFkOztBQUlBLEtBeENPO0FBeUNSQyxtQkF6Q1EsNkJBeUNVO0FBQ2pCO0FBQ0F4QixTQUFHLENBQUNvQixVQUFKLENBQWU7QUFDZEMsV0FBRyxFQUFFLDBCQURTLEVBQWY7O0FBR0EsS0E5Q087QUErQ1JJLG9CQS9DUSw4QkErQ1c7QUFDbEJ6QixTQUFHLENBQUNvQixVQUFKLENBQWU7QUFDZEMsV0FBRyxFQUFFLDBCQURTLEVBQWY7O0FBR0EsS0FuRE8sRUFuQkssRSIsImZpbGUiOiI1MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHRpbWU6ICcwMDowMCdcclxuXHRcdH07XHJcblx0fSxcclxuXHRtb3VudGVkKCkge1xyXG5cdFx0dGhpcy5feHogPSBudWxsO1xyXG5cdFx0dGhpcy5faGFzID0gZmFsc2U7XHJcblx0XHQvLyDmn6Xor6LlhYPntKDnmoTlnZDmoIfkvY3nva5cclxuXHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdHF1ZXJ5XHJcblx0XHRcdC5zZWxlY3QoJyNkb29yMycpXHJcblx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2RhdGExID0gJywgZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5feHogPSBkYXRhO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuZXhlYygpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly8g56Kw5pKe5qOA5rWLLCB0YXJnZXTnm67moIflnZDmoIcgZHJhZ+aLluaLveeahOebruagh1xyXG5cdFx0Y29sbChkb21BLCBkb21CLCBjYWxsYmFjaykge1xyXG5cdFx0XHRpZiAoZG9tQS5sZWZ0ID4gZG9tQi5yaWdodCB8fCBkb21BLnRvcCA+IGRvbUIuYm90dG9tIHx8IGRvbUEucmlnaHQgPCBkb21CLmxlZnQgfHwgZG9tQS5ib3R0b20gPCBkb21CLnRvcCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi5pyq56Kw5pKeXCIpXHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIOacqueisOaSnlxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi56Kw5pKeLi4uLlwiKVxyXG5cdFx0XHRcdHJldHVybiB0cnVlOyAvLyDnorDmkp5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwi56e75Yqo5LqGLi4uXCIpXHJcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0cXVlcnlcclxuXHRcdFx0XHQuc2VsZWN0KCcjaHonKVxyXG5cdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNvbGwodGhpcy5feHosIGRhdGEsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLl9oYXMpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLl9oYXMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnp7vlh7rkuobpl6guLi4nKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuZXhlYygpO1xyXG5cdFx0fSxcclxuXHRcdGNsaWNrQ3p0MSgpIHtcclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0dGl0bGU6ICfmk43kvZzmraPnoa7vvIEnXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL3BhcnQyL3N0ZXA2L3N0ZXA2J1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRjbGlja0N6dDIoKSB7XHJcblx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdHRpdGxlOiAn5pON5L2c6ZSZ6K+v77yBJyxcclxuXHRcdFx0XHRpY29uOiAnZXJyb3InXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGhhbmRsZUxlZnRDbGljaygpIHtcclxuXHRcdFx0Ly8gdW5pLm5hdmlnYXRlQmFjaygpO1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL3BhcnQyL3N0ZXA0L3N0ZXA0J1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVSaWdodENsaWNrKCkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL3BhcnQyL3N0ZXA2L3N0ZXA2J1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///50\n");

/***/ }),
/* 51 */
/*!********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step6/step6.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step6_vue_vue_type_template_id_7c5f9c88_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step6.vue?vue&type=template&id=7c5f9c88&scoped=true&mpType=page */ 52);\n/* harmony import */ var _step6_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step6.vue?vue&type=script&lang=js&mpType=page */ 56);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step6_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step6_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step6_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step6_vue_vue_type_template_id_7c5f9c88_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step6_vue_vue_type_template_id_7c5f9c88_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7c5f9c88\",\n  null,\n  false,\n  _step6_vue_vue_type_template_id_7c5f9c88_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part2/step6/step6.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0ZXA2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzVmOWM4OCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RlcDYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N0ZXA2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2M1ZjljODhcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDIvc3RlcDYvc3RlcDYudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!**************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step6/step6.vue?vue&type=template&id=7c5f9c88&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step6_vue_vue_type_template_id_7c5f9c88_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step6.vue?vue&type=template&id=7c5f9c88&scoped=true&mpType=page */ 53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step6_vue_vue_type_template_id_7c5f9c88_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step6_vue_vue_type_template_id_7c5f9c88_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step6_vue_vue_type_template_id_7c5f9c88_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step6_vue_vue_type_template_id_7c5f9c88_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 53 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step6/step6.vue?vue&type=template&id=7c5f9c88&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("movable-area", [
        _c("image", {
          staticClass: _vm._$s(2, "sc", "xz"),
          attrs: {
            id: "xz",
            src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../../static/p2/xz.png */ 18)),
            _i: 2
          }
        }),
        _c(
          "movable-view",
          {
            staticClass: _vm._$s(3, "sc", "pzBox"),
            attrs: { _i: 3 },
            on: { change: _vm.onChange }
          },
          [
            _vm._$s(4, "i", !_vm.showSsd)
              ? _c("image", {
                  staticClass: _vm._$s(4, "sc", "pz"),
                  attrs: {
                    id: "pz",
                    src: _vm._$s(
                      4,
                      "a-src",
                      __webpack_require__(/*! ../../../static/p2/ssdhz.png */ 54)
                    ),
                    _i: 4
                  },
                  on: {
                    click: function($event) {
                      _vm.showSsd = true
                    }
                  }
                })
              : _vm._e(),
            _vm._$s(5, "i", _vm.showSsd)
              ? _c("image", {
                  staticClass: _vm._$s(5, "sc", "ssd"),
                  attrs: {
                    id: "ssd",
                    src: _vm._$s(
                      5,
                      "a-src",
                      __webpack_require__(/*! ../../../static/p2/ssd.png */ 55)
                    ),
                    _i: 5
                  }
                })
              : _vm._e()
          ]
        )
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(6, "sc", "navBox"), attrs: { _i: 6 } },
        [
          _c("image", {
            staticClass: _vm._$s(7, "sc", "pre"),
            attrs: {
              src: _vm._$s(
                7,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowLeft.png */ 20)
              ),
              _i: 7
            },
            on: { click: _vm.handleLeftClick }
          }),
          _c("image", {
            staticClass: _vm._$s(8, "sc", "next"),
            attrs: {
              src: _vm._$s(
                8,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowRight.png */ 21)
              ),
              _i: 8
            },
            on: { click: _vm.handleRightClick }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 54 */
/*!************************************************!*\
  !*** E:/progject/归档/drag2/static/p2/ssdhz.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/ssdhz.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjU0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvc3NkaHoucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///54\n");

/***/ }),
/* 55 */
/*!**********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/ssd.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/ssd.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvc3NkLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///55\n");

/***/ }),
/* 56 */
/*!********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step6/step6.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step6_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step6.vue?vue&type=script&lang=js&mpType=page */ 57);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step6_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step6_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step6_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step6_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step6_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXA2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGVwNi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step6/step6.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      showSsd: false };\n\n  },\n  mounted: function mounted() {var _this = this;\n    this._s1 = false;\n    this._s2 = false;\n    this._last = null;\n    this._xz = null;\n    this._has = false;\n    var query = uni.createSelectorQuery().in(this);\n    query.\n    select('#xz').\n    boundingClientRect(function (data) {\n      __f__(\"log\", 'data1 = ', data, \" at pages/part2/step6/step6.vue:35\");\n      _this._xz = data;\n    }).\n    exec();\n  },\n  methods: {\n    // 碰撞检测, target目标坐标 drag拖拽的目标\n    coll: function coll(domA, domB, callback) {\n      callback();\n      if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {\n        if (domA.right < domB.left && this._s2) {\n          this._s1 = true;\n        }\n        return false; // 未碰撞\n      } else {\n        // console.log(\"碰撞....\")\n        if (domB.left > domA.left) {\n          this._s2 = true;\n        }\n        return true; // 碰撞\n      }\n    },\n    onChange: function onChange(e) {var _this2 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#ssd').\n      boundingClientRect(function (data) {\n        _this2.coll(_this2._xz, data, function () {\n          if (!_this2._has) {\n            if (_this2._s1 && _this2._s2) {\n              _this2._has = true;\n              __f__(\"log\", '切割成功！', \" at pages/part2/step6/step6.vue:66\");\n              uni.navigateTo({\n                url: '/pages/part2/step7/step7' });\n\n            }\n          }\n        });\n      }).\n      exec();\n    },\n    handleLeftClick: function handleLeftClick() {\n      // uni.navigateBack();\n      uni.navigateTo({\n        url: '/pages/part2/step5/step5' });\n\n    },\n    handleRightClick: function handleRightClick() {\n      uni.navigateTo({\n        url: '/pages/part2/step7/step7' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDIvc3RlcDYvc3RlcDYudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJzaG93U3NkIiwibW91bnRlZCIsIl9zMSIsIl9zMiIsIl9sYXN0IiwiX3h6IiwiX2hhcyIsInF1ZXJ5IiwidW5pIiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZXhlYyIsIm1ldGhvZHMiLCJjb2xsIiwiZG9tQSIsImRvbUIiLCJjYWxsYmFjayIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIm9uQ2hhbmdlIiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVMZWZ0Q2xpY2siLCJoYW5kbGVSaWdodENsaWNrIl0sIm1hcHBpbmdzIjoicUlBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNkQSxNQURjLGtCQUNQO0FBQ04sV0FBTztBQUNOQyxhQUFPLEVBQUUsS0FESCxFQUFQOztBQUdBLEdBTGE7QUFNZEMsU0FOYyxxQkFNSjtBQUNULFNBQUtDLEdBQUwsR0FBVyxLQUFYO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQVg7QUFDQSxTQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxJQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLEdBQUcsQ0FBQ0MsbUJBQUosR0FBMEJDLEVBQTFCLENBQTZCLElBQTdCLENBQWQ7QUFDQUgsU0FBSztBQUNISSxVQURGLENBQ1MsS0FEVDtBQUVFQyxzQkFGRixDQUVxQixVQUFBYixJQUFJLEVBQUk7QUFDM0IsbUJBQVksVUFBWixFQUF3QkEsSUFBeEI7QUFDQSxXQUFJLENBQUNNLEdBQUwsR0FBV04sSUFBWDtBQUNBLEtBTEY7QUFNRWMsUUFORjtBQU9BLEdBcEJhO0FBcUJkQyxTQUFPLEVBQUU7QUFDUjtBQUNBQyxRQUZRLGdCQUVIQyxJQUZHLEVBRUdDLElBRkgsRUFFU0MsUUFGVCxFQUVtQjtBQUMxQkEsY0FBUTtBQUNSLFVBQUlGLElBQUksQ0FBQ0csSUFBTCxHQUFZRixJQUFJLENBQUNHLEtBQWpCLElBQTBCSixJQUFJLENBQUNLLEdBQUwsR0FBV0osSUFBSSxDQUFDSyxNQUExQyxJQUFvRE4sSUFBSSxDQUFDSSxLQUFMLEdBQWFILElBQUksQ0FBQ0UsSUFBdEUsSUFBOEVILElBQUksQ0FBQ00sTUFBTCxHQUFjTCxJQUFJLENBQUNJLEdBQXJHLEVBQTBHO0FBQ3pHLFlBQUlMLElBQUksQ0FBQ0ksS0FBTCxHQUFhSCxJQUFJLENBQUNFLElBQWxCLElBQTBCLEtBQUtoQixHQUFuQyxFQUF3QztBQUN2QyxlQUFLRCxHQUFMLEdBQVcsSUFBWDtBQUNBO0FBQ0QsZUFBTyxLQUFQLENBSnlHLENBSTNGO0FBQ2QsT0FMRCxNQUtPO0FBQ047QUFDQSxZQUFJZSxJQUFJLENBQUNFLElBQUwsR0FBWUgsSUFBSSxDQUFDRyxJQUFyQixFQUEyQjtBQUMxQixlQUFLaEIsR0FBTCxHQUFXLElBQVg7QUFDQTtBQUNELGVBQU8sSUFBUCxDQUxNLENBS087QUFDYjtBQUNELEtBaEJPO0FBaUJSb0IsWUFBUSxFQUFFLGtCQUFTQyxDQUFULEVBQVk7QUFDckIsVUFBTWpCLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixHQUEwQkMsRUFBMUIsQ0FBNkIsSUFBN0IsQ0FBZDtBQUNBSCxXQUFLO0FBQ0hJLFlBREYsQ0FDUyxNQURUO0FBRUVDLHdCQUZGLENBRXFCLFVBQUFiLElBQUksRUFBSTtBQUMzQixjQUFJLENBQUNnQixJQUFMLENBQVUsTUFBSSxDQUFDVixHQUFmLEVBQW9CTixJQUFwQixFQUEwQixZQUFNO0FBQy9CLGNBQUksQ0FBQyxNQUFJLENBQUNPLElBQVYsRUFBZ0I7QUFDZixnQkFBSSxNQUFJLENBQUNKLEdBQUwsSUFBWSxNQUFJLENBQUNDLEdBQXJCLEVBQTBCO0FBQ3pCLG9CQUFJLENBQUNHLElBQUwsR0FBWSxJQUFaO0FBQ0EsMkJBQVksT0FBWjtBQUNBRSxpQkFBRyxDQUFDaUIsVUFBSixDQUFlO0FBQ2RDLG1CQUFHLEVBQUUsMEJBRFMsRUFBZjs7QUFHQTtBQUNEO0FBQ0QsU0FWRDtBQVdBLE9BZEY7QUFlRWIsVUFmRjtBQWdCQSxLQW5DTztBQW9DUmMsbUJBcENRLDZCQW9DVTtBQUNqQjtBQUNBbkIsU0FBRyxDQUFDaUIsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBRSwwQkFEUyxFQUFmOztBQUdBLEtBekNPO0FBMENSRSxvQkExQ1EsOEJBMENXO0FBQ2xCcEIsU0FBRyxDQUFDaUIsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBRSwwQkFEUyxFQUFmOztBQUdBLEtBOUNPLEVBckJLLEUiLCJmaWxlIjoiNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRzaG93U3NkOiBmYWxzZVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHR0aGlzLl9zMSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5fczIgPSBmYWxzZTtcclxuXHRcdHRoaXMuX2xhc3QgPSBudWxsO1xyXG5cdFx0dGhpcy5feHogPSBudWxsO1xyXG5cdFx0dGhpcy5faGFzID0gZmFsc2U7XHJcblx0XHRjb25zdCBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcblx0XHRxdWVyeVxyXG5cdFx0XHQuc2VsZWN0KCcjeHonKVxyXG5cdFx0XHQuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkYXRhMSA9ICcsIGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMuX3h6ID0gZGF0YTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmV4ZWMoKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8vIOeisOaSnuajgOa1iywgdGFyZ2V055uu5qCH5Z2Q5qCHIGRyYWfmi5bmi73nmoTnm67moIdcclxuXHRcdGNvbGwoZG9tQSwgZG9tQiwgY2FsbGJhY2spIHtcclxuXHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0aWYgKGRvbUEubGVmdCA+IGRvbUIucmlnaHQgfHwgZG9tQS50b3AgPiBkb21CLmJvdHRvbSB8fCBkb21BLnJpZ2h0IDwgZG9tQi5sZWZ0IHx8IGRvbUEuYm90dG9tIDwgZG9tQi50b3ApIHtcclxuXHRcdFx0XHRpZiAoZG9tQS5yaWdodCA8IGRvbUIubGVmdCAmJiB0aGlzLl9zMikge1xyXG5cdFx0XHRcdFx0dGhpcy5fczEgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIOacqueisOaSnlxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi56Kw5pKeLi4uLlwiKVxyXG5cdFx0XHRcdGlmIChkb21CLmxlZnQgPiBkb21BLmxlZnQpIHtcclxuXHRcdFx0XHRcdHRoaXMuX3MyID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7IC8vIOeisOaSnlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25DaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRxdWVyeVxyXG5cdFx0XHRcdC5zZWxlY3QoJyNzc2QnKVxyXG5cdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNvbGwodGhpcy5feHosIGRhdGEsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLl9oYXMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5fczEgJiYgdGhpcy5fczIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2hhcyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5YiH5Ymy5oiQ5Yqf77yBJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwNy9zdGVwNydcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5leGVjKCk7XHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlTGVmdENsaWNrKCkge1xyXG5cdFx0XHQvLyB1bmkubmF2aWdhdGVCYWNrKCk7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvcGFydDIvc3RlcDUvc3RlcDUnXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlUmlnaHRDbGljaygpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwNy9zdGVwNydcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///57\n");

/***/ }),
/* 58 */
/*!********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step7/step7.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step7_vue_vue_type_template_id_5caba8fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step7.vue?vue&type=template&id=5caba8fe&scoped=true&mpType=page */ 59);\n/* harmony import */ var _step7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step7.vue?vue&type=script&lang=js&mpType=page */ 62);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step7_vue_vue_type_template_id_5caba8fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step7_vue_vue_type_template_id_5caba8fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5caba8fe\",\n  null,\n  false,\n  _step7_vue_vue_type_template_id_5caba8fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part2/step7/step7.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0ZXA3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01Y2FiYThmZSZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RlcDcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N0ZXA3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWNhYmE4ZmVcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDIvc3RlcDcvc3RlcDcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///58\n");

/***/ }),
/* 59 */
/*!**************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step7/step7.vue?vue&type=template&id=5caba8fe&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step7_vue_vue_type_template_id_5caba8fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step7.vue?vue&type=template&id=5caba8fe&scoped=true&mpType=page */ 60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step7_vue_vue_type_template_id_5caba8fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step7_vue_vue_type_template_id_5caba8fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step7_vue_vue_type_template_id_5caba8fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step7_vue_vue_type_template_id_5caba8fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 60 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step7/step7.vue?vue&type=template&id=5caba8fe&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("movable-area", [
        _c("image", {
          staticClass: _vm._$s(2, "sc", "xz"),
          attrs: {
            id: "xz",
            src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../../static/p2/shou.png */ 61)),
            _i: 2
          }
        }),
        _c(
          "movable-view",
          {
            staticClass: _vm._$s(3, "sc", "pzBox"),
            attrs: { _i: 3 },
            on: { change: _vm.onChange }
          },
          [
            _c("image", {
              staticClass: _vm._$s(4, "sc", "pz"),
              attrs: {
                id: "pz",
                src: _vm._$s(4, "a-src", __webpack_require__(/*! ../../../static/p2/pz.png */ 19)),
                _i: 4
              }
            })
          ]
        )
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "navBox"), attrs: { _i: 5 } },
        [
          _c("image", {
            staticClass: _vm._$s(6, "sc", "pre"),
            attrs: {
              src: _vm._$s(
                6,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowLeft.png */ 20)
              ),
              _i: 6
            },
            on: { click: _vm.handleLeftClick }
          }),
          _c("image", {
            staticClass: _vm._$s(7, "sc", "next"),
            attrs: {
              src: _vm._$s(
                7,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowRight.png */ 21)
              ),
              _i: 7
            },
            on: { click: _vm.handleRightClick }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 61 */
/*!***********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/shou.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/shou.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjYxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvc2hvdS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///61\n");

/***/ }),
/* 62 */
/*!********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step7/step7.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step7.vue?vue&type=script&lang=js&mpType=page */ 63);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXA3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGVwNy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///62\n");

/***/ }),
/* 63 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step7/step7.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n  },\n  mounted: function mounted() {var _this = this;\n    this._xz = null;\n    this._has = false;\n    var query = uni.createSelectorQuery().in(this);\n    query.\n    select('#xz').\n    boundingClientRect(function (data) {\n      __f__(\"log\", 'data1 = ', data, \" at pages/part2/step7/step7.vue:27\");\n      _this._xz = data;\n    }).\n    exec();\n  },\n  methods: {\n    // 碰撞检测, target目标坐标 drag拖拽的目标\n    coll: function coll(domA, domB, callback) {\n      if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {\n        return false; // 未碰撞\n      } else {\n        // console.log(\"碰撞....\")\n        callback();\n        return true; // 碰撞\n      }\n    },\n    onChange: function onChange(e) {var _this2 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#pz').\n      boundingClientRect(function (data) {\n        _this2.coll(_this2._xz, data, function () {\n          if (!_this2._has) {\n            _this2._has = true;\n            __f__(\"log\", '碰撞了..', \" at pages/part2/step7/step7.vue:51\");\n            uni.navigateTo({\n              url: '/pages/part2/step8/step8' });\n\n          }\n        });\n      }).\n      exec();\n    },\n    handleLeftClick: function handleLeftClick() {\n      // uni.navigateBack();\n      uni.navigateTo({\n        url: '/pages/part2/step6/step6' });\n\n    },\n    handleRightClick: function handleRightClick() {\n      uni.navigateTo({\n        url: '/pages/part2/step8/step8' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDIvc3RlcDcvc3RlcDcudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtb3VudGVkIiwiX3h6IiwiX2hhcyIsInF1ZXJ5IiwidW5pIiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZXhlYyIsIm1ldGhvZHMiLCJjb2xsIiwiZG9tQSIsImRvbUIiLCJjYWxsYmFjayIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIm9uQ2hhbmdlIiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVMZWZ0Q2xpY2siLCJoYW5kbGVSaWdodENsaWNrIl0sIm1hcHBpbmdzIjoicUlBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNkQSxNQURjLGtCQUNQO0FBQ04sV0FBTyxFQUFQO0FBQ0EsR0FIYTtBQUlkQyxTQUpjLHFCQUlKO0FBQ1QsU0FBS0MsR0FBTCxHQUFXLElBQVg7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNBLFFBQU1DLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixHQUEwQkMsRUFBMUIsQ0FBNkIsSUFBN0IsQ0FBZDtBQUNBSCxTQUFLO0FBQ0hJLFVBREYsQ0FDUyxLQURUO0FBRUVDLHNCQUZGLENBRXFCLFVBQUFULElBQUksRUFBSTtBQUMzQixtQkFBWSxVQUFaLEVBQXdCQSxJQUF4QjtBQUNBLFdBQUksQ0FBQ0UsR0FBTCxHQUFXRixJQUFYO0FBQ0EsS0FMRjtBQU1FVSxRQU5GO0FBT0EsR0FmYTtBQWdCZEMsU0FBTyxFQUFFO0FBQ1I7QUFDQUMsUUFGUSxnQkFFSEMsSUFGRyxFQUVHQyxJQUZILEVBRVNDLFFBRlQsRUFFbUI7QUFDMUIsVUFBSUYsSUFBSSxDQUFDRyxJQUFMLEdBQVlGLElBQUksQ0FBQ0csS0FBakIsSUFBMEJKLElBQUksQ0FBQ0ssR0FBTCxHQUFXSixJQUFJLENBQUNLLE1BQTFDLElBQW9ETixJQUFJLENBQUNJLEtBQUwsR0FBYUgsSUFBSSxDQUFDRSxJQUF0RSxJQUE4RUgsSUFBSSxDQUFDTSxNQUFMLEdBQWNMLElBQUksQ0FBQ0ksR0FBckcsRUFBMEc7QUFDekcsZUFBTyxLQUFQLENBRHlHLENBQzNGO0FBQ2QsT0FGRCxNQUVPO0FBQ047QUFDQUgsZ0JBQVE7QUFDUixlQUFPLElBQVAsQ0FITSxDQUdPO0FBQ2I7QUFDRCxLQVZPO0FBV1JLLFlBQVEsRUFBRSxrQkFBU0MsQ0FBVCxFQUFZO0FBQ3JCLFVBQU1qQixLQUFLLEdBQUdDLEdBQUcsQ0FBQ0MsbUJBQUosR0FBMEJDLEVBQTFCLENBQTZCLElBQTdCLENBQWQ7QUFDQUgsV0FBSztBQUNISSxZQURGLENBQ1MsS0FEVDtBQUVFQyx3QkFGRixDQUVxQixVQUFBVCxJQUFJLEVBQUk7QUFDM0IsY0FBSSxDQUFDWSxJQUFMLENBQVUsTUFBSSxDQUFDVixHQUFmLEVBQW9CRixJQUFwQixFQUEwQixZQUFNO0FBQy9CLGNBQUksQ0FBQyxNQUFJLENBQUNHLElBQVYsRUFBZ0I7QUFDZixrQkFBSSxDQUFDQSxJQUFMLEdBQVksSUFBWjtBQUNBLHlCQUFZLE9BQVo7QUFDQUUsZUFBRyxDQUFDaUIsVUFBSixDQUFlO0FBQ2RDLGlCQUFHLEVBQUUsMEJBRFMsRUFBZjs7QUFHQTtBQUNELFNBUkQ7QUFTQSxPQVpGO0FBYUViLFVBYkY7QUFjQSxLQTNCTztBQTRCUmMsbUJBNUJRLDZCQTRCVTtBQUNqQjtBQUNBbkIsU0FBRyxDQUFDaUIsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBRSwwQkFEUyxFQUFmOztBQUdBLEtBakNPO0FBa0NSRSxvQkFsQ1EsOEJBa0NXO0FBQ2xCcEIsU0FBRyxDQUFDaUIsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBRSwwQkFEUyxFQUFmOztBQUdBLEtBdENPLEVBaEJLLEUiLCJmaWxlIjoiNjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge307XHJcblx0fSxcclxuXHRtb3VudGVkKCkge1xyXG5cdFx0dGhpcy5feHogPSBudWxsO1xyXG5cdFx0dGhpcy5faGFzID0gZmFsc2U7XHJcblx0XHRjb25zdCBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcblx0XHRxdWVyeVxyXG5cdFx0XHQuc2VsZWN0KCcjeHonKVxyXG5cdFx0XHQuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkYXRhMSA9ICcsIGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMuX3h6ID0gZGF0YTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmV4ZWMoKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8vIOeisOaSnuajgOa1iywgdGFyZ2V055uu5qCH5Z2Q5qCHIGRyYWfmi5bmi73nmoTnm67moIdcclxuXHRcdGNvbGwoZG9tQSwgZG9tQiwgY2FsbGJhY2spIHtcclxuXHRcdFx0aWYgKGRvbUEubGVmdCA+IGRvbUIucmlnaHQgfHwgZG9tQS50b3AgPiBkb21CLmJvdHRvbSB8fCBkb21BLnJpZ2h0IDwgZG9tQi5sZWZ0IHx8IGRvbUEuYm90dG9tIDwgZG9tQi50b3ApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIOacqueisOaSnlxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi56Kw5pKeLi4uLlwiKVxyXG5cdFx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7IC8vIOeisOaSnlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25DaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRxdWVyeVxyXG5cdFx0XHRcdC5zZWxlY3QoJyNweicpXHJcblx0XHRcdFx0LmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY29sbCh0aGlzLl94eiwgZGF0YSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuX2hhcykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2hhcyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+eisOaSnuS6hi4uJyk7XHJcblx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3BhcnQyL3N0ZXA4L3N0ZXA4J1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmV4ZWMoKTtcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVMZWZ0Q2xpY2soKSB7XHJcblx0XHRcdC8vIHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwNi9zdGVwNidcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlUmlnaHRDbGljaygpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwOC9zdGVwOCdcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0fVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///63\n");

/***/ }),
/* 64 */
/*!********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step8/step8.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step8_vue_vue_type_template_id_10f1bf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step8.vue?vue&type=template&id=10f1bf80&scoped=true&mpType=page */ 65);\n/* harmony import */ var _step8_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step8.vue?vue&type=script&lang=js&mpType=page */ 71);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step8_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step8_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step8_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step8_vue_vue_type_template_id_10f1bf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step8_vue_vue_type_template_id_10f1bf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"10f1bf80\",\n  null,\n  false,\n  _step8_vue_vue_type_template_id_10f1bf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part2/step8/step8.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0ZXA4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMGYxYmY4MCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RlcDgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N0ZXA4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTBmMWJmODBcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDIvc3RlcDgvc3RlcDgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///64\n");

/***/ }),
/* 65 */
/*!**************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step8/step8.vue?vue&type=template&id=10f1bf80&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step8_vue_vue_type_template_id_10f1bf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step8.vue?vue&type=template&id=10f1bf80&scoped=true&mpType=page */ 66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step8_vue_vue_type_template_id_10f1bf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step8_vue_vue_type_template_id_10f1bf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step8_vue_vue_type_template_id_10f1bf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step8_vue_vue_type_template_id_10f1bf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 66 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step8/step8.vue?vue&type=template&id=10f1bf80&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("movable-area", [
        _c("view", { staticClass: _vm._$s(2, "sc", "tit"), attrs: { _i: 2 } }),
        _c("image", {
          staticClass: _vm._$s(3, "sc", "xz"),
          attrs: {
            id: "xz",
            src: _vm._$s(3, "a-src", __webpack_require__(/*! ../../../static/p2/gz.png */ 67)),
            _i: 3
          }
        }),
        _vm._$s(4, "i", !_vm.showNzxs && _vm.end)
          ? _c("image", {
              staticClass: _vm._$s(4, "sc", "xs"),
              attrs: {
                id: "xs",
                src: _vm._$s(4, "a-src", __webpack_require__(/*! ../../../static/p2/xs.png */ 68)),
                _i: 4
              }
            })
          : _vm._e(),
        _vm._$s(5, "i", _vm.showNzxs)
          ? _c(
              "movable-view",
              {
                staticClass: _vm._$s(5, "sc", "nzxsBox"),
                attrs: { _i: 5 },
                on: { change: _vm.onChange2 }
              },
              [
                _c("image", {
                  staticClass: _vm._$s(6, "sc", "nzxs"),
                  attrs: {
                    id: "nzxs",
                    src: _vm._$s(
                      6,
                      "a-src",
                      __webpack_require__(/*! ../../../static/p2/nzxs.png */ 69)
                    ),
                    _i: 6
                  }
                })
              ]
            )
          : _vm._e(),
        _vm._$s(7, "i", !_vm.showNzxs && _vm.end)
          ? _c(
              "movable-view",
              {
                staticClass: _vm._$s(7, "sc", "pzBox"),
                attrs: { _i: 7 },
                on: { change: _vm.onChange }
              },
              [
                _c("image", {
                  staticClass: _vm._$s(8, "sc", "pz"),
                  attrs: {
                    id: "pz",
                    src: _vm._$s(
                      8,
                      "a-src",
                      __webpack_require__(/*! ../../../static/p2/nz.png */ 70)
                    ),
                    _i: 8
                  }
                })
              ]
            )
          : _vm._e()
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(9, "sc", "navBox"), attrs: { _i: 9 } },
        [
          _c("image", {
            staticClass: _vm._$s(10, "sc", "pre"),
            attrs: {
              src: _vm._$s(
                10,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowLeft.png */ 20)
              ),
              _i: 10
            },
            on: { click: _vm.handleLeftClick }
          }),
          _c("image", {
            staticClass: _vm._$s(11, "sc", "next"),
            attrs: {
              src: _vm._$s(
                11,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowRight.png */ 21)
              ),
              _i: 11
            },
            on: { click: _vm.handleRightClick }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 67 */
/*!*********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/gz.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/gz.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjY3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvZ3oucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///67\n");

/***/ }),
/* 68 */
/*!*********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/xs.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/xs.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjY4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIveHMucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///68\n");

/***/ }),
/* 69 */
/*!***********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/nzxs.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/nzxs.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjY5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvbnp4cy5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///69\n");

/***/ }),
/* 70 */
/*!*********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/nz.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/nz.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjcwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvbnoucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///70\n");

/***/ }),
/* 71 */
/*!********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step8/step8.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step8_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step8.vue?vue&type=script&lang=js&mpType=page */ 72);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step8_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step8_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step8_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step8_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step8_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI3MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXA4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGVwOC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///71\n");

/***/ }),
/* 72 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step8/step8.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      showNzxs: false,\n      end: true };\n\n  },\n  mounted: function mounted() {var _this = this;\n    this._xz = null;\n    this._xs = null;\n    this._has = false;\n    this._hasXs = false;\n    var query = uni.createSelectorQuery().in(this);\n    query.\n    select('#xz').\n    boundingClientRect(function (data) {\n      __f__(\"log\", 'data1 = ', data, \" at pages/part2/step8/step8.vue:41\");\n      _this._xz = data;\n    }).\n    exec();\n    query.\n    select('#xs').\n    boundingClientRect(function (data) {\n      // console.log('xs data1 = ', data);\n      _this._xs = data;\n    }).\n    exec();\n  },\n  methods: {\n    // 碰撞检测, target目标坐标 drag拖拽的目标\n    coll: function coll(domA, domB, callback) {\n      if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {\n        return false; // 未碰撞\n      } else {\n        // console.log(\"碰撞....\")\n        callback();\n        return true; // 碰撞\n      }\n    },\n    onChange: function onChange(e) {var _this2 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#pz').\n      boundingClientRect(function (data) {\n        _this2.coll(_this2._xs, data, function () {\n          if (!_this2._hasXs) {\n            _this2._hasXs = true;\n            // console.log('碰撞了..');\n            _this2.showNzxs = true;\n          }\n        });\n      }).\n      exec();\n    },\n    onChange2: function onChange2(e) {var _this3 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#nzxs').\n      boundingClientRect(function (data) {\n        _this3.coll(_this3._xz, data, function () {\n          if (!_this3._has) {\n            _this3._has = true;\n            // console.log('碰撞了..');\n            _this3.showNzxs = false;\n            _this3.end = false;\n            uni.navigateTo({\n              url: '/pages/part2/step9/step9' });\n\n          }\n        });\n      }).\n      exec();\n    },\n    handleLeftClick: function handleLeftClick() {\n      // uni.navigateBack();\n      uni.navigateTo({\n        url: '/pages/part2/step7/step7' });\n\n    },\n    handleRightClick: function handleRightClick() {\n      uni.navigateTo({\n        url: '/pages/part2/step9/step9' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDIvc3RlcDgvc3RlcDgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJzaG93Tnp4cyIsImVuZCIsIm1vdW50ZWQiLCJfeHoiLCJfeHMiLCJfaGFzIiwiX2hhc1hzIiwicXVlcnkiLCJ1bmkiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5IiwiaW4iLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJleGVjIiwibWV0aG9kcyIsImNvbGwiLCJkb21BIiwiZG9tQiIsImNhbGxiYWNrIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwib25DaGFuZ2UiLCJlIiwib25DaGFuZ2UyIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZUxlZnRDbGljayIsImhhbmRsZVJpZ2h0Q2xpY2siXSwibWFwcGluZ3MiOiJxSUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2RBLE1BRGMsa0JBQ1A7QUFDTixXQUFPO0FBQ05DLGNBQVEsRUFBRSxLQURKO0FBRU5DLFNBQUcsRUFBRSxJQUZDLEVBQVA7O0FBSUEsR0FOYTtBQU9kQyxTQVBjLHFCQU9KO0FBQ1QsU0FBS0MsR0FBTCxHQUFXLElBQVg7QUFDQSxTQUFLQyxHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQWQ7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLEdBQUcsQ0FBQ0MsbUJBQUosR0FBMEJDLEVBQTFCLENBQTZCLElBQTdCLENBQWQ7QUFDQUgsU0FBSztBQUNISSxVQURGLENBQ1MsS0FEVDtBQUVFQyxzQkFGRixDQUVxQixVQUFBYixJQUFJLEVBQUk7QUFDM0IsbUJBQVksVUFBWixFQUF3QkEsSUFBeEI7QUFDQSxXQUFJLENBQUNJLEdBQUwsR0FBV0osSUFBWDtBQUNBLEtBTEY7QUFNRWMsUUFORjtBQU9BTixTQUFLO0FBQ0hJLFVBREYsQ0FDUyxLQURUO0FBRUVDLHNCQUZGLENBRXFCLFVBQUFiLElBQUksRUFBSTtBQUMzQjtBQUNBLFdBQUksQ0FBQ0ssR0FBTCxHQUFXTCxJQUFYO0FBQ0EsS0FMRjtBQU1FYyxRQU5GO0FBT0EsR0EzQmE7QUE0QmRDLFNBQU8sRUFBRTtBQUNSO0FBQ0FDLFFBRlEsZ0JBRUhDLElBRkcsRUFFR0MsSUFGSCxFQUVTQyxRQUZULEVBRW1CO0FBQzFCLFVBQUlGLElBQUksQ0FBQ0csSUFBTCxHQUFZRixJQUFJLENBQUNHLEtBQWpCLElBQTBCSixJQUFJLENBQUNLLEdBQUwsR0FBV0osSUFBSSxDQUFDSyxNQUExQyxJQUFvRE4sSUFBSSxDQUFDSSxLQUFMLEdBQWFILElBQUksQ0FBQ0UsSUFBdEUsSUFBOEVILElBQUksQ0FBQ00sTUFBTCxHQUFjTCxJQUFJLENBQUNJLEdBQXJHLEVBQTBHO0FBQ3pHLGVBQU8sS0FBUCxDQUR5RyxDQUMzRjtBQUNkLE9BRkQsTUFFTztBQUNOO0FBQ0FILGdCQUFRO0FBQ1IsZUFBTyxJQUFQLENBSE0sQ0FHTztBQUNiO0FBQ0QsS0FWTztBQVdSSyxZQUFRLEVBQUUsa0JBQVNDLENBQVQsRUFBWTtBQUNyQixVQUFNakIsS0FBSyxHQUFHQyxHQUFHLENBQUNDLG1CQUFKLEdBQTBCQyxFQUExQixDQUE2QixJQUE3QixDQUFkO0FBQ0FILFdBQUs7QUFDSEksWUFERixDQUNTLEtBRFQ7QUFFRUMsd0JBRkYsQ0FFcUIsVUFBQWIsSUFBSSxFQUFJO0FBQzNCLGNBQUksQ0FBQ2dCLElBQUwsQ0FBVSxNQUFJLENBQUNYLEdBQWYsRUFBb0JMLElBQXBCLEVBQTBCLFlBQU07QUFDL0IsY0FBSSxDQUFDLE1BQUksQ0FBQ08sTUFBVixFQUFrQjtBQUNqQixrQkFBSSxDQUFDQSxNQUFMLEdBQWMsSUFBZDtBQUNBO0FBQ0Esa0JBQUksQ0FBQ04sUUFBTCxHQUFnQixJQUFoQjtBQUNBO0FBQ0QsU0FORDtBQU9BLE9BVkY7QUFXRWEsVUFYRjtBQVlBLEtBekJPO0FBMEJSWSxhQUFTLEVBQUUsbUJBQVNELENBQVQsRUFBWTtBQUN0QixVQUFNakIsS0FBSyxHQUFHQyxHQUFHLENBQUNDLG1CQUFKLEdBQTBCQyxFQUExQixDQUE2QixJQUE3QixDQUFkO0FBQ0FILFdBQUs7QUFDSEksWUFERixDQUNTLE9BRFQ7QUFFRUMsd0JBRkYsQ0FFcUIsVUFBQWIsSUFBSSxFQUFJO0FBQzNCLGNBQUksQ0FBQ2dCLElBQUwsQ0FBVSxNQUFJLENBQUNaLEdBQWYsRUFBb0JKLElBQXBCLEVBQTBCLFlBQU07QUFDL0IsY0FBSSxDQUFDLE1BQUksQ0FBQ00sSUFBVixFQUFnQjtBQUNmLGtCQUFJLENBQUNBLElBQUwsR0FBWSxJQUFaO0FBQ0E7QUFDQSxrQkFBSSxDQUFDTCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Esa0JBQUksQ0FBQ0MsR0FBTCxHQUFXLEtBQVg7QUFDQU8sZUFBRyxDQUFDa0IsVUFBSixDQUFlO0FBQ2RDLGlCQUFHLEVBQUUsMEJBRFMsRUFBZjs7QUFHQTtBQUNELFNBVkQ7QUFXQSxPQWRGO0FBZUVkLFVBZkY7QUFnQkEsS0E1Q087QUE2Q1JlLG1CQTdDUSw2QkE2Q1U7QUFDakI7QUFDQXBCLFNBQUcsQ0FBQ2tCLFVBQUosQ0FBZTtBQUNkQyxXQUFHLEVBQUUsMEJBRFMsRUFBZjs7QUFHQSxLQWxETztBQW1EUkUsb0JBbkRRLDhCQW1EVztBQUNsQnJCLFNBQUcsQ0FBQ2tCLFVBQUosQ0FBZTtBQUNkQyxXQUFHLEVBQUUsMEJBRFMsRUFBZjs7QUFHQSxLQXZETyxFQTVCSyxFIiwiZmlsZSI6IjcyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2hvd056eHM6IGZhbHNlLFxyXG5cdFx0XHRlbmQ6IHRydWUsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdHRoaXMuX3h6ID0gbnVsbDtcclxuXHRcdHRoaXMuX3hzID0gbnVsbDtcclxuXHRcdHRoaXMuX2hhcyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5faGFzWHMgPSBmYWxzZTtcclxuXHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdHF1ZXJ5XHJcblx0XHRcdC5zZWxlY3QoJyN4eicpXHJcblx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2RhdGExID0gJywgZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5feHogPSBkYXRhO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuZXhlYygpO1xyXG5cdFx0cXVlcnlcclxuXHRcdFx0LnNlbGVjdCgnI3hzJylcclxuXHRcdFx0LmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygneHMgZGF0YTEgPSAnLCBkYXRhKTtcclxuXHRcdFx0XHR0aGlzLl94cyA9IGRhdGE7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5leGVjKCk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHQvLyDnorDmkp7mo4DmtYssIHRhcmdldOebruagh+WdkOaghyBkcmFn5ouW5ou955qE55uu5qCHXHJcblx0XHRjb2xsKGRvbUEsIGRvbUIsIGNhbGxiYWNrKSB7XHJcblx0XHRcdGlmIChkb21BLmxlZnQgPiBkb21CLnJpZ2h0IHx8IGRvbUEudG9wID4gZG9tQi5ib3R0b20gfHwgZG9tQS5yaWdodCA8IGRvbUIubGVmdCB8fCBkb21BLmJvdHRvbSA8IGRvbUIudG9wKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyDmnKrnorDmkp5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIueisOaSni4uLi5cIilcclxuXHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlOyAvLyDnorDmkp5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0cXVlcnlcclxuXHRcdFx0XHQuc2VsZWN0KCcjcHonKVxyXG5cdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNvbGwodGhpcy5feHMsIGRhdGEsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLl9oYXNYcykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2hhc1hzID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygn56Kw5pKe5LqGLi4nKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3dOenhzID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuZXhlYygpO1xyXG5cdFx0fSxcclxuXHRcdG9uQ2hhbmdlMjogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRjb25zdCBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcblx0XHRcdHF1ZXJ5XHJcblx0XHRcdFx0LnNlbGVjdCgnI256eHMnKVxyXG5cdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNvbGwodGhpcy5feHosIGRhdGEsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLl9oYXMpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLl9oYXMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfnorDmkp7kuoYuLicpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvd056eHMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmVuZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwOS9zdGVwOSdcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuZXhlYygpO1xyXG5cdFx0fSxcclxuXHRcdGhhbmRsZUxlZnRDbGljaygpIHtcclxuXHRcdFx0Ly8gdW5pLm5hdmlnYXRlQmFjaygpO1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL3BhcnQyL3N0ZXA3L3N0ZXA3J1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVSaWdodENsaWNrKCkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL3BhcnQyL3N0ZXA5L3N0ZXA5J1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///72\n");

/***/ }),
/* 73 */
/*!********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step9/step9.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step9_vue_vue_type_template_id_db3ad0fc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step9.vue?vue&type=template&id=db3ad0fc&scoped=true&mpType=page */ 74);\n/* harmony import */ var _step9_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step9.vue?vue&type=script&lang=js&mpType=page */ 77);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step9_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step9_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step9_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step9_vue_vue_type_template_id_db3ad0fc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step9_vue_vue_type_template_id_db3ad0fc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"db3ad0fc\",\n  null,\n  false,\n  _step9_vue_vue_type_template_id_db3ad0fc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part2/step9/step9.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0ZXA5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYjNhZDBmYyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RlcDkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N0ZXA5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZGIzYWQwZmNcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDIvc3RlcDkvc3RlcDkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///73\n");

/***/ }),
/* 74 */
/*!**************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step9/step9.vue?vue&type=template&id=db3ad0fc&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step9_vue_vue_type_template_id_db3ad0fc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step9.vue?vue&type=template&id=db3ad0fc&scoped=true&mpType=page */ 75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step9_vue_vue_type_template_id_db3ad0fc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step9_vue_vue_type_template_id_db3ad0fc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step9_vue_vue_type_template_id_db3ad0fc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step9_vue_vue_type_template_id_db3ad0fc_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 75 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step9/step9.vue?vue&type=template&id=db3ad0fc&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "tit"), attrs: { _i: 1 } }),
      _c("movable-area", [
        _c(
          "movable-view",
          {
            staticClass: _vm._$s(3, "sc", "hzBox"),
            attrs: { _i: 3 },
            on: { change: _vm.onChange }
          },
          [
            _c("image", {
              staticClass: _vm._$s(4, "sc", "hz"),
              attrs: {
                id: "hz",
                src: _vm._$s(4, "a-src", __webpack_require__(/*! ../../../static/p2/xz.png */ 18)),
                _i: 4
              }
            })
          ]
        ),
        _c("image", {
          staticClass: _vm._$s(5, "sc", "door3"),
          attrs: {
            id: "door3",
            src: _vm._$s(5, "a-src", __webpack_require__(/*! ../../../static/p2/door3.png */ 41)),
            _i: 5
          }
        })
      ]),
      _c("image", {
        staticClass: _vm._$s(6, "sc", "ml"),
        attrs: {
          src: _vm._$s(6, "a-src", __webpack_require__(/*! ../../../static/p2/ml.png */ 76)),
          _i: 6
        },
        on: { click: _vm.playVoice }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "navBox"), attrs: { _i: 7 } },
        [
          _c("image", {
            staticClass: _vm._$s(8, "sc", "pre"),
            attrs: {
              src: _vm._$s(
                8,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowLeft.png */ 20)
              ),
              _i: 8
            },
            on: { click: _vm.handleLeftClick }
          }),
          _c("image", {
            staticClass: _vm._$s(9, "sc", "next"),
            attrs: {
              src: _vm._$s(
                9,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowRight.png */ 21)
              ),
              _i: 9
            },
            on: { click: _vm.handleRightClick }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 76 */
/*!*********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/ml.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/ml.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijc2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvbWwucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///76\n");

/***/ }),
/* 77 */
/*!********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step9/step9.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step9_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step9.vue?vue&type=script&lang=js&mpType=page */ 78);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step9_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step9_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step9_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step9_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step9_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI3Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXA5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGVwOS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///77\n");

/***/ }),
/* 78 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step9/step9.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _ml = _interopRequireDefault(__webpack_require__(/*! ../../../static/ml.mp3 */ 79));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { time: '00:00', mlMp3: _ml.default };}, mounted: function mounted() {var _this = this;this._xz = null;this._has = false; // 查询元素的坐标位置\n    var query = uni.createSelectorQuery().in(this);query.select('#door3').boundingClientRect(function (data) {__f__(\"log\", 'data1 = ', data, \" at pages/part2/step9/step9.vue:33\");\n      _this._xz = data;\n    }).\n    exec();\n  },\n  methods: {\n    // 碰撞检测, target目标坐标 drag拖拽的目标\n    coll: function coll(domA, domB, callback) {\n      if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {\n        // console.log(\"未碰撞\")\n\n        return false; // 未碰撞\n      } else {\n        // console.log(\"碰撞....\")\n        callback();\n        return true; // 碰撞\n      }\n    },\n    onChange: function onChange(e) {var _this2 = this;\n      // console.log(\"移动了...\")\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#hz').\n      boundingClientRect(function (data) {\n        _this2.coll(_this2._xz, data, function () {\n          if (!_this2._has) {\n            uni.navigateTo({\n              url: '/pages/part2/step10/step10' });\n\n          }\n        });\n      }).\n      exec();\n    },\n    handleLeftClick: function handleLeftClick() {\n      // uni.navigateBack();\n      uni.navigateTo({\n        url: '/pages/part2/step8/step8' });\n\n    },\n    handleRightClick: function handleRightClick() {\n      uni.navigateTo({\n        url: '/pages/part2/step10/step10' });\n\n    },\n    playVoice: function playVoice() {\n      var innerAudioContext = uni.createInnerAudioContext();\n      innerAudioContext.autoplay = true;\n      innerAudioContext.src = _ml.default;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDIvc3RlcDkvc3RlcDkudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ0aW1lIiwibWxNcDMiLCJtb3VudGVkIiwiX3h6IiwiX2hhcyIsInF1ZXJ5IiwidW5pIiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZXhlYyIsIm1ldGhvZHMiLCJjb2xsIiwiZG9tQSIsImRvbUIiLCJjYWxsYmFjayIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIm9uQ2hhbmdlIiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVMZWZ0Q2xpY2siLCJoYW5kbGVSaWdodENsaWNrIiwicGxheVZvaWNlIiwiaW5uZXJBdWRpb0NvbnRleHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImF1dG9wbGF5Iiwic3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLHdGLDhGQWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFHZSxFQUNkQSxJQURjLGtCQUNQLENBQ04sT0FBTyxFQUNOQyxJQUFJLEVBQUUsT0FEQSxFQUVOQyxLQUFLLEVBQUxBLFdBRk0sRUFBUCxDQUlBLENBTmEsRUFPZEMsT0FQYyxxQkFPSixrQkFDVCxLQUFLQyxHQUFMLEdBQVcsSUFBWCxDQUNBLEtBQUtDLElBQUwsR0FBWSxLQUFaLENBRlMsQ0FHVDtBQUNBLFFBQU1DLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixHQUEwQkMsRUFBMUIsQ0FBNkIsSUFBN0IsQ0FBZCxDQUNBSCxLQUFLLENBQ0hJLE1BREYsQ0FDUyxRQURULEVBRUVDLGtCQUZGLENBRXFCLFVBQUFYLElBQUksRUFBSSxDQUMzQixhQUFZLFVBQVosRUFBd0JBLElBQXhCO0FBQ0EsV0FBSSxDQUFDSSxHQUFMLEdBQVdKLElBQVg7QUFDQSxLQUxGO0FBTUVZLFFBTkY7QUFPQSxHQW5CYTtBQW9CZEMsU0FBTyxFQUFFO0FBQ1I7QUFDQUMsUUFGUSxnQkFFSEMsSUFGRyxFQUVHQyxJQUZILEVBRVNDLFFBRlQsRUFFbUI7QUFDMUIsVUFBSUYsSUFBSSxDQUFDRyxJQUFMLEdBQVlGLElBQUksQ0FBQ0csS0FBakIsSUFBMEJKLElBQUksQ0FBQ0ssR0FBTCxHQUFXSixJQUFJLENBQUNLLE1BQTFDLElBQW9ETixJQUFJLENBQUNJLEtBQUwsR0FBYUgsSUFBSSxDQUFDRSxJQUF0RSxJQUE4RUgsSUFBSSxDQUFDTSxNQUFMLEdBQWNMLElBQUksQ0FBQ0ksR0FBckcsRUFBMEc7QUFDekc7O0FBRUEsZUFBTyxLQUFQLENBSHlHLENBRzNGO0FBQ2QsT0FKRCxNQUlPO0FBQ047QUFDQUgsZ0JBQVE7QUFDUixlQUFPLElBQVAsQ0FITSxDQUdPO0FBQ2I7QUFDRCxLQVpPO0FBYVJLLFlBQVEsRUFBRSxrQkFBU0MsQ0FBVCxFQUFZO0FBQ3JCO0FBQ0EsVUFBTWpCLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixHQUEwQkMsRUFBMUIsQ0FBNkIsSUFBN0IsQ0FBZDtBQUNBSCxXQUFLO0FBQ0hJLFlBREYsQ0FDUyxLQURUO0FBRUVDLHdCQUZGLENBRXFCLFVBQUFYLElBQUksRUFBSTtBQUMzQixjQUFJLENBQUNjLElBQUwsQ0FBVSxNQUFJLENBQUNWLEdBQWYsRUFBb0JKLElBQXBCLEVBQTBCLFlBQU07QUFDL0IsY0FBSSxDQUFDLE1BQUksQ0FBQ0ssSUFBVixFQUFnQjtBQUNmRSxlQUFHLENBQUNpQixVQUFKLENBQWU7QUFDZEMsaUJBQUcsRUFBRSw0QkFEUyxFQUFmOztBQUdBO0FBQ0QsU0FORDtBQU9BLE9BVkY7QUFXRWIsVUFYRjtBQVlBLEtBNUJPO0FBNkJSYyxtQkE3QlEsNkJBNkJVO0FBQ2pCO0FBQ0FuQixTQUFHLENBQUNpQixVQUFKLENBQWU7QUFDZEMsV0FBRyxFQUFFLDBCQURTLEVBQWY7O0FBR0EsS0FsQ087QUFtQ1JFLG9CQW5DUSw4QkFtQ1c7QUFDbEJwQixTQUFHLENBQUNpQixVQUFKLENBQWU7QUFDZEMsV0FBRyxFQUFFLDRCQURTLEVBQWY7O0FBR0EsS0F2Q087QUF3Q1JHLGFBeENRLHVCQXdDSTtBQUNYLFVBQU1DLGlCQUFpQixHQUFHdEIsR0FBRyxDQUFDdUIsdUJBQUosRUFBMUI7QUFDQUQsdUJBQWlCLENBQUNFLFFBQWxCLEdBQTZCLElBQTdCO0FBQ0FGLHVCQUFpQixDQUFDRyxHQUFsQixHQUF3QjlCLFdBQXhCO0FBQ0EsS0E1Q08sRUFwQkssRSIsImZpbGUiOiI3OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcblxyXG5pbXBvcnQgbWxNcDMgZnJvbSAnLi4vLi4vLi4vc3RhdGljL21sLm1wMyc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dGltZTogJzAwOjAwJyxcclxuXHRcdFx0bWxNcDNcclxuXHRcdH07XHJcblx0fSxcclxuXHRtb3VudGVkKCkge1xyXG5cdFx0dGhpcy5feHogPSBudWxsO1xyXG5cdFx0dGhpcy5faGFzID0gZmFsc2U7XHJcblx0XHQvLyDmn6Xor6LlhYPntKDnmoTlnZDmoIfkvY3nva5cclxuXHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdHF1ZXJ5XHJcblx0XHRcdC5zZWxlY3QoJyNkb29yMycpXHJcblx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2RhdGExID0gJywgZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5feHogPSBkYXRhO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuZXhlYygpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly8g56Kw5pKe5qOA5rWLLCB0YXJnZXTnm67moIflnZDmoIcgZHJhZ+aLluaLveeahOebruagh1xyXG5cdFx0Y29sbChkb21BLCBkb21CLCBjYWxsYmFjaykge1xyXG5cdFx0XHRpZiAoZG9tQS5sZWZ0ID4gZG9tQi5yaWdodCB8fCBkb21BLnRvcCA+IGRvbUIuYm90dG9tIHx8IGRvbUEucmlnaHQgPCBkb21CLmxlZnQgfHwgZG9tQS5ib3R0b20gPCBkb21CLnRvcCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi5pyq56Kw5pKeXCIpXHJcblxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8g5pyq56Kw5pKeXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCLnorDmkp4uLi4uXCIpXHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLy8g56Kw5pKeXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIuenu+WKqOS6hi4uLlwiKVxyXG5cdFx0XHRjb25zdCBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcblx0XHRcdHF1ZXJ5XHJcblx0XHRcdFx0LnNlbGVjdCgnI2h6JylcclxuXHRcdFx0XHQuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jb2xsKHRoaXMuX3h6LCBkYXRhLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghdGhpcy5faGFzKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3BhcnQyL3N0ZXAxMC9zdGVwMTAnXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmV4ZWMoKTtcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVMZWZ0Q2xpY2soKSB7XHJcblx0XHRcdC8vIHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwOC9zdGVwOCdcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlUmlnaHRDbGljaygpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwMTAvc3RlcDEwJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRwbGF5Vm9pY2UoKSB7XHJcblx0XHRcdGNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gdW5pLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XHJcblx0XHRcdGlubmVyQXVkaW9Db250ZXh0LmF1dG9wbGF5ID0gdHJ1ZTtcclxuXHRcdFx0aW5uZXJBdWRpb0NvbnRleHQuc3JjID0gbWxNcDM7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///78\n");

/***/ }),
/* 79 */
/*!******************************************!*\
  !*** E:/progject/归档/drag2/static/ml.mp3 ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/ml.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijc5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvbWwubXAzXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///79\n");

/***/ }),
/* 80 */
/*!**********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step10/step10.vue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step10_vue_vue_type_template_id_6cdc35f4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step10.vue?vue&type=template&id=6cdc35f4&scoped=true&mpType=page */ 81);\n/* harmony import */ var _step10_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step10.vue?vue&type=script&lang=js&mpType=page */ 83);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step10_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step10_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step10_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step10_vue_vue_type_template_id_6cdc35f4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step10_vue_vue_type_template_id_6cdc35f4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6cdc35f4\",\n  null,\n  false,\n  _step10_vue_vue_type_template_id_6cdc35f4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part2/step10/step10.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiODAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0ZXAxMC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmNkYzM1ZjQmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N0ZXAxMC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3RlcDEwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNmNkYzM1ZjRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDIvc3RlcDEwL3N0ZXAxMC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///80\n");

/***/ }),
/* 81 */
/*!****************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step10/step10.vue?vue&type=template&id=6cdc35f4&scoped=true&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step10_vue_vue_type_template_id_6cdc35f4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step10.vue?vue&type=template&id=6cdc35f4&scoped=true&mpType=page */ 82);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step10_vue_vue_type_template_id_6cdc35f4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step10_vue_vue_type_template_id_6cdc35f4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step10_vue_vue_type_template_id_6cdc35f4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step10_vue_vue_type_template_id_6cdc35f4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 82 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step10/step10.vue?vue&type=template&id=6cdc35f4&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("movable-area", [
        _c(
          "movable-view",
          {
            staticClass: _vm._$s(2, "sc", "xzBox"),
            attrs: { id: "xzBox", _i: 2 },
            on: { change: _vm.onChange }
          },
          [
            _c("image", {
              staticClass: _vm._$s(3, "sc", "xz"),
              attrs: {
                id: "xz",
                src: _vm._$s(3, "a-src", __webpack_require__(/*! ../../../static/p2/xz.png */ 18)),
                _i: 3
              }
            })
          ]
        ),
        _c("image", {
          staticClass: _vm._$s(4, "sc", "door"),
          attrs: {
            id: "door",
            src: _vm._$s(4, "a-src", __webpack_require__(/*! ../../../static/p2/door.png */ 28)),
            _i: 4
          }
        })
      ]),
      _c("button", {
        staticClass: _vm._$s(5, "sc", "btn startBtn"),
        attrs: { _i: 5 }
      }),
      _c("button", {
        staticClass: _vm._$s(6, "sc", "btn closeBtn"),
        attrs: { _i: 6 }
      }),
      _c("view", { staticClass: _vm._$s(7, "sc", "tit"), attrs: { _i: 7 } }),
      _c(
        "view",
        { staticClass: _vm._$s(8, "sc", "navBox"), attrs: { _i: 8 } },
        [
          _c("image", {
            staticClass: _vm._$s(9, "sc", "pre"),
            attrs: {
              src: _vm._$s(
                9,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowLeft.png */ 20)
              ),
              _i: 9
            },
            on: { click: _vm.handleLeftClick }
          }),
          _c("image", {
            staticClass: _vm._$s(10, "sc", "next"),
            attrs: {
              src: _vm._$s(
                10,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowRight.png */ 21)
              ),
              _i: 10
            },
            on: { click: _vm.handleRightClick }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 83 */
/*!**********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step10/step10.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step10_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step10.vue?vue&type=script&lang=js&mpType=page */ 84);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step10_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step10_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step10_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step10_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step10_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRpQixDQUFnQiwra0JBQUcsRUFBQyIsImZpbGUiOiI4My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXAxMC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3RlcDEwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///83\n");

/***/ }),
/* 84 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step10/step10.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n  },\n  mounted: function mounted() {var _this = this;\n    this._xz = null;\n    this._has = false;\n    var query = uni.createSelectorQuery().in(this);\n    query.\n    select('#door').\n    boundingClientRect(function (data) {\n      __f__(\"log\", 'data1 = ', data, \" at pages/part2/step10/step10.vue:29\");\n      _this._xz = data;\n    }).\n    exec();\n  },\n  methods: {\n    // 碰撞检测, target目标坐标 drag拖拽的目标\n    coll: function coll(domA, domB, callback) {\n      if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {\n        callback();\n        return false; // 未碰撞\n      } else {\n        // console.log(\"碰撞....\")\n\n        return true; // 碰撞\n      }\n    },\n    onChange: function onChange(e) {var _this2 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#xz').\n      boundingClientRect(function (data) {\n        _this2.coll(_this2._xz, data, function () {\n          if (!_this2._has) {\n            _this2._has = true;\n            // console.log('出去了..');\n            setTimeout(function () {\n              uni.navigateTo({\n                url: '/pages/part2/step11/step11' });\n\n            }, 500);\n          }\n        });\n      }).\n      exec();\n    },\n    handleLeftClick: function handleLeftClick() {\n      // uni.navigateBack();\n      uni.navigateTo({\n        url: '/pages/part2/step9/step9' });\n\n    },\n    handleRightClick: function handleRightClick() {\n      uni.navigateTo({\n        url: '/pages/part2/step11/step11' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDIvc3RlcDEwL3N0ZXAxMC52dWUiXSwibmFtZXMiOlsiZGF0YSIsIm1vdW50ZWQiLCJfeHoiLCJfaGFzIiwicXVlcnkiLCJ1bmkiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5IiwiaW4iLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJleGVjIiwibWV0aG9kcyIsImNvbGwiLCJkb21BIiwiZG9tQiIsImNhbGxiYWNrIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwib25DaGFuZ2UiLCJlIiwic2V0VGltZW91dCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVMZWZ0Q2xpY2siLCJoYW5kbGVSaWdodENsaWNrIl0sIm1hcHBpbmdzIjoicUlBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZEEsTUFEYyxrQkFDUDtBQUNOLFdBQU8sRUFBUDtBQUNBLEdBSGE7QUFJZEMsU0FKYyxxQkFJSjtBQUNULFNBQUtDLEdBQUwsR0FBVyxJQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLEdBQUcsQ0FBQ0MsbUJBQUosR0FBMEJDLEVBQTFCLENBQTZCLElBQTdCLENBQWQ7QUFDQUgsU0FBSztBQUNISSxVQURGLENBQ1MsT0FEVDtBQUVFQyxzQkFGRixDQUVxQixVQUFBVCxJQUFJLEVBQUk7QUFDM0IsbUJBQVksVUFBWixFQUF3QkEsSUFBeEI7QUFDQSxXQUFJLENBQUNFLEdBQUwsR0FBV0YsSUFBWDtBQUNBLEtBTEY7QUFNRVUsUUFORjtBQU9BLEdBZmE7QUFnQmRDLFNBQU8sRUFBRTtBQUNSO0FBQ0FDLFFBRlEsZ0JBRUhDLElBRkcsRUFFR0MsSUFGSCxFQUVTQyxRQUZULEVBRW1CO0FBQzFCLFVBQUlGLElBQUksQ0FBQ0csSUFBTCxHQUFZRixJQUFJLENBQUNHLEtBQWpCLElBQTBCSixJQUFJLENBQUNLLEdBQUwsR0FBV0osSUFBSSxDQUFDSyxNQUExQyxJQUFvRE4sSUFBSSxDQUFDSSxLQUFMLEdBQWFILElBQUksQ0FBQ0UsSUFBdEUsSUFBOEVILElBQUksQ0FBQ00sTUFBTCxHQUFjTCxJQUFJLENBQUNJLEdBQXJHLEVBQTBHO0FBQ3pHSCxnQkFBUTtBQUNSLGVBQU8sS0FBUCxDQUZ5RyxDQUUzRjtBQUNkLE9BSEQsTUFHTztBQUNOOztBQUVBLGVBQU8sSUFBUCxDQUhNLENBR087QUFDYjtBQUNELEtBWE87QUFZUkssWUFBUSxFQUFFLGtCQUFTQyxDQUFULEVBQVk7QUFDckIsVUFBTWpCLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixHQUEwQkMsRUFBMUIsQ0FBNkIsSUFBN0IsQ0FBZDtBQUNBSCxXQUFLO0FBQ0hJLFlBREYsQ0FDUyxLQURUO0FBRUVDLHdCQUZGLENBRXFCLFVBQUFULElBQUksRUFBSTtBQUMzQixjQUFJLENBQUNZLElBQUwsQ0FBVSxNQUFJLENBQUNWLEdBQWYsRUFBb0JGLElBQXBCLEVBQTBCLFlBQU07QUFDL0IsY0FBSSxDQUFDLE1BQUksQ0FBQ0csSUFBVixFQUFnQjtBQUNmLGtCQUFJLENBQUNBLElBQUwsR0FBWSxJQUFaO0FBQ0E7QUFDQW1CLHNCQUFVLENBQUMsWUFBTTtBQUNoQmpCLGlCQUFHLENBQUNrQixVQUFKLENBQWU7QUFDZEMsbUJBQUcsRUFBRSw0QkFEUyxFQUFmOztBQUdBLGFBSlMsRUFJUCxHQUpPLENBQVY7QUFLQTtBQUNELFNBVkQ7QUFXQSxPQWRGO0FBZUVkLFVBZkY7QUFnQkEsS0E5Qk87QUErQlJlLG1CQS9CUSw2QkErQlU7QUFDakI7QUFDQXBCLFNBQUcsQ0FBQ2tCLFVBQUosQ0FBZTtBQUNkQyxXQUFHLEVBQUUsMEJBRFMsRUFBZjs7QUFHQSxLQXBDTztBQXFDUkUsb0JBckNRLDhCQXFDVztBQUNsQnJCLFNBQUcsQ0FBQ2tCLFVBQUosQ0FBZTtBQUNkQyxXQUFHLEVBQUUsNEJBRFMsRUFBZjs7QUFHQSxLQXpDTyxFQWhCSyxFIiwiZmlsZSI6Ijg0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHt9O1xyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdHRoaXMuX3h6ID0gbnVsbDtcclxuXHRcdHRoaXMuX2hhcyA9IGZhbHNlO1xyXG5cdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0cXVlcnlcclxuXHRcdFx0LnNlbGVjdCgnI2Rvb3InKVxyXG5cdFx0XHQuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkYXRhMSA9ICcsIGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMuX3h6ID0gZGF0YTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmV4ZWMoKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8vIOeisOaSnuajgOa1iywgdGFyZ2V055uu5qCH5Z2Q5qCHIGRyYWfmi5bmi73nmoTnm67moIdcclxuXHRcdGNvbGwoZG9tQSwgZG9tQiwgY2FsbGJhY2spIHtcclxuXHRcdFx0aWYgKGRvbUEubGVmdCA+IGRvbUIucmlnaHQgfHwgZG9tQS50b3AgPiBkb21CLmJvdHRvbSB8fCBkb21BLnJpZ2h0IDwgZG9tQi5sZWZ0IHx8IGRvbUEuYm90dG9tIDwgZG9tQi50b3ApIHtcclxuXHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8g5pyq56Kw5pKeXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCLnorDmkp4uLi4uXCIpXHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlOyAvLyDnorDmkp5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0cXVlcnlcclxuXHRcdFx0XHQuc2VsZWN0KCcjeHonKVxyXG5cdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNvbGwodGhpcy5feHosIGRhdGEsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLl9oYXMpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLl9oYXMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCflh7rljrvkuoYuLicpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvcGFydDIvc3RlcDExL3N0ZXAxMSdcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0sIDUwMCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmV4ZWMoKTtcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVMZWZ0Q2xpY2soKSB7XHJcblx0XHRcdC8vIHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwOS9zdGVwOSdcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVSaWdodENsaWNrKCkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL3BhcnQyL3N0ZXAxMS9zdGVwMTEnXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///84\n");

/***/ }),
/* 85 */
/*!**********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step11/step11.vue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step11_vue_vue_type_template_id_163d51e6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step11.vue?vue&type=template&id=163d51e6&scoped=true&mpType=page */ 86);\n/* harmony import */ var _step11_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step11.vue?vue&type=script&lang=js&mpType=page */ 90);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step11_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step11_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step11_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step11_vue_vue_type_template_id_163d51e6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step11_vue_vue_type_template_id_163d51e6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"163d51e6\",\n  null,\n  false,\n  _step11_vue_vue_type_template_id_163d51e6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part2/step11/step11.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiODUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0ZXAxMS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTYzZDUxZTYmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N0ZXAxMS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3RlcDExLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTYzZDUxZTZcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDIvc3RlcDExL3N0ZXAxMS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///85\n");

/***/ }),
/* 86 */
/*!****************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step11/step11.vue?vue&type=template&id=163d51e6&scoped=true&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step11_vue_vue_type_template_id_163d51e6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step11.vue?vue&type=template&id=163d51e6&scoped=true&mpType=page */ 87);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step11_vue_vue_type_template_id_163d51e6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step11_vue_vue_type_template_id_163d51e6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step11_vue_vue_type_template_id_163d51e6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step11_vue_vue_type_template_id_163d51e6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 87 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step11/step11.vue?vue&type=template&id=163d51e6&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("movable-area", [
        _c(
          "movable-view",
          {
            staticClass: _vm._$s(2, "sc", "xzBox"),
            attrs: { _i: 2 },
            on: { change: _vm.onChange }
          },
          [
            _c("image", {
              staticClass: _vm._$s(3, "sc", "xz"),
              attrs: {
                id: "xz",
                src: _vm._$s(
                  3,
                  "a-src",
                  __webpack_require__(/*! ../../../static/p2/zwx2.png */ 88)
                ),
                _i: 3
              }
            })
          ]
        ),
        _c("image", {
          staticClass: _vm._$s(4, "sc", "door"),
          attrs: {
            id: "door",
            src: _vm._$s(4, "a-src", __webpack_require__(/*! ../../../static/p2/door22.png */ 89)),
            _i: 4
          }
        })
      ]),
      _c("button", {
        staticClass: _vm._$s(5, "sc", "btn startBtn"),
        attrs: { _i: 5 },
        on: { click: _vm.handleStart }
      }),
      _c("button", {
        staticClass: _vm._$s(6, "sc", "btn closeBtn"),
        attrs: { _i: 6 },
        on: { click: _vm.handleClose }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "navBox"), attrs: { _i: 7 } },
        [
          _c("image", {
            staticClass: _vm._$s(8, "sc", "pre"),
            attrs: {
              src: _vm._$s(
                8,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowLeft.png */ 20)
              ),
              _i: 8
            },
            on: { click: _vm.handleLeftClick }
          }),
          _c("image", {
            staticClass: _vm._$s(9, "sc", "next"),
            attrs: {
              src: _vm._$s(
                9,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowRight.png */ 21)
              ),
              _i: 9
            },
            on: { click: _vm.handleRightClick }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 88 */
/*!***********************************************!*\
  !*** E:/progject/归档/drag2/static/p2/zwx2.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/zwx2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijg4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvend4Mi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///88\n");

/***/ }),
/* 89 */
/*!*************************************************!*\
  !*** E:/progject/归档/drag2/static/p2/door22.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p2/door22.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijg5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDIvZG9vcjIyLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///89\n");

/***/ }),
/* 90 */
/*!**********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part2/step11/step11.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step11_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step11.vue?vue&type=script&lang=js&mpType=page */ 91);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step11_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step11_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step11_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step11_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step11_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRpQixDQUFnQiwra0JBQUcsRUFBQyIsImZpbGUiOiI5MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXAxMS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3RlcDExLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///90\n");

/***/ }),
/* 91 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part2/step11/step11.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      time: '00:00',\n      num: 0 };\n\n  },\n  mounted: function mounted() {var _this = this;\n    this._xz = null;\n    this._has = false;\n    var query = uni.createSelectorQuery().in(this);\n    query.\n    select('#door').\n    boundingClientRect(function (data) {\n      __f__(\"log\", 'data1 = ', data, \" at pages/part2/step11/step11.vue:34\");\n      _this._xz = data;\n    }).\n    exec();\n  },\n  methods: {\n    handleStart: function handleStart() {\n      uni.showToast({\n        title: '操作结束！' });\n\n    },\n    handleClose: function handleClose() {},\n    handleJia: function handleJia() {\n      this.num += 1;\n    },\n    handleJian: function handleJian() {\n      if (this.num == 0) {\n        return;\n      }\n      this.num -= 1;\n    },\n    // 碰撞检测, target目标坐标 drag拖拽的目标\n    coll: function coll(domA, domB, callback) {\n      if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {\n        return false; // 未碰撞\n      } else {\n        // console.log(\"碰撞....\")\n        callback();\n        return true; // 碰撞\n      }\n    },\n    onChange: function onChange(e) {var _this2 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#xz').\n      boundingClientRect(function (data) {\n        _this2.coll(_this2._xz, data, function () {\n          if (!_this2._has) {\n            _this2._has = true;\n            __f__(\"log\", '碰撞了..', \" at pages/part2/step11/step11.vue:73\");\n          }\n        });\n      }).\n      exec();\n    },\n    handleLeftClick: function handleLeftClick() {\n      // uni.navigateBack();\n      uni.navigateTo({\n        url: '/pages/part1/step10/step10' });\n\n    },\n    handleRightClick: function handleRightClick() {\n      uni.navigateTo({\n        url: '/pages/part1/step2/step2' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDIvc3RlcDExL3N0ZXAxMS52dWUiXSwibmFtZXMiOlsiZGF0YSIsInRpbWUiLCJudW0iLCJtb3VudGVkIiwiX3h6IiwiX2hhcyIsInF1ZXJ5IiwidW5pIiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZXhlYyIsIm1ldGhvZHMiLCJoYW5kbGVTdGFydCIsInNob3dUb2FzdCIsInRpdGxlIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVKaWEiLCJoYW5kbGVKaWFuIiwiY29sbCIsImRvbUEiLCJkb21CIiwiY2FsbGJhY2siLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJvbkNoYW5nZSIsImUiLCJoYW5kbGVMZWZ0Q2xpY2siLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlUmlnaHRDbGljayJdLCJtYXBwaW5ncyI6InFJQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNkQSxNQURjLGtCQUNQO0FBQ04sV0FBTztBQUNOQyxVQUFJLEVBQUUsT0FEQTtBQUVOQyxTQUFHLEVBQUUsQ0FGQyxFQUFQOztBQUlBLEdBTmE7QUFPZEMsU0FQYyxxQkFPSjtBQUNULFNBQUtDLEdBQUwsR0FBVyxJQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLEdBQUcsQ0FBQ0MsbUJBQUosR0FBMEJDLEVBQTFCLENBQTZCLElBQTdCLENBQWQ7QUFDQUgsU0FBSztBQUNISSxVQURGLENBQ1MsT0FEVDtBQUVFQyxzQkFGRixDQUVxQixVQUFBWCxJQUFJLEVBQUk7QUFDM0IsbUJBQVksVUFBWixFQUF3QkEsSUFBeEI7QUFDQSxXQUFJLENBQUNJLEdBQUwsR0FBV0osSUFBWDtBQUNBLEtBTEY7QUFNRVksUUFORjtBQU9BLEdBbEJhO0FBbUJkQyxTQUFPLEVBQUU7QUFDUkMsZUFEUSx5QkFDTTtBQUNiUCxTQUFHLENBQUNRLFNBQUosQ0FBYztBQUNiQyxhQUFLLEVBQUUsT0FETSxFQUFkOztBQUdBLEtBTE87QUFNUkMsZUFOUSx5QkFNTSxDQUFFLENBTlI7QUFPUkMsYUFQUSx1QkFPSTtBQUNYLFdBQUtoQixHQUFMLElBQVksQ0FBWjtBQUNBLEtBVE87QUFVUmlCLGNBVlEsd0JBVUs7QUFDWixVQUFJLEtBQUtqQixHQUFMLElBQVksQ0FBaEIsRUFBbUI7QUFDbEI7QUFDQTtBQUNELFdBQUtBLEdBQUwsSUFBWSxDQUFaO0FBQ0EsS0FmTztBQWdCUjtBQUNBa0IsUUFqQlEsZ0JBaUJIQyxJQWpCRyxFQWlCR0MsSUFqQkgsRUFpQlNDLFFBakJULEVBaUJtQjtBQUMxQixVQUFJRixJQUFJLENBQUNHLElBQUwsR0FBWUYsSUFBSSxDQUFDRyxLQUFqQixJQUEwQkosSUFBSSxDQUFDSyxHQUFMLEdBQVdKLElBQUksQ0FBQ0ssTUFBMUMsSUFBb0ROLElBQUksQ0FBQ0ksS0FBTCxHQUFhSCxJQUFJLENBQUNFLElBQXRFLElBQThFSCxJQUFJLENBQUNNLE1BQUwsR0FBY0wsSUFBSSxDQUFDSSxHQUFyRyxFQUEwRztBQUN6RyxlQUFPLEtBQVAsQ0FEeUcsQ0FDM0Y7QUFDZCxPQUZELE1BRU87QUFDTjtBQUNBSCxnQkFBUTtBQUNSLGVBQU8sSUFBUCxDQUhNLENBR087QUFDYjtBQUNELEtBekJPO0FBMEJSSyxZQUFRLEVBQUUsa0JBQVNDLENBQVQsRUFBWTtBQUNyQixVQUFNdkIsS0FBSyxHQUFHQyxHQUFHLENBQUNDLG1CQUFKLEdBQTBCQyxFQUExQixDQUE2QixJQUE3QixDQUFkO0FBQ0FILFdBQUs7QUFDSEksWUFERixDQUNTLEtBRFQ7QUFFRUMsd0JBRkYsQ0FFcUIsVUFBQVgsSUFBSSxFQUFJO0FBQzNCLGNBQUksQ0FBQ29CLElBQUwsQ0FBVSxNQUFJLENBQUNoQixHQUFmLEVBQW9CSixJQUFwQixFQUEwQixZQUFNO0FBQy9CLGNBQUksQ0FBQyxNQUFJLENBQUNLLElBQVYsRUFBZ0I7QUFDZixrQkFBSSxDQUFDQSxJQUFMLEdBQVksSUFBWjtBQUNBLHlCQUFZLE9BQVo7QUFDQTtBQUNELFNBTEQ7QUFNQSxPQVRGO0FBVUVPLFVBVkY7QUFXQSxLQXZDTztBQXdDUmtCLG1CQXhDUSw2QkF3Q1U7QUFDakI7QUFDQXZCLFNBQUcsQ0FBQ3dCLFVBQUosQ0FBZTtBQUNkQyxXQUFHLEVBQUUsNEJBRFMsRUFBZjs7QUFHQSxLQTdDTztBQThDUkMsb0JBOUNRLDhCQThDVztBQUNsQjFCLFNBQUcsQ0FBQ3dCLFVBQUosQ0FBZTtBQUNkQyxXQUFHLEVBQUUsMEJBRFMsRUFBZjs7QUFHQSxLQWxETyxFQW5CSyxFIiwiZmlsZSI6IjkxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dGltZTogJzAwOjAwJyxcclxuXHRcdFx0bnVtOiAwXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdHRoaXMuX3h6ID0gbnVsbDtcclxuXHRcdHRoaXMuX2hhcyA9IGZhbHNlO1xyXG5cdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0cXVlcnlcclxuXHRcdFx0LnNlbGVjdCgnI2Rvb3InKVxyXG5cdFx0XHQuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkYXRhMSA9ICcsIGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMuX3h6ID0gZGF0YTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmV4ZWMoKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGhhbmRsZVN0YXJ0KCkge1xyXG5cdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHR0aXRsZTogJ+aTjeS9nOe7k+adn++8gSdcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlQ2xvc2UoKSB7fSxcclxuXHRcdGhhbmRsZUppYSgpIHtcclxuXHRcdFx0dGhpcy5udW0gKz0gMTtcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVKaWFuKCkge1xyXG5cdFx0XHRpZiAodGhpcy5udW0gPT0gMCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm51bSAtPSAxO1xyXG5cdFx0fSxcclxuXHRcdC8vIOeisOaSnuajgOa1iywgdGFyZ2V055uu5qCH5Z2Q5qCHIGRyYWfmi5bmi73nmoTnm67moIdcclxuXHRcdGNvbGwoZG9tQSwgZG9tQiwgY2FsbGJhY2spIHtcclxuXHRcdFx0aWYgKGRvbUEubGVmdCA+IGRvbUIucmlnaHQgfHwgZG9tQS50b3AgPiBkb21CLmJvdHRvbSB8fCBkb21BLnJpZ2h0IDwgZG9tQi5sZWZ0IHx8IGRvbUEuYm90dG9tIDwgZG9tQi50b3ApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIOacqueisOaSnlxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi56Kw5pKeLi4uLlwiKVxyXG5cdFx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7IC8vIOeisOaSnlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25DaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRxdWVyeVxyXG5cdFx0XHRcdC5zZWxlY3QoJyN4eicpXHJcblx0XHRcdFx0LmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY29sbCh0aGlzLl94eiwgZGF0YSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuX2hhcykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2hhcyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+eisOaSnuS6hi4uJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmV4ZWMoKTtcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVMZWZ0Q2xpY2soKSB7XHJcblx0XHRcdC8vIHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0MS9zdGVwMTAvc3RlcDEwJ1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdGhhbmRsZVJpZ2h0Q2xpY2soKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvcGFydDEvc3RlcDIvc3RlcDInXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///91\n");

/***/ }),
/* 92 */
/*!********************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part3/step1/step1.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step1_vue_vue_type_template_id_36527c1a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step1.vue?vue&type=template&id=36527c1a&scoped=true&mpType=page */ 93);\n/* harmony import */ var _step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step1.vue?vue&type=script&lang=js&mpType=page */ 97);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step1_vue_vue_type_template_id_36527c1a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step1_vue_vue_type_template_id_36527c1a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"36527c1a\",\n  null,\n  false,\n  _step1_vue_vue_type_template_id_36527c1a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/part3/step1/step1.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0ZXAxLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjUyN2MxYSZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RlcDEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N0ZXAxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzY1MjdjMWFcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcGFydDMvc3RlcDEvc3RlcDEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///92\n");

/***/ }),
/* 93 */
/*!**************************************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part3/step1/step1.vue?vue&type=template&id=36527c1a&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_36527c1a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step1.vue?vue&type=template&id=36527c1a&scoped=true&mpType=page */ 94);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_36527c1a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_36527c1a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_36527c1a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_template_id_36527c1a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 94 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part3/step1/step1.vue?vue&type=template&id=36527c1a&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "tit"), attrs: { _i: 1 } }),
      _c("image", {
        staticClass: _vm._$s(2, "sc", "shoushi"),
        attrs: {
          src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../../static/p3/shoushi.png */ 95)),
          _i: 2
        }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(3, "sc", "TuoYuan1box"), attrs: { _i: 3 } },
        [
          _c("image", {
            staticClass: _vm._$s(4, "sc", "tuoyuan1"),
            attrs: {
              id: "tuoyuan1",
              src: _vm._$s(
                4,
                "a-src",
                __webpack_require__(/*! ../../../static/p3/tuoyuan.png */ 96)
              ),
              _i: 4
            },
            on: { click: _vm.ShowTuoyuan1 }
          })
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "navBox"), attrs: { _i: 5 } },
        [
          _c("image", {
            staticClass: _vm._$s(6, "sc", "pre"),
            attrs: {
              src: _vm._$s(
                6,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowLeft.png */ 20)
              ),
              _i: 6
            },
            on: { click: _vm.handleLeftClick }
          }),
          _c("image", {
            staticClass: _vm._$s(7, "sc", "next"),
            attrs: {
              src: _vm._$s(
                7,
                "a-src",
                __webpack_require__(/*! ../../../static/p2/arrowRight.png */ 21)
              ),
              _i: 7
            },
            on: { click: _vm.handleRightClick }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 95 */
/*!**************************************************!*\
  !*** E:/progject/归档/drag2/static/p3/shoushi.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p3/shoushi.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijk1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDMvc2hvdXNoaS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///95\n");

/***/ }),
/* 96 */
/*!**************************************************!*\
  !*** E:/progject/归档/drag2/static/p3/tuoyuan.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/p3/tuoyuan.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijk2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcDMvdHVveXVhbi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///96\n");

/***/ }),
/* 97 */
/*!********************************************************************************************!*\
  !*** E:/progject/归档/drag2/pages/part3/step1/step1.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./step1.vue?vue&type=script&lang=js&mpType=page */ 98);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_step1_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI5Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N0ZXAxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGVwMS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///97\n");

/***/ }),
/* 98 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/pages/part3/step1/step1.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 103));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n\n\n  },\n  mounted: function mounted() {var _this = this;\n    this._xz = null;\n    this._has = false;\n    // 查询元素的坐标位置\n    var query = uni.createSelectorQuery().in(this);\n    query.\n    select('#door3').\n    boundingClientRect(function (data) {\n      __f__(\"log\", 'data1 = ', data, \" at pages/part3/step1/step1.vue:30\");\n      _this._xz = data;\n    }).\n    exec();\n  },\n  onLoad: function onLoad() {\n\n    plus.screen.lockOrientation('default');\n\n  },\n  onUnload: function onUnload() {\n\n    plus.screen.lockOrientation('portrait-primary');\n\n  },\n  methods: {\n    // 碰撞检测, target目标坐标 drag拖拽的目标\n    coll: function coll(domA, domB, callback) {\n      if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {\n        // console.log(\"未碰撞\")\n        callback();\n        return false; // 未碰撞\n      } else {\n        // console.log(\"碰撞....\")\n        return true; // 碰撞\n      }\n    },\n    onChange: function onChange(e) {var _this2 = this;\n      // console.log(\"移动了...\")\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      select('#hz').\n      boundingClientRect(function (data) {\n        _this2.coll(_this2._xz, data, function () {\n          if (!_this2._has) {\n            _this2._has = true;\n            __f__(\"log\", '移出了门...', \" at pages/part3/step1/step1.vue:66\");\n          }\n        });\n      }).\n      exec();\n    },\n    clickCzt1: function clickCzt1() {\n      uni.showToast({\n        title: '操作正确！' });\n\n      uni.navigateTo({\n        url: '/pages/part2/step6/step6' });\n\n    },\n    clickCzt2: function clickCzt2() {\n      uni.showToast({\n        title: '操作错误！',\n        icon: 'error' });\n\n    },\n    handleLeftClick: function handleLeftClick() {\n      // uni.navigateBack();\n      uni.navigateTo({\n        url: '/pages/part1/step2/step2' });\n\n    },\n    handleRightClick: function handleRightClick() {\n      uni.navigateTo({\n        url: '/pages/part2/step6/step6' });\n\n    },\n    ShowTuoyuan1: function ShowTuoyuan1() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var ShowTuoyuan1;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                ShowTuoyuan1 = true;if (!\n                ShowTuoyuan1) {_context.next = 3;break;}return _context.abrupt(\"return\",\n                false);case 3:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGFydDMvc3RlcDEvc3RlcDEudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBOzs7QUFHQSxHQUxBO0FBTUEsU0FOQSxxQkFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQURBLENBQ0EsUUFEQTtBQUVBLHNCQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLFFBTkE7QUFPQSxHQWxCQTtBQW1CQSxRQW5CQSxvQkFtQkE7O0FBRUE7O0FBRUEsR0F2QkE7QUF3QkEsVUF4QkEsc0JBd0JBOztBQUVBOztBQUVBLEdBNUJBO0FBNkJBO0FBQ0E7QUFDQSxRQUZBLGdCQUVBLElBRkEsRUFFQSxJQUZBLEVBRUEsUUFGQSxFQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBSEEsQ0FHQTtBQUNBLE9BSkEsTUFJQTtBQUNBO0FBQ0Esb0JBRkEsQ0FFQTtBQUNBO0FBQ0EsS0FYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFEQSxDQUNBLEtBREE7QUFFQSx3QkFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBTEE7QUFNQSxPQVRBO0FBVUEsVUFWQTtBQVdBLEtBMUJBO0FBMkJBLGFBM0JBLHVCQTJCQTtBQUNBO0FBQ0Esc0JBREE7O0FBR0E7QUFDQSx1Q0FEQTs7QUFHQSxLQWxDQTtBQW1DQSxhQW5DQSx1QkFtQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEscUJBRkE7O0FBSUEsS0F4Q0E7QUF5Q0EsbUJBekNBLDZCQXlDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FEQTs7QUFHQSxLQTlDQTtBQStDQSxvQkEvQ0EsOEJBK0NBO0FBQ0E7QUFDQSx1Q0FEQTs7QUFHQSxLQW5EQTtBQW9EQSxnQkFwREEsMEJBb0RBO0FBQ0EsNEJBREEsR0FDQSxJQURBO0FBRUEsNEJBRkE7QUFHQSxxQkFIQTs7QUFLQSxLQXpEQSxFQTdCQSxFIiwiZmlsZSI6Ijk4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiYm94XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRpdFwiPuivt+WciOWHuuS4jeivpeW4puWFpeWKqOeJqeaIv+eahOeJqeWTgTwvdmlldz5cclxuXHRcdDxpbWFnZSBjbGFzcz1cInNob3VzaGlcIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvcDMvc2hvdXNoaS5wbmdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJUdW9ZdWFuMWJveFwiPlxyXG5cdFx0XHQ8aW1hZ2UgaWQ9XCJ0dW95dWFuMVwiIEBjbGljaz1cIlNob3dUdW95dWFuMVwiIGNsYXNzPVwidHVveXVhbjFcIiBzcmM9XCIuLi8uLi8uLi9zdGF0aWMvcDMvdHVveXVhbi5wbmdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJuYXZCb3hcIj5cclxuXHRcdFx0PGltYWdlIEBjbGljaz1cImhhbmRsZUxlZnRDbGlja1wiIGNsYXNzPVwicHJlXCIgc3JjPVwiLi4vLi4vLi4vc3RhdGljL3AyL2Fycm93TGVmdC5wbmdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHQ8aW1hZ2UgQGNsaWNrPVwiaGFuZGxlUmlnaHRDbGlja1wiIGNsYXNzPVwibmV4dFwiIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9wMi9hcnJvd1JpZ2h0LnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cclxuXHRcdH07XHJcblx0fSxcclxuXHRtb3VudGVkKCkge1xyXG5cdFx0dGhpcy5feHogPSBudWxsO1xyXG5cdFx0dGhpcy5faGFzID0gZmFsc2U7XHJcblx0XHQvLyDmn6Xor6LlhYPntKDnmoTlnZDmoIfkvY3nva5cclxuXHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdHF1ZXJ5XHJcblx0XHRcdC5zZWxlY3QoJyNkb29yMycpXHJcblx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2RhdGExID0gJywgZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5feHogPSBkYXRhO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuZXhlYygpO1xyXG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHQgICBwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oJ2RlZmF1bHQnKTsgXHJcblx0XHQvLyAjZW5kaWZcclxuXHR9LFxyXG5cdG9uVW5sb2FkKCkge1xyXG5cdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHQgICBwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oJ3BvcnRyYWl0LXByaW1hcnknKTsgXHJcblx0XHQvLyAjZW5kaWZcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8vIOeisOaSnuajgOa1iywgdGFyZ2V055uu5qCH5Z2Q5qCHIGRyYWfmi5bmi73nmoTnm67moIdcclxuXHRcdGNvbGwoZG9tQSwgZG9tQiwgY2FsbGJhY2spIHtcclxuXHRcdFx0aWYgKGRvbUEubGVmdCA+IGRvbUIucmlnaHQgfHwgZG9tQS50b3AgPiBkb21CLmJvdHRvbSB8fCBkb21BLnJpZ2h0IDwgZG9tQi5sZWZ0IHx8IGRvbUEuYm90dG9tIDwgZG9tQi50b3ApIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIuacqueisOaSnlwiKVxyXG5cdFx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyDmnKrnorDmkp5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIueisOaSni4uLi5cIilcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLy8g56Kw5pKeXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIuenu+WKqOS6hi4uLlwiKVxyXG5cdFx0XHRjb25zdCBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcblx0XHRcdHF1ZXJ5XHJcblx0XHRcdFx0LnNlbGVjdCgnI2h6JylcclxuXHRcdFx0XHQuYm91bmRpbmdDbGllbnRSZWN0KGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jb2xsKHRoaXMuX3h6LCBkYXRhLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghdGhpcy5faGFzKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5faGFzID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn56e75Ye65LqG6ZeoLi4uJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmV4ZWMoKTtcclxuXHRcdH0sXHJcblx0XHRjbGlja0N6dDEoKSB7XHJcblx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdHRpdGxlOiAn5pON5L2c5q2j56Gu77yBJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwNi9zdGVwNidcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0Y2xpY2tDenQyKCkge1xyXG5cdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHR0aXRsZTogJ+aTjeS9nOmUmeivr++8gScsXHJcblx0XHRcdFx0aWNvbjogJ2Vycm9yJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVMZWZ0Q2xpY2soKSB7XHJcblx0XHRcdC8vIHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0MS9zdGVwMi9zdGVwMidcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlUmlnaHRDbGljaygpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9wYXJ0Mi9zdGVwNi9zdGVwNidcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgU2hvd1R1b3l1YW4xKCkge1xyXG5cdFx0XHRsZXQgU2hvd1R1b3l1YW4xID0gdHJ1ZVxyXG5cdFx0XHRpZiAoU2hvd1R1b3l1YW4xKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuQGltcG9ydCB1cmwoJy4vc3RlcDEuY3NzJyk7XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///98\n");

/***/ }),
/* 99 */
/*!************************************!*\
  !*** E:/progject/归档/drag2/App.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 100);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6Ijk5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///99\n");

/***/ }),
/* 100 */
/*!*************************************************************!*\
  !*** E:/progject/归档/drag2/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 101);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThoQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiIxMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///100\n");

/***/ }),
/* 101 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/progject/归档/drag2/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n    // 锁定横屏\n    plus.screen.lockOrientation(\"landscape-primary\");\n    // 锁定竖屏\n    // plus.screen.lockOrientation(\"portrait-primary\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:11\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:14\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsInBsdXMiLCJzY3JlZW4iLCJsb2NrT3JpZW50YXRpb24iLCJvblNob3ciLCJvbkhpZGUiXSwibWFwcGluZ3MiOiI7QUFDZTtBQUNkQSxVQUFRLEVBQUUsb0JBQVc7QUFDcEIsaUJBQVksWUFBWjtBQUNBO0FBQ0FDLFFBQUksQ0FBQ0MsTUFBTCxDQUFZQyxlQUFaLENBQTRCLG1CQUE1QjtBQUNBO0FBQ0E7QUFDQSxHQVBhO0FBUWRDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixpQkFBWSxVQUFaO0FBQ0EsR0FWYTtBQVdkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBYmEsRSIsImZpbGUiOiIxMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0XHQvLyDplIHlrprmqKrlsY9cblx0XHRwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oXCJsYW5kc2NhcGUtcHJpbWFyeVwiKTtcblx0XHQvLyDplIHlrprnq5blsY9cblx0XHQvLyBwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oXCJwb3J0cmFpdC1wcmltYXJ5XCIpO1xuXHR9LFxuXHRvblNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///101\n");

/***/ }),
/* 102 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 103 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 104);

/***/ }),
/* 104 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 105);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 105 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ })
],[[0,"app-config"]]]);