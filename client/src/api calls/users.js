import api from './axios';

export const userRegister = async (payload) => {
  try {
    const response = await api.post("/register", payload);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const updateUserProfile = async (id, payload) => {
  try {
    const response = await api.put(`/users/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};