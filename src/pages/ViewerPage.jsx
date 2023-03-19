import { useState } from 'react';
import { NVImage } from '@niivue/niivue';
import NiiViewer from '../layouts/NiiViewer';

const ViewerPage = () => {
  const [inputFile, setInputFile] = useState(null);
  const [inputFileUrl, setInputFileUrl] = useState('');
  const [isViewerVisible, setIsViewerVisible] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const formData = new FormData();

    formData.append('input_file', selectedFile);

    fetch('http://127.0.0.1:8000/api/set_input_file/', {
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
      <div className="fixed z-10 flex h-16 w-screen justify-start bg-gray-800">
        <h1 className="my-auto mx-6 h-8 font-roboto text-2xl font-bold text-white">
          Medical Image Viewer
        </h1>
        <input as="button" type="file" onChange={handleFileChange} />
      </div>
      {isViewerVisible ? (
        <NiiViewer imageUrl="http://127.0.0.1:8000/api/input_file.nii.gz" />
      ) : (
        <h1>sfsfe</h1>
      )}
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-16 w-screen justify-center bg-gray-800">
        <h2
          id="intensity"
          className="my-auto mx-6 h-8 font-roboto text-2xl font-bold text-white"
        ></h2>
      </div>
    </div>
  );
};

export default ViewerPage;
