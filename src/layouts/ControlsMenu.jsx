import { useState, useContext } from 'react';
import { NiivueContext } from '../NiivueContext';
import VolumeList from '../components/VolumeList';
import MenuButtonBar from './MenuButtonBar';

const ControlsMenu = () => {
  const nv = useContext(NiivueContext);

  return (
    <>
      <MenuButtonBar nv={nv} />
      <div className="mx-6 flex flex-col space-y-2">
        {nv.volumes.map((volume) => (
          <VolumeList
            key={volume.id}
            volume={nv.getVolumeIndexByID(volume.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ControlsMenu;
