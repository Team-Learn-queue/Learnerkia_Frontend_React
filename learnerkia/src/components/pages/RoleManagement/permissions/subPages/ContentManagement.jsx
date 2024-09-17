import SelectAllBtn from "../../../../common/buttons/SelectAllBtn";
import PermissionList from "../../../../common/lists/PermissionList";

const ContentManagement = () => {
  const permissionsList = [
    { id: 1, label: "Assign contents to user" },
    { id: 2, label: "Assign contents to group of users" },
  ];
  return (
    <div>
      {/* <h3>User</h3> */}
      <SelectAllBtn />

      <div>
        {permissionsList.map((permission) => (
          <PermissionList key={permission.id} settingName={permission.label} />
        ))}
      </div>
    </div>
  );
};

export default ContentManagement;
