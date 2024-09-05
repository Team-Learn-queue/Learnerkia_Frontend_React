import ArrowDown from "../../../assets/icons/arrow-ios-down.svg";
import ArrowUp from "../../../assets/icons/arrow-ios-up.svg";

const IconDropdown = () => {
  return (
    <div className="w-11 h-11 bg-lrnrkia-medium-teal flex justify-center items-center rounded-full">
      <img
        src={ArrowDown}
        alt="dropdown icon"
        className="w-6 h-auto  rounded-full"
      />
    </div>
  );
};

export default IconDropdown;
