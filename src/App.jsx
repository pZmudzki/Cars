import FAQSection from "./components/FAQSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <FAQSection />
    </div>
  );
}

export default App;
