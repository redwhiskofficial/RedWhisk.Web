import React from 'react';
import { motion } from 'motion/react';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery Call",
            description: "Once your call is booked, we'll host a discovery session to understand your vision, requirements, and brand direction in detail."
        },
        {
            number: "02",
            title: "Onboarding Call",
            description: "After you book, we'll hop on an onboarding call to discuss your needs and issue the agreement and invoice to kick things off."
        },
        {
            number: "03",
            title: "Personalized Dashboard Access",
            description: "Enjoy seamless dashboard access with real-time project updates, file management, communication, and delivery tracking—all in one organized workspace."
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
                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-200 mb-16">
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