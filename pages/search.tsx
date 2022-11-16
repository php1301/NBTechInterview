import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { useUser } from "@auth0/nextjs-auth0";

import { Button } from "@components/button";
import { Header } from "@components/header";
import { Container } from "@components/container";
import { Search } from "@components/search";
import Table from "@components/table";
import { COLUMNS, RESULT_COLUMNS } from "src/constants";

const SearchPage: NextPage = () => {
    const { user, isLoading } = useUser();
    const [uploading, setUploading] = useState(false);
    const [search, setSearch] = useState([]);
    const [result, setResult] = useState([]);
    const router = useRouter();

    if (!isLoading && !user) {
        router.push("/");
    }
    const resultTable = () => {
        return uploading ? (
            <p className="text-green-400">
                LOADING SUCCESS SCRAPING KEYWORDS...
            </p>
        ) : (
            <Table className="my-4" columns={RESULT_COLUMNS} data={result} />
        );
    };
    return (
        <Container>
            <div className="text-center font-light py-5 bg-gray-700">
                <Header />
                <div className="container mx-auto">
                    <h1
                        data-test="main-heading"
                        className="text-white text-2xl mb-6"
                    >
                        Welcome {user?.email || ""}
                    </h1>
                    <Button
                        onClick={() => {
                            router.push("/");
                        }}
                        className="h-2/4 my-6"
                    >
                        Back To Homepage
                    </Button>
                    <Search
                        user={user}
                        uploading={uploading}
                        setUploading={setUploading}
                        setSearch={setSearch}
                        setResult={setResult}
                    />
                </div>
                <Table columns={COLUMNS} data={search} />
                {(result.length > 0 || uploading) && resultTable()}
            </div>
        </Container>
    );
};

export default SearchPage;
