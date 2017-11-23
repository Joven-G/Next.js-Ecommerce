webpackHotUpdate(5,{

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(414);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/lucasmatos/Documents/Applications/mc437-ecommerce/components/MyGrid.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/lucasmatos/Documents/Applications/mc437-ecommerce/components/MyGrid.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41NTZjZTIwNzI3MDE5ZjFiMDg4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUdyaWQuanM/YjAzYzZlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JpZCwgVGh1bWJuYWlsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBDbGVhcmZpeCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRQcm9kdXRvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgICBjb25zdCByb3dzID0gdGhpcy5wcm9wcy5wcm9kdXRvcy5yZWR1Y2UoKHByZXYsIGl0ZW0sIGkpID0+IHtcbiAgICAgICAgY29uc3Qgd2hlcmUgPSBNYXRoLmZsb29yKGkgLyAzKTtcbiAgICAgICAgY29uc3QgaXNOZXcgPSBpID09PSAwIHx8IGkgJSAzID09PSAwO1xuICAgICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgICBwcmV2LnB1c2goW2l0ZW1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2W3doZXJlXS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSwgW10pO1xuXG5cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPEdyaWQgYnNDbGFzcz0nR3JpZFByb2R1dG8nPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJvd3MubWFwKChyb3cpID0+IDxSb3cgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3cubWFwKChwcm9kdXRvKSA9PiA8Q29sIHNtPXswfSBtZD17NH0+XG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgc3JjPXtwcm9kdXRvLmltZ1swXX0gYWx0PXtwcm9kdXRvLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJvZHV0by5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2R1dG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiPkFkaWNpb25hciBhbyBjYXJyaW5obzwvQnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwiZGVmYXVsdFwiPkRldGFsaGVzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L1RodW1ibmFpbD5cbiAgICAgICAgICAgICAgICA8L0NvbD4pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUm93PilcbiAgICAgICAgICB9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL015R3JpZC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBVEE7QUFDQTtBQWFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBZ0JBOzs7OztBQXRDQTtBQUNBOzs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9