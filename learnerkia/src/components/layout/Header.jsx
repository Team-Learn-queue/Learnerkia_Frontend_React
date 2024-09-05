import CreateEventBtn from "../common/buttons/createEventBtn";

import NotificationIcon from "../../assets/icons/bell.svg";
import DefaultProfilePic from "../../assets/icons/person.svg";
import ProfileInfo from "../common/ProfileInfo";
import IconDropdown from "../common/dropdowns/IconDropdown";

const Header = () => {
  return (
    <header className="min-w-[95vw] max-w-[1000px] min-h-10 fixed left-0 flex justify-end items-center gap-6 p-6 ">
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
