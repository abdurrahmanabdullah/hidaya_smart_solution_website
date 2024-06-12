import axios from "axios";

export default (token = false) => {
  return axios.create({
    baseURL: "https://api.hidayah.hidayahsmart.solutions/api/",
    headers: {
      "content-type": "application/json",
      // authorization: `Bearer ${token}`,
    },
  });
};
