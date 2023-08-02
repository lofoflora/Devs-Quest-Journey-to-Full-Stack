// Emplacement : /components/Question.js

import React, { useState } from 'react';

const Question = ({ question, options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    onAnswer(selectedOption === question.correctOption);
  };

  return (
    <div>
      <h3>{question.text}</h3>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Valider</button>
    </div>
  );
};

export default Question;
