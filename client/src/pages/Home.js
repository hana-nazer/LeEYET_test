// Home.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../components/Home.module.css';

function Home() {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/update_profile', { state: { formData } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.heading}>Welcome to Home</h2>
        <p className={styles.label}>Name: {formData.name}</p>
        <p className={styles.label}>Password: {formData.password}</p>
        <p className={styles.label}>Address: {formData.address}</p>
        <button className={styles.button} onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default Home;
