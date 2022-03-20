import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from 'react-router-dom';
import { Route as RouteType, routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img
              style={{ marginTop: '10px' }}
              src='https://dummyimage.com/120x120.png'
              alt='logo'
            />
            <ul>
              {routes.map(({ to, name }: RouteType) => (
                <li key={to}>
                  <NavLink
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                    to={to}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ to, path, Component }: RouteType) => (
              <Route key={to} path={path} element={React.createElement(Component)} />
            ))}
            <Route
              path='*'
              element={<Navigate to={routes[0].to} replace />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
