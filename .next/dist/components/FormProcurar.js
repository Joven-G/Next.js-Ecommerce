'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Akari\\Desktop\\mc437-ecommerce\\components\\FormProcurar.js';


var FormProcurar = function (_React$Component) {
  (0, _inherits3.default)(FormProcurar, _React$Component);

  function FormProcurar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FormProcurar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FormProcurar.__proto__ || (0, _getPrototypeOf2.default)(FormProcurar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FormProcurar, [{
    key: 'getValidationState',
    value: function getValidationState() {
      var length = this.state.value.length;
      if (length > 3) return 'success';else if (length > 2) return 'warning';else if (length > 0) return 'error';
      return null;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ value: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactBootstrap.Navbar.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_reactBootstrap.FormGroup, {
        controlId: 'formBasicText',
        validationState: this.getValidationState(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_reactBootstrap.FormControl, {
        type: 'text',
        value: this.state.value,
        placeholder: 'Procurar Produtos',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), ' ', _react2.default.createElement(_reactBootstrap.Button, { type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Procurar')));
    }
  }]);

  return FormProcurar;
}(_react2.default.Component);

exports.default = FormProcurar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvcm1Qcm9jdXJhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkdyaWQiLCJUaHVtYm5haWwiLCJCdXR0b24iLCJDb2wiLCJSb3ciLCJDbGVhcmZpeCIsIkltYWdlIiwiQ29udHJvbExhYmVsIiwiRm9ybUNvbnRyb2wiLCJGb3JtR3JvdXAiLCJIZWxwQmxvY2siLCJNZW51SXRlbSIsIk5hdiIsIk5hdkRyb3Bkb3duIiwiTmF2SXRlbSIsIk5hdmJhciIsIkZvcm0iLCJGb3JtUHJvY3VyYXIiLCJzdGF0ZSIsInZhbHVlIiwibGVuZ3RoIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwiZ2V0VmFsaWRhdGlvblN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBVyxBQUMxQixBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUzs7Ozs7OztJLEFBRVk7Ozs7Ozs7Ozs7Ozs7O3dOLEFBRW5CO2FBQ1MsQSxBQUREO0FBQUEsQUFDTjs7Ozs7eUNBR21CLEFBQ25CO1VBQU0sU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQTFCLEFBQWdDLEFBQ2hDO1VBQUksU0FBSixBQUFhLEdBQUcsT0FBaEIsQUFBZ0IsQUFBTyxlQUNsQixJQUFJLFNBQUosQUFBYSxHQUFHLE9BQWhCLEFBQWdCLEFBQU8sZUFDdkIsSUFBSSxTQUFKLEFBQWEsR0FBRyxPQUFBLEFBQU8sQUFDNUI7YUFBQSxBQUFPLEFBQ1I7Ozs7aUNBRVksQSxHQUFHLEFBQ2Q7V0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLEVBQUEsQUFBRSxPQUF6QixBQUFjLEFBQWtCLEFBQ2pDOzs7OzZCQUVRLEFBQ1A7NkJBQ0csY0FBRCx1QkFBQSxBQUFROztvQkFBUjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7bUJBQUQsQUFDWSxBQUNWO3lCQUFpQixLQUZuQixBQUVtQixBQUFLOztvQkFGeEI7c0JBQUEsQUFJRTtBQUpGO0FBQ0UseUJBR0EsQUFBQztjQUFELEFBQ08sQUFDTDtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO3FCQUhGLEFBR2MsQUFDWjtrQkFBVSxLQUpaLEFBSWlCOztvQkFKakI7c0JBSkYsQUFJRSxBQU1DO0FBTkQ7QUFDRSxVQUxKLEFBV0EscUJBQUEsQUFBQyx3Q0FBTyxNQUFSLEFBQWE7b0JBQWI7c0JBQUE7QUFBQTtTQWJKLEFBQ0UsQUFDRSxBQVdBLEFBTUw7Ozs7O0VBdEN1QyxnQkFBTSxBOztrQkFBM0IsQSIsImZpbGUiOiJGb3JtUHJvY3VyYXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWthcmkvRGVza3RvcC9tYzQzNy1lY29tbWVyY2UifQ==