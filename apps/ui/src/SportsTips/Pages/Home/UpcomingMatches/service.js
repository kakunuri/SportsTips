const mockData = [
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image:"https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image:"https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image:"https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image:"https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
  {
    name: "Paytm ODI",
    vs: "India vs Australia",
    timestamp: "12:02:02pm 27/10/2020",
    image:"https://www.gstatic.com/webp/gallery/4.sm.webp",
  },
];
export function getUpcomingMatches() {
  return new Promise((resolve) => {
    resolve(mockData);
  });
}
