import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Products from "@/components/Products";
import DemoCTA from "@/components/DemoCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Metrics />
        <Products />
        <DemoCTA />
      </main>
      <Footer />
    </>
  );
}
