import { useState, useContext, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { NiivueContext } from '../NiivueContext';

const colorMaps = [
  'gray',
  'ct_bones',
  'ct_brain',
  'ct_brain_gray',
  'ct_cardiac',
  'ct_soft_tissue',
  'ct_soft',
  'ct_airways',
  'ct_artery',
  'ct_vessels',
];

const ColorMapPicker = ({ volume }) => {
  const nv = useContext(NiivueContext);
  const [selected, setSelected] = useState(nv.volumes[volume].colorMap);

  const handleColorChange = (colorMap) => {
    nv.volumes[volume].colorMap = colorMap;
    nv.updateGLVolume();

    setSelected(colorMap);
  };

  return (
    <Listbox value={selected} onChange={handleColorChange}>
      <div className="relative">
        <Listbox.Button className="h-10 w-32 cursor-pointer rounded-lg bg-gray-700 py-2 hover:bg-[#414b5a]">
          <p className="text-md font-roboto text-white">{selected}</p>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 w-full rounded-md bg-[#414b5a]">
            {colorMaps
              .filter((map) => map !== selected)
              .map((map) => (
                <Listbox.Option
                  key={map}
                  className={({ active }) =>
                    `relative flex cursor-pointer select-none justify-center py-2 ${
                      active ? 'bg-sky-400' : 'text-gray-900'
                    }`
                  }
                  value={map}
                >
                  <p className="text-md font-roboto text-white">{map}</p>
                </Listbox.Option>
              ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default ColorMapPicker;
