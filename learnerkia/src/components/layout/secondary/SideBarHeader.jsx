import React from "react";

const SideBarHeader = ({ logo, organization }) => {
  return (
    <div className="flex flex-col justify-center gap-4 items-start relative pl-6 mb-6 text-lg">
      <img src={logo} alt="learnakia logo" className="w-36 h-auto" />
      <p>{organization}</p>

      <div className="before: w-20 h-px absolute -bottom-6 left-3 bg-lrnrkia-medium-gray "></div>
    </div>
  );
};

export default SideBarHeader;
