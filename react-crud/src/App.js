import { Routes, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import CrudIndex from './views/crud/CrudIndex';

function App() {
  return (
    <div className='p-3'>
      <nav className='mb-3'>
        <Link to="/">Home</Link>
        <Link to="/crud" className='ms-2'>CRUD</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crud" element={<CrudIndex />} />
      </Routes>
    </div>
  );
}

export default App;
