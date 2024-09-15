import React from "react";

const Permission = () => {
  return (
    <div className="flex justify-start items-center">
      <input type="checkbox" className="w-6 h-6" />
      <label htmlFor="checkbox">View Certificate</label>
    </div>
  );
};

export default Permission;
