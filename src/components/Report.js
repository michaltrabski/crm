import React, { useState, useEffect } from "react";
import { reports, my_input, all_inputs } from "../data/data";
import { useLocation, useHistory } from "react-router-dom";
import MyInput from "./MyInput";
import { useForm } from "./../customHooks/useForm";
import Modal from "./Modal";
import { createOutputValue } from "./functions/functions";

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
    handleChange,
    handleSubmit,
    hideModal
  } = useForm(all_inputs, all_inputs);

  // console.log("testResults", testResults);
  return (
    rep && (
      <>
        <h1>Tytuł: {rep.title}</h1>
        <p>Krótki opis: {rep.short_desc}</p>
        {/* <p>pathname = {JSON.stringify(pathname)}</p>
        <p>rep = {JSON.stringify(rep)}</p> */}

        <div className="row">
          <div className="col-md-8">
            <h2>Parametry do wygenerowania raportu:</h2>
            {rep.fields.length > 0 ? (
              <form onSubmit={handleSubmit}>
                {rep.fields.map((field, i) => {
                  const myInput = my_input.find(item => item.name === field[0]);
                  return (
                    <MyInput
                      key={i}
                      myInput={myInput}
                      required={field[1] === 1 ? true : false}
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
            value={createOutputValue(values, rep)}
            rep={rep}
          />
        )}
        {/* {JSON.stringify(outputValues)} */}
      </>
    )
  );
};

export default Report;
