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

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _ProdutosCarrinho = require('../components/ProdutosCarrinho.js');

var _ProdutosCarrinho2 = _interopRequireDefault(_ProdutosCarrinho);

var _InformacoesCliente = require('../components/InformacoesCliente.js');

var _InformacoesCliente2 = _interopRequireDefault(_InformacoesCliente);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pchinen/git/mc437-ecommerce/pages/carrinho.js?entry';


var Carrinho = function (_React$Component) {
  (0, _inherits3.default)(Carrinho, _React$Component);

  function Carrinho() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Carrinho);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Carrinho.__proto__ || (0, _getPrototypeOf2.default)(Carrinho)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      // logged: this.props.store.user || false;
      logged: false,
      preco: 10
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Carrinho, [{
    key: 'frete',
    value: function frete() {
      var cpf = document.getElementById("txtCpf").value;
      var endereco = document.getElementById("txtEndereco").value;
      alert("[" + cpf + "] [" + endereco + "]");
      this.setState({ preco: 20 });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.logged == false) {
        console.log("Nao tem carrinho, mandar para a pagina de login");
      }

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_MyLayout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Informa\xE7\xF5es Cliente'), _react2.default.createElement(_InformacoesCliente2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Produtos no Carrinho'), _react2.default.createElement(_ProdutosCarrinho2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), _react2.default.createElement(_reactBootstrap.Panel, { header: 'Endere\xE7o de Entrega', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_reactBootstrap.Form, { horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_reactBootstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { componentClass: _reactBootstrap.ControlLabel, sm: 1, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'CPF'), _react2.default.createElement(_reactBootstrap.Col, { sm: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_reactBootstrap.FormControl, {
        id: 'txtCpf',
        type: 'cpf',
        placeholder: 'this.prop.store.user.cpf', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }))), _react2.default.createElement(_reactBootstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { componentClass: _reactBootstrap.ControlLabel, sm: 1, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Endere\xE7o'), _react2.default.createElement(_reactBootstrap.Col, { sm: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_reactBootstrap.FormControl, {
        id: 'txtEndereco',
        type: 'endereco',
        placeholder: 'this.prop.store.user.endereco', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }))), _react2.default.createElement(_reactBootstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { componentClass: _reactBootstrap.Button,
        smOffset: 1,
        onClick: this.frete, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Re-Calcular Frete')), _react2.default.createElement(_reactBootstrap.Col, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_reactBootstrap.ListGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_reactBootstrap.ListGroupItem, { header: 'Pre\xE7o Final', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'R$ ', this.state.preco))), _react2.default.createElement(_reactBootstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { smOffset: 2, sm: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_reactBootstrap.Button, { type: 'submit', bsSize: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Finalizar Compra')))))));
    }
  }]);

  return Carrinho;
}(_react2.default.Component);

exports.default = Carrinho;

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhcnJpbmhvLmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIlByb2R1dG9zQ2FycmluaG8iLCJJbmZvcm1hY29lc0NsaWVudGUiLCJGb3JtIiwiQ29udHJvbExhYmVsIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2wiLCJCdXR0b24iLCJMYWJlbCIsIkNvbCIsIlBhbmVsIiwiTGlzdEdyb3VwIiwiTGlzdEdyb3VwSXRlbSIsIkNhcnJpbmhvIiwic3RhdGUiLCJsb2dnZWQiLCJwcmVjbyIsImNwZiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImVuZGVyZWNvIiwiYWxlcnQiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJmcmV0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFPLEFBQXdCOzs7O0FBQy9CLEFBQVMsQUFBTSxBQUFjLEFBQVcsQUFDeEMsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFBVzs7Ozs7OztJQUdDLEE7Ozs7Ozs7Ozs7Ozs7O2dOQUNqQixBO0FBRUk7Y0FGSSxBQUVJLEFBQ1I7YUFISSxBLEFBR0c7QUFISCxBQUNKOzs7Ozs0QkFLRyxBQUNIO1VBQUksTUFBTSxTQUFBLEFBQVMsZUFBVCxBQUF3QixVQUFsQyxBQUE0QyxBQUM1QztVQUFJLFdBQVcsU0FBQSxBQUFTLGVBQVQsQUFBd0IsZUFBdkMsQUFBc0QsQUFDdEQ7WUFBTSxNQUFBLEFBQU0sTUFBTixBQUFZLFFBQVosQUFBb0IsV0FBMUIsQUFBcUMsQUFDckM7V0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFmLEFBQWMsQUFBTyxBQUN4Qjs7Ozs2QkFFUSxBQUNMO1VBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFkLEFBQXdCLE9BQU0sQUFDMUI7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQUVEOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw4Q0FBQSxBQUFDOztvQkFBRDtzQkFISixBQUNFLEFBRUUsQUFFRjtBQUZFO0FBQUEsMkJBRUYsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7O29CQUFEO3NCQVBKLEFBS0UsQUFFRSxBQUdGO0FBSEU7QUFBQSwyQkFHRixBQUFDLHVDQUFNLFFBQVAsQUFBYztvQkFBZDtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsQUFBQyxzQ0FBSyxZQUFOO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSSxBQUFDLHFDQUFELEFBQUssQUFBZ0IsOENBQWUsSUFBcEMsQUFBd0M7b0JBQXhDO3NCQUFBO0FBQUE7U0FESixBQUNJLEFBR0Esd0JBQUEsQUFBQyxxQ0FBSSxJQUFMLEFBQVM7b0JBQVQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7WUFBRCxBQUNPLEFBQ0w7Y0FGRixBQUVPLEFBQ0w7cUJBSEYsQUFHYztvQkFIZDtzQkFOUixBQUNFLEFBSUksQUFDRSxBQU9OO0FBUE07QUFDRSw0QkFNUixBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHFDQUFELEFBQUssQUFBZ0IsOENBQWUsSUFBcEMsQUFBd0M7b0JBQXhDO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBR0EsZ0NBQUEsQUFBQyxxQ0FBSSxJQUFMLEFBQVM7b0JBQVQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7WUFBRCxBQUNPLEFBQ0w7Y0FGRixBQUVPLEFBQ0w7cUJBSEYsQUFHYztvQkFIZDtzQkFsQk4sQUFhRSxBQUlFLEFBQ0UsQUFPSjtBQVBJO0FBQ0UsNEJBTU4sQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxxQ0FBRCxBQUFLLEFBQWdCLEFBQ2hCO2tCQURMLEFBQ2UsQUFDVjtpQkFBUyxLQUZkLEFBRW1CO29CQUZuQjtzQkFBQTtBQUFBO1NBMUJKLEFBeUJFLEFBQ0UsQUFNRix1Q0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLCtDQUFjLFFBQWYsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FDTSxZQUFBLEFBQUssTUFuQ2pCLEFBZ0NFLEFBQ0UsQUFDRSxBQUNpQixBQUtyQiwwQkFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHFDQUFJLFVBQUwsQUFBZSxHQUFHLElBQWxCLEFBQXNCO29CQUF0QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx3Q0FBTyxNQUFSLEFBQWEsVUFBUyxRQUF0QixBQUE2QjtvQkFBN0I7c0JBQUE7QUFBQTtTQXZEWixBQUNFLEFBQ0UsQUFVRSxBQUNBLEFBd0NFLEFBQ0UsQUFDRSxBQVVmOzs7OztFQXBGaUMsZ0JBQU0sQTs7a0JBQXZCLEE7O0FBcUZwQiIsImZpbGUiOiJjYXJyaW5oby5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9wY2hpbmVuL2dpdC9tYzQzNy1lY29tbWVyY2UifQ==