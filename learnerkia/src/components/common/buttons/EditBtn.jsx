import { EditIcon } from "../../../assets/icons/Icons";

const EditBtn = () => {
  return (
    <button className="flex justify-center items-center gap-2">
      <EditIcon /> <span>Edit</span>
    </button>
  );
};

export default EditBtn;
