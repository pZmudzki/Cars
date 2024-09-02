import CarList from "../gallery/CarList";
import Container from "./ui/Container";

function GallerySection() {
  const images = [
    {
      src: "/gallery/car1.jfif",
      alt: "Car 1",
    },
    {
      src: "/gallery/car2.jfif",
      alt: "Car 2",
    },
    {
      src: "/gallery/car3.jfif",
      alt: "Car 3",
    },
    {
      src: "/gallery/car4.jfif",
      alt: "Car 4",
    },
    {
      src: "/gallery/car5.jfif",
      alt: "Car 5",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-primary">
      <Container>
        <div className="mb-20">
          <h2 className="font-primary text-blue-primary text-2xl mb-2">
            Prezentacja firmy
          </h2>
          <p className="text-5xl font-heading mb-6">
            Zobacz naszą galerię zdjęć
          </p>
          <div className="flex gap-12">
            <button className="underline text-blue-primary text-base font-bold font-secondary">
              Samochody osobowe
            </button>
            <button className="text-base font-secondary">
              Samochody dostawcze
            </button>
          </div>
        </div>
        <CarList cars={images} />
      </Container>
    </section>
  );
}

export default GallerySection;
