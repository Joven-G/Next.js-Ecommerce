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

var _jsxFileName = '/home/pchinen/git/mc437-ecommerce/components/ProdutosCarrinho.js';


var ProdutosCarrinho = function (_React$Component) {
  (0, _inherits3.default)(ProdutosCarrinho, _React$Component);

  function ProdutosCarrinho() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProdutosCarrinho);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProdutosCarrinho.__proto__ || (0, _getPrototypeOf2.default)(ProdutosCarrinho)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      nome: "Produto",
      quantidade: 3,
      preco: 10
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ProdutosCarrinho, [{
    key: 'removerCarrinho',
    value: function removerCarrinho() {
      alert("AAAA");
      console.log("Remover do Carrinho");
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactBootstrap.Table, { bordered: true, striped: true, responsive: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('thead', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Produto'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Quantidade'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Pre\xE7o'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'A\xE7\xF5es'))), _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, this.state.nome), _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, this.state.quantidade), _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.state.preco), _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_reactBootstrap.Button, { bsSize: 'xsmall', onClick: this.removerCarrinho, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Remover do Carrinho')))));
    }
  }]);

  return ProdutosCarrinho;
}(_react2.default.Component);

exports.default = ProdutosCarrinho;

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHV0b3NDYXJyaW5oby5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsIkJ1dHRvbiIsIlByb2R1dG9zQ2FycmluaG8iLCJzdGF0ZSIsIm5vbWUiLCJxdWFudGlkYWRlIiwicHJlY28iLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVyQ2FycmluaG8iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUNULEFBQVM7Ozs7Ozs7SSxBQUVZOzs7Ozs7Ozs7Ozs7OztnTyxBQUNqQjtZQUFRLEFBQ0UsQUFDTjtrQkFGSSxBQUVRLEFBQ1o7YUFISSxBQUdHLEE7QUFISCxBQUNKOzs7OztzQ0FLYSxBQUNiO1lBQUEsQUFBTSxBQUNOO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjs7Ozs2QkFFUSxBQUNMOzZCQUNFLEFBQUMsdUNBQU0sVUFBUCxNQUFnQixTQUFoQixNQUF3QixZQUF4QjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBR0EsNEJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUdBLCtCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVBGLEFBT0UsQUFHQSw2QkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FaTixBQUNFLEFBQ0UsQUFVRSxBQUtKLGtDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBRUU7QUFGRjtBQUFBLHlCQUVFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUZWLEFBQ0UsQUFDYyxBQUVkLHVCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUxWLEFBSUUsQUFDYyxBQUVkLDZCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQVJWLEFBT0UsQUFDYyxBQUVkLHdCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsd0NBQU8sUUFBUixBQUFlLFVBQVMsU0FBUyxLQUFqQyxBQUFzQztvQkFBdEM7c0JBQUE7QUFBQTtTQS9CVixBQUNFLEFBaUJFLEFBRUUsQUFVRSxBQUNFLEFBUWI7Ozs7O0VBcER5QyxnQkFBTSxBOztrQkFBL0IsQTs7QUFxRHBCIiwiZmlsZSI6IlByb2R1dG9zQ2FycmluaG8uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcGNoaW5lbi9naXQvbWM0MzctZWNvbW1lcmNlIn0=