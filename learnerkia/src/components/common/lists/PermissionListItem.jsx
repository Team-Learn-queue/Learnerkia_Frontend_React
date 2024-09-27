import React from "react";

const PermissionListItem = ({
  settingName = "Setting Name",
  _checked,
  _onChange,
}) => {
  return (
    <div className="flex justify-start items-center gap-7 mt-6 text-lrnrkia-dark-gray">
      <input type="checkbox" checked={_checked} onChange={_onChange} />
      <label htmlFor="checkbox" className="text-lg">
        {settingName}
      </label>
    </div>
  );
};

export default PermissionListItem;
