import { useState } from 'react';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { Switch } from '@headlessui/react';
import { loadingAtom } from '../atoms/loadingAtom';

const AiSegmentation = ({ nv }) => {
  const [registration, setRegistration] = useState(false);
  const [loading, setLoading] = useAtom(loadingAtom);
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    setLoading(true);

    console.log('got here');

    const formData = new FormData();
    formData.append('registration', registration.toString());

    fetch('http://127.0.0.1:8000/api/wholebrain_unest/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (nv.volumes.length === 2) {
          nv.removeVolumeByUrl('http://127.0.0.1:8000/api/segmentation.nii.gz');
        }

        nv.addVolumeFromUrl({
          url: 'http://127.0.0.1:8000/api/segmentation.nii.gz',
        });

        setLoading(false);
      });
  };

  return (
    <div className="mx-6 mt-4">
      <p className="text-md mb-2 font-roboto font-bold leading-6 text-white">
        Whole Brain Segmentation
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <input
            type="submit"
            value="Perform AI brain segmentation"
            className="block h-12 w-52 cursor-pointer rounded-lg bg-sky-400 font-roboto text-sm text-white hover:bg-sky-300"
          />
          <div className="flex">
            <p className="text-md my-auto ml-2 font-roboto text-white">
              Register image before segmentation
            </p>
            <Switch
              checked={registration}
              onChange={setRegistration}
              className={`${
                registration ? 'bg-sky-400' : 'bg-gray-700'
              } relative my-auto ml-2 inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  registration ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AiSegmentation;
