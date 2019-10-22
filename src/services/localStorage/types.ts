export enum LOCAL_STORAGE_KEY {
  COOKIE_CONSENT = 'has-consent-cookies',
  COMMENTS = 'comments',
}

export type CommentsStorage = {
  applicationUuid: string;
  commentsAmount: number;
}
