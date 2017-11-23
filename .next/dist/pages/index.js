'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('next/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _link = require('next/dist/lib/link.js');

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

var _jsxFileName = '/Users/lucasmatos/Documents/Applications/mc437-ecommerce/pages/index.js?entry';


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
    css: 'h1.jsx-3424511514,a.jsx-3424511514{font-family:"Arial";}ul.jsx-3424511514{padding:0;}li.jsx-3424511514{list-style:none;margin:5px 0;}a.jsx-3424511514{text-decoration:none;color:blue;}a.jsx-3424511514:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFrQixBQUcrQixBQUdWLEFBR00sQUFJSyxBQUlULFVBVmQsRUFXQSxJQVJlLElBTmYsQ0FVYSxRQUhiLEdBSUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2x1Y2FzbWF0b3MvRG9jdW1lbnRzL0FwcGxpY2F0aW9ucy9tYzQzNy1lY29tbWVyY2UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IEdyaWRMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUdyaWQuanMnXG5cbmltcG9ydCBhcGkgZnJvbSAnLi4vdXRpbHMvYXBpJztcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPlByb2R1dG9zIGVtIGRlc3RhcXVlOjwvaDE+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxLCBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPEdyaWRMYXlvdXQgcHJvZHV0b3M9e3Byb3BzLnByb2R1dG9zfSAvPlxuICAgIDwvTGF5b3V0PlxuICA8L2Rpdj5cbilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KCdodHRwOi8vZWMyLTU0LTIwNy02My0xNjAuc2EtZWFzdC0xLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwJywgJ3Byb2R1Y3RzJywgeyBncm91cDogJ2dydXBvNicgfSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvZHV0b3M6IGRhdGFcbiAgfVxuXG4gIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIC8vXG4gIC8vIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcbiAgLy9cbiAgLy8gcmV0dXJuIHtcbiAgLy8gICBzaG93czogZGF0YVxuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkxpbmsiLCJmZXRjaCIsIkxheW91dCIsIkdyaWRMYXlvdXQiLCJhcGkiLCJJbmRleCIsInByb3BzIiwicHJvZHV0b3MiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiLCJncm91cCIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBRXZCLEFBQU8sQUFBUzs7Ozs7Ozs7O0FBRWhCLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQUQ7eUJBQ1osY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0U7YUFERjtTQUFBLEFBcUJFO0FBckJGLHNCQXFCRSxBQUFDLGtDQUFXLFVBQVUsTUFBdEIsQUFBNEI7Z0JBQTVCO2tCQXZCUSxBQUNaLEFBQ0UsQUFxQkU7QUFBQTs7QUF2Qk47O0FBNEJBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7TUFBQTtnRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7aUJBQ0gsY0FBQSxBQUFJLElBQUosQUFBUSxpRUFBUixBQUF5RSxZQUFZLEVBQUUsT0FEcEYsQUFDSCxBQUFxRixBQUFTOzthQUEzRztBQURnQiwwQkFFdEI7O2tCQUFBLEFBQVEsSUFGYyxBQUV0QixBQUFZOzs7c0JBR0EsQUFHWjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZzQixBQUlmO0FBQUEsQUFDTDs7YUFMb0I7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXhCLEFBa0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sdWNhc21hdG9zL0RvY3VtZW50cy9BcHBsaWNhdGlvbnMvbWM0MzctZWNvbW1lcmNlIn0=