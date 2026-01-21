const trips = [
  { id: 1, from: 'Toronto', to: 'Ottawa', price: 40 },
  { id: 2, from: 'Sudbury', to: 'Montreal', price: 65 },
  { id: 3, from: 'Toronto', to: 'Montreal', price: 75 },
];

const TripList = () => {
  return (
    <section className="ftco-section">
      <div className="container-fluid px-4">
        <div className="row">
          {trips.map(trip => (
            <div key={trip.id} className="col-md-3">
              <div className="car-wrap">
                <div className="text p-4 text-center">
                  <h2>{trip.from} → {trip.to}</h2>
                  <p className="rate">${trip.price}</p>
                  <button className="btn btn-primary">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripList;
