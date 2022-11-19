const MainPage = () => {
  return (
    <div className="absolute h-screen w-screen bg-gray-900">
      <div className="relative mx-auto">
        <h1 className="pt-12 text-center font-roboto text-8xl font-bold text-white">
          Medical Image Viewer
        </h1>

        <p className="mx-6 mt-6 text-center font-roboto text-xl font-medium text-slate-500">
          Web-based application for viewing of
          <code className="font-mono font-medium text-sky-400">
            .nii.gz
          </code>{' '}
          magnetic resonance images, anywhere.
        </p>

        <div className="mx-auto mt-12 grid w-1/2 grid-cols-1 gap-8 xl:grid-cols-3">
          <div className="rounded-lg bg-gray-800">
            <h3 className="m-2 mt-4 text-center font-roboto text-4xl font-semibold text-white">
              Upload
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="mx-auto h-12 w-12 stroke-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <p className="m-2 mx-4 mb-4 text-center font-roboto text-xl font-normal text-slate-500">
              Upload your file using the button below and start analyzing your
              image instantly. It's that easy.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800">
            <h3 className="m-2 mt-4 text-center font-roboto text-4xl font-semibold text-white">
              View
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="mx-auto h-12 w-12 stroke-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <p className="m-2 mx-4 mb-4 text-center font-roboto text-xl font-normal text-slate-500">
              Once your file has loaded, you will be able to view all
              orientations and also a 3D volume render of the image.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800">
            <h3 className="m-2 mt-4 text-center font-roboto text-4xl font-semibold text-white">
              Analyze
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="mx-auto h-12 w-12 stroke-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>

            <p className="m-2 mx-4 mb-4 text-center font-roboto text-xl font-normal text-slate-500">
              Apply various filters and analyze the image using various
              functions implemented from the Python library SimpleITK.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
