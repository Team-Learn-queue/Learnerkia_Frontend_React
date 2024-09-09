// import EventIcon from "../../../assets/icons/calendar.svg";

const CreateEventBtn = ({ buttonName, buttonIcon }) => {
  return (
    <button className="max-h-[50px] flex justify-center items-center gap-2 border-[1px] border-lrnrkia-medium-teal rounded-lg p-4 ">
      {buttonIcon}
      {buttonName}
    </button>
  );
};
export default CreateEventBtn;
