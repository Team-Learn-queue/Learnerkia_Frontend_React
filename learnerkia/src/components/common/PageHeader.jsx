import React from "react";

const PageHeader = ({ pageName, actionButton }) => {
  return (
    <div className=" flex justify-between items-center p-4">
      <h3>{pageName}</h3>
      <button>{actionButton}</button>
    </div>
  );
};

export default PageHeader;
