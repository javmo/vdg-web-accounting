import React, { useEffect, useState } from 'react';

import styles from './DashboardPage.module.css';
import WalletConnection from '../../components/wallet/WalletConnection';
import Profile from '../../components/common/Profile';
import AddAccountForm from '../../components/common/AddAccountForm';
import AccountList from '../../components/common/AccountList';

const DashboardPage = () => {

    return (
        <div>
            <div className={styles.profileContainer}>
                <Profile />
            </div>
            <div className={styles.walletContainer}>
                <WalletConnection />
            </div>
            <div>
                <AddAccountForm />
            </div>
            <div>
                <AccountList />
            </div>
        </div>
    );
};

export default DashboardPage;
