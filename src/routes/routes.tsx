import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from 'react-router-dom';
import ShoppingPage from '../02-components-patterns/pages/ShoppingPage';

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
                to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/about'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/user'>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<ShoppingPage/>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/user' element={<h1>Users</h1>} />
          <Route path='*' element={<Navigate to='/' replace />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
