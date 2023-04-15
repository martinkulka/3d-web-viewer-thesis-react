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

    nv.opts.multiplanarForceRender = true;
    nv.attachToCanvas(canvas.current);
    nv.loadVolumes(volumeList);
    // nv.setSliceMM(true);
    nv.setSliceType(nv.sliceTypeMultiplanar);
    console.log(nv.volumes);
  }, [imageUrl]);

  return (
    <div>
      <canvas className="absolute z-0" ref={canvas} />
    </div>
  );
};

export default NiiViewer;
