import { useEffect, useRef, useState } from "react";

function ScrollAnimation({ children, className = "" }) {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }

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
      className={`${className} ${visible ? "show" : ""}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimation;