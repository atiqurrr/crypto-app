import Company from "./components/companies/Company";
import Earning from "./components/earnings/Earning";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Status from "./components/status/Status";
import Subscribe from "./components/subscribe/Subscribe";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Company />
      <Pricing />
      <Earning />
      <Status />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
