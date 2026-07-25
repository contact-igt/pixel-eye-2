import Image from "next/image";
import Button from "@/common/Button";
import styles from "./styles.module.css";

export default function BlogEmergencyCta({ data }) {
  return (
    <section id={data.id} className={styles.cta}>
      <div className={styles.iconWrap} aria-hidden="true">
        <Image src="/assets/blog/bell.png" alt="" width={24} height={24} />
      </div>
      <div className={styles.content}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div className={styles.actions}>
          {data.primaryCta ? (
            <Button label={data.primaryCta.label} href={data.primaryCta.href} variant="light" />
          ) : null}
          {data.secondaryCta ? (
            <Button label={data.secondaryCta.label} href={data.secondaryCta.href} variant="dark" />
          ) : null}
        </div>
      </div>
    </section>
  );
}
