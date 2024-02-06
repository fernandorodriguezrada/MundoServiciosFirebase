const store = require('./store.js')

function getShipping() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

module.exports = {
  getShipping
}