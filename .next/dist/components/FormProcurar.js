'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/lucasmatos/Documents/Applications/mc437-ecommerce/components/FormProcurar.js';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9ybVByb2N1cmFyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIlRodW1ibmFpbCIsIkJ1dHRvbiIsIkNvbCIsIlJvdyIsIkNsZWFyZml4IiwiSW1hZ2UiLCJDb250cm9sTGFiZWwiLCJGb3JtQ29udHJvbCIsIkZvcm1Hcm91cCIsIkhlbHBCbG9jayIsIk1lbnVJdGVtIiwiTmF2IiwiTmF2RHJvcGRvd24iLCJOYXZJdGVtIiwiTmF2YmFyIiwiRm9ybSIsIkZvcm1Qcm9jdXJhciIsInN0YXRlIiwidmFsdWUiLCJsZW5ndGgiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJnZXRWYWxpZGF0aW9uU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFXLEFBQzFCLEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTOzs7Ozs7O0ksQUFFWTs7Ozs7Ozs7Ozs7Ozs7d04sQUFFbkI7YUFDUyxBLEFBREQ7QUFBQSxBQUNOOzs7Ozt5Q0FHbUIsQUFDbkI7VUFBTSxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBMUIsQUFBZ0MsQUFDaEM7VUFBSSxTQUFKLEFBQWEsR0FBRyxPQUFoQixBQUFnQixBQUFPLGVBQ2xCLElBQUksU0FBSixBQUFhLEdBQUcsT0FBaEIsQUFBZ0IsQUFBTyxlQUN2QixJQUFJLFNBQUosQUFBYSxHQUFHLE9BQUEsQUFBTyxBQUM1QjthQUFBLEFBQU8sQUFDUjs7OztpQ0FFWSxBLEdBQUcsQUFDZDtXQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sRUFBQSxBQUFFLE9BQXpCLEFBQWMsQUFBa0IsQUFDakM7Ozs7NkJBRVEsQUFDUDs2QkFDRyxjQUFELHVCQUFBLEFBQVE7O29CQUFSO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzttQkFBRCxBQUNZLEFBQ1Y7eUJBQWlCLEtBRm5CLEFBRW1CLEFBQUs7O29CQUZ4QjtzQkFBQSxBQUlFO0FBSkY7QUFDRSx5QkFHQSxBQUFDO2NBQUQsQUFDTyxBQUNMO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7cUJBSEYsQUFHYyxBQUNaO2tCQUFVLEtBSlosQUFJaUI7O29CQUpqQjtzQkFKRixBQUlFLEFBTUM7QUFORDtBQUNFLFVBTEosQUFXQSxxQkFBQSxBQUFDLHdDQUFPLE1BQVIsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBYkosQUFDRSxBQUNFLEFBV0EsQUFNTDs7Ozs7RUF0Q3VDLGdCQUFNLEE7O2tCQUEzQixBIiwiZmlsZSI6IkZvcm1Qcm9jdXJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbHVjYXNtYXRvcy9Eb2N1bWVudHMvQXBwbGljYXRpb25zL21jNDM3LWVjb21tZXJjZSJ9