import React from "react";

const MyInput = ({ myInput, required, value, handleChange, testResult }) => {
  const id = `id_${Math.floor(Math.random() * 9999999999) + 1}`;
  const { name, type, placeholder, hint, regex } = myInput;

  // console.log( myInput, required, value, handleChange, testResult );
  console.log(myInput.name, testResult);
  return (
    <div className="form-group">
      <label htmlFor={id}>
        {name}{" "}
        {required && (
          <small className="text-muted">
            <strong>(wymagane)</strong>
          </small>
        )}{" "}
        <small className="text-muted">Przykład: {hint}</small>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={e => handleChange(e, regex)}
        className={`form-control ${setBorderColor(testResult)}`}
        id={id}
        aria-describedby={name}
      />
    </div>
  );
};

const setBorderColor = testResult => {
  let color = testResult ? `success` : `danger`;
  if (testResult === "") color = "";

  // console.log(`testResult=${testResult}`);

  return `border-${color}`;
};
export default MyInput;
