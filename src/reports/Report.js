import React, { useState, useEffect } from "react";
import { reports } from "../data/data";
import { useLocation, useHistory } from "react-router-dom";
import MyInput from "../components/MyInput";

const Report = () => {
  const [rep, setRep] = useState(false);
  let { pathname } = useLocation();
  let history = useHistory();

  useEffect(() => {
    let currentRep = reports.find(rep => rep.slug === pathname);
    currentRep ? setRep(currentRep) : history.push("/");
  }, []);

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
            <form>
              {rep.fields.map(field => (
                <MyInput input={field} />
              ))}

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          ) : (
            "Ten raport nie posiada zdefiniowanych parametrów"
          )}
        </div>
      </>
    )
  );
};

export default Report;
