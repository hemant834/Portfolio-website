import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-zinc-950 transition-colors"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-xs font-bold tracking-widest text-emerald-500 mb-2">
            ABOUT ME & MY EDUCATION
          </h1>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">
            Who am I?
          </h2>
          <div className="w-1 h-10 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT : IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="rounded-[40px] border-2 border-emerald-500 p-2">
              <img
                src="/about.jpg"
                alt="About Me"
                className="rounded-[32px] w-[340px] md:w-[380px] object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT : TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-emerald-500 font-medium">About me</p>

            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Hemant Kumar
            </h3>

            {/* ABOUT TEXT WITH READ MORE */}
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              I’m Hemant Kumar, a passionate Web Developer with a strong interest
              in building modern, responsive, and user-friendly web applications.
              I enjoy turning complex problems into simple, elegant solutions
              using clean and efficient code.

              {showMore && (
                <>
                  {' '}
                  My focus is on creating websites and applications that not only
                  look great but also perform smoothly across all devices. I have
                  hands-on experience with HTML, CSS, JavaScript, and modern
                  frameworks, and I continuously improve my skills by building
                  real-world projects. I believe in writing maintainable code,
                  following best practices, and staying updated with the latest
                  web technologies to deliver meaningful digital experiences.
                </>
              )}

              <button
                onClick={() => setShowMore(!showMore)}
                className="ml-2 text-emerald-500 font-medium hover:underline"
              >
                {showMore ? 'Read less' : 'Read more'}
              </button>
            </p>

            {/* Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <Info label="Name" value="Hemant Kumar" />
              <Info label="Email" value="hemantkumar809499@gmail.com" />
              <Info label="Address" value="Sirohi, Rajasthan" />
              <Info label="Phone" value="+91 8094991751" />
            </div>

            {/* Education */}
            <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <p className="text-sm text-zinc-400">Education</p>
              <p className="font-semibold text-zinc-900 dark:text-white">
                Chartered Institute of Technology, Abu Road (Sirohi)
              </p>
              <p className="text-sm text-zinc-500">
                Batch: 2022 – Present
              </p>
            </div>

            {/* Button */}
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4
                         bg-emerald-500 hover:bg-emerald-600
                         text-white font-bold rounded-lg
                         transition-all shadow-lg shadow-emerald-500/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

/* Small reusable component */
const Info = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
    <p className="text-xs text-zinc-400">{label}</p>
    <p className="font-medium text-zinc-900 dark:text-white">{value}</p>
  </div>
);
