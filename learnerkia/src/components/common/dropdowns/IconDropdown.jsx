// import ArrowDown from "../../../assets/icons/arrow-ios-down.svg";
// import ArrowUp from "../../../assets/icons/arrow-ios-up.svg";

import { ArrowDownIOSIcon, ArrowUpIOSIcon } from "../../../assets/icons/Icons";

const IconDropdown = () => {
  return (
    <div className="w-11 h-11 bg-lrnrkia-medium-teal flex justify-center items-center rounded-full">
      {
        <ArrowUpIOSIcon className="w-7 h-auto relative top-0 bottom-0 text-center" />
      }
    </div>
  );
};

export default IconDropdown;
