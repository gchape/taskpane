const LeftPanelBackground = () => (
  <>
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />

    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, transparent, transparent 119px, rgba(255,255,255,0.03) 119px, rgba(255,255,255,0.03) 120px)",
        maskImage:
          "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%)",
        WebkitMaskImage:
          "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%)",
      }}
    />

    <div
      className="absolute top-0 left-0 right-0 h-64 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(163,230,53,0.07) 0%, transparent 70%)",
      }}
    />

    <div
      className="absolute top-0 left-0 right-0 h-px z-10"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(163,230,53,0.5) 40%, rgba(163,230,53,0.5) 60%, transparent)",
      }}
    />
  </>
);

export default LeftPanelBackground;
