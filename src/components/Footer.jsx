import React from "react";
import { IconBrandTwitter, IconBrandLinkedin, IconBrandFacebook } from "@tabler/icons-react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="w-full bg-black py-10 px-4 pb-0">
      <div className="max-w-7xl mx-auto">

        {/* FAQ / Get Started Section */}
        <div className="flex justify-end mb-10">
          <div className="bg-white rounded-full px-6 py-3 flex items-center gap-4 cursor-pointer hover:bg-neutral-200 transition-colors">
            <span className="text-black font-medium">How do I get started?</span>
            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-sm">
              +
            </div>
          </div>
        </div>

        {/* Main Footer Card */}
        <div className="bg-black rounded-t-[3rem] pt-16 px-8 md:px-16 relative overflow-hidden border-t border-neutral-800">
          {/* Top Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            {/* Logo Icon */}
            <div className="col-span-1">
              <div className="w-12 h-12 rounded-xl border border-neutral-800 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 space-y-6">
              <h3 className="text-neutral-200 font-medium text-lg">Quick Links</h3>
              <ul className="space-y-4">
                {['About us', 'Work', 'Services', 'How it work', 'Contact us', 'Error 404'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1 space-y-6">
              <h3 className="text-neutral-200 font-medium text-lg">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:mediaredwhisk@gmail.com" className="text-neutral-400 hover:text-white transition-colors">mediaredwhisk@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+917999553176" className="text-neutral-400 hover:text-white transition-colors">+91 7999553176</a>
                </li>
                <li className="text-neutral-400">
                  Delhi, INDIA
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div className="col-span-1 space-y-6">
              <h3 className="text-neutral-200 font-medium text-lg">Follow us</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                    <IconBrandTwitter size={20} /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                    <IconBrandLinkedin size={20} /> Linkedin
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                    <IconBrandFacebook size={20} /> Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Giant Text */}
          <div className="relative w-full flex justify-center">
            <h1 className="text-[15vw] md:text-[18vw] font-bold text-red-600 leading-none tracking-tighter select-none pointer-events-none translate-y-[10%]">
              redwhisk
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;