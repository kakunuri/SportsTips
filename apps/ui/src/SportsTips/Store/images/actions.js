const axios = require("axios");
export const setImages = (dispatcher, imageType) => {
  axios
    .get(
      `http://us-central1-ravi-e8d9a.cloudfunctions.net/app/images/${imageType}`
    )
    .then((response) => {
      console.log("get request successful", response.data);
      dispatcher({
        type: imageType.toUpperCase(),
        segmentName: "images",
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
};
