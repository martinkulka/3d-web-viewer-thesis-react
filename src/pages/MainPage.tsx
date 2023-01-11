import FeatureCardGrid from '../layouts/FeatureCardGrid';

const MainPage = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-900">
      <h1 className="mx-6 pt-12 text-center font-roboto text-8xl font-bold text-white">
        Medical Image Viewer
      </h1>

      <p className="mx-6 mt-6 text-center font-roboto text-xl font-medium text-slate-500">
        Web-based application for viewing of
        <code className="font-mono font-medium text-sky-400">.nii.gz</code>{' '}
        magnetic resonance images, anywhere.
      </p>

      <FeatureCardGrid />
    </div>
  );
};

export default MainPage;
