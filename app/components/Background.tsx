"use client";

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Radial fade so grid fades out at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgb(10,10,10)_75%)]" />
      
      {/* Ambient accent glows */}
      <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-[#E8A33D]/[0.04] blur-[140px] rounded-full" />
      <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#E8A33D]/[0.03] blur-[140px] rounded-full" />
    </div>
  );
};

export default Background;