import { useEffect, useRef, useState } from "react";

function ScrollAnimation({ children, className = "" }) {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-content ${className} ${visible ? "show" : ""}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimation;