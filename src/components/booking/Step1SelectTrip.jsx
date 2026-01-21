import React from "react";

const Step1SelectTrip = ({ trips, updateBooking, nextStep }) => {
  return (
    <div className="col-md-12">
      <h2 className="mb-4">Select a Trip</h2>

      <div className="row">
        {trips.map((trip) => (
          <div className="col-md-4" key={trip.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">
                  {trip.from} → {trip.to}
                </h5>
                <p className="card-text">
                  {trip.date} - {trip.time}
                </p>
                <p className="card-text">
                  Price: <strong>${trip.price}</strong>
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    updateBooking({ tripId: trip.id });
                    nextStep();
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step1SelectTrip;
