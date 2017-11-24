const Checkit = require('checkit');
const __ = require('../i18n').__;
const PhoneNumber = require('awesome-phonenumber');

const messages = {
  // Custom Predicates
  accepted: __('Must be yes, on, true, or 1'),
  email: __('Must be a valid email address'),
  phone: __('Must be a valid phone number'),
  mobile: __('Must be a valid mobile phone number'),
  exactLength: __('Must be exactly %s characters long', '{{label}}', '{{var_1}}'),
  exists: __('Must be defined'),
  required: __('Required field'),
  minLength: __('Must be at least %s characters long', '{{var_1}}'),
  maxLength: __('Must not exceed %s characters long', '{{var_1}}'),
  lessThan: __('Must be a number less than %s', '{{var_1}}'),
  lessThanEqualTo: __('Must be a number less than or equal to %s', '{{var_1}}'),
  greaterThan: __('Must be a number greater than %s', '{{var_1}}'),
  greaterThanEqualTo: __('Must be a number greater than or equal to %s', '{{var_1}}'),
  between: __('Must be a number between %s and %s', '{{var_1}}', '{{var_2}}'),
  range: __('Must be a number equal or larger than %s and equal or smaller than %s', '{{var_1}}', '{{var_2}}'),
  contains: __('Must contain %s', '{{var_1}}'),
  numeric: __('Must be a numeric value'),
  matchesField: __('Must exactly match the %s', '{{var_1}}'),
  different: __('Must be different than the %s', '{{var_1}}'),
  isPlainObject: __('Must be a plain object'),
  in: __('Must be one of these: %s', '{{var_1}}'),
  notEmpty: __('Must not be empty'),


  // Regex specific messages.
  alpha: __('Must only contain alphabetical characters'),
  alphaDash: __('Must only contain alpha-numeric characters, underscores, and dashes'),
  alphaNumeric: __('Must only contain alpha-numeric characters'),
  alphaUnderscore: __('Must only contain alpha-numeric characters, underscores, and dashes'),
  natural: __('Must be a positive number'),
  naturalNonZero: __('Must be a number greater than zero'),
  integer: __('Must be a valid integer'),
  luhn: __('Must be a valid credit card number'),

  // If there is no validation provided for an item, use this generic line.
  fallback: __('Field is not valid')
};

Checkit.Validator.prototype.phone = function (val) {
  const phoneUtil = new PhoneNumber('+' + val, 'ZZ');
  return phoneUtil.isValid();
};

Checkit.Validator.prototype.mobile = function (val) {
  const phoneUtil = new PhoneNumber('+' + val, 'ZZ');
  return phoneUtil.isMobile();
};

Checkit.Validator.prototype.notEmpty = function (val) {
  return val.length > 0;
};

exports.Checkit = Checkit;

exports.run = (data, rules, maybes) => {
  const checkit = new Checkit(rules, { messages });

  if (maybes) {
    Object.keys(maybes).forEach((name) => {
      const maybe = maybes[name];

      if (Array.isArray(maybe[0])) {
        maybe.forEach((param) => {
          checkit.maybe({ [name]: param[0] }, param[1]);
        });
      } else {
        checkit.maybe({ [name]: maybe[0] }, maybe[1]);
      }
    });
  }

  return checkit.run(data);
};
