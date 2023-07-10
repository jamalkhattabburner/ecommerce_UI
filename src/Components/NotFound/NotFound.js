import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="not-found-container">
        <h1>404 - Oups!  </h1>
        <p>The requested URL <code>{location.pathname}</code> was not found.</p>
        <Link to="/" className="home-button">Go back Home</Link>
    </div>
  );
};

export default NotFound;