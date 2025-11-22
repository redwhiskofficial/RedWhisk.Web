import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "We provide video editing, custom video production, content strategy development, social media optimization, and more, tailored to meet your needs.",
    },
    {
        question: "How long does it take to complete a video project?",
        answer:
            "The timeline depends on the complexity of the project. Typically, a standard video edit takes 2-3 days, while more complex productions may take 1-2 weeks.",
    },
    {
        question: "Do you offer revisions?",
        answer:
            "Yes, we offer unlimited revisions during the review process to ensure the final product meets your expectations perfectly.",
    },
    {
        question: "What platforms do you create videos for?",
        answer:
            "We create content optimized for all major platforms including YouTube, Instagram (Reels), TikTok, LinkedIn, and Facebook.",
    },
    {
        question: "Can I provide my own footage for editing?",
        answer:
            "Absolutely! You can provide your raw footage, and we will transform it into a polished, professional video.",
    },
    {
        question: "How do I get started?",
        answer:
            "Simply click the 'Book an appointment' button or contact us through the form below to discuss your project requirements.",
    },
];

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-neutral-800">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-lg md:text-xl font-medium text-white group-hover:text-red-500 transition-colors">
                    {question}
                </span>
                <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-red-600 text-white" : "bg-neutral-800 text-neutral-400 group-hover:bg-neutral-700"
                        }`}
                >
                    {isOpen ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-neutral-400 pb-6 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full bg-black py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Side - Header & CTA */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-2 h-2 rounded-full bg-red-600" />
                                <span className="text-neutral-400 font-medium text-sm uppercase tracking-wider">FAQ</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Frequently asked questions about us
                            </h2>
                        </div>

                        <div className="bg-red-600 rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold mb-2">Have a question?</h3>
                                <p className="text-red-100 mb-6">Let's discuss it now!</p>
                                <a href="#contact" className="inline-block bg-white text-red-600 px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors">
                                    Book an appointment
                                </a>
                            </div>
                            {/* Decorative circle */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-500 rounded-full blur-2xl opacity-50" />
                        </div>
                    </div>

                    {/* Right Side - FAQ List */}
                    <div className="lg:col-span-7">
                        <div className="bg-neutral-900/30 rounded-3xl p-6 md:p-8 border border-neutral-800/50">
                            {faqs.map((faq, index) => (
                                <FaqItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;