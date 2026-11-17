"use client";

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid pattern (inline, so it does not depend on globals.css) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,163,61,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(232,163,61,0.10) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft vignette: only darkens the far edges and corners */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(10,10,10)_100%)]" />

      {/* Ambient accent glows */}
      <div className="absolute top-[8%] left-[10%] w-[520px] h-[520px] bg-[#E8A33D]/[0.10] blur-[150px] rounded-full" />
      <div className="absolute bottom-[8%] right-[10%] w-[520px] h-[520px] bg-[#E8A33D]/[0.08] blur-[150px] rounded-full" />
    </div>
  );
};

export default Background; 