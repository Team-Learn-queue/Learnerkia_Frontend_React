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
      <div className="min-h-[70vh] bg-lrnrkia-white rounded-sm">
        <PermissionHeader />
        <div className="flex">
          <ul className="w-1/2 max-w-[472px] h-fit flex-shrink-0 bg-white">
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
              settingsName={"Assessment"}
              navUrl={"assessment"}
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
          <div className="w-full max-h-[60vh] bg-lrnrkia-verylight-teal p-6 rounded-e-[10px] shadow-sm overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permissions;
