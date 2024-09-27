import EventBtn from "../../common/buttons/EventBtn";

import ProfileInfo from "../../common/ProfileInfo";
import IconDropdown from "../../common/dropdowns/IconDropdown";
import DefaultProfilePic from "../../../assets/images/react.svg";
import {
  BellIcon,
  CalendarIcon,
  PersonIcon,
} from "../../../assets/icons/Icons";

const Header = () => {
  return (
    <header className="min-h-10 max-w-[1800px] mr-auto bg-lrnrkia-pale-white flex justify-end items-center gap-6 p-6 sticky top-0 z-50">
      <div>
        <BellIcon />
      </div>
      <EventBtn buttonName={"Create Event"} buttonIcon={<CalendarIcon />} />
      <ProfileInfo
        organizationName={"University of Essex"}
        profilePic={DefaultProfilePic}
      />
      <IconDropdown />
    </header>
  );
};

export default Header;
