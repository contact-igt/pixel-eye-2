import Image from "next/image";
import HeroBanner from "@/common/HeroBanner";
import { SERVICE_RETINA_CONTENT } from "@/constant/serviceRetinaContent";
import styles from "./styles.module.css";

const RetinaBanner = () => {
    const { hero, explainer } = SERVICE_RETINA_CONTENT.banner;

    return (
        <div className={styles["retina-detail"]}>
            <HeroBanner
                image={hero.image.src}
                rightSlot={hero.nav.rightSlot}
                navTheme={hero.nav.navTheme}
                cardBg={hero.nav.cardBg}
                showOverlay={false}
                imagePosition="center center"
                className={styles["retina-hero"]}
                frameClassName={styles["retina-hero__frame"]}
                imageClassName={styles["retina-hero__image"]}
            />

            <section
                className={styles["retina-explainer"]}
                aria-labelledby="retina-explainer-title"
            >
                <div className={styles["retina-explainer__left"]}>
                    <h1
                        id="retina-explainer-title"
                        className={styles["retina-explainer__title"]}
                    >
                        {explainer.title}
                    </h1>

                    <div className={styles["retina-explainer__copy"]}>
                        {explainer.paragraphs.map((paragraph, index) => (
                            <p key={`retina-explainer-paragraph-${index}`}>{paragraph}</p>
                        ))}

                        {explainer.loader && (
                            <Image
                                src={explainer.loader.src}
                                alt={explainer.loader.alt}
                                width={1029}
                                height={21}
                                className={styles["retina-explainer__loader"]}
                                aria-hidden="true"
                            />
                        )}
                    </div>
                </div>

                <div className={styles["retina-explainer__visual"]}>
                    <Image
                        src={explainer.image.src}
                        alt={explainer.image.alt}
                        width={2484}
                        height={1398}
                        className={styles["retina-explainer__image"]}
                    />
                </div>
            </section>
        </div>
    );
};

export default RetinaBanner;