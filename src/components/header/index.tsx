import React from "react";

import { useUser } from "@auth0/nextjs-auth0";

import { Logo, Button } from "@components";

export const Header: React.FC = () => {
    const { user } = useUser();

    return (
        <div
            className="text-center flex justify-between h-32 items-center px-4"
            data-testid="container"
        >
            <Logo />
            {user && (
                <Button className="h-2/4">
                    <a data-test="logout-btn-anchor" href="/api/auth/logout">
                        Logout
                    </a>{" "}
                </Button>
            )}
        </div>
    );
};
