import React from "react";
import { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { DehydratedState, QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

import "tailwindcss/tailwind.css";
import "@styles/global.scss";

function MyApp({
    Component,
    pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                </Hydrate>
            </UserProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
