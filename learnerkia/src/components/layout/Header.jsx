import CreateEventBtn from "../common/buttons/createEventBtn";

import NotificationIcon from "../../assets/icons/bell.svg";
import DefaultProfilePic from "../../assets/icons/person.svg";
import ProfileInfo from "../common/ProfileInfo";
import IconDropdown from "../common/dropdowns/IconDropdown";

const Header = () => {
  return (
    <header className="min-h-10 max-w-[1800px] mr-auto bg-lrnrkia-pale-white flex justify-end items-center gap-6 p-6 sticky top-0 ">
      <div>
        <img src={NotificationIcon} alt="notification icon" />
      </div>
      <CreateEventBtn buttonName={"Create Event"} />
      <ProfileInfo
        organizationName={"University of Essex"}
        profilePic={DefaultProfilePic}
      />
      <IconDropdown />
    </header>
  );
};

export default Header;
