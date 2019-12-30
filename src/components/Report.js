import React, { useState, useEffect } from "react";
import { reports, my_input } from "../data/data";
import { useLocation, useHistory } from "react-router-dom";
import MyInput from "./MyInput";
import { useForm } from "./../customHooks/useForm";

const Report = () => {
  const [rep, setRep] = useState(false);
  let { pathname } = useLocation();
  let history = useHistory();

  useEffect(() => {
    let currentRep = reports.find(rep => rep.slug === pathname);
    currentRep ? setRep(currentRep) : history.push("/");
  }, []);

  const {
    values,
    testResults,
    ready,
    textArea,
    handleChange,
    handleSubmit
  } = useForm();

  return (
    rep && (
      <>
        <h1>{rep.title}</h1>
        <p>Component = Report</p>
        <p>pathname = {JSON.stringify(pathname)}</p>
        <p>rep = {JSON.stringify(rep)}</p>

        <div>
          <h2>Parametry do wygenerowania raportu:</h2>
          {rep.fields ? (
            <>
              <form onSubmit={handleSubmit}>
                {rep.fields.map((field, i) => {
                  const myInput = my_input.find(item => item.name === field);
                  return (
                    <MyInput
                      key={i}
                      myInput={myInput}
                      value={values[myInput.name]}
                      handleChange={handleChange}
                      testResult={testResults[myInput.name]}
                    />
                  );
                })}

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              {ready && (
                <div className="mt-5">
                  <p>
                    Skopiuj poniższy kod i wklej go do excela o nazwie:{" "}
                    {rep.excel_name}
                  </p>
                  <textarea value={textArea} readOnly></textarea>
                </div>
              )}
            </>
          ) : (
            <span className="text-danger">
              "Ten raport nie posiada zdefiniowanych parametrów. Napisz o tym do
              Michała!"
            </span>
          )}
        </div>
      </>
    )
  );
};

export default Report;
