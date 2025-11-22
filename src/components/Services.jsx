import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        {/* <span className="text-neutral-300 font-medium text-sm">Services</span>can  */}
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-16 max-w-4xl mx-auto">
        Explore our professional video editing services
      </h2>

      <HoverEffect items={services} />
    </div>
  );
};

const services = [
  {
    title: "Personalized Content Dashboard",
    description:
      "A sleek, data-driven dashboard that consolidates your brand and performance metrics into one streamlined visual interface.",
    link: "#",
  },
  {
    title: "Content Manager",
    description:
      "oversees planning, creating and optimizing engaging multimedia content to align with brand goals and audience growth.",
    link: "#",
  },
  {
    title: "TikTok Clips",
    description:
      "Design engaging short videos tailored for TikTok's algorithm.",
    link: "#",
  },
  {
    title: "Youtube Shorts",
    description:
      "Create short, engaging videos for quick viewer engagement.",
    link: "#",
  },
  {
    title: "Facebook Ads",
    description:
      "Create and optimize video ads for better engagement and reach.",
    link: "#",
  },
  {
    title: "LinkedIn Videos",
    description:
      "Craft professional videos for business growth and networking.",
    link: "#",
  },
];

export default Services;