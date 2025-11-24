import React from 'react';
import { motion } from 'motion/react';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery Call",
            description: "A discovery call is a brief conversation to understand a client's needs, goals, and challenges before offering a tailored solution."
        },
        {
            number: "02",
            title: "Onboarding Call",
            description: "Our team edits and you can request revisions to perfect it."
        },
        {
            number: "03",
            title: "Final Delivery",
            description: "Receive the final video with all necessary adjustments."
        }
    ];

    return (
        <div id="process" className="w-full bg-black py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden bg-neutral-800 max-h-[500px]">
                            <img
                                src="/4.avif"
                                alt="Client working"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        {/* Label */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="text-neutral-400 font-medium text-sm">Process</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
                            Client Onboarding
                        </h2>

                        {/* Steps - Vertical Stack */}
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-8"
                                >
                                    <div className="text-neutral-500 font-medium text-sm pt-1 min-w-[2rem]">
                                        {step.number}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-neutral-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Process;