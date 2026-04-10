interface LogoProps {
  dark?: boolean; // true = dark text (for light backgrounds), false = white text (for dark backgrounds)
  className?: string;
}

export default function Logo({ dark = true, className = "" }: LogoProps) {
  const textColor = dark ? "#1E2A1E" : "#ffffff";
  const subColor = dark ? "#6b7280" : "#d1d5db";

  return (
    <span className={`inline-flex items-baseline relative select-none ${className}`} style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif", fontWeight: 900 }}>
      {/* "Build" */}
      <span style={{ color: textColor, fontSize: "1.35rem", letterSpacing: "-0.02em" }}>Build</span>

      {/* "S" */}
      <span style={{ color: textColor, fontSize: "1.35rem", letterSpacing: "-0.02em" }}>S</span>

      {/* "imple" with hard hat floating above the "i" */}
      <span className="relative inline-flex items-end">
        {/* Hard hat icon above the "i" */}
        <span className="absolute" style={{ left: 0, bottom: "1.55rem", display: "flex", justifyContent: "center", width: "0.55rem" }}>
          <svg width="14" height="11" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Brim */}
            <rect x="1" y="13" width="22" height="3.5" rx="1.75" fill="#E8A838"/>
            {/* Dome */}
            <path d="M4.5 13 C4.5 5.5 8 1.5 12 1 C16 1.5 19.5 5.5 19.5 13 Z" fill="#E8A838"/>
          </svg>
        </span>
        {/* "i" with no dot (the hat IS the dot) */}
        <span style={{ color: textColor, fontSize: "1.35rem", letterSpacing: "-0.02em", fontStyle: "normal" }}>i</span>
        <span style={{ color: textColor, fontSize: "1.35rem", letterSpacing: "-0.02em" }}>mple</span>
      </span>

      {/* ".ai" */}
      <span style={{ color: subColor, fontSize: "0.75rem", fontWeight: 600, marginLeft: "1px", letterSpacing: "0", alignSelf: "flex-start", marginTop: "0.1rem", fontFamily: "Arial, sans-serif" }}>.ai</span>
    </span>
  );
}
