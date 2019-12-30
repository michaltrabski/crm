import React from "react";

const MyInput = ({ myInput, value, handleChange, testResult }) => {
  const id = `id_${Math.floor(Math.random() * 9999999999) + 1}`;
  const { name, type, placeholder, hint, regex } = myInput;

  // console.log(name);

  return (
    <div className="form-group">
      <label htmlFor={id}>
        {name} <small className="text-muted">Przykład: {hint}</small>
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
  console.log(testResult, color);
  return `border-${color}`;
};
export default MyInput;
