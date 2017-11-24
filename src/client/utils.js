import moment from 'moment';
import { nfd } from 'unorm';
import { __ } from './i18n';
import config from '../../config/server.config';


exports.placeOrganizations = (entities) => {
  const newEntities = [];
  let currentOrganization = null;
  entities.forEach((entity) => {
    if (!currentOrganization || currentOrganization.id !== entity.organization_id) {
      currentOrganization = entity.organization || {};
      newEntities.push(currentOrganization);
    }
    if (entity.type === 'admin' && currentOrganization) currentOrganization.isAdmin = true;
    newEntities.push(entity);
  });
  return newEntities;
};

exports.sortEntities = (entities) => {
  let newEntities = [];
  let data = [];

  entities.forEach((entity) => {
    if (!entity.code) {
      data.sort((a, b) => a.created < b.created ? -1 : (a.created > b.created ? 1 : 0));
      newEntities = newEntities.concat(data);
      data = [];

      newEntities.push(entity);
    } else {
      data.push(entity);
    }
  });

  data.sort((a, b) => a.created < b.created ? -1 : (a.created > b.created ? 1 : 0));
  newEntities = newEntities.concat(data);

  return newEntities;
};

exports.dateFormat = (date, format) => {
  const formattedDate = moment.utc(date).format(format);
  return (formattedDate !== 'Invalid date' ? formattedDate : null);
};

exports.simpleDate = (date, time = true, format = null, locale = 'en') => {
  const now = moment();
  moment.locale(locale);
  let then = moment(date);
  const diff = then.diff(now, 'hours');

  then = then.utcOffset(now.utcOffset());

  if (format) {
    return then.format(format);
  }

  if (diff > -12 && diff < 12 && time) {
    return then.format('LT');
  } else if (diff > -4380 && diff < 4380) { //24 * 365/2
    return then.format('MMM D');
  }

  return then.format('L');
};

exports.placeDate = (collection) => {
  const newCollection = [];
  let lastReplyDate = null;
  let date = null;

  const calendar = {
    sameDay: `[${__('Today')}]`,
    nextDay: `[${__('Tomorrow')}]`,
    nextWeek: 'dddd',
    lastDay: `[${__('Yesterday')}]`,
    lastWeek: 'dddd',
    sameElse: 'DD/MM/YYYY'
  };

  collection.forEach((element) => {
    date = moment(element.created);

    if (!lastReplyDate || lastReplyDate.date() !== date.date()) {
      if (lastReplyDate) {
        newCollection.push(lastReplyDate.calendar(null, calendar));
      }

      lastReplyDate = date;
    }

    newCollection.push(element);
  });

  if (date) {
    newCollection.push(date.calendar(null, calendar));
  }

  return newCollection;
};

exports.objectFilter = (obj, predicate) =>
    Object.assign({},
      ...Object.keys(obj).filter(key => predicate(obj[key]))
      .map(key => ({ [key]: obj[key] })));


/**
 * Same as `map`, but waits for the previous mapped element to finish before mapping the next
 * @param  {Array} promisesOrVals Array of promises or values
 * @param  {function} mapper       The mapper function
 * @return {Promise<array>}                Promise of an array of results
 */
exports.mapSeries = (promisesOrVals, mapper) =>
  promisesOrVals.reduce((prevResults, pOrV, i, array) =>
    prevResults.then(results => Promise.resolve(pOrV).then(value =>
      mapper(value, i, array)).then(result => results.concat([result]))),
  Promise.resolve([]));


exports.parseQuery = (query) => {
  for (const i in query) {
    if (query[i] === 'true') {
      query[i] = true;
    } else if (query[i] === 'false') {
      query[i] = false;
    }
  }
  return query;
};

exports.normalize = (string) => {
  if (!string) return null;

  return nfd(string).replace(/[\u0300-\u036f]/g, '');
};

exports.asset = (path) => {
  // Setup devServerURL accordingly ( webpack dev server has a different port )
  const isProd = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'stage' || process.env.NODE_ENV === 'ci';
  const devServerURL = isProd ? config.assets.cdn : '/public';
  return devServerURL + path;
};
