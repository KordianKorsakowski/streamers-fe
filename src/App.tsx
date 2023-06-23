import { Navigate, Route, Routes } from 'react-router-dom';
import { Streamers } from './pages/streamers/Streamers';
import { StreamersDetails } from './pages/streamers/StreamersDetails';
import { Layout } from './layouts/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/streamers" element={<Streamers />}></Route>
        <Route path="/" element={<Navigate to="/streamers" replace />} />
        <Route path="/streamer" element={<StreamersDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
