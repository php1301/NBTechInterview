import axios from "axios";
import axiosRetry from "axios-retry";

export const getSearchResults = async (searchString: string) => {
    try {
        console.log("keyword searching", searchString);
        axiosRetry(axios, {
            retries: 3, // number of retries
            retryDelay: (retryCount) => {
                console.log(`RETRY ATTEMPT: ${retryCount}`);
                return retryCount * 2000; // time interval between retries
            },
            retryCondition: (error) => {
                // return error?.response?.status === 500 || error?.response?.status === 504;
                return error?.response?.status === 500;
            },
        });

        const url =
            "https://mkszeithdnwbiisviije4yvjua0dicti.lambda-url.us-east-1.on.aws/scrapeGoogle";
        // "https://v0vgxe4ad2.execute-api.us-east-1.amazonaws.com/dev/scrapeGoogle";
        const { data } = await axios.post(url, {
            kw: searchString,
        });
        return data;
    } catch (e: any) {
        throw Error(e?.message);
    }
};
