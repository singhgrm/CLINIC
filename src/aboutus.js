import React from 'react';
import './Homepage.css';
// import {Routes, Route, useNavigate} from 'react-router-dom';

import { useState } from 'react';

// Component to be opened on click
const Aboutus = () => {
  return <div>This is another component!</div>;
};

// Main component
const MainComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div>
     <h1>Main Component</h1>
      <button onClick={handleClick}>Open Another Component</button>
      {isOpen && <Aboutus />}
    </div>
  );
};

export default MainComponent;

