import React from "react";
import PageHeader from "../../layout/secondary/PageHeader";

import NavBtn from "../../common/buttons/NavBtn";

const CreateNewRole = () => {
  return (
    <div className="">
      <PageHeader pageName={"Create New Role"} />

      <h3>INPUT FIELD</h3>
      <NavBtn buttonName={"Next"} navUrl={"permissions"} />
    </div>
  );
};

export default CreateNewRole;
