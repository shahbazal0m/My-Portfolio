import { Eye } from "lucide-react";

const Visitorcounter = () => {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-[#111111] border border-white/5 rounded-xl shadow-2xl">
      <Eye size={16} className="text-zinc-400" />
      <span className="text-sm text-zinc-300">
        You are the{" "}
        <img 
          src="https://hits.sefy.io/shahbazal0m.svg" 
          alt="Visitor count" 
          className="inline h-4 mx-1.5 opacity-90"
        />
        <span className="text-white font-medium">rd visitor</span>
      </span>
    </div>
  );
};

export default Visitorcounter;


// Visitorcounter