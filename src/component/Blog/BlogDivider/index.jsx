import React from "react";
import styles from "./styles.module.css";

export default function BlogDivider({ settings = {} }) {
  const variant = settings?.variant || "line";
  return <hr className={`${styles.divider} ${styles[variant] || styles.line}`} />;
}
