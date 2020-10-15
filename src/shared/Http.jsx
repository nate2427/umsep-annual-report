import Axios from "axios";

export const get_content = (apiID) => {
  // const HOSTNAME = "https://aqueous-scrubland-01565.herokuapp.com/";
  const HOSTNAME =
    window.location.hostname === "localhost"
      ? "http://localhost:1337/"
      : "http://192.168.1.157:1337/";
  const API_ID = apiID;
  const CMS_URL = HOSTNAME + API_ID;
  const data = Axios.get(CMS_URL).then((data) => {
    return data;
  });
  return data;
};
