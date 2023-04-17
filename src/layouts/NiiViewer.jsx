import { useRef, useEffect, useContext } from 'react';
import { NiivueContext } from '../NiivueContext';

const NiiViewer = ({ imageUrl }) => {
  const nv = useContext(NiivueContext);
  const canvas = useRef();

  useEffect(() => {
    const volumeList = [
      {
        url: imageUrl,
        opacity: 1,
      },
    ];

    nv.attachToCanvas(canvas.current);
    nv.loadVolumes(volumeList);
    nv.setSliceType(nv.sliceTypeMultiplanar);
    nv.setCornerOrientationText(false);
    nv.drawScene();
  }, [imageUrl]);

  return (
    <div>
      <canvas className="absolute z-0" ref={canvas} />
    </div>
  );
};

export default NiiViewer;
