"use client";

import React, { useRef, useEffect, useState } from "react";

/**
 * TextHoverEffect — wordmark gigante che si "accende" col cursore.
 * Reimplementato senza `motion` (nel design originale la duration è 0, quindi
 * la maschera segue il cursore in modo istantaneo): usiamo lo stato React per
 * la posizione della maschera e una keyframe CSS (.fa-draw) per il disegno iniziale.
 * Colori adattati al brand Florin/AEDIX: blu → arancione → oro.
 */
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export const TextHoverEffect = ({
  text,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient id="florinTextGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#3576c9" />
              <stop offset="35%" stopColor="#f97316" />
              <stop offset="70%" stopColor="#d9b04a" />
              <stop offset="100%" stopColor="#3576c9" />
            </>
          )}
        </linearGradient>

        <radialGradient
          id="florinRevealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id="florinTextMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#florinRevealMask)" />
        </mask>
      </defs>

      {/* Contorno statico, appena visibile all'hover */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-white/15 font-display text-7xl font-bold"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>

      {/* Contorno "disegnato" all'ingresso (CSS keyframe) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fa-draw fill-transparent stroke-[#5f97dd] font-display text-7xl font-bold"
      >
        {text}
      </text>

      {/* Riempimento gradiente rivelato dalla maschera che segue il cursore */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#florinTextGradient)"
        strokeWidth="0.3"
        mask="url(#florinTextMask)"
        className="fill-transparent font-display text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 8%, rgba(13,31,60,0) 42%, rgba(53,118,201,0.28) 100%)",
      }}
    />
  );
};
