(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charge-form"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChargeForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChargeForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "charge-form",
  props: {
    record: {
      type: [Boolean, Object],
      default: false
    },
    csrf_token: {
      type: String,
      default: ""
    }
  },
  data: function data() {
    return {
      form_data: {
        // _method: 'patch',
        _token: this.csrf_token,
        id: 0,
        conviction_id: 0,
        charge: "",
        citation: "",
        conviction_class_type: "",
        conviction_charge_type: "",
        sentence: "",
        convicted_text: "",
        eligible_text: "",
        please_expunge_text: "",
        to_print: "",
        notes: "",
        convicted: 0,
        eligible: 0,
        please_expunge: 0
      },
      form_errors: {
        id: false,
        conviction_id: false,
        charge: false,
        citation: false,
        conviction_class_type: false,
        conviction_charge_type: false,
        sentence: false,
        convicted_text: false,
        eligible_text: false,
        please_expunge_text: false,
        to_print: false,
        notes: false,
        convicted: false,
        eligible: false,
        please_expunge: false
      },
      server_message: false,
      try_logging_in: false,
      processing: false,
      isShowing: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.record !== false) {
      // this.form_data._method = 'patch';
      Object.keys(this.record).forEach(function (i) {
        return _this.form_data[i] = _this.record[i];
      });
    } else {// this.form_data._method = 'post';
    }
  },
  computed: {
    dsp_convicted: function dsp_convicted() {
      var q = this.form_data.convicted;
      return parseInt(q) ? ' -- Convicted' : '';
    },
    dsp_eligible: function dsp_eligible() {
      var q = this.form_data.eligible;
      return parseInt(q) ? ', Eligible' : '';
    },
    dsp_please_expunge: function dsp_please_expunge() {
      var q = this.form_data.please_expunge;
      return parseInt(q) ? ', PleaseExpunge' : '';
    }
  },
  methods: {
    handleSubmit: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var url, amethod;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.server_message = false;
                this.processing = true;
                url = "";
                amethod = "";

                if (this.form_data.id) {
                  url = "/charge/" + this.form_data.id;
                  amethod = "put";
                } else {
                  url = "/charge";
                  amethod = "post";
                }

                _context.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_1___default()({
                  method: amethod,
                  url: url,
                  data: this.form_data
                }).then(function (res) {
                  if (res.status === 200) {
                    window.location = "/charge";
                  } else {
                    _this2.server_message = res.status;
                  }
                }).catch(function (error) {
                  if (error.response) {
                    if (error.response.status === 422) {
                      // Clear errors out
                      Object.keys(_this2.form_errors).forEach(function (i) {
                        return _this2.form_errors[i] = false;
                      }); // Set current errors

                      Object.keys(error.response.data.errors).forEach(function (i) {
                        return _this2.form_errors[i] = error.response.data.errors[i];
                      });
                    } else if (error.response.status === 404) {
                      // Record not found
                      _this2.server_message = "Record not found";
                      window.location = "/charge";
                    } else if (error.response.status === 419) {
                      // Unknown status
                      _this2.server_message = "Unknown Status, please try to ";
                      _this2.try_logging_in = true;
                    } else if (error.response.status === 500) {
                      // Unknown status
                      _this2.server_message = "Server Error, please try to ";
                      _this2.try_logging_in = true;
                    } else {
                      _this2.server_message = error.response.data.message;
                    }
                  } else {
                    console.log(error.response);
                    _this2.server_message = error;
                  }

                  _this2.processing = false;
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit() {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChargeForm.vue?vue&type=template&id=2b296b7a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChargeForm.vue?vue&type=template&id=2b296b7a& ***!
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
    _c(
      "div",
      {
        staticClass: "row",
        staticStyle: {
          "background-color": "lightgoldenrodyellow",
          "margin-top": "1em"
        }
      },
      [
        _c("div", { staticClass: "col-md-6" }, [
          _c("h5", [
            _vm._v(
              _vm._s(_vm.form_data.citation) +
                " " +
                _vm._s(_vm.form_data.charge) +
                " "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-2" }, [
          _c("h5", [
            _vm._v(
              "\n                " +
                _vm._s(_vm.form_data.conviction_charge_type) +
                " " +
                _vm._s(_vm.form_data.conviction_class_type) +
                "\n                "
            ),
            _vm.form_data.notes ? _c("span", [_vm._v(" [Note]")]) : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.dsp_convicted) +
              " " +
              _vm._s(_vm.dsp_eligible) +
              " " +
              _vm._s(_vm.dsp_please_expunge) +
              "\n        "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1" }, [
          _c("img", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShowing,
                expression: "isShowing"
              }
            ],
            staticClass: "help-button d-print-none",
            staticStyle: { width: "1.8em", "margin-left": ".55em" },
            attrs: { src: "/img/icons/noun_collapse_2091048_000000.png" },
            on: {
              click: function($event) {
                _vm.isShowing ^= true
              }
            }
          }),
          _vm._v(" "),
          _c("img", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.isShowing,
                expression: "!isShowing"
              }
            ],
            staticClass: "help-button d-print-none",
            staticStyle: {
              width: "1.5em",
              "margin-left": ".55em",
              "margin-bottom": "1em"
            },
            attrs: { src: "/img/icons/noun_expand_1211939_000000.png" },
            on: {
              click: function($event) {
                _vm.isShowing ^= true
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.isShowing,
                expression: "!isShowing"
              }
            ],
            staticClass: "col-md-12",
            staticStyle: { "padding-left": "4em" }
          },
          [
            _vm._v(
              "\n            " + _vm._s(_vm.form_data.notes) + "\n        "
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isShowing,
            expression: "isShowing"
          }
        ]
      },
      [
        _c(
          "form",
          {
            staticClass: "form-horizontal",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.handleSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-3" },
                [
                  _c(
                    "std-form-group",
                    {
                      attrs: {
                        label: "Convicted",
                        "label-for": "convicted",
                        errors: _vm.form_errors.convicted
                      }
                    },
                    [
                      _c("fld-convicted", {
                        attrs: { name: "convicted" },
                        model: {
                          value: _vm.form_data.convicted,
                          callback: function($$v) {
                            _vm.$set(_vm.form_data, "convicted", $$v)
                          },
                          expression: "form_data.convicted"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-3" },
                [
                  _c(
                    "std-form-group",
                    {
                      attrs: {
                        label: "Eligible",
                        "label-for": "eligible",
                        errors: _vm.form_errors.eligible
                      }
                    },
                    [
                      _c("fld-eligible", {
                        attrs: { name: "eligible" },
                        model: {
                          value: _vm.form_data.eligible,
                          callback: function($$v) {
                            _vm.$set(_vm.form_data, "eligible", $$v)
                          },
                          expression: "form_data.eligible"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-3" },
                [
                  _c(
                    "std-form-group",
                    {
                      attrs: {
                        label: "Please Expunge",
                        "label-for": "please_expunge",
                        errors: _vm.form_errors.please_expunge
                      }
                    },
                    [
                      _c("fld-expunge", {
                        attrs: { name: "please_expunge" },
                        model: {
                          value: _vm.form_data.please_expunge,
                          callback: function($$v) {
                            _vm.$set(_vm.form_data, "please_expunge", $$v)
                          },
                          expression: "form_data.please_expunge"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-2" },
                [
                  _c(
                    "std-form-group",
                    {
                      attrs: {
                        label: "Citation",
                        "label-for": "citation",
                        errors: _vm.form_errors.citation
                      }
                    },
                    [
                      _c("fld-input", {
                        attrs: { name: "citation" },
                        model: {
                          value: _vm.form_data.citation,
                          callback: function($$v) {
                            _vm.$set(_vm.form_data, "citation", $$v)
                          },
                          expression: "form_data.citation"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-10" },
                [
                  _c(
                    "std-form-group",
                    {
                      attrs: {
                        label: "Charge",
                        "label-for": "charge",
                        errors: _vm.form_errors.charge
                      }
                    },
                    [
                      _c("fld-input", {
                        attrs: { name: "charge" },
                        model: {
                          value: _vm.form_data.charge,
                          callback: function($$v) {
                            _vm.$set(_vm.form_data, "charge", $$v)
                          },
                          expression: "form_data.charge"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-2" },
                [
                  _c(
                    "std-form-group",
                    {
                      attrs: {
                        label: "Charge Type",
                        "label-for": "conviction_charge_type",
                        errors: _vm.form_errors.conviction_charge_type
                      }
                    },
                    [
                      _c("fld-charge-type", {
                        attrs: { name: "conviction_charge_type" },
                        model: {
                          value: _vm.form_data.conviction_charge_type,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form_data,
                              "conviction_charge_type",
                              $$v
                            )
                          },
                          expression: "form_data.conviction_charge_type"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-2" },
                [
                  _c(
                    "std-form-group",
                    {
                      attrs: {
                        label: "Class",
                        "label-for": "conviction_class_type",
                        errors: _vm.form_errors.conviction_class_type
                      }
                    },
                    [
                      _c("fld-charge-class", {
                        attrs: { name: "conviction_class_type" },
                        model: {
                          value: _vm.form_data.conviction_class_type,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form_data,
                              "conviction_class_type",
                              $$v
                            )
                          },
                          expression: "form_data.conviction_class_type"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-8" },
                [
                  _c(
                    "std-form-group",
                    {
                      attrs: {
                        label: "Sentence",
                        "label-for": "sentence",
                        errors: _vm.form_errors.sentence
                      }
                    },
                    [
                      _c("fld-input", {
                        attrs: { name: "sentence" },
                        model: {
                          value: _vm.form_data.sentence,
                          callback: function($$v) {
                            _vm.$set(_vm.form_data, "sentence", $$v)
                          },
                          expression: "form_data.sentence"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-12" },
                [
                  _c(
                    "std-form-group",
                    {
                      attrs: {
                        label: "Notes",
                        "label-for": "notes",
                        errors: _vm.form_errors.notes
                      }
                    },
                    [
                      _c("fld-input", {
                        attrs: { name: "notes" },
                        model: {
                          value: _vm.form_data.notes,
                          callback: function($$v) {
                            _vm.$set(_vm.form_data, "notes", $$v)
                          },
                          expression: "form_data.notes"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mt-4" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit", disabled: _vm.processing }
                    },
                    [
                      this.form_data.id
                        ? _c("span", [_vm._v("Change Charge")])
                        : _c("span", [_vm._v("Add Charge")])
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm._m(0)
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 text-md-right mt-2 mt-md-0" }, [
      _c("a", { staticClass: "btn btn-default", attrs: { href: "/charge" } }, [
        _vm._v("Cancel Charge")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ChargeForm.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ChargeForm.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChargeForm_vue_vue_type_template_id_2b296b7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChargeForm.vue?vue&type=template&id=2b296b7a& */ "./resources/js/components/ChargeForm.vue?vue&type=template&id=2b296b7a&");
/* harmony import */ var _ChargeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChargeForm.vue?vue&type=script&lang=js& */ "./resources/js/components/ChargeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChargeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChargeForm_vue_vue_type_template_id_2b296b7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChargeForm_vue_vue_type_template_id_2b296b7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ChargeForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ChargeForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ChargeForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChargeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChargeForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChargeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChargeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ChargeForm.vue?vue&type=template&id=2b296b7a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ChargeForm.vue?vue&type=template&id=2b296b7a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChargeForm_vue_vue_type_template_id_2b296b7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ChargeForm.vue?vue&type=template&id=2b296b7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChargeForm.vue?vue&type=template&id=2b296b7a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChargeForm_vue_vue_type_template_id_2b296b7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChargeForm_vue_vue_type_template_id_2b296b7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);