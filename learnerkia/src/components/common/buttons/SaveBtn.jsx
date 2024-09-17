import React from "react";

const SaveBtn = ({ buttonName }) => {
  return (
    <button
      type="submit"
      className="max-h-[50px] flex justify-center items-center gap-2 border-[1px] bg-lrnrkia-dark-teal rounded-lg p-4 text-lrnrkia-white"
    >
      {buttonName}
    </button>
  );
};

export default SaveBtn;
