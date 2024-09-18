import PageHeader from "../../layout/secondary/PageHeader";
import NavBtn from "../../common/buttons/NavBtn";
import RoleManagementTable from "../../common/tables/RoleManagementTable";

const RoleManagement = () => {
  return (
    <div>
      <PageHeader
        pageName={"Role Management"}
        actionButton={
          <NavBtn buttonName={"Create New Role"} navUrl={"create-role"} />
        }
      />
      <RoleManagementTable />
    </div>
  );
};

export default RoleManagement;
