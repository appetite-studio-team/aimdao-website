export default function HeroSection() {
  return (
    <div className="hero pt-32 pb-20 lg:pt-40">
      <div className="hero-content flex-wrap gap-12 lg:flex-row-reverse lg:gap-8">
        <div className="relative z-10 max-w-xl">
          {/* Glow effect container */}
          <div className="absolute inset-0 -z-10 scale-105 animate-pulse rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-blue-500 opacity-70 blur-xl"></div>

          {/* Video container */}
          <div className="relative z-10 overflow-hidden rounded-full shadow-md">
            <video
              preload="auto"
              loop
              muted
              autoPlay
              playsInline
              className="h-full w-full max-w-5xl object-cover"
            >
              <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Fastcharge ⚡ with
            <br />
            Ai-managed DAOs
          </h1>
          <div className="flex gap-2">
            <a href="#feature-section" className="btn btn-primary mt-8">
              Learn more
            </a>
            <a href="/whitepaper" className="btn mt-8 bg-neutral-200">
              Whitepaper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
