import { DebounceInput } from 'react-debounce-input';
import { useState, useContext } from 'react';
import { NiivueContext } from '../NiivueContext';
import ColorMapPicker from './ColorMapPicker';

const VolumeController = ({ volume }) => {
  const nv = useContext(NiivueContext);
  const [opacity, setOpacity] = useState(
    parseFloat(nv.volumes[volume].opacity)
  );

  const handleOpacityChange = (event) => {
    setOpacity(event.target.value);
    nv.setOpacity(volume, event.target.value);
    nv.updateGLVolume();
  };

  return (
    <div className="relative mx-6 my-2 pt-6 pb-4">
      <div className="flex flex-row justify-between pb-2">
        <p className="text-md font-roboto text-white">Opacity</p>
        <DebounceInput
          type="range"
          minLength={1}
          debounceTimeout={200}
          min="0"
          max="1"
          value={opacity}
          step="0.1"
          className="my-auto h-2 cursor-pointer appearance-none rounded-lg bg-gray-700"
          onChange={handleOpacityChange}
        />
      </div>
      <div className="relative flex flex-row justify-between">
        <p className="text-md my-auto font-roboto text-white">Color map</p>
        <ColorMapPicker volume={volume} />
      </div>
    </div>
  );
};

export default VolumeController;
