import React from "react";

import { Button, Header } from "@components";
import { useUser } from "@auth0/nextjs-auth0";

export const Main: React.FC = () => {
    const { user, isLoading } = useUser();

    // you can use the error and loading state to show an error message or a loading spinner while loading.
    if (isLoading) {
        return (
            <div className="text-5xl font-semibold text-center text-indigo-600">
                ...loading{" "}
            </div>
        );
    }

    // if (error) {
    //     return (
    //         <div className="text-5xl font-semibold text-center text-indigo-600">
    //             {error.message}
    //         </div>
    //     );
    // }
    return (
        <div className="text-center font-light py-5 bg-gray-700">
            <Header />
            <div className="container mx-auto">
                <h1
                    data-test="main-heading"
                    className="text-white text-8xl mb-2"
                >
                    Nimble Tech Interview {user?.email || ""}
                </h1>
                <p className="text-lg text-white mb-3 py-4">
                    Technical Test for Nimble
                </p>
                <Button type="button">
                    <a
                        data-test="docs-btn-anchor"
                        href="https://github.com/php1301/NBTechInterview"
                        target="_blank"
                    >
                        Docs
                    </a>
                </Button>
                {!user && (
                    <Button type="button">
                        <a data-test="docs-btn-login" href="/api/auth/login">
                            Login
                        </a>
                    </Button>
                )}
                {user && (
                    <Button type="button">
                        <a data-test="docs-btn-application" href="/search">
                            Application
                        </a>
                    </Button>
                )}
                {user && (
                    <Button type="button">
                        <a
                            data-test="docs-btn-application-keyword"
                            href="/my-keywords"
                        >
                            Your Keywords
                        </a>
                    </Button>
                )}
            </div>
        </div>
    );
};
