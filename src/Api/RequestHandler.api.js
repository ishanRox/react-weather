import axios from "axios";

const Request = axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5/group?appid=8de0ee46b8d4346093951d037f2c97d1"
});

export default Request;
