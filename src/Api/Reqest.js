import Request from "./RequestHandler.api";

const getCityInfoList = async cityIdList => {
  const response = await Request.get("", {
    params: {
      units: "metric",
      id: cityIdList
    }
  });

  return response.data.list;
};

export default getCityInfoList;
