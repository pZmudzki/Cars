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
    <>
      <header
        className={`fixed top-0 ${
          navHidden ? "-translate-y-20" : ""
        } transition left-0 right-0 h-20 px-4 grid place-items-center bg-gray-primary`}
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

      {/* go to start button */}
      <a
        href="#"
        className={`transition-all border-2 border-blue-primary ${
          lastScrollY > 80 ? "opacity-1" : "opacity-0"
        } fixed bottom-10 right-10 bg-gray-primary rounded-full p-5 transition-all duration-300 ease-linear z-40`}
      >
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303C18.2374 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066L12.75 20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20L11.25 5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967Z"
            fill="#0147FF"
          />
        </svg>
      </a>
    </>
  );
}

export default Navbar;
