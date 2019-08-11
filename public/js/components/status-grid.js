(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-grid"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StatusGrid.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StatusGrid.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SsGridColumnHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SsGridColumnHeader */ "./resources/js/components/SsGridColumnHeader.vue");
/* harmony import */ var _SsGridPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SsGridPagination */ "./resources/js/components/SsGridPagination.vue");
/* harmony import */ var _SsPaginationLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SsPaginationLocation */ "./resources/js/components/SsPaginationLocation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "status-grid",
  components: {
    SsGridColumnHeader: _SsGridColumnHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    SsGridPaginationLocation: _SsPaginationLocation__WEBPACK_IMPORTED_MODULE_2__["default"],
    SsGridPagination: _SsGridPagination__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    params: {
      type: Object,
      "default": function _default() {}
    }
  },
  mounted: function mounted() {
    this.current_page = !isNaN(parseInt(this.params.Page)) ? parseInt(this.params.Page) : 1;
    this.query = this.params.Search;
    this.getData(this.current_page);
  },
  data: function data() {
    return {
      gridState: "wait",
      query: this.params.Search,
      gridData: [],
      current_page: 1,
      last_page: null,
      total: null,
      sortOrder: this.params.sortOrder,
      sortKey: this.params.sortKey,
      global_error_message: null,
      form_errors: {
        page: false,
        keyword: false,
        column: false,
        direction: false
      },
      server_message: false,
      try_logging_in: false
    };
  },
  methods: {
    goToNew: function goToNew() {
      window.location.href = "/status/create";
    },
    sortColumn: function sortColumn(obj) {
      this.sortKey = obj.sortField;
      this.sortOrder = obj.sortOrder;
      this.getData(1);
    },
    getData: function getData(new_page_number) {
      var _this = this;

      this.global_error_message = null;
      var getPage;
      getPage = this.getDataUrl(new_page_number) + "&column=" + this.sortKey + "&direction=" + this.sortOrder;
      this.gridData = [];
      this.gridState = "wait";

      if (getPage != null) {
        // We have a filter
        axios.get(getPage).then(function (response) {
          if (response.status === 200) {
            Object.keys(_this.form_errors).forEach(function (i) {
              return _this.form_errors[i] = false;
            });
            _this.gridData = response.data.data;
            _this.total = response.data.total;
            _this.current_page = response.data.current_page;
            _this.last_page = response.data.last_page || 1;
          } else {
            _this.server_message = res.status;
          }

          _this.gridState = "good";
        })["catch"](function (error) {
          if (error.response) {
            _this.gridState = "error";

            if (error.response.status === 422) {
              // Clear errors out
              Object.keys(_this.form_errors).forEach(function (i) {
                return _this.form_errors[i] = false;
              }); // Set current errors

              Object.keys(error.response.data.errors).forEach(function (i) {
                return _this.form_errors[i] = error.response.data.errors[i];
              });
            } else if (error.response.status === 404) {
              // Record not found
              _this.server_message = "Record not found";
              window.location = "/status";
            } else if (error.response.status === 419) {
              // Unknown status
              _this.server_message = "Unknown Status, please try to ";
              _this.try_logging_in = true;
            } else if (error.response.status === 500) {
              // Unknown status
              _this.server_message = "Server Error, please try to ";
              _this.try_logging_in = true;
            } else {
              _this.server_message = error.response.data.message;
            }
          } else {
            console.log(error.response);
            _this.server_message = error;
          }
        });
      }
    },
    getDataUrl: function getDataUrl(new_page_number) {
      var url = "api-status?";
      var queryParams = [];
      queryParams.push("page=" + new_page_number);
      if (this.isDefined(this.query) && this.query.trim().length > 0) queryParams.push("keyword=" + this.query); //                if (this.isDefined(this.searchType)) queryParams.push('search_type=' + this.searchType);
      //                if (this.isDefined(this.showFilter)) queryParams.push('show_filter=' + this.showFilter);
      //                if (this.isDefined(this.contractorSelected)) queryParams.push('contractor_id=' + this.contractorSelected);

      if (queryParams.length > 0) url += queryParams.join("&");
      return url;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StatusGrid.vue?vue&type=template&id=629d71fa&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StatusGrid.vue?vue&type=template&id=629d71fa& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.global_error_message
      ? _c(
          "div",
          { staticClass: "alert alert-danger", attrs: { role: "alert" } },
          [_vm._v("\n        " + _vm._s(_vm.global_error_message) + "\n    ")]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.server_message !== false
      ? _c(
          "div",
          { staticClass: "alert alert-danger", attrs: { role: "alert" } },
          [
            _vm._v("\n        " + _vm._s(this.server_message) + "\n        "),
            _vm.try_logging_in
              ? _c("a", { attrs: { href: "/login" } }, [_vm._v("Login")])
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "grid-top row mb-0 align-items-center" }, [
      _c("div", { staticClass: "col-lg-8 mb-2" }, [
        _c(
          "form",
          { staticClass: "form-inline mb-0" },
          [
            _c(
              "a",
              {
                staticClass: "btn btn-primary mb-3 mb-sm-2 mr-3",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k(
                        $event.keyCode,
                        "default",
                        undefined,
                        $event.key,
                        undefined
                      )
                    ) {
                      return null
                    }
                    return _vm.goToNew($event)
                  }
                }
              },
              [_vm._v("Add")]
            ),
            _vm._v(" "),
            _c(
              "search-form-group",
              {
                staticClass: "mb-0",
                attrs: { errors: _vm.form_errors.keyword, label: "Search" }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.query,
                      expression: "query"
                    }
                  ],
                  staticClass: "form-control mb-2",
                  attrs: {
                    name: "query",
                    id: "grid-filter-query-copy",
                    type: "text",
                    placeholder: "Name search",
                    "aria-label": "Name search"
                  },
                  domProps: { value: _vm.query },
                  on: {
                    keyup: function($event) {
                      return _vm.getData(1)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.query = $event.target.value
                    }
                  }
                })
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4 text-lg-right mb-2" })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "grid no-more-tables table-responsive mb-4" }, [
      _c("table", { staticClass: "table table-striped table-hover mb-0" }, [
        _c("thead", [
          _c(
            "tr",
            [
              _c(
                "ss-grid-column-header",
                {
                  attrs: {
                    selectedKey: _vm.sortKey,
                    title: "Sort by Name",
                    params: {
                      sortField: "name",
                      InitialSortOrder: "asc"
                    }
                  },
                  on: { selectedSort: _vm.sortColumn }
                },
                [_vm._v("\n                    Name\n                ")]
              ),
              _vm._v(" "),
              _c(
                "ss-grid-column-header",
                {
                  attrs: {
                    selectedKey: _vm.sortKey,
                    title: "Sort by Alias",
                    params: {
                      sortField: "alias",
                      InitialSortOrder: "asc"
                    }
                  },
                  on: { selectedSort: _vm.sortColumn }
                },
                [_vm._v("\n                    Alias\n                ")]
              ),
              _vm._v(" "),
              _c(
                "ss-grid-column-header",
                {
                  attrs: {
                    selectedKey: _vm.sortKey,
                    title: "Sort by Sequence",
                    params: {
                      sortField: "sequence",
                      InitialSortOrder: "asc"
                    }
                  },
                  on: { selectedSort: _vm.sortColumn }
                },
                [_vm._v("\n                    Sequence\n                ")]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticClass: "text-center", staticStyle: { width: "20%" } },
                [_vm._v("Actions")]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm.gridState == "wait" ? _c("tr", [_vm._m(0)]) : _vm._e(),
            _vm._v(" "),
            _vm.gridState == "error" ? _c("tr", [_vm._m(1)]) : _vm._e(),
            _vm._v(" "),
            _vm.gridState == "good" && !_vm.gridData.length
              ? _c("tr", [_vm._m(2)])
              : _vm._l(this.gridData, function(row) {
                  return _c("tr", { key: row.id }, [
                    _c("td", { attrs: { "data-title": "Name" } }, [
                      _vm.params.CanShow == "1"
                        ? _c("a", { attrs: { href: "/status/" + row.id } }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(row.name) +
                                "\n                    "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.params.CanShow != "1"
                        ? _c("span", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(row.name) +
                                "\n                        "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { "data-title": "Alias" } }, [
                      _vm._v(_vm._s(row.alias))
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { "data-title": "Sequence" } }, [
                      _vm._v(_vm._s(row.sequence))
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "text-lg-center text-nowrap",
                        attrs: { "data-title": "Actions" }
                      },
                      [
                        _vm.params.CanEdit
                          ? _c(
                              "a",
                              {
                                staticClass: "grid-action-item",
                                attrs: { href: "/status/" + row.id + "/edit" }
                              },
                              [
                                _vm._v(
                                  "\n                        Edit\n                    "
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  ])
                })
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "grid-bottom row mb-0 align-items-center" },
      [
        _vm._m(3),
        _vm._v(" "),
        _c("ss-grid-pagination", {
          staticClass: "col-lg-4 mb-2",
          attrs: {
            current_page: _vm.current_page,
            last_page: _vm.last_page,
            total: _vm.total
          },
          on: {
            "goto-page": function($event) {
              return _vm.getData.apply(void 0, arguments)
            }
          }
        }),
        _vm._v(" "),
        _c("ss-grid-pagination-location", {
          staticClass: "col-lg-4 text-lg-right mb-2",
          attrs: {
            current_page: _vm.current_page,
            last_page: _vm.last_page,
            total: _vm.total
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "grid-alert", attrs: { colspan: "4" } }, [
      _c("div", { staticClass: "alert alert-info", attrs: { role: "alert" } }, [
        _vm._v("\n                        Please wait.\n                    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "grid-alert", attrs: { colspan: "4" } }, [
      _c(
        "div",
        { staticClass: "alert alert-warning", attrs: { role: "alert" } },
        [
          _vm._v(
            "\n                        Error please try again.\n                    "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "grid-alert", attrs: { colspan: "4" } }, [
      _c(
        "div",
        { staticClass: "alert alert-warning", attrs: { role: "alert" } },
        [
          _vm._v(
            "\n                        No matching records found.\n                    "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-4 mb-2" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-primary mb-2 mr-2",
          attrs: { href: "/status/download" }
        },
        [_vm._v("Export to Excel")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-primary mb-2 mr-2",
          attrs: { href: "/status/print" }
        },
        [_vm._v("Print PDF")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/StatusGrid.vue":
/*!************************************************!*\
  !*** ./resources/js/components/StatusGrid.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatusGrid_vue_vue_type_template_id_629d71fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusGrid.vue?vue&type=template&id=629d71fa& */ "./resources/js/components/StatusGrid.vue?vue&type=template&id=629d71fa&");
/* harmony import */ var _StatusGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusGrid.vue?vue&type=script&lang=js& */ "./resources/js/components/StatusGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatusGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatusGrid_vue_vue_type_template_id_629d71fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatusGrid_vue_vue_type_template_id_629d71fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/StatusGrid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/StatusGrid.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/StatusGrid.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StatusGrid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StatusGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/StatusGrid.vue?vue&type=template&id=629d71fa&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/StatusGrid.vue?vue&type=template&id=629d71fa& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusGrid_vue_vue_type_template_id_629d71fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./StatusGrid.vue?vue&type=template&id=629d71fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StatusGrid.vue?vue&type=template&id=629d71fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusGrid_vue_vue_type_template_id_629d71fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusGrid_vue_vue_type_template_id_629d71fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);