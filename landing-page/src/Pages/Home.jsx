  import Navbar from "../Components/common/Navbar";
  import Hero from "../Components/common/Hero";
  import HowItWorks from "../Components/common/HowItWorks";
  import Features from "../Components/common/Features";
  import Footer from "../Components/common/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>
      <section id="About">
        <HowItWorks />
      </section>

      <section id="features">
        <Features />
      </section>

      <Footer />
    </>
  );
}

export default Home;