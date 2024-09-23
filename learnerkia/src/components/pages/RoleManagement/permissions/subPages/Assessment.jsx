import React from "react";
import SelectAllBtn from "../../../../common/buttons/SelectAllBtn";
import PermissionListItem from "../../../../common/lists/PermissionListItem";

const Assessment = () => {
  const permissionsList = [
    { id: 1, label: "Veiw bills" },
    { id: 2, label: "Download bills" },
    { id: 3, label: "Share bills" },
  ];
  return (
    <div>
      {/* <h3>User</h3> */}
      <SelectAllBtn />

      <div>
        {permissionsList.map((permission) => (
          <PermissionListItem
            key={permission.id}
            settingName={permission.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Assessment;
