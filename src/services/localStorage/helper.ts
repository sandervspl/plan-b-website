import { isServer } from 'services';
import { LOCAL_STORAGE_KEY } from './types';

class LocalStorageHelper<T> {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private key: LOCAL_STORAGE_KEY,
    private uniqueIdentifier?: string,
  ) {}

  get = (): T | null => {
    if (isServer) {
      return null;
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
  save = (data: T extends Array<any> ? T | T[0] : T) => {
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
          if (typeof val === 'object' && this.uniqueIdentifier) {
            if (val[this.uniqueIdentifier] === data[this.uniqueIdentifier]) {
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
