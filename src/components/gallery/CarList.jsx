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

  return (
    <>
      <div className="relative h-[400px] mb-10">
        <ul
          className={`flex gap-16 absolute top-0 left-0 transition`}
          style={{ transform: `translateX(-${currentIdx * 664}px)` }}
        >
          {cars.map((car, idx) => (
            <li key={idx} className="w-[600px]">
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
