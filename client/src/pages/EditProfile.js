// EditProfile.js
import React, { useState } from 'react';
import Form from '../components/Form';
import { updateUserProfile } from '../api calls/users';

function EditProfile() {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (data) => {
    try {
      const response = await updateUserProfile(data.id, data);
      if (response && response.success) {
        console.log(response.message);
        // Optionally, you can set a success message or perform any other action
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form title="Update Profile" onSubmit={handleSubmit} formData={formData} />
    </>
  );
}

export default EditProfile;
