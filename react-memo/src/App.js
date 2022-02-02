import { Routes, Route, Link } from 'react-router-dom';

import ReactGuideTitle from './components/ReactGuideTitle';
import ReactGuide from './components/ReactGuide';
import ReactGuideAbout from './components/ReactGuideAbout';

function App() {
  return (
    <>
      <ReactGuideTitle />
      <header>
        <Link to="/">Home</Link>
        <Link to="/about" style={{ marginLeft: '4px' }}>About</Link>
      </header>
      <Routes>
        <Route path="/" element={<ReactGuide />} />
        <Route path="/about" element={<ReactGuideAbout />} />
      </Routes>
    </>
  );
}

export default App;
