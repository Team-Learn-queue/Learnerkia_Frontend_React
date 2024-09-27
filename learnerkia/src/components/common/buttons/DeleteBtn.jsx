import { TrashIcon } from "../../../assets/icons/Icons";

const DeleteBtn = () => {
  return (
    <button className="flex justify-center items-center gap-2 text-lrnrkia-verydark-teal">
      <TrashIcon /> <span>Delete</span>
    </button>
  );
};

export default DeleteBtn;
