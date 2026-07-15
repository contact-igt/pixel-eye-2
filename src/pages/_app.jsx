import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/style/globals.css";
import Layout from "@/common/Layout";
import FloatingCta from "@/common/FloatingCta";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <FloatingCta />
    </>
  );
}
