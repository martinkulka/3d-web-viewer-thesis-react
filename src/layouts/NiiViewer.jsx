import { useRef, useEffect } from 'react';

const NiiViewer = ({ nv, imageUrl }) => {
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
  }, [imageUrl]);

  return (
    <div>
      <canvas className="absolute z-0" ref={canvas} />
    </div>
  );
};

export default NiiViewer;
