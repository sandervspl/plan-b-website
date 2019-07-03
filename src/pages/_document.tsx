import * as i from 'types';
import React from 'react';
import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import * as externalScripts from 'services/external';
import { getCmsUrl } from 'services';

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      const { req, store } = ctx as unknown as i.NextAppContext;

      const url = req
        ? `${req.protocol}://${req.get('host')}${req.originalUrl}`
        : window
          ? window.location.href
          : '';

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        meta: store.getState().page.meta,
        url,
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { styles, meta, url } = this.props;

    const title = meta ? meta.title : 'Plan B';
    const description = meta ? meta.description : 'Plan B — Classic WoW Guild';

    return (
      <html lang="en">
        <Head>
          {styles}
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136522405-1" />
          {Object.values(externalScripts).map((script, i) => (
            <script
              key={i}
              type="text/javascript"
              dangerouslySetInnerHTML={{ __html: script }}
            />
          ))}

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
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

type Props = {
  meta?: i.PageMeta;
  url: string;
}

export default MyDocument;
