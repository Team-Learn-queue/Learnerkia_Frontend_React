import PermissionList from "../../../../common/lists/PermissionList";
import SelectAllBtn from "../../../../common/buttons/SelectAllBtn";

const BillManagement = () => {
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

export default BillManagement;
