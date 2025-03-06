import React, { useState, useEffect } from 'react';
import data from '../records.json';
import Button from '../components/Docter/Button';
import { Link } from 'react-router-dom';

const Finddocter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSearch = () => {
      const filtered = data.filter((doctor) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          doctor.name.toLowerCase().includes(searchLower) ||
          doctor.specialization.toLowerCase().includes(searchLower) ||
          doctor.location.toLowerCase().includes(searchLower)
        );
      });
      setFilteredDoctors(filtered);
      setLoading(false);
    };

    handleSearch();
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSpecializationClick = (specialization) => {
    setSearchTerm(specialization);
  };

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className="find-doctor-container">
      <h1>Find a Doctor</h1>
      <div className="search-input-container">
        <label htmlFor="doctorSearch">Search doctors:</label>
        <input
          type="text"
          id="doctorSearch"
          placeholder="Search doctors by name, specialization, or location"
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
      </div>
      <div className="doctors-list">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card"> 
            <img src={doctor.photo} alt={doctor.name.toUpperCase()} className="doctor-image" />
            <h2>{doctor.name}</h2>
            <p>
              Specialization: <button onClick={() => handleSpecializationClick(doctor.specialization)} className='parabtn'>{doctor.specialization.toLocaleUpperCase()}</button>
            </p>
            <p>Location: {doctor.location}</p>
            <Link to="/payments" className="book-appointment-link">
              <Button />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Finddocter;