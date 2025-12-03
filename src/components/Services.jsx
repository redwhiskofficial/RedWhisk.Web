import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-neutral-200 mb-16 max-w-4xl mx-auto">
        What REDWHISK Offers You!
      </h2>

      <HoverEffect items={services} />
    </div>
  );
};

const services = [
  {
    title: "Up to 2 Free Revisions*",
    description:
      "Every project includes up to 2 complimentary revisions within the existing SOP to refine pacing, visuals, text, color, and flow—without altering the original brief. We deliver premium-quality reels in 48 hours and long-form videos in 4-8 days, backed by a smooth, reliable revision process.",
    link: "#",
  },
  {
    title: "48 hours Turnaround",
    description:
      "Our team specializes in fast, premium reel production with a guaranteed 48-hour delivery time. Need longer content? We create engaging long-form videos (4-8 day turnaround) designed for YouTube, podcasts, and brand storytelling.",
    link: "#",
  },
  {
    title: "Content Research & Creation Blueprint",
    description:
      "We provide niche-specific content research with multiple content ideas, plus step-by-step tutorials for recording, shooting, and optimal camera settings.",
    link: "#",
  },
  {
    title: "Content calendar",
    description:
      "We create a strategic, niche-focused content calendar tailored to your brand, mapping out what to post, when to post, and why it works—ensuring consistency, growth, and maximum engagement across all platforms.",
    link: "#",
  },
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
];

export default Services;