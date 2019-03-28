import generateCommaString from "../Utils/Arraytoword/ArrayToWord";
import Request from "./RequestHandler.api";
const key = "8de0ee46b8d4346093951d037f2c97d1";

const getResponseData = async () => {
  const response = await Request.get("", {
    params: {
      units: "metric",
      id: generateCommaString(),
      appid: key
    }
  });

  return response.data.list;
};

export default getResponseData;
