

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import App from './App';

const Auth = () => {
  const [authenticateUser, setAuthenticateUser] = useState(false); 

  return (
    <Routes>
      <Route
        path="/"
        element={authenticateUser ? <App /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={
          authenticateUser ? (
            <Navigate to="/" />
          ) : (
            <Login setAuthenticateUser={setAuthenticateUser} />
          )
        }
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Auth;
