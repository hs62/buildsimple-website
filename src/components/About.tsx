export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            About BuildSimple
          </h2>
          <div className="mt-2 w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-500 leading-relaxed">
              At BuildSimple, we believe powerful software shouldn&apos;t be
              complicated. We&apos;re building a suite of intelligent tools
              designed to streamline the way construction businesses operate —
              from managing front-desk operations to optimizing bid workflows.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">
              Our Approach
            </h3>
            <p className="text-gray-500 leading-relaxed">
              We combine modern technology with thoughtful design to create
              products that teams actually want to use. Every feature is built
              with simplicity at its core, so you can focus on what matters most
              — winning bids and growing your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
