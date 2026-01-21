import React from "react";

const Step5Confirm = ({ booking, trips, prevStep }) => {
  const trip = trips.find((t) => t.id === booking.tripId);

  return (
    <div className="col-md-12">
      <h2 className="mb-4">Confirm Booking</h2>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Trip</h5>
          <p className="card-text">
            {trip.from} → {trip.to} | {trip.date} {trip.time}
          </p>
          <p className="card-text">Price: ${trip.price}</p>

          <h5 className="card-title mt-4">Passenger</h5>
          <p className="card-text">
            {booking.passenger.firstName} {booking.passenger.lastName}
          </p>
          <p className="card-text">{booking.passenger.email}</p>
          <p className="card-text">{booking.passenger.phone}</p>

          <h5 className="card-title mt-4">Baggage</h5>
          <p className="card-text">Count: {booking.baggage.count}</p>
          <p className="card-text">
            Bulky: {booking.baggage.bulky ? "Yes" : "No"}
          </p>

          <div className="mt-3">
            <button className="btn btn-secondary mr-2" onClick={prevStep}>
              Back
            </button>
            <button className="btn btn-success" onClick={() => alert("Booking confirmed!")}>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5Confirm;
