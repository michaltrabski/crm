export const createOutputValue = (values, rep) => {
  let outputValues = { ...values };
  outputValues.excel_name = rep.excel_name;
  Object.keys(outputValues).forEach(
    key => outputValues[key] === "" && delete outputValues[key]
  );
  return JSON.stringify(outputValues);
};
