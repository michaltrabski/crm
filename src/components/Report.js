import React, { useState, useEffect } from "react";
import MyInput from "./MyInput";
import { useForm } from "./../customHooks/useForm";
import Modal from "./Modal";
import { createOutputValue } from "./functions/functions";

const Report = ({ report }) => {
  console.log("Report = ", report.fields);

  const initialValues = {};
  report.fields.forEach(item => {
    const [field, required] = item;
    initialValues[field.name] = required ? field.value : "";
  });

  const initialTestResults = {};
  report.fields.forEach(item => {
    const [field, required] = item;
    initialTestResults[field.name] = required ? true : "";
  });

  // console.log("initialValues", initialValues);
  // console.log("initialTestResults", initialTestResults);

  const {
    values,
    testResults,
    ready,
    handleChange,
    handleSubmit,
    hideModal
  } = useForm(initialValues, initialTestResults);

  console.log("Report = ", values, testResults);
  return (
    report && (
      <>
        <h1>Tytuł: {report.title}</h1>
        <p>Krótki opis: {report.short_desc}</p>
        {/* <p>pathname = {JSON.stringify(pathname)}</p>
        <p>rep = {JSON.stringify(rep)}</p> */}

        <div className="row">
          <div className="col-md-8">
            <h2>Parametry do wygenerowania raportu:</h2>
            {report.fields.length > 0 ? (
              <form onSubmit={handleSubmit}>
                {report.fields.map((field, i) => {
                  const [myInput, required] = field;
                  return (
                    <MyInput
                      key={i}
                      myInput={myInput}
                      required={required}
                      value={values[myInput.name]}
                      handleChange={handleChange}
                      testResult={testResults[myInput.name]}
                    />
                  );
                })}
                <button type="submit" className="btn btn-primary">
                  Generuj raport
                </button>
              </form>
            ) : (
              <span className="text-danger">
                "Ten raport nie posiada zdefiniowanych parametrów. Napisz o tym
                do Michała!"
              </span>
            )}
          </div>
        </div>
        {ready && (
          <Modal
            hideModal={hideModal}
            value={createOutputValue(values, report)}
            rep={report}
          />
        )}
        {/* {JSON.stringify(outputValues)} */}
      </>
    )
  );
};

export default Report;
