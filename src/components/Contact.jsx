import React from "react";
import { motion } from "motion/react";

const Contact = () => {
    return (
        <div className="w-full bg-black py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-neutral-400 font-medium text-sm">Contact</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
                        Contact us for amazing video editing projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900/50 p-8 md:p-12 rounded-3xl border border-neutral-800"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-neutral-400">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Muzamal Hussain"
                                        className="w-full bg-transparent border-b border-neutral-700 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-neutral-400">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Testing@gmail.com"
                                        className="w-full bg-transparent border-b border-neutral-700 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-400">Service</label>
                                <div className="relative">
                                    <select className="w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer">
                                        <option value="" disabled selected>Select...</option>
                                        <option value="video-editing" className="bg-neutral-900">Video Editing</option>
                                        <option value="motion-graphics" className="bg-neutral-900">Motion Graphics</option>
                                        <option value="content-strategy" className="bg-neutral-900">Content Strategy</option>
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-400">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Please provide a detailed description of your request"
                                    className="w-full bg-transparent border-b border-neutral-700 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="button"
                                className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-colors w-full md:w-auto mt-4"
                            >
                                Submit your request
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Side - Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full min-h-[500px] relative rounded-3xl overflow-hidden bg-neutral-800"
                    >
                        <video
                            src="/5.mp4"
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;