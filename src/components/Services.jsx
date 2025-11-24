import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-neutral-200 mb-16 max-w-4xl mx-auto">
        Explore our professional video editing services
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