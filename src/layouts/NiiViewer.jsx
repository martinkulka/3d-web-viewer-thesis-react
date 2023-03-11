import { useState, useRef, useEffect } from 'react';
import { Niivue } from '@niivue/niivue';

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

  const handleHeader = () => {
    alert(nv.volumes[0].hdr.toFormattedString());
  };

  return (
    <div>
      <canvas className="absolute z-0" ref={canvas} />
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-16 w-screen justify-center bg-gray-800">
        <h2
          id="intensity"
          className="my-auto mx-6 h-8 font-roboto text-2xl font-bold text-white"
        ></h2>
        <button type="button" onClick={handleHeader}>
          click
        </button>
      </div>
    </div>
  );
};

export default NiiViewer;
