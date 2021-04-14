import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="KH Rakib - A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities." />
          <meta name="keywords" content="kh rakib, kh, rakib, web developer, software engineer, programmer, programmer rakib" />
          <meta name="author" content="KH Rakib" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700%7CPlayfair+Display:400,700" />            
          <link rel="stylesheet" href="/css/font-awesome.min.css" />    
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/style.css" />
          <link rel="stylesheet" href="/css/responsive-style.css" />
          <link rel="stylesheet" href="/css/colors/color-1.css" id="changeColorScheme" />
          <link rel="stylesheet" href="/css/custom.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
          <script src="/js/jquery-3.2.1.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/footer-reveal.min.js"></script>
          <script src="/js/retina.min.js"></script>
          <script src="/js/main.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument