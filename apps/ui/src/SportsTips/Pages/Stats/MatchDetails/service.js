
import axios from 'axios';

export function getDayMatches() {
    return axios
    .get("http://us-central1-ravi-e8d9a.cloudfunctions.net/app/sports/tips")
    .then((response) => {
      return response.data;
    });
}
