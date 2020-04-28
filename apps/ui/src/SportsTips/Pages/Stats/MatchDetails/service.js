
import axios from 'axios';
const mockData = [
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image: "https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image: "https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image: "https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image: "https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image: "https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
];
export function getDayMatches() {
    return axios
    .get("http://us-central1-ravi-e8d9a.cloudfunctions.net/app/sports/tips")
    .then((response) => {
      return response.data;
    });
}
