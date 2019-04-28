/*
  Use this to resolve static file URLs
*/

export const getStaticUrl = (pathName: string) => pathName.includes('_next')
  ? pathName
  : `/_next/${pathName}`;
