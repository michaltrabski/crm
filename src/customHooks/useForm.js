import { useState } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
  const [testResults, setTestResults] = useState({});

  const handleChange = (e, regex) => {
    console.log("test=", e.target.value, regex, regex.test(e.target.value));
    setTestResults({
      ...testResults,
      [e.target.name]: regex.test(e.target.value)
    });
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log("handleSubmit", values, testResults);
  };

  return { values, testResults, handleChange, handleSubmit };
};
