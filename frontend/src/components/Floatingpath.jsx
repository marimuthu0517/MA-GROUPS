// Decorative animated line background for the Hero section.
// Recreates the "floating paths" look using plain CSS animations
// (stroke-dashoffset + opacity) instead of framer-motion, so no
// extra dependency is required.

function generatePaths(position) {
  return Array.from({ length: 24 }, (_, i) => {
    const d = `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`;

    return {
      id: i,
      d,
      width: 0.5 + i * 0.03,
      baseOpacity: 0.08 + i * 0.025,
      duration: 16 + (i % 6) * 3,
      delay: (i % 8) * -1.1,
    };
  });
}

function FloatingPaths({ position }) {
  const paths = generatePaths(position);

  return (
    <div className="floating-paths">
      <svg
        className="floating-paths-svg"
        viewBox="0 0 696 316"
        fill="none"
        aria-hidden="true"
      >
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            className="floating-path"
            style={{
              "--path-opacity": path.baseOpacity,
              animationDuration: `${path.duration}s`,
              animationDelay: `${path.delay}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default FloatingPaths;