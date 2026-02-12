import RightPanelImage from "../../assets/dIMJWLx1YbE.webp";

const RightPanel = () => (
  <div className="relative flex-1 overflow-hidden">
    <img
      src={RightPanelImage}
      alt="Office"
      loading="lazy"
      className="w-full h-full object-cover brightness-75 saturate-50"
    />

    <div className="absolute inset-0 [linear-gradient(135deg, rgba(9,9,11,0.5) 0%, transparent 60%)]" />

    <div className="absolute bottom-12 left-12 right-12 z-10 hidden lg:inline-block">
      <div
        className="w-6 h-0.5 rounded-full bg-lime-400 mb-4"
        style={{ boxShadow: "0 0 8px rgba(163,230,53,0.5)" }}
      />
      <p className="text-[15px] font-semibold text-white/75 leading-relaxed tracking-tight">
        "The best tools disappear into the work.
        <br />
        This is one of those tools."
      </p>
      <cite className="block mt-3 text-[11px] text-white/30 uppercase tracking-widest not-italic">
        — Sarah K., Lead Engineer
      </cite>
    </div>
  </div>
);

export default RightPanel;
