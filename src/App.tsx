import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";


import Experiences from "./section/Experiences";
import Addons from "./section/Addons";
import Gallery from "./section/Gallery";
import HowItWorks from "./section/HowItWorks";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        
        <Experiences />
        <Addons />
        <Gallery />
        <HowItWorks />
      </main>

      <Footer />
    </>
  );
}

export default App;
