import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";
import { useForm } from "react-hook-form";
import Papa from "papaparse";

import { Button } from "@components/button";
import { Header } from "@components/header";
import { Container } from "@components/container";
import { SearchInputType } from "src/types/search";

const Search: NextPage = () => {
    const { user, isLoading } = useUser();
    const [uploading, setUploading] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SearchInputType>();

    if (!isLoading && !user) {
        router.push("/");
    }
    const onSubmit = ({ keywords }: SearchInputType) => {
        try {
            setUploading(true);
            const reader = new FileReader();
            reader.onloadend = async ({ target }) => {
                const csv = Papa.parse(target?.result, { header: true });
                await axios.post("/api/search", {
                    payload: {
                        user,
                        keywords: csv?.data?.slice(0, -1),
                    },
                });
            };

            reader.readAsText(keywords[0]);
            setUploading(false);
        } catch (e) {
            setUploading(false);
            console.warn(e);
        }
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <input
                                {...register("keywords", {
                                    required: "Please enter keywordss list",
                                })}
                                type="file"
                                accept=".csv"
                                id="default-search"
                                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Input Search keywordss"
                            />
                            <Button
                                type="submit"
                                disabled={uploading}
                                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                {uploading ? "Uploading..." : "Upload"}
                            </Button>
                        </div>
                    </form>
                    <p className="mt-1 text-sm text-white" id="file_input_help">
                        Please upload CSV file of keywordss
                    </p>

                    {errors?.keywords?.message && (
                        <p className="my-2 text-xl text-red-500">
                            {errors?.keywords?.message}
                        </p>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default Search;
