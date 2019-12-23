import React from "react";

const InputText = ({ name }) => {
  const id = `id_${Math.floor(Math.random() * 9999999999) + 1}`;
  let placeholder = "2019-09-01";

  return (
    <div class="form-group">
      <label htmlFor={id}>{name}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        class="form-control"
        id={id}
        aria-describedby={name}
      />
      <small class="form-text text-muted">{placeholder}</small>
    </div>
  );
};
export default InputText;
