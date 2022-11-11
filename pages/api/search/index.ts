import conn from "@libs/db";
import { getSearchResults } from "@libs/google-search";
import { SearchResponseType } from "src/types/search";

export default async (req, res) => {
    const results: any = [];
    const { user, keywords } = req.body?.payload;
    const query1 = {
        text: "INSERT into keyword.users(email) VALUES($1) ON CONFLICT ON CONSTRAINT email_unique DO NOTHING RETURNING email",
        values: [user?.email],
    };
    const query2 =
        " INSERT into keyword.keywords(keyword_name, total_adwords, total_links, total_search_results, html_code)" +
        " VALUES($1, $2, $3, $4, $5) ON CONFLICT ON CONSTRAINT keyword_name_unique" +
        " DO UPDATE set total_adwords=EXCLUDED.total_adwords, total_links=EXCLUDED.total_links, " +
        " total_search_results=EXCLUDED.total_search_results, html_code=EXCLUDED.html_code RETURNING keyword_name";
    const query3 =
        "INSERT into keyword.user_keyword(user_email, keyword_name) VALUES($1, $2) ON CONFLICT ON CONSTRAINT user_keyword_pk DO NOTHING";

    const client = await conn.connect();
    try {
        await client.query("BEGIN");
        await (
            await client.query(query1)
        )?.rows[0]?.email;
        // const keywords = ['a', 'b', 'c' ,....]
        for (const kw of keywords) {
            const { result }: { result: SearchResponseType } =
                await getSearchResults(kw.keywords);
            const insertKeywordValues = [
                result.keyword,
                result.totalAds,
                result.totalLinks,
                `${result.totalResults} - ${result.searchTime}`,
                result.htmlLink,
            ];
            const kwId = await (
                await client.query(query2, insertKeywordValues)
            )?.rows[0]?.keyword_name;

            await client.query(query3, [user?.email, kwId]);
            results.push(result);
        }
        await client.query("COMMIT");
        res.status(200).json({ results });
    } catch (e) {
        await client.query("ROLLBACK");
        res.status(500).json({ message: `Error ${e}` });
        console.log(e);
        throw e;
    } finally {
        client.release();
    }
};
