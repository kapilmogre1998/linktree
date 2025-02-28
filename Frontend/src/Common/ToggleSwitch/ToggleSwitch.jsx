import React, { useState } from 'react';
import './ToggleSwitch.scss';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div
      className={`toggle-switch ${isOn ? 'on' : ''}`}
      onClick={toggle}
    >
      <div className="toggle-switch-handle" />
    </div>
  );
};

export default ToggleSwitch;
