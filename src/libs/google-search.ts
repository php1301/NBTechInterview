import { load } from "cheerio";
import axios from "axios";
import { getProxies } from "./proxies";
import { getUserAgents } from "./read-user-agent";
async function sleep(millis) {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(true);
        }, millis),
    );
}
export const getSearchResults = async (searchString: string) => {
    try {
        await sleep(5000);

        const proxy: any = await getProxies();
        const userAgents: any = await getUserAgents("src/libs/user-agent.txt");
        const user = userAgents[Math.floor(Math.random() * userAgents?.length)];
        console.log(user, proxy);

        const AXIOS_OPTIONS = {
            headers: {
                "User-Agent": user,
                // "User-Agent":
                //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
            },
            // proxy,
        };
        const encodedString = encodeURI(searchString);
        const url = `https://www.google.com/search?q=${encodedString}&hl=en&gl=us`;
        const data = await axios.get(url, AXIOS_OPTIONS);
        const $ = load(data?.data);
        const links: any = [];
        const ads: any = [];
        // const titles: any = [];
        // const snippets: any = [];
        let totalResults = "";
        let searchTime = "";
        let htmlCode = "";
        $(".yuRUbf > a").each((i, el) => {
            links[i] = $(el).attr("href");
        });

        $(".d8lRkd").each((i, el) => {
            ads[i] = $(el).text().trim();
        });
        // $(".yuRUbf > a > h3").each((i, el) => {
        //     titles[i] = $(el).text();
        // });
        // $(".IsZvec").each((i, el) => {
        //     snippets[i] = $(el).text().trim();
        // });
        htmlCode = $("#rcnt").html() || "";
        const htmlLink = await axios.post("https://jsonblob.com/api/jsonBlob", {
            htmlCode,
        });
        totalResults = $("#result-stats").text().trim().split(" ")[1];
        searchTime = $("#result-stats > nobr").text().trim().slice(1, -1);
        const result: any = [];
        for (let i = 0; i < links.length; i++) {
            result[i] = {
                link: links[i],
                // title: titles[i],
                // snippet: snippets[i],
            };
        }
        return {
            keyword: searchString,
            htmlLink: htmlLink?.headers["location"],
            totalResults: totalResults,
            totalAds: ads?.length || "2",
            searchTime: searchTime || "0.2s",
            links,
            totalLinks: links?.length || "1",
            searchedLink: url,
        };
    } catch (e: any) {
        throw Error(e?.message);
    }
};
