import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../../config/firebase'; // Importar auth y firestore
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import styles from '../../assets/styles/Profile.module.css';

// Profile.js
// ...
const Profile = () => {
    const [user, setUser] = useState(null);
    // ...
    useEffect(() => {
        const fetchUser = async () => {
            if (auth.currentUser) {
                // Obtener el UID del usuario actual
                const uid = auth.currentUser.uid;

                // Obtener datos adicionales del usuario desde Firestore
                const userDoc = await getDoc(doc(firestore, 'users', uid));
                const userData = userDoc.data();

                // Combina la información básica del usuario con los datos adicionales de Firestore
                const user = {
                    uid,
                    displayName: auth.currentUser.displayName,
                    email: auth.currentUser.email,
                    photoURL: auth.currentUser.photoURL,
                    ...userData
                };

                setUser(user);
                console.log(user);
                
            }
        };

        // Escuchar cambios en el estado de autenticación
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUser();
            } else {
                console.log("comtario de test");
                setUser(null);
            }
        });

        // Limpiar el listener al desmontar el componente
        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <div className={styles.profileContainer}>
            {user && (
                <div className={styles.userInfo}>
                    <img className={styles.userImage} src={user.photoURL} alt={user.displayName} />
                    <h2 className={styles.userName}>{user.displayName}</h2>
                    <p className={styles.userEmail}>{user.email}</p>
                </div>
            )}
        </div>
    );

};

export default Profile;