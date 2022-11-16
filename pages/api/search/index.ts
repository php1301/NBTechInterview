import { getSearchResults } from "@libs/google-search";
import { SearchResponseType } from "src/types/search";
import prisma from "@libs/prisma";

export default async (req, res) => {
    const results: any = [];
    const { user, keywords } = req.body?.payload;
    const currentUser = await prisma.user.upsert({
        where: {
            email: user?.email,
        },
        update: {},
        create: {
            email: user?.email,
        },
        select: {
            email: true,
        },
    });

    try {
        for (const kw of keywords) {
            const { result }: { result: SearchResponseType } =
                await getSearchResults(kw.keywords);

            const currentKeyword = await prisma.keyword.upsert({
                where: {
                    keyword_name: result?.keyword,
                },
                update: {
                    total_adwords: `${result?.totalAds}`,
                    total_links: `${result?.totalLinks}`,
                    total_search_results: `${result?.totalResults} - ${result?.searchTime}`,
                    html_code: result?.htmlLink,
                },
                create: {
                    keyword_name: result?.keyword,
                    total_adwords: `${result?.totalAds}`,
                    total_links: `${result?.totalLinks}`,
                    total_search_results: `${result?.totalResults} - ${result?.searchTime}`,
                    html_code: result?.htmlLink,
                },
                select: {
                    keyword_name: true,
                },
            });
            await prisma.userKeyword.upsert({
                where: {
                    user_email_keyword_name: {
                        user_email: currentUser?.email,
                        keyword_name: currentKeyword?.keyword_name,
                    },
                },
                update: {},
                create: {
                    user_email: currentUser?.email,
                    keyword_name: currentKeyword?.keyword_name,
                },
            });

            results.push(result);
        }
        res.status(200).json({ results });
    } catch (e) {
        res.status(500).json({ message: `Error ${e}` });
        console.log(e);
        throw e;
    }
};
