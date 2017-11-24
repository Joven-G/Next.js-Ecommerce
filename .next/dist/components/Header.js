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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = require('react-bootstrap');

var _FormProcurar = require('./FormProcurar');

var _FormProcurar2 = _interopRequireDefault(_FormProcurar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Akari\\Desktop\\mc437-ecommerce\\components\\Header.js';


var linkStyle = {
  marginRight: 15
};

var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      logged: true
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var NavUsuario;
      var NavLogin;

      if (this.state.logged === true) {
        NavUsuario = _react2.default.createElement(_reactBootstrap.Navbar.Text, { pullRight: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, 'Signed in as: ', _react2.default.createElement(_reactBootstrap.Navbar.Link, { href: '#', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, 'Mark Otto'));
        NavLogin = _react2.default.createElement(_reactBootstrap.Nav, { pullRight: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '#', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, 'Logout'));
      } else {
        NavUsuario = _react2.default.createElement(_reactBootstrap.Navbar.Text, { pullRight: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, 'Signed in as: Visitante');
        NavLogin = _react2.default.createElement(_reactBootstrap.Nav, { pullRight: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '/login', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, 'Login'));
      }

      console.log(this.state.logged);
      console.log(NavUsuario);
      console.log(NavLogin);

      return _react2.default.createElement('div', { 'class': 'header', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_reactBootstrap.Navbar, { fluid: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_reactBootstrap.Navbar.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_reactBootstrap.Navbar.Brand, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('a', { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'E-Commerce'))), _react2.default.createElement(_reactBootstrap.Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 1, href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Home')), _react2.default.createElement(_reactBootstrap.Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'About')), NavLogin, NavUsuario, _react2.default.createElement(_reactBootstrap.Nav, { pullRight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 3, href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Carrinho')), _react2.default.createElement(_FormProcurar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      })));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJCdXR0b24iLCJDb250cm9sTGFiZWwiLCJGb3JtQ29udHJvbCIsIkZvcm1Hcm91cCIsIkhlbHBCbG9jayIsIk1lbnVJdGVtIiwiTmF2IiwiTmF2RHJvcGRvd24iLCJOYXZJdGVtIiwiTmF2YmFyIiwiRm9ybSIsIkZvcm1Qcm9jdXJhciIsImxpbmtTdHlsZSIsIm1hcmdpblJpZ2h0IiwiSGVhZGVyIiwic3RhdGUiLCJsb2dnZWQiLCJOYXZVc3VhcmlvIiwiTmF2TG9naW4iLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVM7O0FBRVQsQUFBTyxBQUFrQjs7Ozs7Ozs7O0FBRXpCLElBQU07ZUFBTixBQUFrQixBQUNIO0FBREcsQUFDaEI7O0ksQUFHbUI7Ozs7Ozs7Ozs7Ozs7OzRNLEFBRW5CO2NBQVEsQSxBQUNFO0FBREYsQUFDTjs7Ozs7NkJBR1MsQUFDSDtVQUFBLEFBQUksQUFDSjtVQUFBLEFBQUksQUFFSjs7VUFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQWQsQUFBeUIsTUFBSyxBQUMxQjtxQ0FDRyxjQUFELHVCQUFBLEFBQVEsUUFBSyxXQUFiO3NCQUFBO3dCQUFBO0FBQUE7U0FBQSxFQUNnQixrQ0FBQyxjQUFELHVCQUFBLEFBQVEsUUFBSyxNQUFiLEFBQWtCO3NCQUFsQjt3QkFBQTtBQUFBO1dBRmxCLEFBQ0UsQUFDZ0IsQUFHbEI7bUNBQ0UsQUFBQyxxQ0FBSSxXQUFMO3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLEFBQUMseUNBQVEsVUFBVCxBQUFtQixHQUFHLE1BQXRCLEFBQTJCO3NCQUEzQjt3QkFBQTtBQUFBO1dBRkosQUFDRSxBQUNFLEFBS1A7QUFiRCxhQWFLLEFBQ0Q7cUNBQ0csY0FBRCx1QkFBQSxBQUFRLFFBQUssV0FBYjtzQkFBQTt3QkFBQTtBQUFBO1NBQUEsRUFERixBQUNFLEFBSUY7bUNBQ0UsQUFBQyxxQ0FBSSxXQUFMO3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLEFBQUMseUNBQVEsVUFBVCxBQUFtQixHQUFHLE1BQXRCLEFBQTJCO3NCQUEzQjt3QkFBQTtBQUFBO1dBRkosQUFDRSxBQUNFLEFBS1A7QUFFRDs7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtjQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7OzZCQUNFLGNBQUEsU0FBSyxTQUFMLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyx3Q0FBTyxPQUFSO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHVCQUFBLEFBQVE7O29CQUFSO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsdUJBQUEsQUFBUTs7b0JBQVI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUTtvQkFBUjtzQkFBQTtBQUFBO1NBSE4sQUFDRSxBQUNFLEFBQ0UsQUFHSixpQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFRLFVBQVQsQUFBbUIsR0FBRyxNQUF0QixBQUEyQjtvQkFBM0I7c0JBQUE7QUFBQTtTQVBKLEFBTUUsQUFDRSxBQUVGLDBCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQVEsVUFBVCxBQUFtQixHQUFHLE1BQXRCLEFBQTJCO29CQUEzQjtzQkFBQTtBQUFBO1NBVkosQUFTRSxBQUNFLEFBRUQsV0FaSCxBQWFHLFVBYkgsQUFjRSw0QkFBQSxBQUFDLHFDQUFJLFdBQUw7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMseUNBQVEsVUFBVCxBQUFtQixHQUFHLE1BQXRCLEFBQTJCO29CQUEzQjtzQkFBQTtBQUFBO1NBZkosQUFjRSxBQUNFLEFBRUYsOEJBQUEsQUFBQzs7b0JBQUQ7c0JBbkJOLEFBQ0UsQUFDRSxBQWlCRSxBQUlYO0FBSlc7QUFBQTs7Ozs7RUE3RG9CLGdCQUFNLEE7O2tCQUFyQixBIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Ba2FyaS9EZXNrdG9wL21jNDM3LWVjb21tZXJjZSJ9