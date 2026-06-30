import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { HOME_CONTENT } from "@/constant/homeContent";
import Button from "@/common/Button";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

const Protect = () => {
  const { protect } = HOME_CONTENT;
  const { title, beforeImage, afterImage, handleImage, cta } = protect;
  const minPosition = 10;
  const maxPosition = 83;
  const [sliderPosition, setSliderPosition] = useState(68);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback(
    (clientX) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      const clamped = Math.max(minPosition, Math.min(percentage, maxPosition));
      setSliderPosition(clamped);
    },
    [isDragging, maxPosition, minPosition],
  );

  const onMouseMove = useCallback(
    (e) => {
      handleMove(e.clientX);
    },
    [handleMove],
  );

  const onTouchMove = useCallback(
    (e) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove],
  );

  const onDragEnd = useCallback(() => {
    setIsDragging(false);
    const midPoint = (minPosition + maxPosition) / 2;
    setSliderPosition((prev) => (prev >= midPoint ? maxPosition : minPosition));
  }, [maxPosition, minPosition]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onDragEnd);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onDragEnd);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onDragEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onDragEnd);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onDragEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onDragEnd);
    };
  }, [isDragging, onMouseMove, onTouchMove, onDragEnd]);

  return (
    <section className={styles.protectSection}>
      <div
        className={styles.bannerFrame}
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Background / After Image */}
        <div className={styles.imageLayer}>
          <Image
            src={afterImage.src}
            alt={afterImage.alt}
            fill
            sizes="100vw"
            className={styles.slideImage}
            priority
            draggable={false}
          />
        </div>

        {/* Foreground / Before Image */}
        <div
          className={styles.imageLayer}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage.src}
            alt={beforeImage.alt}
            fill
            sizes="100vw"
            className={styles.slideImage}
            priority
            draggable={false}
          />
        </div>

        <div className={styles.overlay} />

        <RevealOnView className={styles.heroContent}>
          <h2 className={styles.heroTitle}>{title}</h2>
          <div className={styles.ctaWrap}>
            <Button
              label={cta.label}
              href={cta.href}
              variant="light"
              className={styles.heroCta}
            />
          </div>
        </RevealOnView>

        {/* Draggable Handle */}
        <div
          className={styles.sliderHandle}
          style={{ "--slider-position": `${sliderPosition}%` }}
        >
          <Image
            src={handleImage.src}
            alt={handleImage.alt}
            fill
            sizes="56px"
            className={styles.sliderHandleImage}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Protect;
