import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import About from "./section/About";
import Experiences from "./section/Experiences";
import Addons from "./section/Addons";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <About />

        <Experiences />

        <Addons />
      </main>
    </>
  );
}

export default App;
