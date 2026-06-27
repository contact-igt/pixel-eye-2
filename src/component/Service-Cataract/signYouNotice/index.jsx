import { useState } from "react";
import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const SignsYouNotice = ({
  signsContent = SERVICE_CATARACT_CONTENT.signs,
  sectionId = "cataract-signs",
}) => {
  const signs = signsContent;
  const [activeIndex, setActiveIndex] = useState(
    Math.max(
      0,
      signs.items.findIndex((item) => item.active),
    ),
  );

  const updateActiveSign = (event) => {
    const list = event.currentTarget;
    const maxScroll = list.scrollHeight - list.clientHeight;

    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }

    const progress = list.scrollTop / maxScroll;
    const nextIndex = Math.round(progress * (signs.items.length - 1));
    setActiveIndex(Math.min(signs.items.length - 1, Math.max(0, nextIndex)));
  };

  const handleWheel = (event) => {
    event.preventDefault();
    event.currentTarget.scrollBy({
      top: event.deltaY * 0.45,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={styles["cataract-signs"]}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className={styles["cataract-signs__header"]}>
        <h2 id={`${sectionId}-title`}>{signs.title}</h2>
        <p>{signs.description}</p>
      </div>

      <div className={styles["cataract-signs__body"]}>
        <img
          className={styles["cataract-signs__image"]}
          src={signs.image.src}
          alt={signs.image.alt}
        />

        <div className={styles["cataract-signs__listCol"]}>
          {signs.listIntro ? (
            <p className={styles["cataract-signs__listIntro"]}>
              {signs.listIntro}
            </p>
          ) : null}

          <div
            className={styles["cataract-signs__list"]}
            aria-label={signs.ariaLabel || "Signs list"}
            onScroll={updateActiveSign}
            onWheel={handleWheel}
            tabIndex={0}
          >
            {signs.items.map((sign, index) => (
              <article
                className={`${styles["cataract-signs__item"]} ${index === activeIndex ? styles["is-active"] : ""}`.trim()}
                key={sign.number}
              >
                <span className={styles["cataract-signs__number"]}>
                  {sign.number}
                </span>
                <span
                  className={styles["cataract-signs__divider"]}
                  aria-hidden="true"
                />
                <p>{sign.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignsYouNotice;
