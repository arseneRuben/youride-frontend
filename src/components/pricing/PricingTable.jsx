import React from "react";

const trips = [
  { from: "Sudbury", to: "Montreal", stops: [], price: 120, carImage: "/images/car-1.jpg" },
  { from: "Sudbury", to: "Toronto", stops: ["Montreal"], price: 150, carImage: "/images/car-2.jpg" },
  { from: "Sudbury", to: "Quebec", stops: ["Montreal"], price: 170, carImage: "/images/car-3.jpg" },
  { from: "Montreal", to: "Toronto", stops: [], price: 90, carImage: "/images/car-4.jpg" },
  { from: "Montreal", to: "Quebec", stops: [], price: 110, carImage: "/images/car-5.jpg" },
  { from: "Toronto", to: "Quebec", stops: ["Montreal"], price: 130, carImage: "/images/car-6.jpg" },
];

const PricingTable = () => {
  const cities = Array.from(
    new Set([...trips.map(t => t.from), ...trips.map(t => t.to)])
  );

  const getTrip = (from, to) => trips.find(t => t.from === from && t.to === to);

  return (
    <section className="ftco-section ftco-cart">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className="car-list">
              <table className="table">
                <thead className="thead-primary">
                  <tr className="text-center">
                    <th>Car</th>
                    <th>From \ To</th>
                    {cities.map(city => (
                      <th key={city} className="bg-primary heading">
                        {city}
                      </th>
                    ))}
                    <th className="bg-dark heading">Stops</th>
                  </tr>
                </thead>

                <tbody>
                  {cities.map(fromCity => (
                    <tr key={fromCity} className="text-center">
                      <td className="car-image">
                        <div
                          className="img"
                          style={{
                            backgroundImage: `url(${getTrip(fromCity, cities[1])?.carImage || "/images/car-1.jpg"})`,
                            width: "120px",
                            height: "70px",
                            backgroundSize: "cover",
                            margin: "auto",
                            borderRadius: "8px",
                          }}
                        />
                      </td>

                      <td className="product-name">
                        <h3>{fromCity}</h3>
                      </td>

                      {cities.map(toCity => {
                        const trip = getTrip(fromCity, toCity);

                        return (
                          <td key={toCity}>
                            {trip ? (
                              <div className="price-rate">
                                <h3>
                                  <span className="num">
                                    <small className="currency">$</small> {trip.price}
                                  </span>
                                </h3>
                              </div>
                            ) : (
                              <span>-</span>
                            )}
                          </td>
                        );
                      })}

                      {/* COLONNE ESCALeS */}
                      <td>
                        {getTrip(fromCity, cities[1]) ? (
                          <span>
                            {getTrip(fromCity, cities[1]).stops.length > 0
                              ? getTrip(fromCity, cities[1]).stops.join(" → ")
                              : "Direct"}
                          </span>
                        ) : (
                          <span>-</span>
                        )}
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
