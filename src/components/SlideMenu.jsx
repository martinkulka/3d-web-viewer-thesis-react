import { Dialog, Transition } from '@headlessui/react';

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
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                enter="transform transition ease-in-out duration-300 lg:duration-250"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 lg:duration-250"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative h-screen w-screen max-w-2xl">
                  <div className="flex h-full flex-col bg-gray-800 py-6">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="font-roboto text-base font-semibold leading-6 text-white">
                        Options
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 text-white sm:px-6">
                      chuj pojebany
                    </div>
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
