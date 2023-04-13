import MenuIcon from '../assets/MenuIcon';

const MenuButton = ({ handleOpening }) => {
  return (
    <button
      type="button"
      className="absolute right-2 bottom-14 flex cursor-pointer rounded-lg bg-gray-800 px-4 py-4 text-white hover:bg-gray-700"
      onClick={handleOpening}
    >
      <MenuIcon className="h-4 w-4 stroke-1" />
    </button>
  );
};

export default MenuButton;
