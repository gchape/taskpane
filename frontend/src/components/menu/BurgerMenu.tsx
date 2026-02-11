interface Props {
    open: boolean;
    onToggle: () => void;
}

export default function BurgerMenu({open, onToggle}: Props) {
    return (
        <button onClick={onToggle}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="md:hidden flex flex-col justify-center p-2 border border-white/10 rounded-lg bg-transparent cursor-pointer transition-colors duration-150 hover:border-lime-400/30"
                style={{gap: 5}}>
            {[
                open ? "translateY(7px) rotate(45deg)" : "none",
                open ? "scaleX(0)" : "none",
                open ? "translateY(-7px) rotate(-45deg)" : "none",
            ].map((transform, i) => (
                <span
                    key={i}
                    className="block rounded-sm transition-all duration-200"
                    style={{
                        width: 18,
                        height: 2,
                        transform,
                        opacity: i === 1 && open ? 0 : 1,
                        background: open ? "#a3e635" : "rgba(244,244,245,.6)",
                    }}
                />
            ))}
        </button>
    );
}