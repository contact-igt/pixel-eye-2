import { useEffect, useRef, useState } from "react";

const RevealOnView = ({ children, className = "", threshold = 0.18, rootMargin = "0px 0px -8% 0px" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={className}
      data-visible={isVisible ? "true" : "false"}
    >
      {children}
    </div>
  );
};

export default RevealOnView;
