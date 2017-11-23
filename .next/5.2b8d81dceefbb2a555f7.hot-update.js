webpackHotUpdate(5,{

/***/ 601:
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

var _reactBootstrap = __webpack_require__(409);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pchinen/git/mc437-ecommerce/components/MyGrid.js';


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
      }, _react2.default.createElement('style', { type: 'text/css', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, '\n          .img-thumb {\n              width:310px;\n              height:310px;\n          }\n          .thumb-produto {\n              width:350px;\n              height:500px\n          }\n        '), _react2.default.createElement(_reactBootstrap.Grid, { bsClass: 'GridProduto', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, rows.map(function (row) {
        return _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, row.map(function (produto) {
          return _react2.default.createElement(_reactBootstrap.Col, { sm: 6, md: 4, __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }, _react2.default.createElement(_reactBootstrap.Thumbnail, { bsClass: 'thumbnail thumb-produto', __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }, _react2.default.createElement('img', {
            'class': 'img-thumb',
            src: produto.img[0],
            alt: produto.name, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }), _react2.default.createElement('h3', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, produto.name), _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }, produto.description), _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          }, 'Adicionar ao carrinho'), '\xA0', _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'default', __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }, 'Detalhes'))));
        }));
      })));
    }
  }]);

  return GridProduto;
}(_react2.default.Component);

