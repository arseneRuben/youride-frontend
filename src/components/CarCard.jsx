import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="col-md-3">
      <div className="car-wrap">
        <div
          className="img d-flex align-items-end"
          style={{ backgroundImage: `url(${car.image})` }}
        >
          <div className="price-wrap d-flex">
            <span className="rate">${car.pricePerDay}</span>
            <p className="from-day">
              <span>From</span>
              <span>/Day</span>
            </p>
          </div>
        </div>

        <div className="text p-4 text-center">
          <h2 className="mb-0">
            <a href="#">{car.name}</a>
          </h2>
          <span>{car.brand}</span>

          <div className="mt-2">
            <span className="mr-2">{car.seats} seats</span>
            <span className="mr-2">{car.fuel}</span>
            <span>{car.transmission}</span>
          </div>

          <p className="d-flex mb-0 d-block mt-3">
            <a href="#" className="btn btn-black btn-outline-black mr-1">
              Book now
            </a>
            <a href="#" className="btn btn-black btn-outline-black ml-1">
              Details
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
