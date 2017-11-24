const merge = require('deepmerge');
const PhoneNumber = require('awesome-phonenumber');
const levenshtein = require('fast-levenshtein');
const validate = require('../lib/validate');


const placeUnique = function (obj, field, param, existing, mergeOptions) {
  const existingIndex = (param) ? existing.indexOf(field[param]) : existing.indexOf(field);
  if (existingIndex > -1) {
    obj[existingIndex] = merge(obj[existingIndex], field, mergeOptions);
  } else {
    existing.push(param ? field[param] : field);
    obj.push(field);
  }
};

const place = function (obj, field, param, existing) {
  if (Array.isArray(field)) {
    field.filter(n => n).forEach(a => placeUnique(obj, a, param, existing));
  } else if (field) {
    placeUnique(obj, field, param, existing);
  }
};

const parseHeaders = exports.headers = function (row, clearTags = false, possible) {
  const headers = [];
  const otherPossible = possible || ['fullname', 'eid', 'type', 'group', 'disabled', 'see_all', 'invisible', 'description'];

  row.forEach((value) => {
    let field = value;
    if (Array.isArray(value)) field = value[0];

    field = field && field.toLowerCase();

    if (field.startsWith('email') || field.startsWith('phone')) {
      const type = field.startsWith('email') ? 'email' : 'phone';

      const parameters = { type, tags: [] };
      if (!clearTags) {
        const tags = field.slice(type.length).trim();
        if (tags) {
          parameters.tags = value.slice(-1);
        }
      }

      headers.push({
        column: 'address',
        parameters
      });
    } else {
      if (field.startsWith('class') || field.startsWith('group')) field = 'group';

      if (otherPossible.indexOf(field) > -1) {
        headers.push({
          column: field
        });
      } else {
        headers.push({ column: '' });
      }
    }
  });
  return headers;
};

/*const extractEmails = exports.extractEmails = function (value) {
  return value.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
};*/

const validateEmail = exports.validateEmail = function (value) {
  if (value === '') return null;

  const [err] = validate.Checkit.checkSync('email', value, ['email']);

  if (err) {
    return false;
  }
  return value;
};

const validatePhone = exports.validatePhone = function (prefix, value, returnValid = false) {
  const val = value.replace(/[^0-9]+/g, '');

  if (!val) return null;

  const pn = new PhoneNumber('+' + prefix + val, 'ZZ');
  if (!pn.isMobile()) return false;

  return (returnValid) ? pn.getNumber('international') : value;
};

