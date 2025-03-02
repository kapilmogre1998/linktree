import React, { useEffect, useRef, useState } from 'react';
import './ToggleSwitch.scss';

const ToggleSwitch = ({ addLink, toggle = false }) => {
  // const [isOn, setIsOn] = useState(bool);
  const timeOutId = useRef(null);

  const handleToggle = () => {
    // setIsOn(!isOn);
    if(!toggle){
     timeOutId.current = setTimeout(() => {
        addLink();
      }, 200)
    }
  }

  useEffect(() => {

    return () => {
      clearTimeout(timeOutId.current);
    }
  },[])

  return (
    <div
      className={`toggle-switch ${toggle ? 'on' : ''}`}
      onClick={handleToggle}
    >
      <div className="toggle-switch-handle" />
    </div>
  );
};

export default ToggleSwitch;