exports.default = GridProduto;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlHcmlkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIlRodW1ibmFpbCIsIkJ1dHRvbiIsIkNvbCIsIlJvdyIsIkNsZWFyZml4IiwiSW1hZ2UiLCJHcmlkUHJvZHV0byIsInJvd3MiLCJwcm9wcyIsInByb2R1dG9zIiwicmVkdWNlIiwicHJldiIsIml0ZW0iLCJpIiwid2hlcmUiLCJNYXRoIiwiZmxvb3IiLCJpc05ldyIsInB1c2giLCJtYXAiLCJyb3ciLCJwcm9kdXRvIiwiaW1nIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBVyxBQUMxQixBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTOzs7Ozs7O0lBRVksQTs7Ozs7Ozs7Ozs7NkJBRVYsQUFDTDtVQUFNLFlBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixPQUFPLFVBQUEsQUFBQyxNQUFELEFBQU8sTUFBUCxBQUFhLEdBQU0sQUFDekQ7WUFBTSxRQUFRLEtBQUEsQUFBSyxNQUFNLElBQXpCLEFBQWMsQUFBZSxBQUM3QjtZQUFNLFFBQVEsTUFBQSxBQUFNLEtBQUssSUFBQSxBQUFJLE1BQTdCLEFBQW1DLEFBQ25DO1lBQUEsQUFBSSxPQUFPLEFBQ1Q7ZUFBQSxBQUFLLEtBQUssQ0FBVixBQUFVLEFBQUMsQUFDWjtBQUZELGVBRU8sQUFDTDtlQUFBLEFBQUssT0FBTCxBQUFZLEtBQVosQUFBaUIsQUFDbEI7QUFDRDtlQUFBLEFBQU8sQUFDUjtBQVRZLE9BQUEsRUFBYixBQUFhLEFBU1YsQUFJSDs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBLFdBQU8sTUFBUCxBQUFZO29CQUFaO3NCQUFBO0FBQUE7U0FEQSxBQUNBLEFBVUEsOE5BQUEsQUFBQyxzQ0FBSyxTQUFOLEFBQWM7b0JBQWQ7c0JBQUEsQUFFSTtBQUZKO2NBRUksQUFBSyxJQUFJLFVBQUEsQUFBQyxLQUFEOytCQUFTLEFBQUMscUNBQUksV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBRWQ7QUFGYztTQUFBLE1BRWQsQUFBSSxJQUFJLFVBQUEsQUFBQyxTQUFEO2lDQUFhLEFBQUMscUNBQUksSUFBTCxBQUFTLEdBQUcsSUFBWixBQUFnQjt3QkFBaEI7MEJBQUEsQUFDakI7QUFEaUI7V0FBQSxrQkFDakIsQUFBQywyQ0FBVSxTQUFYLEFBQW1CO3dCQUFuQjswQkFBQSxBQUNFO0FBREY7O3FCQUNFLEFBQ1EsQUFDTjtpQkFBSyxRQUFBLEFBQVEsSUFGZixBQUVPLEFBQVksQUFDakI7aUJBQUssUUFIUCxBQUdlO3dCQUhmOzBCQURGLEFBQ0UsQUFLQTtBQUxBO0FBQ0UsOEJBSUYsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSztBQUFMO0FBQUEscUJBTkYsQUFNRSxBQUFhLEFBQ2IsdUJBQUEsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSTtBQUFKO0FBQUEscUJBUEYsQUFPRSxBQUFZLEFBQ1osOEJBQUEsY0FBQTs7d0JBQUE7MEJBQUEsQUFDRTtBQURGO0FBQUEsNkJBQ0UsQUFBQyx3Q0FBTyxTQUFSLEFBQWdCO3dCQUFoQjswQkFBQTtBQUFBO2FBREYsQUFDRSwwQkFDQSx3QkFBQSxBQUFDLHdDQUFPLFNBQVIsQUFBZ0I7d0JBQWhCOzBCQUFBO0FBQUE7YUFYQSxBQUFhLEFBQ2pCLEFBUUUsQUFFRTtBQWJILEFBQVMsQUFFZDtBQWhCVixBQUNFLEFBV0EsQUFFSSxBQXVCVDs7Ozs7RUFyRHNDLGdCQUFNLEE7O2tCQUExQixBIiwiZmlsZSI6Ik15R3JpZC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wY2hpbmVuL2dpdC9tYzQzNy1lY29tbWVyY2UifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/pchinen/git/mc437-ecommerce/components/MyGrid.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pchinen/git/mc437-ecommerce/components/MyGrid.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yYjhkODFkY2VlZmJiMmE1NTVmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUdyaWQuanM/MTE4NWZlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JpZCwgVGh1bWJuYWlsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBDbGVhcmZpeCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRQcm9kdXRvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgICBjb25zdCByb3dzID0gdGhpcy5wcm9wcy5wcm9kdXRvcy5yZWR1Y2UoKHByZXYsIGl0ZW0sIGkpID0+IHtcbiAgICAgICAgY29uc3Qgd2hlcmUgPSBNYXRoLmZsb29yKGkgLyAzKTtcbiAgICAgICAgY29uc3QgaXNOZXcgPSBpID09PSAwIHx8IGkgJSAzID09PSAwO1xuICAgICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgICBwcmV2LnB1c2goW2l0ZW1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2W3doZXJlXS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSwgW10pO1xuXG5cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntgXG4gICAgICAgICAgLmltZy10aHVtYiB7XG4gICAgICAgICAgICAgIHdpZHRoOjMxMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6MzEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aHVtYi1wcm9kdXRvIHtcbiAgICAgICAgICAgICAgd2lkdGg6MzUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDo1MDBweFxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8R3JpZCBic0NsYXNzPSdHcmlkUHJvZHV0byc+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcm93cy5tYXAoKHJvdykgPT4gPFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvdy5tYXAoKHByb2R1dG8pID0+IDxDb2wgc209ezZ9IG1kPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbCBic0NsYXNzPVwidGh1bWJuYWlsIHRodW1iLXByb2R1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctdGh1bWJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHV0by5pbWdbMF19IFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdXRvLm5hbWV9LyA+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Byb2R1dG8ubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9kdXRvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIj5BZGljaW9uYXIgYW8gY2FycmluaG88L0J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cImRlZmF1bHRcIj5EZXRhbGhlczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9UaHVtYm5haWw+XG4gICAgICAgICAgICAgICAgPC9Db2w+KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1Jvdz4pXG4gICAgICAgICAgfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NeUdyaWQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQVRBO0FBQ0E7QUFhQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUFBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQXFCQTs7Ozs7QUFyREE7QUFDQTs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==