const {FILTERS} = require("./data/data");

module.exports = [
  {
    url: '/filter/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: FILTERS
      }
    }
  },
]
