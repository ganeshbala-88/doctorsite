import React from 'react';
import payment from '../assets/payment.jpg';
import './All.css';

const Payment = () => {
  function randomDate(start, end) {
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime);
  }

  const slotdate = randomDate(new Date(2025, 0, 1), new Date()); 
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
      <h2>Your slot has been booked for {formattedDate}. To consult with a doctor, please ensure payment is completed. </h2>
      <img src={payment} alt="payments" className="payment-img" />
    </div>
  );
};

export default Payment;