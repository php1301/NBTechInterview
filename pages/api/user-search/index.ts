import prisma from "@libs/prisma";

export default async (req, res) => {
    try {
        const { user, keyword } = req.body?.payload;

        const getSearchResults = await prisma.userKeyword.findMany({
            where: {
                user_email: user?.email,
                keyword_name: {
                    contains: keyword,
                },
            },
            include: {
                keyword: true,
            },
        });
        console.log(getSearchResults);
        res.status(200).json({ result: getSearchResults });
    } catch (e) {
        res.status(500).json({ message: `Error ${e}` });
        console.log(e);
    }
};
