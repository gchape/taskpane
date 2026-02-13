"use client";

type BurgerMenuProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function BurgerMenu({ isOpen, onClick }: BurgerMenuProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="md:hidden flex flex-col justify-center p-2 border border-white/10 rounded-lg bg-transparent cursor-pointer transition-colors duration-150 hover:border-lime-400/30"
      style={{ gap: 5 }}
    >
      {[
        isOpen ? "translateY(7px) rotate(45deg)" : "none",
        isOpen ? "scaleX(0)" : "none",
        isOpen ? "translateY(-7px) rotate(-45deg)" : "none",
      ].map((transform, i) => (
        <span
          key={i}
          className="block rounded-sm transition-all duration-200"
          style={{
            width: 18,
            height: 2,
            transform,
            opacity: i === 1 && isOpen ? 0 : 1,
            background: isOpen ? "#a3e635" : "rgba(244,244,245,.6)",
          }}
        />
      ))}
    </button>
  );
}
