import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { AppComponentType, AppComponentProps } from 'next/app';
import { ServerStyleSheet } from 'styled-components';
import * as externalScripts from 'services/external';

class MyDocument extends Document<DocumentProps> {
  static getInitialProps({ renderPage }) {
    // Initialize styled-components stylesheet on server
    const sheet = new ServerStyleSheet();
    const page = renderPage((App: AppComponentType) => (props: AppComponentProps) => {
      return sheet.collectStyles(<App {...props} />);
    });
    const styleTags = sheet.getStyleElement();

    // Return styles so we can append them in the document Head
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
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

type DocumentProps = {
  styleTags: React.ReactElement;
}

export default MyDocument;
