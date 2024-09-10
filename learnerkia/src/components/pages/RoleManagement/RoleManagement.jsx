import PageHeader from "../../layout/secondary/PageHeader";
import NavBtn from "../../common/buttons/NavBtn";
import { Outlet } from "react-router-dom";

const RoleManagement = () => {
  return (
    <div>
      <PageHeader
        pageName={"Role Management"}
        actionButton={
          <NavBtn buttonName={"Create New Role"} navUrl={"create-role"} />
        }
      />

      <h3>TABLE FOR ROLES</h3>
    </div>
  );
};

export default RoleManagement;
