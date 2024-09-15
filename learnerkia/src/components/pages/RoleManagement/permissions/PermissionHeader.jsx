import React from "react";
import PermissionBadge from "../../../common/badges/PermissionBadge";

const PermissionHeader = () => {
  return (
    <div className="min-h-20 flex justify-between items-center px-4 mb-6 relative">
      <h4>Select Permission</h4>
      <div className="flex justify-center items-center gap-4">
        <PermissionBadge badgeName="User" count={1} />
        <PermissionBadge badgeName="Content Manager" count={3} />
        <PermissionBadge badgeName="Certificate Management" count={2} />
      </div>
      <div className="w-full h-px bg-lrnrkia-light-gray absolute bottom-0 left-0"></div>
    </div>
  );
};

export default PermissionHeader;
