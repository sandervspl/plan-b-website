import * as i from 'types';
import React from 'react';
import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import * as externalScripts from 'services/external';

class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { styles } = this.props;

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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
