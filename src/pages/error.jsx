import { useRouter } from "next/router";
import Button from "@/common/Button";
import HeroBanner from "@/common/HeroBanner";
import { HERO_BANNER_CONTENT } from "@/constant/heroBannerContent";

export default function ErrorPage() {
  const router = useRouter();
  const { msg } = router.query;
  const hero = HERO_BANNER_CONTENT.appointment;

  const message = msg
    ? String(msg)
    : "There was an error submitting your appointment. Please try again later.";

  return (
    <>
      <HeroBanner
        image={hero.image}
        mobileImage={hero.mobileImage}
        title={"Submission failed"}
        subtitle={
          "Something went wrong while sending your appointment request."
        }
        rightSlot={hero.rightSlot}
        navTheme={hero.navTheme}
        cardBg={hero.cardBg}
        height="short"
        showOverlay={hero.showOverlay}
        imagePosition={hero.imagePosition}
      />

      <section style={{ padding: "48px 16px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>Submission failed</h2>
        <p style={{ maxWidth: 720, margin: "0 auto 24px" }}>{message}</p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            padding: "0 24px",
            maxWidth: "720px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "0 0 auto" }}>
            <Button href="/appointment" label="Try again" />
          </div>
          <div style={{ flex: "0 0 auto" }}>
            <Button href="/" label="Return Home" variant="muted" />
          </div>
        </div>
      </section>
    </>
  );
}
