import { useState } from "react";

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [testResults, setTestResults] = useState(initialValues);
  const [ready, setReady] = useState(false);
  const [textArea, setTextArea] = useState("");

  // console.log("xxx", testResults);

  const handleChange = (e, regex) => {
    setReady(false);

    if (regex !== "") {
      const result = regex.test(e.target.value);
      console.log("test=", e.target.value, result, regex);
      setTestResults({
        ...testResults,
        [e.target.name]: result
        //[e.target.name]: regex === "" ? true : regex.test(e.target.value) //if no regex specified make test result always be true
      });
    }
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Object.keys(values).forEach(key => {
    //   console.log(`${key} : ${values[key]}`);
    // });

    // console.log("handleSubmit", values, testResults);
    setTextArea(JSON.stringify(values));
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
    textArea,
    handleChange,
    handleSubmit
  };
};
