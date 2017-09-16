// @flow
import _createBrowserHistory from 'history/createBrowserHistory'
import _createMemoryHistory from 'history/createMemoryHistory'
import _createHashHistory from 'history/createHashHistory'

import { createLocation, locationsAreEqual } from 'history'

import type { History, HistoryOptions } from '../flow-types'

export const createBrowserHistory = (options: HistoryOptions): History => {
  const history = _createBrowserHistory({ ...options })
  return {
    ...history
  }
}

export const createMemoryHistory = (options: HistoryOptions): History => {
  const {
    getUserConfirmation,
    initialEntries = ['/'],
    initialIndex = 0,
    keyLength = 6
  } = options

  const basename = options.basename
    ? stripTrailingSlash(addLeadingSlash(options.basename))
    : ''
  console.warn(`+++ basename:${JSON.stringify(basename)}`)

  const clamp = (n, lowerBound, upperBound) =>
    Math.min(Math.max(n, lowerBound), upperBound)

  const index = clamp(initialIndex, 0, initialEntries.length - 1)

  const history = _createMemoryHistory({ ...options })
  console.warn(`+++ history:${JSON.stringify(history)}`)

  const createKey = () => Math.random().toString(36).substr(2, keyLength)

  const getStrippedPath = path => {
    if (!basename || hasBasename(path, basename)) {
      throw new Error(
        `You are attempting to use a basename on a page whose URL path does not begin 
         with the basename. Expected path "${path}" to begin with "${basename}".`
      )
    }
    if (basename) {
      return stripBasename(path, basename)
    }
    return path
  }

  const entries = initialEntries.map(
    entry =>
      (typeof entry === 'string'
        ? createLocation(getStrippedPath(entry), undefined, createKey())
        : createLocation(
            getStrippedPath(entry),
            undefined,
            entry.key || createKey()
          ))
  )

  const createHref = location => basename + createPath(location)

  const {
    action,
    push,
    replace,
    go,
    goBack,
    goForward,
    canGo,
    block,
    listen
  } = history

  const Push = (path, state) => push(getStrippedPath(path), state)
  const Replace = (path, state) => replace(getStrippedPath(path), state)

  return {
    length: entries.length,
    action,
    location: entries[index],
    index,
    entries,
    createHref,
    push: Push,
    replace: Replace,
    go,
    goBack,
    goForward,
    canGo,
    block,
    listen
  }
}

export const createHashHistory = (options: Object): History => {
  const history = _createHashHistory({ ...options })
  return history
}

// Copy/Pasted from history utils (unvisible from history package):

export const addLeadingSlash = path =>
  (path.charAt(0) === '/' ? path : `/${path}`)

export const stripLeadingSlash = path =>
  (path.charAt(0) === '/' ? path.substr(1) : path)

export const hasBasename = (path, prefix) =>
  new RegExp(`^${prefix}(\\/|\\?|#|$)`, 'i').test(path)

export const stripBasename = (path, prefix) =>
  (hasBasename(path, prefix) ? path.substr(prefix.length) : path)

export const stripTrailingSlash = path =>
  (path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path)

export const parsePath = path => {
  let pathname = path || '/'
  let search = ''
  let hash = ''

  const hashIndex = pathname.indexOf('#')
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex)
    pathname = pathname.substr(0, hashIndex)
  }

  const searchIndex = pathname.indexOf('?')
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex)
    pathname = pathname.substr(0, searchIndex)
  }

  return {
    pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  }
}

export const createPath = location => {
  const { pathname, search, hash } = location

  let path = pathname || '/'

  if (search && search !== '?') {
    path += search.charAt(0) === '?' ? search : `?${search}`
  }
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : `#${hash}`
  return path
}
