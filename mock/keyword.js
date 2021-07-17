const {KEYWORDS} = require("./data/data");

module.exports = [
  {
    url: '/keyword/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: KEYWORDS
      }
    }
  },
]
