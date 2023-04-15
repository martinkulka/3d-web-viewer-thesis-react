import { Dialog, Transition } from '@headlessui/react';
import FastMarchingForm from '../layouts/FastMarchingForm';

const SlideMenu = ({ show, onClose }) => {
  return (
    <Transition.Root show={show}>
      <Dialog as="div" className="relative z-30" onClose={onClose}>
        <Transition.Child
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="invisible fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity sm:visible" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                enter="transform transition ease-in-out duration-300 lg:duration-250"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 lg:duration-250"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative h-screen w-screen max-w-2xl">
                  <div className="flex h-full flex-col bg-gray-800 py-6">
                    <div className="ml-2 mb-3 px-4">
                      <Dialog.Title className="font-roboto text-lg font-semibold leading-6 text-white">
                        Options
                      </Dialog.Title>
                    </div>

                    <FastMarchingForm />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SlideMenu;
