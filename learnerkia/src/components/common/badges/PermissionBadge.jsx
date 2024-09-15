import React from "react";

const PermissionBadge = ({ badgeName = "Badge Name", count = 0 }) => {
  return (
    <div className="flex justify-center items-start gap-1 text-sm font-medium bg-lrnrkia-verylight-teal px-6 py-2 rounded-md border-[1px] border-lrnrkia-medium-gray">
      <span>{badgeName}</span>
      <div className="w-4 h-4 bg-lrnrkia-medium-orange text-xs text-lrnrkia-white text-center rounded-full ">
        {count}
      </div>
    </div>
  );
};

export default PermissionBadge;
