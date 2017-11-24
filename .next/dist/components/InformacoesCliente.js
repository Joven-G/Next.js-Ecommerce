"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("next/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("next/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("next/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("next/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("next/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/pchinen/git/mc437-ecommerce/components/InformacoesCliente.js";


var InformacoesCliente = function (_React$Component) {
  (0, _inherits3.default)(InformacoesCliente, _React$Component);

  function InformacoesCliente() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InformacoesCliente);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InformacoesCliente.__proto__ || (0, _getPrototypeOf2.default)(InformacoesCliente)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      usuario: "Usuario",
      nome: "Nome",
      endereco: "Endereco"
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(InformacoesCliente, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_reactBootstrap.Table, { bordered: true, striped: true, responsive: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Cliente:"), _react2.default.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.state.usuario)), _react2.default.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Nome:"), _react2.default.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, this.state.nome)), _react2.default.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Endere\xE7o:"), _react2.default.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, this.state.endereco))));
    }
  }]);

  return InformacoesCliente;
}(_react2.default.Component);

exports.default = InformacoesCliente;

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5mb3JtYWNvZXNDbGllbnRlLmpzIl0sIm5hbWVzIjpbIlRhYmxlIiwiSW5mb3JtYWNvZXNDbGllbnRlIiwic3RhdGUiLCJ1c3VhcmlvIiwibm9tZSIsImVuZGVyZWNvIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7Ozs7SSxBQUVZOzs7Ozs7Ozs7Ozs7OztvTyxBQUVqQjtlQUFRLEFBQ0ssQUFDVDtZQUZJLEFBRUUsQUFDTjtnQkFISSxBLEFBR007QUFITixBQUNKOzs7Ozs2QkFLSyxBQUNMOzZCQUNGLEFBQUMsdUNBQU0sVUFBUCxNQUFnQixTQUFoQixNQUF3QixZQUF4QjtvQkFBQTtzQkFBQSxBQUlFO0FBSkY7T0FBQSxrQkFJRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBR0EsNkJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BTlosQUFDRSxBQUlFLEFBQ2MsQUFHaEIsMkJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUdBLDBCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQWRaLEFBU0UsQUFJRSxBQUNjLEFBR2hCLHdCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFHQSxpQ0FBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssTUEzQlosQUFDRixBQUlFLEFBaUJFLEFBSUUsQUFDYyxBQU1yQjs7Ozs7RUExQzJDLGdCQUFNLEE7O2tCQUFqQyxBOztBQTJDcEIiLCJmaWxlIjoiSW5mb3JtYWNvZXNDbGllbnRlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3BjaGluZW4vZ2l0L21jNDM3LWVjb21tZXJjZSJ9