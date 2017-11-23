'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('next\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _MyGrid = require('../components/MyGrid.js');

var _MyGrid2 = _interopRequireDefault(_MyGrid);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Akari\\Desktop\\mc437-ecommerce\\pages\\index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-3424511514',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Produtos em destaque:'), _react2.default.createElement(_style2.default, {
    styleId: '3424511514',
    css: 'h1.jsx-3424511514,a.jsx-3424511514{font-family:"Arial";}ul.jsx-3424511514{padding:0;}li.jsx-3424511514{list-style:none;margin:5px 0;}a.jsx-3424511514{text-decoration:none;color:blue;}a.jsx-3424511514:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFha0IsQUFHK0IsQUFHVixBQUdNLEFBSUssQUFJVCxVQVZkLEVBV0EsSUFSZSxJQU5mLENBVWEsUUFIYixHQUlBIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Ba2FyaS9EZXNrdG9wL21jNDM3LWVjb21tZXJjZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcclxuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUdyaWQuanMnXHJcblxyXG5pbXBvcnQgYXBpIGZyb20gJy4uL3V0aWxzL2FwaSc7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDE+UHJvZHV0b3MgZW0gZGVzdGFxdWU6PC9oMT5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGgxLCBhIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPEdyaWRMYXlvdXQgcHJvZHV0b3M9e3Byb3BzLnByb2R1dG9zfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KCdodHRwOi8vZWMyLTU0LTIwNy02My0xNjAuc2EtZWFzdC0xLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwJywgJ3Byb2R1Y3RzJywgeyBncm91cDogJ2dydXBvNicgfSk7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9kdXRvczogZGF0YVxyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcclxuICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIC8vXHJcbiAgLy8gY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxyXG4gIC8vXHJcbiAgLy8gcmV0dXJuIHtcclxuICAvLyAgIHNob3dzOiBkYXRhXHJcbiAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG4iXX0= */\n/*@ sourceURL=pages\\index.js?entry */'
  }), _react2.default.createElement(_MyGrid2.default, { produtos: props.produtos, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _api2.default.get('http://ec2-54-207-63-160.sa-east-1.compute.amazonaws.com:3000', 'products', { group: 'grupo6' });

        case 2:
          data = _context.sent;

          console.log(data);

          return _context.abrupt('return', {
            produtos: data

            // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
            // const data = await res.json()
            //
            // console.log(`Show data fetched. Count: ${data.length}`)
            //
            // return {
            //   shows: data
            // }
          });

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJMaW5rIiwiZmV0Y2giLCJMYXlvdXQiLCJHcmlkTGF5b3V0IiwiYXBpIiwiSW5kZXgiLCJwcm9wcyIsInByb2R1dG9zIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0IiwiZ3JvdXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUV2QixBQUFPLEFBQVM7Ozs7Ozs7OztBQUVoQixJQUFNLFFBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxPQUFEO3lCQUNaLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFO2FBREY7U0FBQSxBQXFCRTtBQXJCRixzQkFxQkUsQUFBQyxrQ0FBVyxVQUFVLE1BQXRCLEFBQTRCO2dCQUE1QjtrQkF2QlEsQUFDWixBQUNFLEFBcUJFO0FBQUE7O0FBdkJOOztBQTRCQSxNQUFBLEFBQU0sMkZBQWtCLG1CQUFBO01BQUE7Z0VBQUE7Y0FBQTt1Q0FBQTthQUFBOzBCQUFBO2lCQUNILGNBQUEsQUFBSSxJQUFKLEFBQVEsaUVBQVIsQUFBeUUsWUFBWSxFQUFFLE9BRHBGLEFBQ0gsQUFBcUYsQUFBUzs7YUFBM0c7QUFEZ0IsMEJBRXRCOztrQkFBQSxBQUFRLElBRmMsQUFFdEIsQUFBWTs7O3NCQUdBLEFBR1o7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmc0IsQUFJZjtBQUFBLEFBQ0w7O2FBTG9CO2FBQUE7MEJBQUE7O0FBQUE7Y0FBQTtBQUF4QixBQWtCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Ba2FyaS9EZXNrdG9wL21jNDM3LWVjb21tZXJjZSJ9