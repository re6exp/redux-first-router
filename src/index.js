export {
  default as connectRoutes,
  push,
  replace,
  back,
  next,
  go,
  canGo,
  canGoBack,
  canGoForward,
  prevPath,
  nextPath,
  history,
  createHref,
  scrollBehavior,
  updateScroll,
  selectLocationState,
  getOptions
} from './connectRoutes'

export const NOT_FOUND = '@@redux-first-router/NOT_FOUND'

export { default as redirect } from './action-creators/redirect'

export { default as actionToPath } from './pure-utils/actionToPath'
export { default as pathToAction } from './pure-utils/pathToAction'
export { default as isLocationAction } from './pure-utils/isLocationAction'
export { default as setKind } from './pure-utils/setKind'
export {
  createBrowserHistory,
  createMemoryHistory,
  createHashHistory
} from './pure-utils/createHistory'

export type {
  RouteString,
  RouteObject,
  Route,
  RoutesMap,
  Routes,
  RouteNames,
  Options,
  Params,
  Payload,
  LocationState,
  Location,
  Meta,
  Action,
  ReceivedAction,
  Listener,
  Listen,
  Push,
  GoBack,
  History,
  HistoryOptions,
  HistoryLocation,
  Document,
  Navigators,
  Navigator,
  Store,
  NavigationAction,
  Router
} from './flow-types'
