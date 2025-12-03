import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full bg-black pt-20 pb-4 flex justify-center items-center px-4">
      <motion.div
        className="relative rounded-xl overflow-hidden max-w-6xl w-full aspect-video group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <video
          ref={videoRef}
          src="/video.mp4"
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay
          playsInline
        />

        {/* Overlay gradient for better text visibility if needed, or just aesthetic */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />

        <button
          type="button"
          onClick={togglePlay}
          className="absolute bottom-6 left-6 z-50 flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white hover:bg-white/30 transition-all cursor-pointer"
        >
          {isPlaying ? (
            <>
              <IconPlayerPause className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">Pause</span>
            </>
          ) : (
            <>
              <IconPlayerPlay className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">Play</span>
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
};

export default Video;