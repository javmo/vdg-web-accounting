// AuthPage.js
import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import SignIn from '../../components/common/SignIn';
import styles from './AuthPage.module.css';

const AuthPage = () => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authHeader}>
        <Logo className={styles.logo} />
        <h1>Bienvenido de nuevo</h1>
      </div>
      <div className={styles.authFormContainer}>
        <SignIn />
      </div>
    </div>
  );
};

export default AuthPage;
