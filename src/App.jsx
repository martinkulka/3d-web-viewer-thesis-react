import { useState } from 'react';
import MainPage from './pages/MainPage';
import ViewerPage from './pages/ViewerPage';

const App = () => {
  const [displayViewer, setDisplayViewer] = useState(false);

  const handleDisplayViewer = () => {
    setDisplayViewer(true);
  };

  return (
    <div>
      {displayViewer ? (
        <ViewerPage />
      ) : (
        <MainPage handleDisplayViewer={handleDisplayViewer} />
      )}
    </div>
  );
};

export default App;
