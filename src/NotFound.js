import React from 'react';
import "./NotFound.css";
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  const goHome = () => {
    history.push('/');
  };
  return (
    <div>
      <h1>Oops... We could not find this file. Please return to the main page.</h1>
      <div className="d-flex justify-content-center">
        <button onClick={goHome}>Back To Main Page</button>
      </div>
    </div>
  );
};

export default NotFound;