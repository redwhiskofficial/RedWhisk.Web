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
        "rounded-t-3xl rounded-b-2xl relative bg-neutral-900 overflow-hidden h-[25rem] md:h-[35rem] transition-all duration-300 ease-out border border-neutral-800 snap-center will-change-transform",
        card.aspectRatio === "landscape" ? "min-w-[85vw] md:min-w-[45rem]" : "min-w-[18rem] md:min-w-[24rem]",
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

        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (videoRef.current) {
                if (isPlaying) {
                  videoRef.current.pause();
                  setIsPlaying(false);
                } else {
                  videoRef.current.play();
                  setIsPlaying(true);
                }
              }
            }}
            className={cn("px-4 py-2 rounded-full bg-white/20 backdrop-blur-md transition-opacity duration-300 flex items-center gap-2 z-50 cursor-pointer hover:bg-white/30", hovered === index ? "opacity-100" : "opacity-100")}
          >
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
          </button>
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
    { title: "Brand Campaign", src: "https://pub-9cef436284384d9faae25342b7078c62.r2.dev/v1.mov", aspectRatio: "landscape" },
    { title: "Social Media Ad", src: "https://pub-9cef436284384d9faae25342b7078c62.r2.dev/v2.mp4", aspectRatio: "portrait" },
    { title: "Product Launch", src: "https://pub-9cef436284384d9faae25342b7078c62.r2.dev/v3.mov", aspectRatio: "portrait" },
    { title: "Music Video", src: "https://pub-9cef436284384d9faae25342b7078c62.r2.dev/v4.mp4", aspectRatio: "landscape" },
    { title: "Documentary", src: "https://pub-9cef436284384d9faae25342b7078c62.r2.dev/v5.mp4", aspectRatio: "landscape" },
  ];

  // Triplicate the cards for infinite scrolling
  const infiniteCards = [...cards, ...cards, ...cards];

  // Set initial scroll position to the first reel (index 1)
  React.useEffect(() => {
    if (carouselRef.current && !isScrolling.current) {
      // Find the first reel (index 1)
      const reelIndex = 1;
      const reelCard = carouselRef.current.children[reelIndex];

      if (reelCard) {
        reelCard.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'instant' });
      }
    }
  }, [cards.length]);

  // Handle infinite scroll wrapping
  const handleScroll = () => {
    // Variable width support requires more complex logic, disabling simple snap-back for now
    // to prevent jumping.
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
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-200">
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