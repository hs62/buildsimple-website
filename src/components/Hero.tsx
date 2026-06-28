import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="stage relative pt-28 pb-32 px-6 min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#F6F4EA] to-[#EDE9D8]">
      {/* Ambient parallax blobs */}
      <div className="blob animate-drift bg-accent/30 w-[420px] h-[420px] -top-20 -left-32" />
      <div className="blob animate-drift-slow bg-primary/20 w-[520px] h-[520px] -bottom-40 -right-40" />
      <div className="blob animate-drift bg-accent-light/25 w-[260px] h-[260px] top-1/3 right-10" />

      <div className="relative z-10 max-w-3xl mx-auto text-center w-full">
        <ScrollReveal variant="up">
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-primary leading-[1.1]">
            Stop chasing quotes.{" "}
            <span className="text-accent">Start closing bids.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="up" delay={2}>
          <p className="mt-6 text-base sm:text-lg text-primary/60 max-w-2xl mx-auto leading-relaxed">
            Automated bid management for general contractors. Let AI track
            quotes and follow up automatically so that you close bids faster.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale" delay={3}>
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-primary shadow-2xl border-2 border-primary-light">
              <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/WNI6JoDZ8KA?si=QDWVRXVvW9pcRYBH" 
                title="BuildSimple demo" 
                frameborder="0" 
                allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="up" delay={4}>
          <div className="mt-8">
            <a
              href="#waitlist"
              className="inline-block bg-accent text-white px-8 py-3.5 rounded-lg hover:bg-accent-dark transition-colors font-semibold text-base shadow-lg shadow-accent/30"
            >
              Join Waitlist
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Seamless bridge into Features (dark green) */}
      <svg
        className="bridge-bottom"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,80 C240,120 480,20 720,40 C960,60 1200,120 1440,60 L1440,120 L0,120 Z"
          fill="#1E2A1E"
        />
      </svg>
    </section>
  );
}
