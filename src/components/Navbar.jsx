import { useEffect, useState } from "react";
import Container from "./ui/Container";
import Link from "./ui/Link";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navHidden, setNavHidden] = useState(false);

  console.log(mobileMenuOpen);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const controlNavbar = () => {
    if (
      window.scrollY > lastScrollY &&
      window.scrollY > 80 &&
      !mobileMenuOpen
    ) {
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
        } transition left-0 right-0 h-20 grid place-items-center bg-gray-primary z-50`}
      >
        <Container className="flex items-center justify-between">
          <ul className="flex items-center justify-between w-full font-secondary">
            <li>
              <a
                href="#"
                className="font-primary sm:text-3xl text-xl font-bold flex items-center sm:gap-3 gap-2"
              >
                <svg
                  className="sm:w-7 sm:h-7 h-5 w-5"
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
            <li
              className={`text-gray-fontPrimary sm:static fixed sm:h-auto h-20 top-[80px] left-[850px] ${
                mobileMenuOpen ? "-translate-x-[850px]" : ""
              } transition sm:bg-transparent bg-gray-200 sm:w-auto w-full grid place-items-center sm:block`}
            >
              <nav className="text-base flex gap-6">
                <a href="#gallery">Galeria zdjęć</a>
                <a href="#faq">FaQ</a>
              </nav>
            </li>
            <li
              className={`sm:static fixed sm:h-auto h-20 top-[160px] left-[850px] ${
                mobileMenuOpen ? "-translate-x-[850px]" : ""
              } transition delay-75 sm:bg-transparent bg-gray-300 sm:w-auto w-full grid place-items-center sm:block`}
            >
              <Link href="tel:+48123456789">Zadzwoń do nas</Link>
            </li>
          </ul>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-auto text-2xl text-blue-primary sm:hidden h-10 w-10 rounded-full border border-blue-primary"
          >
            {mobileMenuOpen ? "X" : "☰"}
          </button>
        </Container>
      </header>

      {/* go to start button */}
      <a
        href="#"
        className={`transition-all border-2 border-blue-primary ${
          lastScrollY > 80 && !mobileMenuOpen ? "opacity-1" : "opacity-0"
        } fixed sm:bottom-10 sm:right-10 bottom-4 right-4 bg-gray-primary rounded-full sm:p-5 p-2 transition-all duration-300 ease-linear z-40`}
      >
        <svg
          className="w-7 h-7"
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
