import { useState } from "react";

export const useForm = (initialValues = {}, initialTestResults = {}) => {
  const [values, setValues] = useState(initialValues);
  const [testResults, setTestResults] = useState(initialTestResults);
  const [ready, setReady] = useState(false);

  const handleChange = (e, regex, required) => {
    setReady(false);

    // if regex is defined as empty string then dont test it
    if (regex !== "") {
      let val = e.target.value;
      let result = regex.test(val);
      // console.log(
      //   `handleChange: name=${e.target.name} result=${result} required=${required}`
      // );

      // id value in field is an empty string "" and field is not required then as result return an empty string ""
      if (val === "" && !required) result = "";
      setTestResults({
        ...testResults,
        [e.target.name]: result
      });
    }

    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log("e", e);

    console.log("values", values);
    console.log("testResults", testResults);

    // validate all inputs again before submit
    return;
    setReady(true);
  };

  const hideModal = () => {
    setReady(false);
  };

  return {
    values,
    testResults,
    ready,
    hideModal,
    handleChange,
    handleSubmit
  };
};
