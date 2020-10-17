import Axios from "axios";

export const get_content = (apiID) => {
  // const HOSTNAME = "https://aqueous-scrubland-01565.herokuapp.com/";
  const HOSTNAME =
    "https://aqueous-scrubland-01565.herokuapp.com/"
  const API_ID = apiID;
  const CMS_URL = HOSTNAME + API_ID;
  const data = Axios.get(CMS_URL).then((data) => {
    return data;
  });
  return data;
};
