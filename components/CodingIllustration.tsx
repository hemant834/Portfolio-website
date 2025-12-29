import { motion } from "framer-motion";

export default function CodingIllustration() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">

      {/* Green base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-28 bg-emerald-400 rounded-full blur-sm" />

      {/* Screens */}
      <div className="relative flex justify-between items-end gap-4">

        {/* Left Screen */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-40 h-44 bg-zinc-900 rounded-xl shadow-xl p-3 text-[10px] text-zinc-400 font-mono"
        >
          <p>{`<div>`}</p>
          <p className="ml-2">const app = ()</p>
          <p className="ml-4">return UI</p>
          <p>{`</div>`}</p>
        </motion.div>

        {/* Mobile */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-28 h-56 bg-white rounded-2xl shadow-2xl border relative z-10"
        >
          <div className="h-2 w-16 bg-zinc-300 rounded-full mx-auto mt-2" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-emerald-400 rounded" />
            <div className="h-4 bg-emerald-200 rounded" />
            <div className="h-4 bg-emerald-300 rounded" />
          </div>
        </motion.div>

        {/* Right Screen */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity }}
          className="w-40 h-44 bg-zinc-900 rounded-xl shadow-xl p-3 text-[10px] text-zinc-400 font-mono"
        >
          <p>function()</p>
          <p className="ml-2">build()</p>
          <p className="ml-4">deploy()</p>
        </motion.div>
      </div>

      {/* Skill bubbles */}
      <div className="absolute -top-8 inset-x-0 flex justify-center gap-4">
        {["HTML", "JS", "C++", "PHP"].map((skill, i) => (
          <motion.div
            key={skill}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
            className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
