import About from "@containers/About";
import { HeroSection } from "@containers/Hero";
import Highlights from "@containers/Highlights";
import Testimonials from "@containers/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}
