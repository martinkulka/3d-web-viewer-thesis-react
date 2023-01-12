import { useState, useRef, useEffect } from 'react';
import { Niivue } from '@niivue/niivue';

const nv = new Niivue();

const NiiViewer = ({ imageUrl }) => {
  const canvas = useRef();

  useEffect(() => {
    const volumeList = [
      {
        url: imageUrl,
      },
    ];

    nv.attachToCanvas(canvas.current);
    nv.loadVolumes(volumeList);
  }, [imageUrl]);

  const nvUpdateSliceType = (newSliceType) => {
    if (newSliceType === 'axial') {
      nv.setSliceType(nv.sliceTypeAxial);
    } else if (newSliceType === 'coronal') {
      nv.setSliceType(nv.sliceTypeCoronal);
    } else if (newSliceType === 'sagittal') {
      nv.setSliceType(nv.sliceTypeSagittal);
    } else if (newSliceType === 'multi') {
      nv.setSliceType(nv.sliceTypeMultiplanar);
    } else if (newSliceType === '3d') {
      nv.setSliceType(nv.sliceTypeRender);
    }
  };

  const handleUpdateSliceType = (event) => {
    nvUpdateSliceType(event.target.value);
  };

  return (
    <div>
      <div className="text-center">
        <select onChange={handleUpdateSliceType}>
          <option value="axial">Axial</option>
          <option value="coronal">Coronal</option>
          <option value="sagittal">Sagittal</option>
          <option selected value="multi">
            Multiplanar
          </option>
          <option value="3d">3D</option>
        </select>
      </div>

      <canvas
        className="active:border-none"
        ref={canvas}
        height={480}
        width={640}
      />
    </div>
  );
};

export default NiiViewer;
