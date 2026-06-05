import Button from "@/common/Button";
import HeroBanner from "@/common/HeroBanner";
import { HERO_BANNER_CONTENT } from "@/constant/heroBannerContent";

export default function ThankYouPage() {
  const hero = HERO_BANNER_CONTENT.appointment;

  return (
    <>
      <HeroBanner
        image={hero.image}
        title={"Thank you — we received your request"}
        subtitle={
          "Our team will review your details and contact you to confirm the appointment."
        }
        rightSlot={hero.rightSlot}
        navTheme={hero.navTheme}
        cardBg={hero.cardBg}
        height="short"
        showOverlay={hero.showOverlay}
        imagePosition={hero.imagePosition}
      />

      <section style={{ padding: "48px 16px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>
          Thanks — appointment request received
        </h2>
        <p style={{ maxWidth: 720, margin: "0 auto 24px" }}>
          We have received your appointment request and will reach out to
          confirm the date and time. If you need immediate assistance, please
          contact the hospital.
        </p>

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
            <Button href="/" label="Return to Home" />
          </div>
          <div style={{ flex: "0 0 auto" }}>
            <Button href="/appointment" label="Book Another" variant="muted" />
          </div>
        </div>
      </section>
    </>
  );
}
