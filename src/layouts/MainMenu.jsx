import { useState } from 'react';
import MenuButton from '../components/MenuButton';
import SlideMenu from '../components/SlideMenu';

const MainMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOpening = () => {
    setOpen(!open);
  };

  return (
    <>
      <SlideMenu show={open} onClose={setOpen} />
      <MenuButton handleOpening={handleOpening} />
    </>
  );
};

export default MainMenu;
