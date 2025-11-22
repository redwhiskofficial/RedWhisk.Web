import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { IconTrendingUp, IconStarFilled, IconEye, IconUser, IconRefresh, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-neutral-300 font-medium">About us</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 bg-opacity-50 max-w-5xl mx-auto leading-tight"
        >
          Boost your content{" "}
          <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-neutral-100 text-black text-xl md:text-3xl align-middle mx-2">
            <IconTrendingUp className="w-6 h-6 text-red-600 mr-1" /> 24X
          </span>{" "}
          with seamless{" "}
          <span className="inline-flex items-center justify-center p-2 rounded-full bg-red-600 text-white align-middle mx-1">
            <IconStarFilled className="w-5 h-5" />
          </span>{" "}
          edits, maximize views and drive amazing growth{" "}
          <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-red-600 text-white text-xl md:text-3xl align-middle mx-2">
            <IconTrendingUp className="w-6 h-6 text-white mr-1" /> 24X
          </span>{" "}
          and uplift your social game
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              icon: <IconEye className="w-6 h-6" />,
              value: "10M+",
              label: "Total views generated",
            },
            {
              icon: <IconUser className="w-6 h-6" />,
              value: "20%",
              label: "Audience growth",
            },
            {
              icon: <IconRefresh className="w-6 h-6" />,
              value: "49%",
              label: "Growth in revenue",
            },
            {
              icon: <IconArrowRight className="w-6 h-6" />,
              value: "10+",
              label: "Creator & agencies",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-start p-6 py-10 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors h-64 justify-between"
            >
              <div className="mb-8 p-2 bg-black rounded-full border border-neutral-800">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-neutral-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;