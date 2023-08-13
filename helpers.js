export default {
  json: (value) => JSON.stringify(value, null, 2),
  upperCase(value) {
    return value?.toUpperCase();
  },
};
