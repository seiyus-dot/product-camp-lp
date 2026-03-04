type DivColor = "dark" | "darker" | "white" | "surface";
type DivShape = "wave" | "arc" | "diagonal" | "double-wave" | "fade";

const colorMap: Record<DivColor, string> = {
  dark: "#0f172a", // surface-dark
  darker: "#020617", // surface-darker
  white: "#ffffff",
  surface: "#f8fafc", // surface-soft
};

interface Props {
  from: DivColor;
  to: DivColor;
  shape?: DivShape;
  flipH?: boolean;
}

export default function SectionDivider({
  from,
  to,
  shape = "wave",
  flipH = false,
}: Props) {
  const fromColor = colorMap[from];
  const toColor = colorMap[to];

  if (shape === "fade") {
    return (
      <div
        className="h-12 sm:h-16"
        style={{
          background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
        }}
      />
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden leading-none"
      style={{ backgroundColor: toColor }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-14 sm:h-20"
        style={{ transform: flipH ? "scaleX(-1)" : undefined }}
      >
        {shape === "wave" && (
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
            fill={fromColor}
          />
        )}
        {shape === "arc" && (
          <path d="M0,0 L1440,0 Q720,160 0,0 Z" fill={fromColor} />
        )}
        {shape === "diagonal" && (
          <path d="M0,0 L1440,0 L1440,15 L0,80 Z" fill={fromColor} />
        )}
        {shape === "double-wave" && (
          <>
            <path
              d="M0,50 C360,10 1080,80 1440,30 L1440,0 L0,0 Z"
              fill={fromColor}
              opacity="0.4"
            />
            <path
              d="M0,60 C300,20 900,80 1440,42 L1440,0 L0,0 Z"
              fill={fromColor}
            />
          </>
        )}
      </svg>
    </div>
  );
}
