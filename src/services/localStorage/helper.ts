import { isServer } from 'services';
import { LOCAL_STORAGE_KEY } from './types';

class LocalStorageHelper<T> {
  private key: LOCAL_STORAGE_KEY;

  constructor(key: LOCAL_STORAGE_KEY) {
    this.key = key;
  }

  get = (): T | void => {
    if (isServer) {
      return;
    }

    return localStorage.getItem(this.key)
      ? JSON.parse(localStorage.getItem(this.key)!)
      : null;
  }

  set = (data: T) => {
    if (isServer) {
      return;
    }

    localStorage.setItem(this.key, JSON.stringify(data));
  }

  /*
    Upsert
    Works like React setState.
    Only pass the properties that need to be updated.
  */
  save = (data: T extends Array<any> ? T | T[0] : T, identifier?: string) => {
    const curData = this.get();

    if (!curData) {
      this.set(data);

      return;
    }

    // Arrays
    if (Array.isArray(curData)) {
      // @ts-ignore
      const newData: T = [...curData]
        .filter((val) => {
          if (typeof val === 'object' && identifier) {
            if (val[identifier] === data[identifier]) {
              return false;
            }
          }

          return true;
        })
        .concat(data);

      this.set(newData);

      return;
    }

    // Objects
    if (typeof curData === 'object') {
      this.set({
        ...curData,
        ...data,
      });

      return;
    }

    // Other data types
    this.set(data);
  }

  clear = () => {
    if (isServer) {
      return;
    }

    localStorage.removeItem(this.key);
  }
}

export default LocalStorageHelper;
