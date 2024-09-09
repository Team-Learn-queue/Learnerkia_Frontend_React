import React from "react";

const PageHeader = ({ pageName, actionButton }) => {
  return (
    <div className="min-h-20 bg-lrnrkia-light-teal flex justify-between items-center p-3">
      <h3>{pageName}</h3>
      <button>{actionButton}</button>
    </div>
  );
};

export default PageHeader;
