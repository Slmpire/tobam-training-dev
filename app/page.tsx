import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LMSBlock from "@/components/sections/LMSBlock";
import Courses from "@/components/sections/Courses";
import Management from "@/components/sections/Management";
import Schedule from "@/components/sections/Schedule";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LMSBlock />
      <Courses />
      <Management />
      <Schedule />
      <Portfolio />
      <Testimonials />
      <Footer />
    </main>
  );
}