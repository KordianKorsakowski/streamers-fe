import { Navigate, Route, Routes } from 'react-router-dom';
import { Streamers } from './pages/streamers/Streamers';
import { StreamersDetails } from './pages/streamers/StreamersDetails';

function App() {
  return (
    <Routes>
      <Route path="/streamers" element={<Streamers />}></Route>
      <Route path="/" element={<Navigate to="/streamers" replace />} />
      <Route path="/streamer" element={<StreamersDetails />} />
    </Routes>
  );
}

export default App;
