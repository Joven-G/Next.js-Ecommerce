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

var _jsxFileName = 'C:\\Users\\Akari\\Desktop\\mc437-ecommerce\\components\\MyGrid.js';


var GridProduto = function (_React$Component) {
  (0, _inherits3.default)(GridProduto, _React$Component);

  function GridProduto() {
    (0, _classCallCheck3.default)(this, GridProduto);

    return (0, _possibleConstructorReturn3.default)(this, (GridProduto.__proto__ || (0, _getPrototypeOf2.default)(GridProduto)).apply(this, arguments));
  }

  (0, _createClass3.default)(GridProduto, [{
    key: 'render',
    value: function render() {
      var rows = this.props.produtos.reduce(function (prev, item, i) {
        var where = Math.floor(i / 4);
        var isNew = i === 0 || i % 4 === 0;
        if (isNew) {
          prev.push([item]);
        } else {
          prev[where].push(item);
        }
        return prev;
      }, []);

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_reactBootstrap.Grid, { bsClass: 'GridProduto', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, rows.map(function (row) {
        return _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, row.map(function (produto) {
          return _react2.default.createElement(_reactBootstrap.Col, { sm: 0, md: 3, __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }, _react2.default.createElement(_reactBootstrap.Thumbnail, { src: produto.img[0], alt: produto.name, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          }, _react2.default.createElement('h3', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }, produto.name), _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }, produto.description), _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }, 'Adicionar ao carrinho'), '\xA0', _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'default', __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }, 'Detalhes'))));
        }));
      })));
    }
  }]);

  return GridProduto;
}(_react2.default.Component);

exports.default = GridProduto;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE15R3JpZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkdyaWQiLCJUaHVtYm5haWwiLCJCdXR0b24iLCJDb2wiLCJSb3ciLCJDbGVhcmZpeCIsIkltYWdlIiwiR3JpZFByb2R1dG8iLCJyb3dzIiwicHJvcHMiLCJwcm9kdXRvcyIsInJlZHVjZSIsInByZXYiLCJpdGVtIiwiaSIsIndoZXJlIiwiTWF0aCIsImZsb29yIiwiaXNOZXciLCJwdXNoIiwibWFwIiwicm93IiwicHJvZHV0byIsImltZyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNLEFBQVcsQUFDMUIsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUzs7Ozs7OztJLEFBRVk7Ozs7Ozs7Ozs7OzZCQUVWLEFBQ0w7VUFBTSxZQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsT0FBTyxVQUFBLEFBQUMsTUFBRCxBQUFPLE1BQVAsQUFBYSxHQUFNLEFBQ3pEO1lBQU0sUUFBUSxLQUFBLEFBQUssTUFBTSxJQUF6QixBQUFjLEFBQWUsQUFDN0I7WUFBTSxRQUFRLE1BQUEsQUFBTSxLQUFLLElBQUEsQUFBSSxNQUE3QixBQUFtQyxBQUNuQztZQUFBLEFBQUksT0FBTyxBQUNUO2VBQUEsQUFBSyxLQUFLLENBQVYsQUFBVSxBQUFDLEFBQ1o7QUFGRCxlQUVPLEFBQ0w7ZUFBQSxBQUFLLE9BQUwsQUFBWSxLQUFaLEFBQWlCLEFBQ2xCO0FBQ0Q7ZUFBQSxBQUFPLEFBQ1I7QUFUWSxPQUFBLEVBQWIsQUFBYSxBQVNWLEFBSUg7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsQUFBQyxzQ0FBSyxTQUFOLEFBQWM7b0JBQWQ7c0JBQUEsQUFFSTtBQUZKO2NBRUksQUFBSyxJQUFJLFVBQUEsQUFBQyxLQUFEOytCQUFTLEFBQUMscUNBQUksV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBRWQ7QUFGYztTQUFBLE1BRWQsQUFBSSxJQUFJLFVBQUEsQUFBQyxTQUFEO2lDQUFhLEFBQUMscUNBQUksSUFBTCxBQUFTLEdBQUcsSUFBWixBQUFnQjt3QkFBaEI7MEJBQUEsQUFDakI7QUFEaUI7V0FBQSxrQkFDakIsQUFBQywyQ0FBVSxLQUFLLFFBQUEsQUFBUSxJQUF4QixBQUFnQixBQUFZLElBQUksS0FBSyxRQUFyQyxBQUE2Qzt3QkFBN0M7MEJBQUEsQUFDRTtBQURGOzZCQUNFLGNBQUE7O3dCQUFBOzBCQUFBLEFBQUs7QUFBTDtBQUFBLHFCQURGLEFBQ0UsQUFBYSxBQUNiLHVCQUFBLGNBQUE7O3dCQUFBOzBCQUFBLEFBQUk7QUFBSjtBQUFBLHFCQUZGLEFBRUUsQUFBWSxBQUNaLDhCQUFBLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0U7QUFERjtBQUFBLDZCQUNFLEFBQUMsd0NBQU8sU0FBUixBQUFnQjt3QkFBaEI7MEJBQUE7QUFBQTthQURGLEFBQ0UsMEJBQ0Esd0JBQUEsQUFBQyx3Q0FBTyxTQUFSLEFBQWdCO3dCQUFoQjswQkFBQTtBQUFBO2FBTkEsQUFBYSxBQUNqQixBQUdFLEFBRUU7QUFSSCxBQUFTLEFBRWQ7QUFOVixBQUNFLEFBQ0EsQUFFSSxBQWtCVDs7Ozs7RUF0Q3NDLGdCQUFNLEE7O2tCQUExQixBIiwiZmlsZSI6Ik15R3JpZC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Ba2FyaS9EZXNrdG9wL21jNDM3LWVjb21tZXJjZSJ9