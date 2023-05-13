import { useContext, useState, useRef, useMemo } from 'react';
import { NiivueContext } from '../NiivueContext';
import { LoadingContext } from '../LoadingContext';
import NiiViewer from '../layouts/NiiViewer';
import ViewPicker from '../layouts/ViewPicker';
import MainMenu from '../layouts/MainMenu';
import BrainIcon from '../assets/BrainIcon';
import LoadingIndicator from '../layouts/LoadingIndicator';

const ViewerPage = () => {
  const nv = useContext(NiivueContext);
  const [isViewerVisible, setIsViewerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef();

  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading,
    }),
    [isLoading]
  );

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

  const handleFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <NiivueContext.Provider value={nv}>
        <div className="fixed z-20 flex h-12 w-screen justify-start bg-gray-800">
          <BrainIcon className="my-auto ml-3 h-8 w-8 stroke-2" />
          <h1 className="my-auto ml-2 h-8 font-roboto text-lg font-bold text-white">
            Medical Image Viewer
          </h1>
        </div>

        {isViewerVisible ? (
          <>
            <NiiViewer imageUrl="http://127.0.0.1:8000/api/input_file.nii.gz" />
            <ViewPicker />
            <LoadingContext.Provider value={value}>
              <MainMenu />
            </LoadingContext.Provider>
          </>
        ) : (
          <div className="absolute z-10 flex h-full w-full justify-center bg-gray-900 align-middle">
            <input
              className="hidden"
              ref={fileInputRef}
              type="file"
              accept=".nii.gz, .nii"
              onChange={handleFileChange}
            />
            <button
              type="button"
              className="my-auto h-16 w-40 cursor-pointer rounded-lg bg-sky-400 font-roboto text-xl text-white hover:bg-sky-300 active:bg-sky-300"
              onClick={handleFileInput}
            >
              Upload a file
            </button>
          </div>
        )}

        {isLoading && <LoadingIndicator />}
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
