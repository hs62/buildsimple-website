import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

export default function Metrics() {
  return (
    <section className="stage relative py-32 px-6 bg-[#FFFDF7] overflow-hidden">
      {/* soft accents */}
      <div className="blob animate-drift bg-accent/15 w-[420px] h-[420px] -top-20 -right-20" />
      <div className="blob animate-drift-slow bg-primary/10 w-[380px] h-[380px] -bottom-20 -left-20" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <ScrollReveal variant="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase border border-primary/20 mb-5">
              The Impact
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight text-balance">
              Same team.{" "}
              <span className="text-accent">More bids.</span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="scale" delay={1} className="max-w-2xl mx-auto">
          <div className="text-center px-6 py-10 sm:p-12 rounded-3xl border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-accent/0 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
            <p className="flex flex-wrap items-baseline justify-center gap-x-3 font-bold text-primary leading-none">
              <span className="text-3xl sm:text-4xl md:text-5xl">Up to</span>
              <AnimatedCounter
                value={33}
                suffix="%"
                className="text-7xl sm:text-8xl md:text-[7.5rem]"
              />
            </p>
            <p className="mt-5 text-primary/60 text-base sm:text-lg font-medium text-balance">
              more projects bid with the same team
            </p>
          </div>
          <p className="mt-4 text-center text-xs sm:text-sm text-primary/40 text-balance">
            Estimate based on time saved on sub coordination per bid.
          </p>
        </ScrollReveal>
      </div>

      {/* Bridge into Products (subtle gray) */}
      <svg
        className="bridge-bottom"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,60 C240,20 480,100 720,70 C960,40 1200,90 1440,50 L1440,120 L0,120 Z"
          fill="#F4F1E6"
        />
      </svg>
    </section>
  );
}
