import './App.scss';
import Navbar from "./components/navbar/navbar"
import Hero from "./components/hero/hero"
import About from "./components/about/about"
import Features from "./components/features/features"
import Subs from "./components/subs/subs"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Subs />
    </>
  );
}

export default App;
