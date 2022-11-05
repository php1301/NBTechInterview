import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <div className="text-center font-light py-5 bg-gray-700">
            <div className="container mx-auto">
                <h1
                    data-test="main-heading"
                    className="text-white text-8xl mb-2"
                >
                    Nimble Tech Interview
                </h1>
                <p className="text-lg text-white mb-3">
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
            </div>
        </div>
    );
};
