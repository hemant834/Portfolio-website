import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "C Programming for Beginners",
    org: "Mind Luster",
    date: "Jun 2023",
    image: "/certificates/responsive.jpg",
  },
  {
    id: 2,
    title: "Employability Skills Under LifeSkills ",
    org: "Rubicon",
    date: "Jan 2024",
    image: "/certificates/ai.jpg",
  },
  {
    id: 3,
    title: "Full Stack Development(Marn)",
    org: "Grras",
    date: "June 2025",
    image: "/certificates/aws.jpg",
  },
];

const Certificates: React.FC = () => {
  const [active, setActive] = useState(0);

  // 🔁 AUTO MOVE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="certificate"
      className="py-28 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
          Certificates
        </h2>
        <div className="w-1 h-8 bg-emerald-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Carousel */}
      <div className="relative flex justify-center items-center h-[280px]">
        {certificates.map((cert, index) => {
          const offset = index - active;

          return (
            <motion.div
              key={cert.id}
              onClick={() => setActive(index)}
              animate={{
                x: offset * 320,
                scale: offset === 0 ? 1.15 : 0.9,
                opacity: Math.abs(offset) > 1 ? 0 : 1,
                filter: offset === 0 ? "blur(0px)" : "blur(2px)",
                zIndex: offset === 0 ? 10 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute cursor-pointer"
            >
              {/* CARD */}
              <div
                className={`w-[300px] md:w-[360px] h-[230px] rounded-2xl border-2 
                ${
                  offset === 0
                    ? "border-emerald-500 shadow-2xl"
                    : "border-zinc-200 dark:border-zinc-800"
                }
                bg-white dark:bg-zinc-900 overflow-hidden`}
              >
                {/* IMAGE */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-[130px] object-cover"
                />

                {/* TEXT */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-1">
                    {cert.org}
                  </p>
                  <span className="block mt-2 text-xs text-emerald-500 font-semibold">
                    {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="text-center mt-16 text-zinc-400 text-sm">
        Auto-moving • Click any certificate to focus
      </p>
    </section>
  );
};

export default Certificates;
