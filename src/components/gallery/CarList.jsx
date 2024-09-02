import { useEffect, useState } from "react";

function CarList({ cars }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) =>
        prevIdx === cars.length - 1 ? 0 : prevIdx + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const screenWidth = window.innerWidth;

  return (
    <>
      <div className="relative sm:h-[400px] h-[200px] sm:mb-10">
        <ul
          className={`flex sm:gap-16 gap-6 absolute top-0 left-0 transition`}
          style={{
            transform: `translateX(-${
              screenWidth <= 640 ? currentIdx * 224 : currentIdx * 664
            }px)`,
          }}
        >
          {cars.map((car, idx) => (
            <li
              onClick={() => setCurrentIdx(idx)}
              key={idx}
              className="sm:w-[600px] w-[200px]"
            >
              <img src={car.src} alt={car.alt} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center gap-2">
        {cars.map((car, idx) => (
          <button
            key={car.alt}
            onClick={() => setCurrentIdx(idx)}
            className={`rounded-full w-2 h-2 ${
              currentIdx == idx ? "bg-blue-primary" : "bg-gray-secondary"
            }`}
          ></button>
        ))}
      </div>
    </>
  );
}

export default CarList;
