import ScrollReveal from "./ScrollReveal";

export default function Products() {
  const products = [
    {
      name: "FrontDesk Pro",
      description:
        "Streamline your front-desk operations with intelligent scheduling, visitor management, and real-time communication tools — all in one place.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
          />
        </svg>
      ),
      status: "Coming Soon",
    },
    {
      name: "BidManagement Pro",
      description:
        "Take control of your bidding process with smart tracking, automated workflows, and analytics that help you win more contracts.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
          />
        </svg>
      ),
      status: "Coming Soon",
    },
  ];

  return (
    <section
      id="products"
      className="stage relative py-32 px-6 bg-[#F4F1E6] overflow-hidden"
    >
      <div className="blob animate-drift bg-accent/15 w-[420px] h-[420px] top-1/4 -right-32" />
      <div className="blob animate-drift-slow bg-primary/10 w-[400px] h-[400px] -top-20 -left-20" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <ScrollReveal variant="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase border border-primary/20 mb-5">
              Our Products
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={1}>
            <h2 className="text-3xl sm:text-5xl font-bold text-primary leading-tight">
              Built for builders.{" "}
              <span className="text-accent">Made simple.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={2}>
            <p className="mt-5 text-primary/60 text-lg max-w-xl mx-auto">
              Intelligent tools built for construction teams who want to work
              smarter, not harder.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <ScrollReveal
              key={product.name}
              variant={i === 0 ? "left" : "right"}
              delay={(i + 1) as 1 | 2}
            >
              <div className="relative bg-white border border-primary/10 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/10 hover:border-accent/40 hover:-translate-y-1 transition-all duration-500 h-full">
                <span className="absolute top-5 right-5 text-xs font-semibold text-accent-dark bg-accent/15 px-3 py-1 rounded-full border border-accent/30">
                  {product.status}
                </span>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light text-accent rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {product.name}
                </h3>
                <p className="text-primary/60 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bridge into DemoCTA (dark) */}
      <svg
        className="bridge-bottom"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,60 C240,110 480,10 720,40 C960,70 1200,120 1440,70 L1440,120 L0,120 Z"
          fill="#1E2A1E"
        />
      </svg>
    </section>
  );
}
