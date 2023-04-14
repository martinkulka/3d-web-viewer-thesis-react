import AddIcon from '../assets/AddIcon';

const AddButton = ({ onClick, className }) => {
  return (
    <button
      type="button"
      className={`${className} h-8 w-8 cursor-pointer rounded-lg bg-gray-700 p-2 text-white hover:bg-gray-600`}
      onClick={onClick}
    >
      <AddIcon className="m-auto h-4 w-4 stroke-1" />
    </button>
  );
};

export default AddButton;
