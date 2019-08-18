import * as i from 'types';
import React from 'react';
import { getUrl } from 'services';
import Page from 'modules/Page';

const Dkp: i.NextPageComponent = ({ url }) => {
  return (
    <Page url={url}>
      DKP
    </Page>
  );
};

Dkp.getInitialProps = async ({ req }) => {
  return {
    url: getUrl(req),
  };
};

export default Dkp;
