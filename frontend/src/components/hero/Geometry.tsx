import { motion } from "motion/react";
import type { Shape } from "../../types";

function Geometry({ shape }: { shape: Shape }) {
  const {
    id,
    type,
    style,
    animate,
    transition,
    stroke,
    fill,
    strokeWidth,
    strokeDasharray,
  } = shape;
  const w = style.width as number;
  const h = style.height as number;

  return (
    <motion.svg
      key={id}
      style={{ position: "absolute", pointerEvents: "none", ...style }}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      animate={animate}
      transition={transition}
    >
      {type === "rect" && (
        <rect
          x={strokeWidth}
          y={strokeWidth}
          width={w - strokeWidth * 2}
          height={h - strokeWidth * 2}
          stroke={stroke}
          fill={fill ?? "none"}
          strokeWidth={strokeWidth}
        />
      )}
      {type === "circle" && (
        <circle
          cx={w / 2}
          cy={h / 2}
          r={w / 2 - strokeWidth}
          stroke={stroke}
          fill={fill ?? "none"}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
        />
      )}
      {type === "plus" && (
        <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round">
          <line x1={w / 2} y1="0" x2={w / 2} y2={h} />
          <line x1="0" y1={h / 2} x2={w} y2={h / 2} />
        </g>
      )}
    </motion.svg>
  );
}

export default Geometry;
