import JsonData from "../../Assets/Json/Step1.json";

const generateCommaString = () => {
  const commaString = JsonData.List.map(e => {
    return e.CityCode;
  }).join(",");
  return commaString;
};

export default generateCommaString;
