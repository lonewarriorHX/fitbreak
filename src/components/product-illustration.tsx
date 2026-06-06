type Props = {
  variant: "protein-oatmeal" | "fit-cookie";
  className?: string;
};

export function ProductIllustration({ variant, className }: Props) {
  if (variant === "protein-oatmeal") {
    return (
      <svg
        viewBox="0 0 300 360"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="po-pack" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#FFFDF7" />
            <stop offset="1" stopColor="#FFE9C1" />
          </linearGradient>
          <linearGradient id="po-lid" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#8E6A55" />
            <stop offset="1" stopColor="#604235" />
          </linearGradient>
        </defs>
        <ellipse cx="150" cy="330" rx="110" ry="14" fill="#000" opacity="0.08" />
        <rect x="60" y="70" width="180" height="240" rx="20" fill="url(#po-pack)" stroke="#E7DDC9" strokeWidth="2" />
        <rect x="60" y="70" width="180" height="50" rx="20" fill="url(#po-lid)" />
        <rect x="76" y="62" width="148" height="22" rx="6" fill="#432C22" />
        <circle cx="150" cy="165" r="42" fill="#FFF5DD" />
        <path d="M120 165c0-16 13-30 30-30s30 14 30 30" stroke="#604235" strokeWidth="4" fill="none" strokeLinecap="round" />
        <ellipse cx="150" cy="160" rx="14" ry="22" fill="#604235" />
        <text x="150" y="240" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="800" fontSize="22" fill="#604235">
          PROTEIN
        </text>
        <text x="150" y="265" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="800" fontSize="22" fill="#604235">
          OATMEAL
        </text>
        <text x="150" y="290" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fontSize="11" fill="#8B7569" letterSpacing="2">
          15G PROTEIN · 6G FIBER
        </text>
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 300 360"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="fc-pack" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FFFDF7" />
          <stop offset="1" stopColor="#FFE9C1" />
        </linearGradient>
        <linearGradient id="fc-lid" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#F4A03A" />
          <stop offset="1" stopColor="#D97E1E" />
        </linearGradient>
      </defs>
      <ellipse cx="150" cy="330" rx="110" ry="14" fill="#000" opacity="0.08" />
      <rect x="60" y="70" width="180" height="240" rx="20" fill="url(#fc-pack)" stroke="#E7DDC9" strokeWidth="2" />
      <rect x="60" y="70" width="180" height="50" rx="20" fill="url(#fc-lid)" />
      <rect x="76" y="62" width="148" height="22" rx="6" fill="#D97E1E" />
      <circle cx="150" cy="175" r="46" fill="#E5B377" />
      <circle cx="135" cy="168" r="5" fill="#5C3A1E" />
      <circle cx="160" cy="180" r="4" fill="#5C3A1E" />
      <circle cx="148" cy="195" r="5" fill="#5C3A1E" />
      <circle cx="170" cy="160" r="3.5" fill="#5C3A1E" />
      <text x="150" y="250" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="800" fontSize="26" fill="#D97E1E">
        FIT COOKIE
      </text>
      <text x="150" y="278" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fontSize="11" fill="#8B7569" letterSpacing="2">
        OATS · NO FLOUR · NO SUGAR
      </text>
    </svg>
  );
}
