const Logo = ({ size = 40 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      {/* Circle - open at top right like a "C" */}
      <path
        d="M 145 55 A 70 70 0 1 0 165 130"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Letter S */}
      <path
        d="M 95 70 
           C 75 70, 65 80, 65 92
           C 65 104, 75 110, 90 112
           L 100 113
           C 110 114, 115 118, 115 125
           C 115 133, 107 138, 95 138
           L 70 138"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter A */}
      <path
        d="M 105 138 L 132 68 L 159 138 M 117 110 L 147 110"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;

// redesign logo, visitor counter & GitHub activity badges; clean up spacing