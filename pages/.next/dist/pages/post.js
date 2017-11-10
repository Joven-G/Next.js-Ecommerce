'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('h1', {
    className: 'jsx-3267370368'
  }, props.url.query.title), _react2.default.createElement('div', {
    className: 'jsx-3267370368' + ' ' + 'markdown'
  }, _react2.default.createElement(_reactMarkdown2.default, { source: '\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here\'s the content.\n     ' })), _react2.default.createElement(_style2.default, {
    styleId: '3267370368',
    css: ['.markdown{font-family:\'Arial\';}', '.markdown a{text-decoration:none;color:blue;}', '.markdown a:hover{opacity:0.6;}', '.markdown h3{margin:0;padding:0;text-transform:uppercase;}']
  }));
};