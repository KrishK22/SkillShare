"use client";
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const LoginButton = () => {
    const router = useRouter();

    const handleButton = () => {
        router.push('/login'); // client-side navigation
        router.refresh()
    };

    return (
        <Button onClick={handleButton}>Login</Button>
    );
};

export default LoginButton;
