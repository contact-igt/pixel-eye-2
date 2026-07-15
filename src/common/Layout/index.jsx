import { useRouter } from "next/router";
import BannerNav from "@/common/BannerNav";
import Footer from "@/common/Footer";
import FloatingCta from "@/common/FloatingCta";
import styles from "./styles.module.css";

// These pages have nav integrated inside their hero banner - skip the layout Navbar
const PAGES_WITH_OWN_NAV = [
  "/",
  "/about",
  "/doctors",
  "/appointment",
  "/service",
  "/service/cataract",
  "/service/squint",
  "/service/dryeye",
  "/service/pediatric",
  "/service/keratoconus",
  "/service/lasik",
  "/service/glaucoma",
  "/service/retina",
  "/terms-and-conditions",
  "/privacy-policy",
  "/thank-you",
  "/error",
];

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const showNavbar = !PAGES_WITH_OWN_NAV.includes(pathname);

  return (
    <div className={styles.layout}>
      {showNavbar && (
        <div className={styles.navHost}>
          <BannerNav rightSlot="book" navTheme="dark" cardBg="white" />
        </div>
      )}
      <FloatingCta />
      <main className={styles.main}>{children}</main>
      <div className={styles.footerHost}>
        <Footer />
      </div>
    </div>
  );
}
