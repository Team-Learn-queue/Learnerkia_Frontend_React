import React from "react";
import HeaderNav from "../../common/navigation/HeaderNav";

const PageHeader = ({
  pageName,
  actionButton,
  hasHeaderNav,
  headerNavName,
  headerNavUrl,
}) => {
  return (
    <div>
      {hasHeaderNav ? (
        <HeaderNav headerNavName={headerNavName} navUrl={headerNavUrl} />
      ) : (
        ""
      )}
      <div className="min-h-24 flex justify-between items-end p-3 pl-0 mb-6 ">
        <h3>{pageName}</h3>
        <button>{actionButton}</button>
      </div>
    </div>
  );
};

export default PageHeader;
