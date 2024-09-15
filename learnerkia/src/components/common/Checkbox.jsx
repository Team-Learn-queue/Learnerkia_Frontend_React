import React from "react";

const Checkbox = ({ isChecked, isDisabled }) => {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      disabled={isDisabled}
      className="bg-red-300 w-[2px] h-[2px]"
    />
  );
};

export default Checkbox;
