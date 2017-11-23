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

var _jsxFileName = '/Users/lucasmatos/Documents/Applications/mc437-ecommerce/components/MyGrid.js';


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
        var where = Math.floor(i / 3);
        var isNew = i === 0 || i % 3 === 0;
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
          return _react2.default.createElement(_reactBootstrap.Col, { sm: 0, md: 4, __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlHcmlkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIlRodW1ibmFpbCIsIkJ1dHRvbiIsIkNvbCIsIlJvdyIsIkNsZWFyZml4IiwiSW1hZ2UiLCJHcmlkUHJvZHV0byIsInJvd3MiLCJwcm9wcyIsInByb2R1dG9zIiwicmVkdWNlIiwicHJldiIsIml0ZW0iLCJpIiwid2hlcmUiLCJNYXRoIiwiZmxvb3IiLCJpc05ldyIsInB1c2giLCJtYXAiLCJyb3ciLCJwcm9kdXRvIiwiaW1nIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBVyxBQUMxQixBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTOzs7Ozs7O0ksQUFFWTs7Ozs7Ozs7Ozs7NkJBRVYsQUFDTDtVQUFNLFlBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixPQUFPLFVBQUEsQUFBQyxNQUFELEFBQU8sTUFBUCxBQUFhLEdBQU0sQUFDekQ7WUFBTSxRQUFRLEtBQUEsQUFBSyxNQUFNLElBQXpCLEFBQWMsQUFBZSxBQUM3QjtZQUFNLFFBQVEsTUFBQSxBQUFNLEtBQUssSUFBQSxBQUFJLE1BQTdCLEFBQW1DLEFBQ25DO1lBQUEsQUFBSSxPQUFPLEFBQ1Q7ZUFBQSxBQUFLLEtBQUssQ0FBVixBQUFVLEFBQUMsQUFDWjtBQUZELGVBRU8sQUFDTDtlQUFBLEFBQUssT0FBTCxBQUFZLEtBQVosQUFBaUIsQUFDbEI7QUFDRDtlQUFBLEFBQU8sQUFDUjtBQVRZLE9BQUEsRUFBYixBQUFhLEFBU1YsQUFJSDs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxBQUFDLHNDQUFLLFNBQU4sQUFBYztvQkFBZDtzQkFBQSxBQUVJO0FBRko7Y0FFSSxBQUFLLElBQUksVUFBQSxBQUFDLEtBQUQ7K0JBQVMsQUFBQyxxQ0FBSSxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFFZDtBQUZjO1NBQUEsTUFFZCxBQUFJLElBQUksVUFBQSxBQUFDLFNBQUQ7aUNBQWEsQUFBQyxxQ0FBSSxJQUFMLEFBQVMsR0FBRyxJQUFaLEFBQWdCO3dCQUFoQjswQkFBQSxBQUNqQjtBQURpQjtXQUFBLGtCQUNqQixBQUFDLDJDQUFVLEtBQUssUUFBQSxBQUFRLElBQXhCLEFBQWdCLEFBQVksSUFBSSxLQUFLLFFBQXJDLEFBQTZDO3dCQUE3QzswQkFBQSxBQUNFO0FBREY7NkJBQ0UsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSztBQUFMO0FBQUEscUJBREYsQUFDRSxBQUFhLEFBQ2IsdUJBQUEsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSTtBQUFKO0FBQUEscUJBRkYsQUFFRSxBQUFZLEFBQ1osOEJBQUEsY0FBQTs7d0JBQUE7MEJBQUEsQUFDRTtBQURGO0FBQUEsNkJBQ0UsQUFBQyx3Q0FBTyxTQUFSLEFBQWdCO3dCQUFoQjswQkFBQTtBQUFBO2FBREYsQUFDRSwwQkFDQSx3QkFBQSxBQUFDLHdDQUFPLFNBQVIsQUFBZ0I7d0JBQWhCOzBCQUFBO0FBQUE7YUFOQSxBQUFhLEFBQ2pCLEFBR0UsQUFFRTtBQVJILEFBQVMsQUFFZDtBQU5WLEFBQ0UsQUFDQSxBQUVJLEFBa0JUOzs7OztFQXRDc0MsZ0JBQU0sQTs7a0JBQTFCLEEiLCJmaWxlIjoiTXlHcmlkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sdWNhc21hdG9zL0RvY3VtZW50cy9BcHBsaWNhdGlvbnMvbWM0MzctZWNvbW1lcmNlIn0=