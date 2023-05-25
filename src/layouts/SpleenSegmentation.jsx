import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { loadingAtom } from '../atoms/loadingAtom';

const SpleenSegmentation = ({ nv }) => {
  const [loading, setLoading] = useAtom(loadingAtom);
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    setLoading(true);

    fetch('http://127.0.0.1:8000/api/spleen_ct_segmentation/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
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
        Spleen Segmentation
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <input
            type="submit"
            value="Perform spleen segmentation"
            className="block h-12 w-52 cursor-pointer rounded-lg bg-sky-400 font-roboto text-sm text-white hover:bg-sky-300"
          />
        </div>
      </form>
    </div>
  );
};

export default SpleenSegmentation;
