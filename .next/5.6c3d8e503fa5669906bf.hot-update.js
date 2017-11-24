webpackHotUpdate(5,{

/***/ 599:
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

var _reactBootstrap = __webpack_require__(415);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Akari\\Desktop\\mc437-ecommerce\\components\\MyGrid.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Akari\\Desktop\\mc437-ecommerce\\components\\MyGrid.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42YzNkOGU1MDNmYTU2Njk5MDZiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUdyaWQuanM/YjkxMzkwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHcmlkLCBUaHVtYm5haWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IENsZWFyZml4IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZFByb2R1dG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLnByb3BzLnByb2R1dG9zLnJlZHVjZSgocHJldiwgaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdoZXJlID0gTWF0aC5mbG9vcihpIC8gNCk7XHJcbiAgICAgICAgY29uc3QgaXNOZXcgPSBpID09PSAwIHx8IGkgJSA0ID09PSAwO1xyXG4gICAgICAgIGlmIChpc05ldykge1xyXG4gICAgICAgICAgcHJldi5wdXNoKFtpdGVtXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByZXZbd2hlcmVdLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG5cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8R3JpZCBic0NsYXNzPSdHcmlkUHJvZHV0byc+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvd3MubWFwKChyb3cpID0+IDxSb3cgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm93Lm1hcCgocHJvZHV0bykgPT4gPENvbCBzbT17MH0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgc3JjPXtwcm9kdXRvLmltZ1swXX0gYWx0PXtwcm9kdXRvLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPntwcm9kdXRvLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9kdXRvLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCI+QWRpY2lvbmFyIGFvIGNhcnJpbmhvPC9CdXR0b24+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cImRlZmF1bHRcIj5EZXRhbGhlczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGh1bWJuYWlsPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9Sb3c+KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NeUdyaWQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQVRBO0FBQ0E7QUFhQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQWdCQTs7Ozs7QUF0Q0E7QUFDQTs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==