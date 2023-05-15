import React, { useState } from "react";
import styles from "./FormStyles.module.css";
import validateForm from "./Validation";

const Form = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form fields
    const validationErrors = validateForm(name, password, address);

    // If there are validation errors, update the state and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Call the callback function passed as prop with the form data
    if (props.onSubmit) {
      props.onSubmit({ name, password, address });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>{props.title}</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={styles.input}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={styles.input}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>
              Address:
            </label>
            <input
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className={styles.input}
            />
            {errors.address && <p className={styles.error}>{errors.address}</p>}
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
          </form>
      </div>
    </div>
  );
};

export default Form;

