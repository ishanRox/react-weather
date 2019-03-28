import axios from "axios";

const Request = axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5/group"
});

export default Request;
