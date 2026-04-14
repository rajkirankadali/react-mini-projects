import React, { useState, useEffect } from 'react';

function DigitalClock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridian = hours >= 12 ? "PM" : "AM";

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds} ${meridian}`;
  };

  return (
    <>
    <div className='Digital-clock-main'>
        <h4>*5) Learnt useEffect Hook and made a Digital Clock using useState, useEffect Hooks.*</h4>
        <div className="clock-container">
        <h1>Digital Clock</h1>
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
        </div>
    </div>
    
    </>
    
  );
}

export default DigitalClock;