const extractValue = exports.extractValue = function (value) {
  if (/,|;|\//.test(value)) {
    return value.split(/,|;|\//).map(s => s.trim());
  }
  return value;//.trim();
};

const parseBoolean = exports.parseBoolean = function (value) {
  return /true|1|yes|sim|sí|oui|ja/.test(value);
};

const parseType = exports.parseType = function (value, def = 'student') {
  if (value.startsWith('student')) {
    return 'student';
  } else if (value.startsWith('staff')) {
    return 'staff';
  } else if (value.startsWith('admin')) {
    return 'admin';
  }
  return def;
};

const concatMerge = function (destinationArray, sourceArray, mergeOptions) {
  const param = mergeOptions ? mergeOptions.param : null;

  return destinationArray.concat(sourceArray.filter((item) => {
    if (param && typeof item === 'object' && param in item) {
      const found = destinationArray.findIndex(dest => dest[param] === item[param]);
      if (found > -1) {
        destinationArray[found] = merge(destinationArray[found], item);
      }
      return found === -1;
    }

    return destinationArray.indexOf(item) < 0;
  }));
};

const parseAddress = function (field, params, prefix = null) {
  let fields;
  if (params.type === 'email') {
    fields = validateEmail(field);
  } else {
    fields = validatePhone(prefix, field, true);
  }

  if (fields === false) {
    fields = field;
    params.invalid = true;
  }

  if (!fields) return null;

  return Object.assign({}, { address: fields }, params);
};

const parseAddresses = function (field, params, prefix = null) {
  if (Array.isArray(field)) {
    return field.map(f => parseAddress(f, params, prefix));
  }
  return parseAddress(field, params, prefix);
};

const trimValues = function (value) {
  if (typeof value === 'string') {
    return value.trim();
  } else if (typeof value === 'object') {
    value.forEach((item, i) => {
      value[i] = trimValues(item);
    });
    return value;
  }
  return value;
};

exports.arrayToJSON = function (raw, headers = null, prefix = null, type = null) {
  if (!headers) {
    headers = parseHeaders(raw[0]);
  }

  const body = raw;

  const result = [];
  const indexes = [];

  let groupBy = 'fullname';
  if (headers.find(header => header.column === 'eid')) {
    groupBy = 'eid';
  }

  body.forEach((row) => {
    const entity = {
    };
    const addresses = [];
    const groups = [];

    if (type) entity.type = type;

    row.forEach((field, j) => {
      const header = headers[j];
      switch (header.column) {
        case 'address': {
          const address = parseAddresses(field, header.parameters, prefix);
          if (!entity.addresses) {
            entity.addresses = [];
          }
          place(entity.addresses, address, 'address', addresses);
          break;
        }
        case 'group': {
          if (!entity.groups) {
            entity.groups = [];
          }
          place(entity.groups, field, null, groups);
          break;
        }
        case 'type': {
          entity.type = parseType(field);
          break;
        }
        case 'see_all':
        case 'invisible':
        case 'disabled': {
          entity[header.column] = parseBoolean(field);
          break;
        }
        default: {
          entity[header.column] = field;
          break;
        }
      }
    });

    placeUnique(result, entity, groupBy, indexes, { arrayMerge: concatMerge, param: 'address' });
  });

  return result;
};
/*
exports.findAndSortDuplicates = function (array, headers) {
  const compare = [false];

  const eidIndex = headers.findIndex(header => header.column === 'eid');
  const fullnameIndex = headers.findIndex(header => header.column === 'fullname');

  const sorted = array
    .sort((a, b) => (a[fullnameIndex] > b[fullnameIndex] ? 1 : -1))
    .sort((a, b) => ((a[eidIndex] !== '' && a[eidIndex] > b[eidIndex]) ? 1 : -1));

  sorted.reduce((a, b) => {
    compare.push(
      (a[eidIndex] !== '' && a[eidIndex] === b[eidIndex]) ||
      levenshtein.get(a[fullnameIndex], b[fullnameIndex]) < 2
    );
    return b;
  });
  // Add last item as false
  compare.push(false);

  return { sorted, compare };
};
*/
const checkValid = (cell, type, prefix) => (
  type === 'email' ? validateEmail(cell) : validatePhone(prefix, cell)
);

exports.findErrors = function (array, headers, prefix = '') {
  const errors = {};
  const toCheck = ['address', 'fullname', 'eid'];

  const addressIndexes = headers.reduce((a, e, i) => {
    if (toCheck.indexOf(e.column) !== -1) {
      a.push(i);
    }
    return a;
  }, []);

  array.forEach((row, i) => {
    if (row) {
      row.forEach((cell, j) => {
        let errorRow = [];
        if (addressIndexes.indexOf(j) > -1 && headers[j].parameters) {
          const type = headers[j].parameters.type;
          if (Array.isArray(cell)) {
            cell.map((c, k) => {
              if (checkValid(c, type, prefix) === false) errorRow.push(k);
            });
          } else if (checkValid(cell, type, prefix) === false) {
            errorRow = [j];
          }
        } else if (addressIndexes.indexOf(j) > -1 && !headers[j].parameters) {
          if (!cell) {
            errorRow = [j];
          }
        }
        if (errorRow !== null && (typeof errorRow === 'number' || errorRow.length)) {
          if (i in errors) {
            if (!(j in errors[i])) {
              errors[i][j] = errorRow;
            }
          } else {
            errors[i] = {};
            errors[i][j] = errorRow;
          }
        }
      });
    }
  });
  return errors;
};


exports.csvToArray = function (strData, strDelimiter = ',') {
  if (/\t/.test(strData)) {
    strDelimiter = '\t';
  } else if (/;/.test(strData)) {
    strDelimiter = ';';
  }

  // Create a regular expression to parse the CSV values.
  const objPattern = new RegExp(
      (
          // Delimiters.
          '(\\' + strDelimiter + '|\\r?\\n|\\r|^)' +

          // Quoted fields.
          '(?:"([^"]*(?:""[^"]*)*)"|' +

          // Standard fields.
          '([^"\\' + strDelimiter + '\\r\\n]*))'
      ),
      'gi'
    );


  // Create an array to hold our data. Give the array
  // a default empty first row.
  const arrData = [[]];

  // Create an array to hold our individual pattern
  // matching groups.
  let arrMatches = null;

  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while (arrMatches = objPattern.exec(strData)) {
    // Get the delimiter that was found.
    const strMatchedDelimiter = arrMatches[1];


    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (
      strMatchedDelimiter.length &&
      strMatchedDelimiter !== strDelimiter
      ) {
      // If row only has row delimiter, ignore row
      if (arrMatches[0].length <= 1 && !arrMatches[0].match(/\n/g).length) {
        continue;
      }

      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([]);
    }

    let strMatchedValue;

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[2]) {
        // We found a quoted value. When we capture
        // this value, unescape any double quotes.
      strMatchedValue = arrMatches[2].replace(
          new RegExp('""', 'g'),
          '"'
          );
    } else {
      // We found a non-quoted value.
      strMatchedValue = arrMatches[3];
    }

    strMatchedValue = typeof extractValue(strMatchedValue) === 'string' ?
    extractValue(strMatchedValue).replace(/\s+/g, ' ').trim() :
    extractValue(strMatchedValue).map(val => val.replace(/\s+/g, ' ').trim());

    // Now that we have our value string, let's add
    // it to the data array.
    arrData[arrData.length - 1].push(strMatchedValue);
  }

  if (arrData[arrData.length - 1].length === 1 && !arrData[arrData.length - 1][0]) {
    arrData.pop();
  }

  // Return the parsed data.
  return (arrData);
};


