const axios = require("axios");
// const mockData = {
//   "IND vs PAK": {
//     matchDetails: {
//       name: "Paytm ODI",
//       vs: "India vs Pakistan",
//       score: "224/2 in 12 overs",
//     },
//     tips: [
//       {
//         tip: "Total runs in over 7 > 7.5 runs",
//         siteLogo:
//           "https://pbs.twimg.com/profile_images/875372540885118976/hVI5lP67_400x400.jpg",
//         odds: "2.44",
//         timestamp: "12:02:02pm 27/10/2020",
//         status: "Success",
//         siteUrl:
//           "https://members.bet365.com/Members/Services/OpenAccount/?displaymode=Desktop",
//       },
//       {
//         tip: "Total runs in over 7 > 7.5 runs",
//         siteLogo:
//           "https://pbs.twimg.com/profile_images/875372540885118976/hVI5lP67_400x400.jpg",
//         odds: "2.44",
//         timestamp: "12:02:02pm 27/10/2020",
//         status: "Success",
//         siteUrl:
//           "https://members.bet365.com/Members/Services/OpenAccount/?displaymode=Desktop",
//       },
//       {
//         tip: "Total runs in over 7 > 7.5 runs",
//         siteLogo:
//           "https://pbs.twimg.com/profile_images/875372540885118976/hVI5lP67_400x400.jpg",
//         odds: "2.44",
//         timestamp: "12:02:02pm 27/10/2020",
//         status: "Pending",
//         siteUrl:
//           "https://members.bet365.com/Members/Services/OpenAccount/?displaymode=Desktop",
//       },
//     ],
//   },
//   "IND vs AUS": {
//     matchDetails: {
//       name: "Paytm ODI",
//       vs: "India vs Australia",
//       score: "214/2 in 12 overs",
//     },
//     tips: [
//       {
//         tip: "Total runs in over 7 > 7.5 runs",
//         siteLogo: "",
//         odds: "2.44",
//         timestamp: "12:02:02pm 27/10/2020",
//         status: "Failure",
//       },
//       {
//         tip: "Total runs in over 7 > 7.5 runs",
//         siteLogo: "",
//         odds: "2.44",
//         timestamp: "12:02:02pm 27/10/2020",
//         status: "Success",
//       },
//       {
//         tip: "Total runs in over 7 > 7.5 runs",
//         siteLogo: "",
//         odds: "2.44",
//         timestamp: "12:02:02pm 27/10/2020",
//         status: "Success",
//       },
//     ],
//   },
// };

const mockData = [
  {
    series: "ASHES_2020",
    tips: [
      {
        result: "pending",
        insertDateTime: { _seconds: 1586716200, _nanoseconds: 0 },
        gamblingSite: "bettingExpert",
        tip: "pata nhi...dekh lo ",
        odds: "2.5",
        tipID: "12345",
        lastModified: { _seconds: 1586716200, _nanoseconds: 0 },
      },
    ],
    status: "upcoming",
    lastModified: { _seconds: 1586716200, _nanoseconds: 0 },
    sport: "cricket",
    startDateTime: { _seconds: 1586889000, _nanoseconds: 0 },
    match: "AUSvsENG",
    priority: "2.4",
  },
  {
    tips: [
      {
        user: "ravi.raushan.mat14@iitbhu.ac.in",
        result: "success",
        tipId: "123",
        insertDateTime: "2020/04/04 00:00:00",
        gamblingSite: "bet365",
        tip: "Is over me 100 run jayega bhai",
        odds: "2.989",
      },
    ],
    status: "upcoming",
    lastModified: "2020/04/04 00:00:00",
    sport: "cricket",
    startDateTime: "2020/04/04 00:00:00",
    match: "INDvsAUS",
    priority: "2",
    series: "PAYTM20788",
  },
];
// export function getLiveBettingTips() {
//   return new Promise((resolve, reject) => {
//     resolve(mockData);
//   });
// }

export function getLiveBettingTips() {
  return axios
    .get("http://us-central1-ravi-e8d9a.cloudfunctions.net/app/sports/tips")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("Error", err);
    });
}
