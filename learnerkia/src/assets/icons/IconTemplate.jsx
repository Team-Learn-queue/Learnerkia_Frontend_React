import React from "react";

const IconTemplate = ({
  width = "24",
  height = "24",
  fill = "currentColor",
  children,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
};

export default IconTemplate;
