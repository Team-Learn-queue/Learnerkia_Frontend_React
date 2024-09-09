import React from "react";

const ActiveRoles = () => {
  return (
    <div className=" min-h-[70vh] p-4">
      <PageHeader
        pageName={"Role Management"}
        actionButton={<NavBtn buttonName={"Nav Btn"} navUrl={"/create-role"} />}
      />
    </div>
  );
};

export default ActiveRoles;
