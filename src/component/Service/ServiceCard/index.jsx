import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/common/Button";
import styles from "./styles.module.css";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.99,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: Math.min(index * 0.035, 0.16),
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  }),
};

const titleVariants = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.56, ease: [0.22, 1, 0.36, 1] },
  },
};

const detailsVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 22, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] },
  },
};

const ServiceCard = ({ section, index = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className={styles.section}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.24, margin: "0px 0px -60px 0px" }}
    >
      <motion.div
        className={styles.card}
        custom={index}
        variants={cardVariants}
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2
          id={`${section.id}-title`}
          className={styles.title}
          variants={titleVariants}
        >
          {section.title}
        </motion.h2>

        <motion.div className={styles.details} variants={detailsVariants}>
          <p>{section.description}</p>
          <motion.div
            className={styles.ctaWrap}
            variants={detailsVariants}
            whileHover={shouldReduceMotion ? undefined : { x: 3 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {section.ctaStyle === "outline" ? (
              <Button
                label="Explore More"
                href={section.href}
                variant="muted"
                className={styles.linkCta}
              />
            ) : (
              <Button
                label="Explore More"
                href={section.href}
                variant="muted"
              />
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.imageWrap}
          variants={imageVariants}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.018 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={section.image}
            alt={section.imageAlt}
            width={406}
            height={203}
            className={styles.image}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ServiceCard;
