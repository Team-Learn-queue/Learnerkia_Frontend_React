import EventIcon from "../../../assets/icons/calendar.svg";

const CreateEventBtn = ({ buttonName }) => {
  return (
    <button className="max-h-[50px] flex justify-center items-center gap-2 border-[1px] border-lrnrkia-medium-teal rounded-lg p-4 ">
      <img src={EventIcon} alt="" />
      {buttonName}
    </button>
  );
};
export default CreateEventBtn;
