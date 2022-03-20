import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { LazyLoadPage1, LazyLoadPage2, LazyLoadPage3 } from '../pages';

const Navigation = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <h2>Lazy Layout pages</h2>
      <div>
        <ul>
          <li>
            <Link to={`${url}/lazy1`}>Lazy Page1</Link>
          </li>
          <li>
            <Link to={`${url}/lazy2`}>Lazy Page2</Link>
          </li>
          <li>
            <Link to={`${url}/lazy3`}>Lazy Page3</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path={`${path}/lazy1`}>
          <LazyLoadPage1 />
        </Route>
        <Route exact path={`${path}/lazy2`}>
          <LazyLoadPage2 />
        </Route>
        <Route exact path={`${path}/lazy3`}>
          <LazyLoadPage3 />
        </Route>
        <Redirect to={`${path}/lazy1`} />
      </Switch>
    </>
  );
};

export default Navigation;
