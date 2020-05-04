const axios = require("axios");

export function getBettingSites() {
  return axios
    .get(
      "http://us-central1-ravi-e8d9a.cloudfunctions.net/app/sports/bookmakers"
    )
    .then((response) => {
      return response.data;
    });
}
