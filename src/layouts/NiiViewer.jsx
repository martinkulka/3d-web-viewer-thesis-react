import { useState, useRef, useEffect } from 'react';
import { Niivue, NVImage } from '@niivue/niivue';

const handleIntensityChange = (data) => {
  const intensity = `${data.vox[0]}, ${data.vox[1]}, ${data.vox[2]}`;
  document.getElementById('intensity').innerHTML = intensity;
};

const nv = new Niivue({
  backColor: [0.066, 0.094, 0.1529, 1],
  dragAndDropEnabled: true,
  onLocationChange: handleIntensityChange,
});

const NiiViewer = ({ imageUrl }) => {
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
    nv.setSliceMM(true);
    nv.setSliceType(nv.sliceTypeMultiplanar);
  }, [imageUrl]);

  return (
    <div>
      <canvas className="absolute z-0" ref={canvas} />
    </div>
  );
};

export default NiiViewer;
