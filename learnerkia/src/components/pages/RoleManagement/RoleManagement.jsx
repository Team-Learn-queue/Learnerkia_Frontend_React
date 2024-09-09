import PageContent from "../../common/PageContent";
import PageHeader from "../../common/PageHeader";
import NavBtn from "../../common/buttons/NavBtn";
import { Outlet } from "react-router-dom";

const RoleManagement = () => {
  return (
    <div>
      <PageHeader
        pageName={"Role Management"}
        actionButton={
          <NavBtn buttonName={"Create New Role"} navUrl={"/create-role"} />
        }
      />

      <PageContent />
    </div>
  );
};

export default RoleManagement;
