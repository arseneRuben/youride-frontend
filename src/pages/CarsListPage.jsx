import React, { useState } from "react";
import { carsData } from "../data/carsData";
import CarCard from "../components/CarCard";
import HeroSection from "../components/common/HeroSection";

const CarsListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(carsData.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentCars = carsData.slice(start, end);

  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="Car list"
        current="Car list"
        image="/images/image_6.jpg"
        />

      {/* Cars list */}
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {currentCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {/* Pagination */}
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(prev => Math.max(prev - 1, 1));
                      }}
                    >
                      &lt;
                    </a>
                  </li>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i} className={currentPage === i + 1 ? "active" : ""}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(i + 1);
                        }}
                      >
                        {i + 1}
                      </a>
                    </li>
                  ))}

                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(prev => Math.min(prev + 1, totalPages));
                      }}
                    >
                      &gt;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CarsListPage;
