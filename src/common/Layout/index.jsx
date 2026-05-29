import { useRouter } from "next/router";
import BannerNav from "@/common/BannerNav";
import Footer from "@/common/Footer";
import styles from "./styles.module.css";

// These pages have nav integrated inside their hero banner — skip the layout Navbar
const PAGES_WITH_OWN_NAV = ["/", "/appointment", "/service"];

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
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
