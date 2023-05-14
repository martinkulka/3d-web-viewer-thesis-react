import { useContext, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { NiivueContext } from '../NiivueContext';

const views = ['axial', 'sagittal', 'coronal', 'render', 'multi'];

const ViewPicker = () => {
  const nv = useContext(NiivueContext);
  const [selected, setSelected] = useState('multi');

  const handleViewChange = (value) => {
    switch (value) {
      case 'axial':
        nv.setSliceType(nv.sliceTypeAxial);
        nv.drawScene();
        break;
      case 'sagittal':
        nv.setSliceType(nv.sliceTypeSagittal);
        nv.drawScene();
        break;
      case 'coronal':
        nv.setSliceType(nv.sliceTypeCoronal);
        nv.drawScene();
        break;
      case 'render':
        nv.setSliceType(nv.sliceTypeRender);
        nv.drawScene();
        break;
      case 'multi':
        nv.setSliceType(nv.sliceTypeMultiplanar);
        nv.drawScene();
        break;
      default:
        console.log('invalid value while attempting to change view');
    }
  };

  return (
    <div className="absolute left-2 bottom-14 z-10">
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">View</RadioGroup.Label>
        <div className="space-y-2">
          {views.map((view) => (
            <RadioGroup.Option
              key={view}
              value={view}
              className={({ checked }) =>
                `${
                  checked ? 'bg-cyan-500' : 'bg-gray-800 hover:bg-gray-700'
                } relative flex cursor-pointer rounded-lg px-4 py-2 text-white`
              }
              onClick={() => handleViewChange(view)}
            >
              <p className="m-auto font-roboto text-lg">
                {view.charAt(0).toUpperCase()}
              </p>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default ViewPicker;
