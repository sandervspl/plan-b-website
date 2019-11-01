export enum LOCAL_STORAGE_KEY {
  COOKIE_CONSENT = 'has-consent-cookies',
  APPLICATIONS = 'applications',
}

export type ApplicationsStorage = {
  applicationUuid: string;
  commentsCount: {
    public: number;
    private?: number;
  };
}
