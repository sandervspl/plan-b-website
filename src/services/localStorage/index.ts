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

  set = (data: string | T) => {
    if (isServer) {
      return;
    }

    localStorage.setItem(this.key, JSON.stringify(data));
  }

  /*
    Works like React setState.
    Only pass the properties that need to be updated.
  */
  update = (data: T) => {
    const curData = this.get();

    if (!curData) {
      return;
    }

    if (typeof curData === 'object' && typeof data === 'object') {
      this.set(JSON.stringify({
        ...curData,
        ...data,
      }));
    } else {
      this.set(data);
    }
  }

  clear = () => {
    if (isServer) {
      return;
    }

    localStorage.removeItem(this.key);
  }
}

class LocalStorage {
  public cookieConsent = new LocalStorageHelper<boolean>(LOCAL_STORAGE_KEY.COOKIE_CONSENT);
}

const ls = new LocalStorage();

export const localStorageHelper = ls;