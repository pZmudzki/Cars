import Link from "./ui/Link";
import Container from "./ui/Container";

function HeroSection() {
  return (
    <section className="bg-gray-primary relative">
      <Container className="pt-52 pb-32 h-screen">
        <div className="flex flex-col gap-12">
          <p className="font-heading text-7xl">
            Sprzedajemy samochody
            <br /> z europy
          </p>
          <p className="font-primary text-base">
            Kup komfortowy pojazd, aby każda podróż <br /> była wyjątkowym
            przeżyciem.
          </p>
          <div className="flex gap-6">
            <Link href="#gallery">
              <span>Zobacz zdjęcia</span>
            </Link>
            <Link href="tel:+48123456789" outline>
              <span className="font-bold">Zadzwoń do nas</span>
            </Link>
          </div>
        </div>
      </Container>
      {/* car image */}
      <div className="absolute right-0 bottom-32 w-3/5">
        <div className="relative">
          <img
            className="absolute bottom-0 brightness-125"
            src="/hero/hero_cars.png"
            alt="Black cars from carsspot"
          />
          <img
            className="absolute bottom-0"
            src="/hero/hero_cars_shadow.png"
            alt="Black cars shadow"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
