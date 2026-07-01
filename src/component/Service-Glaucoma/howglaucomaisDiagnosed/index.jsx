import Image from "next/image";
import { SERVICE_GLAUCOMA_CONTENT } from "@/constant/serviceglaucomaContent";
import styles from "./styles.module.css";

const PlayIcon = () => (
    <span className={styles["squint-diagnosis__play"]} aria-hidden="true" />
);

const HowGlaucomaIsDiagnosed = () => {
    const { diagnosis } = SERVICE_GLAUCOMA_CONTENT;

    return (
        <section
            className={styles["squint-diagnosis"]}
            aria-labelledby="squint-diagnosis-title"
        >
            <div className={styles["squint-diagnosis__panel"]}>
                <div className={styles["squint-diagnosis__copy"]}>
                    <h2 id="squint-diagnosis-title">{diagnosis.title}</h2>
                    {diagnosis.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>

                <div className={styles["squint-diagnosis__media-list"]}>
                    {diagnosis.media.map((item) => (
                        <figure className={styles["squint-diagnosis__media-card"]} key={item.title}>
                            <div className={styles["squint-diagnosis__media-frame"]}>
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={1779}
                                    height={792}
                                    className={styles["squint-diagnosis__media-image"]}
                                />
                                {/* <PlayIcon /> */}
                            </div>
                            <figcaption className={styles["squint-diagnosis__media-label"]}>
                                {item.title}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>

            <div className={styles["squint-diagnosis__treatments"]}>
                {diagnosis.treatments.map((item) => (
                    <article
                        className={`${styles["squint-diagnosis__treatment-card"]} ${item.highlighted
                            ? styles["squint-diagnosis__treatment-card--highlight"]
                            : ""
                            }`}
                        key={item.number}
                    >
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={item.highlighted ? 3816 : 1755}
                            height={item.highlighted ? 1569 : 1875}
                            className={styles["squint-diagnosis__treatment-image"]}
                        />
                        <div className={styles["squint-diagnosis__treatment-content"]}>
                            <h3>
                                <span>{item.number}</span> {item.title}
                            </h3>
                            <p>{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default HowGlaucomaIsDiagnosed;