const mergeRows = function (headers, row1, row2) {
  const newRow = [];
  const unique = ['fullname', 'eid', 'type', 'invisible', 'see_all', 'disabled'];

  headers.forEach((header, i) => {
    let a = row1[i];
    let b = row2[i];

    if (a && b && a !== b && unique.indexOf(header.column) === -1) {
      if (!Array.isArray(a)) a = [a];
      if (!Array.isArray(b)) b = [b];

      const c = a.concat(b.filter(item => a.indexOf(item) < 0));
      newRow.push(c);
    } else {
      newRow.push(a || b);
    }
  });

  return newRow;
};

exports.mergeAllRows = function (headers, rows) {
  let i = 0;
  let newRow = rows[i];

  while (rows[i + 1] !== undefined) {
    newRow = mergeRows(headers, newRow, rows[i + 1]);
    i += 1;
  }

  return newRow;
};

exports.findDuplicates = function (array, headers) {
  const keys = [];
  const eidIndex = headers.findIndex(header => header.column === 'eid');
  const fullnameIndex = headers.findIndex(header => header.column === 'fullname');

  const uniqueIndex = eidIndex > -1 ? 'eid' : 'fullname';

  return array.reduce((prev, item, i) => {
    const index = item[uniqueIndex === 'eid' ? eidIndex : fullnameIndex];

    const key = keys.findIndex((o) => {
      const str1 = o.toLowerCase().replace(/\s+/g, ' ').trim();
      const str2 = index.toLowerCase().replace(/\s+/g, ' ').trim();

      if (uniqueIndex === 'eid') {
        return str1 === str2;
      }
      return levenshtein.get(str1, str2) < 2;
    });

    if (key > -1) {
      prev[key].push(i);
    } else {
      prev.push([i]);
      keys.push(index);
    }
    return prev;
  }, [])
  .filter(a => a.length > 1)
  .reduce((prev, items) => {
    prev[items[0]] = {
      items,
      removed: [],
      final: null,
      expanded: false,
      modified: {}
    };
    return prev;
  }, {});
};

exports.validateDuplicates = function (uniqueIndex, index, array, strength = 2) {
  const arrayLength = array.length - 1;
  const final = array.map((item, i) => {
    const str = item[index];
    const val = [];

    for (let n = i + 1; n <= arrayLength; n++) {
      const str1 = str.toLowerCase().replace(/\s+/g, ' ').trim();
      const str2 = array[n][index].toLowerCase().replace(/\s+/g, ' ').trim();

      if (uniqueIndex === 'eid') {
        val.push(str1 === str2);
      } else {
        val.push(levenshtein.get(str1, str2) < strength);
      }
    }

    return val.filter(result => result).length === 0;
  });
  return final.filter(result => !result).length === 0;
};

exports.applyPrefix = (prefix, array, headers, errors) => {
  const phoneIndexes = headers.reduce((a, e, i) => {
    if (e.column === 'address' && e.parameters.type === 'phone') {
      a.push(i);
    }
    return a;
  }, []);

  return array.map((row, i) =>
    row && row.map((cell, j) => {
      if (i in errors && errors[i][j] && phoneIndexes.indexOf(j) > -1) {
        if (Array.isArray(cell)) {
          return cell.map((c, k) => ((c !== null && c !== '' && c.trim().length && errors[i][j].indexOf(k) !== -1) ? prefix + c : c));
        }
        return (cell !== null && cell !== '' && cell.trim().length) ? prefix + cell : cell;
      }
      return cell;
    })
  );
};

exports.makeFile = (type, headers, data) => {
  let file = '';

  if (headers.length) {
    file += headers.join(',') + '\n';
  }

  if (data.length) {
    data.forEach((line, i) => {
      file += line.join(',');

      if (i < data.length - 1) {
        file += '\n';
      }
    });
  }

  return `data:${type};charset=utf-8,${encodeURIComponent(file)}`;
};
