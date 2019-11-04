import { LOCAL_STORAGE_KEY, ApplicationsStorage, ApplicationsOverviewStorage } from './types';
import LocalStorageHelper from './helper';

class LocalStorage {
  public cookieConsent = new LocalStorageHelper<boolean>(LOCAL_STORAGE_KEY.COOKIE_CONSENT);
  public applications = new LocalStorageHelper<ApplicationsStorage[]>(
    LOCAL_STORAGE_KEY.APPLICATIONS,
    'applicationUuid'
  );
  public applicationsOverview = new LocalStorageHelper<ApplicationsOverviewStorage[]>(
    LOCAL_STORAGE_KEY.APPLICATIONS_OVERVIEW,
    'applicationUuid'
  );
}

const ls = new LocalStorage();

export const localStorageHelper = ls;
