import { lazy } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

export interface Route {
  to: string;
  path: any;
  name: string;
  Component: JSXComponent | React.LazyExoticComponent<JSXComponent>;
}

const LazyLayout = lazy(
  () =>
    import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout')
);
// const Lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2')
// );
// const Lazy3 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3')
// );

export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'Lazy Dashboard Layout',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No lazy',
  },
  // {
  //   to: '/lazy3',
  //   path: 'lazy3',
  //   Component: Lazy3,
  //   name: 'Lazy-3',
  // },
];
