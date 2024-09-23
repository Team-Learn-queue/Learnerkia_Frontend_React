import React from "react";
import { CheckMarkIcon } from "../../../assets/icons/Icons";

const SelectAllBtn = ({ onClick, isActive }) => {
  return (
    <button
      className={`flex gap-[6px]  border-[1px] border-lrnrkia-verydark-teal text-lrnrkia-verydark-teal rounded-xl px-4 py-2 ${
        isActive ? "bg-lrnrkia-medium-teal" : "bg-red-500"
      }`}
      onClick={onClick}
    >
      Select All
      <CheckMarkIcon />
    </button>
  );
};

export default SelectAllBtn;
