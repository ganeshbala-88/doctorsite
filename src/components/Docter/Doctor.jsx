import React from 'react';
import Home1 from "../../assets/home1.jpg";
import Home2 from "../../assets/home2.jpg";
import Home3 from "../../assets/home3.jpg";
import "./Docter.css";
import "./Button"
import Button from './Button';

const Doctor = () => {
  return (
    <section className='docter'>
      <div className='place-middle'>
        <div className='docter-description'>
          <h1>We help Patients Live a Healthy, Longer Life</h1>
          <p>Welcome to Medicare, where your health is our priority. Our team of experienced doctors is committed to providing compassionate, personalized care using the latest medical advancements. Whether you need a routine check-up, specialized treatment, or expert medical advice, we are here to support you on your journey to wellness. Book an appointment today and take the first step toward a healthier life.At Medicare, we prioritize your health with expert care and personalized treatment. Book an appointment today for a healthier tomorrow.</p>
          <Button/>
        </div>
        <div className='images-format'>
          <img src={Home1} alt='home1' className='home home1' />
          <img src={Home2} alt='home1' className='home home2' />
          <img src={Home3} alt='home1' className='home home3' />
        </div>
      </div>
    </section>
  );
};

export default Doctor;