'use strict';

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = {};

var get = function get(url, endpoint) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  console.log('GET ' + url + '/' + endpoint, params);
  return (0, _axios2.default)({
    method: 'get',
    url: url + '/' + endpoint + '?' + _qs2.default.stringify(params),
    header: {}
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log('get error', error);

    if (error.response) {
      throw error.response.data;
    }
  });
};
api.get = get;

var post = function post(url, endpoint) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var finalParams = params === false ? null : { params: setParams(params) };
  var data = void 0;

  if (header['Content-Type'] === 'multipart/form-data') {
    data = new FormData();
    (0, _keys2.default)(finalParams.params).forEach(function (param) {
      data.append(param, finalParams.params[param]);
    });
  } else {
    data = finalParams.params;
  }
  console.log('POST ' + endpoint, data);

  return (0, _axios2.default)({
    method: 'post',
    url: url + '/' + endpoint,
    header: {},
    data: data
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log('post error', error);

    if (error.response) {
      throw error.response.data;
    }
  });
};

api.post = post;

var deleteRequest = function deleteRequest(url, endpoint) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  //for some reason can't simply call it delete
  var finalParams = params === false ? null : { params: setParams(params) };
  console.log('DELETE ' + endpoint, finalParams);
  return (0, _axios2.default)({
    method: 'delete',
    url: url + '/' + endpoint,
    header: {},
    data: finalParams.params
  }).catch(function (error) {
    console.log('delete error', error);

    if (error.response) {
      throw error.response.data;
    }
  });
};

api.delete = deleteRequest;

var put = function put(url, endpoint) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var finalParams = params === false ? null : { params: setParams(params) };
  console.log('PUT ' + endpoint, finalParams);
  return (0, _axios2.default)({
    method: 'put',
    url: url + '/' + endpoint,
    header: {},
    data: finalParams.params
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log('put error', error);

    if (error.response) {
      throw error.response.data;
    }
  });
};

api.put = put;

module.exports = api;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2FwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInFzIiwiYXBpIiwiZ2V0IiwidXJsIiwiZW5kcG9pbnQiLCJwYXJhbXMiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsInN0cmluZ2lmeSIsImhlYWRlciIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwicG9zdCIsImZpbmFsUGFyYW1zIiwic2V0UGFyYW1zIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwicGFyYW0iLCJhcHBlbmQiLCJkZWxldGVSZXF1ZXN0IiwiZGVsZXRlIiwicHV0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7OztBQUVQLElBQU0sTUFBTixBQUFZOztBQUVaLElBQU0sTUFBTSxTQUFOLEFBQU0sSUFBQSxBQUFDLEtBQUQsQUFBTSxVQUF3QztNQUE5QixBQUE4Qiw2RUFBckIsQUFBcUI7TUFBakIsQUFBaUIsOEVBQVAsQUFBTyxBQUN4RDs7VUFBQSxBQUFRLElBQUksU0FBQSxBQUFTLE1BQVQsQUFBZSxNQUEzQixBQUFpQyxVQUFqQyxBQUEyQyxBQUMzQzs7WUFBYSxBQUNILEFBQ1I7U0FBQSxBQUFRLFlBQVIsQUFBZSxpQkFBWSxhQUFBLEFBQUcsVUFGbkIsQUFFZ0IsQUFBYSxBQUN4QztZQUhLLEFBQU0sQUFHSDtBQUhHLEFBQ1gsR0FESyxFQUFBLEFBSUosS0FBSyxvQkFBQTtXQUFZLFNBQVosQUFBcUI7QUFKdEIsS0FBQSxBQUk0QixNQUFNLFVBQUEsQUFBQyxPQUFVLEFBQ2hEO1lBQUEsQUFBUSxJQUFSLEFBQVksYUFBWixBQUF5QixBQUV6Qjs7UUFBSSxNQUFKLEFBQVUsVUFBVSxBQUNsQjtZQUFNLE1BQUEsQUFBTSxTQUFaLEFBQXFCLEFBQ3RCO0FBQ0Y7QUFWSCxBQUFPLEFBV1I7QUFiRDtBQWNBLElBQUEsQUFBSSxNQUFKLEFBQVU7O0FBRVYsSUFBTSxP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