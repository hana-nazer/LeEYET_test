import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import { userRegister, } from '../api calls/users';

function Register() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await userRegister(data);
      if (response && response.success) {
        console.log(response.message);
        setFormData(data);
        navigate('/home', { state: { formData: data } });
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form title="Register" onSubmit={handleSubmit} />
    </>
  );
}

export default Register;
