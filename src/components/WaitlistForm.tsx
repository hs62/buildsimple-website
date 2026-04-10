"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, company }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
        setName("");
        setCompany("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-semibold text-lg">You&apos;re on the list!</p>
        <p className="text-white/60 mt-1 text-sm">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto text-left">
      <div>
        <input
          type="text"
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-white/20 text-white bg-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent"
        />
      </div>
      <div>
        <input
          type="email"
          required
          placeholder="Work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-white/20 text-white bg-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Company name (optional)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-white/20 text-white bg-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent"
        />
      </div>

      {status === "error" && (
        <p className="text-red-300 text-sm">{message}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors cursor-pointer disabled:opacity-60 shadow-lg shadow-black/20"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
    </form>
  );
}
