import { useEffect, useState } from "react";
import SelectAllBtn from "../../../../common/buttons/SelectAllBtn";
import PermissionListItem from "../../../../common/lists/PermissionListItem";

const User = () => {
  const permissionsList = [
    { id: 1, label: "Add user" },
    { id: 2, label: "Edit user" },
    { id: 3, label: "View all users" },
    { id: 4, label: "Archive User" },
    { id: 5, label: "Disable User" },
    { id: 6, label: "Assess a user" },
    { id: 7, label: "Assign contents to a group of users  " },
  ];
  ////STATES _________________________///////
  const [permissions, setPermissions] = useState(permissionsList);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (id) => {
    setSelectedPermissions((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((permId) => permId !== id)
        : [...prevSelected, id]
    );
    console.log(selectedPermissions);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedPermissions([]);
    } else {
      setSelectedPermissions(permissions.map((permission) => permission.id));
    }
    setSelectAll(!selectAll);
    console.log("Select All " + selectAll);
  };

  useEffect(() => {
    setSelectAll(selectedPermissions.length === permissions.length);
  }, [selectedPermissions.length]);

  return (
    <div>
      {/* <h3>User</h3> */}
      <SelectAllBtn onClick={handleSelectAll} isActive={selectAll} />

      <div>
        {permissions.map((permission) => (
          <PermissionListItem
            key={permission.id}
            settingName={permission.label}
            _checked={selectedPermissions.includes(permission.id)}
            _onChange={() => handleCheckboxChange(permission.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default User;
