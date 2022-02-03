import React from "react";

const Input = ({ info, showPassword }) => {
  const {
    field,
    placeholder,
    value,
    error,
    touched,
    handleChange,
    handleBlur,
  } = info;
  return (
    <>
      <label htmlFor={field}>{field[0].toUpperCase() + field.slice(1)}</label>
      <br />
      <input
        id={field}
        name={field}
        type={field !== "password" || showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched && error && <span>{error}</span>}
      <br />
    </>
  );
};

export default Input;
