"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Wire up to backend / email service
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="waitlist" className="py-20 px-6 bg-primary">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Be the First to Know
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Join our waitlist and get early access when we launch.
        </p>

        {submitted ? (
          <div className="mt-8 bg-white/10 border border-white/20 rounded-xl p-6">
            <p className="text-white text-lg font-semibold">
              You&apos;re on the list!
            </p>
            <p className="text-white/70 mt-1">
              We&apos;ll notify you when we launch.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors cursor-pointer"
            >
              Join Waitlist
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
