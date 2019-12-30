import React from "react";
import { my_input } from "../data/data";

const MyInput = ({ input }) => {
  const id = `id_${Math.floor(Math.random() * 9999999999) + 1}`;
  const { name, type, placeholder } = my_input.find(x => x.name === input);

  return (
    <div class="form-group">
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
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
export default MyInput;
