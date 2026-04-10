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
            <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
              Real time saved.{" "}
              <span className="text-accent">Real bids won.</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ScrollReveal variant="left" delay={1}>
            <div className="text-center p-10 rounded-3xl border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-accent/0 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
              <p className="text-6xl sm:text-7xl md:text-[5.5rem] font-bold text-primary leading-none">
                <AnimatedCounter value="6–7" />
              </p>
              <p className="mt-4 text-primary/60 text-sm sm:text-base font-medium">
                hours saved per bid
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={2}>
            <div className="text-center p-10 rounded-3xl border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-accent/0 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
              <p className="text-6xl sm:text-7xl md:text-[5.5rem] font-bold text-primary leading-none">
                <AnimatedCounter value={50} suffix="%" />
              </p>
              <p className="mt-4 text-primary/60 text-sm sm:text-base font-medium">
                more projects bid
              </p>
            </div>
          </ScrollReveal>
        </div>
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
