type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: LogoProps) {
  const ring = tone === "light" ? "#F4A03A" : "#604235";
  const seed = tone === "light" ? "#FFF5DD" : "#432C22";
  const grain = tone === "light" ? "#FFFDF7" : "#FFF5DD";
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="24" cy="24" r="22" fill={ring} />
      <path
        d="M14 30c0-6 4-10 10-10s10 4 10 10"
        fill="none"
        stroke={grain}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <ellipse cx="24" cy="22" rx="6" ry="9" fill={seed} />
      <path
        d="M24 14c-1.5 3-1.5 7 0 10"
        stroke={grain}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="18" cy="34" r="1.5" fill={grain} />
      <circle cx="30" cy="34" r="1.5" fill={grain} />
      <circle cx="24" cy="36" r="1.5" fill={grain} />
    </svg>
  );
}
