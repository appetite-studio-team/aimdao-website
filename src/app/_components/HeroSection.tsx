export default function HeroSection() {
  return (
    <div className="hero py-24">
      <div className="hero-content relative flex-wrap gap-12 lg:gap-8">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

        <div className="mt-12 max-w-xl">
          <h1 className="text-5xl font-bold">
            Fastcharge ⚡ with
            <br />
            Ai-managed DAOs
          </h1>
          <div className="flex gap-2">
            <a href="#features-section" className="btn btn-primary mt-8">
              Learn more
            </a>
            <a href="/whitepaper" className="btn mt-8 bg-neutral-200">
              Whitepaper
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-4 max-w-xl lg:mt-0 lg:p-8">
          <div className="relative z-10 overflow-hidden rounded shadow-md">
            <div className="bg-base-300 absolute top-0 right-0 left-0 h-px w-[2000px]" />
            <video
              preload="auto"
              loop
              muted
              autoPlay
              playsInline
              className="flip aspect-square w-full max-w-5xl -scale-x-100 object-cover"
            >
              <source src="/assets/hero-video-2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
