import { lazy } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

export interface RouteType {
  path: string;
  Component: JSXComponent | React.LazyExoticComponent<JSXComponent>;
  exact?: boolean;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "lazyLayout"*/ './../01-lazyload/layout/LazyLayout'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "Lazy2"*/ './../01-lazyload/pages/LazyLoadPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "Lazy3"*/ './../01-lazyload/pages/LazyLoadPage3'));

export const routes: RouteType[] = [
  {
    path: '/lazyload',
    Component: LazyLayout,
    name: 'Lazy Layout Nested',
  },
  {
    path: '/no-lazy',
    Component: NoLazy,
    exact: true,
    name: 'No lazy',
  },
  // {
  //   path: '/lazy3',
  //   Component: Lazy3,
  //   exact: true,
  //   name: 'LazyLoadPage3',
  // },
];
