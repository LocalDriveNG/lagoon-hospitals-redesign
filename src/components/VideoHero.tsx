import { ReactNode } from "react";

interface VideoHeroProps {
  children: ReactNode;
  className?: string;
}

const VideoHero = ({ children, className = "" }: VideoHeroProps) => {
  return (
    <section className={`relative py-24 md:py-32 overflow-hidden ${className}`}>
      {/* Vimeo background video - full width cover */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/763318636?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&responsive=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            border: 0,
            width: "177.77vh",
            height: "100vh",
            minWidth: "100%",
            minHeight: "100%",
          }}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Background video"
          loading="lazy"
        />
      </div>
      {/* Dark navy overlay */}
      <div className="absolute inset-0 z-[1] bg-navy/60" />
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 z-[2] bg-gradient-to-t from-background to-transparent" />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default VideoHero;
