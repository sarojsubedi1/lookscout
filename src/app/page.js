import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Features from "./components/features";
import ThinkOutside from "./components/thinkoutside";
import CoreTeam from "./components/coreTeam";
import Faq from "./components/faq";
import Company from "./components/company";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ThinkOutside />
      <CoreTeam />
      <Faq />
      <Company />
      <Footer />
    </>
  );
}
