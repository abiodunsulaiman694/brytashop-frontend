webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/TakeMyMoneyPaystack.js":
/*!*******************************************!*\
  !*** ./components/TakeMyMoneyPaystack.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stripe-checkout */ "./node_modules/react-stripe-checkout/dist/main.js");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_paystack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-paystack */ "./node_modules/react-paystack/distribution/paystack.min.js");
/* harmony import */ var react_paystack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_paystack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "/Applications/projects/sick-fits/frontend/components/TakeMyMoneyPaystack.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_ORDER_MUTATION($token: String!) {\n    createOrder(token: $token) {\n      id\n      charge\n      total\n      items {\n        id\n        title\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var Pay = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "TakeMyMoneyPaystack__Pay",
  componentId: "sc-1b61eed-0"
})([".payButton{background:#3d7bc9;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}}"]);
var CREATE_ORDER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

function totalItems(cart) {
  return cart.reduce(function (tally, cartItem) {
    return tally + cartItem.quantity;
  }, 0);
}

var TakeMyMoneyPaystack =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TakeMyMoneyPaystack, _React$Component);

  function TakeMyMoneyPaystack() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TakeMyMoneyPaystack);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TakeMyMoneyPaystack)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTokenResponse",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res, createOrder) {
        var order;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.start();
                console.log("Ontoken paystack called", res); //manually call the mutation once we have the stripe token

                _context.next = 4;
                return createOrder({
                  variables: {
                    token: res.id
                  }
                }).catch(function (err) {
                  alert(err.message);
                });

              case 4:
                order = _context.sent;
                console.log({
                  order: order
                });
                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
                  pathname: "/order",
                  query: {
                    id: order.data.createOrder.id
                  }
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function () {
      console.log("Payment closed");
    });

    return _this;
  }

  _createClass(TakeMyMoneyPaystack, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, function (_ref2) {
        var me = _ref2.data.me;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
          mutation: CREATE_ORDER_MUTATION,
          refetchQueries: [{
            query: _User__WEBPACK_IMPORTED_MODULE_12__["CURRENT_USER_QUERY"]
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, function (createOrder) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Pay, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_paystack__WEBPACK_IMPORTED_MODULE_3___default.a, {
            text: "Make Payment",
            className: "payButton",
            callback: function callback(res) {
              return _this2.onTokenResponse(res, createOrder);
            },
            close: _this2.close,
            disabled: false,
            embed: true,
            email: me.email,
            amount: Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_10__["default"])(me.cart),
            paystackkey: "pk_test_cd998cf8585ed603d6ba32e8f9e76e8cb0430c18",
            tag: "button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }));
        });
      });
    }
  }]);

  return TakeMyMoneyPaystack;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TakeMyMoneyPaystack);

/***/ }),

/***/ "./node_modules/react-paystack/distribution/paystack.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-paystack/distribution/paystack.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayStack = function (_Component) {
  _inherits(PayStack, _Component);

  function PayStack(props) {
    _classCallCheck(this, PayStack);

    var _this = _possibleConstructorReturn(this, (PayStack.__proto__ || Object.getPrototypeOf(PayStack)).call(this, props));

    _this.payWithPaystack = _this.payWithPaystack.bind(_this);
    _this.loadScript = _this.loadScript.bind(_this);
    _this.loadscriptAndUpdateState = _this.loadscriptAndUpdateState.bind(_this);
    _this.state = _extends({}, _this.props, {
      scriptLoaded: null,
      class: _this.props.class || _this.props.className || ""
    });
    return _this;
  }

  _createClass(PayStack, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadscriptAndUpdateState();
    }
  }, {
    key: "loadscriptAndUpdateState",
    value: function loadscriptAndUpdateState() {
      var _this2 = this;

      this.setState({
        scriptLoaded: new Promise(function (resolve) {
          _this2.loadScript(function () {
            resolve();
          });
        })
      }, function () {
        if (_this2.props.embed) {
          _this2.payWithPaystack();
        }
      });
    }
  }, {
    key: "loadScript",
    value: function loadScript(callback) {
      var script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      document.getElementsByTagName("head")[0].appendChild(script);
      if (script.readyState) {
        // IE
        script.onreadystatechange = function () {
          if (script.readyState === "loaded" || script.readyState === "complete") {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        // Others
        script.onload = function () {
          callback();
        };
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      for (var index in prevProps) {
        if (prevState[index] !== this.state[index]) {
          this.loadscriptAndUpdateState();
        }
      }
    }
  }, {
    key: "payWithPaystack",
    value: function payWithPaystack() {
      var _this3 = this;

      this.state.scriptLoaded && this.state.scriptLoaded.then(function () {
        console.log('ref:', _this3.state.reference);
        var paystackOptions = {
          key: _this3.state.paystackkey,
          email: _this3.state.email,
          amount: _this3.state.amount,
          ref: _this3.state.reference,
          metadata: _this3.state.metadata || {},
          callback: function callback(response) {
            _this3.state.callback(response);
          },
          onClose: function onClose() {
            _this3.state.close();
          },
          currency: _this3.state.currency,
          plan: _this3.state.plan || "",
          quantity: _this3.state.quantity || "",
          subaccount: _this3.state.subaccount || "",
          transaction_charge: _this3.state.transaction_charge || 0,
          bearer: _this3.state.bearer || ""
        };
        if (_this3.state.embed) {
          paystackOptions.container = "paystackEmbedContainer";
        }
        var handler = window.PaystackPop.setup(paystackOptions);
        if (!_this3.state.embed) {
          handler.openIframe();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var CustomTag = "" + this.props.tag;
      return this.props.embed ? _react2.default.createElement("div", { id: "paystackEmbedContainer" }) : _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          CustomTag,
          {
            className: this.state.class,
            onClick: this.payWithPaystack,
            disabled: this.state.disabled
          },
          this.state.text
        )
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      for (var index in nextProps) {
        if (nextProps[index] !== prevState[index]) {
          return _defineProperty({
            scriptLoaded: null
          }, index, nextProps[index]);
        }
      }

      return null;
    }
  }]);

  return PayStack;
}(_react.Component);

PayStack.propTypes = {
  embed: _propTypes2.default.bool,
  text: _propTypes2.default.string,
  class: _propTypes2.default.string,
  metadata: _propTypes2.default.object,
  currency: _propTypes2.default.string,
  plan: _propTypes2.default.string,
  quantity: _propTypes2.default.string,
  subaccount: _propTypes2.default.string,
  transaction_charge: _propTypes2.default.number,
  bearer: _propTypes2.default.string,
  reference: _propTypes2.default.string.isRequired,
  email: _propTypes2.default.string.isRequired,
  amount: _propTypes2.default.number.isRequired, //in kobo
  paystackkey: _propTypes2.default.string.isRequired,
  callback: _propTypes2.default.func.isRequired,
  close: _propTypes2.default.func.isRequired,
  disabled: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOf(['button', 'a', 'input'])
};

PayStack.defaultProps = {
  tag: 'button',
  text: "Make Payment",
  currency: "NGN",
  disabled: false
};

exports.default = PayStack;

//# sourceMappingURL=paystack.min.js.map

/***/ })

})
//# sourceMappingURL=_app.js.bc382d21865635c6049b.hot-update.js.map