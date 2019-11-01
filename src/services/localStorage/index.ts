import { LOCAL_STORAGE_KEY, ApplicationsStorage } from './types';
import LocalStorageHelper from './helper';

class LocalStorage {
  public cookieConsent = new LocalStorageHelper<boolean>(LOCAL_STORAGE_KEY.COOKIE_CONSENT);
  public applications = new LocalStorageHelper<ApplicationsStorage[]>(LOCAL_STORAGE_KEY.APPLICATIONS);
}

const ls = new LocalStorage();

export const localStorageHelper = ls;
