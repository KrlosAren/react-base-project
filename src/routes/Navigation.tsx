import { Suspense } from 'react';
import {
  BrowserRouter,
  NavLink,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { routes, RouteType } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>...Loading</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img
              style={{ marginTop: '10px' }}
              src='https://dummyimage.com/120x120.png'
              alt='logo'
            />
            <ul>
              {routes.map(({ path, name }: RouteType) => (
                <li key={path}>
                  <NavLink activeClassName='nav-active' to={path}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Switch>
            {routes.map(({ path, Component, exact }: RouteType) => (
              <Route
                key={path}
                path={path}
                render={() => <Component />}
              />
            ))}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
