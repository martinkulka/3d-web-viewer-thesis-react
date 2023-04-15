import { createContext } from 'react';
import { Niivue } from '@niivue/niivue';

const handleIntensityChange = (data) => {
  const intensityString = `${data.vox[0]}, ${data.vox[1]}, ${data.vox[2]}`;
  document.getElementById('intensity').innerHTML = intensityString;
};

const nv = new Niivue({
  backColor: [0.066, 0.094, 0.1529, 1],
  crosshairColor: [0.066, 0.094, 0.1529, 1],
  dragAndDropEnabled: true,
  onLocationChange: handleIntensityChange,
  loadingText: '',
});

export const NiivueContext = createContext(nv);
