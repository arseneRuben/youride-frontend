import React from "react";

const Step2PassengerInfo = ({ booking, updateBooking, nextStep, prevStep }) => {
  const handleChange = (e) => {
    updateBooking({
      passenger: { ...booking.passenger, [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="col-md-12">
      <h2 className="mb-4">Passenger Info</h2>

      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            className="form-control"
            name="firstName"
            value={booking.passenger.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>
        <div className="col-md-6 mb-3">
          <input
            className="form-control"
            name="lastName"
            value={booking.passenger.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>
        <div className="col-md-6 mb-3">
          <input
            className="form-control"
            name="email"
            value={booking.passenger.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="col-md-6 mb-3">
          <input
            className="form-control"
            name="phone"
            value={booking.passenger.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>
      </div>

      <div className="mt-3">
        <button className="btn btn-secondary mr-2" onClick={prevStep}>
          Back
        </button>
        <button className="btn btn-primary" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2PassengerInfo;
