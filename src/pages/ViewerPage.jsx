import NiiViewer from '../layouts/NiiViewer';

const ViewerPage = () => {
  return (
    <div>
      <div className="fixed z-10 flex h-16 w-screen justify-start bg-gray-800">
        <h1 className="my-auto mx-6 h-8 font-roboto text-2xl font-bold text-white">
          Medical Image Viewer
        </h1>
      </div>
      <NiiViewer imageUrl="/T1.nii.gz" />
    </div>
  );
};

export default ViewerPage;
