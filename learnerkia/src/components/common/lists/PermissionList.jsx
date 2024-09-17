import React from "react";

const PermissionList = ({ settingName = "Setting Name" }) => {
  return (
    <div className="flex justify-start items-center gap-7 mt-6 text-xs text-lrnrkia-dark-gray">
      <input type="checkbox" />
      <label htmlFor="checkbox" className="text-lg">
        {settingName}
      </label>
    </div>
  );
};

export default PermissionList;
