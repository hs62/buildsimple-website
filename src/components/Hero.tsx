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
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent-dark text-xs font-semibold tracking-wide uppercase border border-accent/30 mb-6">
            For General Contractors
          </span>
        </ScrollReveal>

        <ScrollReveal variant="up" delay={1}>
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-primary leading-[1.1]">
            Stop chasing subs.{" "}
            <span className="text-accent">Start winning more bids.</span>
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
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/60">
                <svg
                  className="w-16 h-16 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="text-sm">Video coming soon</p>
              </div>
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
