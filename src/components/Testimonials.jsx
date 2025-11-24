import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Testimonials = () => {
    const testimonials = [
        {
            quote:
                "RedWhisk streamlined my workflow, handling content and brand deals so I can focus on gaming. A total game-changer!",
            name: "John Smith",
            title: "100x Views",
        },
        {
            quote:
                "They nailed everything we needed and went above and beyond to bring our vision to life",
            name: "Maxxz",
            title: "100M+ Revenue",
        },
        {
            quote:
                "Amazing service! They consistently deliver top-notch results and meet every requirement perfectly",
            name: "Martin Guptil",
            title: "1M+ Subscribers",
        },
        {
            quote:
                "Working with RedWhisk has been an absolute pleasure. Their attention to detail is unmatched.",
            name: "Sarah Johnson",
            title: "500K+ Followers",
        },
        {
            quote:
                "The quality of work and professionalism exceeded all my expectations. Highly recommended!",
            name: "David Chen",
            title: "2M+ Views",
        },
    ];

    return (
        <div className="w-full bg-black py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-200 max-w-3xl mx-auto">
                        What our premium clients are saying about us
                    </h2>
                </div>

                {/* Infinite Moving Cards */}
                <div className="relative flex flex-col items-center justify-center overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                        pauseOnHover={false}
                        className="[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;