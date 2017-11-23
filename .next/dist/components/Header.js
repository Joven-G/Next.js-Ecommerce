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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = require('react-bootstrap');

var _FormProcurar = require('./FormProcurar');

var _FormProcurar2 = _interopRequireDefault(_FormProcurar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pchinen/git/mc437-ecommerce/components/Header.js';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkJ1dHRvbiIsIkNvbnRyb2xMYWJlbCIsIkZvcm1Db250cm9sIiwiRm9ybUdyb3VwIiwiSGVscEJsb2NrIiwiTWVudUl0ZW0iLCJOYXYiLCJOYXZEcm9wZG93biIsIk5hdkl0ZW0iLCJOYXZiYXIiLCJGb3JtIiwiRm9ybVByb2N1cmFyIiwibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiLCJzdGF0ZSIsImxvZ2dlZCIsIk5hdlVzdWFyaW8iLCJOYXZMb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUzs7QUFFVCxBQUFPLEFBQWtCOzs7Ozs7Ozs7QUFFekIsSUFBTTtlQUFOLEFBQWtCLEFBQ0g7QUFERyxBQUNoQjs7SSxBQUdtQjs7Ozs7Ozs7Ozs7Ozs7NE0sQUFFbkI7Y0FBUSxBLEFBQ0U7QUFERixBQUNOOzs7Ozs2QkFHUyxBQUNIO1VBQUEsQUFBSSxBQUNKO1VBQUEsQUFBSSxBQUVKOztVQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBZCxBQUF5QixNQUFLLEFBQzFCO3FDQUNHLGNBQUQsdUJBQUEsQUFBUSxRQUFLLFdBQWI7c0JBQUE7d0JBQUE7QUFBQTtTQUFBLEVBQ2dCLGtDQUFDLGNBQUQsdUJBQUEsQUFBUSxRQUFLLE1BQWIsQUFBa0I7c0JBQWxCO3dCQUFBO0FBQUE7V0FGbEIsQUFDRSxBQUNnQixBQUdsQjttQ0FDRSxBQUFDLHFDQUFJLFdBQUw7c0JBQUE7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsQUFBQyx5Q0FBUSxVQUFULEFBQW1CLEdBQUcsTUFBdEIsQUFBMkI7c0JBQTNCO3dCQUFBO0FBQUE7V0FGSixBQUNFLEFBQ0UsQUFLUDtBQWJELGFBYUssQUFDRDtxQ0FDRyxjQUFELHVCQUFBLEFBQVEsUUFBSyxXQUFiO3NCQUFBO3dCQUFBO0FBQUE7U0FBQSxFQURGLEFBQ0UsQUFJRjttQ0FDRSxBQUFDLHFDQUFJLFdBQUw7c0JBQUE7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsQUFBQyx5Q0FBUSxVQUFULEFBQW1CLEdBQUcsTUFBdEIsQUFBMkI7c0JBQTNCO3dCQUFBO0FBQUE7V0FGSixBQUNFLEFBQ0UsQUFLUDtBQUVEOztjQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7NkJBQ0UsY0FBQSxTQUFLLFNBQUwsQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLHdDQUFPLE9BQVI7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsdUJBQUEsQUFBUTs7b0JBQVI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCx1QkFBQSxBQUFROztvQkFBUjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLE9BQUcsTUFBSCxBQUFRO29CQUFSO3NCQUFBO0FBQUE7U0FITixBQUNFLEFBQ0UsQUFDRSxBQUdKLGlDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQVEsVUFBVCxBQUFtQixHQUFHLE1BQXRCLEFBQTJCO29CQUEzQjtzQkFBQTtBQUFBO1NBUEosQUFNRSxBQUNFLEFBRUYsMEJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBUSxVQUFULEFBQW1CLEdBQUcsTUFBdEIsQUFBMkI7b0JBQTNCO3NCQUFBO0FBQUE7U0FWSixBQVNFLEFBQ0UsQUFFRCxXQVpILEFBYUcsVUFiSCxBQWNFLDRCQUFBLEFBQUMscUNBQUksV0FBTDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBUSxVQUFULEFBQW1CLEdBQUcsTUFBdEIsQUFBMkI7b0JBQTNCO3NCQUFBO0FBQUE7U0FmSixBQWNFLEFBQ0UsQUFFRiw4QkFBQSxBQUFDOztvQkFBRDtzQkFuQk4sQUFDRSxBQUNFLEFBaUJFLEFBSVg7QUFKVztBQUFBOzs7OztFQTdEb0IsZ0JBQU0sQTs7a0JBQXJCLEEiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3BjaGluZW4vZ2l0L21jNDM3LWVjb21tZXJjZSJ9