import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Profile = () => {
    return(
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <AppLayout>
                <div>
                    Profile!
                </div>
            </AppLayout>
        </>
    )
}

export default Profile;