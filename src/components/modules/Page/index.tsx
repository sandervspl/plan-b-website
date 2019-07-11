import * as i from 'types';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Object } from 'ts-toolbelt';
import { useDispatch, useSelector } from 'hooks';
import { fetchUser } from 'ducks/user';
import { getCmsUrl } from 'services';
import { theme } from 'styles';
import AppleTouchIcon from 'favicon/apple-touch-icon.png';
import Favicon32 from 'favicon/favicon-32x32.png';
import Favicon16 from 'favicon/favicon-16x16.png';
import SafariPinnedTab from 'favicon/safari-pinned-tab.svg';
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

        <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
        <link rel="mask-icon" href={SafariPinnedTab} color={theme.color.primary} />
        <meta name="msapplication-TileColor" content={theme.color.primary} />
        <meta name="theme-color" content={theme.color.background} />
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
  meta?: Object.Optional<i.PageMeta, 'id' | 'created_at' | 'updated_at'>;
  url: string;
};

Page.defaultProps = {
  withoutNav: false,
};

export default Page;
