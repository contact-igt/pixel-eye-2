import React from "react";
import styles from "./styles.module.css";

export default function BlogDivider({ settings = {} }) {
  const variant = settings?.style || settings?.variant || "solid";
  return <hr className={`${styles.divider} ${styles[variant] || styles.solid}`} />;
}
