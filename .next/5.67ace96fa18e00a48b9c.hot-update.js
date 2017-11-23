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

var _session = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./session\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _session2 = _interopRequireDefault(_session);

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
          lineNumber: 26
        }
      }, _react2.default.createElement('style', { type: 'text/css', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, '\n          .thumbnail {\n              width:350px;\n              height:600px\n          }\n        '), _react2.default.createElement(_reactBootstrap.Grid, { bsClass: 'GridProduto', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, rows.map(function (row) {
        return _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, row.map(function (produto) {
          return _react2.default.createElement(_reactBootstrap.Col, { sm: 0, md: 4, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, _react2.default.createElement(_reactBootstrap.Thumbnail, { src: produto.img[0], alt: produto.name, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }, _react2.default.createElement('h3', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }, produto.name), _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }, produto.description), _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }, 'Adicionar ao carrinho'), '\xA0', _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'default', __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }, 'Detalhes'))));
        }));
      })));
    }
  }]);

  return GridProduto;
}(_react2.default.Component);

exports.default = GridProduto;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlHcmlkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIlRodW1ibmFpbCIsIkJ1dHRvbiIsIkNvbCIsIlJvdyIsIkNsZWFyZml4IiwiSW1hZ2UiLCJTZXNzaW9uIiwiR3JpZFByb2R1dG8iLCJyb3dzIiwicHJvcHMiLCJwcm9kdXRvcyIsInJlZHVjZSIsInByZXYiLCJpdGVtIiwiaSIsIndoZXJlIiwiTWF0aCIsImZsb29yIiwiaXNOZXciLCJwdXNoIiwibWFwIiwicm93IiwicHJvZHV0byIsImltZyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNLEFBQVcsQUFDMUIsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTLEFBQ1QsQUFBUzs7QUFDVCxBQUFPLEFBQWE7Ozs7Ozs7OztJLEFBRUM7Ozs7Ozs7Ozs7OzZCQUVWLEFBQ0w7VUFBTSxZQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsT0FBTyxVQUFBLEFBQUMsTUFBRCxBQUFPLE1BQVAsQUFBYSxHQUFNLEFBQ3pEO1lBQU0sUUFBUSxLQUFBLEFBQUssTUFBTSxJQUF6QixBQUFjLEFBQWUsQUFDN0I7WUFBTSxRQUFRLE1BQUEsQUFBTSxLQUFLLElBQUEsQUFBSSxNQUE3QixBQUFtQyxBQUNuQztZQUFBLEFBQUksT0FBTyxBQUNUO2VBQUEsQUFBSyxLQUFLLENBQVYsQUFBVSxBQUFDLEFBQ1o7QUFGRCxlQUVPLEFBQ0w7ZUFBQSxBQUFLLE9BQUwsQUFBWSxLQUFaLEFBQWlCLEFBQ2xCO0FBQ0Q7ZUFBQSxBQUFPLEFBQ1I7QUFUWSxPQUFBLEVBQWIsQUFBYSxBQVNWLEFBSUg7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsY0FBQSxXQUFPLE1BQVAsQUFBWTtvQkFBWjtzQkFBQTtBQUFBO1NBREEsQUFDQSxBQU1BLDRIQUFBLEFBQUMsc0NBQUssU0FBTixBQUFjO29CQUFkO3NCQUFBLEFBRUk7QUFGSjtjQUVJLEFBQUssSUFBSSxVQUFBLEFBQUMsS0FBRDsrQkFBUyxBQUFDLHFDQUFJLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUVkO0FBRmM7U0FBQSxNQUVkLEFBQUksSUFBSSxVQUFBLEFBQUMsU0FBRDtpQ0FBYSxBQUFDLHFDQUFJLElBQUwsQUFBUyxHQUFHLElBQVosQUFBZ0I7d0JBQWhCOzBCQUFBLEFBQ2pCO0FBRGlCO1dBQUEsa0JBQ2pCLEFBQUMsMkNBQVUsS0FBSyxRQUFBLEFBQVEsSUFBeEIsQUFBZ0IsQUFBWSxJQUFJLEtBQUssUUFBckMsQUFBNkM7d0JBQTdDOzBCQUFBLEFBQ0U7QUFERjs2QkFDRSxjQUFBOzt3QkFBQTswQkFBQSxBQUFLO0FBQUw7QUFBQSxxQkFERixBQUNFLEFBQWEsQUFDYix1QkFBQSxjQUFBOzt3QkFBQTswQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFGRixBQUVFLEFBQVksQUFDWiw4QkFBQSxjQUFBOzt3QkFBQTswQkFBQSxBQUNFO0FBREY7QUFBQSw2QkFDRSxBQUFDLHdDQUFPLFNBQVIsQUFBZ0I7d0JBQWhCOzBCQUFBO0FBQUE7YUFERixBQUNFLDBCQUNBLHdCQUFBLEFBQUMsd0NBQU8sU0FBUixBQUFnQjt3QkFBaEI7MEJBQUE7QUFBQTthQU5BLEFBQWEsQUFDakIsQUFHRSxBQUVFO0FBUkgsQUFBUyxBQUVkO0FBWlYsQUFDRSxBQU9BLEFBRUksQUFrQlQ7Ozs7O0VBNUNzQyxnQkFBTSxBOztrQkFBMUIsQSIsImZpbGUiOiJNeUdyaWQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcGNoaW5lbi9naXQvbWM0MzctZWNvbW1lcmNlIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/pchinen/git/mc437-ecommerce/components/MyGrid.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pchinen/git/mc437-ecommerce/components/MyGrid.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42N2FjZTk2ZmExOGUwMGE0OGI5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUdyaWQuanM/MjE1OTcxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JpZCwgVGh1bWJuYWlsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBDbGVhcmZpeCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU2Vzc2lvbiBmcm9tICcuL3Nlc3Npb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRQcm9kdXRvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgICBjb25zdCByb3dzID0gdGhpcy5wcm9wcy5wcm9kdXRvcy5yZWR1Y2UoKHByZXYsIGl0ZW0sIGkpID0+IHtcbiAgICAgICAgY29uc3Qgd2hlcmUgPSBNYXRoLmZsb29yKGkgLyAzKTtcbiAgICAgICAgY29uc3QgaXNOZXcgPSBpID09PSAwIHx8IGkgJSAzID09PSAwO1xuICAgICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgICBwcmV2LnB1c2goW2l0ZW1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2W3doZXJlXS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSwgW10pO1xuXG5cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntgXG4gICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICAgIHdpZHRoOjM1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6NjAwcHhcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPEdyaWQgYnNDbGFzcz0nR3JpZFByb2R1dG8nPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJvd3MubWFwKChyb3cpID0+IDxSb3cgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3cubWFwKChwcm9kdXRvKSA9PiA8Q29sIHNtPXswfSBtZD17NH0+XG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgc3JjPXtwcm9kdXRvLmltZ1swXX0gYWx0PXtwcm9kdXRvLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJvZHV0by5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2R1dG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiPkFkaWNpb25hciBhbyBjYXJyaW5obzwvQnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwiZGVmYXVsdFwiPkRldGFsaGVzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L1RodW1ibmFpbD5cbiAgICAgICAgICAgICAgICA8L0NvbD4pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUm93PilcbiAgICAgICAgICB9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL015R3JpZC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFJQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBVEE7QUFDQTtBQWFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFnQkE7Ozs7O0FBNUNBO0FBQ0E7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=