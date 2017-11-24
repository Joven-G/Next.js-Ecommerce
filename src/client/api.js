import axios from 'axios';
import qs from 'qs';

export const createAPI = () => {
  const api = {};

  const get = (url, endpoint, params = {}) => {
    console.log('GET ' + url + '/' + endpoint, params);
    return axios({
      method: 'get',
      url: `${url}/${endpoint}?${qs.stringify(params)}`,
      header: {}
    }).then(response => response.data).catch((error) => {
      console.log('get error', error);

      if (error.response) {
        throw error.response.data;
      }
    });
  };
  api.get = get;

  const post = (url, endpoint, params = {}, header = {}) => {
    const finalParams = params;
    let data;

    if (header['Content-Type'] === 'multipart/form-data') {
      data = new FormData();
      Object.keys(finalParams.params).forEach((param) => {
        data.append(param, finalParams.params[param]);
      });
    } else {
      data = finalParams;
    }
    console.log('POST ' + endpoint, data);

    return axios({
      method: 'post',
      url: `${url}/${endpoint}?${qs.stringify(data)}`,
      header: {}
    }).then(response => response.data).catch((error) => {
      console.log('post error', error);

      if (error.response) {
        throw error.response.data;
      }
    });
  };

  api.post = post;

  const deleteRequest = (url, endpoint, params = {}) => { //for some reason can't simply call it delete
    const finalParams = params;
    console.log('DELETE ' + endpoint, finalParams);
    return axios({
      method: 'delete',
      url: `${url}/${endpoint}`,
      header: {},
      data: finalParams.params
    }).catch((error) => {
      console.log('delete error', error);

      if (error.response) {
        throw error.response.data;
      }
    });
  };

  api.delete = deleteRequest;

  const put = (url, endpoint, params = {}) => {
    const finalParams = params;
    console.log('PUT ' + endpoint, finalParams);
    return axios({
      method: 'put',
      url: `${url}/${endpoint}`,
      header: {},
      data: finalParams.params
    }).then(response => response.data).catch((error) => {
      console.log('put error', error);

      if (error.response) {
        throw error.response.data;
      }
    });
  };

  api.put = put;

  return api;
};

export default createAPI;
