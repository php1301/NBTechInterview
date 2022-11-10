import React, { useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import Papa from "papaparse";

import { SearchInputType } from "src/types/search";
import { UserProfile } from "@auth0/nextjs-auth0";
import { Button } from "@components/button";
import { MOCK_RESULT } from "src/constants";

interface SearchComponentProps {
    user: UserProfile | undefined;
    setSearch: (...args) => void;
    setResult: (...args) => void;
}

export const Search: React.FC<SearchComponentProps> = ({
    user,
    setSearch,
    setResult,
}) => {
    const [uploading, setUploading] = useState(false);
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<SearchInputType>();
    const onSubmit = ({ keywords }: SearchInputType) => {
        try {
            if (keywords[0].type !== "text/csv") {
                setError("keywords", {
                    type: "filetype",
                    message: "Only CSV file is valid.",
                });
                setUploading(false);
            }
            setUploading(true);
            const reader = new FileReader();
            reader.onloadend = async ({ target }) => {
                const csv = await Papa.parse(target?.result, { header: true });
                setSearch(csv?.data?.slice(0, -1));
                const results = await axios.post("/api/search", {
                    payload: {
                        user,
                        keywords: csv?.data?.slice(0, -1),
                    },
                });
                // const results = MOCK_RESULT;
                console.log(results);
                setResult(results?.data?.results);
            };

            reader.readAsText(keywords[0]);
            setUploading(false);
        } catch (e) {
            setUploading(false);
            console.warn(e);
        }
    };

    return (
        <>
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
                            required: "Please enter keywords list",
                        })}
                        type="file"
                        accept=".csv"
                        id="default-search"
                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Upload Search keywords"
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
                Please upload CSV file of keywords
            </p>

            {errors?.keywords?.message && (
                <p className="my-2 text-xl text-red-500">
                    {errors?.keywords?.message}
                </p>
            )}
        </>
    );
};
