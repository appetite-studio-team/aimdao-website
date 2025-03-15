export default function HeroSection() {
  return (
    <div className="hero pt-32 lg:pt-40 pb-20">
      <div className="hero-content flex-wrap gap-12 lg:gap-8 lg:flex-row-reverse">
        <div className="relative max-w-xl z-10">
          {/* Glow effect container */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-red-500 to-blue-500 rounded-full blur-xl opacity-70 -z-10 scale-105 animate-pulse"></div>
          
          {/* Video container */}
          <div className="rounded-full overflow-hidden shadow-md relative z-10">
            <video
              preload="auto"
              loop
              muted
              autoPlay
              playsInline
              className="w-full h-full max-w-5xl object-cover"
            >
              <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Fastcharge ⚡ with<br/>Ai-managed DAOs</h1>
          <div className="flex gap-2">
            <button className="btn btn-primary mt-8">Learn more</button>
            <button className="btn bg-neutral-200 mt-8">Whitepaper</button>
          </div>
        </div>
      </div>
    </div>
  );
}