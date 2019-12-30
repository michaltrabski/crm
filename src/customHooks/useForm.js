import { useState } from "react";

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [testResults, setTestResults] = useState({});
  const [ready, setReady] = useState(false);
  const [textArea, setTextArea] = useState("");

  // console.log(values);

  const handleChange = (e, regex) => {
    // console.log("test=", e.target.value, regex, regex.test(e.target.value));
    setReady(false);
    setTestResults({
      ...testResults,
      [e.target.name]: regex === "" ? true : regex.test(e.target.value) //if no regex specified make test result always be true
    });
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

  return { values, testResults, ready, textArea, handleChange, handleSubmit };
};
