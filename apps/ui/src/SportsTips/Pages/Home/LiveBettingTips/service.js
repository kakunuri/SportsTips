const mockData = {
  "IND vs PAK": {
    matchDetails: {
      name: "Paytm ODI",
      vs: "India vs Pakistan",
      score: "224/2 in 12 overs",
    },
    tips: [
      {
        tip: "Total runs in over 7 > 7.5 runs",
        siteLogo:
          "https://pbs.twimg.com/profile_images/875372540885118976/hVI5lP67_400x400.jpg",
        odds: "2.44",
        timestamp: "12:02:02pm 27/10/2020",
        status: "Success",
        siteUrl:
          "https://members.bet365.com/Members/Services/OpenAccount/?displaymode=Desktop",
      },
      {
        tip: "Total runs in over 7 > 7.5 runs",
        siteLogo:
          "https://pbs.twimg.com/profile_images/875372540885118976/hVI5lP67_400x400.jpg",
        odds: "2.44",
        timestamp: "12:02:02pm 27/10/2020",
        status: "Success",
        siteUrl:
          "https://members.bet365.com/Members/Services/OpenAccount/?displaymode=Desktop",
      },
      {
        tip: "Total runs in over 7 > 7.5 runs",
        siteLogo:
          "https://pbs.twimg.com/profile_images/875372540885118976/hVI5lP67_400x400.jpg",
        odds: "2.44",
        timestamp: "12:02:02pm 27/10/2020",
        status: "Pending",
        siteUrl:
          "https://members.bet365.com/Members/Services/OpenAccount/?displaymode=Desktop",
      },
    ],
  },
  "IND vs AUS": {
    matchDetails: {
      name: "Paytm ODI",
      vs: "India vs Australia",
      score: "214/2 in 12 overs",
    },
    tips: [
      {
        tip: "Total runs in over 7 > 7.5 runs",
        siteLogo: "",
        odds: "2.44",
        timestamp: "12:02:02pm 27/10/2020",
        status: "Failure",
      },
      {
        tip: "Total runs in over 7 > 7.5 runs",
        siteLogo: "",
        odds: "2.44",
        timestamp: "12:02:02pm 27/10/2020",
        status: "Success",
      },
      {
        tip: "Total runs in over 7 > 7.5 runs",
        siteLogo: "",
        odds: "2.44",
        timestamp: "12:02:02pm 27/10/2020",
        status: "Success",
      },
    ],
  },
};

export function getLiveBettingTips() {
  return new Promise((resolve, reject) => {
    resolve(mockData);
  });
}
