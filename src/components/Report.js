import React, { useState, useEffect } from "react";
import { reports, my_input, all_inputs } from "../data/data";
import { useLocation, useHistory } from "react-router-dom";
import MyInput from "./MyInput";
import { useForm } from "./../customHooks/useForm";
import Modal from "./Modal";

const Report = () => {
  const [show, setShow] = useState(true);
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
    handleSubmit,
    hideModal
  } = useForm(all_inputs);

  console.log("yyy", testResults);

  // console.log(values, testResults, ready, textArea);

  return (
    rep && (
      <>
        <h1>{rep.title}</h1>
        {/* <p>Component = Report</p>
        <p>pathname = {JSON.stringify(pathname)}</p>
        <p>rep = {JSON.stringify(rep)}</p> */}

        <div className="row">
          <div className="col-md-8">
            <h2>Parametry do wygenerowania raportu:</h2>
            {rep.fields.length > 0 ? (
              <>
                <form onSubmit={handleSubmit}>
                  {rep.fields.map((field, i) => {
                    const myInput = my_input.find(
                      item => item.name === field[0]
                    );
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
                "Ten raport nie posiada zdefiniowanych parametrów. Napisz o tym
                do Michała!"
              </span>
            )}
          </div>
        </div>
        {ready && <Modal hideModal={hideModal} textArea={textArea} rep={rep} />}
      </>
    )
  );
};

export default Report;
