import { observable, extendObservable, toJS } from 'mobx';

// Default store structure
const defaultStore = exports.defaultStore = {
  app: {
    url: null,
    name: 'react-boiler',
    title: '',
    description: '',
    host: '',
    color: '1979BB',
    locale: 'en',
    env: 'production'
  },
  userinfo:{
    logged: false,
    token: 0,
    user_id: 0,
    name: "",
    phone: "",
    cpf: "",
    email: ""
  },
  carrinho: {
    produtos: {}
  },
  frete: {
  },
  finalizado: {
  },
  produtos: [],
  produto: null,
  snackbar: {
    active: false,
    message: '',
    success: false
  },
  loadingRequest: false,
  // Previous request, used to minimize request size
  previous: {
    params: {},
    components: []
  },
  // Renders content at start of document
  prepends: [],
  // Renders content at end of document
  appends: [],

  // Page loading for history push
  pageLoading: false,
  history: []
};

const observableDefaultStore = observable(defaultStore);

// Export an instance of our store ( function so that we don't re-use same object for every session )
exports.createStore = (store = {}) => (
  process.env.IS_CLIENT === true ? extendObservable(observableDefaultStore, store) : toJS(observableDefaultStore)
);
