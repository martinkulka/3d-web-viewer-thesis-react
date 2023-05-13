import { useContext } from 'react';
import { NiivueContext } from '../NiivueContext';
import FastMarchingForm from './FastMarchingForm';
import VolumeList from '../components/VolumeList';
import MenuButtonBar from './MenuButtonBar';

const ControlsMenu = () => {
  const nv = useContext(NiivueContext);

  return (
    <>
      <MenuButtonBar nv={nv} />
      <div className="mx-6 mb-8 flex flex-col space-y-2">
        {nv.volumes.map((volume) => (
          <VolumeList
            key={volume.id}
            volume={nv.getVolumeIndexByID(volume.id)}
          />
        ))}
      </div>
      <FastMarchingForm />
    </>
  );
};

export default ControlsMenu;
