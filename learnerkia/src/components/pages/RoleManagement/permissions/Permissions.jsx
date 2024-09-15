import React from "react";
import PageHeader from "../../../layout/secondary/PageHeader";
import NavBtn from "../../../common/buttons/NavBtn";
import { Outlet } from "react-router-dom";
import SaveBtn from "../../../common/buttons/SaveBtn";
import PermissionSettingList from "../../../common/lists/PermissionSettingList";
import PermissionHeader from "./PermissionHeader";

const Permissions = () => {
  return (
    <div>
      <PageHeader
        pageName={"Permissions"}
        actionButton={<SaveBtn buttonName={"Save"} />}
        hasHeaderNav={true}
        headerNavName={"Role Mangement"}
        headerNavUrl={"/role-management"}
      />
      <div className="bg-lrnrkia-white">
        <PermissionHeader />
        <div className="flex gap-4">
          <ul className="w-1/2 max-w-[472px] flex-shrink-0">
            {/* Make list a component */}
            <PermissionSettingList settingsName={"User"} navUrl={"user"} />
            <PermissionSettingList
              settingsName={"Content Management"}
              navUrl={"content-mgmt"}
            />
            <PermissionSettingList
              settingsName={"Certificate Management"}
              navUrl={"certificate-mgmt"}
            />
            <PermissionSettingList
              settingsName={"Reporting and Analytics"}
              navUrl={"report-analytics"}
            />
            <PermissionSettingList
              settingsName={"Bill Management"}
              navUrl={"bill-mgmt"}
            />
            <PermissionSettingList
              settingsName={"Advanced Certificate Management"}
              navUrl={"advanced-certificate-mgmt"}
            />
          </ul>
          <div className="w-full bg-lrnrkia-verylight-teal p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permissions;
