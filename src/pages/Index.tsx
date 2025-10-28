import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Treatments from "@/components/Treatments";
import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="smooth-scroll">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Treatments />
        <Blog />
        <Gallery />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
