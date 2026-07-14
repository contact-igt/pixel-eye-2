import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./styles.module.css";

/**
 * Common pill CTA button used across all Home sections.
 *
 * Props:
 *   label     - button text
 *   href      - link destination (default "#")
 *   variant   - "light" | "muted" | "dark"  (default "light")
 *   onClick   - optional click handler (renders <button> instead of <Link>)
 *   className - extra class on the root element
 */
const Button = ({
  label,
  href = "#",
  variant = "light",
  onClick,
  as,
  type = "button",
  className = "",
  disabled = false,
  ariaLabel,
  target,
  rel,
}) => {
  const variantClass = styles[variant] ?? styles.light;
  const rootClass = `${styles.btn} ${variantClass} ${className}`.trim();
  const linkRel =
    rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

  const inner = (
    <>
      <span className={`${styles.label} common-button__label`}>{label}</span>
      <span className={`${styles.icon} common-button__icon`}>
        <ArrowUpRight />
      </span>
    </>
  );

  if (as === "button" || onClick) {
    return (
      <button
        type={type}
        className={rootClass}
        onClick={onClick}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={ariaLabel}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={rootClass}
      aria-label={ariaLabel}
      target={target}
      rel={linkRel}
    >
      {inner}
    </Link>
  );
};

export default Button;

