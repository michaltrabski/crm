import React from "react";

const MyInput = ({ myInput, value, handleChange, testResult }) => {
  const id = `id_${Math.floor(Math.random() * 9999999999) + 1}`;
  const { name, type, placeholder, regex } = myInput;

  console.log("MyInput");

  return (
    <div className="form-group">
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={e => handleChange(e, regex)}
        placeholder={placeholder}
        className={`form-control border-${testResult ? `success` : `danger`}`}
        id={id}
        aria-describedby={name}
      />
      <small className="form-text text-muted">Przykład: {placeholder}</small>
      <small className="form-text text-muted">Przykład: {placeholder}</small>
    </div>
  );
};
export default MyInput;
