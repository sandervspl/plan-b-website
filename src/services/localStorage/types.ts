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


export type ILocalStorageHelper<T> = {
  get<IdentifierType>(identifier?: IdentifierType): (IdentifierType extends string ? T extends Array<any> ? T[0] : T : T) | null;
  save(data: T extends Array<any> ? T | T[0] : T): T | null;
}
