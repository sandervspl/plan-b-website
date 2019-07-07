import * as i from 'types';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'hooks';
import { fetchUser } from 'ducks/user';
import { getCmsUrl } from 'services';
import Navigation from './components/Navigation';
import { PageContainer, PageContent } from './styled';

const Page: React.FC<PageProps> = ({ children, withoutNav, meta, url }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const title = meta ? meta.title : 'Plan B';
  const description = meta ? meta.description : 'Plan B — Classic WoW Guild';

  useEffect(() => {
    if (user.loading && !user.isSignedIn) {
      dispatch(fetchUser());
    }
  }, []);

  return (
    <PageContainer>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="twitter:url" content={url} />
        {meta && meta.image && (
          <>
            <meta name="og:image" content={getCmsUrl(meta.image.url)} />
            <meta name="twitter:image" content={getCmsUrl(meta.image.url)} />
          </>
        )}
      </Head>
      <PageContent>
        {!withoutNav && <Navigation />}
        {children}
      </PageContent>
    </PageContainer>
  );
};

export type PageProps = {
  withoutNav?: boolean;
  meta?: i.PageMeta;
  url: string;
};

Page.defaultProps = {
  withoutNav: false,
};

export default Page;
