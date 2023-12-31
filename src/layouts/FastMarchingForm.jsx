import { useState, useContext } from 'react';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { NiivueContext } from '../NiivueContext';
import SeedManipulation from './SeedManipulation';
import {
  getSeedsFromObject,
  getSeedStringfromSeeds,
  makeFormDataObjectFromData,
  getObjectWithoutSeeds,
} from '../utils';
import { loadingAtom } from '../atoms/loadingAtom';

const FastMarchingForm = () => {
  const nv = useContext(NiivueContext);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [seeds, setSeeds] = useState(['seed1']);
  const { register, handleSubmit } = useForm();

  const onSubmit = (segmentationParameters) => {
    setLoading(true);

    const objectWithoutSeeds = getObjectWithoutSeeds(segmentationParameters);
    const formData = makeFormDataObjectFromData(objectWithoutSeeds);

    const formSeeds = getSeedsFromObject(segmentationParameters);
    const seedString = getSeedStringfromSeeds(formSeeds);

    formData.append('seeds', seedString);
    console.log(formData);

    fetch('http://127.0.0.1:8000/api/fast_marching/', {
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

  const handleAddSeed = () => {
    const numberOfSeeds = seeds.length;
    const newSeed = `seed${numberOfSeeds + 1}`;

    setSeeds([...seeds, newSeed]);
  };

  const handleRemoveSeed = () => {
    const lastSeedName = `seed${seeds.length}`;

    setSeeds((current) => current.filter((seed) => seed !== lastSeedName));
  };

  return (
    <>
      <p className="text-md ml-6 mb-2 font-roboto font-bold leading-6 text-white">
        Fast marching segmentation
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-6 flex flex-col">
          <div className="mb-2 flex flex-row justify-between">
            <div className="mr-2">
              <p className="mb-1 block font-roboto text-sm text-white">Sigma</p>
              <input
                type="number"
                step="0.1"
                className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                {...register('sigma', { min: 0.1, max: 99 })}
              />
            </div>

            <div className="mx-2">
              <p className="mb-1 block font-roboto text-sm text-white">Alpha</p>
              <input
                type="number"
                step="0.1"
                className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                {...register('alpha', { min: -99, max: 99 })}
              />
            </div>

            <div className="ml-2">
              <p className="mb-1 block font-roboto text-sm text-white">Beta</p>
              <input
                type="number"
                step="0.1"
                className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                {...register('beta', { min: -99, max: 99 })}
              />
            </div>
          </div>

          <div className="mb-2 flex flex-row justify-between">
            <div className="mr-2">
              <p className="mb-1 block font-roboto text-sm text-white">
                Time threshold
              </p>
              <input
                type="number"
                className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                {...register('time_threshold', { min: 1, max: 1000 })}
              />
            </div>

            <div className="ml-2">
              <p className="mb-1 block font-roboto text-sm text-white">
                Stopping time
              </p>
              <input
                type="number"
                className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                {...register('stopping_time', { min: 1, max: 1000 })}
              />
            </div>
          </div>

          <p className="mb-1 block font-roboto text-sm text-white">Seeds</p>
          {seeds.map((seed) => (
            <div key={seed} className="mb-2">
              <input
                className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                {...register(seed, { pattern: /^\d+[\s,]\d+[\s,]\d+$/ })}
              />
            </div>
          ))}
          <SeedManipulation
            numberOfSeeds={seeds.length}
            addSeed={handleAddSeed}
            removeSeed={handleRemoveSeed}
          />

          <div className="flex justify-center">
            <input
              type="submit"
              value="Segment"
              className="mt-4 block h-12 w-32 cursor-pointer rounded-lg bg-sky-400 font-roboto text-white hover:bg-sky-300"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default FastMarchingForm;
