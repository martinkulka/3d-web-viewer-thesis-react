import { useState } from 'react';
import { useForm } from 'react-hook-form';

const FastMarchingForm = () => {
  const [seeds, setSeeds] = useState(['seed1', 'seed2']);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-6 flex flex-col">
        <div className="mb-2 flex flex-row justify-between">
          <div className="mr-2">
            <p className="mb-2 block font-roboto text-sm font-medium text-gray-900 dark:text-white">
              Sigma
            </p>
            <input
              type="number"
              step="0.1"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              {...register('sigma', { min: 0.1, max: 99 })}
            />
          </div>

          <div className="mx-2">
            <p className="mb-2 block font-roboto text-sm font-medium text-gray-900 dark:text-white">
              Alpha
            </p>
            <input
              type="number"
              step="0.1"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              {...register('alpha', { min: 0.1, max: 99 })}
            />
          </div>

          <div className="ml-2">
            <p className="mb-2 block font-roboto text-sm font-medium text-gray-900 dark:text-white">
              Beta
            </p>
            <input
              type="number"
              step="0.1"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              {...register('beta', { min: 0.1, max: 99 })}
            />
          </div>
        </div>

        <div className="mb-2">
          <p className="mb-2 block font-roboto text-sm font-medium text-gray-900 dark:text-white">
            Time threshold
          </p>
          <input
            type="number"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            {...register('time_threshold', { min: 1, max: 1000 })}
          />
        </div>
        <div className="mb-2">
          <p className="mb-2 block font-roboto text-sm font-medium text-gray-900 dark:text-white">
            Stopping time
          </p>
          <input
            type="number"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            {...register('stopping_time', { min: 1, max: 1000 })}
          />
        </div>

        <p className="mb-2 block font-roboto text-sm font-medium text-gray-900 dark:text-white">
          Seeds
        </p>

        {seeds.map((seed) => (
          <div key={seed} className="mb-2">
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              {...register(seed, { pattern: /^\d+[\s,]\d+[\s,]\d+$/ })}
            />
          </div>
        ))}
        <input type="submit" />
      </div>
    </form>
  );
};

export default FastMarchingForm;
