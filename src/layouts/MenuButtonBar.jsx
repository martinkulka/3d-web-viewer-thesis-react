const MenuButtonBar = ({ nv }) => {
  const handleClipPlaneToggle = () => {
    if (nv.scene.clipPlaneDepthAziElev[0] > 1) {
      nv.setClipPlane([0.3, 270, 0]);
    } else {
      nv.setClipPlane([2, 270, 0]);
    }
    nv.drawScene();
  };

  const handle3dCrosshair = () => {
    nv.opts.show3Dcrosshair = !nv.opts.show3Dcrosshair;
    nv.drawScene();
  };

  return (
    <div className="mx-6 mb-4 flex flex-row justify-between">
      <button
        type="button"
        className="h-20 w-20 rounded-lg bg-sky-400 hover:bg-sky-300"
        onClick={handleClipPlaneToggle}
      >
        <p className="text-semibold m-auto font-roboto text-white">
          Clip Plane
        </p>
      </button>
      <button
        type="button"
        className="h-20 w-20 rounded-lg bg-sky-400 hover:bg-sky-300"
        onClick={handle3dCrosshair}
      >
        <p className="text-semibold m-auto font-roboto text-white">
          3D Crosshair
        </p>
      </button>
    </div>
  );
};

export default MenuButtonBar;
