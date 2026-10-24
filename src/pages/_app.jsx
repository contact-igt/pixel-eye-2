import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import "@/style/globals.css";
import Layout from "@/common/Layout";
import FloatingCta from "@/common/FloatingCta";
import Seo from "@/common/Seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5N9PDV4R');`}
      </Script>
      <Seo />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <FloatingCta />
    </>
  );
}
