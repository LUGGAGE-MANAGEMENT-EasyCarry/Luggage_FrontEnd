import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import axios from 'axios'; 

const Login = () => {
  const navigate = useNavigate();

  const [authenticateUser, setAuthenticateUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    axios.post("http://localhost:7078/api/auth/authenticate", authenticateUser)
      .then(response => {
        setAuthenticateUser(true); 
        navigate('/homepage');
        console.log(response.data);
        console.log("geldi")
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        console.log("gelmedi")
      });
  }
  const onInputAdd = (fieldName, value) => {
    setAuthenticateUser(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">LOGIN</h2>
        <form>
        <div className="mb-4">
             <TextBoxComponent
              type="text"
              name="email"
              value={authenticateUser.email}
              onChange={(e) => onInputAdd('email', e.target.value)}
              placeholder="E-mail Adress"
              floatLabelType="Auto"
            />
        </div>
          <div className="mb-4">
            <TextBoxComponent
              type="password"
              name="password"
              value={authenticateUser.password}
              onChange={(e) => onInputAdd('password', e.target.value)}
              placeholder="Password"
              floatLabelType="Auto"
            />
          </div>
          <div className="mb-4">
          <Button
                color="white"
                bgColor="gray"
                text="Login"
                borderRadius="10px"
                size="md"
                className="mt-10"
                onClick={handleLogin}
             />
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
