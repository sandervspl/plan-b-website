export enum LOCAL_STORAGE_KEY {
  COOKIE_CONSENT = 'has-consent-cookies',
  APPLICATIONS = 'applications',
  APPLICATIONS_OVERVIEW = 'applications-overview',
}

export type ApplicationsStorage = {
  applicationUuid: string;
  commentsCount: {
    public: number;
    private?: number;
  };
}

export type ApplicationsOverviewStorage = {
  applicationUuid: string;
  seen: boolean;
  newComments: boolean;
}
