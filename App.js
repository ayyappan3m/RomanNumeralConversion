import React, { useState } from 'react';
import './App.css'; // Importing the CSS file for light/dark mode styling

function App() {
  const [number, setNumber] = useState('');
  const [romanNumeral, setRomanNumeral] = useState('');
  const [theme, setTheme] = useState('light'); // Light mode as default

  // Handle the input change for the number field
  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  // Handle the conversion button click
  const handleConvert = async () => {
    if (number >= 1 && number <= 3999) {
      try {
        // Make a request to the Roman numeral API
        const response = await fetch(`http://localhost:8080/romannumeral?query=${number}`);
        const data = await response.json();
        setRomanNumeral(data.output); // Display the Roman numeral
      } catch (error) {
        setRomanNumeral('Error: Unable to fetch Roman numeral.');
      }
    } else {
      setRomanNumeral('Please enter a number between 1 and 3999.');
    }
  };

  // Handle theme toggle between light and dark modes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <h1>Roman Numeral Converter</h1>
        <div>
          <input
            type="number"
            value={number}
            onChange={handleInputChange}
            placeholder="Enter a number"
            min="1"
            max="3999"
          />
        </div>
        <button onClick={handleConvert}>Convert to Roman Numeral</button>
        <div>
          <p>Roman numeral: {romanNumeral}</p>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
}

export default App;
