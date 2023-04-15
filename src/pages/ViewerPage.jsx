import { useContext, useState } from 'react';
import { NiivueContext } from '../NiivueContext';
import NiiViewer from '../layouts/NiiViewer';
import ViewPicker from '../layouts/ViewPicker';
import MainMenu from '../layouts/MainMenu';
import ChartPieIcon from '../assets/ChartPieIcon';

const ViewerPage = () => {
  const nv = useContext(NiivueContext);
  const [isViewerVisible, setIsViewerVisible] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const formData = new FormData();

    formData.append('input_file', selectedFile);

    fetch('http://127.0.0.1:8000/api/set_input_file', {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsViewerVisible(true);
      });
  };

  return (
    <div>
      <NiivueContext.Provider value={nv}>
        <div className="fixed z-20 flex h-12 w-screen justify-start bg-gray-800">
          <ChartPieIcon className="my-auto ml-3 h-8 w-8 stroke-2" />
          <h1 className="invisible my-auto ml-2 h-8 font-roboto text-lg font-bold text-white sm:visible">
            Medical Image Viewer
          </h1>
          <input className="my-auto" type="file" onChange={handleFileChange} />
        </div>
        {isViewerVisible ? (
          <>
            <NiiViewer imageUrl="http://127.0.0.1:8000/api/input_file.nii.gz" />
            <ViewPicker />
            <MainMenu />
          </>
        ) : (
          <div className="absolute z-10 h-full w-full bg-gray-900" />
        )}
        <div className="absolute inset-x-0 bottom-0 z-20 flex h-12 w-screen justify-center bg-gray-800">
          <h2
            id="intensity"
            className="my-auto mx-6 h-8 font-roboto text-lg font-bold text-white"
          ></h2>
        </div>
      </NiivueContext.Provider>
    </div>
  );
};

export default ViewerPage;
