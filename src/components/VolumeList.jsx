import { Disclosure, Transition } from '@headlessui/react';
import VolumeController from './VolumeController';

const VolumeList = ({ volume, index }) => {
  return (
    <Disclosure className={`z-${30 - index * 10}`}>
      {({ open }) => (
        <div>
          <Disclosure.Button className="relative h-10 w-full rounded-lg bg-sky-400 hover:bg-sky-300">
            <span className="font-roboto text-lg font-semibold text-white">
              Volume {volume}
            </span>
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transform transition ease-out duration-100"
            enterFrom="translate-y-0"
            enterTo="translate-y-1"
            leave="transform transition ease-in duration-100"
            leaveFrom="translate-y-50"
            leaveTo="translate-y-1"
          >
            <Disclosure.Panel className="relative -mt-2 w-full rounded-lg bg-gray-600">
              <VolumeController volume={volume} />
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default VolumeList;
