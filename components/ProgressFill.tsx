const ProgressFill = () => {
  return (
    <svg
      width="100"
      height="90"
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="sketchHatch"
          width="10"
          height="10"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <rect width="10" height="10" fill="transparent" />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="#ffffff"
            stroke-width="1"
          />
        </pattern>
      </defs>

      <rect
        x="2"
        y="2"
        width="96"
        height="20"
        fill="url(#sketchHatch)"
        stroke="#ffffff"
        stroke-width="1"
      />
    </svg>
  );
};

export default ProgressFill;
