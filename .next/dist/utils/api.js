'use strict';

var _keys = require('next\\node_modules\\babel-runtime/core-js/object/keys');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzXFxhcGkuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJxcyIsImFwaSIsImdldCIsInVybCIsImVuZHBvaW50IiwicGFyYW1zIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJzdHJpbmdpZnkiLCJoZWFkZXIiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInBvc3QiLCJmaW5hbFBhcmFtcyIsInNldFBhcmFtcyIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsInBhcmFtIiwiYXBwZW5kIiwiZGVsZXRlUmVxdWVzdCIsImRlbGV0ZSIsInB1dCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7QUFFUCxJQUFNLE1BQU4sQUFBWTs7QUFFWixJQUFNLE1BQU0sU0FBTixBQUFNLElBQUEsQUFBQyxLQUFELEFBQU0sVUFBd0M7TUFBOUIsQUFBOEIsNkVBQXJCLEFBQXFCO01BQWpCLEFBQWlCLDhFQUFQLEFBQU8sQUFDeEQ7O1VBQUEsQUFBUSxJQUFJLFNBQUEsQUFBUyxNQUFULEFBQWUsTUFBM0IsQUFBaUMsVUFBakMsQUFBMkMsQUFDM0M7O1lBQWEsQUFDSCxBQUNSO1NBQUEsQUFBUSxZQUFSLEFBQWUsaUJBQVksYUFBQSxBQUFHLFVBRm5CLEFBRWdCLEFBQWEsQUFDeEM7WUFISyxBQUFNLEFBR0g7QUFIRyxBQUNYLEdBREssRUFBQSxBQUlKLEtBQUssb0JBQUE7V0FBWSxTQUFaLEFBQXFCO0FBSnRCLEtBQUEsQUFJNEIsTUFBTSxVQUFBLEFBQUMsT0FBVSxBQUNoRDtZQUFBLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBeUIsQUFFekI7O1FBQUksTUFBSixBQUFVLFVBQVUsQUFDbEI7WUFBTSxNQUFBLEFBQU0sU0FBWixBQUFxQixBQUN0QjtBQUNGO0FBVkgsQUFBTyxBQVdSO0FBYkQ7QUFjQSxJQUFBLEFBQUksTUFBSixBQUFVOztBQUVWLElBQU0s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