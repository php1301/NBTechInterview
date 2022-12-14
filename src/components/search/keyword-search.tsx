import React, { useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";

import { UserUploadSearchInputType } from "src/types/search";
import { UserProfile } from "@auth0/nextjs-auth0";
import { Button } from "@components/button";

interface KeywordSearchComponentProps {
    user: UserProfile | undefined;
    setResult: (...args) => void;
}

export const KeywordSearch: React.FC<KeywordSearchComponentProps> = ({
    user,
    setResult,
}) => {
    const [uploading, setUploading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserUploadSearchInputType>();
    const onSubmit = async ({ keyword }: UserUploadSearchInputType) => {
        try {
            setUploading(true);
            const results = await axios.post("/api/user-search", {
                payload: {
                    user,
                    keyword: keyword || "",
                },
            });
            const finalizedResult = results?.data?.result;
            console.log(finalizedResult);
            setResult(finalizedResult);
            setUploading(false);
        } catch (e) {
            setUploading(false);
            console.warn(e);
        }
    };

    return (
        <>
            <form onBlur={handleSubmit(onSubmit)}>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                    Search
                </label>
                <div className="relative">
                    <input
                        {...register("keyword")}
                        type="input"
                        id="default-search"
                        className="block my-6 p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search within your upload"
                    />
                    <Button
                        type="submit"
                        disabled={uploading}
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        {uploading ? "Searching..." : "Search"}
                    </Button>
                </div>
            </form>

            {errors?.keyword?.message && (
                <p className="my-2 text-xl text-red-500">
                    {errors?.keyword?.message}
                </p>
            )}
        </>
    );
};
