const axios = require("axios");

async function callUrl({ parameters, url }) {
  const result = await axios.get(`${url}`, { params: parameters });
  return result.data;
}

module.exports = {
  callUrl,
};
