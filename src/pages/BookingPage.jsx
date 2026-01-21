import React, { useState } from "react";
import { tripsData } from "../data/tripsData";
import Step1SelectTrip from "../components/booking/Step1SelectTrip";
import Step2PassengerInfo from "../components/booking/Step2PassengerInfo";
import Step3Baggage from "../components/booking/Step3Baggage";
import Step4Payment from "../components/booking/Step4Payment";
import Step5Confirm from "../components/booking/Step5Confirm";

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    tripId: null,
    passenger: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    baggage: {
      count: 0,
      bulky: false,
    },
    payment: {
      method: "card",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateBooking = (data) => {
    setBooking({ ...booking, ...data });
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="hero-wrap hero-wrap-2 js-fullheight"
        style={{ backgroundImage: "url(/images/bg_2.jpg)" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
            <div className="col-md-9 ftco-animate pb-1">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">Home <i className="ion-ios-arrow-forward"></i></a>
                </span>
                <span>Booking <i className="ion-ios-arrow-forward"></i></span>
              </p>
              <h1 className="mb-3 bread">Booking</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {step === 1 && (
              <Step1SelectTrip
                trips={tripsData}
                booking={booking}
                updateBooking={updateBooking}
                nextStep={nextStep}
              />
            )}
            {step === 2 && (
              <Step2PassengerInfo
                booking={booking}
                updateBooking={updateBooking}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 3 && (
              <Step3Baggage
                booking={booking}
                updateBooking={updateBooking}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 4 && (
              <Step4Payment
                booking={booking}
                updateBooking={updateBooking}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 5 && (
              <Step5Confirm
                booking={booking}
                trips={tripsData}
                prevStep={prevStep}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
