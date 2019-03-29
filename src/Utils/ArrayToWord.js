const generateCommaString = JsonData => {
  const commaString = JsonData.List.map(e => {
    return e.CityCode;
  }).join(",");
  return commaString;
};

export default generateCommaString;
