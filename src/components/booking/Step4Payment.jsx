import React from "react";

const Step4Payment = ({ booking, updateBooking, nextStep, prevStep }) => {
  const handleChange = (e) => {
    updateBooking({
      payment: { ...booking.payment, [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="col-md-12">
      <h2 className="mb-4">Payment</h2>

      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            className="form-control"
            name="cardNumber"
            value={booking.payment.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
          />
        </div>
        <div className="col-md-3 mb-3">
          <input
            className="form-control"
            name="expiry"
            value={booking.payment.expiry}
            onChange={handleChange}
            placeholder="MM/YY"
          />
        </div>
        <div className="col-md-3 mb-3">
          <input
            className="form-control"
            name="cvv"
            value={booking.payment.cvv}
            onChange={handleChange}
            placeholder="CVV"
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

export default Step4Payment;
