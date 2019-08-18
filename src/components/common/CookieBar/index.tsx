import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { localStorageHelper } from 'services';
import * as externalScripts from 'services/external';
import { Icon } from 'common/Icon';
import { CookieBarContainer, ConsentButton } from './styled';

export const CookieBar: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasConsent = localStorageHelper.cookieConsent.get();

    if (hasConsent == null) {
      setShow(true);
    }
  }, []);

  const handleClick = (consent: boolean) => () => {
    setShow(false);

    localStorageHelper.cookieConsent.set(consent);
  };

  if (!show) {
    // Consented. Load scripts.
    if (__PROD__ && localStorageHelper.cookieConsent.get()) {
      return (
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136522405-1" />
          {Object.values(externalScripts).map((script, i) => (
            <script
              key={i}
              type="text/javascript"
              dangerouslySetInnerHTML={{ __html: script }}
            />
          ))}
        </Head>
      );
    }

    // Not consented. Return nothing.
    return null;
  }

  return (
    <CookieBarContainer>
      <span>We use cookies to improve your experience.</span>
      <div>
        <ConsentButton onClick={handleClick(true)}>I understand</ConsentButton>
        <Icon name="times" role="button" onClick={handleClick(false)} />
      </div>
    </CookieBarContainer>
  );
};
