import { Routes, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import CrudRead from './views/crud/CrudRead';
import CrudCreate from './views/crud/CrudCreate';
import CrudUpdate from './views/crud/CrudUpdate';
import CrudDelete from './views/crud/CrudDelete';

function App() {
  return (<>
    <div className='p-3'>
      <nav className='mb-3'>
        <Link to='/'>Home</Link>
        <Link to='/crud' className='ms-2'>CRUD</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='crud' caseSensitive>
          <Route element={<CrudRead />} index />
          <Route path='create' element={<CrudCreate />} caseSensitive />
          <Route path=':id'>
            <Route path='update' element={<CrudUpdate />} caseSensitive />
            <Route path='delete' element={<CrudDelete />} caseSensitive />
          </Route>
        </Route>
      </Routes>
    </div>
  </>);
}

export default App;
