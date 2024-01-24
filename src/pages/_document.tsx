import Document, { Html, Head, Main, NextScript } from 'next/document';


import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* <Script src="../../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"/>
          <Script src="../../node_modules/tw-elements/dist/js/tw-elements.es.min.js"/> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
