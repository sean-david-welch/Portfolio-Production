'use client';
import { useState, Suspense } from 'react';
import { ProfileForm } from './ProfileForm';

export const ProfileFormWrapper = ({ user }: any) => {
    const [showProfileForm, setShowProfileForm] = useState(false);

    return (
        <>
            <button onClick={() => setShowProfileForm(!showProfileForm)}>
                Toggle Profile Form
            </button>
            {showProfileForm && (
                <Suspense fallback={<p>Loading Profile Form...</p>}>
                    <ProfileForm user={user} />
                </Suspense>
            )}
        </>
    );
};
