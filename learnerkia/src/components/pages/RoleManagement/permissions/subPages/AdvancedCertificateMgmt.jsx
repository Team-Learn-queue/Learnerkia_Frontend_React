import SelectAllBtn from "../../../../common/buttons/SelectAllBtn";
import PermissionList from "../../../../common/lists/PermissionList";

const AdvancedCertificateMgmt = () => {
  return (
    <div>
      {/* <h3>User</h3> */}
      <SelectAllBtn />

      <div className="mt-7">
        <PermissionList />
        <PermissionList />
        <PermissionList />
        <PermissionList />
        <PermissionList />
        <PermissionList />
      </div>
    </div>
  );
};

export default AdvancedCertificateMgmt;
