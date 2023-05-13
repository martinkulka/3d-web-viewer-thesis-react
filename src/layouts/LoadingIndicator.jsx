const LoadingIndicator = () => {
  return (
    <div className="absolute left-0 right-0 bottom-14 z-20 m-auto flex h-12 w-28 items-center justify-center rounded-lg bg-gray-800">
      <div
        className="inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-sky-400"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <p className="text-md ml-2 font-roboto text-white">Loading</p>
    </div>
  );
};

export default LoadingIndicator;
