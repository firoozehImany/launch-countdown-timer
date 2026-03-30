import StarsContainer from "./components/StarsContainer";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="h-screen w-full flex flex-col overflow-hidden">
      <StarsContainer />
      <Hero />
      <Footer />
    </main>
  );
}
