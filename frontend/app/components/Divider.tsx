const Divider = () => {
  return (
    // py-12 mathi py-6 karyu jethi upar-niche ni jagya adhi thai jashe
    <div className="px-6 md:px-24 max-w-[1400px] mx-auto py-7 relative z-10">
      {/* Container wrapper with relative positioning */}
      <div className="relative w-full h-[1px]">
        
        {/* Main subtle fading line (base layer) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Indigo highlight core line (middle layer) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/30 via-50% to-transparent" />
        
        {/* Smooth ambient glow underneath the divider (bottom blur layer) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-[4px] bg-indigo-500/20 blur-sm rounded-full pointer-events-none" />
        
      </div>
    </div>
  );
};

export default Divider;