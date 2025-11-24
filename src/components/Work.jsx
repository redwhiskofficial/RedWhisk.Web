import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { IconArrowLeft, IconArrowRight, IconPlayerPlay, IconPlayerPause } from "@tabler/icons-react";
import { motion } from "motion/react";

const VideoCard = React.memo(({ card, index, hovered, setHovered }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setHovered(index);
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setHovered(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "rounded-t-3xl rounded-b-2xl relative bg-neutral-900 overflow-hidden h-[25rem] md:h-[35rem] min-w-[18rem] md:min-w-[24rem] transition-all duration-300 ease-out border border-neutral-800 snap-center will-change-transform",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-50",
        hovered === index && "scale-110 z-10 shadow-2xl border-neutral-500"
      )}
      style={{
        transformOrigin: "center bottom",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        clipPath: "inset(0 round 1.5rem 1.5rem 0.5rem 0.5rem)"
      }}
    >
      <video
        ref={videoRef}
        src={card.src}
        className="object-cover absolute inset-0 w-full h-full rounded-t-3xl rounded-b-2xl"
        loop
        muted
        playsInline
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/20 flex flex-col justify-between p-6 transition-opacity duration-300 rounded-t-3xl rounded-b-2xl",
          hovered === index ? "opacity-100" : "opacity-100" // Always visible or toggle based on preference
        )}
      >
        <div className="self-end">
          {/* Optional top content */}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-medium text-white">
            {card.title}
          </div>
          <div className={cn("px-4 py-2 rounded-full bg-white/20 backdrop-blur-md transition-opacity duration-300 flex items-center gap-2", hovered === index ? "opacity-100" : "opacity-100")}>
            {isPlaying ? (
              <>
                <IconPlayerPause className="w-4 h-4 text-white fill-current" />
                <span className="text-xs font-medium text-white">Pause</span>
              </>
            ) : (
              <>
                <IconPlayerPlay className="w-4 h-4 text-white fill-current" />
                <span className="text-xs font-medium text-white">Play</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

VideoCard.displayName = "VideoCard";

const Work = () => {
  const [hovered, setHovered] = useState(null);
  const carouselRef = useRef(null);
  const isScrolling = useRef(false);

  const cards = [
    { title: "Brand Campaign", src: "/1.mp4" },
    { title: "Social Media Ad", src: "/2.mp4" },
    { title: "Product Launch", src: "/3.mp4" },
    { title: "Music Video", src: "/1.mp4" },
    { title: "Documentary", src: "/2.mp4" },
    { title: "Fashion Film", src: "/3.mp4" },
  ];

  // Triplicate the cards for infinite scrolling
  const infiniteCards = [...cards, ...cards, ...cards];

  // Set initial scroll position to middle set
  React.useEffect(() => {
    if (carouselRef.current && !isScrolling.current) {
      const cardWidth = 24 * 16 + 24; // card width (24rem) + gap (24px)
      const initialScroll = cardWidth * cards.length;
      carouselRef.current.scrollLeft = initialScroll;
    }
  }, [cards.length]);

  // Handle infinite scroll wrapping
  const handleScroll = () => {
    if (!carouselRef.current || isScrolling.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const cardWidth = 24 * 16 + 24; // card width (24rem) + gap (24px)
    const totalCardWidth = cardWidth * cards.length;

    // If scrolled to the end (right side), reset to middle set
    if (scrollLeft >= totalCardWidth * 2 - clientWidth) {
      isScrolling.current = true;
      carouselRef.current.scrollLeft = scrollLeft - totalCardWidth;
      setTimeout(() => { isScrolling.current = false; }, 50);
    }
    // If scrolled to the beginning (left side), reset to middle set
    else if (scrollLeft <= 0) {
      isScrolling.current = true;
      carouselRef.current.scrollLeft = scrollLeft + totalCardWidth;
      setTimeout(() => { isScrolling.current = false; }, 50);
    }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div id="work" className="w-full pt-20 pb-20 bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-20 flex items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          work and projects
        </h2>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <button
          onClick={() => scroll("left")}
          className="absolute left-1/2 -translate-x-[10rem] md:-translate-x-[16rem] top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-[#E11D48] hover:bg-[#be123c] transition-colors text-white shadow-lg flex items-center justify-center"
        >
          <IconArrowLeft className="w-6 h-6" />
        </button>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto px-4 md:px-[30vw] pb-10 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={handleScroll}
        >
          {infiniteCards.map((card, index) => (
            <VideoCard
              key={`card-${index}`}
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-1/2 translate-x-[10rem] md:translate-x-[16rem] top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-[#E11D48] hover:bg-[#be123c] transition-colors text-white shadow-lg flex items-center justify-center"
        >
          <IconArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Work;