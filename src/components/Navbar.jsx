import { useEffect, useState } from "react";
import Container from "./ui/Container";

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }

    setLastScrollY(window.scrollY);
  };

  return (
    <header
      className={`fixed top-0 ${
        navHidden ? "-translate-y-20" : ""
      } transition left-0 right-0 h-20 px-4 grid place-items-center`}
    >
      <Container>
        <ul className="flex items-center justify-between w-full font-secondary">
          <li>
            <a
              href="#"
              className="font-primary text-3xl font-bold flex items-center gap-3"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
                  stroke="#0147FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <span className="text-blue-primary">Cars</span>
                Spot
              </div>
            </a>
          </li>
          <li>
            <nav className="text-base flex gap-6">
              <a href="#gallery">Galeria zdjęć</a>
              <a href="#faq">FaQ</a>
            </nav>
          </li>
          <li>
            <a
              href="tel:+48123456789"
              className="py-4 px-7 text-sm bg-blue-primary text-white rounded-lg"
            >
              Zadzwoń do nas
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
}

export default Navbar;
