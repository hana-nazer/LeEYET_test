const validateForm = (name, password, address) => {
    const errors = {};
  
    if (!name) {
      errors.name = "Name is required";
    } else if (name.length < 2) {
      errors.name = "Name should be at least 2 characters long";
    } else if (name.length > 50) {
      errors.name = "Name should be less than 50 characters";
    }
  
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 4) {
      errors.password = "Password should be at least 4 characters long";
    } else if (password.length > 20) {
      errors.password = "Password should be less than 20 characters";
    }
  
    if (!address) {
      errors.address = "Address is required";
    }
    return errors;
  };
  
  export default validateForm;
  