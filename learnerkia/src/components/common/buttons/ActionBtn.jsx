import React from "react";

const ActionBtn = ({ buttonName }) => {
  return (
    <button className="max-h-[50px] flex justify-center items-center gap-2 border-[1px] bg-lrnrkia-medium-teal rounded-lg p-4 ">
      {buttonName}
    </button>
  );
};

export default ActionBtn;
