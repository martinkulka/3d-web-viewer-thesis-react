import { Disclosure, Transition } from '@headlessui/react';
import VolumeController from './VolumeController';

const VolumeList = ({ volume }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div>
          <Disclosure.Button className="relative z-10 h-10 w-full rounded-lg bg-gray-700 hover:bg-gray-600">
            <span className="font-roboto text-lg font-semibold text-white">
              Volume {volume}
            </span>
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transform transition ease-in-out duration-100"
            enterFrom="translate-y-0"
            enterTo="translate-y-1"
            leave="transform transition ease-out duration-100"
            leaveFrom="translate-y-50"
            leaveTo="translate-y-1"
          >
            <Disclosure.Panel className="-mt-6 w-full rounded-lg bg-gray-600">
              <VolumeController volume={volume} />
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default VolumeList;
