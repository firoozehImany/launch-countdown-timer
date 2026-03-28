import StarsContainer from "./components/StarsContainer";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative md:min-h-screen flex flex-col">
      <StarsContainer />
      <Hero />
      <Footer />
    </div>
  );
}
