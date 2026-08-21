const Divider = () => {
  return (
    // Reduced padding to decrease spacing between sections
    <div className="px-6 md:px-24 max-w-[1400px] mx-auto py-7 relative z-10">
      <div className="relative w-full h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8A33D]/25 via-50% to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-[4px] bg-[#E8A33D]/15 blur-sm rounded-full pointer-events-none" />
      </div>
    </div>
  );
};

export default Divider;