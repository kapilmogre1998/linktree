import React, { useEffect, useRef, useState } from 'react';
import './ToggleSwitch.scss';

const ToggleSwitch = ({ addLink, bool = false }) => {
  const [isOn, setIsOn] = useState(bool);
  const timeOutId = useRef(null);

  const toggle = () => {
    setIsOn(!isOn);
    if(!isOn){
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
      className={`toggle-switch ${isOn ? 'on' : ''}`}
      onClick={toggle}
    >
      <div className="toggle-switch-handle" />
    </div>
  );
};

export default ToggleSwitch;
