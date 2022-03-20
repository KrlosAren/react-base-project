import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img
            style={{ marginTop: '10px' }}
            src='https://dummyimage.com/120x120.png'
            alt='logo'
          />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/lazy1'>
                lazy1
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/lazy2'>
                lazy2
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/lazy3'>
                lazy3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='lazy1' element={<LazyPage1 />} />
          <Route path='lazy2' element={<LazyPage2 />} />
          <Route path='lazy3' element={<LazyPage3 />} />
          <Route path='*' element={<Navigate to='/lazy1' replace />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
