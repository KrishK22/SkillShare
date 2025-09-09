"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react"; // make sure to import from next-auth/react
import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const router = useRouter();
    return (
        <Button
            onClick={() => {
                signOut({ callbackUrl: "/" }); // optional redirect after logout
                router.refresh()
            }}
        >
            Logout
        </Button>
    );
};

export default LogoutButton;
