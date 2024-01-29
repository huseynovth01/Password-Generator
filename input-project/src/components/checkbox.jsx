import React from 'react';
import '../style/checkbox.css';

function Checkbox({ label, checked, onChange }) {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ color: 'red' }} />
      {label}
    </label>
  );
}

export default Checkbox;
