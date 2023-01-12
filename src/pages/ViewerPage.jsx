import NiiViewer from '../layouts/NiiViewer';

const ViewerPage = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-900">
      <h3 className="mx-6 p-12 text-center font-roboto text-4xl font-bold text-white">
        Medical Viewer
      </h3>

      <div className="w-50 h-50 align-center flex justify-center">
        <NiiViewer imageUrl="/T1_v2_brain.nii.gz" />
      </div>
    </div>
  );
};

export default ViewerPage;
