import { useEffect, useState } from "react";

function CarList({ cars }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [offset, setOffset] = useState(0);
  console.log(currentIdx);

  console.log(cars);

  useEffect(() => {
    setOffset(currentIdx * 600);
  }, [currentIdx]);

  return (
    <>
      <div className="relative h-[400px] mb-10">
        <ul
          className={`flex gap-16 absolute top-0 transition -translate-x-[${offset}px]`}
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
