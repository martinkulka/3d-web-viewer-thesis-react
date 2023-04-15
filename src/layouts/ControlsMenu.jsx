import { useState, useContext } from 'react';
import { NiivueContext } from '../NiivueContext';
import VolumeList from '../components/VolumeList';

const ControlsMenu = () => {
  const nv = useContext(NiivueContext);

  return (
    <div className="mx-6 flex flex-col space-y-2">
      {nv.volumes.map((volume, index) => (
        <VolumeList key={volume.name} volume={index} />
      ))}
    </div>
  );
};

export default ControlsMenu;
