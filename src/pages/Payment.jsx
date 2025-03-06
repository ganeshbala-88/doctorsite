import React from 'react';
import payment from '../assets/payment.jpg';
import './All.css';

const Payment = () => {
  function randomDate(start, end) {
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime);
  }

  // Set the start date to the current date and the end date to a future date
  const slotdate = randomDate(new Date(), new Date(2025, 4, 4)); 
  const formattedDate = slotdate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  console.log(formattedDate);

  return (
    <div className="payment">
      <h2>Your slot has been booked for {formattedDate}. To consult with a doctor, please ensure payment is completed.</h2>
      <img src={payment} alt="Payment methods" className="payment-img" />
    </div>
  );
};

export default Payment;