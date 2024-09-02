import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-[2000px] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <GallerySection />
    </div>
  );
}

export default App;
