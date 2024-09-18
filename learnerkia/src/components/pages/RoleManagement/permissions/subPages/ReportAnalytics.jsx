import PermissionListItem from "../../../../common/lists/PermissionListItem";
import SelectAllBtn from "../../../../common/buttons/SelectAllBtn";

const ReportAnalytics = () => {
  const permissionsList = [
    { id: 1, label: "Add user" },
    { id: 2, label: "Edit user" },
    { id: 3, label: "View all users" },
    { id: 4, label: "Archive User" },
    { id: 5, label: "Disable User" },
    { id: 6, label: "Assess a user" },
    { id: 7, label: "Assign contents to a group of users  " },
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

export default ReportAnalytics;
