import SelectAllBtn from "../../../../common/buttons/SelectAllBtn";
import PermissionListItem from "../../../../common/lists/PermissionListItem";

const CertificateManagement = () => {
  const permissionsList = [
    { id: 1, label: "Veiw certificate" },
    { id: 2, label: "Download Certificate" },
    { id: 3, label: "Share Certificate" },
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

export default CertificateManagement;
