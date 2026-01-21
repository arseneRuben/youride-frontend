import React, { useState } from "react";
import { carsData } from "../data/carsData";
import CarCard from "../components/CarCard";

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
      <section
        className="hero-wrap hero-wrap-2 js-fullheight"
        style={{ backgroundImage: "url(/images/car-2.jpg)" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">Home <i className="ion-ios-arrow-forward"></i></a>
                </span>
                <span>Choose Your Car <i className="ion-ios-arrow-forward"></i></span>
              </p>
              <h1 className="mb-3 bread">Choose Your Car</h1>
            </div>
          </div>
        </div>
      </section>

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
