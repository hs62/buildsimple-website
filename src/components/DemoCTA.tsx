import WaitlistForm from "./WaitlistForm";
import ScrollReveal from "./ScrollReveal";

export default function DemoCTA() {
  return (
    <section
      id="waitlist"
      className="stage relative py-32 px-6 bg-primary-dark overflow-hidden"
    >
      {/* Ambient depth */}
      <div className="blob animate-drift bg-accent/25 w-[520px] h-[520px] -top-40 -left-20" />
      <div className="blob animate-drift-slow bg-primary-light/40 w-[420px] h-[420px] -bottom-40 -right-20" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <ScrollReveal variant="up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold tracking-wide uppercase border border-accent/30 mb-5">
            Early Access
          </span>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={1}>
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Be the first to{" "}
            <span className="text-accent">get access.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={2}>
          <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed">
            Join the waitlist and we&apos;ll reach out when BuildSimple is
            ready for you.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="scale" delay={3}>
          <div className="mt-10">
            <WaitlistForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
