import { ReactNode } from "react";

interface VideoHeroProps {
  children: ReactNode;
  className?: string;
}

const VideoHero = ({ children, className = "" }: VideoHeroProps) => {
  return (
    <section className={`relative h-[25vh] md:h-[25vh] lg:h-[30vh] overflow-hidden ${className}`}>
      {/* Poster background — visible instantly before video loads */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/video-poster.jpg')" }}
      />
      {/* Vimeo background video — full width cover */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/763318636?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&autopause=0&playsinline=1"
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
          loading="eager"
        />
      </div>
      {/* Dark navy overlay */}
      <div className="absolute inset-0 z-[2] bg-navy/60" />
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-[3] bg-gradient-to-t from-background to-transparent" />
      {/* Content — vertically centered */}
      <div className="relative z-10 h-full flex items-center">
        {children}
      </div>
    </section>
  );
};

export default VideoHero;
