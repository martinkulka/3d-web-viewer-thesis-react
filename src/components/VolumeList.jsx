import { Disclosure } from '@headlessui/react';
import VolumeController from './VolumeController';

const VolumeList = ({ volume }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="h-10 w-full rounded-lg bg-gray-700 hover:bg-gray-600">
            <span className="font-roboto text-lg text-white">{volume}</span>
          </Disclosure.Button>
          <Disclosure.Panel className="w-full rounded-lg bg-gray-600">
            <VolumeController volume={volume} />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default VolumeList;
