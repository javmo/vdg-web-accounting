// SignIn.js
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/SignIn.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);


const SignIn = () => {
  const { signInWithGoogle } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      setError('Error al iniciar sesión con Google');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      {/* ... */}
      <button className={styles.googleButton} onClick={handleGoogleSignIn} disabled={loading}>
        <FontAwesomeIcon icon={['fab', 'google']} /> Iniciar sesión con Google
      </button>
    </div>
  );
};

export default SignIn;
