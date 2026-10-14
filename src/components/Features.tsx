import ScrollReveal from "./ScrollReveal";

export default function Features() {
  const features = [
    {
      title: "Find the right subs",
      description:
        "AI reads your bid documents and identifies the trades and subs each project needs.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Follow-ups, handled",
      description:
        "Invites go out automatically, and AI calling agents follow up and log every reply.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
          />
        </svg>
      ),
    },
    {
      title: "Compare quotes instantly",
      description:
        "Quotes land side by side, so your team compares and decides in minutes.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
          />
        </svg>
      ),
    },
    {
      title: "Your estimate, built",
      description:
        "Your estimate comes together as quotes arrive, ready to review and send.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="stage relative py-32 px-6 bg-primary-dark text-white overflow-hidden"
    >
      {/* Ambient depth */}
      <div className="blob animate-drift bg-accent/20 w-[500px] h-[500px] -top-40 right-1/4" />
      <div className="blob animate-drift-slow bg-primary-light/40 w-[600px] h-[600px] -bottom-60 -left-40" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal variant="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold tracking-wide uppercase border border-accent/30 mb-5">
              The Platform
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={1}>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-balance">
              One dashboard.{" "}
              <span className="text-accent">Every bid, handled.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={2}>
            <p className="mt-5 text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From the first invite to the final estimate, BuildSimple&apos;s
              AI handles the coordination so your team can focus on the work
              that wins.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              variant="up"
              delay={(i + 1) as 1 | 2 | 3 | 4}
              className="group"
            >
              <div className="text-center px-6 py-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] hover:border-accent/30 hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bridge into Metrics (light) */}
      <svg
        className="bridge-bottom"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,100 480,0 720,30 C960,60 1200,110 1440,50 L1440,120 L0,120 Z"
          fill="#FFFDF7"
        />
      </svg>
    </section>
  );
}
