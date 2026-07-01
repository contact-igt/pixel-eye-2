import Image from "next/image";
import HeroBanner from "@/common/HeroBanner";
import { SERVICE_GLAUCOMA_CONTENT } from "@/constant/serviceglaucomaContent";
import styles from "./styles.module.css";

const GlaucomaBanner = () => {
    const { hero, explainer } = SERVICE_GLAUCOMA_CONTENT.banner;

    return (
        <div className={styles["glaucoma-detail"]}>
            <HeroBanner
                image={hero.image.src}
                rightSlot={hero.nav.rightSlot}
                navTheme={hero.nav.navTheme}
                cardBg={hero.nav.cardBg}
                showOverlay={false}
                imagePosition="center center"
                className={styles["glaucoma-hero"]}
                frameClassName={styles["glaucoma-hero__frame"]}
                imageClassName={styles["glaucoma-hero__image"]}
            />

            <section
                className={styles["glaucoma-explainer"]}
                aria-labelledby="glaucoma-explainer-title"
            >
                <div className={styles["glaucoma-explainer__left"]}>
                    <h1
                        id="glaucoma-explainer-title"
                        className={styles["glaucoma-explainer__title"]}
                    >
                        {explainer.title}
                    </h1>

                    <div className={styles["glaucoma-explainer__copy"]}>
                        {explainer.paragraphs.map((paragraph, index) => (
                            <p key={`glaucoma-explainer-paragraph-${index}`}>{paragraph}</p>
                        ))}

                        {explainer.loader && (
                            <Image
                                src={explainer.loader.src}
                                alt={explainer.loader.alt}
                                width={1029}
                                height={21}
                                className={styles["glaucoma-explainer__loader"]}
                                aria-hidden="true"
                            />
                        )}
                    </div>
                </div>

                <div className={styles["glaucoma-explainer__visual"]}>
                    <Image
                        src={explainer.image.src}
                        alt={explainer.image.alt}
                        width={2484}
                        height={1398}
                        className={styles["glaucoma-explainer__image"]}
                    />
                </div>
            </section>
        </div>
    );
};

export default GlaucomaBanner;