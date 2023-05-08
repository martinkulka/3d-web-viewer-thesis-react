import FeatureCardGrid from '../layouts/FeatureCardGrid';

const MainPage = ({ handleDisplayViewer }) => {
  return (
    <div className="min-h-screen w-screen bg-gray-900">
      <h1 className="mx-6 pt-12 text-center font-roboto text-4xl font-bold text-white md:text-8xl">
        Medical Image Viewer
      </h1>

      <p className="text-md mx-6 mt-6 text-center font-roboto font-medium text-slate-500 md:text-xl">
        Web-based application for viewing of
        <code className="font-mono font-medium text-sky-400">.nii.gz</code>{' '}
        magnetic resonance images, anywhere.
      </p>

      <FeatureCardGrid />

      <div className="flex justify-center">
        <button
          type="button"
          className="mt-10 h-12 w-32 cursor-pointer rounded-lg bg-sky-400 font-roboto text-white hover:bg-sky-300 active:bg-sky-300"
          onClick={handleDisplayViewer}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default MainPage;
