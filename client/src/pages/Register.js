import React from 'react';
import Form from '../components/Form';
import { userRegister } from '../api calls/users';

function Register() {
  const handleSubmit = async (formData) => {
    try {
      const response = await userRegister(formData);
      if (response && response.success) {
        console.log(response.message);
        window.location.href = "/update_profile";
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
