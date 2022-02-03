import { Routes, Route, Link } from 'react-router-dom';

import ReactGuideTitle from './components/ReactGuideTitle';

import ReactGuide from './components/ReactGuide';
import ReactGuideAbout from './components/ReactGuideAbout';
import ReactGuideContact from './components/ReactGuideContact';
import ReactGuideCopyright from './components/ReactGuideCopyright';
import ReactGuideStateDescription from './components/ReactGuideStateDescription';
import ReactGuideOnClick from './components/ReactGuideOnClick';

function App() {
  return (
    <>
      <ReactGuideTitle />
      <div className='p-3'>
        <nav className='mb-4'>
          <Link to="/">Home</Link>
          <Link to="/about" className='ms-2'>About</Link>
          <Link to="/contact" className='ms-2'>Contact</Link>
          <Link to="/state-description" className='ms-2'>State Description</Link>
          <Link to="/on-click" className='ms-2'>OnClick</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ReactGuide />} />
          <Route path="/about" element={<ReactGuideAbout />} />
          <Route path="/contact" element={<ReactGuideContact />} />
          <Route path="/state-description" element={<ReactGuideStateDescription />} />
          <Route path="/on-click" element={<ReactGuideOnClick />} />
        </Routes>
      </div>
      <ReactGuideCopyright />
    </>
  );
}

export default App;
