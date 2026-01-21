import React from "react";

const Step3Baggage = ({ booking, updateBooking, nextStep, prevStep }) => {
  const handleChange = (e) => {
    updateBooking({
      baggage: { ...booking.baggage, [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="col-md-12">
      <h2 className="mb-4">Baggage</h2>

      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            className="form-control"
            name="count"
            type="number"
            value={booking.baggage.count}
            onChange={handleChange}
            placeholder="Number of bags"
          />
        </div>

        <div className="col-md-6 mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={booking.baggage.bulky}
              onChange={(e) =>
                updateBooking({
                  baggage: { ...booking.baggage, bulky: e.target.checked },
                })
              }
            />
            <label className="form-check-label">Bulky baggage</label>
          </div>
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

export default Step3Baggage;
