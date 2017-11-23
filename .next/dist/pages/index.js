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

var _jsxFileName = '/home/pchinen/git/mc437-ecommerce/pages/index.js?entry';


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
    css: 'h1.jsx-3424511514,a.jsx-3424511514{font-family:"Arial";}ul.jsx-3424511514{padding:0;}li.jsx-3424511514{list-style:none;margin:5px 0;}a.jsx-3424511514{text-decoration:none;color:blue;}a.jsx-3424511514:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFrQixBQUcrQixBQUdWLEFBR00sQUFJSyxBQUlULFVBVmQsRUFXQSxJQVJlLElBTmYsQ0FVYSxRQUhiLEdBSUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGNoaW5lbi9naXQvbWM0MzctZWNvbW1lcmNlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlHcmlkLmpzJ1xuXG5pbXBvcnQgYXBpIGZyb20gJy4uL3V0aWxzL2FwaSc7XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPExheW91dD5cbiAgICAgIDxoMT5Qcm9kdXRvcyBlbSBkZXN0YXF1ZTo8L2gxPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSwgYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxHcmlkTGF5b3V0IHByb2R1dG9zPXtwcm9wcy5wcm9kdXRvc30gLz5cbiAgICA8L0xheW91dD5cbiAgPC9kaXY+XG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldCgnaHR0cDovL2VjMi01NC0yMDctNjMtMTYwLnNhLWVhc3QtMS5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMCcsICdwcm9kdWN0cycsIHsgZ3JvdXA6ICdncnVwbzYnIH0pO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXR1cm4ge1xuICAgIHByb2R1dG9zOiBkYXRhXG4gIH1cblxuICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKVxuICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAvL1xuICAvLyBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG4gIC8vXG4gIC8vIHJldHVybiB7XG4gIC8vICAgc2hvd3M6IGRhdGFcbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkxpbmsiLCJmZXRjaCIsIkxheW91dCIsIkdyaWRMYXlvdXQiLCJhcGkiLCJJbmRleCIsInByb3BzIiwicHJvZHV0b3MiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiLCJncm91cCIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBRXZCLEFBQU8sQUFBUzs7Ozs7Ozs7O0FBRWhCLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQUQ7eUJBQ1osY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0U7YUFERjtTQUFBLEFBcUJFO0FBckJGLHNCQXFCRSxBQUFDLGtDQUFXLFVBQVUsTUFBdEIsQUFBNEI7Z0JBQTVCO2tCQXZCUSxBQUNaLEFBQ0UsQUFxQkU7QUFBQTs7QUF2Qk47O0FBNEJBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7TUFBQTtnRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7aUJBQ0gsY0FBQSxBQUFJLElBQUosQUFBUSxpRUFBUixBQUF5RSxZQUFZLEVBQUUsT0FEcEYsQUFDSCxBQUFxRixBQUFTOzthQUEzRztBQURnQiwwQkFFdEI7O2tCQUFBLEFBQVEsSUFGYyxBQUV0QixBQUFZOzs7c0JBR0EsQUFHWjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZzQixBQUlmO0FBQUEsQUFDTDs7YUFMb0I7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXhCLEFBa0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3BjaGluZW4vZ2l0L21jNDM3LWVjb21tZXJjZSJ9