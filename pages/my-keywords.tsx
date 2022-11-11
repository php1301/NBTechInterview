import { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { useUser } from "@auth0/nextjs-auth0";

import { Button } from "@components/button";
import { Header } from "@components/header";
import { Container } from "@components/container";
import Table from "@components/table";
import { USER_COLUMNS } from "src/constants";
import { KeywordSearch } from "@components/index";

const MyKeywords: NextPage = () => {
    const { user, isLoading } = useUser();
    const [result, setResult] = useState([]);
    const router = useRouter();

    if (!isLoading && !user) {
        router.push("/");
    }
    const resultTable = () => {
        return <Table className="my-4" columns={USER_COLUMNS} data={result} />;
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
                        YOUR KEYWORDS {user?.email}
                    </h1>
                    <Button
                        onClick={() => {
                            router.push("/");
                        }}
                        className="h-2/4 my-6"
                    >
                        Back To Homepage
                    </Button>
                    <KeywordSearch user={user} setResult={setResult} />
                </div>
                {result.length > 0 && resultTable()}
            </div>
        </Container>
    );
};
export default MyKeywords;
