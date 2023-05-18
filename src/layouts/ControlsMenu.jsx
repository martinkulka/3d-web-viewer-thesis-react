import { useContext } from 'react';
import { NiivueContext } from '../NiivueContext';
import FastMarchingForm from './FastMarchingForm';
import VolumeList from '../components/VolumeList';
import MenuButtonBar from './MenuButtonBar';
import DrawingController from './DrawingController';
import AiSegmentation from './AiSegmentation';

const ControlsMenu = () => {
  const nv = useContext(NiivueContext);

  return (
    <>
      <MenuButtonBar nv={nv} />
      <DrawingController nv={nv} />
      <div className="mx-6 mb-8 flex flex-col space-y-2">
        {nv.volumes.map((volume, index) => (
          <VolumeList
            key={volume.id}
            volume={nv.getVolumeIndexByID(volume.id)}
            index={index}
          />
        ))}
      </div>
      <FastMarchingForm />
      <AiSegmentation nv={nv} />
    </>
  );
};

export default ControlsMenu;
