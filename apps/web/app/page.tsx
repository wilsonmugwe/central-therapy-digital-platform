import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Funding from "@/components/home/Funding";
import About from "@/components/home/About";
import HowItWorks from "@/components/home/HowItWorks";
import Appointment from "@/components/home/Appointment";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Funding />
        <About />
        <HowItWorks />
        <Appointment />
        <FAQ />
      </main>

      <Footer />
      <MobileCTA />
    </>
  );
}