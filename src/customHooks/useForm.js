import { useState } from "react";

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [testResults, setTestResults] = useState(initialValues);
  const [ready, setReady] = useState(false);

  const handleChange = (e, regex) => {
    setReady(false);
    if (regex !== "") {
      const result = regex.test(e.target.value);
      // console.log("test=", e.target.value, result, regex);
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
