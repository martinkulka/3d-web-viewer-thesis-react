import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const views = ['axial', 'sagittal', 'coronal', 'render', 'multi'];

const ViewPicker = ({ handleChange }) => {
  const [selected, setSelected] = useState('multi');

  return (
    <div className="absolute left-2 bottom-14 z-10">
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">View</RadioGroup.Label>
        <div className="flex-column space-y-2">
          {views.map((view) => (
            <RadioGroup.Option
              key={view}
              value={view}
              className={({ checked }) =>
                `${
                  checked ? 'bg-cyan-500' : 'bg-gray-800 hover:bg-gray-700'
                } relative flex cursor-pointer rounded-lg px-4 py-2 text-white`
              }
              onClick={() => handleChange(view)}
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
