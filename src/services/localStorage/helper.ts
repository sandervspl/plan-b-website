import { isServer } from 'services';
import { LOCAL_STORAGE_KEY, ILocalStorageHelper } from './types';

class LocalStorageHelper<T> {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private key: LOCAL_STORAGE_KEY,
    private uniqueIdentifier?: string,
  ) {}

  get: ILocalStorageHelper<T>['get'] = (identifier) => {
    if (isServer) {
      return null;
    }

    if (identifier) {
      if (!this.uniqueIdentifier) {
        throw new Error('"get" requires a unique identifier to be passed on initialization when using an identifier.');
      }

      const item = localStorage.getItem(this.key);

      if (!item) {
        return null;
      }

      const data: T = JSON.parse(item);

      if (Array.isArray(data)) {
        return data.find((_data) => _data[this.uniqueIdentifier!] === identifier);
      }

      throw new Error('"get" identifiers can only be used with Arrays');
    }

    return localStorage.getItem(this.key)
      ? JSON.parse(localStorage.getItem(this.key)!)
      : null;
  }

  set = (data: T): T | null => {
    if (isServer) {
      return null;
    }

    const strData = JSON.stringify(data);
    localStorage.setItem(this.key, strData);

    return this.get();
  }

  /*
    Upsert
    Works like React setState.
    Only pass the properties that need to be updated.
  */
  save: ILocalStorageHelper<T>['save'] = (data) => {
    const curData = this.get();

    if (!curData) {
      this.set(data);

      return this.get();
    }

    // Arrays
    if (Array.isArray(curData)) {
      // @ts-ignore
      const newData: T = [...curData]
        .filter((val) => {
          if (typeof val === 'object' && this.uniqueIdentifier) {
            if (val[this.uniqueIdentifier] === data[this.uniqueIdentifier]) {
              return false;
            }
          }

          return true;
        })
        .concat(data);

      this.set(newData);

      return this.get();
    }

    // Objects
    if (typeof curData === 'object') {
      this.set({
        ...curData,
        ...data,
      });

      return this.get();
    }

    // Other data types
    this.set(data);

    return this.get();
  }

  clear = () => {
    if (isServer) {
      return;
    }

    localStorage.removeItem(this.key);
  }
}

export default LocalStorageHelper;
