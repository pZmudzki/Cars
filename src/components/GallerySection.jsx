import { useState } from "react";

import CarList from "./gallery/CarList";
import Container from "./ui/Container";

const cars = [
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

const transport_vehicles = [
  {
    src: "/gallery/transport_vehicle.webp",
    alt: "Transport vehicle 1",
  },
  {
    src: "/gallery/transport_vehicle.webp",
    alt: "Transport vehicle 2",
  },
  {
    src: "/gallery/transport_vehicle.webp",
    alt: "Transport vehicle 3",
  },
  {
    src: "/gallery/transport_vehicle.webp",
    alt: "Transport vehicle 4",
  },
  {
    src: "/gallery/transport_vehicle.webp",
    alt: "Transport vehicle 5",
  },
];

function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("cars");

  return (
    <section id="gallery" className="py-10 sm:py-20 bg-gray-primary">
      <Container>
        <div className="mb-20">
          <h2 className="font-primary text-blue-primary sm:text-2xl text-xl mb-2">
            Prezentacja firmy
          </h2>
          <p className="sm:text-5xl text-3xl font-heading mb-6">
            Zobacz naszą galerię zdjęć
          </p>
          <div className="flex gap-12">
            <button
              onClick={() => setSelectedCategory("cars")}
              className={
                selectedCategory === "cars"
                  ? `underline text-blue-primary text-base font-bold font-secondary`
                  : `text-base font-secondary`
              }
            >
              Samochody osobowe
            </button>
            <button
              onClick={() => setSelectedCategory("transport_vehicles")}
              className={
                selectedCategory === "transport_vehicles"
                  ? `underline text-blue-primary text-base font-bold font-secondary`
                  : `text-base font-secondary`
              }
            >
              Samochody dostawcze
            </button>
          </div>
        </div>
        <CarList
          cars={selectedCategory === "cars" ? cars : transport_vehicles}
        />
      </Container>
    </section>
  );
}

export default GallerySection;
