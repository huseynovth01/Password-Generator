import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faRotate } from '@fortawesome/free-solid-svg-icons';
// components
import Checkbox from './components/checkbox.jsx';
// style
import './App.css';

function App() {
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(parseInt(e.target.value));
  };

  const handleGeneratePasswordClick = () => {
    let charset = '';
    if (useNumbers) charset += '0123456789';
    if (useSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    setGeneratedPassword(password);
  };

  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  return (
    <div className='container'>
      <h2>Customize your password</h2>
      <Checkbox
        label="Numbers"
        checked={useNumbers}
        onChange={(e) => setUseNumbers(e.target.checked)}
      />
      <Checkbox
        label="Symbols"
        checked={useSymbols}
        onChange={(e) => setUseSymbols(e.target.checked)}
      />
      <label htmlFor="password-length-input">
        Password length: {passwordLength}
      </label>
      
        <input
          id="password-length-input"
          type="range"
          min="8"
          max="32"
          value={passwordLength}
          onChange={handlePasswordLengthChange}
        />
        <div className='btns'>
        <button onClick={handleGeneratePasswordClick} className="generate-btn">
        <FontAwesomeIcon icon={faRotate} spin />
        </button>
        <button onClick={handleCopyButtonClick} className="copy-btn">
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
      <p>{generatedPassword}</p>
      
    </div>
  );
}

export default App;
