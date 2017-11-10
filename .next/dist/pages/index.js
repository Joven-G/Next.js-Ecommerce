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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPosts() {
  return [{ id: 'hello-nextjs', title: 'Hello Next.js' }, { id: 'learn-nextjs', title: 'Learn Next.js is awesome' }, { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return _react2.default.createElement('li', {
    className: 'jsx-3950785544'
  }, _react2.default.createElement(_link2.default, { as: '/p/' + post.id, href: '/post?title=' + post.title }, _react2.default.createElement('a', {
    className: 'jsx-3950785544'
  }, post.title)), _react2.default.createElement(_style2.default, {
    styleId: '3950785544',
    css: ['li.jsx-3950785544{list-style:none;margin:5px 0;}', 'a.jsx-3950785544{text-decoration:none;color:blue;font-family:"Arial";}', 'a.jsx-3950785544:hover{opacity:0.6;}']
  }));
};

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('h1', {
    className: 'jsx-2987328901'
  }, 'My Blog'), _react2.default.createElement('ul', {
    className: 'jsx-2987328901'
  }, getPosts().map(function (post) {
    return _react2.default.createElement(PostLink, { key: post.id, post: post });
  })), _react2.default.createElement(_style2.default, {
    styleId: '2987328901',
    css: ['h1.jsx-2987328901,a.jsx-2987328901{font-family:"Arial";}', 'ul.jsx-2987328901{padding:0;}', 'li.jsx-2987328901{list-style:none;margin:5px 0;}', 'a.jsx-2987328901{text-decoration:none;color:blue;}', 'a.jsx-2987328901:hover{opacity:0.6;}']
  }));
};