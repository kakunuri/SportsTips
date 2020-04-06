const mockData = [
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image:"",
  },
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image:"",
  },
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image:"",
  },
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image:"",
  },
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image:"",
  },
];
export function getUpcomingMatches() {
  return new Promise((resolve) => {
    resolve(mockData);
  });
}
