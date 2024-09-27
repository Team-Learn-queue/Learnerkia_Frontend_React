import React, { useState } from "react";

const InputOption = ({
  label,
  id,
  type,
  name,
  value,
  onChange,
  currentOption,
}) => {
  return (
    <div
      className={`flex justify-start items-center border-2 rounded-lg mb-3 p-3  ${
        currentOption == value
          ? "border-lrnrkia-dark-teal"
          : " border-lrnrkia-light-gray"
      }`}
    >
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        checked={currentOption === value}
      />
      <label htmlFor={id} className=" w-full px-4">
        {label}
      </label>
    </div>
  );
};

export default InputOption;
