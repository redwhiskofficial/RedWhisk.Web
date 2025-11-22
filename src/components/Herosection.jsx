import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { motion } from "motion/react";

const Herosection = () => {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-200 to-neutral-500 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
      >
        Content that feels premium, <br /> performs even better.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center"
      >
        At Redwhisk Media, we blend strategy, storytelling, and precision
        editing to help your brand communicate with clarity and impact. Every
        frame, every word, every second — crafted to connect.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
      >
        <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors">
          Book a Call
        </button>
        <a
          href="#"
          className="text-neutral-300 font-medium hover:underline"
        >
          How it works
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="flex items-center justify-center gap-2 mt-8"
      >
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full border-2 border-black bg-neutral-200"
              style={{
                backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`,
                backgroundSize: "cover",
              }}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-neutral-400">
          10+ Happy Clients
        </span>
      </motion.div>
    </BackgroundLines>
  );
};

export default Herosection;