import React, { useState, useEffect } from 'react';
import symptomsData from '../symptom.json'; // Adjust the path as necessary


const SymptomAnalyzer = () => {
  const [inputSymptom, setInputSymptom] = useState('');
  const [suggestedConditions, setSuggestedConditions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [symptomTags, setSymptomTags] = useState([]);

  useEffect(() => {
    if (inputSymptom) {
      setLoading(true);
      const foundSymptom = symptomsData.find(symptom => symptom.symptom.toLowerCase() === inputSymptom.toLowerCase());
      if (foundSymptom) {
        setSuggestedConditions(foundSymptom.conditions);
      } else {
        setSuggestedConditions([]);
      }
      setLoading(false);
    } else {
      setSuggestedConditions([]);
    }
  }, [inputSymptom]);

  const handleInputChange = (e) => {
    setInputSymptom(e.target.value);
  };

  const handleTagClick = (symptom) => {
    setInputSymptom(symptom);
  };

  
  useEffect(() => {
    const tags = symptomsData.map(symptom => symptom.symptom);
    setSymptomTags(tags);
  }, []);

  return (
   <div className='sympton-page'>
     <div className="symptom-analyzer-container">
      <h1>Symptom Analyzer</h1>
      <input
        type="text"
        placeholder="Enter your symptom"
        value={inputSymptom}
        onChange={handleInputChange}
      />
      {loading && <p>Loading...</p>}
      
      {suggestedConditions.length === 0 && inputSymptom && !loading && (
        <p>No conditions found for this symptom.</p>
      )}
      <div className="symptom-tags">
        <h3>Common Symptoms:</h3>
        {symptomTags.map((symptom, index) => (
          <span key={index} className="symptom-tag" onClick={() => handleTagClick(symptom)}>
            {symptom}
          </span>
        ))}
      </div>
      <br />
      <hr />
      {suggestedConditions.length > 0 && (
        <div className="suggestions">
          <h2>Possible Conditions:</h2>
          <div className="conditions-list">
            {suggestedConditions.map((condition, index) => (
              <div key={index} className="condition-card">
                {condition}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
   </div>
  );
};

export default SymptomAnalyzer;