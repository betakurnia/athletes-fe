import Axios from "axios";

const httpClient = Axios.create({
  baseURL: process.env.NEXT_APP_API_BASE_URL,
});

export default httpClient;
