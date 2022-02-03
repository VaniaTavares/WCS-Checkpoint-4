import React from "react";
import "./index.scss";

const SortButtons = ({ sortBy, text, value, setSortBy }) => {
  console.log(sortBy, text, value);
  return (
    <button
      className={value === sortBy ? "button-sort-active" : "button-sort"}
      onClick={() => setSortBy(value)}
    >
      {text}
    </button>
  );
};

export default SortButtons;
