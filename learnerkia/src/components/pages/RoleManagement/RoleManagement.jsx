import React from "react";
import PageHeader from "../../common/PageHeader";
import NavBtn from "../../common/buttons/NavBtn";

const RoleManagement = () => {
  return (
    <div>
      <PageHeader
        pageName={"Role Management"}
        actionButton={<NavBtn buttonName={"Nav Btn"} />}
      />
      <div className="bg-white min-h-[70vh] p-4">Active Roles go here</div>
    </div>
  );
};

export default RoleManagement;
