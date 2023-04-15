import { useState, useContext } from 'react';
import { NiivueContext } from '../NiivueContext';

const VolumeController = ({ volume }) => {
  const nv = useContext(NiivueContext);
  const [opacity, setOpacity] = useState(
    parseFloat(nv.volumes[volume].opacity)
  );

  const handleOpacityChange = (event) => {
    setOpacity(event.target.value);
    nv.setOpacity(volume, event.target.value);
  };

  return (
    <div className="mx-6 my-2">
      <div className="flex flex-row justify-between">
        <p className="font-roboto text-lg text-white">Opacity</p>
        <input
          type="range"
          min="0"
          max="1"
          value={opacity}
          step="0.1"
          className="my-auto h-2 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
          onChange={handleOpacityChange}
        />
      </div>
    </div>
  );
};

export default VolumeController;
