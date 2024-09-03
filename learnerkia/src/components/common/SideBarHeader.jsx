import React from "react";

const SideBarHeader = ({ logo, organization }) => {
  return (
    <div className="flex flex-col">
      <img src={logo} alt="" />
      <p>{organization}</p>

      <div className="before: w-20 h-1 bg-red-500 "></div>
    </div>
  );
};

export default SideBarHeader;
