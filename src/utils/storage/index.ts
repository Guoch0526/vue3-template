import { LocalStorageAPI } from './localStorage'
import { SessionstorageAPI } from './sessionStorage'

/**
 * 封装对外接口
 */
interface UseStoreType {
  set: Function
  get: Function
  remove: Function
  getExpire?: Function
  setExpire?: Function
}

export default (store?: string): UseStoreType => {
  let UseStore
  switch (store) {
    case 'localstorage':
      UseStore = LocalStorageAPI
      break

    case 'sessionstorage':
      UseStore = SessionstorageAPI
      break

    default:
      UseStore = LocalStorageAPI
      break
  }
  return new UseStore()
}
