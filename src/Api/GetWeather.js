import getResponseData from "./Reqest";

const getWeather = async () => {
  try {
    return await getResponseData();
  } catch (error) {
    throw error;
  }
};

export default getWeather;
