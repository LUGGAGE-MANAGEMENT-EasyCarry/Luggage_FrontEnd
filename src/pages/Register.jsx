import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Button } from '../components';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import axios from 'axios';

const Register = () => {
   const navigate = useNavigate();
   const [createUser, setCreateUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    axios.post("http://localhost:7078/api/auth/register", createUser)
      .then(response => {
        setCreateUser(response.data)
        navigate("/login")
        console.log("geldi")
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        console.log("gelmedi")
      });
  }
  const onInputAdd = (fieldName, value) => {
    setCreateUser(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
        <form >
          <div className="mb-4">
              <TextBoxComponent
              type="text"
              name="username"
              value={createUser.username}
              onChange={(e) => onInputAdd('username', e.target.value)}
              placeholder="Full Name"
              floatLabelType="Auto"
            />
          </div>
          <div className="mb-4">
             <TextBoxComponent
              type="text"
              name="email"
              value={createUser.email}
              onChange={(e) => onInputAdd('email', e.target.value)}
              placeholder="E-mail Adress"
              floatLabelType="Auto"
            />
          </div>
          <div className="mb-4">
            <TextBoxComponent
              type="text"
              name="password"
              value={createUser.password}
              onChange={(e) => onInputAdd('password', e.target.value)}
              placeholder="Password"
              floatLabelType="Auto"
            />
          </div>
          <div className="mb-4">
          <Button
                color="white"
                bgColor="gray"
                text="Create User"
                borderRadius="10px"
                size="md"
                className="mt-10"
                onClick={handleRegister}
             />
          </div>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default Register;