import { useState } from 'react';
import { Niivue } from '@niivue/niivue';
import NiiViewer from '../layouts/NiiViewer';
import ViewPicker from '../layouts/ViewPicker';
import MainMenu from '../layouts/MainMenu';

const handleIntensityChange = (data) => {
  const intensityString = `${data.vox[0]}, ${data.vox[1]}, ${data.vox[2]}`;
  document.getElementById('intensity').innerHTML = intensityString;
};

const nv = new Niivue({
  backColor: [0.066, 0.094, 0.1529, 1],
  crosshairColor: [0.066, 0.094, 0.1529, 1],
  dragAndDropEnabled: true,
  onLocationChange: handleIntensityChange,
  isResizeCanvas: false,
});

const ViewerPage = () => {
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

  const handleViewChange = (value) => {
    console.log(value);

    switch (value) {
      case 'axial':
        nv.setSliceType(nv.sliceTypeAxial);
        nv.drawScene();
        break;
      case 'sagittal':
        nv.setSliceType(nv.sliceTypeSagittal);
        nv.drawScene();
        break;
      case 'coronal':
        nv.setSliceType(nv.sliceTypeCoronal);
        nv.drawScene();
        break;
      case 'render':
        nv.setSliceType(nv.sliceTypeRender);
        nv.drawScene();
        break;
      case 'multi':
        nv.setSliceType(nv.sliceTypeMultiplanar);
        nv.drawScene();
        break;
      default:
        console.log('invalid value while attempting to change view');
    }
  };

  return (
    <div>
      <div className="fixed z-20 flex h-12 w-screen justify-start bg-gray-800">
        <h1 className="my-auto mx-6 h-8 font-roboto text-lg font-bold text-white">
          Medical Image Viewer
        </h1>
        <input className="my-auto" type="file" onChange={handleFileChange} />
      </div>
      {isViewerVisible ? (
        <>
          <NiiViewer
            nv={nv}
            imageUrl="http://127.0.0.1:8000/api/input_file.nii.gz"
          />
          <ViewPicker handleChange={handleViewChange} />
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
    </div>
  );
};

export default ViewerPage;
