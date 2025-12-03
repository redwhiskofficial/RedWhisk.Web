import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Testimonials = () => {
    const testimonials = [
        {
            quote:
                "They handled my vlog edits and thumbnails, and honestly, it changed everything.My content now looks sharp, smooth, and way more engaging.",
            name: "James Symons",
            title: "Ecom Brand Owner",
        },
        {
            quote:
                "Their editing took my podcast from good to outstanding.It truly felt like a complete game-changer.",
            name: "Built From Scratch",
            title: "Venture Capitalist",
        },
        {
            quote:
                "RedWhisk streamlined my workflow, handling content and brand deals so I can focus on gaming. A total game-changer!",
            name: "Rishbah",
            title: "Encore",
        },
        {
            quote:
                "Redwhisk designed a stunning fitness thumbnail that boosted my click-through rates. Highly recommended!",
            name: "Michael Morelli",
            title: "morellifit",
        },

        {
            quote:
                "RedWhisk handles my content and collaborations, giving me more time to focus on teaching. Highly recommend!",
            name: "Phyjeeics",
            title: "Educator",
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