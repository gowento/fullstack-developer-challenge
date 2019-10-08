import _ from 'lodash';

const filterByRegExp = (array, query) =>
  _.filter(array, obj =>
    _.reduce(
      query,
      (result, value, key) => result && new RegExp(value, 'i').test(obj[key]),
      true
    )
  );

export default filterByRegExp;
